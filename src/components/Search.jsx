import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { queryState } from "../atom/queryState";
import { photoState } from "../atom/photoState";
  import { createClient } from "pexels";

function Search() {

  const [query, setQuery] = useRecoilState(queryState);
  const [photos, setPhotos] = useRecoilState(photoState);
  const client = createClient(process.env.REACT_APP_PEXEL_KEY);



  const handleQuery = async (e) => {
    e.preventDefault();
 
      if (query !== "") {
        const res = await client.photos
          .search({ query, per_page: 80 })
          .then((data) => {
            setPhotos(data);
          });
      }
 
   
  };
  return (
    <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
      <form>
        <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg   ">
          <div className="flex-[1_0_0%]">
            <label
              htmlFor="hs-search-article-1"
              className="block text-sm text-gray-700 font-medium "
            >
              <span className="sr-only">Search for Free photos</span>
            </label>
            <input
              type="email"
              name="hs-search-article-1"
              id="hs-search-article-1"
              className="p-3 block w-full  rounded-md focus:border-blue-500 focus:ring-blue-500 "
              placeholder="Search for Free photos"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex-[0_0_auto]">
            <button
              onClick={handleQuery}
              className="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
