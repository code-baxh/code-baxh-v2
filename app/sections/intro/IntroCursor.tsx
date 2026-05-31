type IntroCursorProps = {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  clicking?: boolean;
};

export function IntroCursor({
  x,
  y,
  opacity,
  scale,
  clicking = false,
}: IntroCursorProps) {
  return (
    <div
      className={`intro-cursor pointer-events-none fixed z-[400] transition-all duration-700 ease-out ${
        clicking ? "intro-cursor--click" : ""
      }`}
      style={{
        left: x,
        top: y,
        opacity,
        transform: `scale(${scale})`,
      }}
      aria-hidden
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="intro-cursor-svg"
      >
        <path
          d="M8.2 2.1L8.5 18.2L12.4 14.8L16.1 23.5L19.2 22.1L15.5 13.4L21.2 13.1L8.2 2.1Z"
          fill="#111111"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
