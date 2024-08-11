import { Project, projectArray } from "./projects";

const domLogic = (function() {
  const menuDiv = document.querySelector("#menu");
  const contentDiv = document.querySelector("#content");

  const updateMenu = () => {
    menuDiv.textContent = "";
    projectArray.loadArray();
    console.log(projectArray.getArray());
    projectArray.getArray().forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("projectLine")
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
      menuDiv.appendChild(projectDiv)
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
  };

  const addProjectButton = () => {
    const addButton = document.createElement("button");
    addButton.classList.add("addButton")
    addButton.textContent = "+";
    addButton.addEventListener("click", dialogProject);
    return addButton;
  };

  const dialogProject = () => {
    const dialogProjectDiv = document.querySelector(".dialogProject");
    const projectForm = document.querySelector(".projectForm");
    const projectCreateButton = document.querySelector("#projectCreate");

    dialogProjectDiv.showModal();
    projectCreateButton.addEventListener("click", (e) => {
      e.preventDefault();
      const nameProject = projectForm.projectName.value;
      dialogProjectDiv.close();
      projectArray.addProject(new Project(nameProject));
      updateMenu();
    });
  };
  return { updateMenu };
})();

export { domLogic };
