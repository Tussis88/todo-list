import { compareAsc } from "date-fns";
import _ from "lodash";

import Todo from "./todos";

class Project {
  constructor(name) {
    this.name = name;
    this.todoArray = [];
  }

  addTodo(todo) {
    if (!(todo instanceof Todo)) return false;
    if (this.todoArray) {
      for (let i = 0; i < this.todoArray.length; i++) {
        if (compareAsc(this.todoArray[i].date, todo.date) > 0) {
          this.todoArray.splice(i, 0, todo);
          return true;
        }
      }
    }
    this.todoArray.push(todo);
    return true;
  }

  deleteTodo(todo) {
    if (!(todo instanceof Todo)) return false;
    if (this.todoArray) {
      for (let i = 0; i < this.todoArray.length; i++) {
        if (_.isEqual(todo, this.todoArray[i])) {
          this.todoArray.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
}

const projectArray = (function () {
  let array = [];

  const getArray = () => array;

  const resetArray = () => (array = []);

  const saveArray = () => {
    localStorage.setItem("projectArray", JSON.stringify(array));
  };

  const loadArray = () => {
    const storedArray = localStorage.getItem("projectArray");
    if (storedArray) {
      array = JSON.parse(storedArray);
    }
  };

  const addProject = (project) => {
    if (!(project instanceof Project)) return;
    array.push(project);
    saveArray();
  };

  const deleteProject = (project) => {
    for (let i = 0; i < array.length; i++) {
      if (_.isEqual(project, array[i])) {
        array.splice(i, 1);
        saveArray();
        break;
      }
    }
  };

  return { getArray, resetArray, loadArray, addProject, deleteProject };
})();

export { Project, projectArray };
