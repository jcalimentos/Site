import Image from "next/image";
import LogoWhite from "./Logo-White";
export default function Footer() {
  return (
    <section
      id="contact"
      className="flex z-10 flex-col text-white bg-secondary w-full items-center xl:justify-center xl:py-5"
    >
      <div className="flex xl:w-[75%] justify-around items-center max-lg:flex-col max-lg:text-center">
        <LogoWhite />
        <div className="flex max-lg:flex-col xl:justify-around max-lg:items-center w-full max-lg:ml-10">
          <ul className="flex flex-col max-lg:items-start max-lg:text-left text-lg font-bold max-2xl:text-lg xl:mt-5">
            {links.map(({ name, link, key, wpp, title }) => (
              <li
                className="flex items-center opacity-75 hover:opacity-100"
                key={key}
              >
                <a href={link}>{name}</a>
                {key == 4 && (
                  <a href={wpp} target="_Blank" className="flex items-center">
                    <p>{title}</p>
                    <Image
                      src="/Contato1WhatsappPNG.png"
                      width={50}
                      height={50}
                      alt="wpp-icone "
                    />
                  </a>
                )}
              </li>
            ))}
          </ul>
          <ul className=" max-lg:text-left text-lg font-bold max-2xl:text-lg">
            <h2 className="m-5 text-xl font-bold">Contatos</h2>
            {Contatos.map(({ title, text, icon, key }) => (
              <li className="flex items-center max-lg:-ml-10 mt-3" key={key}>
                <Image src={icon} alt={icon} width={50} height={50} />
                <h3 className="m-1 font-bold">{title}</h3> <p>{text}</p>
              </li>
            ))}
          </ul>
          <ul className=" max-lg:text-left text-lg font-bold max-2xl:text-lg">
            <h2 className="m-5 text-xl font-bold">Redes Sociais</h2>
            {socialMedia.map(({ url, link, network }) => (
              <li
                className="opacity-75 items-center max-lg:-ml-10 mt-3 hover:opacity-100"
                key={url}
              >
                <a className="flex items-center font-bold" href={link}>
                  <Image src={url} width={50} height={50} alt={url} /> {network}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
const links = [
  { name: "Quem Somos", link: "/quem-somos", key: "1" },
  { name: "Produtos", link: "/produtos", key: "2" },
  { name: "Qualidade e Procedência", link: "fa", key: "3" },
  { title: "Fale Conosco", wpp: "https://wa.me/91981379177", key: 4 },
];
const Contatos = [
  {
    title: "Endereço:",
    text: "Em breve...",
    key: "1",
    icon: "/2LocalizaçãoPNG.png",
  },
  { title: "Email:", text: "Em breve...", key: "2", icon: "/1NotesPNG.png" },
];
const socialMedia = [
  {
    url: "/ÍconeredesSociaisÍcone Instagram 1PNG.png",
    link: "https://www.instagram.com/preamarpeixesemariscos",
    network: "Instagram",
  },
  {
    url: "/ÍconeredesSociaisÍcone Facebook 1PNG (1).png",
    link: "https://www.facebook.com/p/Preamarpeixesemariscos-100049722973977/?locale=ms_MY",
    network: "Facebook",
  },
];
