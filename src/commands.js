const { program } = require("commander");
const { prompt } = require("inquirer");

const {
  addTask,
  listTasks,
  deleteTask
} = require("./controllers/task.controller");

const taskQuestion = [
  {
    type: "input",
    name: "title",
    message: "Task Title",
  },
  {
    type: "input",
    name: "description",
    message: "Task Description",
  },
];

program
  .version("1.0.0")
  .description("Task Management CLI");

program
  .command("save")
  .alias("s")
  .description("Save a new task")
  .action( async () => {
    const answers = await prompt(taskQuestion);
    addTask(answers);
  })
;

program
  .command("list")
  .alias("l")
  .description("List all tasks")
  .action( async () => 
    listTasks()
  )
;

program
  .command("delete <id>")
  .alias("d")
  .description("Delete a task")
  .action( (_id) => 
    deleteTask(_id) 
  );

program
  .parse(process.argv);
