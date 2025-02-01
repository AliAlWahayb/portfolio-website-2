// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CardRow(props: any) {


  return (
    <div className={`relative lg:row-span-2 ${props.css}`}>
      <div className={`absolute inset-px bg-card-base ${props.css} `}></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 max-lg:text-center">{props.title}</p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-500 max-lg:text-center">{props.description}</p>
        </div>
        <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
          <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-xl bg-gray-900 shadow-2xl">
            <img className="size-full object-cover object-top" src={props.imageUrl} alt={props.imageAlt} />
          </div>
        </div>
      </div>
      <div className={`pointer-events-none absolute inset-px ring-1 shadow-sm ring-black/5 ${props.css}`}></div>
    </div>
  );
}

export default CardRow;
