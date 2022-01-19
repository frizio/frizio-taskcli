const { program } = require("commander");
const { prompt } = require("inquirer");

program.version("1.0.0").description("Task Management CLI");

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
  .command("save")
  .action( async () => {
    console.log('Save action...');
    const answers = await prompt(taskQuestion);
    console.log(answers);
  })
;

program.parse(process.argv);
