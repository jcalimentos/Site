import Image from "next/image";
export default function ProductsItens() {
  return (
    <div className="xl:w-[60%] mx-auto px-4 py-12 relative">
      <div className="xl:w-[75%] mx-auto">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-10 relative">
          Da Amazônia para Seu Negócio
        </h2>

        {/* Container do grid para limitar a altura das listras */}
        <div
          className="relative flex flex-wrap justify-center gap-8"
          id="gridContainer"
        >
          {Itens.map(({ img, img2, title, text }, i) => {
            const isLastOdd = i === Itens.length - 1 && Itens.length % 2 !== 0;

            return (
              <div
                key={i}
                className={`flex flex-col items-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full sm:w-[45%] ${
                  isLastOdd ? "mx-auto" : ""
                }`}
              >
                <div className="flex gap-4 mb-4">
                  <Image
                    width={100}
                    height={100}
                    src={img}
                    alt={title}
                    className="w-16 h-16"
                  />
                  <Image
                    width={100}
                    height={100}
                    src={img2}
                    alt={title}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {title}
                </h3>
                <p className="text-gray-700 text-center">{text}</p>
              </div>
            );
          })}
        </div>

        {/* SVG lateral esquerda */}
        <div className="absolute max-lg:hidden top-0 left-0 flex items-start h-full ">
          <Image
            src="/Lista Corn (2).svg"
            width={100}
            height={0} // height controlado pelo container
            alt="decorativo lateral esquerda"
            className="h-full pointer-events-none"
          />
        </div>

        {/* SVG lateral direita */}
        <div className="absolute max-lg:hidden top-0 right-0 flex items-start h-full ">
          <Image
            src="/Lista Jagger.svg"
            width={100}
            height={0}
            alt="decorativo lateral direita"
            className="h-full pointer-events-none"
          />
        </div>
        {/* SVG lateral esquerda */}
        <div className="absolute -z-20 xl:hidden top-0 left-0 flex items-start  ">
          <Image
            src="/Lista Corn (2).svg"
            width={170}
            height={200} // height controlado pelo container
            alt="decorativo lateral esquerda"
            className="h-[2940px] pointer-events-none"
          />
        </div>

        {/* SVG lateral direita */}
        <div className="absolute -z-20 xl:hidden top-0 right-0 flex items-start ">
          <Image
            src="/Lista Jagger.svg"
            width={170}
            height={200}
            alt="decorativo lateral direita"
            className="h-[2940px] pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

const Itens = [
  {
    img: "/ProductsIcons/2PeixeSVG.svg",
    img2: "/ProductsIcons/2CaranguejoSVG.svg",
    title: "Pescados e Frutos do Mar",
    text: "Nossos peixes frescos e selecionados são provenientes de águas amazônicas e cultivados com rigor técnico e respeito ambiental. Oferecemos também mariscos, ostras, camarões e caranguejos, ideais para pratos sofisticados ou tradicionais, sempre com frescor e qualidade garantidos. São alimentos ricos em sabor, procedência e valorização regional.",
  },
  {
    img: "/ProductsIcons/2PedaçoCarneSVG.svg",
    img2: "/ProductsIcons/2Coxa de FrangoSVG.svg",
    title: "Carnes Frescas",
    text: "A JC Select oferece cortes selecionados de carne bovina, suína e de aves, sempre com atenção à cadeia de frio, rastreabilidade e sabor. Nossas carnes chegam frescas e no ponto certo para garantir excelência do campo à mesa. Trabalhamos com fornecedores comprometidos com a segurança alimentar e o bem-estar animal.",
  },
  {
    img: "/ProductsIcons/2OvosSVG.svg",
    img2: "/ProductsIcons/2LeiteSVG.svg",
    title: "Ovos e Leite",
    text: "Nossos ovos frescos são entregues com rigor em qualidade e conservação, direto de granjas parceiras confiáveis. Também comercializamos leite cru, ideal para indústrias, laticínios e produção artesanal, sempre respeitando padrões sanitários exigentes. Uma linha essencial para quem valoriza o frescor da origem.",
  },
  {
    img: "/ProductsIcons/2JambuTucupiManiçobaSVG.svg",
    img2: "/ProductsIcons/2Frutas Tropicais - AçaíSVG.svg",
    title: "Derivados Regionais",
    text: "Oferecemos uma seleção autêntica de queijos amazônicos e artesanais, feitos com receitas tradicionais e ingredientes locais. Complementando essa riqueza, incluímos o tucupi, a maniçoba e o jambu, indispensáveis na cozinha nortista e procurados por chefs e amantes da gastronomia brasileira.",
  },
  {
    img: "/ProductsIcons/1Castanha do Pará - Castanah de CajúSVG.svg",
    img2: "/ProductsIcons/1Castanha do Pará - Castanah de CajúSVG.svg",
    title: "Castanhas e Naturais",
    text: "Comercializamos a castanha-do-pará e a castanha-de-caju em sua melhor forma: puras, crocantes e nutritivas. Trabalhamos com extrativismo sustentável, valorizando comunidades da floresta e garantindo um produto com valor social e ambiental agregado.",
  },
  {
    img: "/ProductsIcons/2ChocolatesSVG.svg",
    img2: "/ProductsIcons/2ChocolatesSVG.svg",
    title: "Guloseimas e Especiais da Amazônia",
    text: "Nosso portfólio inclui chocolates amazônicos de alta qualidade, produzidos com cacau nativo e identidade regional marcante. Também oferecemos uma curadoria especial de cachaças paraenses, selecionadas por seu aroma, envelhecimento e conexão com a cultura local.",
  },
  {
    img: "/ProductsIcons/2Grãos e CereaisSVG.svg",
    img2: "/ProductsIcons/2PoteConteúdoSVG.svg",
    title: "Grãos e Cereais Integrais",
    text: "Distribuímos grãos e cereais integrais como arroz, feijão, aveia e outros produtos que compõem uma dieta equilibrada e nutritiva. Selecionados de forma criteriosa, são ideais para consumidores e empresas que prezam por saudabilidade e origem controlada.",
  },
];
