function Card(props: { svg: string | undefined; alt: string | undefined }) {
  return (
    <div className="card bg-background-100 flex justify-center items-center rounded-xl elevation-5 
                    size-16 sm:size-20 p-1 sm:p-2.5 transition-all">
      <img src={props.svg} alt={props.alt} className="w-full h-full object-contain" />
    </div>
  );
}

export default Card;
