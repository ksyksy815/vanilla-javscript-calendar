const monthTitle = document.querySelector('#month')
const calendar = document.querySelector('#calendar-days')
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')

const today = new Date()
const todaysYear = today.getFullYear()
const todaysMonth = today.getMonth()
const todaysDate = today.getDate()

let displayedYear = todaysYear
let displayedMonth = todaysMonth

const getMonthName = (month) => {
  switch (month) {
    case 0:
      return "January"
    case 1:
      return "February"
    case 2:
      return "March"
    case 3:
      return "April"
    case 4:
      return "May"
    case 5:
      return "June"
    case 6:
      return "July"
    case 7:
      return "August"
    case 8:
      return "September"
    case 9:
      return "October"
    case 10:
      return "November"
    case 11:
      return "December"
    default:
      return
  }
}

const isToday = (cur, date) => {
  if (cur.getDate() === date) return true;
  return false
}

const setStartingDay = (day) => {
  for (let i = 0; i < day; i++) {
    const emptyDiv = document.createElement('div')
    emptyDiv.classList.add('day-box')
    calendar.appendChild(emptyDiv)
  }
}

const getFullDaysOfThisMonth = (lastDateOfThisMonth, year, month) => {
  let thisMonthDateList = []
  
  for (let i = 1; i <= lastDateOfThisMonth; i++) {
    const currentDay = new Date(year, month, i)
    thisMonthDateList.push(currentDay)
  }

  return thisMonthDateList
}

const renderCalendar = (year, month, date, isThisMonth) => { 
  const lastDateOfThisMonth = new Date(year, month + 1, 0).getDate()

  // 달 이름 넣기
  monthTitle.textContent = getMonthName(month)
  
  // 일 채우기
  const thisMonth = getFullDaysOfThisMonth(lastDateOfThisMonth, year, month)

  thisMonth.map(day => {
    const curDate = day.getDate()
    const curDay = day.getDay()
    if ( curDate === 1) {
      setStartingDay(curDay)
    }
  
    const div = document.createElement('div')
    div.classList.add('day-box')
    if (isThisMonth && isToday(day, date)) {
      div.classList.add('today')
    }
    
    const span = document.createElement('span')
    span.textContent = curDate
  
    div.appendChild(span)
    calendar.appendChild(div)
  })
}

const removeCurrentCalendar = () => {
  monthTitle.textContent = ''
  calendar.replaceChildren()
}

const renderNewCalendar = (e) => {
  removeCurrentCalendar()

  const type = e.target.id

  let newDate;
  if (type === 'prev') {
    newDate = new Date(displayedYear, displayedMonth - 1)
  } else {
    newDate = new Date(displayedYear, displayedMonth + 1)
  }

  const newYear = newDate.getFullYear()
  const newMonth = newDate.getMonth()
  displayedYear = newYear
  displayedMonth = newMonth
  const isThisMonth = newMonth === todaysMonth
  const displayedDate = isThisMonth ? todaysDate : 0

  renderCalendar(displayedYear, displayedMonth, displayedDate, isThisMonth)
}

// first init render
renderCalendar(todaysYear, todaysMonth, todaysDate, true)

// button event listeners
prevBtn.addEventListener('click', renderNewCalendar)
nextBtn.addEventListener('click', renderNewCalendar)