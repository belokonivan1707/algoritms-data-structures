function fuck() {
  console.log("fuck off");
  return function fuckFuck() {
    console.log("fuck-fuck");
  };
}

// const test = fuck();
// test();

const myFunction = () => {
  let myValue = 2;
  console.log(myValue);

  const childFunction = () => {
    console.log((myValue += 1));
  };

  return childFunction;
};

const result = myFunction();
// console.log(result);
// result();
// result();
// result();
