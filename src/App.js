import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import Hero from "./components/Hero";
import { createClient } from "pexels";
import Footer from "./components/Footer";
import { useRecoilState } from "recoil";
import {photoState} from "./atom/photoState"
function App() {
  const [query, setQuery] = useState("");
  const [loading, setloading] = useState(true);
  const client = createClient(process.env.REACT_APP_PEXEL_KEY);
// Atom

  const [photos, setPhotos] = useRecoilState(photoState)
  const fetchImagesOnLoad = async () => {
    setloading(true);

    await client.photos.curated({ per_page: 80 }).then((data) => {
      setPhotos(data);
    });
    setloading(false);
  };

  const getphotos = async () => {
    if (query !== "") {
      setloading(true);

      const res = await client.photos
        .search({ query, per_page: 80 })
        .then((data) => {
          setPhotos(data);
        });
      setloading(false);
    }
  };

  useEffect(() => {
    fetchImagesOnLoad();
  }, []);
  useEffect(() => {
    setloading(true);
    getphotos();
    setloading(false);
  }, [query]);


  return (
    <div className="App">
      <Hero query={query} setQuery={setQuery} />
      <div className="container mx-auto mt-10 text-center ">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 capitalize text-primary">
          The best free stock photos
        </h1>
        <p className="text-gray-500 mt-5">
          Showing {photos?.photos?.length} result of 
          {!query ? (
            <span className="mx-2 font-semibold  items-center rounded-md bg-gray-50 px-2 py-1 text-md  text-gray-600 ring-1 ring-inset ring-gray-500/10">
              Random
            </span>
          ) : (
            <span className="mx-2 font-semibold  items-center rounded-md bg-gray-50 px-2 py-1 text-md  text-gray-600 ring-1 ring-inset ring-gray-500/10">
              {query}
            </span>
          )}
        </p>
      </div>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <Grid  loading={loading} />
      )}

      <Footer />
    </div>
  );
}

export default App;

export function LoadingSkeleton() {
  return (
    <>
      <section className="bg-white ">
        <div className="container px-6 py-10 mx-auto animate-pulse">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="w-full ">
              <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 "></div>

              <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg"></h1>
              <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
            </div>
            <div className="w-full ">
              <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 "></div>

              <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg"></h1>
              <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
            </div>
            <div className="w-full ">
              <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 "></div>

              <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg"></h1>
              <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
