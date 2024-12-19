import Navbar from "@/components/Navbar";
import Waitlist from "@/components/Waitlist";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen bg-white flex flex-col justify-center items-center px-64 space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-6xl font-bold mb-8">
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
          <p className="text-gray-400 text-md">
            Wouldn't you love a place to see your daily prayer times but also be
            able to ask and answer islamic related questions from your brothers
            and sisters?
          </p>
        </div>
        <Waitlist />
      </section>
    </main>
  );
}
