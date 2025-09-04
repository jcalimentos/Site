import ParallaxSection from "@/Components/ParallaxSection";

export default function OurQuality() {
  return (
    <ParallaxSection
      src="/09.png"
      title="Qualidade e Procedência"
      overlayOpacity={0.4}
      height="600px"
    >
      <p className="xl:text-xl my-10 drop-shadow-md max-lg:text-base max-lg:text-justify">
        Na JC Select Alimentos, cada etapa, da origem ao destino, é guiada por
        rigor e excelência. Trabalhamos com fornecedores certificados,
        respeitando normas sanitárias, ambientais e regulatórias, o que assegura
        rastreabilidade e confiança em cada produto. Nossos processos de seleção
        seguem critérios técnicos e sensoriais, garantindo apenas alimentos de
        alta qualidade. Além disso, investimos em uma logística eficiente e em
        sistemas de conservação que mantêm o frescor e a integridade dos itens
        até o momento da entrega.
      </p>
    </ParallaxSection>
  );
}
