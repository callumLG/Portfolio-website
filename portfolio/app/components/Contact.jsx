"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // For now just simulate sending
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form Submitted:", formData);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto bg-[#111111] text-white py-24 px-6"
    >
      <h1 className="text-5xl font-bold text-center mb-12">Contact</h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <p className="text-gray-300 mb-6">
            I'm currently open to new opportunities and collaborations. Whether
            you have a project in mind or just want to connect, feel free to
            reach out!
          </p>

          <a
            href="mailto:callumlevigovender@gmail.com"
            className="text-[#A8C5E8] hover:underline"
          >
            callumlevigovender@gmail.com
          </a>
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#333333] focus:border-[#A8C5E8] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#333333] focus:border-[#A8C5E8] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#333333] focus:border-[#A8C5E8] focus:outline-none resize-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 rounded-lg bg-[#A8C5E8] text-[#0B0B0B] hover:bg-[#8FB3D9] transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
