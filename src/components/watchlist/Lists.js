import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ResultCard from "./ResultCard";

const Lists = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <>
      <h2 className="text-white font-bold tracking-wide m-5">WatchList</h2>
      {watchlist.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 ml-5">
          {watchlist.map((result, id) => (
            <div key={id}>
              <ResultCard result={result} type="watchlist" />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white text-base flex justify-center items-center m-auto mt-10 max-w-lg">
          You have not added any movie or tv show to your watchlist, go to the
          add to the 'add' page to search for movies and add them
        </p>
      )}
    </>
  );
};

export default Lists;
