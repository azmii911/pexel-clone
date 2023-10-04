import React from "react";

function ImageCard({ image }) {
  return (
    <div>
      <a className="group relative block" target="_blank" href={image.url}>
        <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
          <img
            className="w-full h-full absolute top-0 left-0 object-cover"
            src={image?.src?.portrait}
            alt={image?.alt}
          />
        </div>

        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="p-4 flex flex-col h-full sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-center py-1 px-3 bg-white rounded-full uppercase">
                <span className="text-xl ">
                  <p className="font-semibold"> {image?.photographer.charAt(0)} </p>
                </span>
              </div>
              <div className="ml-2.5 sm:ml-4">
                <h4 className="font-semibold text-white">
                  {image?.photographer}{" "}
                </h4>
                <p className="text-xs text-white/[.8]">
                  {image?.photographer_id}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ImageCard;
