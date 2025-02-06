import React from "react";

type CardProps = {
  svg: string | undefined;
  alt: string | undefined;
};

const Card: React.FC<CardProps> = React.memo(({ svg, alt }) => {
  return (
    <div className="card bg-background-100 flex justify-center items-center rounded-xl elevation-5 
                    size-16 sm:size-20 p-1 sm:p-2.5 transition-all">
      <img src={svg} alt={alt} className="w-full h-full object-contain" />
    </div>
  );
});

export default Card;
