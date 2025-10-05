"use client";
import Logo from "./Logo";
import LogoMobile from "./LogoMobile";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="top-0 z-10 xl:w-[95%] left-0 flex items-center max-lg:fixed max-lg:z-10 max-lg:h-20 max-lg:w-full bg-white/20 backdrop-blur-md max-lg:-mx-auto">
      <div className="top-0 flex h-24 items-center max-lg:w-full 2xl:mx-auto 2xl:w-full">
        <Logo className="ml-20 max-lg:hidden portrait:hidden" />

        {/* Aqui o bloco para centralizar logo mobile e alinhar menu na direita */}
        <div className="flex flex-1 items-center justify-between max-lg:w-full max-lg:px-4">
          <LogoMobile className="xl:hidden" />
          <MobileMenu />
        </div>

        <div className="ml-64 flex w-3/5 justify-between max-2xl:ml-0 max-2xl:w-4/5 max-2xl:justify-evenly max-lg:hidden">
          {/* Menu desktop */}
          <nav>
            <ul className="mt-2 flex text-lg font-bold max-2xl:text-lg lg:text-base ">
              {links.map(({ link, name, key }) => (
                <li
                  className="ml-16 flex items-center opacity-75 hover:opacity-100"
                  key={key}
                >
                  <a href={link}>{name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex">
            {socialMedia.map(({ url, link }) => (
              <a href={link} target="_Blank" key={url}>
                <Image src={url} width={50} height={50} alt={url} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

const links = [
  { name: "Home", link: "/", key: "0" },
  { name: "Quem Somos", link: "/quem-somos", key: "1" },
  { name: "Produtos", link: "/produtos", key: "2" },
  {
    name: "Qualidade e Procedência",
    link: "/qualidade-e-procedencia",
    key: "3",
  },
  { name: "Fale Conosco", link: "https://wa.me/5591984509855", key: 4 },
];

const socialMedia = [
  {
    url: "/ÍconeredesSociaisÍcone Instagram 1PNG.png",
    link: "https://www.instagram.com/preamarpeixesemariscos",
  },
  {
    url: "/ÍconeredesSociaisÍcone Facebook 1SVG.svg",
    link: "https://www.facebook.com/p/Preamarpeixesemariscos-100049722973977/?locale=ms_MY",
  },
];
