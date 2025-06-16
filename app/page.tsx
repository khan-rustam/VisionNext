"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart2, Lightbulb, Target, Star, Users, TrendingUp } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"

export default function Home() {
  const { initAnimations } = useAnimation()
  const heroRef = useRef<HTMLDivElement>(null)

  // Animated counters for stats
  const [years, setYears] = useState(0)
  const [clients, setClients] = useState(0)
  const [satisfaction, setSatisfaction] = useState(0)
  const [awards, setAwards] = useState(0)

  useEffect(() => {
    initAnimations()

    // Parallax effect for hero section
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [initAnimations])

  useEffect(() => {
    let yearsTarget = 10
    let clientsTarget = 50
    let satisfactionTarget = 98
    let awardsTarget = 25
    let duration = 1200 // ms
    let frame = 0
    let totalFrames = 60
    function animate() {
      frame++
      setYears(Math.round((yearsTarget * frame) / totalFrames))
      setClients(Math.round((clientsTarget * frame) / totalFrames))
      setSatisfaction(Math.round((satisfactionTarget * frame) / totalFrames))
      setAwards(Math.round((awardsTarget * frame) / totalFrames))
      if (frame < totalFrames) {
        requestAnimationFrame(animate)
      } else {
        setYears(yearsTarget)
        setClients(clientsTarget)
        setSatisfaction(satisfactionTarget)
        setAwards(awardsTarget)
      }
    }
    animate()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#00000000" }}
      >
        <div className="absolute inset-0 z-0">
          <div ref={heroRef} className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
              alt="Abstract vision and innovation background - Unsplash"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl mb-8 leading-tight fade-in-up" style={{ color: "#FDFDFB" }}>
              Nurturing <span style={{ color: "#D4AF37" }}>Ideas</span> into{" "}
              <span style={{ color: "#D4AF37" }}>Reality</span>
            </h1>
            <p
              className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-light slide-in-left"
              style={{ color: "#FDFDFB", animationDelay: "0.3s" }}
            >
              We help visionary businesses grow and transform with innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 scale-in" style={{ animationDelay: "0.6s" }}>
              <Link href="/services" className="btn-primary group">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center floating">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6"
              style={{ color: "#FDFDFB" }}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding" style={{ backgroundColor: "#FDFDFB" }}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-on-scroll">
              <div
                className="inline-block rounded-lg px-3 py-1 text-sm"
                style={{ backgroundColor: "#E6F7ED", color: "#2E8B57" }}
              >
                Welcome to VisionNest
              </div>
              <h2 className="heading-lg">
                We Help Visionary Businesses <span style={{ color: "#D4AF37" }}>Grow</span> and{" "}
                <span style={{ color: "#D4AF37" }}>Transform</span>
              </h2>
              <p className="body-lg font-light">
                At VisionNest, we believe in the power of vision and innovation. We partner with forward-thinking
                businesses to nurture their ideas and transform them into reality.
              </p>
              <p className="body-md font-light">
                Our approach combines strategic thinking, creative solutions, and meticulous execution to help your
                business reach new heights.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center font-medium hover:text-gold transition-colors group"
                style={{ color: "#2E8B57" }}
              >
                Learn more about us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl animate-on-scroll animate-delay-200 rotate-in">
              <Image
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Teamwork and business growth - Unsplash"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding" style={{ backgroundColor: "#F0F9F4" }}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
            <div
              className="inline-block rounded-lg px-3 py-1 text-sm mb-4"
              style={{ backgroundColor: "#E6F7ED", color: "#2E8B57" }}
            >
              Our Services
            </div>
            <h2 className="heading-lg mb-6">What We Do</h2>
            <p className="body-md font-light max-w-2xl mx-auto">
              We offer a comprehensive range of services designed to help your business grow, innovate, and succeed in
              today's competitive landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div
              className="bg-ivory rounded-2xl p-10 shadow-lg border border-gray-100 card-hover animate-on-scroll animate-delay-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden"
            >
              <div className="flex items-center justify-center mb-8">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 group-hover:bg-gold-50 transition-colors duration-300 shadow-md p-4">
                  <Lightbulb className="h-8 w-8 text-gold-500" />
                </span>
              </div>
              <h3 className="heading-sm mb-4 group-hover:text-gold-600 transition-colors duration-300">Strategic Consulting</h3>
              <p className="mb-6 font-light group-hover:text-emerald-900 transition-colors duration-300" style={{ color: "#2E8B57" }}>
                We help businesses develop clear, actionable strategies that drive growth and create sustainable
                competitive advantages.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center font-medium hover:text-gold-600 transition-colors group"
                style={{ color: "#2E8B57" }}
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-600" />
              </Link>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-gold-400 transition-all duration-300" />
            </div>

            {/* Service 2 */}
            <div
              className="bg-ivory rounded-2xl p-10 shadow-lg border border-gray-100 card-hover animate-on-scroll animate-delay-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden"
            >
              <div className="flex items-center justify-center mb-8">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 group-hover:bg-gold-50 transition-colors duration-300 shadow-md p-4">
                  <BarChart2 className="h-8 w-8 text-gold-500" />
                </span>
              </div>
              <h3 className="heading-sm mb-4 group-hover:text-gold-600 transition-colors duration-300">Business Growth</h3>
              <p className="mb-6 font-light group-hover:text-emerald-900 transition-colors duration-300" style={{ color: "#2E8B57" }}>
                Our experts work with you to identify growth opportunities, optimize operations, and scale your business
                effectively.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center font-medium hover:text-gold-600 transition-colors group"
                style={{ color: "#2E8B57" }}
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-600" />
              </Link>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-gold-400 transition-all duration-300" />
            </div>

            {/* Service 3 */}
            <div
              className="bg-ivory rounded-2xl p-10 shadow-lg border border-gray-100 card-hover animate-on-scroll animate-delay-300 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden"
            >
              <div className="flex items-center justify-center mb-8">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 group-hover:bg-gold-50 transition-colors duration-300 shadow-md p-4">
                  <Target className="h-8 w-8 text-gold-500" />
                </span>
              </div>
              <h3 className="heading-sm mb-4 group-hover:text-gold-600 transition-colors duration-300">Innovation Solutions</h3>
              <p className="mb-6 font-light group-hover:text-emerald-900 transition-colors duration-300" style={{ color: "#2E8B57" }}>
                We help you develop and implement innovative solutions that address complex challenges and create new
                opportunities.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center font-medium hover:text-gold-600 transition-colors group"
                style={{ color: "#2E8B57" }}
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-600" />
              </Link>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-gold-400 transition-all duration-300" />
            </div>
          </div>

          <div className="text-center mt-16 animate-on-scroll bounce-in">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24" style={{ backgroundColor: "#FDFDFB" }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-on-scroll scale-in">
              <div className="text-5xl font-bold mb-2 pulse-slow transition-all duration-500" style={{ color: "#2E8B57", letterSpacing: "-2px" }}>
                {years}+
              </div>
              <p className="text-lg font-medium text-emerald-700 tracking-wide">Years Experience</p>
            </div>
            <div className="text-center animate-on-scroll animate-delay-100 scale-in">
              <div className="text-5xl font-bold mb-2 pulse-slow transition-all duration-500" style={{ color: "#2E8B57", letterSpacing: "-2px" }}>
                {clients}+
              </div>
              <p className="text-lg font-medium text-emerald-700 tracking-wide">Clients Served</p>
            </div>
            <div className="text-center animate-on-scroll animate-delay-200 scale-in">
              <div className="text-5xl font-bold mb-2 pulse-slow transition-all duration-500" style={{ color: "#2E8B57", letterSpacing: "-2px" }}>
                {satisfaction}%
              </div>
              <p className="text-lg font-medium text-emerald-700 tracking-wide">Client Satisfaction</p>
            </div>
            <div className="text-center animate-on-scroll animate-delay-300 scale-in">
              <div className="text-5xl font-bold mb-2 pulse-slow transition-all duration-500" style={{ color: "#2E8B57", letterSpacing: "-2px" }}>
                {awards}+
              </div>
              <p className="text-lg font-medium text-emerald-700 tracking-wide">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding" style={{ backgroundColor: "#F0F9F4" }}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
            <div
              className="inline-block rounded-lg px-3 py-1 text-sm mb-4"
              style={{ backgroundColor: "#E6F7ED", color: "#2E8B57" }}
            >
              Why Choose Us
            </div>
            <h2 className="heading-lg mb-6">The VisionNest Advantage</h2>
            <p className="body-md font-light">
              We bring a unique approach to helping businesses grow and transform. Here's what sets us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-on-scroll animate-delay-100 fade-in-up">
              <div
                className="h-20 w-20 rounded-full mx-auto mb-6 flex items-center justify-center floating"
                style={{ backgroundColor: "#D4AF37" }}
              >
                <Users className="h-10 w-10" style={{ color: "#FDFDFB" }} />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#2E8B57" }}>
                Expert Team
              </h3>
              <p className="font-light" style={{ color: "#2E8B57" }}>
                Our experienced professionals bring deep industry knowledge and proven methodologies to every project.
              </p>
            </div>

            <div className="text-center animate-on-scroll animate-delay-200 fade-in-up">
              <div
                className="h-20 w-20 rounded-full mx-auto mb-6 flex items-center justify-center floating"
                style={{ backgroundColor: "#D4AF37", animationDelay: "1s" }}
              >
                <TrendingUp className="h-10 w-10" style={{ color: "#FDFDFB" }} />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#2E8B57" }}>
                Proven Results
              </h3>
              <p className="font-light" style={{ color: "#2E8B57" }}>
                We deliver measurable outcomes that drive real business growth and create lasting value for our clients.
              </p>
            </div>

            <div className="text-center animate-on-scroll animate-delay-300 fade-in-up">
              <div
                className="h-20 w-20 rounded-full mx-auto mb-6 flex items-center justify-center floating"
                style={{ backgroundColor: "#D4AF37", animationDelay: "2s" }}
              >
                <Star className="h-10 w-10" style={{ color: "#FDFDFB" }} />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#2E8B57" }}>
                Tailored Solutions
              </h3>
              <p className="font-light" style={{ color: "#2E8B57" }}>
                Every strategy and implementation is customized to your unique needs, goals, and industry requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding" style={{ backgroundColor: "#FDFDFB" }}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <div
              className="inline-block rounded-lg px-3 py-1 text-sm mb-4"
              style={{ backgroundColor: "#E6F7ED", color: "#2E8B57" }}
            >
              Testimonials
            </div>
            <h2 className="heading-lg mb-6">What Our Clients Say</h2>
            <p className="body-md font-light">
              Don't just take our word for it. Here's what our clients have to say about working with VisionNest.
            </p>
          </div>

          <div
            className="max-w-4xl mx-auto rounded-xl shadow-xl p-10 animate-on-scroll border scale-in"
            style={{ backgroundColor: "#FDFDFB", borderColor: "#E5E7EB" }}
          >
            <div className="flex items-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="h-6 w-6 fill-current bounce-in"
                  style={{ color: "#D4AF37", animationDelay: `${star * 100}ms` }}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="mb-8 italic text-xl leading-relaxed font-light" style={{ color: "#2E8B57" }}>
              "VisionNest helped us transform our business strategy, resulting in significant growth and improved
              operational efficiency. Their insights and guidance were invaluable to our success."
            </p>
            <div className="flex items-center">
              <div className="h-14 w-14 rounded-full mr-4" style={{ backgroundColor: "#E6F7ED" }}></div>
              <div>
                <p className="font-semibold" style={{ color: "#2E8B57" }}>
                  Sarah Johnson
                </p>
                <p className="text-sm" style={{ color: "#2E8B57" }}>
                  CEO, TechInnovate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-ivory relative overflow-hidden" style={{ backgroundColor: "#1A5A3A" }}>
        <div className="absolute inset-0 opacity-10">
          <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80" alt="Business transformation background - Unsplash" fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-on-scroll slide-in-left">
              <h2 className="heading-lg" style={{ color: "#FDFDFB" }}>
                Ready to Transform Your Vision into Reality?
              </h2>
              <p className="body-md font-light" style={{ color: "#FDFDFB" }}>
                Let's discuss how VisionNest can help your business grow and innovate. Our team is ready to support your
                journey toward success and transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact" className="btn-primary" style={{ backgroundColor: "#D4AF37", color: "#2E8B57" }}>
                  Contact Us Today
                </Link>
                <Link href="/about" className="btn-secondary" style={{ borderColor: "#D4AF37", color: "#D4AF37" }}>
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl animate-on-scroll animate-delay-200 slide-in-right">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Business partnership and transformation - Unsplash"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
