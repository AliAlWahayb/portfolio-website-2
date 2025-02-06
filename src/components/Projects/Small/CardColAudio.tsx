import { memo, useState, useCallback } from "react";
import CoolBtn from "../../Misc/CoolBtn";
import Modal from "./Modal";

interface CardColProps {
  title: string;
  description: string;
  audioUrl: string;
  css?: string;
  lgTitle: string;
  lgDescription: string;
  lgImageUrl: string | string[];
  lgImageAlt?: string | string[];
  LearnMore?: string;
}

const CardCol = memo(function CardCol(props: CardColProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <div className="relative lg:col-span-2 h-full">
      <div
        className="relative lg:col-span-2 h-full"
      >
        <div className={`absolute inset-px bg-card-base rounded-xl ${props.css}`} />

        {!isExpanded ? (
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-t-[calc(2rem+1px)]">
            <div className="px-8 pt-5 pb-3 sm:px-10 sm:pt-5">
              <h3 className="mt-2 text-lg font-medium tracking-tight text-text-base max-lg:text-center">
                {props.title}
              </h3>
              <p className="mt-2 text-sm/6 text-secondary-text-base max-lg:text-center">
                {props.description}
              </p>
            </div>

            <div className="flex flex-1 items-center justify-center px-8 max-lg:py-6 sm:px-10 lg:pb-2">
              <audio className="w-full max-lg:max-w-xs" controls preload="none">
                <source src={props.audioUrl} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <div className="w-fit self-center my-4">
              <CoolBtn
                text="Learn More"
                className="bg-card-900"
                onClick={toggleExpansion}
              />
            </div>
          </div>
        ) : (
          // Only render the Modal when expanded
          <Modal
            key="modal"
            onClose={toggleExpansion}
            lgTitle={props.lgTitle}
            lgDescription={props.lgDescription}
            lgImageUrl={props.lgImageUrl}
            lgImageAlt={props.lgImageAlt}
            LearnMore={props.LearnMore}
          />
        )}
      </div>
    </div>
  );
});

export default CardCol;
