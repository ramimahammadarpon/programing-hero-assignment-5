function setValueById(id, value) {
    document.getElementById(id).innerText = value;
}
function sumAndSub (event) {
    event.preventDefault();
    count++;
    sub--;
    setValueById("completed-task",`${String(count).padStart(2,'0')}`);
    setValueById("task-assigned",`${String(sub).padStart(2,'0')}`);
    console.log(count);
    console.log(sub);
    updateActivityLog();
    event.target.style.backgroundColor = "#8b99f0"
    alert("Board Updated Sucessfully");
    if(count === 6) {
        alert("Congrats You've Completed all the Current Tasks");
    }
    event.target.disabled = true;
    
}