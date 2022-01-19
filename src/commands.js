const pjson = require('./../package.json');
const { program } = require("commander");
const { prompt } = require("inquirer");

const {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  findTask
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
  .version(pjson.version)
  .description(pjson.description);

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
  .command("update <id>")
  .alias("u")
  .description("Update a task")
  .action( async (_id) => {
    const answers = await prompt(taskQuestion);
    await updateTask(_id, answers);
  })
;

program
  .command("delete <id>")
  .alias("d")
  .description("Delete a task")
  .action( (_id) => 
    deleteTask(_id) 
  )
;

program
  .command("find <task>")
  .alias("f")
  .description("Find a task")
  .action( (text) => 
    findTask(text)
  )
;


program
  .parse(process.argv);
