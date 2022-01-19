const { program } = require("commander");
const { prompt } = require("inquirer");

const {
  addTask
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
  .parse(process.argv);
