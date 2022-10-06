import { createContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addToWatchlist = (result) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: result });
  };

  const removeFromWatchList = (result) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: result });
  };

  const addToWatched = (result) => {
    dispatch({ type: "ADD_TO_WATCHED", payload: result });
  };

  const moveBackToWatchlist = (result) => {
    dispatch({ type: "MOVE_BACK_TO_WATCHLIST", payload: result });
  };

  const removedFromWatched = (result) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: result });
  };
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addToWatchlist,
        removeFromWatchList,
        addToWatched,
        moveBackToWatchlist,
        removedFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
