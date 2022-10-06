import { NavLibrary, NavMenu } from "../data/Navdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
const Sidebar = ({ open }) => {
  const navStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "",
    };
  };
  return (
    <aside
      className={`bg-black w-52 fixed h-full  ${
        open ? "sidebar active" : "sidebar"
      }`}
    >
      <h1 className="text-lg text-white cursor-pointer px-6 mt-5 pt-8 mb-4">
        MovDB
      </h1>
      <nav className="pt-7">
        <h2 className="text-zinc-500 px-6">Menu</h2>
        <ul className="p-6">
          {NavMenu.map((menu, index) => {
            return (
              <NavLink
                style={navStyles}
                to={menu.url}
                key={index}
                className={`cursor-pointer text-zinc-500 font-normal flex mb-6 items-center tracking-wide `}
              >
                <li>
                  <FontAwesomeIcon icon={menu.icon} className="w-5 mr-5" />
                  <span>{menu.label}</span>
                </li>
              </NavLink>
            );
          })}
        </ul>

        <h2 className="text-zinc-500 px-6">Library</h2>
        <ul className="p-6">
          {NavLibrary.map((menu, index) => {
            return (
              <NavLink
                style={navStyles}
                to={menu.url}
                key={index}
                className={`cursor-pointer text-zinc-500 font-normal flex mb-6 items-center  tracking-wide`}
              >
                <li>
                  <FontAwesomeIcon icon={menu.icon} className="w-4 mr-5" />
                  <span>{menu.label}</span>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
