"use client";
import { useState } from "react";
import Popper from "./Popper";
import MenuBurguer from "./MenuBurguer";
import CloseIcon from "./CloseIcon";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setOpen(false);
    }, 200); // tempo da animação fadeOutUp
  };

  return (
    <>
      <button
        className="z-20 absolute right-20 flex cursor-pointer flex-col gap-1 lg:hidden"
        onClick={() => (open ? handleClose() : setOpen(true))}
        id="menu-modal"
        aria-label="navigation menu"
        title="Menu"
      >
        {open && !closing ? <CloseIcon /> : <MenuBurguer />}
      </button>
      <Popper
        className={`fixed top-20 z-30 m-0 w-[90%] mx-auto border-t-2 bg-secondary/80 font-bold uppercase text-white 
          ${open && !closing ? "rise animate-fadeInDown" : ""} 
          ${closing ? "rise animate-fadeOutUp" : ""}`}
        open={open}
        onClose={handleClose}
        id="menu-modal"
      >
        <ul>
          {links.map(({ link, name }, i) => (
            <li key={i} className="w-full border-b border-primary/30 p-4">
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </Popper>
    </>
  );
}

const links = [
  { name: "Quem Somos", link: "/quem-somos", key: "1" },
  { name: "Produtos", link: "/produtos", key: "2" },
  {
    name: "Qualidade e Procedência",
    link: "qualidade-e-procedencia",
    key: "3",
  },
  { name: "Fale Conosco", link: "https://wa.me/91981379177", key: 4 },
];
