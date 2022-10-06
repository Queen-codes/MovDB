import {
  faHome,
  faStar,
  faFire,
  faFilm,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export const NavMenu = [
  {
    label: "Home",
    url: "/",
    icon: faHome,
  },

  {
    label: "Top rated",
    url: "/rated",
    icon: faStar,
  },
];

export const NavLibrary = [
  {
    label: "WatchList",
    url: "watchlist/lists",
    icon: faFilm,
  },

  {
    label: "Favorites",
    url: "/favs",
    icon: faHeart,
  },
];
