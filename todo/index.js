const input = document.querySelector(".input-txt");
const addButton = document.querySelector(".add-todo");
const listItems = document.querySelector(".list-items");
const ul = document.createElement("ul");

addButton.addEventListener("click", () => {
  const elem = document.createElement("div");
  elem.style.marginTop = "20px";
  elem.style.border = "1px solid black";
  elem.style.padding = "20px";
  elem.style.display = "flex";
  elem.style.justifyContent = "space-between";

  const value = input.value.trim();
  const li = document.createElement("li");
  li.textContent = value;

  li.style.listStyleType = "none";
  li.style.fontWeight = "600";

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove Todo";
  removeBtn.style.cursor = "pointer";
  removeBtn.style.backgroundColor = "red";
  removeBtn.style.border = "none";
  removeBtn.style.fontSize = "16px";
  removeBtn.style.padding = "10px";

  removeBtn.addEventListener("click", () => {
    listItems.removeChild(elem);
  });

  elem.appendChild(li);
  elem.appendChild(removeBtn);
  listItems.appendChild(elem);
  input.value = "";
});
