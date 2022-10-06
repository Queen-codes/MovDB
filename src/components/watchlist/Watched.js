import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ResultCard from "./ResultCard";
const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <>
      <h2 className="text-white font-bold tracking-wide m-5">
        Watched Movies / TV shows
      </h2>
      {watched.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 ml-5">
          {watched.map((result, id) => (
            <div key={id}>
              <ResultCard result={result} type="watched" />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white text-base flex justify-center items-center mt-10">
          You have not watched any movies yet
        </p>
      )}
    </>
  );
};

export default Watched;
