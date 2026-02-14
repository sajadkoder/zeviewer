export const metadata = {
  title: "Terms of Service - Zeviewer",
  description: "Terms of Service for Zeviewer - Open AI model review platform",
};

export default function TermsOfService() {
  return (
    <>
      <div className="bg-pattern"></div>
      <div className="grid-overlay"></div>
      <main className="min-h-screen pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-3xl sm:text-4xl font-light mb-8">Terms of Service</h1>
          <div className="prose prose-invert prose-sm sm:prose">
            <p className="text-[#a8a49e] mb-6">Last updated: February 2026</p>

            <h2 className="text-xl font-medium mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#a8a49e] mb-4">
              By accessing and using Zeviewer, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">2. Use License</h2>
            <p className="text-[#a8a49e] mb-4">
              Permission is granted to temporarily use Zeviewer for personal, 
              non-commercial transitory viewing only.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">3. User Contributions</h2>
            <p className="text-[#a8a49e] mb-4">
              Users may submit reviews and add AI models to our database. 
              By submitting content, you:
            </p>
            <ul className="text-[#a8a49e] list-disc pl-6 mb-4 space-y-2">
              <li>Grant us the right to display your contributions publicly</li>
              <li>Warrant that you own or have the right to use the content</li>
              <li>Agree that your reviews reflect your genuine opinions</li>
            </ul>

            <h2 className="text-xl font-medium mt-8 mb-4">4. Prohibited Activities</h2>
            <p className="text-[#a8a49e] mb-4">
              You may not use our service to:
            </p>
            <ul className="text-[#a8a49e] list-disc pl-6 mb-4 space-y-2">
              <li>Submit false or misleading reviews</li>
              <li>Upload viruses or malicious code</li>
              <li>Harass, abuse, or discriminate against others</li>
              <li>Submit copyrighted material without permission</li>
            </ul>

            <h2 className="text-xl font-medium mt-8 mb-4">5. Disclaimer</h2>
            <p className="text-[#a8a49e] mb-4">
              Zeviewer is provided "as is" without any representations or warranties. 
              The information on this site is for general information purposes only.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-[#a8a49e] mb-4">
              We will not be liable to you in relation to the contents of, 
              or use of, or otherwise in connection with this website.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">7. Contact Us</h2>
            <p className="text-[#a8a49e] mb-4">
              If you have any questions about these Terms of Service, please contact us through our platform.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
