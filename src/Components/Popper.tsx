import { useEffect, useState } from "react";

export interface PopperProps {
  open: boolean;
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
  id?: string;
}

export default function Popper({
  open,
  onClose,
  children,
  className = "",
  id,
}: PopperProps) {
  const [visible, setVisible] = useState(open);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
      setClosing(false);
    } else if (visible) {
      setClosing(true);
      // fecha depois do tempo da animação
      const timer = setTimeout(() => {
        setVisible(false);
        setClosing(false);
      }, 200); // ajuste conforme duração da animação

      return () => clearTimeout(timer);
    }
  }, [open, visible]);

  if (!visible) return null;

  return (
    <div
      id={id}
      className={`${className} ${
        closing ? "animate-fadeOutUp" : "animate-fadeInDown"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) onClose();
      }}
      style={{ position: "fixed" }} // mantém fixed conforme seu uso
    >
      {children}
    </div>
  );
}
