import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import SearchResult from "../watchlist/SearchResult";

const TopRatedMovies = () => {
  const [items, setItems] = useState([]);
  const [page, setpage] = useState(2);
  const [hasMore, sethasMore] = useState(true);
  useEffect(() => {
    async function getMovies() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=60620af18861c760135cc8079b2dc7a5&language=en-US&page=1`
      );
      const data = res.data.results;
      return setItems(data);
    }
    getMovies();
  }, []);

  async function fetchMore() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=60620af18861c760135cc8079b2dc7a5&language=en-US&page=${page}`
    );
    const data = res.data.results;
    return data;
  }

  //console.log(items)

  const fetchData = async () => {
    //console.log('data-fethced')
    const dataFromAPI = await fetchMore();
    setItems([...items, ...dataFromAPI]);
    if (dataFromAPI.length === 0 || dataFromAPI.length < 20) {
      sethasMore(false);
    }
    setpage(page + 1);
  };
  return (
    <>
      <h2 className="text-white font-bold py-5 px-3 tracking-wide ml-10 mt-2 lg:ml-0 lg:mt-0">
        Top Rated Movies
      </h2>
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={
          <h4 className="text-white font-bold text-center text-lg">
            Loading ...{" "}
          </h4>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mt-7 mr-2 ml-5 2xl:grid-cols-7 relative">
          {items.map((result, index) => (
            <div key={index}>
              <SearchResult result={result} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default TopRatedMovies;
