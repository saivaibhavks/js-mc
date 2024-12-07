const input = document.querySelector(".input-txt");

let todo = [];

input.addEventListener("input", (e) => {
  console.log("event e", e.target.value);
});
