let inputKey = document.getElementById("inputText")
inputKey.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("submit-btn").click();
    }
});

function getInputText(){
    let inputData = document.getElementById("inputText").value;
    if(inputData.length == 7 || inputData == 7){
        playThala("/src/thala.mp4")
        if(inputData.length>1){
            const reasonText = inputData.split("").join(" + ")
            reasonText.concat(" = 7")
            const finalResult = reasonText.concat(" = 7")
            document.querySelector(".reason").innerHTML = `${finalResult}`
        }
    }else{
        document.querySelector(".reason").innerHTML = "Not a Thala"
    }
}


function playThala(source){   
    const videoElementclass = document.querySelectorAll('.thala-video')
    videoElementclass.forEach( (element) =>{
        const video = document.createElement('video')
        element.innerHTML = '';
        element.appendChild(video)
        video.setAttribute("src", `${source}`)
        video.setAttribute("autoplay", true);
        video.muted = true
    } )
}


