import { generateRandomId } from '../utils'

export default class Todo {
  constructor(content, startDate, dueDate) {
    this.id = generateRandomId()
    this.content = content
    this.startDate = startDate
    this.dueDate = dueDate
    this.completed = false
  }

  editContent (content) {
    this.content = content
  }

  changeDueDate (dueDate) {
    this.dueDate = dueDate
  }

  toggleCompleted () {
    this.completed = !this.completed
  }
}