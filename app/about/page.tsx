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
      <section className="bg-ivory">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl animate-on-scroll fade-in-left">
              <Image
                src="https://images.unsplash.com/photo-1577563682708-4f022ec774fb?q=80&w=2534&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                Nurturing <span className="text-gold-600">Stability</span>, Empowering <span className="text-gold-600">Growth</span>
              </h2>
              <div className="space-y-6">
                {/* Vision Card */}
                <div className="bg-ivory p-8 rounded-xl shadow-md border-l-4 border-gold-400 flex items-start gap-4">
                  <Star className="h-8 w-8 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-700 mb-2">Our Vision</h3>
                    <p className="text-emerald-800 font-light">
                      To be the trusted financial partner that empowers individuals and families to achieve their goals through smart, secure, and compassionate lending. Whether it's owning a home, funding a dream car, or managing life's transitions — we aim to make financing simple, personal, and impactful.
                    </p>
                  </div>
                </div>
                {/* Mission Card */}
                <div className="bg-ivory p-8 rounded-xl shadow-md border-l-4 border-emerald-400 flex items-start gap-4">
                  <TrendingUp className="h-8 w-8 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-700 mb-2">Our Mission</h3>
                    <p className="text-emerald-800 font-light">
                      To deliver innovative, transparent, and customer-focused lending solutions that support every stage of personal and financial growth. We are committed to helping our clients make confident financial decisions — from home loans to personal finance — with trust, care, and clarity.
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
                <Image src="https://www.themortgageclub.co.nz/assets/img/team/team-1.jpg" alt="Professional business leader - Unsplash" fill className="object-cover object-top" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-emerald-800 mb-2">Hemant Choudhary</h3>
                <p className="text-gold-600 font-medium mb-2">Senior Finance and Mortgage Consultant</p>
                <div className="flex gap-4 mb-4">
                  <span className="inline-block bg-emerald-100 text-emerald-700 rounded-full px-3 py-1 text-xs font-semibold">17+ Years Experience</span>
                  <span className="inline-block bg-gold-100 text-gold-700 rounded-full px-3 py-1 text-xs font-semibold">14 Years in NZ Banking</span>
                </div>
                <p className="text-emerald-700 mb-6 font-light">
                  Hemant Choudhary is a highly experienced finance and mortgage professional with 17 years in the industry, including 14 years at one of New Zealand's leading banks. He has received multiple awards for his dedication to customer service and helping clients achieve their financial goals.
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
                <Image src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80" alt="Creative businesswoman - Unsplash" fill className="object-cover " />
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <div className="inline-block rounded-lg bg-gold-100 px-3 py-1 text-sm text-gold-600 mb-4 font-semibold tracking-wide">
              Why Choose Us
            </div>
            <h2 className="heading-lg mb-6 text-emerald-900">Why Choose Us</h2>
            <p className="body-md text-emerald-700 font-light">
              Discover what makes us different and why our clients trust us for their financial needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Market Research */}
            <div className="bg-ivory rounded-2xl p-8 shadow-lg border border-gold-100 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
              <span className="inline-flex items-center justify-center rounded-full bg-gold-50 mb-6 shadow-md p-4">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="2" /><text x="50%" y="55%" textAnchor="middle" fill="#2E8B57" fontSize="18" fontWeight="bold" dy=".3em">$</text></svg>
              </span>
              <h3 className="text-lg font-semibold text-emerald-800 mb-2 group-hover:text-gold-600 transition-colors duration-300">Market Research</h3>
              <p className="text-emerald-700 font-light">We conduct extensive market research to secure the most competitive home loan interest rates tailored to your needs.</p>
            </div>
            {/* Best Results */}
            <div className="bg-ivory rounded-2xl p-8 shadow-lg border border-gold-100 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
              <span className="inline-flex items-center justify-center rounded-full bg-gold-50 mb-6 shadow-md p-4">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="2" /><text x="50%" y="55%" textAnchor="middle" fill="#2E8B57" fontSize="18" fontWeight="bold" dy=".3em">👍</text></svg>
              </span>
              <h3 className="text-lg font-semibold text-emerald-800 mb-2 group-hover:text-gold-600 transition-colors duration-300">Best Results</h3>
              <p className="text-emerald-700 font-light">We work with clients in all types of financial situations to find solutions that deliver the best outcomes for their specific goals.</p>
            </div>
            {/* Full Transparency */}
            <div className="bg-ivory rounded-2xl p-8 shadow-lg border border-gold-100 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
              <span className="inline-flex items-center justify-center rounded-full bg-gold-50 mb-6 shadow-md p-4">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="2" /><text x="50%" y="55%" textAnchor="middle" fill="#2E8B57" fontSize="18" fontWeight="bold" dy=".3em">💵</text></svg>
              </span>
              <h3 className="text-lg font-semibold text-emerald-800 mb-2 group-hover:text-gold-600 transition-colors duration-300">Full Transparency</h3>
              <p className="text-emerald-700 font-light">Clear, honest advice with no hidden fees or charges. We believe in building trust through full financial clarity.</p>
            </div>
            {/* Problem-Solving Approach */}
            <div className="bg-ivory rounded-2xl p-8 shadow-lg border border-gold-100 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
              <span className="inline-flex items-center justify-center rounded-full bg-gold-50 mb-6 shadow-md p-4">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="2" /><text x="50%" y="55%" textAnchor="middle" fill="#2E8B57" fontSize="18" fontWeight="bold" dy=".3em">⭐</text></svg>
              </span>
              <h3 className="text-lg font-semibold text-emerald-800 mb-2 group-hover:text-gold-600 transition-colors duration-300">Problem-Solving Approach</h3>
              <p className="text-emerald-700 font-light">We turn complex lending challenges into smooth solutions — fast, flexible, and with a personal touch.</p>
            </div>
            {/* Beyond Settlement */}
            <div className="bg-ivory rounded-2xl p-8 shadow-lg border border-gold-100 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
              <span className="inline-flex items-center justify-center rounded-full bg-gold-50 mb-6 shadow-md p-4">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="2" /><text x="50%" y="55%" textAnchor="middle" fill="#2E8B57" fontSize="18" fontWeight="bold" dy=".3em">❓</text></svg>
              </span>
              <h3 className="text-lg font-semibold text-emerald-800 mb-2 group-hover:text-gold-600 transition-colors duration-300">Beyond Settlement</h3>
              <p className="text-emerald-700 font-light">Our support doesn't end when your loan is approved — we're here to assist with future queries, refinancing, and more.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
