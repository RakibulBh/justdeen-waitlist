"use client";
import { useState } from "react";
import Button from "./Button";

const FeatureSuggestionForm = () => {
  const [email, setEmail] = useState<string>("");
  const [feature, setFeature] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Email is required!");
      return;
    }
    console.log("Form submitted:", { email, feature });
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-md border border-pink-100/50 p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email <span className="text-pink-500">*</span>
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 transition-all duration-200 bg-white/50 backdrop-blur-sm"
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="feature"
            className="block text-sm font-medium text-gray-700"
          >
            Feature request (Optional)
          </label>
          <textarea
            value={feature}
            onChange={(e) => setFeature(e.target.value)}
            id="feature"
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
            placeholder="Tell us what features you'd like to see..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#44008b] via-[#9f45b0] to-[#e54ed0] text-white font-medium shadow-lg shadow-pink-500/20 hover:shadow-xl hover:shadow-pink-500/30 transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Join Waitlist
        </button>
      </form>
    </div>
  );
};

export default FeatureSuggestionForm;
