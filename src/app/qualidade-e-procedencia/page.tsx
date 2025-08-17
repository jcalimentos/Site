import Quality from "@/Templates/Quality";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qualidade e Procedência",
  description:
    "trazendo consigo o sabor da tradição, a força da terra e o respeito à origem dos alimentos.",
  icons: [{ url: "/favicon.ico", sizes: "any" }],
  robots: "index, follow",
};

export default function Index() {
  return <Quality />;
}
