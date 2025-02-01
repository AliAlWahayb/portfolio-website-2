// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CardCol(props: any) {


  return (
    <div className={`relative lg:col-span-2 ${props.css}`}>
      <div className={`absolute inset-px bg-card-base ${props.css}`}></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-t-[calc(2rem+1px)]">
        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 max-lg:text-center">{props.title}</p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-500 max-lg:text-center">{props.description}</p>
        </div>
        <div className="flex flex-1 items-center justify-center px-8 max-lg:py-6 sm:px-10 lg:pb-2">
          <img className="w-full max-lg:max-w-xs" src={props.imageUrl} alt={props.imageAlt} />
        </div>
      </div>
      <div className={`pointer-events-none absolute inset-px ring-1 shadow-sm ring-black/5 ${props.css}`}></div>
    </div>
  );
}

export default CardCol;
