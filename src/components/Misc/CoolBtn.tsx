import { memo } from 'react';

interface CoolBtnProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const CoolBtn = memo(({ text, className, onClick }: CoolBtnProps) => (
  <button
    onClick={onClick} // Ensure that the onClick handler is used
    className={`${className} cursor-pointer flex justify-between px-3 py-2 rounded-xl text-white tracking-wider shadow-xl transition-transform duration-300 hover:scale-105 hover:ring-1 font-mono w-[150px] transform-gpu`}
  >
    {text}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5 animate-bounce rotate-45 md:rotate-90"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
    </svg>
  </button>
));

export default CoolBtn;
