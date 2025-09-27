import ParallaxSection from "@/Components/ParallaxSection";

export default function AmazonOrigin() {
  return (
    <ParallaxSection
      src="/06.png"
      title="Origem Amazônica"
      overlayOpacity={0.4}
      height="1100px"
    >
      <p className="xl:text-2xl font-semibold my-10 text-shadow-2xs drop-shadow-md max-lg:text-base max-lg:text-justify">
        A JC Select Alimentos se diferencia no mercado por unir origem
        amazônica, qualidade premium e variedade de produtos que atendem tanto o
        consumidor final quanto grandes empresas. Nascida em Belém do Pará,
        carrega em sua essência a força da região Norte, oferecendo alimentos
        selecionados com responsabilidade, frescor e respeito à tradição
        alimentar brasileira. Essa combinação única torna a marca uma referência
        em sabor, procedência e diversidade.
      </p>
    </ParallaxSection>
  );
}
