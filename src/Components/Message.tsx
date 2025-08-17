import Popper from "./Popper";
interface MessageProps {
  children?: React.ReactNode;
  show: boolean;
  onClose?: () => void;
}

export default function Message({ children, show, onClose }: MessageProps) {
  return (
    <Popper
      open={show}
      onClose={onClose}
      className="rounded-md border border-primary bg-bgLight"
    >
      <div className="flex flex-col items-center">
        <p className="text-base">{children}</p>
        <button
          className="mt-7 w-28 rounded-md bg-gradient-to-t from-primary from-50% to-second p-2 text-bgDark duration-200 hover:brightness-110"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </Popper>
  );
}
