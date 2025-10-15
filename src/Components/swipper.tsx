// components/SwipperImage.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

interface SwipperImageProps {
  images: string[];
}

const SwipperImage: React.FC<SwipperImageProps> = ({ images }) => {
  return (
    <div className="relative w-full h-[600px] sm:h-[750px] lg:h-[1000px] overflow-hidden">
      {/* Swiper de fundo */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }} // ✅ transição limpa sem ghost
        loop
        slidesPerView={1}
        className="absolute inset-0 z-0 h-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay escuro para destacar o texto */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Texto sobreposto */}
      <div className="absolute z-20 top-0 left-0 w-full h-full flex items-center px-4 sm:px-8 lg:justify-end">
        <div
          className="
            max-w-3xl rounded-md text-justify
            text-white lg:text-gray-800
          "
        >
          <h1
            className="
              text-lg sm:text-xl md:text-3xl lg:text-4xl 
              font-bold leading-snug mb-4 text-white 
            "
          >
            A JC Select Alimentos se diferencia no mercado por unir origem
            amazônica, qualidade premium e variedade de produtos que atendem
            tanto o consumidor final quanto grandes empresas.
          </h1>
          <p
            className="
              text-sm sm:text-base md:text-lg lg:text-xl 
              text-white font-semibold
            "
          >
            Nascida em Belém do Pará, carrega em sua essência a força da região
            Norte, oferecendo alimentos selecionados com responsabilidade,
            frescor e respeito à tradição alimentar brasileira. Essa combinação
            única torna a marca uma referência em sabor, procedência e
            diversidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwipperImage;
