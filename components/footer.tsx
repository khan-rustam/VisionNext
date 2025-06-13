import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="pt-20 pb-8" style={{ backgroundColor: "#0F3A26", color: "#FDFDFB" }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6 fade-in-up">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-playfair font-bold" style={{ color: "#FDFDFB" }}>
                Vision<span style={{ color: "#D4AF37" }}>Nest</span>
              </span>
            </Link>
            <p className="max-w-xs font-light" style={{ color: "#FDFDFB" }}>
              Nurturing Ideas into Reality. We help visionary businesses grow and transform with innovative solutions.
            </p>
            <div className="flex space-x-5 pt-2">
              <Link href="#" className="transition-colors hover:text-gold" style={{ color: "#FDFDFB" }}>
                <Facebook size={22} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="transition-colors hover:text-gold" style={{ color: "#FDFDFB" }}>
                <Instagram size={22} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="transition-colors hover:text-gold" style={{ color: "#FDFDFB" }}>
                <Linkedin size={22} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="slide-in-left" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-semibold text-lg mb-6" style={{ color: "#D4AF37" }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="transition-colors hover:text-gold inline-block" style={{ color: "#FDFDFB" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-gold inline-block"
                  style={{ color: "#FDFDFB" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-gold inline-block"
                  style={{ color: "#FDFDFB" }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-gold inline-block"
                  style={{ color: "#FDFDFB" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="slide-in-right" style={{ animationDelay: "0.4s" }}>
            <h3 className="font-semibold text-lg mb-6" style={{ color: "#D4AF37" }}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
                <div className="space-y-2">
                  <a
                    href="mailto:Hemant@visionnest.com.au"
                    className="transition-colors hover:text-gold block"
                    style={{ color: "#FDFDFB" }}
                  >
                    Hemant@visionnest.com.au
                  </a>
                  <a
                    href="mailto:Shagun@visionnest.com.au"
                    className="transition-colors hover:text-gold block"
                    style={{ color: "#FDFDFB" }}
                  >
                    Shagun@visionnest.com.au
                  </a>
                </div>
              </li>
              <li className="flex">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0" style={{ color: "#D4AF37" }} />
                <span style={{ color: "#FDFDFB" }}>+61 (0) 000 000 000</span>
              </li>
              <li className="flex">
                <MapPin className="mr-3 h-5 w-5 flex-shrink-0" style={{ color: "#D4AF37" }} />
                <span style={{ color: "#FDFDFB" }}>Sydney, Australia</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="fade-in-up" style={{ animationDelay: "0.6s" }}>
            <h3 className="font-semibold text-lg mb-6" style={{ color: "#D4AF37" }}>
              Business Hours
            </h3>
            <ul className="space-y-3">
              <li style={{ color: "#FDFDFB" }}>
                <span className="font-medium">Monday - Friday:</span>
                <br />
                9:00 AM - 5:00 PM
              </li>
              <li style={{ color: "#FDFDFB" }}>
                <span className="font-medium">Saturday:</span>
                <br />
                By appointment
              </li>
              <li style={{ color: "#FDFDFB" }}>
                <span className="font-medium">Sunday:</span>
                <br />
                Closed
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 text-center text-sm" style={{ borderTop: "1px solid #2E8B57", color: "#FDFDFB" }}>
          <p>&copy; {currentYear} VisionNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
