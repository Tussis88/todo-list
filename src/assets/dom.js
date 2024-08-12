import { Project, projectArray } from "./projects";
import Todo from "./todos";

const domLogic = (function () {
  const menuDiv = document.querySelector("#menu");
  const contentDiv = document.querySelector("#content");
  // dialog project creation items
  const dialogProjectDiv = document.querySelector(".dialogProject");
  const projectForm = document.querySelector(".projectForm");
  const projectCreateButton = document.querySelector("#projectCreate");
  // todo project creation items
  const dialogTodoCreateDiv = document.querySelector(".dialogTodoCreate");
  const todoForm = document.querySelector(".todoForm");
  const todoCreateButton = document.querySelector("#todoCreate");

  projectCreateButton.addEventListener("click", (e) => {
    e.preventDefault();
    const nameProject = projectForm.projectName.value;
    projectArray.addProject(new Project(nameProject));
    updateMenu();
    dialogProjectDiv.close();
  });
  const updateMenu = () => {
    menuDiv.textContent = "";
    projectArray.loadArray();
    console.log(projectArray.getArray());

    projectArray.getArray().forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("projectLine");
      const projectButton = document.createElement("button");
      projectButton.textContent = project.name;
      projectButton.addEventListener("click", () => updateContentDiv(project));
      projectDiv.appendChild(projectButton);

      const deleteProjectButton = document.createElement("button");
      deleteProjectButton.textContent = "x";
      deleteProjectButton.addEventListener("click", () => {
        projectArray.deleteProject(project);
        updateMenu();
      });
      projectDiv.appendChild(deleteProjectButton);
      menuDiv.appendChild(projectDiv);
    });
    menuDiv.appendChild(addProjectButton());
  };

  const updateContentDiv = (project) => {
    contentDiv.textContent = "";
    project.todoArray.forEach((todo) => {
      const card = document.createElement("div");
      const titleTodo = document.createElement("h3");
      titleTodo.textContent = todo.name;
      card.appendChild(titleTodo);
      contentDiv.appendChild(card);
    });
    contentDiv.appendChild(addTodoButton());
    todoCreateButton.addEventListener("click", (e) => {
      e.preventDefault();
      const name = todoForm.name.value;
      const description = todoForm.description.value;
      const date = todoForm.date.value;
      const priority = todoForm.priority.value;
      const todo = new Todo(name, description);
      todo.date = date;
      todo.priority = priority;
      project.addTodo(todo);
      updateContentDiv(project);
      dialogTodoCreateDiv.close();
      projectArray.saveArray();
    });

  };

  const addProjectButton = () => {
    const addButton = document.createElement("button");
    addButton.classList.add("addProject");
    addButton.textContent = "+";
    addButton.addEventListener("click", dialogProject);
    return addButton;
  };

  const dialogProject = () => {
    dialogProjectDiv.showModal();
    projectForm.projectName.value = "";
  };

  const addTodoButton = () => {
    const addButton = document.createElement("button");
    addButton.classList.add("addTodo");
    addButton.textContent = "+";
    addButton.addEventListener("click", dialogTodoCreation);
    return addButton;
  };

  const dialogTodoCreation = () => {
    dialogTodoCreateDiv.showModal();
  };
  return { updateMenu };
})();

export { domLogic };
