interface BiProps {
  en: string;
  zh: string;
  className?: string;
}

export default function Bi({ en, zh, className = "" }: BiProps) {
  return (
    <span className={className}>
      {en}｜{zh}
    </span>
  );
}
