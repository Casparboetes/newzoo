// src/store/detailpage/reducer.js
const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "game/FETCHED": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
