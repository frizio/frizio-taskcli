const { connection } = require("../db");
const Task = require("../models/Task");

const addTask = async (task) => {
  // console.log(task);
  await Task.create(task);
  console.log("New Task Created");
  await connection.close();
};

const listTasks = async () => {
  const tasks = await Task.find().lean();
  console.log(`Total Tasks Result: ${tasks.length}`);
  // console.info(tasks);
  console.table(
    tasks.map( (task) => ({
      _id: task._id.toString(),
      title: task.title,
      description: task.description,
    }))
  );
  await connection.close();
  process.exit(0);
};

module.exports = {
  addTask,
  listTasks
};
