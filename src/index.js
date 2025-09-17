import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer
const countModifier = (count = 0, action) => {
  console.log(count, action)
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
}
const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "MINUS" })

console.log(countStore.getState())

// logs
// 0 {type: '@@redux/INITj.a.m.3.y.d.j'}
// index.js:9 0 {type: 'ADD'}
// index.js:9 1 {type: 'ADD'}
// index.js:9 2 {type: 'ADD'}
// index.js:9 3 {type: 'ADD'}
// index.js:9 4 {type: 'MINUS'}
// index.js:26 3