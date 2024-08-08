import { format } from "date-fns";

export default class Todo {
  constructor(name, description = "") {
    this.name = name;
    this.description = description;
    this.isDone = false;
    this._priority = 2;
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
  set priority(number) {
    this._priority = parseInt(
      isNaN(number) || number < 0 || number > 2 ? 2 : number,
      10,
    );
  }

  get priority() {
    return this._priority;
  }
}
//  THIS SHOULD BE DONE IN DOM
//   get dateFormatted() {
//     return format(this._date, "dd MMM yyyy");
//   }
