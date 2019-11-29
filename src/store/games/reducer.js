// src/store/games/reducer.js
const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "games/FETCHED": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
