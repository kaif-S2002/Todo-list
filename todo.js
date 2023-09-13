const inputText = document.getElementById("input-text");
const list = document.getElementById("list");
const listPlaceholder = document.querySelector(".list-placeholder");

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
    showPlaceholder();
  }
  return false;
}

list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
      showPlaceholder();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
      showPlaceholder();
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

document.addEventListener("keypress", (KeyboardEvent) => {
  if (KeyboardEvent.keyCode == 13) {
    handleClick();
  }
});

function showPlaceholder() {
  return list.childElementCount === 0
    ? (listPlaceholder.style.display = "flex")
    : (listPlaceholder.style.display = "none");
}
showPlaceholder();
