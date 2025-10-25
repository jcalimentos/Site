import Image from "next/image";

export default function MVV() {
  return (
    <div className="2xl:w-[70%] mx-auto text-center">
      <div className="relative flex flex-col md:flex-row justify-between items-stretch gap-8">
        {/* Gradiente de fundo */}
        <div
          className="
            absolute 
            md:top-1/2 md:-translate-y-1/2 
            top-0 left-1/2 -translate-x-1/2
            w-24 h-full md:w-full md:h-24 
            bg-gradient-to-b md:bg-gradient-to-r 
            from-primary/50 via-primary/80 to-primary 
            rounded-lg 
            -z-10
          "
        />

        {Itens.map(({ img, title, text }, i) => (
          <div
            key={i}
            className="flex xl:mt-20  flex-col flex-1 px-4 md:px-6 max-w-sm md:max-w-none"
          >
            {/* Círculo com ícone */}
            <div className="w-32 h-32 mx-auto flex items-center justify-center bg-white rounded-full shadow-black/30 shadow-lg">
              <Image
                loading="eager"
                src={img}
                width={70}
                height={70}
                alt={title}
              />
            </div>

            {/* Título */}
            <h3 className="mt-6 text-lg text-secondary md:text-xl font-semibold uppercase">
              {title}
            </h3>

            {/* Texto */}
            <p className="mt-10 text-secondary text-sm md:text-base flex-1 text-justify [text-justify:inter-word] [hyphens:auto] leading-relaxed">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const Itens = [
  {
    img: "/1Ícone MissãoSVG.svg",
    title: "Missão",
    text: "Oferecer alimentos com origem, qualidade e sabor que representem a riqueza do Brasil, especialmente da Amazônia, promovendo saúde, confiança e experiências marcantes para consumidores e empresas, do Norte ao mundo.",
  },
  {
    img: "/1Ícone VisãoSVG.svg",
    title: "Visão",
    text: "Ser referência nacional e internacional em alimentos selecionados, ampliando nosso portfólio com responsabilidade, inovação e respeito à cadeia produtiva, tornando a JC Select Alimentos símbolo de excelência e autenticidade amazônica.",
  },
  {
    img: "/2Ícone ValoresSVG.svg",
    title: "Valores",
    text: "Valorizamos a origem, a ética e o cuidado em cada etapa: da seleção ao atendimento. Acreditamos na força da parceria, na sustentabilidade como caminho e na confiança como base de qualquer negócio duradouro. Somos guiados por sabor, transparência e compromisso com quem nos escolhe.",
  },
];
