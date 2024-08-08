import { compareAsc } from "date-fns";

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
        if (compareAsc(this.todoArray[i].date, todo.date) < 0) {
          this.todoArray.splice(i, 0, todo);
          return true;
        }
      }
    }
    this.todoArray.push(todo);
    return true;
  }
}
