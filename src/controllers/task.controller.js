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

const updateTask = async (_id, newTask) => {
  // TODO: Check if id exist in the db
  await Task.updateOne({ _id }, newTask);
  console.info("Task Updated");
  await connection.close();
};

const deleteTask = async (_id) => {
  await Task.deleteOne({ _id });
  console.info("Task Deleted");
  await connection.close();
};

const findTask = async (title) => {
  const search = new RegExp(title, "i");
  const tasks = await Task.find({
    $or: [{ title: search }, { description: search }],
  }).lean();
  //console.log(JSON.stringify(tasks, null, 2));

  if (tasks.length === 0) {
    console.log("No tasks Found");
    await connection.close();
    process.exit(0);
  }

  console.table(
    tasks.map( (task) => ({
      _id: task._id.toString(),
      title: task.title,
      description: task.description,
    }))
  );
  console.log(`${tasks.length} matches`);

  await connection.close();
  process.exit(0);
};


module.exports = {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  findTask
};
