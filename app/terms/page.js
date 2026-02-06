import Logo from "@/components/logo";

export const metadata = {
  title: "Terms of Service - Verazer Technologies",
  description: "Terms of Service for Verazer Technologies Ventures Private Limited",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/">
                <Logo variant="collapsed" bgColor="transparent" />
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-foreground/70 hover:text-foreground transition-colors">Home</a>
              <a href="/about" className="text-foreground/70 hover:text-foreground transition-colors">About</a>
              <a href="/#contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using the website of Verazer Technologies Ventures Private Limited ("Verazer," 
              "we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to these Terms of Service, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily access the materials on Verazer's website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
              and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Services</h2>
            <p className="text-muted-foreground mb-4">
              Verazer Technologies provides software solutions and services for agriculture businesses. 
              The specific terms and conditions for our services will be outlined in separate service agreements 
              or contracts. This website serves as an informational platform about our company and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              The materials on Verazer's website are provided on an 'as is' basis. Verazer makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including, without 
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
              or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitations</h2>
            <p className="text-muted-foreground mb-4">
              In no event shall Verazer or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or 
              inability to use the materials on Verazer's website, even if Verazer or a Verazer authorized 
              representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Accuracy of Materials</h2>
            <p className="text-muted-foreground mb-4">
              The materials appearing on Verazer's website could include technical, typographical, or photographic 
              errors. Verazer does not warrant that any of the materials on its website are accurate, complete, 
              or current. Verazer may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Links</h2>
            <p className="text-muted-foreground mb-4">
              Verazer has not reviewed all of the sites linked to its website and is not responsible for the 
              contents of any such linked site. The inclusion of any link does not imply endorsement by Verazer 
              of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Modifications</h2>
            <p className="text-muted-foreground mb-4">
              Verazer may revise these Terms of Service at any time without notice. By using this website, 
              you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of India, 
              and you irrevocably submit to the exclusive jurisdiction of the courts in Kolkata, West Bengal, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-muted-foreground">
              <strong>Email:</strong> kushagra@verazer.com<br />
              <strong>Address:</strong> 4th floor, Century Tower, 45, Shakespeare Sarani, opposite Kala Mandir, 
              Mullick Bazar, Park Street area, Kolkata, West Bengal 700017, India
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted border-t py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Verazer Technologies Ventures Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
