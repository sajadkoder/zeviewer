export const metadata = {
  title: "Privacy Policy - Zeviewer",
  description: "Privacy Policy for Zeviewer - Open AI model review platform",
};

export default function PrivacyPolicy() {
  return (
    <>
      <div className="bg-pattern"></div>
      <div className="grid-overlay"></div>
      <main className="min-h-screen pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-3xl sm:text-4xl font-light mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-sm sm:prose">
            <p className="text-[#a8a49e] mb-6">Last updated: February 2026</p>

            <h2 className="text-xl font-medium mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-[#a8a49e] mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="text-[#a8a49e] list-disc pl-6 mb-4 space-y-2">
              <li>Email address and password when you create an account</li>
              <li>Reviews and ratings you submit for AI models</li>
              <li>AI models you submit to our database</li>
            </ul>

            <h2 className="text-xl font-medium mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-[#a8a49e] mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-[#a8a49e] list-disc pl-6 mb-4 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Display your reviews and contributions publicly</li>
              <li>Send you important updates about our platform</li>
              <li>Improve and optimize our services</li>
            </ul>

            <h2 className="text-xl font-medium mt-8 mb-4">3. Data Storage</h2>
            <p className="text-[#a8a49e] mb-4">
              Your data is stored securely using Supabase, a trusted backend service. 
              We implement appropriate security measures to protect your personal information.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">4. Cookies</h2>
            <p className="text-[#a8a49e] mb-4">
              We may use cookies to enhance your experience. You can instruct your browser 
              to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">5. Third-Party Services</h2>
            <p className="text-[#a8a49e] mb-4">
              Our platform uses Supabase for authentication and data storage. 
              Their privacy policy applies to their handling of your data.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">6. Contact Us</h2>
            <p className="text-[#a8a49e] mb-4">
              If you have any questions about this Privacy Policy, please contact us through our platform.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
