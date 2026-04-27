import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Brain,
  Users,
  Code,
  Smartphone,
  Cloud,
  Building2,
  User,
  Clock,
  FileText,
} from "lucide-react";
import { scrollToContact } from "@/utils/scrollToContact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-bl from-brand-navy via-brand-navy/90 to-brand-navy/85 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/new-logo/logo-white.png"
                alt="Dexterz Technologies Logo"
                className="h-12"
              />
            </Link>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Dexterz-Technologies/61576606963537/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-teal transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dexterztechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-teal transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/dexterztechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-teal transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://x.com/Dexterzofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-teal transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              {/* <a
                href="https://github.com/dexterzsol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-teal transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a> */}

              {/* YouTube */}
              {/* <a
                href="https://www.youtube.com/@dexterzsol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-teal transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Brain size={16} className="mr-2 text-brand-teal" />
                <Link
                  to="/services/ai"
                  className="text-gray-300 hover:text-brand-teal transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li className="flex items-center">
                <Users size={16} className="mr-2 text-brand-teal" />
                <Link
                  to="/services/staff-augmentation"
                  className="text-gray-300 hover:text-brand-teal transition-colors">
                  Staff Augmentation
                </Link>
              </li>
              <li className="flex items-center">
                <Code size={16} className="mr-2 text-brand-teal" />
                <Link
                  to="/services/development"
                  className="text-gray-300 hover:text-brand-teal transition-colors">
                  Software Development
                </Link>
              </li>
              <li className="flex items-center">
                <Smartphone size={16} className="mr-2 text-brand-teal" />
                <Link
                  to="/services/mobile"
                  className="text-gray-300 hover:text-brand-teal transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li className="flex items-center">
                <Cloud size={16} className="mr-2 text-brand-teal" />
                <Link
                  to="/services/cloud"
                  className="text-gray-300 hover:text-brand-teal transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li className="flex items-center">
                <Building2 size={16} className="mr-2 text-brand-teal" />
                <Link
                  to="/services/consultation"
                  className="text-gray-300 hover:text-brand-teal transition-colors">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Building2 size={16} className="mr-2 text-brand-teal" />
                <Link to="/about" className="text-gray-300 hover:text-brand-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li className="flex items-center">
                <FileText size={16} className="mr-2 text-brand-teal" />
                <Link to="/blogs" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li className="flex items-center">
                <Users size={16} className="mr-2 text-brand-teal" />
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-brand-teal transition-colors">
                  Careers
                </Link>
              </li>
              <li className="flex items-center">
                <User size={16} className="mr-2 text-brand-teal" />
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-brand-teal transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-brand-teal mt-1" />
                <span className="text-gray-300">
                  1425 Woodward Ave, Detroit, MI 48226, United States
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-brand-teal" />
                <a
                  href="tel:+19452007124"
                  className="text-gray-300 hover:text-brand-teal transition-colors">
                  +1 (945) 200-7124
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-brand-teal" />
                <a
                  href="mailto:info@dexterztechnologies.com"
                  className="text-gray-300 hover:text-brand-teal transition-colors">
                  info@dexterztechnologies.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-brand-teal" />
                <span className="text-gray-300">Mon-Fri: 9AM-6PM EST<br />Sat-Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} · Powered by Dexterz Technologies LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
