import { format } from "date-fns";
import _ from "lodash";
import { projectArray } from "./projects";
import { domLogic } from "./dom";
import DeleteSvg from "./img/deleteTodo.svg";

function domTodo(oldTodo, project) {
  let todo = _.cloneDeep(oldTodo);
  const card = document.createElement("div");
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

  const titleTodo = document.createElement("h3");
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
  isDoneButton.textContent = todo.isDone ? "Undo" : "Done";
  isDoneButton.addEventListener("click", () => {
    projectArray.getArray().forEach((proj) => {
      if (_.isEqual(proj, project)) {
        todo.taskdone();
        proj.editTodo(oldTodo, todo);
      }
    });
    if (todo.isDone) {
      card.classList.add("done");
      isDoneButton.textContent = "Undo";
    } else {
      card.classList.remove("done");
      isDoneButton.textContent = "Done";
    }
    projectArray.saveArray();
  });
  card.appendChild(isDoneButton);

  const deleteButton = document.createElement("button");
  const deleteImg = new Image();
  deleteImg.src = DeleteSvg;
  deleteButton.appendChild(deleteImg);
  deleteButton.addEventListener("click", () => {
    projectArray.getArray().forEach((proj) => {
      if (_.isEqual(proj, project)) {
        proj.deleteTodo(todo);
        projectArray.saveArray();
      }
    });
    domLogic.updateContentDiv(project);
    // project.deleteTodo(oldTodo);
  });
  card.appendChild(deleteButton);

  return card;
}

export { domTodo };
