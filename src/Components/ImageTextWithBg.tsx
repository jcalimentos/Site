import Image from "next/image";
import React from "react";

type ImageTextWithBgProps = {
  src: string;
  alt: string;
  text: string;
  bgClass?: string;
};

export default function ImageTextWithBg({
  src,
  alt,
  text,
}: ImageTextWithBgProps) {
  return (
    <div className="flex max-lg:flex-col xl:w-[60%] items-center mx-auto text-xl mt-0">
      <Image
        className="xl:w-[50%] my-10 xl:mr-5 max-lg:w-[95%] max-lg:mx-auto max-lg:my-5"
        src={src}
        width={973}
        height={638}
        alt={alt}
      />
      <div className="max-lg:px-3 max-lg:text-justify max-lg:leading-relaxed max-lg:w-full">
        <p className="max-lg:text-base">{text}</p>
      </div>
    </div>
  );
}
