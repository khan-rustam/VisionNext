"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Mail, MapPin, Phone, User, MessageSquare, FileText, HelpCircle, Clock, RefreshCw, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useAnimation } from "@/components/animation-provider"
import Navigation from "@/components/navigation"

export default function Contact() {
  const { initAnimations } = useAnimation()

  useEffect(() => {
    initAnimations()
  }, [initAnimations])

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // In a real implementation, you would send the form data to your backend
      // For this static site, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      setError("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navigation forceSolid={true} />
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 text-emerald-900 relative overflow-hidden">
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
            <div className="inline-block rounded-lg bg-gold-100 px-3 py-1 text-sm text-gold-600 font-semibold mb-4 tracking-wide">Let's Connect</div>
            <h1 className="heading-lg mb-6">Contact Us</h1>
            <p className="body-lg text-emerald-700 mb-8 font-light">
              Have questions or ready to start a conversation? We're here to help you move forward.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div id="contact-form" className="bg-ivory p-10 rounded-2xl shadow-lg border border-gray-100 card-hover animate-on-scroll transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden">
              <h2 className="heading-md mb-8">Send Us a Message</h2>
              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center">
                  <div className="h-16 w-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-3">Thank You!</h3>
                  <p className="text-emerald-600 mb-6 font-light">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <Button className="btn-primary" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2 relative">
                    <Label htmlFor="name" className="text-emerald-800">
                      Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-500" />
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="h-12 border-gray-200 focus:border-gold-500 pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 relative">
                    <Label htmlFor="email" className="text-emerald-800">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-500" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                        className="h-12 border-gray-200 focus:border-gold-500 pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 relative">
                    <Label htmlFor="subject" className="text-emerald-800">
                      Subject
                    </Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-500" />
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="Subject of your message"
                        required
                        className="h-12 border-gray-200 focus:border-gold-500 pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 relative">
                    <Label htmlFor="message" className="text-emerald-800">
                      Message
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 text-gold-500" />
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={5}
                        required
                        className="border-gray-200 focus:border-gold-500 pl-10 pt-3"
                      />
                    </div>
                  </div>
                  {error && <div className="text-rose-500 text-sm">{error}</div>}
                  <Button type="submit" className="btn-primary w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
              <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-gold-400 transition-all duration-300" />
            </div>

            {/* Contact Information */}
            <div className="space-y-10">
              <div className="animate-on-scroll">
                <h2 className="heading-md mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start p-6 bg-emerald-50 rounded-lg transition-all duration-300 hover:shadow-md">
                    <Mail className="h-8 w-8 text-emerald-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-800 mb-3">Email</h3>
                      <a
                        href="mailto:Hemant@visionnest.com.au"
                        className="text-emerald-700 hover:text-emerald-500 transition-colors block mb-2"
                      >
                        Hemant@visionnest.com.au
                      </a>
                      <a
                        href="mailto:Shagun@visionnest.com.au"
                        className="text-emerald-700 hover:text-emerald-500 transition-colors block"
                      >
                        Shagun@visionnest.com.au
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-emerald-50 rounded-lg transition-all duration-300 hover:shadow-md">
                    <Phone className="h-8 w-8 text-emerald-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-800 mb-3">Phone</h3>
                      <p className="text-emerald-700">+61 (0) 000 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-emerald-50 rounded-lg transition-all duration-300 hover:shadow-md">
                    <MapPin className="h-8 w-8 text-emerald-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-800 mb-3">Location</h3>
                      <p className="text-emerald-700">Sydney, Australia</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-emerald-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
            <p className="body-md text-emerald-700 font-light">
              Find answers to common questions about our services and how we work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* FAQ 1 */}
            <div className="bg-ivory p-8 rounded-2xl shadow-xl animate-on-scroll animate-delay-100 border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden">
              <div className="flex items-center mb-6">
                <HelpCircle className="h-8 w-8 text-gold-500 mr-3" />
                <h3 className="text-xl font-semibold text-emerald-800 mb-0 group-hover:text-gold-600 transition-colors duration-300">What industries do you work with?</h3>
              </div>
              <p className="text-emerald-700 font-light group-hover:text-emerald-900 transition-colors duration-300">
                We work with businesses across various industries, including technology, healthcare, finance, retail,
                and more. Our approach is adaptable to different sectors and business models.
              </p>
            </div>
            {/* FAQ 2 */}
            <div className="bg-ivory p-8 rounded-2xl shadow-xl animate-on-scroll animate-delay-200 border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-gold-500 mr-3" />
                <h3 className="text-xl font-semibold text-emerald-800 mb-0 group-hover:text-gold-600 transition-colors duration-300">How long does a typical project take?</h3>
              </div>
              <p className="text-emerald-700 font-light group-hover:text-emerald-900 transition-colors duration-300">
                Project timelines vary depending on scope and complexity. We work closely with you to establish
                realistic timelines and milestones, ensuring efficient progress while maintaining quality.
              </p>
            </div>
            {/* FAQ 3 */}
            <div className="bg-ivory p-8 rounded-2xl shadow-xl animate-on-scroll animate-delay-300 border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden">
              <div className="flex items-center mb-6">
                <RefreshCw className="h-8 w-8 text-gold-500 mr-3" />
                <h3 className="text-xl font-semibold text-emerald-800 mb-0 group-hover:text-gold-600 transition-colors duration-300">Do you offer ongoing support?</h3>
              </div>
              <p className="text-emerald-700 font-light group-hover:text-emerald-900 transition-colors duration-300">
                Yes, we offer ongoing support and partnership options. Many of our clients choose to maintain a
                long-term relationship with us to ensure continued growth and adaptation.
              </p>
            </div>
            {/* FAQ 4 */}
            <div className="bg-ivory p-8 rounded-2xl shadow-xl animate-on-scroll animate-delay-400 border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 group relative overflow-hidden">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-8 w-8 text-gold-500 mr-3" />
                <h3 className="text-xl font-semibold text-emerald-800 mb-0 group-hover:text-gold-600 transition-colors duration-300">How do you measure success?</h3>
              </div>
              <p className="text-emerald-700 font-light group-hover:text-emerald-900 transition-colors duration-300">
                We establish clear metrics and KPIs at the beginning of each project, aligned with your business goals.
                We regularly track and report on these metrics to demonstrate progress and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
