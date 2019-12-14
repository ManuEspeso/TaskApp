import uuid from "uuid/v1";

const delay = ms => new Promise(res => setTimeout(res, ms));

const getTodos = async () => {
  await delay(2000);
  return [
    newTodo({ text: "Tarea 2", done: false, priority: 2 }),
    newTodo({ text: "Tarea 1", done: false, priority: 2 }),
    newTodo({ text: "Tarea 3", done: false, priority: 2 }),
    newTodo({ text: "Tarea 4", done: true, priority: 2 }),
    newTodo({ text: "Tarea 5", done: false, priority: 2 }),
    newTodo({ text: "Tarea 6", done: false, priority: 2 }),
    newTodo({ text: "Tarea 7", done: false, priority: 2 }),
    newTodo({ text: "Tarea 8", done: false, priority: 2 }),
    newTodo({ text: "Tarea 9", done: true, priority: 2 }),
    newTodo({ text: "Tarea 10", done: false, priority: 2 }),
    newTodo({ text: "Tarea 11", done: false, priority: 2 }),
    newTodo({ text: "Tarea 12", done: false, priority: 2 }),
    newTodo({ text: "Tarea 13", done: false, priority: 2 }),
    newTodo({ text: "Tarea 14", done: true, priority: 2 }),
    newTodo({ text: "Tarea 15", done: false, priority: 2 }),
    newTodo({ text: "Tarea 16", done: false, priority: 2 }),
    newTodo({ text: "Tarea 17", done: false, priority: 2 }),
    newTodo({ text: "Tarea 18", done: false, priority: 2 }),
    newTodo({ text: "Tarea 19", done: true, priority: 2 }),
    newTodo({ text: "Tarea 20", done: false, priority: 2 })
  ];
};

const newTodo = todo => ({
  //id = uuid(),
  text: todo.text,
  createdAt: new Date(),
  done: todo.done,
  priority: todo.priority
});

const updateTodo = (list, todo) => {
  const updateIndex = list.findIndex(t => t.text === todo.text);
  const newTodoList = [...list];
  newTodoList[updateIndex] = todo;
  return newTodoList;
};

const addTodo = (list, todo) => [...(list || []), newTodo(todo)];

const deleteTodo = (list, todo) => list.filter(t => t.text != todo.text);

export { getTodos, addTodo, updateTodo, deleteTodo };
