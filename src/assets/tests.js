import Todo from "./todos";

export default function testTodo() {
  const task = new Todo("Prova", "descrizione di prova");
  console.log("Todo creato");
  console.log(task);

  console.log("taskdone()");
  task.taskdone();
  console.log(task);

  console.log("set date");
  task.date = "2021-12-30";
  console.log(task);
  console.log("get date");
  console.log(task.date);

  console.log(task.priority);

  console.log("set priority uncorrectly (letter)");
  task.priority = "a";
  console.log(task.priority);

  console.log("set priority uncorrectly (big number)");
  task.priority = 5;
  console.log(task.priority);

  console.log("set priority uncorrectly (negative number)");
  task.priority = -5;
  console.log(task.priority);


  console.log("set priority correctly (number 0)");
  task.priority = 0;
  console.log(task.priority);

  console.log("set priority correctly (string 1)");
  task.priority = "1";
  console.log(task.priority);


}
