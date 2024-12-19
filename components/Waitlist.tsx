"use client";
import React, { FormEvent, useState } from "react";
import Button from "./button";

const Waitlist = () => {
  const [email, setUserEmail] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="space-y-4 text-center">
      <form onSubmit={(event) => onSubmit(event)}>
        <div className="flex gap-2">
          <input
            value={email}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Your email address"
            className="border border-gray-500 w-96 p-4 rounded-lg focus:outline-none  "
          />
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#9f45b0] to-[#e54ed0] text-white">
            Join the waitlist
          </button>
        </div>
      </form>
      <p className="text-gray-400">
        Join 22 others waiting for this amazing app to be out!
      </p>
    </div>
  );
};

export default Waitlist;
