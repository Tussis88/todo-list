import { format } from "date-fns";
import { projectArray} from "./projects";
import { domLogic } from "./dom";

function domTodo(todo, project) {
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
    if (!todo.isDone) {
      todo.taskdone();
      card.classList.add("done");
      isDoneButton.textContent = "Undo";
    } else {
      todo.taskdone();
      card.classList.remove("done");
      isDoneButton.textContent = "Done";
    }
    projectArray.saveArray();
  });
  card.appendChild(isDoneButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  deleteButton.addEventListener("click", () => {
    console.log(todo);
    console.log(project);
    project.deleteTodo(todo);
    projectArray.saveArray();
    domLogic.updateContentDiv(project);
  });
  card.appendChild(deleteButton);

  return card;
}

export { domTodo };
