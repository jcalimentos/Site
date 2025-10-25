import React from "react";

type TextSectionProps = {
  title: string;
  text: string;
  svg?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function TextSection({
  title,
  text,
  svg: SvgComponent,
}: TextSectionProps) {
  return (
    <div className="flex justify-center max-lg:flex-col xl:mt-10 max-lg:mt-20 xl:w-[70%] items-center mx-auto text-xl max-lg:px-5">
      {SvgComponent && <SvgComponent className="max-lg:hidden" />}
      <div className="xl:w-[75%] max-lg:w-full max-lg:mx-auto max-lg:px-3">
        <h1 className="font-bold xl:text-2xl max-lg:text-lg my-5">{title}</h1>
        <p className="max-lg:text-base xl:text-base 2xl:text-lg leading-relaxed text-justify [text-justify:inter-word]">
          {text}
        </p>
      </div>
    </div>
  );
}
