const { program } = require("commander");

program.version("1.0.0").description("Task Management CLI");

program
  .command("save")
  .action(() => {
    console.log('Save action...');
  })
;

program.parse(process.argv);
