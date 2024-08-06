import { format } from "date-fns";

export default class Todo {
  constructor(name, description, priority) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.isDone = false;
  }

  taskdone() {
    this.isDone = !this.isDone;
  }

  set date(stringDate) {
    this._date = new Date(stringDate);
  }

  get date() {
    return this._date;
  }

  get dateFormatted() {
    return format(this._date, "dd MMM yyyy");
  }
}
