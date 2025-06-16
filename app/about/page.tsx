"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Users, Lightbulb, ShieldCheck, Star, RefreshCw, TrendingUp, ArrowRight } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"
import Navigation from "@/components/navigation"

export default function About() {
  const { initAnimations } = useAnimation()

  useEffect(() => {
    initAnimations()
  }, [initAnimations])


  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-gold-500" />, // Innovation
      title: "Innovation",
      description: "We embrace creativity and forward-thinking to develop unique solutions that address complex challenges."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-emerald-600" />, // Integrity
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical principles in all our interactions and decisions."
    },
    {
      icon: <Star className="h-8 w-8 text-gold-500" />, // Excellence
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, continuously improving and refining our approach."
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />, // Collaboration
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership, working closely with our clients to achieve shared goals."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-gold-500" />, // Adaptability
      title: "Adaptability",
      description: "We embrace change and remain flexible, helping our clients navigate evolving landscapes with confidence."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-emerald-600" />, // Impact
      title: "Impact",
      description: "We measure our success by the positive difference we make for our clients and the lasting value we create."
    }
  ]

  return (
    <>
      <Navigation forceSolid={true} />
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16  text-emerald-900 relative overflow-hidden">
        {/* Soft top gradient for logo/menu contrast */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-ivory/90 to-transparent z-10 pointer-events-none" />
        {/* SVG/CSS Particles Effect */}
        <div className="absolute inset-0 pointer-events-none z-0 animate-fade-in">
          <svg width="100%" height="100%" className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
            <circle cx="10%" cy="20%" r="4" fill="#D4AF37" opacity="0.7" />
            <circle cx="30%" cy="60%" r="2.5" fill="#2E8B57" opacity="0.3" />
            <circle cx="70%" cy="30%" r="3.5" fill="#D4AF37" opacity="0.5" />
            <circle cx="80%" cy="80%" r="3.5" fill="#2E8B57" opacity="0.3" />
            <circle cx="50%" cy="50%" r="2.5" fill="#D4AF37" opacity="0.5" />
            <circle cx="90%" cy="10%" r="2.5" fill="#2E8B57" opacity="0.3" />
            <circle cx="20%" cy="80%" r="3" fill="#D4AF37" opacity="0.4" />
          </svg>
        </div>
        <div className="container-custom relative z-20">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll fade-in-up">
            <div className="inline-block rounded-lg bg-gold-100 px-3 py-1 text-sm text-gold-600 font-semibold mb-4 tracking-wide">Who We Are</div>
            <h1 className="heading-lg mb-6">About VisionNest</h1>
            <p className="body-lg text-emerald-700 mb-8 font-light">
              We are a team of visionaries dedicated to helping businesses grow and transform through innovative solutions and strategic thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl animate-on-scroll fade-in-left">
              <Image
                src="https://plus.unsplash.com/premium_photo-1742202420252-a3416772f068?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Vision, growth, and inspiration - Unsplash"
                fill
                className="object-cover"
              />
            </div>
            {/* Content Side */}
            <div className="space-y-8 animate-on-scroll fade-in-right">
              <div className="inline-block rounded-lg bg-gold-100 px-3 py-1 text-sm text-gold-600 font-semibold mb-2">
                Our Vision & Mission
              </div>
              <h2 className="heading-md mb-4">
                Nurturing <span className="text-gold-600">Ideas</span>, Inspiring <span className="text-gold-600">Growth</span>
              </h2>
              <div className="space-y-6">
                {/* Vision Card */}
                <div className="bg-ivory p-8 rounded-xl shadow-md border-l-4 border-gold-400 flex items-start gap-4">
                  <Star className="h-8 w-8 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-700 mb-2">Our Vision</h3>
                    <p className="text-emerald-800 font-light">
                      To be the catalyst that transforms visionary ideas into successful realities, creating lasting impact for businesses and communities.
                    </p>
                  </div>
                </div>
                {/* Mission Card */}
                <div className="bg-ivory p-8 rounded-xl shadow-md border-l-4 border-emerald-400 flex items-start gap-4">
                  <TrendingUp className="h-8 w-8 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-700 mb-2">Our Mission</h3>
                    <p className="text-emerald-800 font-light">
                      To provide innovative, strategic solutions that empower businesses to grow, adapt, and thrive in an ever-changing landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-emerald-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 mb-4">
              Our Core Values
            </div>
            <h2 className="heading-lg mb-6">What Drives Us</h2>
            <p className="body-md text-emerald-700 font-light">
              At VisionNest, our values guide everything we do. They shape our culture, inform our decisions, and define
              our approach to serving our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={value.title}
                className="bg-ivory rounded-2xl p-10 shadow-lg border border-gray-100 card-hover animate-on-scroll animate-delay-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden"
                style={{ minHeight: 260 }}
              >
                <div className="flex items-center justify-center mb-6">
                  <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 group-hover:bg-gold-50 transition-colors duration-300 shadow-md p-4">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-4 group-hover:text-gold-600 transition-colors duration-300">{value.title}</h3>
                <p className="text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">{value.description}</p>
                <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-gold-400 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 mb-4">
              <Users className="inline-block h-4 w-4 mr-1" />
              Our Team
            </div>
            <h2 className="heading-lg mb-6">Meet the Visionaries</h2>
            <p className="body-md text-emerald-700 font-light">
              Our team brings together diverse expertise and a shared passion for helping businesses succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-ivory rounded-xl overflow-hidden shadow-xl animate-on-scroll animate-delay-100 card-hover border border-gray-100">
              <div className="relative h-[400px]">
                <Image src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80" alt="Professional business leader - Unsplash" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-emerald-800 mb-2">Hemant</h3>
                <p className="text-gold-600 font-medium mb-6">Co-Founder & Director</p>
                <p className="text-emerald-700 mb-6 font-light">
                  With over 15 years of experience in business strategy and innovation, Hemant leads our strategic
                  initiatives and client partnerships.
                </p>
                <a
                  href="mailto:Hemant@visionnest.com.au"
                  className="text-emerald-600 hover:text-emerald-500 font-medium inline-flex items-center group"
                >
                  Hemant@visionnest.com.au
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-ivory rounded-xl overflow-hidden shadow-xl animate-on-scroll animate-delay-200 card-hover border border-gray-100">
              <div className="relative h-[400px]">
                <Image src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80" alt="Creative businesswoman - Unsplash" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-emerald-800 mb-2">Shagun</h3>
                <p className="text-gold-600 font-medium mb-6">Co-Founder & Creative Director</p>
                <p className="text-emerald-700 mb-6 font-light">
                  Shagun brings creative vision and innovative thinking to every project, ensuring our solutions are
                  both effective and forward-thinking.
                </p>
                <a
                  href="mailto:Shagun@visionnest.com.au"
                  className="text-emerald-600 hover:text-emerald-500 font-medium inline-flex items-center group"
                >
                  Shagun@visionnest.com.au
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-ivory text-emerald-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
            <div className="inline-block rounded-lg bg-gold-100 px-3 py-1 text-sm text-gold-600 mb-4 font-semibold">
              Why Choose Us
            </div>
            <h2 className="heading-lg mb-6">The VisionNest Difference</h2>
            <p className="body-md text-emerald-700 font-light">
              We bring a unique approach to helping businesses grow and transform. Here's what sets us apart:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-ivory rounded-2xl p-8 shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-gold-400 group animate-on-scroll">
              <div className="flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gold-600 transition-colors duration-300">Strategic Expertise</h3>
              <p className="font-light group-hover:text-emerald-900 transition-colors duration-300">
                Our team brings deep expertise across multiple industries, allowing us to develop strategies that are both innovative and practical.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-ivory rounded-2xl p-8 shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-gold-400 group animate-on-scroll">
              <div className="flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gold-600 transition-colors duration-300">Collaborative Partnership</h3>
              <p className="font-light group-hover:text-emerald-900 transition-colors duration-300">
                We work closely with you as true partners, ensuring alignment, transparency, and shared success.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-ivory rounded-2xl p-8 shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-gold-400 group animate-on-scroll">
              <div className="flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gold-600 transition-colors duration-300">Results-Driven</h3>
              <p className="font-light group-hover:text-emerald-900 transition-colors duration-300">
                We focus on delivering measurable results that drive real business growth and create lasting value.
              </p>
            </div>
          </div>

          <div className="text-center mt-16 animate-on-scroll">
            <Link href="/contact" className="btn-primary bg-gold-500 hover:bg-gold-600 text-emerald-950">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
