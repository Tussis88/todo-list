import { compareAsc } from "date-fns";
import _ from "lodash";

import Todo from "./todos";

export default class Project {
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
          console.log("qui");
          this.todoArray.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
}
