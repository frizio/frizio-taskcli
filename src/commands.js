const { program } = require("commander");

program.version("1.0.0").description("Task Management CLI");

program
  .command("save <title> <description>")
  .action((title, description) => {
    console.log('Save action...');
    console.log('Title', title);
    console.log('Description', description);
  })
;

program.parse(process.argv);
