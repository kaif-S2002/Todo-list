const inputText = document.getElementById("input-text");
const list = document.getElementById("list");
// const LI = document.getElementById("listElemments");

function handleClick() {
  if (!inputText.value) {
    alert("Enter some text !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    list.appendChild(li);
    inputText.value = "";
  }
}

list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);
