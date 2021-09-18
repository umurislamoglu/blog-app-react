import { createStore } from "redux";

const initialState = {
  count: 0,
};


//REDUCER
const counterReducer= (state = initialState, action) => {
  const payload = typeof action.payload === "number" ? action.payload : 1;

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + payload,
      };
    case "DECREMENT":
      return {
        count: state.count - payload,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
}

//Store
const store = createStore(counterReducer);

store.subscribe ( () => {
  console.log(store.getState());
})

//getState


//INCREMENT , DECREMENT , RESET => ACTIONS(obj)
store.dispatch({ type: "DECREMENT", payload: 10 });

store.dispatch({ type: "INCREMENT", payload: 20 });

store.dispatch({ type: "INCREMENT", payload: 5 });

store.dispatch({ type: "RESET" });


//DISPATCH
