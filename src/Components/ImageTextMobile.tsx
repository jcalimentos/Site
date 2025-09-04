import Image from "next/image";
import React from "react";

type ImageTextMobileProps = {
  src: string;
  alt: string;
  text: string;
};

export default function ImageTextMobile({
  src,
  alt,
  text,
}: ImageTextMobileProps) {
  return (
    <div className="my-5 xl:hidden">
      <div className="relative my-5 w-screen h-[300px] sm:h-[400px] md:h-[600px]">
        <Image
          src={src}
          loading="eager"
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="max-lg:text-base max-lg:text-justify max-lg:px-5 w-full mx-auto">
        {text}
      </p>
    </div>
  );
}
