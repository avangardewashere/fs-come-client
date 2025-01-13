import Footer from "@/components/Footer";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/ModalProviders";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Store Client",
  description: "front-end store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
