import React from "react";
import { faInfo, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { toast } from "react-toastify";
import Modal from "react-modal";

Modal.setAppElement("#root");

const baseurl = "https://image.tmdb.org/t/p/original/";
const RowCard = ({ result }) => {
  const { addToWatchlist, watchlist } = useContext(GlobalContext);
  let addedMovie = watchlist.find((o) => o.id === result.id);
  const watchlistDisabled = addedMovie ? true : false;

  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    addToWatchlist(result);
    toast.success("Added to Watchlist");
  }
  return (
    <>
      <div className="image w-44">
        <img
          className="transition duration-500 hover:scale-110 object-contain rounded-xl img"
          src={`${baseurl}${result.poster_path}`}
          alt={result.name}
        />
      </div>

      <div className="btn  absolute top-24 flex gap-4 text-2xl translate-x-10">
        <button onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon
            icon={faInfo}
            className="bg-white text-black rounded-2xl p-3"
          />
        </button>

        <button disabled={watchlistDisabled} onClick={handleClick}>
          <FontAwesomeIcon
            icon={faPlus}
            className="bg-zinc-500 text-white rounded-2xl p-3"
          />
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "#000",
          },
          content: {
            background: "#121212",
            color: "#fff",
            borderRadius: "12px",
          },
        }}
      >
        <div className="flex flex-col lg:flex-row gap-4 mt-12 relative">
          <section>
            <img
              src={`${baseurl}${result.backdrop_path}`}
              alt={result.name}
              className="rounded-lg"
            />
          </section>
          <section>
            {" "}
            <h2 className="py-4">
              {result?.title || result?.name || result?.original_name}
            </h2>
            <p>{result?.release_date || result?.first_air_date}</p>
            <p>{result.overview}</p>
          </section>

          <button onClick={() => setIsOpen(false)} className="absolute -top-12">
            <FontAwesomeIcon
              icon={faXmark}
              className="text-white hover:text-red-800 hover:scale-95 text-2xl"
            />
          </button>
        </div>
      </Modal>
    </>
  );
};

export default RowCard;
