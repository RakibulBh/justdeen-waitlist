"use client";
import React, { FormEvent, useState } from "react";
import * as EmailValidator from "email-validator";
import Button from "./Button";
import { addWaitlistEntry } from "@/app/actions";
import toast from "react-hot-toast";

const Waitlist = () => {
  const [email, setUserEmail] = useState("");

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

    addWaitlistEntry({ email });
    toast.success("Successfully added to the waitlist!");
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
          <Button>Join the waitlist</Button>
        </div>
      </form>
      <p className="text-gray-400">
        Join 22 others waiting for this amazing app to be out!
      </p>
    </div>
  );
};

export default Waitlist;
