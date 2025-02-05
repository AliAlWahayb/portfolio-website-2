
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CoolBtn(props: any) {
  return (
    <button className={` ${props.className} cursor-pointer flex justify-between  px-3 py-2 rounded-xl text-white tracking-wider shadow-xl hover:bg-background-800 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px] `}>

      {props.text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 animate-bounce rotate-90"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
    </button>
  );
}

export default CoolBtn;
