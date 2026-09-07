import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MagneticButtons } from "@/components/ui/magnetic-buttons";

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <MagneticButtons />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
