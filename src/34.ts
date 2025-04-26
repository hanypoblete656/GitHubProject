// Create an empty array to store your tasks
let tasks = [];

// Add each task as an object with properties such as 'description' and 'priority'
tasks.push({
  description: "Finish this feature",
  priority: 1,
});

// Find the task that is at the same level as the first task in the array
const highestPriorityTask = tasks.find((task) => task.priority === Math.max(...Array.from(tasks).map((item) => item.priority)));

// Add a new task with a different description and lower priority than the highest priority task
tasks.push({
  description: "Finish this feature",
  priority: 2,
});

console.log(tasks);
