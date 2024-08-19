import { Project, projectArray } from "./projects";
import Todo from "./todos";
import { domTodo } from "./domTodo";
import DeleteSvg from "./img/delete.svg";

const domLogic = (function() {
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
  let currentProject = null;

  projectCreateButton.addEventListener("click", (e) => {
    e.preventDefault();
    const nameProject = projectForm.projectName.value;
    projectArray.addProject(new Project(nameProject));
    updateMenu();
    dialogProjectDiv.close();
  });

  todoCreateButton.addEventListener("click", (e) => {
    e.preventDefault();
    const name = todoForm.name.value;
    const description = todoForm.description.value;
    const date = todoForm.date.value;
    const priority = todoForm.priority.value;
    const newTodo = new Todo(name, description);
    newTodo.date = date;
    newTodo.priority = priority;

    projectArray.getArray().forEach((project) => {
      if (_.isEqual(currentProject, project)) {
        project.addTodo(newTodo);
        currentProject = project;
      }
    });

    dialogTodoCreateDiv.close();
    console.log(projectArray.getArray());
    projectArray.saveArray();
    updateContentDiv(currentProject);
  });

  const updateMenu = () => {
    menuDiv.textContent = "";
    // projectArray.loadArray();

    projectArray.getArray().forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("projectLine");
      if (currentProject && project.name === currentProject.name) {
        projectDiv.classList.add("selected");
      }

      const projectButton = document.createElement("button");
      projectButton.textContent = project.name;
      projectButton.addEventListener("click", () => {
        currentProject = project;
        updateContentDiv(project);
        updateMenu();
      });
      projectDiv.appendChild(projectButton);

      const deleteProjectButton = document.createElement("button");
      deleteProjectButton.classList.add("deleteProject");

      const deleteBin = new Image();
      deleteBin.src = DeleteSvg;
      deleteProjectButton.appendChild(deleteBin);
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
      const card = domTodo(todo, project);
      contentDiv.appendChild(card);
    });
    contentDiv.appendChild(addTodoButton());
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
    todoForm.name.value = "";
    todoForm.description.value = "";
  };
  return { updateMenu, updateContentDiv };
})();

export { domLogic };
