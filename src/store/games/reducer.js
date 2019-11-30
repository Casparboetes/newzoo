// src/store/games/reducer.js
const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "games/FETCHED": {
      return action.payload.data;
    }
    case "games/ROTATE_RIGHT": {
      function rotateRight(arr) {
        arr.unshift(arr.pop());
        return arr;
      }

      const rotateRightOnce = rotateRight(state);

      return [...rotateRightOnce];
    }
    case "games/ROTATE_LEFT": {
      function rotateLeft(arr) {
        arr.unshift(arr.pop());
        return arr;
      }

      const rotateLeftOnce = rotateLeft(state);

      return [...rotateLeftOnce];
    }
    default: {
      return state;
    }
  }
}
