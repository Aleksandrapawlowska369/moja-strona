import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StatusBar } from "@/components/StatusBar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StatusBar />
      <Navbar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}
