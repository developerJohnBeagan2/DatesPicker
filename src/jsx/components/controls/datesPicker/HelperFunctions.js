export const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

export function getMonthName(calendarDate) {
  return monthNames[calendarDate.getMonth()];
}

export function makeDateArray(calendarDate) {
    let dateArray = Array(35);
    dateArray.fill(0);
    let firstofMonth = calcFirstDateofMonth(calendarDate);
    let lastofMonth = calcLastDateofMonth(calendarDate);
    let offset = firstofMonth.getDay(); // day of week
    let dayNumber = lastofMonth.getDate(); // day of month
    for (let i = 1; i <= dayNumber; i++) {
        dateArray[offset + i - 1] = i;
    }
//debugger;
    return dateArray;
}

export function calcFirstDateofMonth(calendarDate) {
    let firstofMonth = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1);
    return firstofMonth;
}

export function calcLastDateofMonth(calendarDate) {
    let yearNum = calendarDate.getFullYear();
    let monthNum = calendarDate.getMonth();
    if (monthNum >= 0 && monthNum <= 10) {
        monthNum++;
    }
    else {
        monthNum = 0;
        yearNum++;
    }
    // first day of next month
    let firstofNext = new Date(yearNum, monthNum, 1);
    // call last day of this month
    let lastofMonth = new Date(firstofNext.setDate(firstofNext.getDate() - 1));
    return lastofMonth;
}


