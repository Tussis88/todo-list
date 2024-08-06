import "./style.css";
import Todo from "./assets/todos";
import Project from "./assets/projects";

function component() {
  const element = document.createElement("div");
  element.textContent = "Ciao ciao!";

  return element;
}

document.body.appendChild(component());

const task = new Todo("Prova", "descrizione di prova", "priority");
task.date = "2020-12-12";
task.taskdone();
console.log(task);
console.log(task.date);
console.log(task.dateFormatted);
