import { memo, useCallback, useState } from "react";
import { motion } from "framer-motion";
import CoolBtn from "../../Misc/CoolBtn";
import Modal from "./Modal";

interface CardCubeProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  css?: string;
  lgTitle: string;
  lgDescription: string;
  lgImageUrl: string | string[];
  lgImageAlt?: string | string[];
  LearnMore?: string;
}

const CardCube = memo(function CardCube(props: CardCubeProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <div className="relative h-full">
      <motion.div
        layout
        transition={{ duration: 0.3, type: "spring" }}
        className={`relative h-full ${isExpanded ? "z-50" : ""}`}
      >
        <div className={`absolute inset-px bg-card-base rounded-xl ${props.css}`} />

        {!isExpanded ? (
          <div className="relative flex h-full flex-col overflow-hidden">
            <div className="px-8 pt-5 sm:px-10 mb-1 sm:pt-5">
              <h3 className="mt-2 text-lg font-medium tracking-tight text-text-base">
                {props.title}
              </h3>
              <p className="mt-2 max-w-lg text-sm/6 text-secondary-text-base">
                {props.description}
              </p>
            </div>
            
            <div className="flex flex-1 items-center justify-center px-8 max-lg:py-6 sm:px-10 lg:pb-2">
              <img // Use Next.js Image if available
                src={props.imageUrl}
                alt={props.imageAlt || props.title}
                width={400}
                height={300}
                loading="lazy"
                className="w-full object-cover"
              />
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
          <Modal
            key="modal" // Add key for proper reconciliation
            onClose={toggleExpansion}
            lgTitle={props.lgTitle}
            lgDescription={props.lgDescription}
            lgImageUrl={props.lgImageUrl}
            lgImageAlt={props.lgImageAlt}
            LearnMore={props.LearnMore}
          />
        )}
      </motion.div>
    </div>
  );
});

export default CardCube;