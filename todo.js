const inputText = document.getElementById("input-text");
const list = document.getElementById("list");
// const data = document.querySelector(".list-container");

function handleClick() {
  if (!inputText.value) {
    alert("Enter some text !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputText.value = "";
    saveData();
  }
}

list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showData() {
  list.innerHTML = localStorage.getItem("data");
}
showData();
