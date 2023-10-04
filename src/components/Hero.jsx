import React from "react";
import Search from "./Search";
import { useRecoilState } from "recoil";
import { queryState } from "../atom/queryState";
import { photoState } from "../atom/photoState";

function Hero() {

  return (
    <>
      <div className="relative overflow-hidden bg-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 leading-normal">
              The best free stock photos,
              <br />
              royalty free images & videos shared by creators.
            </h1>

            <Search />
            <TrendingKeyWords  />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

export function TrendingKeyWords() {
  const [query, setQuery] = useRecoilState(queryState);

  return (
    <>
      <div className="mt-10 sm:mt-20">
        {["Business", "Health", "Creative", "Adventure", "Environment"].map(
          (item, i) => (
            <button
              key={item + i}
              onClick={() => {
                setQuery(item);
         
                
              }}
              className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-800 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm "
            >
              {item}{" "}
            </button>
          )
        )}{" "}
      </div>
    </>
  );
}
