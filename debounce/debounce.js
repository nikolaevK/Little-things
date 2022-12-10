// arrow function
const print = debounce(() => {
  console.log("it works");
}, 1000);

function debounce(cb, delay = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

print();
