let count = 0;
let sub = 6;
document.getElementById("box1-btn").addEventListener("click",function(event){
    sumAndSub(event, "Fix Mobile Button Issue");
});

document.getElementById("box2-btn").addEventListener("click",function(event){
    sumAndSub(event,"Add Dark Mode");
});

document.getElementById("box3-btn").addEventListener("click",function(event){
    sumAndSub(event,"Optimize Home Page");
});

document.getElementById("box4-btn").addEventListener("click",function(event){
    sumAndSub(event,"Add New Emoji 🤲");
});

document.getElementById("box5-btn").addEventListener("click",function(event){
    sumAndSub(event, "Integrate OpenAI API");
});

document.getElementById("box6-btn").addEventListener("click",function(event){
    sumAndSub(event,"Improve Job Searching");
});