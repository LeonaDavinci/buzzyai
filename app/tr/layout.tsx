import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main lang="tr">{children}</main>
      <Footer />
    </>
  );
}
