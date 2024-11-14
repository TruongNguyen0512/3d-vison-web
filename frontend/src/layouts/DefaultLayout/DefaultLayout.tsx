import Contact from "@/components/layouts/Contact";
import CopyRight from "@/components/layouts/Copyright";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
      <Contact></Contact>
      <Footer />
      <CopyRight />
    </div>
  );
}
