import { generateRandomId } from '../utils'

export default class Todo {
  constructor(title, content, startDate, dueDate) {
    this.id = generateRandomId()
    this.title = title
    this.content = content
    this.startDate = startDate
    this.dueDate = dueDate
    this.completed = false
  }

  editTitle (title) {
    this.title = title
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