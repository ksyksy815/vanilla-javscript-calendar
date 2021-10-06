import Calendar from './Calendar.js'
import List from './Todos/List.js'

export default class App {
  constructor() {
    this.today = new Date()
    this.displayedYear = new Date().getFullYear()
    this.displayedMonth = new Date().getMonth()
    this.createMode = false
    this.currentSelectDay = this.today
  }

  renderTodoList (parentEl) {
    const list = new List(this.today)
    list.renderListElement(parentEl)
  }

  renderNewCalendar (type, monthEl, parentEl) {
    parentEl.replaceChildren()

    let newDate;
    if (type === 'prev') {
      if (this.displayedMonth === 0) {
        newDate = new Date(this.displayedYear - 1, 11)
        this.displayedYear = this.displayedYear - 1
        this.displayedMonth = 11
      } else {
        newDate = new Date(this.displayedYear, this.displayedMonth - 1)
        this.displayedMonth -= 1
      }
    
    } else {
      if (this.displayedMonth === 11) {
        newDate = new Date(this.displayedYear + 1, 0)
        this.displayedYear = this.displayedYear + 1
        this.displayedMonth = 0
      } else {
        newDate = new Date(this.displayedYear, this.displayedMonth + 1)
        this.displayedMonth += 1
      }
    }

    const calendar = new Calendar(newDate, this.today)
    calendar.renderMonthTitle(monthEl)
    calendar.renderDays(parentEl)
  }

  init () {
    const monthEl = document.querySelector('#month')
    const daysParent = document.querySelector('#calendar-days')
    const nextBtn = document.querySelector('#next')
    const prevBtn = document.querySelector('#prev')
    const page = document.querySelector('#main-page')
  
    const calendar = new Calendar(this.today, this.today)
    calendar.renderMonthTitle(monthEl)
    calendar.renderDays(daysParent)
  
    prevBtn.addEventListener('click', (e) => 
      this.renderNewCalendar(e.target.id, monthEl, daysParent)
    )

    nextBtn.addEventListener('click', (e) => 
      this.renderNewCalendar(e.target.id, monthEl, daysParent)
    )

    this.renderTodoList(page)
  }
}
