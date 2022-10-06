import React, { useState } from "react";
import SearchResult from "./SearchResult";

const Add = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  function handleChange(e) {
    e.preventDefault();
    setInputValue(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=60620af18861c760135cc8079b2dc7a5&language=en-US&query=${e.target.value}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setSearchResults(data.results);
        } else {
          setSearchResults([]);
        }
      });
  }

  return (
    <div className="container">
      <section>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-4/5 md:w-2/5 mt-4 m-auto border border-slate-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for a movie or tv show..."
            type="search"
            name="search"
            value={inputValue}
            onChange={handleChange}
          />
        </label>
      </section>

      {searchResults.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mt-7 mr-2 ml-5 2xl:grid-cols-7 relative">
          {searchResults.map((result, index) => (
            <div key={result.id}>
              <SearchResult result={result} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Add;
