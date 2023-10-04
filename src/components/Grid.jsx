import React from "react";
import ImageCard from "./ImageCard";
import { useRecoilValue } from "recoil";
import { photoState } from "../atom/photoState";

function Grid() {
    const {photos} = useRecoilValue(photoState)
  return (
    <>
      {
        photos ? <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid lg:grid-cols-4 gap-6">
          {photos?.map((image) => (
            <ImageCard image={image} key={image.id} />
          ))}
        </div>
      </div> : <h1 className="text-6xl text-red-400 bg-red-100/50 w-fit mx-auto font-extrabold my-5">Oops, No Photo Found</h1> 
      }
    </>
  );
}

export default Grid;



