import Controls from "./Controls";
const baseurl = "https://image.tmdb.org/t/p/original/";
const ResultCard = ({ result, type }) => {
  return (
    <>
      <div className="image w-32 sm:w-44 mb-4">
        {result.poster_path ? (
          <img
            className="transition duration-500 hover:scale-110 object-contain rounded-xl img"
            src={`${baseurl}${result.poster_path}`}
            alt={result.name}
          />
        ) : (
          <div className="w-44 h-64 bg-gray-400 rounded-md mr-4 block text-transparent"></div>
        )}
      </div>

      <Controls type={type} result={result} />
    </>
  );
};

export default ResultCard;
