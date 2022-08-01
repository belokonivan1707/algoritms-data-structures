const test = "is2 Thi1s T4est 3a";

function order(words) {
  const temp = {};

  words.split(" ").forEach((el) => {
    const order = el.split("").find((el) => parseInt(el));
    temp[order] = el;
  });
  return Object.values(temp).join(" ");
}
