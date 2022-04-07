const inputbtn = document.querySelector(".inputBtn");
const inputText = document.querySelector(".inputText");
const list = document.querySelector(".list");

// addTodo
inputbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = inputText.value;
  // listForm
  const item = document.createElement("li");
  item.classList.add("item");
  list.appendChild(item);

  const favIcon = document.createElement("span");
  favIcon.classList.add("material-icons");
  favIcon.innerText = "favorite_border";
  item.appendChild(favIcon);

  const p = document.createElement("p");
  p.classList.add("item__desc");
  p.innerText = text;
  item.appendChild(p);

  const div = document.createElement("div");
  div.classList.add("item__opt");
  item.appendChild(div);
  const clearIcon = document.createElement("span");
  clearIcon.classList.add("material-icons");
  clearIcon.classList.add("opt__clear");
  clearIcon.innerText = "check_circle";
  div.appendChild(clearIcon);
  const delIcon = document.createElement("span");
  delIcon.classList.add("material-icons");
  delIcon.classList.add("opt__del");
  delIcon.innerText = "delete";
  div.appendChild(delIcon);
});

//favTodo

//clearTodo
// let optClear = document.querySelectorAll(".opt__clear");
// console.log(optClear);
// optClear.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     const selectlist = e.target.parentNode.parentNode.childNodes[3];
//     console.log(selectlist);
//     if (selectlist.classList.contains("clear")) {
//       selectlist.classList.remove("clear");
//     } else {
//       selectlist.classList.add("clear");
//     }
//   });
// });

let optClear = document.querySelector(".opt__clear");
optClear.addEventListener("click", (e) => {
  const selectlist = e.target.parentNode.parentNode.childNodes[3];
  if (selectlist.classList.contains("clear")) {
    selectlist.classList.remove("clear");
  } else {
    selectlist.classList.add("clear");
  }
});
