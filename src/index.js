import "./style.css";

function component() {
  const element = document.createElement("div");
  element.textContent = "Ciao ciao!";

  return element;
}

document.body.appendChild(component());
