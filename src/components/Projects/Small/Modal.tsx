/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoCloseSharp } from "react-icons/io5";

function Modal(props: any) {
  return (
    <>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
        <div>
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-50 p-2 bg-background-base rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition"
            onClick={props.onClose} // Emit event to parent
          >
            <IoCloseSharp size={24} />
          </button>

          {/* Title & Description */}
          <div className="px-6 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0 text-center lg:text-left">
            <p className="text-3xl font-medium tracking-tight text-text-base">
              {props.lgTitle}
            </p>
            <p className="mt-2 max-w-lg mx-auto lg:mx-0 text-xl text-secondary-text-base">
              {props.lgDescription}
            </p>
          </div>
        </div>

        <div>
          {/* Image Container */}
          <div className="relative min-h-[30rem] w-full flex justify-center px-6 lg:px-10">
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
    </>
  );
}

export default Modal;
