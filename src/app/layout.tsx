import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import WhatsAppButton from "@/Components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JC Select Alimentos",
  description:
    "A JC Select Alimentos se diferencia no mercado por unir origem amazônica, qualidade premium e variedade de produtos que atendem tanto o consumidor final quanto grandes empresas. Nascida em Belém do Pará, carrega em sua essência a força da região Norte, oferecendo alimentos selecionados com responsabilidade, frescor e respeito à tradição alimentar brasileira. Essa combinação única torna a marca uma referência em sabor, procedência e diversidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} antialiased  flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
