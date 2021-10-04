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

  renderListElement (parentEl) {
    const dateTitle = document.createElement('h4')
    const ul = document.createElement('ul')

    dateTitle.textContent = `Date: ${this.date.toDateString()}`
    ul.textContent = 'There is no to-do.'

    parentEl.appendChild(dateTitle)
    parentEl.appendChild(ul)
  }
}