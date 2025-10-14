import ParallaxSection from "@/Components/ParallaxSection";

export default function CommitmentAmazon() {
  return (
    <ParallaxSection
      src="/04.png"
      title="Compromisso com a Amazônia e com a qualidade alimentar
"
      overlayOpacity={0.4}
      height="1000px"
    >
      <p className="xl:text-2xl my-10 drop-shadow-md max-lg:text-base max-lg:text-justify">
        Na JC Select Alimentos, nosso compromisso com a Amazônia vai além da
        origem: ele está presente em cada escolha, cada fornecedor e cada
        produto que levamos ao mercado. Valorizamos práticas que respeitam o
        território, os saberes tradicionais e a biodiversidade da região,
        garantindo alimentos que carregam não apenas qualidade nutricional, mas
        também responsabilidade social e ambiental. Nossa atuação busca
        equilibrar excelência alimentar com consciência, preservando o que vem
        da floresta e dos rios com o mesmo cuidado com que alimentamos pessoas e
        relações.
      </p>
    </ParallaxSection>
  );
}
