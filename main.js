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
  like.classList.add("material-icons", "like");
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

    const text =
      e.target.innerText === "check_circle"
        ? (e.target.innerText = "check")
        : (e.target.innerText = "check_circle");

    const checkIcon = e.target.classList.contains("doneIcon")
      ? e.target.classList.remove("doneIcon")
      : e.target.classList.add("doneIcon");

    const checkText = e.target.classList.contains("doneIcon")
      ? target.classList.add("done")
      : target.classList.remove("done");

    e.target.classList.add(checkIcon);
    e.target.innerText = text;
    target.classList.add(checkText);
  });

  clearIcon.addEventListener("click", (e) => {
    const target = e.target.parentNode.parentNode;
    list.removeChild(removeFadeOut(target, 500));

    function removeFadeOut(el, speed) {
      let seconds = speed / 1000;
      el.style.transition = "opacity " + seconds + "s ease";

      el.style.opacity = 0;
      setTimeout(function () {
        el.parentNode.removeChild(el);
      }, speed);
    }
  });

  manage.classList.add("manage");
  checkIcon.classList.add("material-icons");
  checkIcon.classList.add("clearIcon");
  clearIcon.classList.add("material-icons");
  clearIcon.classList.add("checkIcon");
  checkIcon.innerText = "check";
  clearIcon.innerText = "delete_forever";
  manage.appendChild(checkIcon);
  manage.appendChild(clearIcon);

  li.appendChild(like);
  li.appendChild(text);
  li.appendChild(manage);

  inputText.value = "";
  inputText.focus();
});
