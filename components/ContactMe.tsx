"use client";

import { sendEmail } from "@/action/sendEmail";
import useSectionInView from "@/lib/useSectionInView";
import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";

export default function ContactMe() {
  const { ref } = useSectionInView("Contact");
  const { pending } = useFormStatus();
  console.log("pp", pending);

  return (
    <motion.section className="my-36 scroll-mt-28 p-4" id="contact" ref={ref}>
      <h1 className="text-2xl font-semibold text-center">Contact Me</h1>
      <p className="text-sm font-light text-center text-gray-700 mt-3">
        Please contact me directly at{" "}
        <span className="underline font-semibold">
          bikeshgupta50041@gmail.com
        </span>{" "}
        or through this form{" "}
      </p>
      <form
        action={sendEmail}
        // action={async (formData) => {
        //   console.log("on client");

        //   await sendEmail(formData);
        // }}
      >
        <div className="flex flex-col gap-4 mt-5">
          <input
            placeholder="Your email"
            type="email"
            name="senderEmail"
            required
            className="p-2 rounded-md placeholder:text-sm placeholder:font-light bg-white"
          />
          <textarea
            placeholder="Your message"
            name="message"
            className="p-2 rounded-md placeholder:text-sm placeholder:font-light bg-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-gray-900 py-1 px-4 mt-4 text-white rounded-full 
          hover:scale-[1.05] transition
          "
          // disabled={pending}
        >
          {pending ? (
            <div className="h-4 w-4 animate-spin rounded-full border-b  border-white"></div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </motion.section>
  );
}
