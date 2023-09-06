// arrow function
// debounce returns a function that will run the callback
// uses closures to keep track of timer ids
const print = debounce(() => {
  console.log("it works");
}, 1000);

function debounce(cb, delay = 1000) {
  let timer;
  // concept of closures
  // inner function has access to timer variable outside of itself
  // once return function is called, it will assign a value to timer
  // on the second call it will use that value to clearTimeout and create a new one
  // the new one will be recorder in debounce function which does not change
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

// print();
