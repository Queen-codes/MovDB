import { faEye, faXmark, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { toast } from "react-toastify";
const Controls = ({ type, result }) => {
  const {
    removeFromWatchList,
    addToWatched,
    moveBackToWatchlist,
    removedFromWatched,
  } = useContext(GlobalContext);

  function handleWatched() {
    addToWatched(result);
    toast.success("Added to Watched");
  }

  function handleRemoveFromWatchlist() {
    removeFromWatchList(result.id);
    toast.success("Removed from WatchList");
  }

  function addBackToWatchlist() {
    moveBackToWatchlist(result);
    toast.success("Added back to WatchList");
  }

  function handleRemoveFromWatched() {
    removedFromWatched(result);
    toast.success("Removed from Watched");
  }
  return (
    <div className="absolute flex gap-4 btn abs">
      {type === "watchlist" && (
        <>
          <button onClick={handleWatched}>
            <FontAwesomeIcon
              icon={faEye}
              className="bg-white text-black rounded-2xl p-3"
            />
          </button>

          <button onClick={handleRemoveFromWatchlist}>
            <FontAwesomeIcon
              icon={faXmark}
              className="bg-zinc-500 text-white rounded-2xl p-3"
            />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button onClick={addBackToWatchlist}>
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="bg-white text-black rounded-2xl p-3"
            />
          </button>

          <button onClick={handleRemoveFromWatched}>
            <FontAwesomeIcon
              icon={faXmark}
              className="bg-zinc-500 text-white rounded-2xl p-3"
            />
          </button>
        </>
      )}
    </div>
  );
};

export default Controls;
