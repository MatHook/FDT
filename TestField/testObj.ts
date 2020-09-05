import { configureStore } from "@reduxjs/toolkit";

const obj = {
  a: {
    c: 3,
  },
  b: 2,
};

const obj2 = {
  ...obj,
  a: {
    ...obj.a,
    c: 42,
  },
};

const initialState = { value: 0 };

const counterReducer = (state = initialState, action) => {
  if (action.type === "counter/increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  }
  if (action.type === "counter/decrement") {
    return {
      ...state,
      value: state.value - 1,
    };
  }
  return state;
};

const store = configureStore({ reducer: counterReducer });

console.log(store.getState());

store.dispatch({ type: "counter/decrement" });

console.log(store.getState());

const increment = () => {
  return {
    type: "counter/increment",
  };
};

store.dispatch(increment());

console.log(store.getState());
