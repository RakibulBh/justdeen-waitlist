"use client";
import { FormEvent, useState } from "react";
import { addWaitlistEntry } from "@/app/actions";
import toast from "react-hot-toast";
import * as EmailValidator from "email-validator";

const FeatureSuggestionForm = () => {
  const [email, setEmail] = useState<string>("");
  const [feature, setFeature] = useState<string>("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error("Server: email cannot be empty");
      return;
    }

    const isValidEmail = EmailValidator.validate(email);

    if (!isValidEmail) {
      toast.error("Server: email is not valid");
      return;
    }

    addWaitlistEntry({ email, feature: feature ? feature : "" });
    toast.success("Successfully added to the waitlist!");
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-md border border-pink-100/50 p-8">
      <form onSubmit={onSubmit} className="space-y-6">
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
