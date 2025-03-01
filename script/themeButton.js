document.getElementById("theme-btn").addEventListener("click",function(event) {
    event.preventDefault();
    console.log("you're inside my bro");
    const colors = ["#ffcece","#fec5bb","#a39e92","#fa9bcf","#a9e4de","#d3dce8","#ffcad4","#faedcb","#e7f1dc","#e3e7e0","#a99abd"];
    const random = Math.floor(Math.random()*11);
    console.log(random);
    document.getElementById("body").style.backgroundColor = colors[random];
})