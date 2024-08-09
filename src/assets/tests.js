import Todo from "./todos";
import Project from "./projects";

function testTodo() {
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

function testProject() {
  const task1 = new Todo("vecchio");
  task1.date = "2020-12-12";

  const task2 = new Todo("nuovissimo");
  task2.date = "2024-12-12";

  const task3 = new Todo("nuovo");
  task3.date = "2024-01-12";

  const task4 = new Todo("medio");
  task4.date = "2021-03-03";

  const project = new Project("prova");
  project.addTodo(task1);
  project.addTodo(task2);
  project.addTodo(task3);
  project.addTodo(task4);
  console.log(project);
  //
  // console.log("cancella 1 elemento");
  // project.deleteTodo(task1);
  // console.log(project);
}

export { testTodo, testProject };
