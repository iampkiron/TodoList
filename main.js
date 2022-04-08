const addButton = document.querySelector(".inputBtn");
const inputText = document.querySelector(".inputText");
const list = document.querySelector(".list");

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputText.value.trim() === "") {
    return;
  }

  const li = document.createElement("li");
  li.classList.add("item");
  list.appendChild(li);

  // like
  const like = document.createElement("span");
  like.classList.add("material-icons");
  like.innerText = "favorite_border";

  // Text
  const text = document.createElement("p");
  text.classList.add("text");
  text.innerText = inputText.value;

  // Manage
  const manage = document.createElement("div");
  const checkIcon = document.createElement("span");
  const clearIcon = document.createElement("span");

  // Event
  like.addEventListener("click", (e) => {
    const target = e.target;
    const text =
      target.innerText === "favorite_border"
        ? (target.innerText = "favorite")
        : (target.innerText = "favorite_border");
    target.innerText = text;
  });

  checkIcon.addEventListener("click", (e) => {
    const target = e.target.parentNode.previousSibling;
    const checkIcon =
      target.style.textDecoration === "line-through"
        ? (target.style.textDecoration = "")
        : (target.style.textDecoration = "line-through");
    target.style.textDecoration = checkIcon;
  });

  clearIcon.addEventListener("click", (e) => {
    const target = e.target.parentNode.parentNode;
    list.removeChild(target);
  });

  manage.classList.add("manage");
  checkIcon.classList.add("material-icons");
  checkIcon.classList.add("clearIcon");
  clearIcon.classList.add("material-icons");
  clearIcon.classList.add("checkIcon");
  checkIcon.innerText = "check_circle";
  clearIcon.innerText = "delete";
  manage.appendChild(checkIcon);
  manage.appendChild(clearIcon);

  li.appendChild(like);
  li.appendChild(text);
  li.appendChild(manage);

  inputText.value = "";
  inputText.focus();
});
