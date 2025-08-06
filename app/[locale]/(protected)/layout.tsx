import LayoutProvider from "@/providers/layout.provider";
import LayoutContentProvider from "@/providers/content.provider";
import BackOfficeSidebar from "@/components/partials/sidebar";
import BackOfficeFooter from "@/components/partials/footer";
import ThemeCustomize from "@/components/partials/customizer";
import BackOfficeHeader from "@/components/partials/header";
import { auth } from "@/lib/auth";
import { redirect } from "@/i18n/navigation";

const LayoutProtected = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const session = await auth();
  const { locale } = await params;

  if (!session) {
    redirect({ href: "/", locale: locale });
  }
  return (
    <LayoutProvider>
      {process.env.NODE_ENV === "development" && <ThemeCustomize />}
      <BackOfficeHeader />
      <BackOfficeSidebar />
      <LayoutContentProvider>{children}</LayoutContentProvider>
      <BackOfficeFooter />
    </LayoutProvider>
  );
};

export default LayoutProtected;
