function updateActivityLog(heading) {
    console.log(heading);
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const newDiv = document.createElement("p");
    newDiv.style.backgroundColor = "#d1daed";
    newDiv.style.padding = "10px";
    newDiv.style.fontSize = "15px";
    newDiv.classList.add("shadow-xl");
    newDiv.classList.add("rounded-lg");
    newDiv.style.marginBottom = " 10px";
    if(hours>12){
        hours = hours - 12;
        newDiv.innerText = `You have Completed The Task ${heading} at ${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')} PM`;
    }
    else{
        newDiv.innerText = `You have Completed The Task ${heading} at ${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')} AM`;
    }

    document.getElementById("activity-log").appendChild(newDiv);
}