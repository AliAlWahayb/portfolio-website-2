/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 ">
        <div className="relative flex h-full flex-col  overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] shadow-lg max-w-3xl w-full">
          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1 p-6 sm:p-10 scrollbar-hide">
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
            <p className="mt-2 max-w-lg mx-auto lg:mx-0 text-xl text-secondary-text-base">
              {props.lgDescription}
            </p>

            {/* Image Container */}
            <div className="relative min-h-[30rem] w-full flex justify-center px-6 lg:px-10 mt-6">
              {Array.isArray(props.lgImageUrl) ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {props.lgImageUrl.map(
                    (image: string | undefined, index: number) => (
                      <img
                        key={index}
                        className="w-full max-w-[500px] h-auto lg:h-[300px] object-cover rounded-lg"
                        src={image}
                        alt={props.lgImageAlt?.[index] || `Image ${index + 1}`}
                      />
                    )
                  )}
                </div>
              ) : (
                <img
                  className="w-full h-auto md:my-10 object-cover rounded-lg"
                  src={props.lgImageUrl}
                  alt={props.lgImageAlt || "Image"}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
