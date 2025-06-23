"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart2, Lightbulb, Target, Users, LineChart, PenTool, TrendingUp } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"
import Navigation from "@/components/navigation"

const contactEmail = "Hemant@visionnest.com.au"
const services = [
  {
    title: "Home Loans",
    image: "https://financesupport.com.au/wp-content/uploads/2022/11/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept.jpg",
  },
  {
    title: "Commercial and Business Loan",
    image: "https://financesupport.com.au/wp-content/uploads/2022/11/handshake-close-up-executives.jpg",
  },
  {
    title: "Investement Property",
    image: "https://financesupport.com.au/wp-content/uploads/2022/11/accountant-calculating-profit-with-financial-analysis-graphs.jpg",
  },
  {
    title: "Asset and Equipment Finance",
    image: "https://images.unsplash.com/photo-1653378972643-5ac307460d36?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Vehicle Loan and Personal Loan",
    image: "https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/blogs/images/what-is-vehicle-loan-and-its-different-types.jpg",
  },
  {
    title: "Self-Managed Super Fund (SMSF)",
    image: "https://financesupport.com.au/wp-content/uploads/2022/11/loan-buy-house-pressure-buy-house1.jpg",
  },
]

export default function Services() {
  const { initAnimations } = useAnimation()

  useEffect(() => {
    initAnimations()
  }, [initAnimations])

  return (
    <>
      <Navigation forceSolid={true} />
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16  text-emerald-900 relative overflow-hidden">
        {/* Soft top gradient for logo/menu contrast */}
        <div className="absolute top-0 left-0 w-full h-52 bg-gradient-to-b from-ivory/90 to-transparent z-10 pointer-events-none" />
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
            <div className="inline-block rounded-lg bg-gold-100 px-3 py-1 text-sm text-gold-600 font-semibold mb-4 tracking-wide">What We Offer</div>
            <h1 className="heading-lg mb-6">Our Services</h1>
            <p className="body-lg text-emerald-700 mb-8 font-light">
              Comprehensive solutions designed to help your business grow, innovate, and succeed in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=" bg-ivory">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={service.title} className="bg-ivory rounded-2xl p-10 shadow-lg border border-gray-100 card-hover flex flex-col items-center text-center animate-on-scroll animate-delay-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden">
                <img src={service.image} alt={service.title} className="mb-6 rounded-lg object-cover w-full h-48" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <a href={`mailto:${contactEmail}?subject=Enquiry about ${encodeURIComponent(service.title)}`}
                  className="text-emerald-600 hover:text-gold-600 font-medium mt-4 inline-block">
                  Enquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-emerald-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 mb-4">
              Our Approach
            </div>
            <h2 className="heading-lg mb-6">How We Work</h2>
            <p className="body-md text-emerald-700 font-light">
              Our collaborative approach ensures we deliver solutions that are tailored to your unique needs and drive
              real results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative animate-on-scroll animate-delay-100">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group h-full flex flex-col items-center">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 group-hover:bg-gold-50 transition-colors duration-300 shadow-md p-4 mb-6">
                  <Lightbulb className="h-8 w-8 text-gold-500" />
                </span>
                <h3 className="text-xl font-semibold text-emerald-700 mb-4 group-hover:text-gold-600 transition-colors duration-300">Discovery</h3>
                <p className="text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  We begin by understanding your business, goals, challenges, and vision for the future.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-emerald-200 -translate-y-1/2 -z-10"></div>
            </div>

            {/* Step 2 */}
            <div className="relative animate-on-scroll animate-delay-200">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group h-full flex flex-col items-center">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 group-hover:bg-gold-50 transition-colors duration-300 shadow-md p-4 mb-6">
                  <BarChart2 className="h-8 w-8 text-emerald-600" />
                </span>
                <h3 className="text-xl font-semibold text-emerald-700 mb-4 group-hover:text-gold-600 transition-colors duration-300">Strategy</h3>
                <p className="text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  We develop a tailored strategy that addresses your specific needs and aligns with your objectives.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-emerald-200 -translate-y-1/2 -z-10"></div>
            </div>

            {/* Step 3 */}
            <div className="relative animate-on-scroll animate-delay-300">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group h-full flex flex-col items-center">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 group-hover:bg-gold-50 transition-colors duration-300 shadow-md p-4 mb-6">
                  <PenTool className="h-8 w-8 text-gold-500" />
                </span>
                <h3 className="text-xl font-semibold text-emerald-700 mb-4 group-hover:text-gold-600 transition-colors duration-300">Implementation</h3>
                <p className="text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  We work with you to implement the strategy, providing guidance and support throughout the process.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-emerald-200 -translate-y-1/2 -z-10"></div>
            </div>

            {/* Step 4 */}
            <div className="animate-on-scroll animate-delay-400">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group h-full flex flex-col items-center">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 group-hover:bg-gold-50 transition-colors duration-300 shadow-md p-4 mb-6">
                  <TrendingUp className="h-8 w-8 text-emerald-600" />
                </span>
                <h3 className="text-xl font-semibold text-emerald-700 mb-4 group-hover:text-gold-600 transition-colors duration-300">Evaluation & Refinement</h3>
                <p className="text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  We measure results, gather feedback, and refine our approach to ensure optimal outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
