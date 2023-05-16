(function () {
  const itemsOrder = new Map();
  const ul = document.querySelector(".list");

  // Map has a built-in forEach method, similar to Array:
  [...ul.children].forEach((li, index) => {
    itemsOrder.set(li, index);
  });

  const obj = { a: 10, b: 30, c: 100 };
  let map_002 = new Map(Object.entries(obj));
  // console.log( map_002.get('a') ) // 10

  // When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:
  const map = new Map([
    ["a", 10],
    ["b", 30],
    ["c", 100],
  ]);
  Object.keys(obj).length; // 3;
  map.size; // 3
  // console.log(map.get('a'))  // 10

  for (let key of map.keys()) {
    // console.log(key); // a, b, c
  }
  for (let value of map.values()) {
    // console.log(value); // 10, 20, 30
  }
  for (let entry of map) {
    // console.log(entry) // a, 10 . . .
  }

  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

  function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
      let sorted = word.toLowerCase().split("").sort().join("");
      map.set(sorted, word);
    }

    // map // {'anp' => 'PAN', 'aceehrst' => 'hectares', 'aer' => 'era'}
    // map.values(); //  {'PAN', 'hectares', 'era'}
    // Array.from(map.values()) // ['PAN', 'hectares', 'era']
  }
})();
