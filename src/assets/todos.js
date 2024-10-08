export default class Todo {
  constructor(name, description = "") {
    this.name = name;
    this.description = description;
    this.isDone = false;
    this._priority = 2;
    this._date = new Date("2024-01-01");
  }

  taskdone() {
    this.isDone = !this.isDone;
  }

  set date(stringDate) {
    this._date = new Date(stringDate);
    if (isNaN(this._date)) {
      alert("Invalid date. Date will be set to my birthday");
      this._date = new Date("1988-06-30");
    }
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
