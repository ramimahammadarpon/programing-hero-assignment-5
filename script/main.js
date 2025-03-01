console.log("main loaded")
window.onload = function date() {
    const date = new Date();
    const week = date.getDay();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    const weekDay = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    console.log(weekDay[week], months[month], day, year);
    setValueById("week-day",weekDay[week]);
    setValueById("month-day-year",`${months[month]} ${day} ${year}`);


}