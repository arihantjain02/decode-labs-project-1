import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, CheckCircle2, Trophy, Target, Sparkles, Building2, Terminal, Briefcase, Video, Map as MapIcon } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <header className="px-6 py-4 flex items-center justify-between sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center gap-2 text-primary font-bold text-2xl">
          <BrainCircuit className="h-8 w-8" />
          <span>PrepPortal</span>
        </div>
        <div className="flex gap-4">
          <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors flex items-center">
            Sign In
          </Link>
          <Link href="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            The Ultimate Placement Copilot
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Crack top tech companies with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              precision.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            Stop guessing what to study. PrepPortal analyzes your resume, tracks your DSA progress, 
            and generates a personalized roadmap to get you interview-ready.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/dashboard">
              <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-lg shadow-primary/25">
                Start Preparing Free
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto">
              View Curriculum
            </Button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-muted/50 px-6 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need, in one place.</h2>
              <p className="text-muted-foreground text-lg">A systematic approach to conquering technical interviews.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                    <Terminal className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">DSA Progress Tracker</h3>
                  <p className="text-muted-foreground">Keep track of every problem you solve. Visualize your streak and identify weak areas before the recruiter does.</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                    <Video className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Mock Interviews</h3>
                  <p className="text-muted-foreground">Practice behavioral and technical questions with our AI interviewer. Get instant feedback on your delivery.</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                    <MapIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Dynamic Roadmaps</h3>
                  <p className="text-muted-foreground">Input your target company and timeline, and we'll generate a day-by-day plan of exactly what to study.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Trusted by students at top universities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">12k+</div>
              <div className="text-muted-foreground font-medium">Active Students</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">5M+</div>
              <div className="text-muted-foreground font-medium">Problems Tracked</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">850+</div>
              <div className="text-muted-foreground font-medium">Offers Secured</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground font-medium">Recommendation Rate</div>
            </div>
          </div>
        </section>
        
        {/* Pricing */}
        <section className="py-24 bg-muted/50 px-6 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Invest in your career.</h2>
              <p className="text-muted-foreground text-lg">Simple, transparent pricing to get you hired.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Basic</h3>
                  <div className="text-4xl font-bold mb-6">Free</div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-primary h-5 w-5"/> Basic DSA Tracker</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-primary h-5 w-5"/> 1 Mock Interview / month</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-primary h-5 w-5"/> Resume parsing</li>
                  </ul>
                  <Button className="w-full" variant="outline">Sign Up Free</Button>
                </CardContent>
              </Card>
              
              <Card className="border-primary shadow-xl shadow-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold rounded-bl-lg">
                  POPULAR
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Pro Copilot</h3>
                  <div className="text-4xl font-bold mb-2">$9<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
                  <div className="text-sm text-primary mb-6">Billed annually</div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-primary h-5 w-5"/> Unlimited Mock Interviews</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-primary h-5 w-5"/> AI Resume Rewriting</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-primary h-5 w-5"/> Dynamic Roadmaps</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-primary h-5 w-5"/> Priority Support</li>
                  </ul>
                  <Button className="w-full">Get Pro</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-12 border-t border-border px-6 text-center text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-4">
          <BrainCircuit className="h-6 w-6 text-primary" />
          <span className="font-bold text-foreground">PrepPortal</span>
        </div>
        <p>© {new Date().getFullYear()} PrepPortal. All rights reserved.</p>
      </footer>
    </div>
  );
}
