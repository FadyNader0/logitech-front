import emailjs from "emailjs-com";
import { toast } from 'react-toastify';


emailjs.init("AjlJF9XJF5qC6h_Qd"); // User ID من EmailJS

export const sendOTPEmail = async (toEmail, otp) => {
  try {
    await emailjs.send("service_uv5x7c7", "template_u4i56v8", {
      to_email: toEmail,
      OTP_CODE: otp
    });
    toast.success("Email sent!");
  } catch (err) {
    toast.error("Failed to send email", err);
  }
};
