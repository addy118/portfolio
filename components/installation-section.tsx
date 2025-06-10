"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Phone } from "lucide-react";
import { sendEmail } from "./sendEmail";

export default function InstallationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="installation"
      className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-8 relative font-mono"
    >
      <div className="max-w-4xl mx-auto flex flex-col justify-between">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl px-4 font-bold mb-4 sm:mb-6 text-[#00A6ED]">
            Install me on Your Team
          </h2>
          <p className="text-xs sm:text-lg text-[#F1F0EA]/80 px-4">
            For installing Aditya Kirti to make your product ship faster and
            more efficiently, contact below.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 sm:space-y-6 px-4 flex flex-col items-center">
          <Card className="bg-[#0A0A0A]/80 border-[#00A6ED]/20 contact-card-glow transition-all duration-300 w-full max-w-2xl">
            <div className="flex items-baseline justify-center">
              <h3 className="text-lg sm:text-xl font-semibold my-4 sm:my-6 text-[#00A6ED]">
                Get in Touch
              </h3>
            </div>

            <CardContent className="p-4 sm:p-6">
              {isSubmitted && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-[#00A6ED]/10 border border-[#00A6ED]/20 rounded-lg">
                  <p className="text-[#00A6ED] text-sm sm:text-base">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <form
                onSubmit={() => sendEmail(formData)}
                className="space-y-3 sm:space-y-4"
              >
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-[#0A0A0A]/50 border-[#00A6ED]/20 text-[#F1F0EA] placeholder:text-[#F1F0EA]/50 text-xs sm:text-base"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#0A0A0A]/50 border-[#00A6ED]/20 text-[#F1F0EA] placeholder:text-[#F1F0EA]/50 text-xs sm:text-base"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-[#0A0A0A]/50 border-[#00A6ED]/20 text-[#F1F0EA] placeholder:text-[#F1F0EA]/50 text-xs sm:text-base"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00A6ED] hover:bg-[#00A6ED]/80 text-white button-glow transition-all duration-300 text-sm sm:text-base"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex items-baseline gap-6 sm:gap-8 justify-center">
            <a
              href="mailto:adityakirti.dev@gmail.com"
              className="text-[#F1F0EA] hover:text-[#00A6ED] transition-colors"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#00A6ED]" />
            </a>
            <a
              href="https://linkedin.com/in/adityakirti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F1F0EA] hover:text-[#00A6ED] transition-colors"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-[#00A6ED]" />
            </a>
            <a
              href="https://wa.me/919082486599"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F1F0EA] hover:text-[#00A6ED] transition-colors"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-[#00A6ED]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
