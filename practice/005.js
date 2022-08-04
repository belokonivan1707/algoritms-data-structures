const processAction = (i, callback) => {
  setTimeout(function () {
    callback("Processed Action " + i);
  }, Math.random() * 1000);
};

const triggerActions = (n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(new Promise((resolve) => processAction(i, resolve)));
  }
  for (let i = 0; i < array.length; i++) {
    array[i].then((res) => console.log(res));
  }
};

function createPromise(index) {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      setTimeout(() => {
        resolve("resolved", index);
      }, 1000);
    } else {
      setTimeout(() => reject("rejected", index), 1000);
    }
  }).catch((er) => {
    console.log("CreatePromise Error", index, er);
    // return `if catch return, i goes to next then ${index}`;
  });
}

function createArray(count, callback) {
  const array = [];
  for (let i = 0; i < count; i++) {
    array.push(callback(i));
  }
  return array;
}

function executePromiseArray(array, index = 0) {
  if (array.length !== index) {
    array[index].then((res) => console.log("Promise Executed", index, res));
    executePromiseArray(array, index + 1);
  }
}

executePromiseArray(createArray(10, createPromise));
