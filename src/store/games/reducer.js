// src/store/games/reducer.js
const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "games/FETCHED": {
      return action.payload.data;
    }
    case "games/ROTATE_RIGHT": {
      function rotateRight(array) {
        array.unshift(array.pop());
        return array;
      }

      const rotateRightOnce = rotateRight(state);

      return [...rotateRightOnce];
    }
    case "games/ROTATE_LEFT": {
      function rotateLeft(array) {
        array.push(array.shift());
        return array;
      }

      const rotateLeftOnce = rotateLeft(state);

      return [...rotateLeftOnce];
    }
    default: {
      return state;
    }
  }
}
