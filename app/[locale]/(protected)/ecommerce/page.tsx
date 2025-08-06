"use client";
import { redirect } from "@/i18n/navigation";
const Backend = () => {
  redirect({ href: "/ecommerce/frontend", locale: "en" });
  return null;
};

export default Backend;
