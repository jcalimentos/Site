import ParallaxSection from "@/Components/ParallaxSection";

export default function AboutUs() {
  return (
    <ParallaxSection
      src="/07.png"
      title="JC Select Alimentos"
      overlayOpacity={0.4}
      height="1100px"
    >
      <p className="xl:text-2xl my-10 drop-shadow-md max-lg:text-base max-lg:text-justify">
        A JC Select Alimentos nasceu em Belém do Pará, no coração da Amazônia,
        trazendo consigo o sabor da tradição, a força da terra e o respeito à
        origem dos alimentos. Fundada em 2020, em meio à pandemia, um período
        que exigiu mais cuidado, responsabilidade e visão, a empresa surgiu como
        uma resposta comprometida à necessidade de oferecer alimentos de
        qualidade, com procedência e confiança.
      </p>
    </ParallaxSection>
  );
}
