"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dumbbell, Activity, Clock, Video, Target, TrendingUp, CheckCircle2, Play, Download, Calendar } from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-lg border-b border-neutral-800" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="text-lg sm:text-xl font-bold tracking-tight">
              Marshall Strength Coaching
            </div>
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button
                onClick={() => scrollToSection("method")}
                className="text-sm text-neutral-300 hover:text-white transition-colors"
              >
                Method
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-sm text-neutral-300 hover:text-white transition-colors"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("stories")}
                className="text-sm text-neutral-300 hover:text-white transition-colors"
              >
                Stories
              </button>
              <Button
                size="sm"
                onClick={() => scrollToSection("apply")}
                className="hover:shadow-lg hover:shadow-white/20"
              >
                Get Free Guide
              </Button>
            </div>
            <div className="md:hidden">
              <Button
                size="sm"
                onClick={() => scrollToSection("apply")}
                className="text-xs px-3"
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-950 via-black to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight uppercase">
                STILL NOT IN THE SHAPE<br />YOU KNOW YOU SHOULD BE?
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                Get the exact training and nutrition system that's helped 150+ busy professionals transform their physiques—without living in the gym.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("method")}
                className="w-full sm:w-auto text-base sm:text-lg font-semibold px-8 py-6 hover:shadow-lg hover:shadow-white/20"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch How It Works
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("apply")}
                className="w-full sm:w-auto text-base sm:text-lg font-semibold px-8 py-6 border-2"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free Guide
              </Button>
            </div>

            {/* Hero Image/Video Placeholder */}
            <div className="mt-12 sm:mt-16 relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border-2 border-neutral-700">
              <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=675&fit=crop"
                  alt="Fitness transformation"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-black ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section - Video Explanation */}
      <section id="method" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 uppercase">
              The Method That Actually Works
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
              No BS. No cookie-cutter plans. Just proven systems that deliver real results.
            </p>
          </div>

          {/* Video Player */}
          <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-neutral-700 mb-12">
            <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=675&fit=crop"
                alt="Training method explanation"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110">
                  <Play className="w-8 h-8 sm:w-12 sm:h-12 text-black ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Method Breakdown */}
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-neutral-950 border-neutral-800 hover:border-neutral-600 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-4 font-bold text-xl">
                  1
                </div>
                <CardTitle className="text-lg sm:text-xl">Personalized Programming</CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-neutral-400">
                Training designed for YOUR body, YOUR schedule, and YOUR goals. Not some generic template.
              </CardContent>
            </Card>

            <Card className="bg-neutral-950 border-neutral-800 hover:border-neutral-600 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-4 font-bold text-xl">
                  2
                </div>
                <CardTitle className="text-lg sm:text-xl">Nutrition Made Simple</CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-neutral-400">
                Flexible macros that fit your lifestyle. No restriction. No giving up your favorite foods.
              </CardContent>
            </Card>

            <Card className="bg-neutral-950 border-neutral-800 hover:border-neutral-600 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-4 font-bold text-xl">
                  3
                </div>
                <CardTitle className="text-lg sm:text-xl">Weekly Accountability</CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-neutral-400">
                Regular check-ins and adjustments to keep you on track. Your coach is always in your corner.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformation Marquee */}
      <section className="py-12 sm:py-16 bg-neutral-950 border-y border-neutral-800">
        <div className="container mx-auto mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center">Real Transformations</h3>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 animate-scroll">
            {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((index, i) => (
              <div key={i} className="flex-shrink-0 w-64 sm:w-80 h-96 relative rounded-lg overflow-hidden border border-neutral-700">
                <img 
                  src={`https://images.unsplash.com/photo-${1500468761476 + index}-da5c85ba0f5f?w=320&h=384&fit=crop`}
                  alt={`Transformation ${index}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <Badge className="mb-2">12 Weeks</Badge>
                  <p className="text-sm font-semibold">-15kg | +20kg Strength</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Results Section */}
      <section id="results" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Real Results from Real Lifters
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
              Our clients don't just talk about transformation—they live it.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto">
            <div className="text-center p-6 sm:p-8 bg-neutral-950 rounded-lg border border-neutral-800">
              <div className="text-3xl sm:text-4xl font-bold mb-2">150+</div>
              <div className="text-sm sm:text-base text-neutral-400">Clients Coached</div>
            </div>
            <div className="text-center p-6 sm:p-8 bg-neutral-950 rounded-lg border border-neutral-800">
              <div className="text-3xl sm:text-4xl font-bold mb-2">8-12kg</div>
              <div className="text-sm sm:text-base text-neutral-400">Average Fat Loss (16 weeks)</div>
            </div>
            <div className="text-center p-6 sm:p-8 bg-neutral-950 rounded-lg border border-neutral-800">
              <div className="text-3xl sm:text-4xl font-bold mb-2">95%</div>
              <div className="text-sm sm:text-base text-neutral-400">Adherence After 8 Weeks</div>
            </div>
          </div>

          {/* Before/After Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="overflow-hidden hover:border-neutral-600 transition-all hover:shadow-lg hover:shadow-white/5">
              <div className="aspect-[4/5] relative">
                <img 
                  src="https://images.unsplash.com/photo-1583454155184-870a1f63efe8?w=400&h=500&fit=crop"
                  alt="Before and after transformation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/80">12 Weeks</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">James R.</CardTitle>
                <p className="text-sm text-neutral-400">Software Engineer, 32</p>
              </CardHeader>
              <CardContent className="space-y-2 text-sm sm:text-base">
                <p className="text-neutral-300">• Lost 8kg of fat</p>
                <p className="text-neutral-300">• Added 15kg to bench press</p>
                <p className="text-neutral-300">• Transformed in 3 months</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:border-neutral-600 transition-all hover:shadow-lg hover:shadow-white/5">
              <div className="aspect-[4/5] relative">
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=500&fit=crop"
                  alt="Before and after transformation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/80">16 Weeks</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Sarah M.</CardTitle>
                <p className="text-sm text-neutral-400">Marketing Manager, 28</p>
              </CardHeader>
              <CardContent className="space-y-2 text-sm sm:text-base">
                <p className="text-neutral-300">• Gained 5kg lean muscle</p>
                <p className="text-neutral-300">• Squat 60kg → 100kg</p>
                <p className="text-neutral-300">• Consistent training habit</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:border-neutral-600 transition-all hover:shadow-lg hover:shadow-white/5">
              <div className="aspect-[4/5] relative">
                <img 
                  src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=400&h=500&fit=crop"
                  alt="Before and after transformation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/80">20 Weeks</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Michael T.</CardTitle>
                <p className="text-sm text-neutral-400">Accountant, 35</p>
              </CardHeader>
              <CardContent className="space-y-2 text-sm sm:text-base">
                <p className="text-neutral-300">• Deadlift 140kg → 180kg</p>
                <p className="text-neutral-300">• +75kg total lifts</p>
                <p className="text-neutral-300">• First powerlifting meet</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Video Testimonials - Stories Section */}
      <section id="stories" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 uppercase">
              Hear From Real Clients
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
              Don't just take our word for it. Listen to what our clients have to say.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Video Testimonial 1 */}
            <Card className="overflow-hidden hover:border-neutral-600 transition-all">
              <div className="aspect-video relative bg-neutral-900">
                <img 
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=600&h=340&fit=crop"
                  alt="Dylan testimonial"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Dylan's Story</CardTitle>
                <p className="text-sm text-neutral-400">Lost 12kg in 16 weeks</p>
              </CardHeader>
            </Card>

            {/* Video Testimonial 2 */}
            <Card className="overflow-hidden hover:border-neutral-600 transition-all">
              <div className="aspect-video relative bg-neutral-900">
                <img 
                  src="https://images.unsplash.com/photo-1567598508481-65985588e295?w=600&h=340&fit=crop"
                  alt="Phill testimonial"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Phill's Journey</CardTitle>
                <p className="text-sm text-neutral-400">Built 8kg muscle in 20 weeks</p>
              </CardHeader>
            </Card>

            {/* Video Testimonial 3 */}
            <Card className="overflow-hidden hover:border-neutral-600 transition-all">
              <div className="aspect-video relative bg-neutral-900">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=340&fit=crop"
                  alt="Ben testimonial"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Ben's Transformation</CardTitle>
                <p className="text-sm text-neutral-400">Complete body recomposition</p>
              </CardHeader>
            </Card>

            {/* Video Testimonial 4 */}
            <Card className="overflow-hidden hover:border-neutral-600 transition-all">
              <div className="aspect-video relative bg-neutral-900">
                <img 
                  src="https://images.unsplash.com/photo-1558403194-611308249627?w=600&h=340&fit=crop"
                  alt="Salv testimonial"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Salv's Success</CardTitle>
                <p className="text-sm text-neutral-400">From beginner to athlete</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Breakdown Section */}
      <section id="program" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-neutral-950">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              What You Get Inside Coaching
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
              Everything you need to achieve your physique and performance goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:scale-105 transition-transform hover:border-neutral-600">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Custom Training Blocks</CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-neutral-400">
                Periodized programming designed around your schedule, experience level, and specific
                goals. Every rep and set has a purpose.
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-transform hover:border-neutral-600">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Nutrition Tailored to You</CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-neutral-400">
                Macro targets and meal strategies that fit your lifestyle. No restrictive diets—just
                sustainable nutrition that gets results.
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-transform hover:border-neutral-600">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Weekly Check-ins</CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-neutral-400">
                Regular progress reviews to track metrics, adjust programming, and keep you
                accountable. You're never left guessing.
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-transform hover:border-neutral-600">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <Video className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Form Breakdown Video Feedback</CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-neutral-400">
                Submit your lifts and get detailed video analysis with cues to improve technique and
                prevent injury.
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-transform hover:border-neutral-600">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <Activity className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-neutral-400">
                Detailed analytics on strength gains, body composition changes, and performance
                markers to see exactly how far you've come.
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-transform hover:border-neutral-600">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-neutral-400">
                Direct access to your coach for questions, adjustments, and guidance throughout your
                entire journey.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Simple, Transparent Coaching
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
              One program. All the tools you need. No hidden fees.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="border-neutral-700 hover:border-white transition-all hover:shadow-2xl hover:shadow-white/10">
              <CardHeader className="text-center pb-8">
                <Badge variant="default" className="mx-auto mb-4 text-sm px-4 py-1">
                  Premium 1:1 Online Coaching
                </Badge>
                <CardTitle className="text-3xl sm:text-4xl font-bold mb-2">£299</CardTitle>
                <CardDescription className="text-base sm:text-lg text-neutral-400">per month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-neutral-300">Custom training program updated every 4-6 weeks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-neutral-300">Personalized nutrition plan with macro targets</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-neutral-300">Weekly check-ins and progress reviews</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-neutral-300">Video form analysis and technique feedback</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-neutral-300">Direct messaging access to your coach</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-neutral-300">Exercise video library and resources</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 text-base font-semibold"
                  size="lg"
                  onClick={() => scrollToSection("apply")}
                >
                  Apply Now
                </Button>
                <p className="text-xs sm:text-sm text-center text-neutral-500 pt-4">
                  Spots are limited. We only work with lifters ready to commit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-neutral-400">
              Everything you need to know before applying.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-neutral-950 px-6 rounded-lg border border-neutral-800">
              <AccordionTrigger className="text-base sm:text-lg text-left">
                How often do I check in with my coach?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-neutral-400">
                You'll have weekly check-ins where we review your progress, adjust your program, and
                answer any questions. You also have direct messaging access throughout the week for
                quick questions or form checks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-neutral-950 px-6 rounded-lg border border-neutral-800">
              <AccordionTrigger className="text-base sm:text-lg text-left">
                Do I need a gym membership?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-neutral-400">
                Yes, our programs are designed for a well-equipped gym with barbells, dumbbells, and
                standard machines. If you train at home with limited equipment, reach out and we can
                discuss options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-neutral-950 px-6 rounded-lg border border-neutral-800">
              <AccordionTrigger className="text-base sm:text-lg text-left">
                Is this suitable for beginners?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-neutral-400">
                Absolutely. We work with lifters of all levels—from complete beginners learning the
                basics to advanced athletes chasing PRs. Programming is fully customized to your
                experience and abilities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-neutral-950 px-6 rounded-lg border border-neutral-800">
              <AccordionTrigger className="text-base sm:text-lg text-left">
                What if I have an injury or limitation?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-neutral-400">
                We can work around most injuries and physical limitations. During onboarding, you'll
                complete a detailed questionnaire about your history, and we'll modify exercises as
                needed. Always consult your physio or doctor for medical clearance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-neutral-950 px-6 rounded-lg border border-neutral-800">
              <AccordionTrigger className="text-base sm:text-lg text-left">
                How long is the minimum commitment?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-neutral-400">
                We recommend a minimum of 3 months to see meaningful results. Real transformation takes
                time, consistency, and proper programming. Month-to-month billing with 30 days notice
                to cancel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-neutral-950 px-6 rounded-lg border border-neutral-800">
              <AccordionTrigger className="text-base sm:text-lg text-left">
                What platform do you use for coaching?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-neutral-400">
                We use a dedicated coaching app where you'll log workouts, track nutrition, submit form
                videos, and communicate with your coach. Everything is in one place for a seamless
                experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA / Application Section */}
      <section id="apply" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-neutral-950 to-black">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 uppercase">
            Get Your Free Transformation Guide
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-400 mb-8 sm:mb-12 max-w-xl mx-auto">
            Download our complete guide to building muscle and losing fat—the same system our clients use to transform their bodies.
          </p>

          <Card className="border-neutral-700 text-left">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Download Your Free Guide</CardTitle>
              <CardDescription className="text-sm sm:text-base text-neutral-400">
                Enter your details below to get instant access
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Your Name</label>
                <Input placeholder="Enter your name" className="text-sm sm:text-base" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Your Email Address</label>
                <Input type="email" placeholder="your@email.com" className="text-sm sm:text-base" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Message (Optional)</label>
                <textarea
                  className="flex min-h-[100px] sm:min-h-[120px] w-full rounded-md border border-neutral-700 bg-black px-3 py-2 text-sm ring-offset-background placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>
              <Button className="w-full mt-6 text-base font-semibold" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Get My Free Guide
              </Button>
              <p className="text-xs sm:text-sm text-center text-neutral-500 pt-2">
                We respect your privacy. Unsubscribe anytime.
              </p>
              
              <div className="pt-6 border-t border-neutral-800">
                <p className="text-center text-sm text-neutral-400 mb-4">Or book a free discovery call</p>
                <Button variant="outline" className="w-full" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Discovery Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-800 bg-black">
        <div className="container mx-auto text-center text-sm sm:text-base text-neutral-500">
          <p>© 2025 Marshall Strength Coaching. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
