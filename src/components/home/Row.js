import { useEffect, useState } from "react";
import instance from "../../utils/axios";
import RowCard from "./RowCard";

const Row = ({ title, url }) => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function getResults() {
      const res = await instance.get(url);
      //console.log(res)
      setResults(res.data.results);
      return res;
    }
    getResults();
  }, [url]);

  return (
    <div>
      <h2 className="text-zinc-400 pl-4 mt-2 text-bold tracking-wide">
        {title}
      </h2>
      <section className="movie-poster flex overflow-y-hidden overflow-x-scroll p-4 gap-5 relative">
        {results.map((result) => (
          <div key={result.id}>
            <RowCard result={result} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Row;
