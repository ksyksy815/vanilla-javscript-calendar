export default class List {
  constructor(date) {
    this.date = date
    this.todos = []
  }

  addTodo (todo) {
    this.todos.push(todo)
  }

  deleteTodo (todoId) {
    const newTodos = this.todos.filter(todo => todo.id !== todoId)
    this.todos = newTodos
  }
}