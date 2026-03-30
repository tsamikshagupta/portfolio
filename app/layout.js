import { Cormorant_Garamond, DM_Mono, Manrope } from "next/font/google";
import SmoothScrollProvider from "../components/providers/SmoothScrollProvider";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"]
});

const mono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata = {
  title: "Samiksha Terala | ML Engineer & Systems Architect",
  description:
    "Production-ready portfolio for Samiksha Terala, focused on NLP systems, MoE architectures, and scalable ML engineering.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${display.variable} ${mono.variable} ${body.variable}`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
