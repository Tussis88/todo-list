import "./style.css";
import Todo from "./assets/todos";
import { Project, projectArray } from "./assets/projects";

import {testTodo, testProject, testProjectArray } from "./assets/tests";

function component() {
  const element = document.createElement("div");
  element.textContent = "Ciao ciao!";
  return element;
}

document.body.appendChild(component());


// testTodo();
// testProject();
testProjectArray();
