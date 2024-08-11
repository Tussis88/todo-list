import "./style.css";
import Todo from "./assets/todos";
import { Project, projectArray } from "./assets/projects";
import { domLogic } from "./assets/dom";
import {testTodo, testProject, testProjectArray } from "./assets/tests";

// function component() {
//   const element = document.createElement("div");
//   element.textContent = "Ciao ciao!";
//   return element;
// }
//
// document.body.appendChild(component());
//
//
// // testTodo();
// testProject();
// testProjectArray();
domLogic.updateMenu();
