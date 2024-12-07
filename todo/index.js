const input = document.querySelector(".input-txt");
const addButton = document.querySelector(".add-todo");
const listItems = document.querySelector(".list-items");
const ul = document.createElement("ul");

addButton.addEventListener("click", () => {
  const elem = document.createElement("div");
  elem.style.marginTop = "20px";
  elem.style.border = "1px solid black";
  elem.style.padding = "20px";

  const value = input.value;
  const li = document.createElement("li");
  li.textContent = value;

  li.style.listStyleType = "none";
  li.style.fontWeight = "600";

  elem.appendChild(li);
  listItems.appendChild(elem);
  input.value = "";
});
