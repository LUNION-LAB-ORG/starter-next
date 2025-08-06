"use client";
import { redirect } from "@/i18n/navigation";
const Backend = () => {
  redirect({ href: "/ecommerce/backend/add-product", locale: "en" });
  return null;
};

export default Backend;
