"use client";

import { useRef, useState } from "react";
import Button from "./Button";
import Link from "next/link";
import AnimatedNotification from "./AnimatedNotification";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const [form, setForm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [msg, setMsg] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;
      
      emailjs
        .sendForm(
          serviceId,
          templateId,
          formRef.current,
          userId,
        )
        .then(
          () => {
            console.log("SUCCESS! Message sent.");
            setForm("");
            setMsg("Subscribed successfully");
            setIsVisible(true);
          },
          (error) => {
            console.error("FAILED...", error);
            setMsg("Network error. Please try again.");
            setIsVisible(true);
          },
        );
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <AnimatedNotification message={msg} isVisible={isVisible} setIsVisible={setIsVisible} />
      <section className="text-white bg-foreground py-16 px-8 sm:px-6 lg:px-8 mt-16 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="footer-about">
            <div className="footer-logo text-2xl text-white tracking-widest mb-6">
              <img
                src="/logo.png"
                className="w-32"
                alt="BizFinX79"
              />
            </div>
            <p className="footer-about-desc text-base mb-6">
            Step into the future of finance with BizFinx79, where innovation meets integrity. We're not just a financial services firm; we're architects of financial success, designing solutions that stand the test of time. Whether you're a startup laying the foundation, a business building its empire, or an individual constructing your financial fortress, our team of experts is here to provide the blueprint for your success.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-heading relative mb-6 text-xl font-semibold">
              Quick Links
            </div>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-sm font-normal hover:text-secondary transition-colors"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-normal hover:text-secondary transition-colors"
                  href="/services"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-normal hover:text-secondary transition-colors"
                  href="/industries"
                >
                  Our Industries
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact-info">
            <div className="footer-heading relative mb-6 text-xl font-semibold">
              Get In Touch
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
              <a
                    href="https://wa.me/966538320746"
                    aria-label="Whatsapp"
                    className="text-white"
                    target="_blank"
                  >
                    <svg viewBox="0 0 32 32" className="w-6 flex items-start">
                      <path
                        d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                        fillRule="evenodd"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                <a
                  href="https://wa.me/966538320746"
                  className="text-sm font-normal hover:text-secondary transition-colors"
                  target="_blank"
                >
                  00966-538320746
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
            <div className="footer-heading relative mb-6 text-xl font-semibold">
              Newsletter
            </div>
            <div className="footer-form w-full">
              <form ref={formRef} onSubmit={handleFormSubmit} className="relative mb-6">
                <input type="hidden" name="form_type" value="Newsletter" />
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
