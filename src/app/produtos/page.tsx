import Products from "@/Templates/Products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossos Produtos",
  description:
    "trazendo consigo o sabor da tradição, a força da terra e o respeito à origem dos alimentos.",
  icons: [{ url: "/favicon.ico", sizes: "any" }],
  robots: "index, follow",
};

export default function Index() {
  return <Products />;
}
