"use client"

import { useEffect } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Navigation from "@/components/navigation"
import { Shield, FileText, AlertTriangle, Cookie, Receipt } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"

const policies = [
  {
    value: "privacy-policy",
    icon: <Shield className="h-6 w-6 text-emerald-600 mr-4" />,
    title: "Privacy Policy",
    content: [
      {
        heading: "1. Information We Collect",
        points: [
          "Personal Information: When you contact us, sign up for services, or fill out a form, we may collect your name, email, phone number, company name, and message.",
          "Usage Information: We may collect data such as browser type, IP address, and pages visited through cookies and analytics tools.",
        ],
      },
      {
        heading: "2. How We Use Your Information",
        points: [
          "To provide and manage our consultancy services.",
          "To respond to your inquiries or send updates.",
          "To improve the performance and content of our website.",
        ],
      },
      {
        heading: "3. Sharing Information",
        points: [
          "We do not sell or rent your personal information. Data may be shared only with trusted third-party service providers (e.g., web hosting or CRM tools) under confidentiality agreements.",
        ],
      },
      {
        heading: "4. Data Security",
        points: [
          "We take all reasonable measures to protect your information. However, no internet-based site can be 100% secure.",
        ],
      },
      {
        heading: "5. Your Rights",
        points: [
          "You may request access to, correction, or deletion of your personal data by contacting us at: Email: contact@visionnest.com",
        ],
      },
    ],
  },
  {
    value: "terms-and-conditions",
    icon: <FileText className="h-6 w-6 text-emerald-600 mr-4" />,
    title: "Terms & Conditions",
    content: [
      {
        heading: "1. Website Usage",
        points: [
          "By using our site, you agree not to misuse or damage our site or services. Unauthorized use may give rise to a claim for damages or be a criminal offense.",
        ],
      },
      {
        heading: "2. Intellectual Property",
        points: [
          "All content, logos, graphics, and service descriptions on this website are the property of VisionNest. Any unauthorized use or reproduction is strictly prohibited.",
        ],
      },
      {
        heading: "3. Service Terms",
        points: [
          "Our consultancy is provided on a professional advisory basis.",
          "Outcomes are based on strategic recommendations and implementation support, not guaranteed results.",
        ],
      },
      {
        heading: "4. Changes to Terms",
        points: [
          "VisionNest reserves the right to change or update these terms at any time. Continued use of the site implies acceptance of those changes.",
        ],
      },
    ],
  },
  {
    value: "disclaimer",
    icon: <AlertTriangle className="h-6 w-6 text-emerald-600 mr-4" />,
    title: "Disclaimer",
    content: [
      {
        points: [
          "All information provided on this website or during consultations is for general guidance and informational purposes only. VisionNest makes no warranties regarding outcomes of business decisions made based on our advice.",
          "Clients are encouraged to consult legal, financial, or technical experts before making decisions that may have a significant impact on their business.",
        ],
      },
    ],
  },
  {
    value: "cookie-policy",
    icon: <Cookie className="h-6 w-6 text-emerald-600 mr-4" />,
    title: "Cookie Policy",
    content: [
      {
        points: [
          "VisionNest uses cookies to enhance your browsing experience, improve performance, and analyze website traffic.",
          "By using our site, you consent to the use of cookies as described in this policy. You may disable cookies in your browser settings.",
        ],
      },
      {
        heading: "Types of cookies we use:",
        points: [
          "Functional cookies",
          "Analytical/performance cookies",
          "Targeting cookies (if using retargeting ads)",
        ],
      },
    ],
  },
  {
    value: "refund-policy",
    icon: <Receipt className="h-6 w-6 text-emerald-600 mr-4" />,
    title: "Refund & Cancellation Policy",
    content: [
      {
        note: "This applies if VisionNest offers paid consultations, workshops, or strategy sessions.",
        heading: "1. Payments",
        points: [
          "All payments for scheduled services are final and non-refundable once the service is delivered.",
        ],
      },
      {
        heading: "2. Rescheduling",
        points: [
          "You may reschedule a session up to 24 hours in advance. Late requests may incur a fee or be considered a missed session.",
        ],
      },
      {
        heading: "3. Cancellations / No-Shows",
        points: [
          "If you miss a session without notice, it will be considered a no-show and will not be refunded or rescheduled.",
        ],
      },
    ],
  },
]

export default function LegalPage() {
  const { initAnimations } = useAnimation()

  useEffect(() => {
    initAnimations()
  }, [initAnimations])

  return (
    <>
      <Navigation forceSolid={true} />
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 text-emerald-900 relative overflow-hidden bg-ivory">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-ivory/90 to-transparent z-10 pointer-events-none" />
        <div className="container-custom relative z-20">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll fade-in-up">
            <h1 className="heading-lg mb-6">Legal & Policies</h1>
            <p className="body-lg text-emerald-700 mb-8 font-light">
              Your privacy, rights, and the terms of our services are important to us. Here you can find all the legal information regarding our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="section-padding bg-emerald-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {policies.map((policy) => (
                <AccordionItem key={policy.value} value={policy.value} className="border-b border-emerald-200">
                  <AccordionTrigger className="text-xl font-semibold text-emerald-800 hover:no-underline">
                    <div className="flex items-center">
                      {policy.icon}
                      {policy.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-8 pl-4 border-l-2 border-emerald-200 ml-8">
                    <div className="prose prose-emerald max-w-none text-emerald-700 font-light">
                      {policy.content.map((section, index) => (
                        <div key={index} className="mb-4">
                          {section.note && <p className="italic text-sm">{section.note}</p>}
                          {section.heading && <h4>{section.heading}</h4>}
                          {section.points && (
                            <ul>
                              {section.points.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
} 