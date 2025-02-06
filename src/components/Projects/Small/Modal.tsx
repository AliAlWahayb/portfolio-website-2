import { memo, useEffect, useMemo } from "react";
import { IoCloseSharp } from "react-icons/io5";
import CoolBtn from "../../Misc/CoolBtn";

interface ModalProps {
  lgTitle: string;
  lgDescription: string;
  lgImageUrl: string | string[];
  lgImageAlt?: string | string[];
  LearnMore?: string;
  onClose: () => void;
}

const Modal = memo(function Modal(props: ModalProps) {
  // Handle body scroll locking more safely
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Memoize image grid rendering if images are array
  const imageGrid = useMemo(() => {
    if (Array.isArray(props.lgImageUrl)) {
      return props.lgImageUrl.map((image, index) => (
        <div 
          key={`img-${image}-${index}`}
          className="relative group overflow-hidden"
        >
          <img
            src={image}
            alt={props.lgImageAlt?.[index] || `Project image ${index + 1}`}
            width={600}
            height={400}
            loading="lazy"
            className="w-full h-auto object-contain md:aspect-square"
          />
        </div>
      ));
    }
    return null;
  }, [props.lgImageUrl, props.lgImageAlt]);

  // Single image render if not array
  const mainImage = useMemo(() => {
    if (!Array.isArray(props.lgImageUrl)) {
      return (
        <div className="max-w-4xl mx-auto rounded-2xl p-4 md:p-6">
          <img
            src={props.lgImageUrl}
            alt={props.lgImageAlt?.toString() || "Project main image"}
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      );
    }
    return null;
  }, [props.lgImageUrl, props.lgImageAlt]);

  // Memoize learn more button
  const learnMoreButton = useMemo(() => {
    if (props.LearnMore) {
      return (
        <a
          href={props.LearnMore}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center my-5 cursor-pointer"
        >
          <CoolBtn text="Learn More" className="scale-150" />
        </a>
      );
    }
    return null;
  }, [props.LearnMore]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 mt-5 md:mt-0">
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] shadow-lg max-w-3xl md:max-w-full w-full bg-card-base">
        <div className="overflow-y-auto flex-1 p-6 sm:p-10 scrollbar-hide">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-medium tracking-tight text-text-base">
              {props.lgTitle}
            </h1>
            <button
              aria-label="Close modal"
              className="z-50 p-2 bg-background-base rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition-colors duration-200"
              onClick={props.onClose}
            >
              <IoCloseSharp size={24} />
            </button>
          </div>
          
          <p className="mt-2 text-xl text-secondary-text-base">
            {props.lgDescription}
          </p>

          <div className="w-full px-4 md:px-6 lg:px-8 mt-6 space-y-6">
            {Array.isArray(props.lgImageUrl) ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {imageGrid}
              </div>
            ) : (
              mainImage
            )}
          </div>
          
          {learnMoreButton}
        </div>
      </div>
    </div>
  );
});

export default Modal;
