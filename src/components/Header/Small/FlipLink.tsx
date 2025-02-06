import { useMemo } from "react";


const FlipLink = ({ children, href, onClick }: { children: string; href?: string; onClick?: () => void }) => {
  // Memoize the split children so it's computed only once
  const splitChildren = useMemo(() => children.split(""), [children]);


  return (
    <a
      
      href={href}
      onClick={onClick}
      className="relative block overflow-hidden whitespace-nowrap text-white font-medium text-lg cursor-pointer"
    >
      <div className="flex">
        {splitChildren.map((l, i) => (
          <span
            key={i}
           
            className="inline-block"
          >
            {l}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {splitChildren.map((l, i) => (
          <span
            key={i}
            
            className="inline-block"
          >
            {l}
          </span>
        ))}
      </div>
    </a>
  );
};

export default FlipLink;
