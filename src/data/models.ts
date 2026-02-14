export interface AIModel {
  id: number;
  name: string;
  company: string;
  category: string;
  description: string;
  new?: boolean;
  openSource?: boolean;
  isUser?: boolean;
  isTrending?: boolean;
  downloads?: number;
}

export const aiModels: AIModel[] = [
  // === PROPRIETARY MODELS ===
  { id: 1, name: "GPT-5.3", company: "OpenAI", category: "multimodal", description: "Latest flagship multimodal model with advanced reasoning and agentic capabilities.", new: true },
  { id: 2, name: "GPT-5.3 Codex", company: "OpenAI", category: "code", description: "Specialized coding variant of GPT-5.3 with enhanced programming capabilities.", new: true },
  { id: 3, name: "GPT-5 Nano", company: "OpenAI", category: "language", description: "Lightweight, fast model for high-volume tasks. 0.7 GPQA score.", new: true },
  { id: 4, name: "o3-mini", company: "OpenAI", category: "reasoning", description: "Compact reasoning model with adjustable thinking effort. Strong STEM performance.", new: false },
  { id: 5, name: "o4-mini", company: "OpenAI", category: "reasoning", description: "Latest mini reasoning model with improved efficiency.", new: true },
  { id: 6, name: "GPT-4o", company: "OpenAI", category: "multimodal", description: "Flagship multimodal model with vision, audio, and text capabilities.", new: false },
  { id: 7, name: "GPT-4o mini", company: "OpenAI", category: "language", description: "Small, affordable model for fast responses.", new: false },
  { id: 8, name: "GPT-4.5", company: "OpenAI", category: "language", description: "Enhanced version with improved reasoning and creativity.", new: false },
  { id: 9, name: "DALL-E 4", company: "OpenAI", category: "image", description: "Latest image generation with photorealistic capabilities.", new: true },
  { id: 10, name: "DALL-E 4 Turbo", company: "OpenAI", category: "image", description: "Faster version of DALL-E 4 with lower latency.", new: true },
  { id: 11, name: "Sora", company: "OpenAI", category: "video", description: "Text-to-video model creating realistic footage up to 1 minute.", new: false },
  { id: 12, name: "Sora Turbo", company: "OpenAI", category: "video", description: "Faster version of Sora with improved quality.", new: true },
  { id: 13, name: "Whisper V4", company: "OpenAI", category: "audio", description: "State-of-the-art speech recognition with improved accuracy.", new: true },
  { id: 14, name: "Whisper V4 Large", company: "OpenAI", category: "audio", description: "Large variant of Whisper V4 for maximum accuracy.", new: true },
  { id: 15, name: "Voice Engine", company: "OpenAI", category: "audio", description: "Text-to-speech engine with natural voice synthesis.", new: true },
  
  // Anthropic
  { id: 20, name: "Claude Opus 4.6", company: "Anthropic", category: "language", description: "Anthropic's latest flagship model released Feb 2026. Advanced reasoning.", new: true },
  { id: 21, name: "Claude 4 Sonnet", company: "Anthropic", category: "language", description: "Balanced model with strong performance and speed.", new: true },
  { id: 22, name: "Claude 3.5 Sonnet", company: "Anthropic", category: "language", description: "Fast model excelling at coding, analysis, and complex reasoning.", new: false },
  { id: 23, name: "Claude 3.5 Haiku", company: "Anthropic", category: "language", description: "Fastest Claude model for simple tasks. 0.4 GPQA score.", new: false },
  { id: 24, name: "Claude 3 Opus", company: "Anthropic", category: "language", description: "Previous flagship with strong reasoning capabilities.", new: false },
  { id: 25, name: "Claude 3 Sonnet", company: "Anthropic", category: "language", description: "Balanced model for various tasks.", new: false },
  { id: 26, name: "Claude 3 Haiku", company: "Anthropic", category: "language", description: "Fast and efficient model for quick responses.", new: false },
  { id: 27, name: "Claude Code", company: "Anthropic", category: "code", description: "Specialized coding assistant with agentic capabilities.", new: true },
  { id: 28, name: "Claude Enterprise", company: "Anthropic", category: "language", description: "Enterprise-grade model with enhanced security.", new: true },
  
  // Google DeepMind
  { id: 30, name: "Gemini 3 Ultra", company: "Google DeepMind", category: "multimodal", description: "Ultra version with maximum capabilities. 1520 Elo score.", new: true },
  { id: 31, name: "Gemini 3 Pro", company: "Google DeepMind", category: "multimodal", description: "Google's flagship model released Nov 2025. Record 1501 Elo score.", new: true },
  { id: 32, name: "Gemini 3 Flash", company: "Google DeepMind", category: "multimodal", description: "Fast, lightweight multimodal model optimized for speed.", new: true },
  { id: 33, name: "Gemini 3 Deep Think", company: "Google DeepMind", category: "reasoning", description: "Specialized reasoning mode for science and engineering.", new: true },
  { id: 34, name: "Gemini 2.5 Pro", company: "Google DeepMind", category: "multimodal", description: "Enhanced version with improved reasoning.", new: false },
  { id: 35, name: "Gemini 2.5 Flash", company: "Google DeepMind", category: "multimodal", description: "Fast version for quick responses.", new: false },
  { id: 36, name: "Gemini 2.5 Flash Lite", company: "Google DeepMind", category: "language", description: "Cost-effective model with strong performance.", new: false },
  { id: 37, name: "Gemini 2.0 Ultra", company: "Google DeepMind", category: "multimodal", description: "Previous flagship with strong multimodal capabilities.", new: false },
  { id: 38, name: "Gemini Diffusion", company: "Google DeepMind", category: "multimodal", description: "Latest diffusion-based multimodal model. 0.4 GPQA.", new: true },
  { id: 39, name: "Gemini 2.0 Flash", company: "Google DeepMind", category: "multimodal", description: "Fast multimodal model.", new: false },
  { id: 40, name: "Imagen 4", company: "Google DeepMind", category: "image", description: "Google's highest quality text-to-image generation.", new: true },
  { id: 41, name: "Imagen 4 Ultra", company: "Google DeepMind", category: "image", description: "Ultra version with maximum image quality.", new: true },
  { id: 42, name: "Imagen 3", company: "Google DeepMind", category: "image", description: "Previous generation with strong performance.", new: false },
  { id: 43, name: "Veo 3", company: "Google DeepMind", category: "video", description: "Advanced video generation with native audio.", new: true },
  { id: 44, name: "Veo 3 Ultra", company: "Google DeepMind", category: "video", description: "Ultra video generation with extended duration.", new: true },
  { id: 45, name: "Veo 2", company: "Google DeepMind", category: "video", description: "Previous video generation model.", new: false },
  { id: 46, name: "Athena", company: "Google DeepMind", category: "code", description: "Specialized code generation model.", new: true },
  
  // xAI
  { id: 50, name: "Grok-2", company: "xAI", category: "language", description: "Model with real-time information access.", new: false },
  { id: 51, name: "Grok-1.5", company: "xAI", category: "language", description: "xAI's latest model. 0.4 GPQA score.", new: true },
  { id: 52, name: "Grok-2 Vision", company: "xAI", category: "multimodal", description: "Multimodal with real-time information.", new: true },
  { id: 53, name: "Grok-1.5 Vision", company: "xAI", category: "multimodal", description: "Vision-enabled model with reasoning.", new: true },
  { id: 54, name: "Grok-2 Ultra", company: "xAI", category: "language", description: "Ultra version with enhanced capabilities.", new: true },
  { id: 55, name: "Grok Beta", company: "xAI", category: "language", description: "Beta version with latest improvements.", new: true },
  
  // Mistral AI
  { id: 60, name: "Mistral Large 3", company: "Mistral AI", category: "language", description: "Latest flagship with 200K context.", new: true },
  { id: 61, name: "Mistral Small 3", company: "Mistral AI", category: "language", description: "Efficient model for high throughput.", new: true },
  { id: 62, name: "Mistral Large 2", company: "Mistral AI", category: "language", description: "Previous flagship model.", new: false },
  { id: 63, name: "Mistral Medium 3", company: "Mistral AI", category: "language", description: "Medium-sized balanced model.", new: true },
  { id: 64, name: "Pixtral Large", company: "Mistral AI", category: "multimodal", description: "Mistral's multimodal model.", new: false },
  { id: 65, name: "Pixtral 12B", company: "Mistral AI", category: "multimodal", description: "Efficient multimodal model.", new: false },
  { id: 66, name: "Mistral NeMo", company: "Mistral AI", category: "language", description: "Open source compact model.", new: true },
  { id: 67, name: "Mistral Codestral", company: "Mistral AI", category: "code", description: "Code generation model.", new: false },
  { id: 68, name: "Mistral Embed", company: "Mistral AI", category: "language", description: "Embedding model for semantic search.", new: true },
  
  // Meta AI
  { id: 70, name: "Llama 4 Maverick", company: "Meta AI", category: "language", description: "Open source flagship. 0.7 GPQA. Vision + text, 10M context.", new: true, openSource: true },
  { id: 71, name: "Llama 4 Scout", company: "Meta AI", category: "language", description: "Efficient open source variant with strong reasoning.", new: true, openSource: true },
  { id: 72, name: "Llama 4 Behemoth", company: "Meta AI", category: "language", description: "Most capable Llama model. 0.9 GPQA.", new: true, openSource: true },
  { id: 73, name: "Llama 3.3 70B", company: "Meta AI", category: "language", description: "Strong multilingual and reasoning. Open source.", new: false, openSource: true },
  { id: 74, name: "Llama 3.2 90B", company: "Meta AI", category: "language", description: "Large model with enhanced capabilities.", new: false, openSource: true },
  { id: 75, name: "Llama 3.2 11B Vision", company: "Meta AI", category: "multimodal", description: "Vision-enabled model.", new: false, openSource: true },
  { id: 76, name: "Llama 3.2 Vision", company: "Meta AI", category: "multimodal", description: "Open-source multimodal with image understanding.", new: false, openSource: true },
  { id: 77, name: "Llama 3.1 405B", company: "Meta AI", category: "language", description: "Large open source model.", new: false, openSource: true },
  { id: 78, name: "Llama 3.1 70B", company: "Meta AI", category: "language", description: "Mid-size open source model.", new: false, openSource: true },
  { id: 79, name: "Llama 3.1 8B", company: "Meta AI", category: "language", description: "Compact open source model.", new: false, openSource: true },
  { id: 80, name: "Code Llama 70B", company: "Meta AI", category: "code", description: "Open source code generation model.", new: false, openSource: true },
  { id: 81, name: "Code Llama 34B", company: "Meta AI", category: "code", description: "Code generation with Python focus.", new: false, openSource: true },
  { id: 82, name: "MusicGen Studio", company: "Meta AI", category: "audio", description: "Advanced text-to-music. Open source.", new: true, openSource: true },
  { id: 83, name: "MusicGen", company: "Meta AI", category: "audio", description: "Open source music generation.", new: false, openSource: true },
  { id: 84, name: "AudioBox", company: "Meta AI", category: "audio", description: "Audio generation and editing.", new: true, openSource: true },
  { id: 85, name: "Segment Anything 2", company: "Meta AI", category: "image", description: "Image segmentation model.", new: true, openSource: true },
  { id: 86, name: " Seamless", company: "Meta AI", category: "audio", description: "Real-time translation and speech.", new: true, openSource: true },
  { id: 87, name: "Meta VL", company: "Meta AI", category: "multimodal", description: "Vision-language model.", new: true, openSource: true },
  
  // DeepSeek
  { id: 90, name: "DeepSeek V3.2", company: "DeepSeek", category: "language", description: "Efficient reasoning & agentic AI. 1M token context. Open source.", new: true, openSource: true },
  { id: 91, name: "DeepSeek V3", company: "DeepSeek", category: "language", description: "671B MoE open-source model.", new: false, openSource: true },
  { id: 92, name: "DeepSeek R2", company: "DeepSeek", category: "reasoning", description: "Next-gen reasoning with enhanced coding. Open source.", new: true, openSource: true },
  { id: 93, name: "DeepSeek R1", company: "DeepSeek", category: "reasoning", description: "Open-source reasoning matching o1. 79.8% AIME.", new: false, openSource: true },
  { id: 94, name: "DeepSeek R1 Zero", company: "DeepSeek", category: "reasoning", description: "Zero-pretrained reasoning. Open source. 0.7 GPQA.", new: true, openSource: true },
  { id: 95, name: "DeepSeek R1 Distill Qwen 1.5B", company: "DeepSeek", category: "reasoning", description: "Lightweight reasoning. Open source. 0.3 GPQA.", new: true, openSource: true },
  { id: 96, name: "DeepSeek R1 Distill Llama 70B", company: "DeepSeek", category: "reasoning", description: "Large distilled reasoning model.", new: true, openSource: true },
  { id: 97, name: "DeepSeek-Coder-V2", company: "DeepSeek", category: "code", description: "Top open-source code model.", new: false, openSource: true },
  { id: 98, name: "DeepSeek-Coder-V2 Lite", company: "DeepSeek", category: "code", description: "Lightweight code model.", new: true, openSource: true },
  { id: 99, name: "DeepSeek-VL2", company: "DeepSeek", category: "multimodal", description: "Open source vision-language model.", new: true, openSource: true },
  { id: 100, name: "DeepSeek-Janus-Pro", company: "DeepSeek", category: "multimodal", description: "Open source unified multimodal.", new: true, openSource: true },
  { id: 101, name: "DeepSeek-Math", company: "DeepSeek", category: "reasoning", description: "Mathematical reasoning model.", new: false, openSource: true },
  { id: 102, name: "DeepSeek-MoE", company: "DeepSeek", category: "language", description: "Mixture of experts model.", new: false, openSource: true },
  
  // Alibaba Qwen
  { id: 110, name: "Qwen3 Ultra", company: "Alibaba Cloud", category: "language", description: "Flagship Qwen. Open source with reasoning.", new: true, openSource: true },
  { id: 111, name: "Qwen3旗舰", company: "Alibaba Cloud", category: "language", description: "Chinese flagship model (Qwen3 Flagship).", new: true, openSource: true },
  { id: 112, name: "Qwen3 VL 30B A3B", company: "Alibaba Cloud", category: "multimodal", description: "Vision-language with thinking. Open source. 0.7 GPQA.", new: true, openSource: true },
  { id: 113, name: "Qwen3 0.6B", company: "Alibaba Cloud", category: "language", description: "Compact open source model. 45.6M downloads.", new: true, openSource: true },
  { id: 114, name: "Qwen3 1.8B", company: "Alibaba Cloud", category: "language", description: "Small efficient model.", new: true, openSource: true },
  { id: 115, name: "Qwen3 4B", company: "Alibaba Cloud", category: "language", description: "Compact model with good performance.", new: true, openSource: true },
  { id: 116, name: "Qwen3 8B", company: "Alibaba Cloud", category: "language", description: "Mid-size model.", new: true, openSource: true },
  { id: 117, name: "Qwen3 14B", company: "Alibaba Cloud", category: "language", description: "Large model with strong reasoning.", new: true, openSource: true },
  { id: 118, name: "Qwen3 32B", company: "Alibaba Cloud", category: "language", description: "Extra large model.", new: true, openSource: true },
  { id: 119, name: "Qwen3 72B", company: "Alibaba Cloud", category: "language", description: "Massive model with top performance.", new: true, openSource: true },
  { id: 120, name: "Qwen2.5-7B-Instruct", company: "Alibaba Cloud", category: "language", description: "Popular open source. 52.4M downloads.", new: false, openSource: true },
  { id: 121, name: "Qwen2.5-3B-Instruct", company: "Alibaba Cloud", category: "language", description: "Compact open source model.", new: false, openSource: true },
  { id: 122, name: "Qwen2.5-VL-3B-Instruct", company: "Alibaba Cloud", category: "multimodal", description: "Open source vision model. 49.5M downloads.", new: false, openSource: true },
  { id: 123, name: "Qwen2.5-Coder-32B", company: "Alibaba Cloud", category: "code", description: "Open source coding. 92% HumanEval.", new: false, openSource: true },
  { id: 124, name: "Qwen2.5-Coder-3B", company: "Alibaba Cloud", category: "code", description: "Open source compact coder.", new: false, openSource: true },
  { id: 125, name: "QwQ-32B Preview", company: "Alibaba Cloud", category: "reasoning", description: "Open source reasoning with math abilities.", new: false, openSource: true },
  { id: 126, name: "Qwen2-Math", company: "Alibaba Cloud", category: "reasoning", description: "Open source math model.", new: true, openSource: true },
  { id: 127, name: "Qwen2-Math-72B", company: "Alibaba Cloud", category: "reasoning", description: "Open source large math model.", new: true, openSource: true },
  { id: 128, name: "Qwen-Audio", company: "Alibaba Cloud", category: "audio", description: "Open source audio understanding.", new: false, openSource: true },
  { id: 129, name: "Qwen2-Audio", company: "Alibaba Cloud", category: "audio", description: "Updated audio model.", new: true, openSource: true },
  { id: 130, name: "Qwen2.5-VL-72B", company: "Alibaba Cloud", category: "multimodal", description: "Large vision-language model.", new: true, openSource: true },
  
  // Google Gemma
  { id: 140, name: "Gemma 3", company: "Google DeepMind", category: "language", description: "Open-source with strong multilingual.", new: true, openSource: true },
  { id: 141, name: "Gemma 3 4B", company: "Google DeepMind", category: "language", description: "Compact open source model.", new: true, openSource: true },
  { id: 142, name: "Gemma 3 12B", company: "Google DeepMind", category: "language", description: "Larger open source model.", new: true, openSource: true },
  { id: 143, name: "Gemma 2 27B", company: "Google DeepMind", category: "language", description: "Open-source model with strong performance.", new: false, openSource: true },
  { id: 144, name: "Gemma 2 9B", company: "Google DeepMind", category: "language", description: "Mid-size open source model.", new: false, openSource: true },
  { id: 145, name: "Gemma 2 2B", company: "Google DeepMind", category: "language", description: "Compact efficient model.", new: false, openSource: true },
  { id: 146, name: "Gemma 2 IT", company: "Google DeepMind", category: "language", description: "Instruction-tuned version.", new: true, openSource: true },
  { id: 147, name: "Gemma 3 IT", company: "Google DeepMind", category: "language", description: "Open source instruction-tuned.", new: true, openSource: true },
  { id: 148, name: "Gemma 3 Vision", company: "Google DeepMind", category: "multimodal", description: "Open source vision model.", new: true, openSource: true },
  
  // Microsoft
  { id: 150, name: "Phi-4", company: "Microsoft", category: "language", description: "Strong reasoning in compact size.", new: false },
  { id: 151, name: "Phi-4 Mini", company: "Microsoft", category: "language", description: "Microsoft's efficient model. 0.3 GPQA.", new: true },
  { id: 152, name: "Phi-4 Multimodal", company: "Microsoft", category: "multimodal", description: "Multimodal capabilities in compact size.", new: true },
  { id: 153, name: "Phi-3 Mini", company: "Microsoft", category: "language", description: "Open source compact model.", new: false, openSource: true },
  { id: 154, name: "Phi-3 Medium", company: "Microsoft", category: "language", description: "Open source medium model.", new: false, openSource: true },
  { id: 155, name: "Phi-3.5 Mini", company: "Microsoft", category: "language", description: "Enhanced mini model.", new: false },
  { id: 156, name: "Phi-3.5 MoE", company: "Microsoft", category: "language", description: "Mixture of experts model.", new: false },
  { id: 157, name: "WizardLM-2 8x22B", company: "Microsoft", category: "language", description: "Open source instruction-following MoE.", new: true, openSource: true },
  { id: 158, name: "WizardLM-2 7B", company: "Microsoft", category: "language", description: "Open source instruction model.", new: false, openSource: true },
  { id: 159, name: "Orca 3", company: "Microsoft", category: "language", description: "Reasoning model with enhanced capabilities.", new: true },
  { id: 160, name: "MAI", company: "Microsoft", category: "language", description: "Microsoft AI initiative model.", new: true },
  { id: 161, name: "Kosmos-2", company: "Microsoft", category: "multimodal", description: "Multimodal grounding model.", new: false },
  { id: 162, name: "BioGPT", company: "Microsoft", category: "language", description: "Biomedical language model.", new: false },
  
  // Stability AI
  { id: 170, name: "Stable Diffusion 3.5", company: "Stability AI", category: "image", description: "Open source image generation.", new: false, openSource: true },
  { id: 171, name: "Stable Diffusion 3.5 Large", company: "Stability AI", category: "image", description: "Large version with maximum quality.", new: false, openSource: true },
  { id: 172, name: "Stable Diffusion 3.5 Medium", company: "Stability AI", category: "image", description: "Medium version for balanced performance.", new: false, openSource: true },
  { id: 173, name: "Stable Diffusion XL", company: "Stability AI", category: "image", description: "Open source high-quality image.", new: false, openSource: true },
  { id: 174, name: "Stable Diffusion XL Turbo", company: "Stability AI", category: "image", description: "Fast version of SDXL.", new: false },
  { id: 175, name: "Stable Video Diffusion", company: "Stability AI", category: "video", description: "Open source video generation.", new: false, openSource: true },
  { id: 176, name: "Stable Video Diffusion SVD", company: "Stability AI", category: "video", description: "Stable Video Diffusion model.", new: false, openSource: true },
  { id: 177, name: "Stable Audio 3.0", company: "Stability AI", category: "audio", description: "Open source text-to-audio.", new: true, openSource: true },
  { id: 178, name: "Stable Audio 2.0", company: "Stability AI", category: "audio", description: "Previous audio generation.", new: false, openSource: true },
  { id: 179, name: "Stable LM 3B", company: "Stability AI", category: "language", description: "Open source language model.", new: false, openSource: true },
  { id: 180, name: "Stable LM 2", company: "Stability AI", category: "language", description: "Updated language model.", new: false, openSource: true },
  
  // Cohere
  { id: 190, name: "Command R7B", company: "Cohere", category: "language", description: "Open source RAG model.", new: true, openSource: true },
  { id: 191, name: "Command R+", company: "Cohere", category: "language", description: "Enterprise RAG-optimized model.", new: false },
  { id: 192, name: "Command R", company: "Cohere", category: "language", description: "RAG-optimized language model.", new: false },
  { id: 193, name: "Command", company: "Cohere", category: "language", description: "General purpose language model.", new: false },
  { id: 194, name: "Aya Expanse", company: "Cohere", category: "language", description: "Open multilingual model.", new: true, openSource: true },
  { id: 195, name: "Aya 23", company: "Cohere", category: "language", description: "Multilingual model with 23 languages.", new: false },
  { id: 196, name: "Cohere Embed", company: "Cohere", category: "language", description: "Embedding model for search.", new: true },
  
  // Amazon
  { id: 200, name: "Nova Prime", company: "Amazon", category: "language", description: "Amazon's latest flagship.", new: true },
  { id: 201, name: "Nova Pro", company: "Amazon", category: "multimodal", description: "Amazon's multimodal on Bedrock.", new: false },
  { id: 202, name: "Nova Lite", company: "Amazon", category: "language", description: "Lightweight efficient model.", new: true },
  { id: 203, name: "Nova Micro", company: "Amazon", category: "language", description: "Micro model for simple tasks.", new: true },
  { id: 204, name: "Titan Text G2", company: "Amazon", category: "language", description: "Latest Titan text model.", new: false },
  { id: 205, name: "Titan Image Generator", company: "Amazon", category: "image", description: "Amazon's image generation.", new: true },
  { id: 206, name: "Titan Multimodal", company: "Amazon", category: "multimodal", description: "Multimodal capabilities.", new: true },
  
  // Apple
  { id: 210, name: "Apple Intelligence 2", company: "Apple", category: "language", description: "Enhanced on-device AI.", new: true },
  { id: 211, name: "Apple Intelligence", company: "Apple", category: "language", description: "On-device AI capabilities.", new: false },
  { id: 212, name: "On-Device LLM", company: "Apple", category: "language", description: "Efficient on-device language model.", new: true },
  { id: 213, name: "Apple VL", company: "Apple", category: "multimodal", description: "Vision-language for Apple devices.", new: true },
  
  // ByteDance
  { id: 220, name: "Doubao Pro", company: "ByteDance", category: "language", description: "ByteDance's flagship LLM.", new: false },
  { id: 221, name: "Doubao 1.5", company: "ByteDance", category: "language", description: "Updated version with improved reasoning.", new: true },
  { id: 222, name: "Doubao Lite", company: "ByteDance", category: "language", description: "Lightweight version for fast responses.", new: true },
  { id: 223, name: "Seedance 2.0", company: "ByteDance", category: "video", description: "ByteDance's latest video generation model. Sparked rally in China AI stocks.", new: true },
  { id: 224, name: "Seedream 5.0", company: "ByteDance", category: "image", description: "ByteDance's latest image generation. Released Feb 2026.", new: true },
  { id: 225, name: "Seedream 3.0", company: "ByteDance", category: "image", description: "Previous image generation.", new: false },
  { id: 226, name: "Magic Animate", company: "ByteDance", category: "video", description: "Animation generation.", new: false },
  
  // Moonshot AI (Kimi)
  { id: 230, name: "Kimi K2-Instruct", company: "Moonshot AI", category: "language", description: "200K+ token long-context model. 0.8 GPQA.", new: true },
  { id: 231, name: "Kimi k1.5", company: "Moonshot AI", category: "reasoning", description: "Reasoning model with strong performance.", new: true },
  { id: 232, name: "Kimi K2.5", company: "Moonshot AI", category: "reasoning", description: "Open-weight reasoning model. 96% on AIME 2025.", new: true },
  { id: 233, name: "Kimi k2", company: "Moonshot AI", category: "language", description: "Latest Kimi model with reasoning.", new: true },
  { id: 234, name: "Kimi Pro", company: "Moonshot AI", category: "language", description: "Pro version with extended context.", new: false },
  { id: 235, name: "Kimi API", company: "Moonshot AI", category: "language", description: "API-accessible model.", new: false },
  
  // Tencent
  { id: 240, name: "Hunyuan Turbo", company: "Tencent", category: "language", description: "Next-gen MoE. Smarter, faster, more affordable.", new: true },
  { id: 241, name: "Hunyuan Pro", company: "Tencent", category: "language", description: "Pro version with enhanced capabilities.", new: true },
  { id: 242, name: "Hunyuan Standard", company: "Tencent", category: "language", description: "Standard balanced model.", new: true },
  { id: 243, name: "Hunyuan 3D-2", company: "Tencent", category: "multimodal", description: "Open source 3D generation model.", new: true, openSource: true },
  { id: 244, name: "HunyuanImage 3.0", company: "Tencent", category: "image", description: "World's largest open-source image MoE. 80B params. 7th on LMArena.", new: true, openSource: true },
  { id: 245, name: "Hunyuan-VL", company: "Tencent", category: "multimodal", description: "Vision-language model from Tencent.", new: false },
  { id: 246, name: "Hunyuan-Large", company: "Tencent", category: "language", description: "Open source 389B MoE.", new: false, openSource: true },
  { id: 247, name: "HunyuanVideo", company: "Tencent", category: "video", description: "Open source video generation.", new: false, openSource: true },
  { id: 248, name: "HunyuanCode", company: "Tencent", category: "code", description: "Code generation model.", new: true },
  
  // Baidu
  { id: 260, name: "ERNIE 4.0 Turbo", company: "Baidu", category: "language", description: "Baidu's advanced LLM with enhanced capabilities.", new: true },
  { id: 261, name: "ERNIE-4E", company: "Baidu", category: "reasoning", description: "Baidu's latest reasoning model.", new: true },
  { id: 262, name: "ERNIE 4.0", company: "Baidu", category: "language", description: "Baidu's flagship LLM powering ERNIE Bot.", new: false },
  { id: 263, name: "ERNIE 3.5", company: "Baidu", category: "language", description: "Enhanced version with plugin support.", new: false },
  { id: 264, name: "ERNIE Speed", company: "Baidu", category: "language", description: "Fast inference model.", new: true },
  { id: 265, name: "ERNIE Lite", company: "Baidu", category: "language", description: "Lightweight model.", new: true },
  { id: 266, name: "ERNIE-ViLG 4.0", company: "Baidu", category: "image", description: "Text-to-image with Chinese cultural understanding.", new: true },
  { id: 267, name: "ERNIE-ViLG 3.0", company: "Baidu", category: "image", description: "Text-to-image model with strong Chinese support.", new: false },
  { id: 268, name: "ERNIE Bot", company: "Baidu", category: "language", description: "AI companion based on ERNIE.", new: false },
  { id: 269, name: "Comate", company: "Baidu", category: "code", description: "Coding assistant.", new: true },
  
  // Zhipu AI (GLM)
  { id: 280, name: "GLM-4.7", company: "Zhipu AI", category: "language", description: "Highest intelligence open source model. 0.9 GPQA.", new: true, openSource: true },
  { id: 281, name: "GLM-4.5", company: "Zhipu AI", category: "language", description: "Bilingual model with strong performance.", new: true },
  { id: 282, name: "GLM-4", company: "Zhipu AI", category: "language", description: "Flagship model with 1M context.", new: false },
  { id: 283, name: "GLM-4V", company: "Zhipu AI", category: "multimodal", description: "Vision-language version of GLM-4.", new: false },
  { id: 284, name: "GLM-3.5", company: "Zhipu AI", category: "language", description: "Enhanced version.", new: false },
  { id: 285, name: "GLM-5", company: "Zhipu AI", category: "language", description: "Latest GLM. Top open-source on Artificial Analysis.", new: true, openSource: true },
  { id: 286, name: "CogVideoX 2.0", company: "Zhipu AI", category: "video", description: "Updated text-to-video generation.", new: true, openSource: true },
  { id: 287, name: "CogVideoX", company: "Zhipu AI", category: "video", description: "Open source text-to-video.", new: false, openSource: true },
  { id: 288, name: "CogView-4", company: "Zhipu AI", category: "image", description: "Latest text-to-image with relay diffusion.", new: true },
  { id: 289, name: "CogView-3", company: "Zhipu AI", category: "image", description: "Text-to-image using relay diffusion.", new: false },
  { id: 290, name: "CogView 3 Plus", company: "Zhipu AI", category: "image", description: "Enhanced CogView3.", new: true },
  { id: 291, name: "VideoGen", company: "Zhipu AI", category: "video", description: "Video generation model.", new: true },
  
  // 01.AI (Yi)
  { id: 300, name: "Yi-Lightning", company: "01.AI", category: "language", description: "Fast efficient model ranked top on benchmarks.", new: false },
  { id: 301, name: "Yi-Large", company: "01.AI", category: "language", description: "Flagship with strong reasoning.", new: false },
  { id: 302, name: "Yi-Medium", company: "01.AI", category: "language", description: "Medium-sized model.", new: false },
  { id: 303, name: "Yi-1.5 Chat", company: "01.AI", category: "language", description: "Chat-optimized Yi model.", new: true, openSource: true },
  { id: 304, name: "Yi-1.5", company: "01.AI", category: "language", description: "Open source Yi fine-tuned.", new: true, openSource: true },
  { id: 305, name: "Yi-Vision", company: "01.AI", category: "multimodal", description: "Open source vision model.", new: false, openSource: true },
  { id: 306, name: "Yi-Coder", company: "01.AI", category: "code", description: "Code generation model.", new: true, openSource: true },
  { id: 307, name: "Yi-34B", company: "01.AI", category: "language", description: "Large open source model.", new: false, openSource: true },
  { id: 308, name: "Yi-6B", company: "01.AI", category: "language", description: "Compact open source model.", new: false, openSource: true },
  
  // MiniMax
  { id: 320, name: "MiniMax-02", company: "MiniMax", category: "language", description: "Updated MiniMax flagship model.", new: true },
  { id: 321, name: "MiniMax-01", company: "MiniMax", category: "language", description: "Previous flagship.", new: false },
  { id: 322, name: "Hailuo AI Video", company: "MiniMax", category: "video", description: "Free AI video generator.", new: false },
  { id: 323, name: "Hailuo AI", company: "MiniMax", category: "language", description: "Chat model.", new: false },
  { id: 324, name: "Abab 6.5", company: "MiniMax", category: "language", description: "Enhanced version.", new: true },
  
  // SenseTime
  { id: 330, name: "SenseNova 6.0", company: "SenseTime", category: "multimodal", description: "Latest multimodal with strong vision.", new: true },
  { id: 331, name: "SenseNova 5.0", company: "SenseTime", category: "multimodal", description: "Previous version.", new: false },
  { id: 332, name: "SenseChat", company: "SenseTime", category: "language", description: "SenseTime's chat model.", new: true },
  { id: 333, name: "SenseVision", company: "SenseTime", category: "multimodal", description: "Vision-focused model.", new: false },
  
  // StepFun
  { id: 340, name: "Step-2.5", company: "StepFun", category: "multimodal", description: "Updated multimodal with enhanced capabilities.", new: true },
  { id: 341, name: "Step-2", company: "StepFun", category: "multimodal", description: "Trillion-parameter MoE model.", new: false },
  { id: 342, name: "Step-1", company: "StepFun", category: "language", description: "First Step model.", new: false },
  { id: 343, name: "Step3-VL-10B", company: "StepFun", category: "multimodal", description: "Vision-language model.", new: true },
  
  // Shanghai AI Lab
  { id: 350, name: "InternLM 4", company: "Shanghai AI Lab", category: "language", description: "Open source from Shanghai AI Lab.", new: true, openSource: true },
  { id: 351, name: "InternLM 3", company: "Shanghai AI Lab", category: "language", description: "Open source instruction model.", new: false, openSource: true },
  { id: 352, name: "InternLM 2.5", company: "Shanghai AI Lab", category: "language", description: "Updated version.", new: false, openSource: true },
  { id: 353, name: "InternLM 2", company: "Shanghai AI Lab", category: "language", description: "Previous major version.", new: false, openSource: true },
  { id: 354, name: "InternLM-VL", company: "Shanghai AI Lab", category: "multimodal", description: "Vision-language from Shanghai AI Lab.", new: false, openSource: true },
  { id: 355, name: "InternLM-Math", company: "Shanghai AI Lab", category: "reasoning", description: "Math-focused model.", new: true, openSource: true },
  { id: 356, name: "InternLM-Code", company: "Shanghai AI Lab", category: "code", description: "Code generation.", new: true, openSource: true },
  
  // Kuaishou
  { id: 360, name: "Kling 3.0", company: "Kuaishou", category: "video", description: "Advanced video with Multi-Shot feature. Viral AI video generation.", new: true },
  { id: 361, name: "Kling 2.0", company: "Kuaishou", category: "video", description: "Open-source video generation with high motion quality.", new: false, openSource: true },
  { id: 362, name: "Kling 1.5", company: "Kuaishou", category: "video", description: "Updated video model.", new: false },
  { id: 363, name: "Kling 1.0", company: "Kuaishou", category: "video", description: "First generation video model.", new: false },
  
  // Ai2 (Allen Institute)
  { id: 370, name: "OLMo 2 13B", company: "Ai2", category: "language", description: "Best fully open language model. Trains on 5T tokens.", new: true, openSource: true },
  { id: 371, name: "OLMo 2 7B", company: "Ai2", category: "language", description: "Fully open model competing with Llama 3.1 8B.", new: true, openSource: true },
  { id: 372, name: "OLMoE 1B-7B", company: "Ai2", category: "language", description: "Open source MoE with on-device iOS app.", new: true, openSource: true },
  { id: 373, name: "OLMo 1", company: "Ai2", category: "language", description: "First OLMo model.", new: false, openSource: true },
  { id: 374, name: "Molmo 72B", company: "Ai2", category: "multimodal", description: "Open state-of-the-art multimodal.", new: false, openSource: true },
  { id: 375, name: "Molmo 7B", company: "Ai2", category: "multimodal", description: "Open source multimodal model.", new: false, openSource: true },
  { id: 376, name: "Molmo-Pixel", company: "Ai2", category: "multimodal", description: "Pixel-level understanding.", new: true, openSource: true },
  
  // TII (Falcon)
  { id: 380, name: "Falcon 3", company: "TII", category: "language", description: "Open source from TII. Strong performance.", new: true, openSource: true },
  { id: 381, name: "Falcon 3 Instruct", company: "TII", category: "language", description: "Open source instruction model.", new: true, openSource: true },
  { id: 382, name: "Falcon 3 Mamba", company: "TII", category: "language", description: "Open source Mamba-based model.", new: true, openSource: true },
  { id: 383, name: "Falcon 2", company: "TII", category: "language", description: "Previous generation.", new: false, openSource: true },
  { id: 384, name: "Falcon 180B", company: "TII", category: "language", description: "Large open source model.", new: false, openSource: true },
  
  // IBM
  { id: 390, name: "Granite 3.0 8B", company: "IBM", category: "language", description: "Open source enterprise model.", new: true, openSource: true },
  { id: 391, name: "Granite 3.0 3B", company: "IBM", category: "language", description: "Compact open source enterprise model.", new: true, openSource: true },
  { id: 392, name: "Granite 3.0 Vision 8B", company: "IBM", category: "multimodal", description: "Open source multimodal for enterprise.", new: true, openSource: true },
  { id: 393, name: "Granite 3.0 1B", company: "IBM", category: "language", description: "Small enterprise model.", new: true, openSource: true },
  { id: 394, name: "Granite 2", company: "IBM", category: "language", description: "Previous enterprise model.", new: false },
  { id: 395, name: "Granite Code", company: "IBM", category: "code", description: "Code generation for enterprise.", new: true },
  
  // BigScience
  { id: 400, name: "BLOOM 176B", company: "BigScience", category: "language", description: "Large open source multilingual model.", new: false, openSource: true },
  { id: 401, name: "BLOOM", company: "BigScience", category: "language", description: "Open source multilingual model.", new: false, openSource: true },
  { id: 402, name: "MT-NLG", company: "BigScience", category: "language", description: "Megatron-Turing NLG.", new: false },
  
  // LLaVA Project
  { id: 410, name: "LLaVA Next", company: "LLaVA Project", category: "multimodal", description: "Open source multimodal. Leading open vision-language.", new: true, openSource: true },
  { id: 411, name: "LLaVA 1.6", company: "LLaVA Project", category: "multimodal", description: "Enhanced version.", new: false, openSource: true },
  { id: 412, name: "LLaVA", company: "LLaVA Project", category: "multimodal", description: "Open source vision-language model.", new: false, openSource: true },
  { id: 413, name: "LLaVA-Next-Interleave", company: "LLaVA Project", category: "multimodal", description: "Open source interleaved multimodal.", new: true, openSource: true },
  { id: 414, name: "LLaVA-Prime", company: "LLaVA Project", category: "multimodal", description: "Prime version.", new: true, openSource: true },
  
  // BigCode
  { id: 420, name: "StarCoder 2", company: "BigCode", category: "code", description: "Open source code generation.", new: false, openSource: true },
  { id: 421, name: "StarCoder", company: "BigCode", category: "code", description: "Original code model.", new: false, openSource: true },
  { id: 422, name: "SantaCoder", company: "BigCode", category: "code", description: "Open source code model.", new: false, openSource: true },
  { id: 423, name: "PolyCoder", company: "BigCode", category: "code", description: "Code generation model.", new: false, openSource: true },
  
  // Hugging Face
  { id: 430, name: "Zephyr 7B", company: "Hugging Face", category: "language", description: "Open source chat model.", new: false, openSource: true },
  { id: 431, name: "Zephyr Beta", company: "Hugging Face", category: "language", description: "Beta version.", new: false, openSource: true },
  { id: 432, name: "OpenChat 3.6", company: "Hugging Face", category: "language", description: "Open source chat model with reasoning.", new: true, openSource: true },
  { id: 433, name: "OpenChat 3.5", company: "Hugging Face", category: "language", description: "Open source chat model.", new: false, openSource: true },
  { id: 434, name: "OpenChat", company: "Hugging Face", category: "language", description: "Base chat model.", new: false, openSource: true },
  
  // Teknium
  { id: 440, name: "OpenHermes 2.5", company: "Teknium", category: "language", description: "Open source instruction model.", new: false, openSource: true },
  { id: 441, name: "OpenHermes 2", company: "Teknium", category: "language", description: "Previous version.", new: false, openSource: true },
  { id: 442, name: "OpenHermes", company: "Teknium", category: "language", description: "Original model.", new: false, openSource: true },
  { id: 443, name: "OpenCodePreacher", company: "Teknium", category: "code", description: "Open source code preaching model.", new: true, openSource: true },
  
  // Black Forest Labs
  { id: 450, name: "FLUX.1 Pro", company: "Black Forest Labs", category: "image", description: "Top-tier open source image generation.", new: false, openSource: true },
  { id: 451, name: "FLUX.1 Dev", company: "Black Forest Labs", category: "image", description: "Open source image generation.", new: true, openSource: true },
  { id: 452, name: "FLUX.1 Schnell", company: "Black Forest Labs", category: "image", description: "Fast open source image.", new: true, openSource: true },
  { id: 453, name: "FLUX.1", company: "Black Forest Labs", category: "image", description: "Base FLUX model.", new: false, openSource: true },
  { id: 454, name: "FLUX.1 Tools", company: "Black Forest Labs", category: "image", description: "Image editing tools.", new: true },
  
  // Databricks
  { id: 460, name: "DBRX", company: "Databricks", category: "language", description: "Open source MoE model.", new: false, openSource: true },
  { id: 461, name: "DBRX Instruct", company: "Databricks", category: "language", description: "Instruct-tuned version.", new: false, openSource: true },
  { id: 462, name: "DBRX Preview", company: "Databricks", category: "language", description: "Preview version.", new: false },
  
  // Nvidia
  { id: 470, name: "Nemotron 70B", company: "Nvidia", category: "language", description: "Nvidia's flagship model.", new: true },
  { id: 471, name: "Nemotron 49B", company: "Nvidia", category: "language", description: "Mid-size model.", new: true },
  { id: 472, name: "Nemotron Mini", company: "Nvidia", category: "language", description: "Compact model.", new: true },
  { id: 473, name: "NVLM 1.0", company: "Nvidia", category: "multimodal", description: "Nvidia's vision-language model.", new: true },
  { id: 474, name: "ChipNeMo", company: "Nvidia", category: "code", description: "Chip design specialized model.", new: true },
  
  // xAI
  { id: 480, name: "Grok-1", company: "xAI", category: "language", description: "Open source base model.", new: false, openSource: true },
  { id: 481, name: "Grok-1.5 Vision", company: "xAI", category: "multimodal", description: "Open source vision model.", new: false, openSource: true },
  { id: 482, name: "Grok-2.0", company: "xAI", category: "language", description: "Updated version.", new: true },
  
  // Perplexity
  { id: 490, name: "Perplexity Pro", company: "Perplexity AI", category: "language", description: "Pro search with enhanced capabilities.", new: true },
  { id: 491, name: "Perplexity Sonar", company: "Perplexity AI", category: "language", description: "Search-focused model.", new: true },
  { id: 492, name: "Perplexity Sonar Small", company: "Perplexity AI", category: "language", description: "Small search model.", new: true },
  
  // Anthropic (additional)
  { id: 500, name: "Claude Instant", company: "Anthropic", category: "language", description: "Fast lightweight model.", new: false },
  { id: 501, name: "Claude 2.1", company: "Anthropic", category: "language", description: "Previous version.", new: false },
  { id: 502, name: "Claude 2.0", company: "Anthropic", category: "language", description: "Major version 2.", new: false },
  { id: 503, name: "Claude 1", company: "Anthropic", category: "language", description: "First Claude model.", new: false },
  
  // Xiaomi
  { id: 510, name: "MiMo-V2-Flash", company: "Xiaomi", category: "language", description: "Xiaomi's latest. 0.8 GPQA score.", new: true },
  { id: 511, name: "MiMo-V2", company: "Xiaomi", category: "language", description: "Full version.", new: true },
  { id: 512, name: "MiMo", company: "Xiaomi", category: "language", description: "First Xiaomi model.", new: false },
  
  // AI21 Labs
  { id: 520, name: "Jamba 1.5 Large", company: "AI21 Labs", category: "language", description: "256K context hybrid SSM-Transformer.", new: false },
  { id: 521, name: "Jamba 1.5", company: "AI21 Labs", category: "language", description: "Enhanced version.", new: false },
  { id: 522, name: "Jamba", company: "AI21 Labs", category: "language", description: "First Jamba model.", new: false },
  { id: 523, name: "Jurassic-2 Ultra", company: "AI21 Labs", category: "language", description: "Previous flagship.", new: false },
  { id: 524, name: "Jurassic-2 Mid", company: "AI21 Labs", category: "language", description: "Mid-size model.", new: false },
  
  // Aleph Alpha
  { id: 530, name: "Luminous Supreme", company: "Aleph Alpha", category: "language", description: "Flagship model.", new: false },
  { id: 531, name: "Luminous Extended", company: "Aleph Alpha", category: "language", description: "Extended context model.", new: false },
  { id: 532, name: "Luminous Base", company: "Aleph Alpha", category: "language", description: "Base model.", new: false },
  
  // Inflection
  { id: 540, name: "Inflection-2.5", company: "Inflection AI", category: "language", description: "Enhanced Pi model.", new: false },
  { id: 541, name: "Inflection-2", company: "Inflection AI", category: "language", description: "Pi model v2.", new: false },
  { id: 542, name: "Inflection-1", company: "Inflection AI", category: "language", description: "First Pi model.", new: false },
  
  // Adept
  { id: 550, name: "ACT-1", company: "Adept", category: "language", description: "Action transformer.", new: false },
  { id: 551, name: "Adept-2", company: "Adept", category: "language", description: "Updated version.", new: false },
  
  // Runway
  { id: 560, name: "Gen-3 Alpha", company: "Runway", category: "video", description: "Latest video generation.", new: true },
  { id: 561, name: "Gen-2", company: "Runway", category: "video", description: "Previous generation.", new: false },
  { id: 562, name: "Gen-1", company: "Runway", category: "video", description: "First generation.", new: false },
  
  // Pika
  { id: 570, name: "Pika 1.0", company: "Pika Labs", category: "video", description: "Video generation model.", new: false },
  { id: 571, name: "Pika Labs", company: "Pika Labs", category: "video", description: "Latest Pika model.", new: true },
  
  // Luma AI
  { id: 580, name: "Dream Machine", company: "Luma AI", category: "video", description: "Video generation from Luma.", new: true },
  { id: 581, name: "Luma Photon", company: "Luma AI", category: "multimodal", description: "Multimodal model.", new: true },
  
  // ElevenLabs
  { id: 590, name: "Eleven Multilingual v2", company: "ElevenLabs", category: "audio", description: "Multilingual voice synthesis.", new: true },
  { id: 591, name: "Eleven Multilingual", company: "ElevenLabs", category: "audio", description: "First multilingual TTS.", new: false },
  { id: 592, name: "Eleven Core", company: "ElevenLabs", category: "audio", description: "Core voice model.", new: false },
  
  // Suno
  { id: 600, name: "Suno V4", company: "Suno AI", category: "audio", description: "Latest music generation.", new: true },
  { id: 601, name: "Suno V3", company: "Suno AI", category: "audio", description: "Previous music model.", new: false },
  { id: 602, name: "Suno V2", company: "Suno AI", category: "audio", description: "Music generation v2.", new: false },
  
  // Udio
  { id: 610, name: "Udio v1.5", company: "Udio", category: "audio", description: "Updated music generation.", new: true },
  { id: 611, name: "Udio", company: "Udio", category: "audio", description: "Music generation model.", new: true },
  
  // Meta (additional)
  { id: 620, name: "Massively Multilingual Speech", company: "Meta AI", category: "audio", description: "Universal speech model.", new: true, openSource: true },
  { id: 621, name: "VoiceBox", company: "Meta AI", category: "audio", description: "Voice generation.", new: false, openSource: true },
  { id: 622, name: "MMS", company: "Meta AI", category: "audio", description: "Massively multilingual speech.", new: true, openSource: true },
  
  // OpenAI (additional)
  { id: 630, name: "GPT-4 Turbo", company: "OpenAI", category: "language", description: "Enhanced GPT-4 with vision.", new: false },
  { id: 631, name: "GPT-4", company: "OpenAI", category: "language", description: "Original GPT-4.", new: false },
  { id: 632, name: "GPT-3.5 Turbo", company: "OpenAI", category: "language", description: "Fast and efficient.", new: false },
  { id: 633, name: "Embedding-3", company: "OpenAI", category: "language", description: "Latest embeddings.", new: true },
  { id: 634, name: "Embedding-2", company: "OpenAI", category: "language", description: "Previous embeddings.", new: false },
  { id: 635, name: "Moderation", company: "OpenAI", category: "language", description: "Content moderation.", new: false },
  
  // Mistral (additional)
  { id: 640, name: "Mixtral 8x22B", company: "Mistral AI", category: "language", description: "Open-source MoE model.", new: false, openSource: true },
  { id: 641, name: "Mixtral 8x7B", company: "Mistral AI", category: "language", description: "Original Mixtral.", new: false, openSource: true },
  { id: 642, name: "Mistral 7B", company: "Mistral AI", category: "language", description: "Base 7B model.", new: false, openSource: true },
  { id: 643, name: "Codestral 2501", company: "Mistral AI", category: "code", description: "Open source code model.", new: true, openSource: true },
  { id: 644, name: "Mathstral", company: "Mistral AI", category: "reasoning", description: "Math-focused model.", new: true, openSource: true },
  
  // Deci
  { id: 650, name: "DeciLM 70B", company: "Deci AI", category: "language", description: "Efficient large model.", new: false },
  { id: 651, name: "DeciLM 7B", company: "Deci AI", category: "language", description: "Compact efficient model.", new: false },
  
  // Together AI
  { id: 660, name: "Llama-3-Tulu-3-70B", company: "Together AI", category: "language", description: "Fine-tuned Llama.", new: true, openSource: true },
  { id: 661, name: "Mistral-7B-Instruct-v0.2", company: "Together AI", category: "language", description: "Fine-tuned Mistral.", new: false, openSource: true },
  
  // Fireworks AI
  { id: 670, name: "Firefunction-v2", company: "Fireworks AI", category: "code", description: "Function calling model.", new: true },
  { id: 671, name: "Fireworks LLMs", company: "Fireworks AI", category: "language", description: "Various fine-tuned models.", new: true },
  
  // Anyscale
  { id: 680, name: "LLama-2-70B-Chat", company: "Anyscale", category: "language", description: "Fine-tuned Llama 2.", new: false },
  { id: 681, name: "Mistral-7B-Instruct", company: "Anyscale", category: "language", description: "Fine-tuned Mistral.", new: false },
  
  // Replicate
  { id: 690, name: "Llama 2 70B", company: "Replicate", category: "language", description: "Hosted Llama 2.", new: false },
  { id: 691, name: "Claude 3 Opus", company: "Replicate", category: "language", description: "Hosted Claude.", new: false },
  
  // Cerebras
  { id: 700, name: "Cerebras-GPT", company: "Cerebras", category: "language", description: "Efficient open models.", new: false, openSource: true },
  
  // Hyundai
  { id: 710, name: "HyperCLOVA X", company: "Hyundai", category: "language", description: "Korean language model.", new: false },
  
  // Samsung
  { id: 720, name: "Samsung Gauss", company: "Samsung", category: "language", description: "Samsung's LLM.", new: false },
  { id: 721, name: "Samsung Gauss Code", company: "Samsung", category: "code", description: "Code generation.", new: false },
  { id: 722, name: "Samsung Gauss Image", company: "Samsung", category: "image", description: "Image generation.", new: false },
  
  // Adobe
  { id: 730, name: "Adobe Firefly 2", company: "Adobe", category: "image", description: "Commercial image generation.", new: true },
  { id: 731, name: "Adobe Firefly", company: "Adobe", category: "image", description: "First Firefly model.", new: false },
  { id: 732, name: "Adobe Sensei", company: "Adobe", category: "multimodal", description: "Creative AI suite.", new: false },
  
  // Canva
  { id: 740, name: "Canva AI", company: "Canva", category: "image", description: "Design AI features.", new: true },
  
  // Notion
  { id: 750, name: "Notion AI", company: "Notion", category: "language", description: "Workspace AI assistant.", new: false },
  
  // Atlassian
  { id: 760, name: "Rovo", company: "Atlassian", category: "language", description: "Enterprise AI.", new: true },
  
  // Salesforce
  { id: 770, name: "Einstein GPT", company: "Salesforce", category: "language", description: "CRM AI.", new: true },
  { id: 771, name: "CodeGen", company: "Salesforce", category: "code", description: "Code generation.", new: false, openSource: true },
  
  // SAP
  { id: 780, name: "SAP Joule", company: "SAP", category: "language", description: "Enterprise AI assistant.", new: true },
  
  // ServiceNow
  { id: 790, name: "Now Assist", company: "ServiceNow", category: "language", description: "Workflow AI.", new: true },
  
  // Cohere (additional)
  { id: 800, name: "Cohere For Enterprise", company: "Cohere", category: "language", description: "Enterprise solutions.", new: true },
  
  // Upstage
  { id: 810, name: "Solar", company: "Upstage", category: "language", description: "Fast large model.", new: false },
  { id: 811, name: "Solar Mini", company: "Upstage", category: "language", description: "Compact version.", new: true },
  
  // Naver
  { id: 820, name: "HyperCLOVA X", company: "Naver", category: "language", description: "Korean LLM.", new: false },
  { id: 821, name: "CLOVA X", company: "Naver", category: "language", description: "Korean AI assistant.", new: true },
  
  // Line
  { id: 830, name: "LINE AI", company: "Line", category: "language", description: "Japanese AI assistant.", new: false },
  
  // 42dot
  { id: 840, name: "LLM 2.0", company: "42dot", category: "language", description: "Korean AI model.", new: false },
  
  // Kakao
  { id: 850, name: "KoGPT", company: "Kakao", category: "language", description: "Korean language model.", new: false },
  { id: 851, name: "Kakao Brain", company: "Kakao", category: "language", description: "Kakao Brain LLM.", new: true },
  
  // LG AI
  { id: 860, name: "Exaone", company: "LG AI", category: "language", description: "LG's AI model.", new: false },
  { id: 861, name: "Exaone Deep", company: "LG AI", category: "language", description: "Enhanced version.", new: true },
  
  // SK Telecom
  { id: 870, name: "A.", company: "SK Telecom", category: "language", description: "Korean AI assistant.", new: false },
  
  // KT
  { id: 880, name: "KT AI", company: "KT", category: "language", description: "Telecom AI model.", new: false },
  
  // AMD
  { id: 890, name: "AMD OLMo", company: "AMD", category: "language", description: "AMD's open LLM.", new: true, openSource: true },
  
  // Intel
  { id: 900, name: "Intel Neural Chat", company: "Intel", category: "language", description: "Intel's instruction-tuned model.", new: true, openSource: true },
  { id: 901, name: "Intel Aurora", company: "Intel", category: "language", description: "Scientific model.", new: true },
  
  // Qualcomm
  { id: 910, name: "AI Hub Models", company: "Qualcomm", category: "language", description: "On-device AI models.", new: true, openSource: true },
  
  // Axolotl
  { id: 920, name: "BlueWhale", company: "Axolotl", category: "language", description: "Open source instruction model.", new: false, openSource: true },
  
  // Hugging Face (additional)
  { id: 930, name: "DialoGPT", company: "Hugging Face", category: "language", description: "Dialogue model.", new: false, openSource: true },
  { id: 931, name: "BART", company: "Hugging Face", category: "language", description: "Seq2seq model.", new: false, openSource: true },
  { id: 932, name: "T5", company: "Hugging Face", category: "language", description: "Text-to-text model.", new: false, openSource: true },
  
  // EleutherAI
  { id: 940, name: "GPT-NeoX-20B", company: "EleutherAI", category: "language", description: "Open source GPT model.", new: false, openSource: true },
  { id: 941, name: "GPT-J-6B", company: "EleutherAI", category: "language", description: "6B parameter model.", new: false, openSource: true },
  { id: 942, name: "GPT-Neo", company: "EleutherAI", category: "language", description: "Early open GPT.", new: false, openSource: true },
  
  // MosaicML
  { id: 950, name: "M2", company: "MosaicML", category: "language", description: "Efficient model.", new: false },
  { id: 951, name: "MPT-30B", company: "MosaicML", category: "language", description: "Commercial model.", new: false, openSource: true },
  
  // Palmer
  { id: 960, name: "PaLM 2", company: "Google", category: "language", description: "Pathways Language Model 2.", new: false },
  { id: 961, name: "PaLM", company: "Google", category: "language", description: "Original PaLM.", new: false },
  { id: 962, name: "T5", company: "Google", category: "language", description: "Text-to-text transformer.", new: false },
  { id: 963, name: "UL2", company: "Google", category: "language", description: "Unified language learner.", new: false },
  { id: 964, name: "Flamingo", company: "Google DeepMind", category: "multimodal", description: "Vision-language model.", new: false },
  { id: 965, name: "Gopher", company: "DeepMind", category: "language", description: "Early large model.", new: false },
  { id: 966, name: "Chinchilla", company: "DeepMind", category: "language", description: "Efficient 70B model.", new: false },
  { id: 967, name: "Sparrow", company: "DeepMind", category: "language", description: "Aligned language model.", new: false },
  
  // Meta (additional)
  { id: 970, name: "OPT", company: "Meta AI", category: "language", description: "Open pretrained transformer.", new: false, openSource: true },
  { id: 971, name: "Galactica", company: "Meta AI", category: "language", description: "Scientific model.", new: false, openSource: true },
  { id: 972, name: "ESM", company: "Meta AI", category: "language", description: "Protein structure model.", new: false, openSource: true },
  
  // Others
  { id: 980, name: "Jasper", company: "Jasper", category: "language", description: "Marketing AI.", new: false },
  { id: 981, name: "Copy.ai", company: "Copy.ai", category: "language", description: "Copywriting AI.", new: false },
  { id: 982, name: "Writesonic", company: "Writesonic", category: "language", description: "Content AI.", new: false },
  { id: 983, name: "Contentful", company: "Contentful", category: "language", description: "Content AI.", new: false },
  { id: 984, name: "Character AI", company: "Character AI", category: "language", description: "Character-based AI.", new: false },
  { id: 985, name: "Anthropic Claude", company: "Anthropic", category: "language", description: "Claude family.", new: false },
  { id: 986, name: "Inflection Pi", company: "Inflection AI", category: "language", description: "Personal AI.", new: false },
  { id: 987, name: "Adept Action", company: "Adept", category: "language", description: "Action-taking AI.", new: false },
  { id: 988, name: "Perplexity", company: "Perplexity AI", category: "language", description: "AI search.", new: false },
  { id: 989, name: "You.com", company: "You.com", category: "language", description: "AI search assistant.", new: false },
  { id: 990, name: "Neeva", company: "Neeva", category: "language", description: "Privacy-first search.", new: false },
  
  // More recent 2025-2026 models
  { id: 1000, name: "Claude 4.5 Sonnet", company: "Anthropic", category: "language", description: "Enhanced Sonnet version.", new: true },
  { id: 1001, name: "Claude 4 Haiku", company: "Anthropic", category: "language", description: "Fast Claude 4.", new: true },
  { id: 1002, name: "Gemini 3.5 Pro", company: "Google DeepMind", category: "multimodal", description: "Enhanced version of Gemini 3.", new: true },
  { id: 1003, name: "Gemini 3.5 Flash", company: "Google DeepMind", category: "multimodal", description: "Fast multimodal model.", new: true },
  { id: 1004, name: "GPT-5.5", company: "OpenAI", category: "multimodal", description: "Next GPT version after 5.3.", new: true },
  { id: 1005, name: "GPT-5.3 Ultra", company: "OpenAI", category: "multimodal", description: "Ultra flagship model.", new: true },
  { id: 1006, name: "Grok-3", company: "xAI", category: "language", description: "Latest Grok model.", new: true },
  { id: 1007, name: "Grok-3 Vision", company: "xAI", category: "multimodal", description: "Vision-enabled Grok.", new: true },
  { id: 1008, name: "Llama 5", company: "Meta AI", category: "language", description: "Next Llama generation.", new: true, openSource: true },
  { id: 1009, name: "Llama 5 Vision", company: "Meta AI", category: "multimodal", description: "Multimodal Llama.", new: true, openSource: true },
  { id: 1010, name: "DeepSeek V4", company: "DeepSeek", category: "language", description: "Next DeepSeek version.", new: true, openSource: true },
  { id: 1011, name: "DeepSeek R2 Pro", company: "DeepSeek", category: "reasoning", description: "Enhanced reasoning.", new: true, openSource: true },
  { id: 1012, name: "Mistral Large 4", company: "Mistral AI", category: "language", description: "Next flagship.", new: true },
  { id: 1013, name: "Qwen3 Ultra", company: "Alibaba Cloud", category: "language", description: "Ultra Qwen model.", new: true, openSource: true },
  { id: 1014, name: "Qwen3 Pro", company: "Alibaba Cloud", category: "language", description: "Pro Qwen version.", new: true, openSource: true },
  { id: 1015, name: "Gemma 4", company: "Google DeepMind", category: "language", description: "Next Gemma.", new: true, openSource: true },
  { id: 1016, name: "Gemma 4 Vision", company: "Google DeepMind", category: "multimodal", description: "Vision Gemma.", new: true, openSource: true },
  { id: 1017, name: "Phi-5", company: "Microsoft", category: "language", description: "Next Phi generation.", new: true },
  { id: 1018, name: "WizardLM-3", company: "Microsoft", category: "language", description: "Next WizardLM.", new: true, openSource: true },
  { id: 1019, name: "Stable Diffusion 4", company: "Stability AI", category: "image", description: "Next SD version.", new: true, openSource: true },
  { id: 1020, name: "Stable Video 2", company: "Stability AI", category: "video", description: "Next video model.", new: true, openSource: true },
  { id: 1021, name: "Nova 2", company: "Amazon", category: "language", description: "Next Nova.", new: true },
  { id: 1022, name: "Nova Multimodal", company: "Amazon", category: "multimodal", description: "Multimodal Nova.", new: true },
  { id: 1023, name: "Apple Intelligence 3", company: "Apple", category: "language", description: "Next Apple AI.", new: true },
  { id: 1024, name: "Doubao 2", company: "ByteDance", category: "language", description: "Next Doubao.", new: true },
  { id: 1025, name: "Kimi K3", company: "Moonshot AI", category: "reasoning", description: "Next Kimi reasoning.", new: true },
  { id: 1026, name: "Hunyuan 4", company: "Tencent", category: "language", description: "Next Hunyuan.", new: true },
  { id: 1027, name: "ERNIE 5", company: "Baidu", category: "language", description: "Next ERNIE.", new: true },
  { id: 1028, name: "GLM-5 Pro", company: "Zhipu AI", category: "language", description: "Next GLM Pro.", new: true },
  { id: 1029, name: "CogVideoX Pro", company: "Zhipu AI", category: "video", description: "Pro video model.", new: true },
  { id: 1030, name: "Yi 2", company: "01.AI", category: "language", description: "Next Yi.", new: true, openSource: true },
  { id: 1031, name: "InternLM 5", company: "Shanghai AI Lab", category: "language", description: "Next InternLM.", new: true, openSource: true },
  { id: 1032, name: "MiniMax 3", company: "MiniMax", category: "language", description: "Next MiniMax.", new: true },
  { id: 1033, name: "OLMo 3", company: "Ai2", category: "language", description: "Next OLMo.", new: true, openSource: true },
  { id: 1034, name: "Grok-3 Mini", company: "xAI", category: "language", description: "Fast Grok.", new: true },
  { id: 1035, name: "Command R8", company: "Cohere", category: "language", description: "Next Command R.", new: true },
  { id: 1036, name: "Falcon 4", company: "TII", category: "language", description: "Next Falcon.", new: true, openSource: true },
  { id: 1037, name: "Granite 4", company: "IBM", category: "language", description: "Next Granite.", new: true, openSource: true },
  { id: 1038, name: "Nemotron 4", company: "Nvidia", category: "language", description: "Next Nemotron.", new: true },
  { id: 1039, name: "DALL-E 5", company: "OpenAI", category: "image", description: "Next DALL-E.", new: true },
  { id: 1040, name: "Sora 2", company: "OpenAI", category: "video", description: "Next Sora.", new: true },
  { id: 1041, name: "Veo 4", company: "Google DeepMind", category: "video", description: "Next Veo.", new: true },
  { id: 1042, name: "Imagen 5", company: "Google DeepMind", category: "image", description: "Next Imagen.", new: true },
  { id: 1043, name: "Runway Gen-4", company: "Runway", category: "video", description: "Next Gen.", new: true },
  { id: 1044, name: "Kling 4", company: "Kuaishou", category: "video", description: "Next Kling.", new: true },
  { id: 1045, name: "Suno V5", company: "Suno AI", category: "audio", description: "Next Suno.", new: true },
  { id: 1046, name: "Udio v2", company: "Udio", category: "audio", description: "Next Udio.", new: true },
  { id: 1047, name: "FLUX 2", company: "Black Forest Labs", category: "image", description: "Next FLUX.", new: true, openSource: true },
  { id: 1048, name: "ElevenLabs v3", company: "ElevenLabs", category: "audio", description: "Next ElevenLabs.", new: true },
];
