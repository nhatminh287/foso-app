interface QuotationMarkProps {
  color?: string;
  size?: number;
  className?: string;
}

export default function QuotationMark({
  color = "#27AE60", 
  size = 40,
  className = "",
}: QuotationMarkProps) {
  return (
    <div className={`inline-block ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 12C7.5 12 5 14.5 5 17.5C5 20.5 7.5 23 10.5 23C16.5 23 13.5 32 5 32C8.5 32 19 32 19 17.5C19 14.5 16.5 12 13.5 12H10.5Z"
          fill={color}
        />
        <path
          d="M26.5 12C23.5 12 21 14.5 21 17.5C21 20.5 23.5 23 26.5 23C32.5 23 29.5 32 21 32C24.5 32 35 32 35 17.5C35 14.5 32.5 12 29.5 12H26.5Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
