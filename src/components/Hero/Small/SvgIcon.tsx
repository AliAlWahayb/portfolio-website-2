// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SvgIcon(props: any) {
  return (
    <div className="group relative">
      <button
        onClick={() =>
          props.link
            ? window.open(props.link, "_blank")
            : (window.location.href = "mailto:" + props.email)
        }
        className="p-2 hover:scale-125 duration-200 hover:text-primary-base"
      >
        {props.icon}
      </button>
      <span className="absolute -top-3 left-[50%] -translate-x-[50%] opacity-0 group-hover:opacity-100 rounded-lg border border-gray-300 bg-white p-2 text-sm font-bold shadow-md group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
        {props.name}
      </span>
    </div>
  );
}

export default SvgIcon;
