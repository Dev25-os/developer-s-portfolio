"use server";

import { Resend } from "resend";
import ContactEmailTemplate from "../components/contact-email";
const resend = new Resend(process.env.EMAIL_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("on server");
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (
    !message ||
    typeof message !== "string" ||
    !senderEmail ||
    typeof senderEmail !== "string"
  ) {
    return {
      error: "Invalid Message",
    };
  }
  try {
    await resend.emails.send({
      from: "Contact Form<onboarding@resend.com>",
      to: "rajangupta155223@gmail.com",
      reply_to: senderEmail as string,
      subject: "Hello World",
      text: message as string,
      // react: (
      //   <ContactEmailTemplate
      //     message={message as string}
      //     senderEmail={senderEmail as string}
      //   />
      // ),
    });
  } catch (error) {
    console.log("Message error", error);
  }

  // console.log(formData.get("message"));
  // console.log(formData.get("senderEmail"));
};
