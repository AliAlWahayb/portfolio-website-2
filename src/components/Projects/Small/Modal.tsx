/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import CoolBtn from "../../Misc/CoolBtn";

function Modal(props: any) {
  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0  z-50 flex items-center justify-center bg-opacity-50 mt-5 md:mt-0 ">
        <div className="relative flex h-full flex-col  overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] shadow-lg max-w-3xl md:max-w-full w-full">
          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1 p-6 sm:p-10 scrollbar-hide md:overflow-hidden">
            <div className="flex items-center justify-between">
              {/* Title & Description */}
              <p className="text-3xl font-medium tracking-tight text-text-base">
                {props.lgTitle}
              </p>
              {/* Close Button */}
              <button
                className=" z-50 p-2 bg-background-base rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition"
                onClick={props.onClose} // Emit event to parent
              >
                <IoCloseSharp size={24} />
              </button>
            </div>
            <p className="mt-2 max-w-lg md:max-w-full mx-auto lg:mx-0 text-xl text-secondary-text-base">
              {props.lgDescription}
            </p>

            {/* Image Container */}
            <div className="relative min-h-[30rem] w-full flex justify-center px-6 lg:px-10 mt-6">
              {Array.isArray(props.lgImageUrl) ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:flex">
                  {props.lgImageUrl.map(
                    (image: string | undefined, index: number) => (
                      <img
                        key={index}
                        className="w-full max-w-[500px] h-auto lg:h-[90%] object-cover rounded-lg"
                        src={image}
                        alt={props.lgImageAlt?.[index] || `Image ${index + 1}`}
                      />
                    )
                  )}
                </div>
              ) : (
                <img
                  className="w-full max-w-[600px] mx-auto h-auto md:w-auto md:my-10 object-cover rounded-lg"
                  src={props.lgImageUrl}
                  alt={props.lgImageAlt || "Image"}
                />
              )}
            </div>
            {props.LearnMore && (
              <a
                href={props.LearnMore}
                target="_blank"
                className="flex justify-center md:-my-25 my-5 cursor-pointer"
              >
                <CoolBtn
                  text="Learn More"
                  className=" scale-150"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
