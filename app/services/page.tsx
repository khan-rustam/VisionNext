"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart2, Lightbulb, Target, Users, LineChart, PenTool, TrendingUp } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"
import Navigation from "@/components/navigation"

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
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/90 to-transparent z-10 pointer-events-none" />
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 card-hover animate-on-scroll animate-delay-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden">
              <div className="flex items-center justify-center mb-8">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 group-hover:bg-gold-50 transition-colors duration-300 shadow-md p-4">
                  <Lightbulb className="h-8 w-8 text-gold-500" />
                </span>
              </div>
              <h3 className="heading-sm mb-4 group-hover:text-gold-600 transition-colors duration-300">Strategic Consulting</h3>
              <p className="text-emerald-700 mb-6 font-light group-hover:text-emerald-900 transition-colors duration-300">
                We help businesses develop clear, actionable strategies that drive growth and create sustainable competitive advantages.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Business strategy development
                </li>
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Market analysis and positioning
                </li>
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Competitive advantage identification
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-gold-600 transition-colors group"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-600" />
              </Link>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-gold-400 transition-all duration-300" />
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 card-hover animate-on-scroll animate-delay-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden">
              <div className="flex items-center justify-center mb-8">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 group-hover:bg-gold-50 transition-colors duration-300 shadow-md p-4">
                  <BarChart2 className="h-8 w-8 text-gold-500" />
                </span>
              </div>
              <h3 className="heading-sm mb-4 group-hover:text-gold-600 transition-colors duration-300">Business Growth</h3>
              <p className="text-emerald-700 mb-6 font-light group-hover:text-emerald-900 transition-colors duration-300">
                Our experts work with you to identify growth opportunities, optimize operations, and scale your business
                effectively.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Growth strategy development
                </li>
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Operational optimization
                </li>
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Scalability planning
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-gold-600 transition-colors group"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-600" />
              </Link>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-gold-400 transition-all duration-300" />
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 card-hover animate-on-scroll animate-delay-300 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden">
              <div className="flex items-center justify-center mb-8">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 group-hover:bg-gold-50 transition-colors duration-300 shadow-md p-4">
                  <Target className="h-8 w-8 text-gold-500" />
                </span>
              </div>
              <h3 className="heading-sm mb-4 group-hover:text-gold-600 transition-colors duration-300">Innovation Solutions</h3>
              <p className="text-emerald-700 mb-6 font-light group-hover:text-emerald-900 transition-colors duration-300">
                We help you develop and implement innovative solutions that address complex challenges and create new
                opportunities.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Innovation strategy
                </li>
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Product and service innovation
                </li>
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Digital transformation
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-gold-600 transition-colors group"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-600" />
              </Link>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-gold-400 transition-all duration-300" />
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 card-hover animate-on-scroll animate-delay-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden">
              <div className="flex items-center justify-center mb-8">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 group-hover:bg-gold-50 transition-colors duration-300 shadow-md p-4">
                  <Users className="h-8 w-8 text-gold-500" />
                </span>
              </div>
              <h3 className="heading-sm mb-4 group-hover:text-gold-600 transition-colors duration-300">Leadership Development</h3>
              <p className="text-emerald-700 mb-6 font-light group-hover:text-emerald-900 transition-colors duration-300">
                We help organizations build strong leadership capabilities that drive performance, innovation, and
                sustainable growth.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Executive coaching
                </li>
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Team development
                </li>
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Succession planning
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-gold-600 transition-colors group"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-600" />
              </Link>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-gold-400 transition-all duration-300" />
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 card-hover animate-on-scroll animate-delay-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden">
              <div className="flex items-center justify-center mb-8">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 group-hover:bg-gold-50 transition-colors duration-300 shadow-md p-4">
                  <LineChart className="h-8 w-8 text-gold-500" />
                </span>
              </div>
              <h3 className="heading-sm mb-4 group-hover:text-gold-600 transition-colors duration-300">Performance Optimization</h3>
              <p className="text-emerald-700 mb-6 font-light group-hover:text-emerald-900 transition-colors duration-300">
                We help businesses improve efficiency, productivity, and overall performance through data-driven
                insights and proven methodologies.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Process optimization
                </li>
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Performance metrics and KPIs
                </li>
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Continuous improvement systems
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-gold-600 transition-colors group"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-600" />
              </Link>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-gold-400 transition-all duration-300" />
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 card-hover animate-on-scroll animate-delay-300 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden">
              <div className="flex items-center justify-center mb-8">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 group-hover:bg-gold-50 transition-colors duration-300 shadow-md p-4">
                  <PenTool className="h-8 w-8 text-gold-500" />
                </span>
              </div>
              <h3 className="heading-sm mb-4 group-hover:text-gold-600 transition-colors duration-300">Brand Strategy</h3>
              <p className="text-emerald-700 mb-6 font-light group-hover:text-emerald-900 transition-colors duration-300">
                We help businesses develop and implement compelling brand strategies that resonate with target audiences
                and drive growth.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Brand positioning
                </li>
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Messaging and communication
                </li>
                <li className="flex items-center text-emerald-800 font-light group-hover:text-emerald-900 transition-colors duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-3"></div>
                  Brand experience design
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-gold-600 transition-colors group"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-600" />
              </Link>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-gold-400 transition-all duration-300" />
            </div>
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

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 mb-4">
              Client Success
            </div>
            <h2 className="heading-lg mb-6">What Our Clients Say</h2>
            <p className="body-md text-emerald-700 font-light">
              Don't just take our word for it. Here's what our clients have to say about working with VisionNest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-8 shadow-xl animate-on-scroll animate-delay-100 border border-gray-100">
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-gold-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-emerald-800 mb-8 italic font-light">
                "VisionNest helped us transform our business strategy, resulting in significant growth and improved
                operational efficiency. Their insights and guidance were invaluable."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-emerald-100 mr-4"></div>
                <div>
                  <p className="font-semibold text-emerald-900">Sarah Johnson</p>
                  <p className="text-emerald-700 text-sm">CEO, TechInnovate</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-8 shadow-xl animate-on-scroll animate-delay-200 border border-gray-100">
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-gold-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-emerald-800 mb-8 italic font-light">
                "The team at VisionNest brought fresh perspectives and innovative solutions to our challenges. Their
                collaborative approach made the entire process smooth and effective."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-emerald-100 mr-4"></div>
                <div>
                  <p className="font-semibold text-emerald-900">Michael Chen</p>
                  <p className="text-emerald-700 text-sm">COO, GrowthPartners</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-8 shadow-xl animate-on-scroll animate-delay-300 border border-gray-100">
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-gold-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-emerald-800 mb-8 italic font-light">
                "Working with VisionNest has been transformative for our organization. Their strategic insights and
                practical approach helped us navigate complex challenges and achieve our goals."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-emerald-100 mr-4"></div>
                <div>
                  <p className="font-semibold text-emerald-900">Emily Rodriguez</p>
                  <p className="text-emerald-700 text-sm">Founder, InnovateNow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-emerald-900 text-ivory relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-on-scroll">
              <h2 className="heading-lg">Ready to Transform Your Business?</h2>
              <p className="body-md text-emerald-100 font-light">
                Let's discuss how VisionNest can help your business grow and innovate. Contact us today to schedule a
                consultation and take the first step toward transformation.
              </p>
              <Link href="/contact" className="btn-primary bg-gold-500 hover:bg-gold-600 text-emerald-950 group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl animate-on-scroll animate-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-600/20 to-transparent z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80"
                alt="Business partnership and success - Unsplash"
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
