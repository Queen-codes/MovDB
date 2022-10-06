import { useEffect, useState } from "react";
import requests from "../../utils/requests";
import instance from "../../utils/axios";
const Header = () => {
  const [bannerMovie, setBannerMovie] = useState([]);

  useEffect(() => {
    async function getBannerMovie() {
      const res = await instance.get(requests.trending);
      const data = res.data.results;
      const randomMovie = Math.floor(Math.random() * data.length - 1);
      setBannerMovie(data[randomMovie]);
    }

    getBannerMovie();
  }, []);
  return (
    <header
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
      className="text-white object-contain h-96"
    >
      <section className="rand-movie text-white ml-4 pt-20 ">
        <h1 className="font-bold tracking-wider text-base">
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}
        </h1>

        <div className="mt-4">
          <button className="bg-slate-600 hover:bg-slate-200 hover:text-black transition-all duration-150 text-white font-bold py-2 px-12 rounded">
            Play
          </button>
          <button className="bg-gray-600 hover:bg-slate-200 hover:text-black transition-all duration-150 text-white font-bold p-2 rounded ml-4">
            +
          </button>
        </div>

        <h2 className="max-w-xl text-sm font-normal pt-4">
          {bannerMovie.overview}
        </h2>
      </section>
    </header>
  );
};

export default Header;
