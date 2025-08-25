import React from 'react';
import logo from "../assets/logoFooter.svg";
import fb from "../assets/fb.svg";
import tw from "../assets/tw.svg";
import pt from "../assets/pt.svg";
import ig from "../assets/ig.svg";
import yt from "../assets/yt.svg";
import { footerLinks } from "../data/";

type FooterProps = object

const Footer: React.FC<FooterProps> = () => {
  const socialLinks = [
    { icon: fb, alt: "facebook", href: "#", label: "Facebook" },
    { icon: tw, alt: "twitter", href: "#", label: "Twitter" },
    { icon: pt, alt: "pinterest", href: "#", label: "Pinterest" },
    { icon: ig, alt: "instagram", href: "#", label: "Instagram" },
    { icon: yt, alt: "youtube", href: "#", label: "YouTube" },
  ];

  return (
    <footer className="w-full bg-stone-50/50 border-t border-stone-200/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <img 
                  src={logo} 
                  alt="Classi Furniture Logo" 
                  className="h-16 w-auto mb-6 filter brightness-0 opacity-80"
                />
                <p className="text-stone-600 text-base leading-relaxed max-w-sm">
                  Crafting premium furniture that combines timeless elegance with modern functionality for your perfect living space.
                </p>
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="text-stone-800 font-semibold mb-4">Follow Us</h3>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-stone-200/60 hover:bg-amber-200/80 rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:shadow-md hover:shadow-stone-300/50"
                    >
                      <img 
                        src={social.icon} 
                        alt={social.alt}
                        className="w-4 h-4 opacity-50 group-hover:opacity-90 filter brightness-0 group-hover:brightness-50 transition-all duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {footerLinks.map((link, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-stone-800 font-semibold text-lg">
                      {link.title}
                    </h3>
                    <ul className="space-y-3">
                      {link.items.map((item, idx) => (
                        <li key={idx}>
                          <a 
                            href={item.link} 
                            className="text-stone-600 hover:text-amber-700/80 transition-colors duration-300 text-sm leading-relaxed"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-stone-800 font-semibold text-lg">
                Stay Updated
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Get the latest updates on new collections, exclusive offers, and design inspiration.
              </p>
              <div className="pt-2">
                <a 
                  href="#newsletter" 
                  className="inline-flex items-center text-amber-700/80 hover:text-amber-800 font-medium text-sm transition-colors duration-300"
                >
                  Subscribe Now
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-stone-200/60 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-stone-600 text-sm">
              © 2025 Classi Furniture. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-stone-600 hover:text-amber-700/80 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-stone-600 hover:text-amber-700/80 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-stone-600 hover:text-amber-700/80 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;