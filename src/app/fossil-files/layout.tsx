import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "./_components/layout/header";
import { AppSidebar } from "./_components/layout/sidebar-v3";

export default function FossilFilesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <SidebarProvider>
        <AppSidebar />
        <main>{children}</main>
      </SidebarProvider>
    </>
  );
}
