import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Calendar, Building2, Users, Target, TrendingUp } from "lucide-react";
import Logo from "@/components/logo";

export const metadata = {
  title: "About Us - Verazer Technologies",
  description: "Learn about Verazer Technologies Ventures Private Limited - A startup focused on agriculture software solutions, founded in 2025.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <Logo variant="collapsed" bgColor="transparent" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-foreground font-medium"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Verazer Technologies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering agriculture businesses through innovative software solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Verazer Technologies Ventures Private Limited was founded in 2025 as an innovative startup 
                focused on transforming the agriculture industry through technology. As a subsidiary of Bengal 
                Tea & Fabrics Limited, we combine decades of industry expertise with cutting-edge software 
                development capabilities.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We are an early-stage startup (pre-Series B) dedicated to building custom software solutions 
                that help agriculture businesses automate their production, supply chain, and sales processes. 
                Our mission is to bridge the gap between traditional agriculture practices and modern 
                technology solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                Based in Kolkata, West Bengal, we serve clients across India and are expanding our reach 
                to help more agriculture businesses leverage technology for growth and efficiency.
              </p>
            </div>
            <Card className="bg-gradient-to-br from-green-100/50 to-blue-100/50 dark:from-green-900/20 dark:to-blue-900/20">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Company Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Company Name</p>
                    <p className="text-muted-foreground">Verazer Technologies Ventures Private Limited</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Founded</p>
                    <p className="text-muted-foreground">2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Funding Stage</p>
                    <p className="text-muted-foreground">Pre-Series B (Early Stage Startup)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      4th floor, Century Tower, 45, Shakespeare Sarani,<br />
                      opposite Kala Mandir, Mullick Bazar, Park Street area,<br />
                      Kolkata, West Bengal 700017, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Founded in 2025</CardTitle>
                <CardDescription>
                  A young, innovative startup with fresh perspectives on agriculture technology
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Pre-Series B</CardTitle>
                <CardDescription>
                  Early-stage startup focused on growth and innovation in agriculture tech
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>Industry Expertise</CardTitle>
                <CardDescription>
                  Backed by decades of agriculture industry experience from Bengal Tea & Fabrics Limited
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower agriculture businesses with innovative software solutions that streamline 
                  operations, increase efficiency, and drive sustainable growth. We believe technology 
                  should be accessible and practical for businesses of all sizes in the agriculture sector.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become the leading provider of agriculture automation software in India, helping 
                  transform traditional agriculture businesses into modern, data-driven enterprises that 
                  can compete and thrive in the digital age.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Logo variant="default" bgColor="transparent" width={120} className="mb-4" />
              <p className="text-muted-foreground">
                Transforming agriculture businesses through innovative software solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-foreground transition-colors">Services</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-foreground transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Verazer Technologies Ventures Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
