"use client";
import Image from "next/image";

const phoneNumber = 91981379177;

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/5591984509855`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hover: fixed bottom-5 right-5 z-40 flex flex-col items-center duration-200 hover:scale-115 max-lg:bottom-5 max-lg:right-3"
      aria-label="WhatsApp button"
      title="WhatsApp"
    >
      <Image
        src="/Contato1WhatsappPNG.png"
        alt="wpp-icon"
        width={100}
        height={100}
      />
    </a>
  );
}
