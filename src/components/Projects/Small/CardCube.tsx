// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CardCube(props: any) {


  return (
    <div className={`relative ${props.css}`}>
      <div className={`absolute inset-px ${props.css} bg-card-base`}></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 max-lg:text-center">
            {props.title}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-500 max-lg:text-center">
            {props.description}
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center px-8 max-lg:py-6 sm:px-10 lg:pb-2">
          <img
            className="w-full max-lg:max-w-xs object-cover"
            src={props.imageUrl}
            alt={props.imageAlt}
          />
        </div>
      </div>
      <div className={`pointer-events-none absolute inset-px ${props.css} ring-1 shadow-sm ring-black/5 `}></div>
    </div>
  );
}

export default CardCube;
