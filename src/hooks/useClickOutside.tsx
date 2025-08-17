import { useEffect, useRef, RefObject } from "react";

export function useClickOutside<T extends HTMLElement>(
  handler: (event: MouseEvent) => void,
  elementId?: string
): RefObject<T> {
  const ref = useRef<T | null>(null); // 👈 permite null

  useEffect(() => {
    function listener(event: MouseEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    }

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [handler, elementId]);

  // 👇 ajuste no retorno para casar com a tipagem esperada
  return ref as RefObject<T>;
}
