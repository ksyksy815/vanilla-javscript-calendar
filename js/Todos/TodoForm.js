import Todo from './Todo.js'

class TodoForm {
  constructor() {
    this.form = document.querySelector('#todo-form')
  }

  handleSubmit (e) {
    const content = e.target[0].value
    const dueDate = e.target[1].value
    const todo = new Todo(content, startDate, dueDate)
  }
}