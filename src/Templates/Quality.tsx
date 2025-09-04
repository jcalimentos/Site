import ImageTextWithBg from "@/Components/ImageTextWithBg";
import OurQuality from "@/Components/OurQuality";

export default function Quality() {
  return (
    <div>
      <OurQuality />
      <div className="relative w-full p-10 max-lg:px-5 max-lg:pt-5 max-lg:pb-5">
        <div className="absolute inset-0 max-lg:hidden bg-adorns bg-cover bg-center rounded-xl opacity-40 pointer-events-none -z-10"></div>
        <ImageTextWithBg
          src="/22 1.png"
          title="Compromisso com sustentabilidade e rastreabilidade"
          alt="peixes"
          text="Nosso compromisso com a sustentabilidade e a rastreabilidade vai além do discurso, ele está presente em cada elo da cadeia produtiva. A JC Select Alimentos atua com responsabilidade ambiental, priorizando fornecedores que respeitam os ciclos da natureza e comunidades locais. Monitoramos a origem dos produtos, garantindo transparência e segurança para quem consome. Acreditamos que alimentar com propósito é também preservar o futuro."
          bgClass="bg-adorns"
        />
      </div>
      <div className="flex flex-col items-center my-20">
        <h1 className="text-2xl font-bold">
          Depoimentos de parceiros e clientes
        </h1>
        <p>EM BREVE</p>
      </div>
    </div>
  );
}
