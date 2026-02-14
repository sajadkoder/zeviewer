"use client";

import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { supabase, Review, UserModel } from "@/lib/supabase";
import { aiModels, AIModel } from "@/data/models";

const ModelCard = memo(function ModelCard({ model, stats, onClick }: { model: AIModel; stats: { count: number; avg: number }; onClick: () => void }) {
  return (
    <div className="model-card reveal cursor-pointer" onClick={onClick}>
      <div className="flex items-start justify-between mb-4">
        <div className="min-w-0 flex-1">
          <span className="badge badge-ai mb-2 inline-block">{model.category}</span>
          <h3 className="text-lg font-medium truncate">
            {model.new && <span className="badge badge-new mr-1">NEW</span>}
            {model.openSource && <span className="badge badge-open-source mr-1">OPEN SOURCE</span>}
            {model.isUser && <span className="badge mr-1" style={{ background: "rgba(168,85,247,0.2)", color: "#a855f7" }}>COMMUNITY</span>}
            {model.name}
          </h3>
          <p className="text-[#a8a49e] text-sm truncate">{model.company}</p>
        </div>
        <svg className="w-5 h-5 text-[#a8a49e] flex-shrink-0 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <p className="text-[#a8a49e] text-sm mb-4 line-clamp-2">{model.description}</p>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-[#a8a49e]">{stats.count} review{stats.count !== 1 ? "s" : ""}</span>
        {stats.avg > 0 && (
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>{stats.avg.toFixed(1)}</span>
          </div>
        )}
      </div>
    </div>
  );
});

export default function Home() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userModels, setUserModels] = useState<UserModel[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentRating, setCurrentRating] = useState(0);
  const [currentDetailModelId, setCurrentDetailModelId] = useState<number | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAddModelModal, setShowAddModelModal] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [authError, setAuthError] = useState("");
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" }>({ show: false, message: "", type: "success" });
  const [selectedModelId, setSelectedModelId] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getAllModels = useCallback(() => {
    const userMapped = userModels.map((m) => ({
      id: m.id,
      name: m.name,
      company: m.company,
      category: m.category,
      description: m.description,
      openSource: m.is_open_source,
      isUser: true,
      new: true,
    }));
    return [...aiModels, ...userMapped];
  }, [userModels]);

  const getModelStats = (modelId: number) => {
    const modelReviews = reviews.filter((r) => r.model_id === modelId);
    const count = modelReviews.length;
    const avg = count > 0 ? modelReviews.reduce((s, r) => s + r.rating, 0) / count : 0;
    return { count, avg };
  };

  const loadData = async () => {
    try {
      const { data: reviewData } = await supabase.from("reviews").select("*").order("created_at", { ascending: false });
      if (reviewData) setReviews(reviewData);
    } catch (e) {
      console.log("Reviews table not available");
    }
    try {
      const { data: modelData } = await supabase.from("user_models").select("*").order("created_at", { ascending: false });
      if (modelData) setUserModels(modelData);
    } catch (e) {
      console.log("User models table not available");
    }
  };

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setCurrentUser(session.user);
      }
    } catch (e) {
      console.log("Auth error");
    }
  };

  useEffect(() => {
    loadData();
    checkAuth();
    setupScrollReveal();
  }, []);

  const setupScrollReveal = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  };

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 3000);
  };

  const allModels = useMemo(() => getAllModels(), [userModels]);
  
  const filteredModels = useMemo(() => {
    return allModels.filter((m) => {
      const searchLower = searchQuery.toLowerCase();
      const searchMatch =
        !searchQuery ||
        m.name.toLowerCase().includes(searchLower) ||
        m.company.toLowerCase().includes(searchLower) ||
        m.description.toLowerCase().includes(searchLower);
      const filterMatch =
        currentFilter === "all" ||
        m.category === currentFilter ||
        (currentFilter === "open-source" && m.openSource);
      return searchMatch && filterMatch;
    });
  }, [allModels, searchQuery, currentFilter]);

  const modelStatsMap = useMemo(() => {
    const map: Record<number, { count: number; avg: number }> = {};
    for (const model of allModels) {
      const modelReviews = reviews.filter((r) => r.model_id === model.id);
      const count = modelReviews.length;
      const avg = count > 0 ? modelReviews.reduce((s, r) => s + r.rating, 0) / count : 0;
      map[model.id] = { count, avg };
    }
    return map;
  }, [allModels, reviews]);

  const companiesCount = useMemo(() => new Set(allModels.map((m) => m.company)).size, [allModels]);
  const categoriesCount = useMemo(() => new Set(allModels.map((m) => m.category)).size, [allModels]);

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      if (authMode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        showToast("Signed in successfully!");
        checkAuth();
        setShowAuthModal(false);
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        showToast("Account created! Please check your email to verify.");
        setShowAuthModal(false);
      }
    } catch (error: any) {
      setAuthError(error.message);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setCurrentUser(null);
    showToast("Signed out successfully");
  };

  const submitReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentUser) {
      setShowAuthModal(true);
      showToast("Please sign in to submit a review", "error");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const rating = parseInt(formData.get("rating") as string);
    if (!rating) {
      showToast("Please select a rating", "error");
      return;
    }

    const allModels = getAllModels();
    const model = allModels.find((m) => m.id === selectedModelId);
    if (!model) return;

    const reviewData = {
      model_id: selectedModelId,
      model_name: model.name,
      company: model.company,
      rating,
      reviewer_name: (formData.get("reviewer_name") as string) || currentUser.email.split("@")[0],
      performance_review: formData.get("performance_review") as string,
      improvement_suggestions: formData.get("improvement_suggestions") as string || null,
    };

    try {
      await supabase.from("reviews").insert(reviewData);
      showToast("Review submitted!");
      setShowReviewModal(false);
      loadData();
    } catch (error: any) {
      showToast("Error: " + error.message, "error");
    }
  };

  const submitNewModel = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentUser) {
      setShowAuthModal(true);
      showToast("Please sign in to add a model", "error");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const modelData = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      is_open_source: (formData.get("is_open_source") as string) === "on",
    };

    try {
      await supabase.from("user_models").insert(modelData);
      showToast(`Model "${modelData.name}" added successfully!`);
      setShowAddModelModal(false);
      loadData();
    } catch (error: any) {
      showToast("Error: " + error.message, "error");
    }
  };

  const openDetailModal = (modelId: number) => {
    setCurrentDetailModelId(modelId);
    setShowDetailModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
    document.body.style.overflow = "";
  };

  const openReviewModal = (modelId: number) => {
    setSelectedModelId(modelId);
    setShowReviewModal(true);
    setCurrentRating(0);
    document.body.style.overflow = "hidden";
  };

  const closeReviewModal = () => {
    setShowReviewModal(false);
    document.body.style.overflow = "";
  };

  const openAuthModal = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setAuthError("");
    setShowAuthModal(true);
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
    document.body.style.overflow = "";
  };

  const scrollToModels = () => {
    document.getElementById("models")?.scrollIntoView({ behavior: "smooth" });
  };

  const selectedModel = currentDetailModelId ? allModels.find((m) => m.id === currentDetailModelId) : null;
  const modelReviews = currentDetailModelId ? reviews.filter((r) => r.model_id === currentDetailModelId) : [];
  const stats = currentDetailModelId ? modelStatsMap[currentDetailModelId] || { count: 0, avg: 0 } : { count: 0, avg: 0 };

  return (
    <>
      <div className="bg-pattern"></div>
      <div className="grid-overlay"></div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 sm:gap-3" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#f5f2eb] rounded flex items-center justify-center">
              <span className="text-[#0a0a0a] font-bold text-xs sm:text-sm">Z</span>
            </div>
            <span className="text-lg sm:text-xl font-semibold tracking-tight">zeviewer</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#models" className="text-[#a8a49e] hover:text-[#faf8f5] transition-colors text-sm">Models</a>
            <a href="#how-it-works" className="text-[#a8a49e] hover:text-[#faf8f5] transition-colors text-sm">How It Works</a>
            <a href="#all-reviews" className="text-[#a8a49e] hover:text-[#faf8f5] transition-colors text-sm">Reviews</a>
            <button onClick={() => currentUser ? setShowAddModelModal(true) : setShowAuthModal(true)} className="text-[#a8a49e] hover:text-[#faf8f5] transition-colors text-sm">Add Model</button>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            {currentUser && (
              <div className="hidden md:flex items-center gap-2 lg:gap-4">
                <span className="text-[#a8a49e] text-xs lg:text-sm hidden xl:block">{currentUser.email}</span>
                <button onClick={handleSignOut} className="text-[#a8a49e] hover:text-[#faf8f5] transition-colors text-xs lg:text-sm">Sign Out</button>
              </div>
            )}
            {!currentUser && (
              <button onClick={() => openAuthModal("signin")} className="btn-secondary text-xs sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 hidden sm:block">Sign In</button>
            )}
            <button onClick={() => currentUser ? scrollToModels() : setShowAuthModal(true)} className="btn-primary text-xs sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4">Write Review</button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#a8a49e] hover:text-[#faf8f5]"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0a0a] border-t border-[#2a2a2a] px-4 py-4 space-y-3">
            <a href="#models" onClick={() => setMobileMenuOpen(false)} className="block text-[#a8a49e] hover:text-[#faf8f5] py-2 text-sm">Models</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-[#a8a49e] hover:text-[#faf8f5] py-2 text-sm">How It Works</a>
            <a href="#all-reviews" onClick={() => setMobileMenuOpen(false)} className="block text-[#a8a49e] hover:text-[#faf8f5] py-2 text-sm">Reviews</a>
            <button onClick={() => { setMobileMenuOpen(false); currentUser ? setShowAddModelModal(true) : setShowAuthModal(true); }} className="block text-[#a8a49e] hover:text-[#faf8f5] py-2 text-sm w-full text-left">Add Model</button>
            {!currentUser && (
              <button onClick={() => { setMobileMenuOpen(false); openAuthModal("signin"); }} className="block text-[#a8a49e] hover:text-[#faf8f5] py-2 text-sm w-full text-left">Sign In</button>
            )}
            {currentUser && (
              <button onClick={() => { setMobileMenuOpen(false); handleSignOut(); }} className="block text-[#a8a49e] hover:text-[#faf8f5] py-2 text-sm w-full text-left">Sign Out</button>
            )}
          </div>
        )}
      </nav>

      <main>
        {/* Hero */}
        <section className="min-h-screen flex items-center pt-14 lg:pt-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <div className="max-w-4xl">
              <p className="text-[#a8a49e] text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6 animate-fade-up opacity-0">AI Model Review Platform - 2026</p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.95] mb-6 sm:mb-8 animate-fade-up opacity-0 stagger-1">
                Shape the future of<br />
                <span className="font-serif italic text-[#f5f2eb]">artificial intelligence</span>
              </h1>
              <p className="text-base sm:text-xl text-[#a8a49e] max-w-2xl mb-8 sm:mb-12 leading-relaxed animate-fade-up opacity-0 stagger-2">
                Sign in to write reviews and add models. Browse {aiModels.length}+ AI models, drop your reviews, and see what everyone else thinks. Open and transparent.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-up opacity-0 stagger-3">
                <button onClick={scrollToModels} className="btn-primary text-sm sm:text-base px-4 sm:px-8 py-2.5 sm:py-3.5">Browse AI Models</button>
                <button onClick={() => document.getElementById("all-reviews")?.scrollIntoView({ behavior: "smooth" })} className="btn-secondary text-sm sm:text-base px-4 sm:px-8 py-2.5 sm:py-3.5">See Reviews</button>
              </div>
            </div>
            <div className="company-logos mt-12 sm:mt-16 pt-12 border-t border-[#2a2a2a] animate-fade-up opacity-0 stagger-4 overflow-x-auto">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <span className="px-2 sm:px-4 py-1.5 sm:py-2 bg-[#1a1a1a] rounded text-xs sm:text-sm">OpenAI</span>
                <span className="px-2 sm:px-4 py-1.5 sm:py-2 bg-[#1a1a1a] rounded text-xs sm:text-sm">Anthropic</span>
                <span className="px-2 sm:px-4 py-1.5 sm:py-2 bg-[#1a1a1a] rounded text-xs sm:text-sm">Google</span>
                <span className="px-2 sm:px-4 py-1.5 sm:py-2 bg-[#1a1a1a] rounded text-xs sm:text-sm">Meta</span>
                <span className="px-2 sm:px-4 py-1.5 sm:py-2 bg-[#1a1a1a] rounded text-xs sm:text-sm">DeepSeek</span>
                <span className="px-2 sm:px-4 py-1.5 sm:py-2 bg-[#1a1a1a] rounded text-xs sm:text-sm">Mistral</span>
                <span className="px-2 sm:px-4 py-1.5 sm:py-2 bg-[#1a1a1a] rounded text-xs sm:text-sm">xAI</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-12 pt-10 sm:pt-12 border-t border-[#2a2a2a] animate-fade-up opacity-0 stagger-4">
              <div className="text-center sm:text-left">
                <div className="stat-number text-[#f5f2eb] text-3xl sm:text-4xl md:text-5xl" id="stat-models-count">{aiModels.length}</div>
                <p className="text-[#a8a49e] mt-1 sm:mt-2 text-sm sm:text-base">AI Models</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="stat-number text-[#f5f2eb] text-3xl sm:text-4xl md:text-5xl" id="stat-reviews-count">{reviews.length}</div>
                <p className="text-[#a8a49e] mt-1 sm:mt-2 text-sm sm:text-base">Reviews</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="stat-number text-[#f5f2eb] text-3xl sm:text-4xl md:text-5xl" id="stat-companies-count">{companiesCount}</div>
                <p className="text-[#a8a49e] mt-1 sm:mt-2 text-sm sm:text-base">Companies</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="stat-number text-[#f5f2eb] text-3xl sm:text-4xl md:text-5xl" id="stat-categories-count">{categoriesCount}</div>
                <p className="text-[#a8a49e] mt-1 sm:mt-2 text-sm sm:text-base">Categories</p>
              </div>
            </div>
          </div>
          <div className="absolute right-4 lg:right-10 top-1/3 hidden lg:block" style={{ animation: "float 6s ease-in-out infinite" }}>
            <div className="w-16 lg:w-20 h-16 lg:h-20 border border-[#2a2a2a] rounded-lg flex items-center justify-center">
              <svg className="w-8 lg:w-10 h-8 lg:h-10 text-[#a8a49e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-20 reveal">
              <p className="text-[#a8a49e] text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-4">The Process</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">How <span className="font-serif italic">Zeviewer</span> Works</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className="reveal text-center md:text-left">
                <div className="w-10 sm:w-12 h-10 sm:h-12 border border-[#f5f2eb] rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto md:mx-0">
                  <span className="text-[#f5f2eb] font-semibold text-sm sm:text-base">01</span>
                </div>
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Browse & Select</h3>
                <p className="text-[#a8a49e] text-sm sm:text-base leading-relaxed">Explore the latest 2026 AI models from OpenAI, Google, Anthropic, Meta, DeepSeek, and many more.</p>
              </div>
              <div className="reveal text-center md:text-left" style={{ transitionDelay: "0.1s" }}>
                <div className="w-10 sm:w-12 h-10 sm:h-12 border border-[#f5f2eb] rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto md:mx-0">
                  <span className="text-[#f5f2eb] font-semibold text-sm sm:text-base">02</span>
                </div>
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Drop Your Review</h3>
                <p className="text-[#a8a49e] text-sm sm:text-base leading-relaxed">No login needed. Pick a model, rate it with stars, write your thoughts, and submit your review.</p>
              </div>
              <div className="reveal text-center md:text-left" style={{ transitionDelay: "0.2s" }}>
                <div className="w-10 sm:w-12 h-10 sm:h-12 border border-[#f5f2eb] rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto md:mx-0">
                  <span className="text-[#f5f2eb] font-semibold text-sm sm:text-base">03</span>
                </div>
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">See All Feedback</h3>
                <p className="text-[#a8a49e] text-sm sm:text-base leading-relaxed">Every review is public. Click any model to read what others think and share your experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Models */}
        <section id="models" className="py-16 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 reveal gap-4">
              <div>
                <p className="text-[#a8a49e] text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-4">Model Database - Updated Feb 2026</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">Explore AI <span className="font-serif italic">Models</span></h2>
              </div>
              <div className="mt-4 md:mt-0 w-full md:w-auto">
                <div className="search-container">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    id="search-input"
                    className="input-field w-full sm:w-64"
                    placeholder="Search models..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-10 reveal overflow-x-auto pb-2">
              {["all", "language", "multimodal", "reasoning", "image", "video", "audio", "code", "open-source"].map((filter) => (
                <button
                  key={filter}
                  className={`filter-tag text-xs sm:text-sm whitespace-nowrap ${currentFilter === filter ? "active" : ""}`}
                  onClick={() => setCurrentFilter(filter)}
                >
                  {filter === "all" ? "All" : filter.charAt(0).toUpperCase() + filter.slice(1).replace("-", " ")}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredModels.map((model, i) => (
                <div key={model.id} style={{ transitionDelay: `${Math.min(i * 0.03, 0.5)}s` }} className="reveal">
                  <ModelCard 
                    model={model} 
                    stats={modelStatsMap[model.id] || { count: 0, avg: 0 }} 
                    onClick={() => openDetailModal(model.id)} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Reviews */}
        <section id="all-reviews" className="py-16 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-16 reveal">
              <p className="text-[#a8a49e] text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-4">Community Feedback</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">Latest <span className="font-serif italic">Reviews</span></h2>
              <p className="text-[#a8a49e] mt-3 sm:mt-4 max-w-xl mx-auto text-sm sm:text-base px-4">All reviews are public. See what everyone thinks about the latest AI models in 2026.</p>
            </div>
            <div className="max-w-3xl mx-auto">
              {reviews.length === 0 ? (
                <p className="text-[#a8a49e] text-center py-8">No reviews yet. Be the first!</p>
              ) : (
                reviews.slice().sort((a, b) => b.id - a.id).map((review) => (
                  <div key={review.id} className="review-item">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="font-medium">{review.model_name}</span>
                        <span className="text-[#a8a49e] text-sm ml-2">by {review.reviewer_name || "Anonymous"}</span>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className={`star-display ${star <= review.rating ? "text-yellow-400" : "text-[#2a2a2a]"}`} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm mb-2">{review.performance_review}</p>
                    {review.improvement_suggestions && (
                      <p className="text-sm text-[#a8a49e]">
                        <span className="text-[#f5f2eb]">Suggestion:</span> {review.improvement_suggestions}
                      </p>
                    )}
                    <p className="text-[#a8a49e] text-xs mt-3">
                      {new Date(review.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6 sm:p-10 md:p-16 lg:p-20 text-center reveal">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6">Ready to make an <span className="font-serif italic">impact</span>?</h2>
              <p className="text-[#a8a49e] text-sm sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-10 px-2 sm:px-0">No signup. No login. Just pick a model and share your honest review to help the community.</p>
              <button onClick={scrollToModels} className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3.5">Start Reviewing Today</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#2a2a2a] py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12">
              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-7 sm:w-8 h-7 sm:h-8 bg-[#f5f2eb] rounded flex items-center justify-center">
                    <span className="text-[#0a0a0a] font-bold text-xs sm:text-sm">Z</span>
                  </div>
                  <span className="text-lg sm:text-xl font-semibold tracking-tight">zeviewer</span>
                </div>
                <p className="text-[#a8a49e] text-xs sm:text-sm">Open, community-driven AI model reviews. 1000+ models.</p>
              </div>
              <div>
                <h4 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Platform</h4>
                <ul className="space-y-2 sm:space-y-3 text-[#a8a49e] text-xs sm:text-sm">
                  <li><a href="#models" className="hover:text-[#f5f2eb] transition-colors">Browse Models</a></li>
                  <li><a href="#all-reviews" className="hover:text-[#f5f2eb] transition-colors">Reviews</a></li>
                  <li><a href="#how-it-works" className="hover:text-[#f5f2eb] transition-colors">How It Works</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
                <ul className="space-y-2 sm:space-y-3 text-[#a8a49e] text-xs sm:text-sm">
                  <li><a href="/privacy-policy" className="hover:text-[#f5f2eb] transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms-of-service" className="hover:text-[#f5f2eb] transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#2a2a2a] mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-[#a8a49e] text-xs sm:text-sm">
              <p>2026 Zeviewer. Open source AI model database. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Review Modal */}
      {showReviewModal && selectedModelId && (
        <div className="modal-overlay active" onClick={(e) => e.target === e.currentTarget && closeReviewModal()}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-[#a8a49e] text-sm mb-2">Submitting review for</p>
                  <h2 className="text-2xl font-medium">{getAllModels().find((m) => m.id === selectedModelId)?.name}</h2>
                </div>
                <button onClick={closeReviewModal} className="text-[#a8a49e] hover:text-[#f5f2eb]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form onSubmit={submitReview}>
                <input type="hidden" name="model_id" value={selectedModelId} />
                <div className="mb-6">
                  <label className="block text-sm text-[#a8a49e] mb-3">Overall Rating</label>
                  <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`star ${star <= currentRating ? "active" : ""}`}
                        onClick={() => setCurrentRating(star)}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <input type="hidden" name="rating" value={currentRating} />
                </div>
                <div className="mb-6">
                  <label className="block text-sm text-[#a8a49e] mb-2">Your Name (optional)</label>
                  <input type="text" name="reviewer_name" className="input-field" placeholder="Anonymous" />
                </div>
                <div className="mb-6">
                  <label className="block text-sm text-[#a8a49e] mb-2">Review</label>
                  <textarea name="performance_review" className="input-field" placeholder="Share your experience with this AI model..." required />
                </div>
                <div className="mb-6">
                  <label className="block text-sm text-[#a8a49e] mb-2">Suggestions for Improvement</label>
                  <textarea name="improvement_suggestions" className="input-field" placeholder="What could be better?" />
                </div>
                <div className="flex gap-4">
                  <button type="button" onClick={closeReviewModal} className="btn-secondary flex-1">Cancel</button>
                  <button type="submit" className="btn-primary flex-1">Submit Review</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {showDetailModal && selectedModel && (
        <div className="modal-overlay active detail-modal" onClick={(e) => e.target === e.currentTarget && closeDetailModal()}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="badge badge-ai mb-2">{selectedModel.category}</span>
                  <h2 className="text-2xl font-medium">{selectedModel.name}</h2>
                  <p className="text-[#a8a49e]">{selectedModel.company}</p>
                </div>
                <button onClick={closeDetailModal} className="text-[#a8a49e] hover:text-[#f5f2eb]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-[#a8a49e] mb-6">{selectedModel.description}</p>
              <div className="flex items-center gap-6 mb-8 pb-6 border-b border-[#2a2a2a]">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-lg font-medium">{stats.avg > 0 ? stats.avg.toFixed(1) : "-"}</span>
                </div>
                <span className="text-[#a8a49e]">{stats.count} review{stats.count !== 1 ? "s" : ""}</span>
                <button
                  onClick={() => { closeDetailModal(); setTimeout(() => openReviewModal(currentDetailModelId!), 300); }}
                  className="btn-primary text-sm py-2 px-4 ml-auto"
                >
                  Write a Review
                </button>
              </div>
              <div>
                {modelReviews.length === 0 ? (
                  <p className="text-[#a8a49e] text-center py-8">No reviews yet. Be the first!</p>
                ) : (
                  modelReviews.map((review) => (
                    <div key={review.id} className="review-item">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium">{review.reviewer_name || "Anonymous"}</span>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className={`star-display ${star <= review.rating ? "text-yellow-400" : "text-[#2a2a2a]"}`} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm mb-1">{review.performance_review}</p>
                      {review.improvement_suggestions && (
                        <p className="text-sm text-[#a8a49e] mt-2">
                          <span className="text-[#f5f2eb]">Suggestion:</span> {review.improvement_suggestions}
                        </p>
                      )}
                      <p className="text-[#a8a49e] text-xs mt-2">
                        {new Date(review.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="modal-overlay active" onClick={(e) => e.target === e.currentTarget && closeAuthModal()}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-medium">{authMode === "signin" ? "Sign In" : "Create Account"}</h2>
                  <p className="text-[#a8a49e] text-sm mt-1">
                    {authMode === "signin" ? "Sign in to write reviews and add models" : "Create an account to contribute"}
                  </p>
                </div>
                <button onClick={closeAuthModal} className="text-[#a8a49e] hover:text-[#f5f2eb]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form onSubmit={handleAuth}>
                <div className="mb-4">
                  <label className="block text-sm text-[#a8a49e] mb-2">Email</label>
                  <input type="email" name="email" className="input-field" placeholder="your@email.com" required />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-[#a8a49e] mb-2">Password</label>
                  <input type="password" name="password" className="input-field" placeholder="Password" required />
                </div>
                <div className="mb-4">
                  <button type="submit" className="btn-primary w-full">
                    {authMode === "signin" ? "Sign In" : "Create Account"}
                  </button>
                </div>
              </form>
              <p className="text-center text-[#a8a49e] text-sm">
                {authMode === "signin" ? "Don't have an account? " : "Already have an account? "}
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); setAuthMode(authMode === "signin" ? "signup" : "signin"); }}
                  className="text-[#f5f2eb] hover:underline"
                >
                  {authMode === "signin" ? "Sign Up" : "Sign In"}
                </a>
              </p>
              {authError && <p className="text-red-400 text-sm text-center mt-4">{authError}</p>}
            </div>
          </div>
        </div>
      )}

      {/* Add Model Modal */}
      {showAddModelModal && (
        <div className="modal-overlay active" onClick={(e) => e.target === e.currentTarget && setShowAddModelModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl font-medium">Add New Model</h2>
                  <p className="text-[#a8a49e] text-sm mt-1">Submit a new AI model to the database</p>
                </div>
                <button onClick={() => setShowAddModelModal(false)} className="text-[#a8a49e] hover:text-[#f5f2eb]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form onSubmit={submitNewModel}>
                <div className="mb-4">
                  <label className="block text-sm text-[#a8a49e] mb-2">Model Name *</label>
                  <input type="text" name="name" className="input-field" placeholder="e.g., GPT-5" required />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-[#a8a49e] mb-2">Company/Organization *</label>
                  <input type="text" name="company" className="input-field" placeholder="e.g., OpenAI" required />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-[#a8a49e] mb-2">Category *</label>
                  <select name="category" className="input-field" required>
                    <option value="">Select category...</option>
                    <option value="language">Language</option>
                    <option value="multimodal">Multimodal</option>
                    <option value="reasoning">Reasoning</option>
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                    <option value="audio">Audio</option>
                    <option value="code">Code</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-[#a8a49e] mb-2">Description *</label>
                  <textarea name="description" className="input-field" placeholder="Describe what this model does..." required />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-[#a8a49e] mb-2">
                    <input type="checkbox" name="is_open_source" className="mr-2" />Open Source Model
                  </label>
                </div>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setShowAddModelModal(false)} className="btn-secondary flex-1">Cancel</button>
                  <button type="submit" className="btn-primary flex-1">Add Model</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      <div className={`toast ${toast.show ? "show" : ""}`}>
        {toast.type === "success" ? (
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
        <span>{toast.message}</span>
      </div>
    </>
  );
}
