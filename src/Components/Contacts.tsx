type ContactsProps = {
  children: React.ReactNode;
};

export default function Contacts({ children }: ContactsProps) {
  return (
    <section
      id="contact"
      className="items-center mx-auto xl:w-[70%] flex-col p-6 flex"
    >
      <div className="xl:w-[50%]">
        <h3 className="rise mb-8 ml-3 mt-12 animate-fadeInLeft text-xl xl:text-5xl">
          Quero ser cliente
        </h3>
        <p>
          A JC Select Alimentos está pronta para atender você com excelência,
          variedade e compromisso. Preencha o formulário e torne-se nosso
          cliente ou solicite seu orçamento agora mesmo, de forma rápida, segura
          e personalizada.
        </p>
      </div>
      <div className="flex xl:w-[50%] max-lg:flex-col">{children}</div>
    </section>
  );
}
