import ParallaxSection from "@/Components/ParallaxSection";

export default function AboutUs() {
  return (
    <ParallaxSection
      src="/07.png"
      title="JC Select Alimentos"
      overlayOpacity={0.4}
      height="600px"
    >
      <p className="xl:text-2xl my-10 drop-shadow-md max-lg:text-base max-lg:text-justify">
        O projeto foi idealizado por Carlos Cardoso e Jeanne Cidade, um casal
        empreendedor que uniu experiência, sensibilidade e coragem para
        transformar uma pequena operação regional, chamada Preamar, em uma marca
        que hoje avança rumo ao Brasil e ao mundo. O sucesso e o crescimento
        constante tornaram inevitável a evolução da marca, que agora se
        apresenta ao mercado como JC Select Alimentos, uma identidade mais
        ampla, moderna e alinhada com o novo momento da empresa.
      </p>
    </ParallaxSection>
  );
}
