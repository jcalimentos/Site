// components/SwipperImage.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

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
        loop
        slidesPerView={1}
        className="absolute inset-0 z-0 h-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover max-lg:scale-200S"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Texto à direita no desktop, centralizado no mobile */}
      <div className="absolute z-20 top-0 left-0 w-full h-full flex items-center px-4 sm:px-8 lg:justify-end">
        <div className="max-w-3xl text-gray-800 max-lg:text-white rounded-md text-justify">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold leading-snug mb-4 max-lg:w-[80%]">
            A JC Select Alimentos se diferencia no mercado por unir origem
            amazônica, qualidade premium e variedade de produtos que atendem
            tanto o consumidor final quanto grandes empresas.
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-lg:w-[80%]">
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
