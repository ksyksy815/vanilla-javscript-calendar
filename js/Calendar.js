import { getMonthName } from './utils.js'

export default class Calendar {
  constructor (date, today) {
    this.DATE = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDay()
    }
    this.month = getMonthName(this.DATE.month)
    this.dayCount = new Date(this.DATE.year, this.DATE.month + 1, 0).getDate()
    this.startingDay = new Date(this.DATE.year, this.DATE.month, 1).getDay()
    this.isThisMonth = today.getMonth() === this.DATE.month
    this.todaysDate = today.getDate()
  }

  renderMonthTitle (where) {
    where.textContent = this.month
  }

  renderDays (parentEl) {
    for (let i = 0; i < this.startingDay; i++) {
      const emptyDiv = document.createElement('div')
      emptyDiv.classList.add('day-box')
      parentEl.appendChild(emptyDiv)
    }

    for (let i = 1; i <= this.dayCount; i++) {
      const span = document.createElement('span')
      span.textContent = i

      const div = document.createElement('div')
      div.classList.add('day-box')

      if (this.isThisMonth && this.todaysDate === i) {
        div.classList.add('today')
      }

      div.appendChild(span)
      parentEl.appendChild(div)
    }
  }
}