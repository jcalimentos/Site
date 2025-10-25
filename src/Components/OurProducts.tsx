import ParallaxSection from "@/Components/ParallaxSection";

export default function OurProducts() {
  return (
    <ParallaxSection
      src="/05.png"
      title="O Sabor da Amazônia em Cada Produto"
      overlayOpacity={0.4}
      height="800px"
    >
      <p
        className="
    xl:text-xl
    max-lg:text-base
    my-10
    drop-shadow-md
    text-justify
    [text-justify:inter-word]
    [hyphens:auto]
    leading-relaxed
  "
      >
        A JC Select Alimentos oferece uma seleção de produtos que valorizam a
        Amazônia e a excelência alimentar: pescados e frutos do mar frescos,
        carnes selecionadas, ovos, leite e queijos artesanais, além de
        castanhas, chocolates, cachaças e grãos integrais. Uma curadoria que une
        qualidade, frescor e tradição regional, refletindo responsabilidade
        socioambiental e compromisso com a origem de cada produto.
      </p>
    </ParallaxSection>
  );
}
