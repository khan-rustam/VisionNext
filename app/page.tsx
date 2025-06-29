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
    let yearsTarget = 17
    let clientsTarget = 100
    let satisfactionTarget = 100
    let duration = 1200 // ms
    let frame = 0
    let totalFrames = 60
    function animate() {
      frame++
      setYears(Math.round((yearsTarget * frame) / totalFrames))
      setClients(Math.round((clientsTarget * frame) / totalFrames))
      setSatisfaction(Math.round((satisfactionTarget * frame) / totalFrames))
      if (frame < totalFrames) {
        requestAnimationFrame(animate)
      } else {
        setYears(yearsTarget)
        setClients(clientsTarget)
        setSatisfaction(satisfactionTarget)
      }
    }
    animate()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden animate-on-scroll"
        style={{ backgroundColor: "#00000000" }}
      >
        <div className="absolute inset-0 z-0">
          <div ref={heroRef} className="absolute inset-0">
            <Image
              src="/Hero-Banner.jpg"
              alt="Abstract vision and innovation background - Unsplash"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl mb-8 leading-tight fade-in-up" style={{ color: "#FDFDFB" }}>
              Where Your   <span style={{ color: "#D4AF37" }}>Home </span> Begins with {" "}
              <span style={{ color: "#D4AF37" }}>Trust.</span>
            </h1>
            <div className="flex flex-col sm:flex-row justify-center gap-6 scale-in" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact" className="btn-primary group">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
      <section className="section-padding animate-on-scroll" style={{ backgroundColor: "#FDFDFB" }}>
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
                Secure <span style={{ color: "#D4AF37" }}> Homes.</span>  Empowered {" "}
                <span style={{ color: "#D4AF37" }}>Futures.</span>
              </h2>
              <p className="body-lg font-light">
                At VisionNest Home Loan, we believe that a home is more than just a roof — it's where
                dreams settle, families grow, and futures are built. Founded with purpose and passion,
                we are a family-led business committed to guiding others toward financial clarity,
                emotional security, and long-term prosperity.               </p>
              <p className="body-lg font-light">
                With a deep understanding of trust, care, and strategic finance, we make the mortgage
                process human — blending compassion with expertise. Our mission is to simplify home
                ownership for every client we serve, offering not just loans, but peace of mind and a
                trusted path home.
              </p>
              <p className="body-lg font-light">
                Secure homes. Empowered lives. Built with vision, guided by trust.
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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Teamwork and business growth - Unsplash"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding animate-on-scroll" style={{ backgroundColor: "#F0F9F4" }}>
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
              We offer a comprehensive range of services designed to help your business grow, innovate, and succeed in today's competitive landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enhanced Services Preview - match services page, add polish */}
            {[
              {
                title: "Home Loans",
                image: "https://financesupport.com.au/wp-content/uploads/2022/11/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept.jpg",
                description: "Find the best home loan options tailored to your needs and goals.",
              },
              {
                title: "Commercial and Business Loan",
                image: "https://financesupport.com.au/wp-content/uploads/2022/11/handshake-close-up-executives.jpg",
                description: "Flexible financing for your business growth and expansion.",
              },
              {
                title: "Investement Property",
                image: "https://financesupport.com.au/wp-content/uploads/2022/11/accountant-calculating-profit-with-financial-analysis-graphs.jpg",
                description: "Expert guidance and solutions for your investment property financing needs.",
              },
            ].map((service, idx) => (
              <div
                key={service.title}
                className="bg-ivory rounded-2xl p-0 shadow-xl border border-gold-100 card-hover flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden floating"
                style={{ minHeight: 380 }}
              >
                <div className="relative w-full h-52 overflow-hidden rounded-t-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gold-200/60 to-transparent opacity-80 pointer-events-none" />
                </div>
                <div className="flex flex-col gap-2 justify-between p-8">
                  <h3 className="text-xl font-semibold text-emerald-900 group-hover:text-gold-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-emerald-700 font-light ">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-on-scroll bounce-in">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Our Lenders Section */}
      <section className="section-padding bg-ivory animate-on-scroll">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-12 animate-on-scroll">
            <h2 className="heading-lg mb-4 tracking-wide">OUR LENDERS</h2>
            <h4 className="text-xl md:text-2xl font-semibold mb-6 text-gray-700">
              We work with almost 50 lenders to offer the most competitive loan terms & approval rates.
            </h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
            {/* Lender Logos - use local images */}
            {[
              { src: "/Lenders/AMP.png", alt: "AMP" },
              { src: "/Lenders/ANZ.png", alt: "ANZ" },
              { src: "/Lenders/Westpac.png", alt: "Westpac" },
              { src: "/Lenders/Bankwest.jpg", alt: "Bankwest" },
              { src: "/Lenders/Commonwealth.png", alt: "Commonwealth Bank" },
              { src: "/Lenders/ING.png", alt: "ING" },
              { src: "/Lenders/Liberty.jpg", alt: "Liberty" },
              { src: "/Lenders/LaTrobeFinancialLogo.jpg", alt: "La Trobe Financial" },
              { src: "/Lenders/Macquarie_Group_logo.jpg", alt: "Macquarie" },
              { src: "/Lenders/NAB-Logo.png", alt: "NAB" },
              { src: "/Lenders/PapperMoney.png", alt: "Pepper Money" },
              { src: "/Lenders/Resimac.jpeg", alt: "Resimac" },
              { src: "/Lenders/Suncorp.jpeg", alt: "Suncorp" },
              { src: "/Lenders/Bankof Marbourn.png", alt: "Bank of Melbourne" },
              { src: "/Lenders/Teachers.png", alt: "Teachers Mutual Bank" },
              { src: "/Lenders/st.george.jpeg", alt: "St. George" },
              { src: "/Lenders/Heritage.png", alt: "Heritage Bank" },
              { src: "/Lenders/bluestone.png", alt: "Bluestone" },
            ].map((logo, idx) => (
              <div key={logo.alt + idx} className="flex items-center justify-center bg-white rounded-lg shadow p-4 h-28">
                <img src={logo.src} alt={logo.alt} className="max-h-16 object-contain" style={{ maxWidth: '120px', width: '100%' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 animate-on-scroll" style={{ backgroundColor: "#FDFDFB" }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3  gap-8">
            <div className="text-center animate-on-scroll scale-in">
              <div className="text-5xl font-bold mb-2 pulse-slow transition-all duration-500" style={{ color: "#2E8B57", letterSpacing: "-2px" }}>
                17+
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

          </div>
        </div>
      </section>

      {/* Why We Are Better Than The Banks */}
      <section className="section-padding bg-white animate-on-scroll">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <div className="inline-block rounded-lg bg-gold-100 px-3 py-1 text-sm text-gold-600 mb-4 font-semibold tracking-wide">
              Why We Are Better Than The Banks
            </div>
            <h2 className="heading-lg mb-6 text-emerald-900">Why We Are Better Than The Banks</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Completely Personalised */}
            <div className="bg-ivory rounded-2xl p-8 shadow-lg border border-gold-100 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
              <span className="inline-flex items-center justify-center rounded-full bg-gold-50 mb-6 shadow-md p-4">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="2" /><text x="50%" y="55%" textAnchor="middle" fill="#2E8B57" fontSize="18" fontWeight="bold" dy=".3em">👤</text></svg>
              </span>
              <h3 className="text-lg font-semibold text-emerald-800 mb-2 group-hover:text-gold-600 transition-colors duration-300">Completely Personalised</h3>
              <div className="font-bold text-gold-600 mb-2">IT'S ALL ABOUT YOU</div>
              <p className="text-emerald-700 font-light">You are not just another number to us. We work to find you the deal that best suits you and your circumstances.</p>
            </div>
            {/* Ultra Quick */}
            <div className="bg-ivory rounded-2xl p-8 shadow-lg border border-gold-100 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
              <span className="inline-flex items-center justify-center rounded-full bg-gold-50 mb-6 shadow-md p-4">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="2" /><text x="50%" y="55%" textAnchor="middle" fill="#2E8B57" fontSize="18" fontWeight="bold" dy=".3em">⚡</text></svg>
              </span>
              <h3 className="text-lg font-semibold text-emerald-800 mb-2 group-hover:text-gold-600 transition-colors duration-300">Ultra Quick</h3>
              <div className="font-bold text-gold-600 mb-2">YOUR TIME IS OUR PRIORITY</div>
              <p className="text-emerald-700 font-light">There's no "We will get back to you in 2-3 business days". We offer fast response times and quick results.</p>
            </div>
            {/* Super Simple */}
            <div className="bg-ivory rounded-2xl p-8 shadow-lg border border-gold-100 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
              <span className="inline-flex items-center justify-center rounded-full bg-gold-50 mb-6 shadow-md p-4">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="2" /><text x="50%" y="55%" textAnchor="middle" fill="#2E8B57" fontSize="18" fontWeight="bold" dy=".3em">✔️</text></svg>
              </span>
              <h3 className="text-lg font-semibold text-emerald-800 mb-2 group-hover:text-gold-600 transition-colors duration-300">Super Simple</h3>
              <div className="font-bold text-gold-600 mb-2">LEAVE IT UP TO US</div>
              <p className="text-emerald-700 font-light">You will be assigned a dedicated Home Loan Specialist to assist you throughout the entire process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding animate-on-scroll" style={{ backgroundColor: "#FDFDFB" }}>
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

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-ivory relative overflow-hidden animate-on-scroll" style={{ backgroundColor: "#1A5A3A" }}>
        <div className="absolute inset-0 opacity-10">
          <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80" alt="Business transformation background - Unsplash" fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-on-scroll slide-in-left">
              <h2 className="heading-lg font-montserrat" style={{ color: "#FDFDFB" }}>
                Secure Homes. Empowered Futures With Vision Nest Home Loan.
              </h2>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact" className="btn-primary" style={{ backgroundColor: "#D4AF37", color: "#2E8B57" }}>
                  Contact Us Today
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl animate-on-scroll animate-delay-200 slide-in-right">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
