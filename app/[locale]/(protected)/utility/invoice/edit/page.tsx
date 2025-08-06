"use client";

import { useRouter } from "@/i18n/navigation";

const Edit = () => {
  const router = useRouter();
  router.push("/utility/invoice/edit/1");
  return <div>Edit</div>;
};

export default Edit;
