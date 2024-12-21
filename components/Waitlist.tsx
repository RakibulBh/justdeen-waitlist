"use client";
import React, { FormEvent, useEffect, useState } from "react";
import * as EmailValidator from "email-validator";
import Button from "./Button";
import { addWaitlistEntry, getWaitlistCount } from "@/app/actions";
import toast from "react-hot-toast";

const Waitlist = () => {
  const [email, setUserEmail] = useState("");
  const [waitlistCount, setWaitlistCount] = useState<number>();
  const [pending, isPending] = useState(false);

  // Fetch amount of peopel signed up
  useEffect(() => {
    const fetchCount = async () => {
      const count = await getWaitlistCount();
      setWaitlistCount(count);
    };
    fetchCount();
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    isPending(true);
    e.preventDefault();

    if (!email) {
      toast.error("Server: email cannot be empty");
      isPending(false);
      return;
    }

    const isValidEmail = EmailValidator.validate(email);

    if (!isValidEmail) {
      toast.error("Server: email is not valid");
      isPending(false);

      return;
    }

    addWaitlistEntry({ email });
    setUserEmail("");
    isPending(false);
    toast.success("Successfully added to the waitlist!");
  };

  return (
    <div className="space-y-4 text-center">
      <form onSubmit={(event) => onSubmit(event)}>
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Email"
            className="border border-[#9f45b0] w-64 md:w-96 px-4 py-1 sm:p-4 rounded-lg focus:outline-none  "
          />
          <Button disabled={pending}>
            {pending ? "Joining" : "Join the waitlist"}
          </Button>
        </div>
      </form>
      <p className="text-gray-400">
        Join {waitlistCount && waitlistCount > 5 ? waitlistCount : ""} others
        waiting for this amazing app to be out!
      </p>
    </div>
  );
};

export default Waitlist;
