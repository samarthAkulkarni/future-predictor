var video = document.querySelector("#myVideo")
var cont1 = document.querySelector(".container")
var cont2 = document.querySelector(".container-2")


cont2.setAttribute('class', 'none')
document.getElementById('predictBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    if (!name) {
        alert("Please enter your name!");
        return;
    }
    cont1.setAttribute("class", "none")
    cont2.setAttribute("class", "container-2")
    video.play();

    
});
