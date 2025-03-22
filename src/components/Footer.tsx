"use client";

import { useState } from "react";
import Button from "./Button";

export default function Footer() {
  const [form, setForm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [msg, setMsg] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg("Subscribed successfully");
    setIsVisible(true);
    setForm(""); // Clears input field after submission
  };

  const currentYear = "2024";

  return (
    <>
      <section className="text-white bg-foreground py-16 px-4 sm:px-6 lg:px-8 mt-16 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="footer-about">
            <div className="footer-logo text-2xl text-white tracking-widest mb-6">
              <img
                src="/icons/devstella-logo1.svg"
                className="w-24"
                alt="BizFinX79"
              />
            </div>
            <p className="footer-about-desc text-base mb-6">
            Step into the future of finance with BizFinx79, where innovation meets integrity. We're not just a financial services firm; we're architects of financial success, designing solutions that stand the test of time. Whether you're a startup laying the foundation, a business building its empire, or an individual constructing your financial fortress, our team of experts is here to provide the blueprint for your success.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-heading mb-6 text-xl font-semibold">
              Quick Links
            </div>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-sm font-normal hover:text-secondary transition-colors"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  className="text-sm font-normal hover:text-secondary transition-colors"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-sm font-normal hover:text-secondary transition-colors"
                  href="#"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  className="text-sm font-normal hover:text-secondary transition-colors"
                  href="#"
                >
                  Our Industries
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-contact-info">
            <div className="footer-heading mb-6 text-xl font-semibold">
              Get In Touch
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <i className="iconoir-phone text-xl"></i>
                <a
                  href="tel:+12678000191"
                  className="text-sm font-normal hover:text-secondary transition-colors"
                >
                  +123-456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="iconoir-mail text-xl"></i>
                <a
                  href="mailto:info@bizfinx79.com"
                  className="text-sm font-normal hover:text-secondary transition-colors break-all"
                >
                  info@bizfinx79.com
                </a>
              </div>
              <div className="h-px bg-white my-6"></div>
              {/* <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <i className="iconoir-map-pin text-xl"></i>
                  <span className="text-sm">United Arab Emirates</span>
                </div>
              </div> */}
                            <div className="footer-icons flex space-x-4">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-white hover:text-secondary transition-colors"
                >
                  <i className="iconoir-x text-2xl"></i>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-white hover:text-secondary transition-colors"
                >
                  <i className="iconoir-instagram text-2xl"></i>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-white hover:text-secondary transition-colors"
                >
                  <i className="iconoir-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-newsletter">
            <div className="footer-heading mb-6 text-xl font-semibold">
              Newsletter
            </div>
            <div className="footer-form w-full">
              <form onSubmit={handleFormSubmit} className="relative mb-6">
                <input
                  className="bg-transparent w-full text-white placeholder-gray-400 border-b border-gray-400 focus:outline-none focus:border-gray-500 pb-3 text-base pr-10"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={form}
                  onChange={(e) => setForm(e.target.value)}
                  required
                />
                <Button title="Subscribe" onClick={() => {}} />
              </form>
              {/* <div className="footer-icons flex space-x-4">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-white hover:text-foreground transition-colors"
                >
                  <i className="iconoir-x text-2xl"></i>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-white hover:text-foreground transition-colors"
                >
                  <i className="iconoir-instagram text-2xl"></i>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-white hover:text-foreground transition-colors"
                >
                  <i className="iconoir-linkedin text-2xl"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <footer className="py-4 bg-foreground">
        <p className="text-center text-white text-sm">
          Copyright © <span className="text-secondary">{currentYear}</span>{" "}
          BizFinX79. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
