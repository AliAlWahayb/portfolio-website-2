import React from "react";

function Card(props: { svg: string | undefined; alt: string | undefined }) {
  return (
    <div
      className="card bg-background-100 flex justify-center items-center rounded-xl elevation-5 p-2.5  size-20"
      data-tooltip-id="SkillTooltip"
      data-tooltip-content={props.alt}
    >
      <img src={props.svg} alt={props.alt} />
    </div>
  );
}

export default Card;
