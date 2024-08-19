import { format } from "date-fns";
import _ from "lodash";
import { projectArray } from "./projects";
import { domLogic } from "./dom";
import DeleteSvg from "./img/deleteTodo.svg";

function domTodo(todo, project) {
  const card = document.createElement("div");
  card.classList.add("card");
  switch (todo.priority) {
    case 0:
      card.classList.add("high");
      break;
    case 1:
      card.classList.add("mid");
      break;
    case 2:
      card.classList.add("low");
      break;
  }
  if (todo.isDone) card.classList.add("done");

  const titleTodo = document.createElement("h3");
  titleTodo.classList.add("cardTitle");
  titleTodo.textContent = todo.name;
  card.appendChild(titleTodo);

  const dateTodo = document.createElement("p");
  dateTodo.classList.add("dateTodo");
  dateTodo.textContent = format(todo.date, "dd MMM yyyy");
  card.appendChild(dateTodo);

  const descriptionTodo = document.createElement("p");
  descriptionTodo.classList.add("descriptionTodo");
  descriptionTodo.textContent = todo.description;
  card.appendChild(descriptionTodo);

  const isDoneButton = document.createElement("button");
  isDoneButton.classList.add("doneButton");
  isDoneButton.textContent = todo.isDone ? "Undo" : "Done";
  isDoneButton.addEventListener("click", () => {
    todo.taskdone();
    if (todo.isDone) {
      card.classList.add("done");
      isDoneButton.textContent = "Undo";
    } else {
      card.classList.remove("done");
      isDoneButton.textContent = "Done";
    }
    projectArray.saveArray();
    domLogic.updateMenu();
    // domLogic.updateContentDiv(project);
  });
  card.appendChild(isDoneButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteTodo");
  const deleteImg = new Image();
  deleteImg.src = DeleteSvg;
  deleteButton.appendChild(deleteImg);
  deleteButton.addEventListener("click", () => {
    project.deleteTodo(todo);
    projectArray.saveArray();
    domLogic.updateMenu();
    // domLogic.updateContentDiv(project);
  });
  card.appendChild(deleteButton);

  return card;
}

export { domTodo };
