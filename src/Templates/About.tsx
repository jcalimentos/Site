import AboutUs from "@/Components/AboutUs";
import BuildingSVG from "@/Components/BuildingSVG";
import TextSection from "@/Components/TextSection";
import ImageTextMobile from "@/Components/ImageTextMobile";
import ImageTextWithBg from "@/Components/ImageTextWithBg";
import MVV from "@/Components/MVV";
import CommitmentAmazon from "@/Components/CommitmentAmazon";
import ParallaxSection from "@/Components/ParallaxSection";

export default function About() {
  return (
    <div className="text-black/80">
      <div className="max-lg:hidden">
        <AboutUs />
      </div>
      <div className="lg:hidden mt-15">
        <ParallaxSection
          src="/07.png"
          title="JC Select Alimentos"
          overlayOpacity={0.4}
          height="600px"
        >
          <p className="xl:text-xl my-10 drop-shadow-md max-lg:text-base max-lg:text-justify">
            A JC Select Alimentos nasceu em Belém do Pará, no coração da
            Amazônia, trazendo consigo o sabor da tradição, a força da terra e o
            respeito à origem dos alimentos. Fundada em 2020, em meio à
            pandemia, um período que exigiu mais cuidado, responsabilidade e
            visão, a empresa surgiu como uma resposta comprometida à necessidade
            de oferecer alimentos de qualidade, com procedência e confiança.
          </p>
        </ParallaxSection>
      </div>
      <TextSection
        title="História da empresa"
        text="O projeto foi idealizado por Carlos Cardoso e Jeanne Cidade, um casal empreendedor que uniu experiência, sensibilidade e coragem para transformar uma pequena operação regional, chamada Preamar, em uma marca que hoje avança rumo ao Brasil e ao mundo. O sucesso e o crescimento constante tornaram inevitável a evolução da marca, que agora se apresenta ao mercado como JC Select Alimentos, uma identidade mais ampla, moderna e alinhada com o novo momento da empresa.
"
        svg={BuildingSVG}
      />
      <div className="relative w-full p-10 max-lg:px-5 max-lg:pt-5 max-lg:pb-5">
        {/* <ImageTextWithBg
          src="/03 1.png"
          alt="peixes"
          text="Hoje, a JC Select Alimentos se destaca por oferecer um portfólio diversificado que vai de frutos do mar e pescados amazônicos a carnes, frutas e muito mais, atendendo tanto consumidores finais quanto empresas em diferentes regiões do país e preparada para conquistar mercados globais. Mais do que vender alimentos, levamos sabor, origem e confiança."
          bgClass="bg-adorns"
        /> */}
        <MVV />
      </div>
      <div className="max-lg:hidden -mt-10">
        <CommitmentAmazon />
      </div>
      <ImageTextMobile
        src="/04.png"
        alt="amazon origin"
        text="Na JC Select Alimentos, nosso compromisso com a Amazônia vai além da
        origem: ele está presente em cada escolha, cada fornecedor e cada
        produto que levamos ao mercado. Valorizamos práticas que respeitam o
        território, os saberes tradicionais e a biodiversidade da região,
        garantindo alimentos que carregam não apenas qualidade nutricional, mas
        também responsabilidade social e ambiental. Nossa atuação busca
        equilibrar excelência alimentar com consciência, preservando o que vem
        da floresta e dos rios com o mesmo cuidado com que alimentamos pessoas e
        relações."
      />
    </div>
  );
}
