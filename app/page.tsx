import React from "react";
import FeatureSuggestionForm from "@/components/FeatureSuggestionForm";
import FeatureTable from "@/components/FeatureTable";
import Navbar from "@/components/Navbar";
import Waitlist from "@/components/Waitlist";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-white flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-64 space-y-8 py-20">
        <div className="space-y-6 text-center max-w-6xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            The perfect app for your needs.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#44008b] to-[#9f45b0]">
              Full transparency
            </span>
            .{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#9f45b0] to-[#e54ed0]">
              No ads
            </span>
            .{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#e54ed0] to-[#ffe4f2]">
              Easy Interface
            </span>
            .
          </h1>
          <p className="text-gray-400 text-xs sm:text-md md:text-lg max-w-2xl mx-auto">
            The islamic app where <strong>YOUR</strong> voice makes a
            difference.
          </p>
        </div>
        <Waitlist />
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="min-h-screen bg-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-64 flex flex-col justify-center py-12 space-y-12 relative"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full sm:w-[700px] md:w-[900px] lg:w-[1100px] aspect-square rounded-full blur-3xl opacity-10 bg-gradient-to-r from-[#e54ed0] to-[#ffe4f2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />
        </div>
        <h1 className="text-center text-xl sm:text-3xl md:text-4xl font-bold">
          Why{" "}
          <span className="font-semibold text-[#e54ed0] underline underline-offset-4">
            MyDeen
          </span>{" "}
          and not other apps?
        </h1>
        <FeatureTable />
      </section>

      {/* Suggestion Form Section */}
      <section
        id="contribute"
        className="h-screen max-h-screen bg-gradient-to-b from-white via-white to-pink-50 flex flex-col justify-center items-center py-16 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-64 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full sm:w-[700px] md:w-[900px] lg:w-[1100px] aspect-square rounded-full blur-3xl opacity-10 bg-gradient-to-r from-[#e54ed0] to-[#ffe4f2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse" />
          <div className="w-[400px] sm:w-[600px] md:w-[800px] aspect-square rounded-full blur-3xl opacity-5 bg-gradient-to-r from-purple-600 to-pink-400 absolute -top-40 -right-40 -z-10" />
          <div className="w-[300px] sm:w-[400px] md:w-[600px] aspect-square rounded-full blur-3xl opacity-5 bg-gradient-to-r from-purple-600 to-pink-400 absolute -bottom-40 -left-40 -z-10" />
        </div>

        <div className="max-w-3xl w-full space-y-8 relative">
          <div className="text-center space-y-4 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              Have a suggestion? Let us know!
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Join the waitlist now to get a chance to have{" "}
              <span className="font-semibold text-[#e54ed0]">YOUR</span> feature
              included in the final app.
            </p>
          </div>
          <FeatureSuggestionForm />

          {/* Decorative elements */}
          <div className="hidden sm:block absolute -bottom-4 left-4 w-24 h-24 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-2xl opacity-20 animate-pulse" />
          <div className="hidden sm:block absolute -top-4 right-4 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-2xl opacity-20 animate-pulse" />
        </div>
      </section>
    </main>
  );
}
