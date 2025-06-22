import Navbar from "./components/Navbar";
import "./globals.css";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lora.className}>
      <body className="min-h-screen bg-no-repeat bg-linear-to-br from-orange-200 to-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
