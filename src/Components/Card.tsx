import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  flat?: boolean;
  trimmed?: boolean;
};

export default function Card({ children, className, flat = false, style, trimmed = false }: Props) {
  return (
    <div
      style={style}
      className={clsx(
        className,
        ' text-sm shadow-md shadow-gray-300',
        flat || 'rounded-lg',
        trimmed || 'p-5',
      )}
    >
      {children}
    </div>
  );
}
