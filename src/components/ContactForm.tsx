"use client";
import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import AnimatedNotification from "./AnimatedNotification";

type FormFields = {
  name: string;
  email: string;
  companyName: string;
  description: string;
};

function ContactForm() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    companyName: "",
    description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

    if (!formRef.current) return;

    emailjs
      .sendForm(serviceId, templateId, formRef.current, userId)
      .then(
        () => {
          setMsg("Message sent successfully. We will contact you soon.");
          setIsVisible(true);
          console.log("SUCCESS! Message sent.");
          setIsVisible(true);
          setMsg("Message Sent. We will contact you soon");
          setFormData({
            name: "",
            email: "",
            companyName: "",
            description: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setMsg("Network error. Please try again.");
          setIsVisible(true);
        }
      );
  };

  return (
    <>
      <AnimatedNotification message={msg} isVisible={isVisible} setIsVisible={setIsVisible} />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex mx-auto flex-col"
      >
        <input type="hidden" name="form_type" value="Contact" />
        <div className="flex w-full flex-col md:flex-row">
          <input
            className="my-5 mr-5 w-full text-black placeholder-foreground border-b border-foreground focus:outline-none focus:border-secondary focus:transition-colors focus:duration-300 pb-3 text-base"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="my-5 mr-5 w-full text-black placeholder-foreground border-b border-foreground focus:outline-none focus:border-secondary focus:transition-colors focus:duration-300 pb-3 text-base"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <input
          className="my-5 mr-5 w-full text-black placeholder-foreground border-b border-foreground focus:outline-none focus:border-secondary focus:transition-colors focus:duration-300 pb-3 text-base"
          type="text"
          name="companyName"
          id="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <textarea
          className="my-5 mr-5 w-full text-black placeholder-foreground border-b border-foreground focus:outline-none focus:border-secondary focus:transition-colors focus:duration-300 pb-3 text-base"
          name="description"
          id="message"
          rows={4}
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <div className="inline">
          <Button title="Send Message" />
        </div>
        {isVisible && <p className="text-white mt-4">{msg}</p>}
      </form>
    </>
  );
}

export default ContactForm;
