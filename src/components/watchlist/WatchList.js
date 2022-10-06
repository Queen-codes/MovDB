import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const WatchList = () => {
  return (
    <>
      <nav className="text-white bg-gray-900 p-5 flex items-center gap-6">
        <Link
          to="add"
          className="bg-transparent px-3 py-2.5 ml-auto rounded hover:bg-green-400  transition-colors duration-300"
        >
          {" "}
          <span className="mr-2">
            <FontAwesomeIcon icon={faPlus} />{" "}
          </span>
          Add
        </Link>
        <Link
          to="watched"
          className="hover:text-green-400 hover:scale-110 transition-colors duration-300"
        >
          Watched
        </Link>
        <Link
          to="lists"
          className="hover:text-green-400 hover:scale-110 transition-colors duration-300"
        >
          WatchList
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default WatchList;
