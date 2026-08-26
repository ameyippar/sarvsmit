"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Send,
} from "lucide-react";
import { Container, Button, Input, Textarea } from "@/components/ui";
import { duration, ease, fadeUp, viewport } from "@/lib/motion";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirement: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export function Contact() {
  const reduce = useReducedMotion();

  const [formData, setFormData] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    }

    if (!formData.requirement.trim()) {
      errs.requirement = "Project / Requirement is required.";
    }

    if (!formData.message.trim()) {
      errs.message = "Message is required.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Frontend validation successful. Code is ready for API/webhook integration.
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSmoothScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById("contact-form-block");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#d6dce6] via-[#e6ebf2] to-[#ced6e4] pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-36 lg:pb-36 border-t border-[#b8c4d6]/60"
    >
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(190,202,218,0.4),transparent_70%)] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(20, 30, 50, 0.4) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8fa0b8]/40 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* ========================================================= */}
        {/* Final CTA Banner */}
        {/* ========================================================= */}
        <motion.div
          variants={fadeUp}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: duration.base, ease }}
          className="relative overflow-hidden rounded-2xl border border-[#b4c0d2] bg-gradient-to-br from-white/95 via-[#ebf0f8] to-[#d4dce8] p-6 sm:p-10 lg:p-16 backdrop-blur-2xl shadow-[0_20px_50px_rgba(20,25,35,0.08),inset_0_1px_1px_#ffffff] text-center"
        >
          <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-black to-transparent opacity-80" />

          <div className="mx-auto max-w-4xl">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-black">
              Start Your Innovation Journey
            </span>

            {/* Headline */}
            <h2 className="mt-5 sm:mt-6 font-serif text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-black">
              Let’s Build the Next Great FMCG Product
            </h2>

            {/* Exact Text */}
            <div className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg font-normal font-sans leading-relaxed text-graphite/90">
              <p>Built Through Science.</p>
              <p>Scaled Through Innovation.</p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Button
                href="#contact-form-block"
                variant="primary"
                onClick={handleSmoothScrollToContact}
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 text-xs font-bold tracking-[0.2em] shadow-[0_4px_16px_rgba(0,0,0,0.15)] justify-center"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                href="tel:+919272417391"
                variant="secondary"
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 text-xs font-bold tracking-[0.2em] border-[#aab5c6] bg-white/70 shadow-[inset_0_1px_0_#ffffff] hover:bg-white justify-center"
              >
                <Phone className="mr-2 h-3.5 w-3.5 text-black" />
                <span>Talk to Sarvsmit</span>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* Contact Information & Enquiry Form Block */}
        {/* ========================================================= */}
        <div id="contact-form-block" className="mt-16 sm:mt-24 lg:mt-32 scroll-mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left Column: Direct Contact Info */}
            <motion.div
              variants={fadeUp}
              initial={reduce ? "visible" : "hidden"}
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: duration.base, ease }}
              className="lg:col-span-5"
            >
              <div className="metallic-badge inline-flex items-center gap-2 rounded-full px-3.5 py-1 backdrop-blur-sm">
                <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.22em] text-black">
                  Direct Inquiries
                </span>
              </div>

              {/* Heading */}
              <h3 className="mt-5 sm:mt-6 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.12] tracking-tight text-black">
                Let’s Build Something Great
              </h3>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-graphite/90 font-normal">
                Whether you are formulating a new category entrant or optimizing an existing commercial manufacturing pipeline, our team is ready to collaborate.
              </p>

              {/* Contact Links */}
              <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
                {/* Email */}
                <a
                  href="mailto:info@sarvsmitglobalenterprise.com"
                  className="metallic-card group flex items-start gap-3.5 sm:gap-4 rounded-xl p-4 transition-all duration-300 hover:border-[#8a9cb5]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#b8c4d6] bg-white/70 text-black shadow-[inset_0_1px_0_#ffffff] transition-colors group-hover:border-[#96a4b8] group-hover:bg-white">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#4d5666]">
                      Email
                    </span>
                    <p className="mt-0.5 text-xs sm:text-sm font-medium text-black transition-colors break-all">
                      info@sarvsmitglobalenterprise.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919272417391"
                  className="metallic-card group flex items-start gap-3.5 sm:gap-4 rounded-xl p-4 transition-all duration-300 hover:border-[#8a9cb5]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#b8c4d6] bg-white/70 text-black shadow-[inset_0_1px_0_#ffffff] transition-colors group-hover:border-[#96a4b8] group-hover:bg-white">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#4d5666]">
                      Phone
                    </span>
                    <p className="mt-0.5 text-xs sm:text-sm font-medium text-black transition-colors">
                      +91-9272417391
                    </p>
                  </div>
                </a>

                {/* Website */}
                <a
                  href="https://sarvsmitglobalenterprise.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="metallic-card group flex items-start gap-3.5 sm:gap-4 rounded-xl p-4 transition-all duration-300 hover:border-[#8a9cb5]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#b8c4d6] bg-white/70 text-black shadow-[inset_0_1px_0_#ffffff] transition-colors group-hover:border-[#96a4b8] group-hover:bg-white">
                    <Globe className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#4d5666]">
                      Website
                    </span>
                    <p className="mt-0.5 text-xs sm:text-sm font-medium text-black transition-colors">
                      sarvsmitglobalenterprise.com
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right Column: 6-Field Contact Form */}
            <motion.div
              variants={fadeUp}
              initial={reduce ? "visible" : "hidden"}
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: duration.base, delay: 0.15, ease }}
              className="lg:col-span-7"
            >
              <div className="relative overflow-hidden rounded-2xl border border-[#b4c0d2] bg-gradient-to-br from-white/95 via-[#ebf0f8] to-[#d6dde8] p-5 sm:p-8 lg:p-10 backdrop-blur-xl shadow-[0_15px_40px_rgba(20,25,35,0.08),inset_0_1px_1px_#ffffff]">
                {submitted ? (
                  <div className="py-10 sm:py-12 text-center">
                    <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-emerald-600/30 bg-emerald-50 text-emerald-600">
                      <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" />
                    </div>
                    <h4 className="mt-5 sm:mt-6 font-serif text-xl sm:text-2xl md:text-3xl font-bold text-black">
                      Enquiry Details Captured
                    </h4>
                    <p className="mt-2.5 sm:mt-3 max-w-md mx-auto text-xs sm:text-sm text-graphite/90">
                      Thank you, <span className="text-black font-semibold">{formData.name}</span>. Your project requirement has been prepared. You can also reach us directly at{" "}
                      <a
                        href={`mailto:info@sarvsmitglobalenterprise.com?subject=Enquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Company: ${formData.company}\nPhone: ${formData.phone}\nRequirement: ${formData.requirement}\nMessage: ${formData.message}`)}`}
                        className="text-black font-semibold underline hover:text-black/80 break-all"
                      >
                        info@sarvsmitglobalenterprise.com
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 sm:mt-8 text-xs uppercase tracking-[0.2em] text-[#4d5666] hover:text-black transition-colors font-semibold"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-6">
                    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                      {/* Name */}
                      <Input
                        id="name"
                        name="name"
                        label="Name *"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        autoComplete="name"
                      />

                      {/* Company */}
                      <Input
                        id="company"
                        name="company"
                        label="Company"
                        placeholder="Company or brand name"
                        value={formData.company}
                        onChange={handleChange}
                        error={errors.company}
                        autoComplete="organization"
                      />

                      {/* Email */}
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        label="Email *"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        autoComplete="email"
                      />

                      {/* Phone */}
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        label="Phone *"
                        placeholder="+91-XXXXXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        autoComplete="tel"
                      />
                    </div>

                    {/* Project / Requirement */}
                    <Input
                      id="requirement"
                      name="requirement"
                      label="Project / Requirement *"
                      placeholder="e.g. Functional Beverage R&D, Bakery Texture Engineering"
                      value={formData.requirement}
                      onChange={handleChange}
                      error={errors.requirement}
                    />

                    {/* Message */}
                    <Textarea
                      id="message"
                      name="message"
                      label="Message *"
                      placeholder="Tell us about your timeline, targets, and product vision..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                    />

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full sm:w-auto px-8 py-3.5 sm:px-10 sm:py-4 text-xs font-bold tracking-[0.2em] justify-center shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
                      >
                        <Send className="mr-2 h-3.5 w-3.5" />
                        <span>Send Enquiry</span>
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
