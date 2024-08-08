import "./style.css";
import Todo from "./assets/todos";
import Project from "./assets/projects";

import testTodo from "./assets/tests";

function component() {
  const element = document.createElement("div");
  element.textContent = "Ciao ciao!";

  return element;
}

document.body.appendChild(component());

testTodo();
