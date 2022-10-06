export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (result) => result.id !== action.payload
        ),
      };

    case "ADD_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (result) => result.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };

    case "MOVE_BACK_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (result) => result.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist],
      };

    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(
          (result) => result.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
