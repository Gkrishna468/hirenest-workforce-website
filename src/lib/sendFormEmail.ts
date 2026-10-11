import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_4z3j0zw";
const TEMPLATE_ADMIN = "template_ab0e5fj";   // to you
const TEMPLATE_USER = "template_buwzsnm";    // auto-reply to user
const PUBLIC_KEY = "IBhzpEIsF2y3C2lOx";

export async function sendFormEmails(params: {
  title: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  // 1) Notify company
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ADMIN,
    {
      title: params.title,
      name: params.name,
      email: params.email,
      subject: params.subject,
      message: params.message,
    },
    PUBLIC_KEY
  );

  // 2) Auto-reply to submitter
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_USER,
    {
      title: params.title,
      name: params.name,
      email: params.email,
    },
    PUBLIC_KEY
  );
}
