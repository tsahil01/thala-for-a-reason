let currentAudio;

let inputKey = document.getElementById("inputText")
inputKey.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("submit-btn").click();
    }
});


function getInputText(){
    document.querySelector('body').style.backgroundImage = 'none'; // removing bg
    let inputData = document.getElementById("inputText").value;

    if (currentAudio) {
        currentAudio.pause();
    }

    if(inputData.length == 7 || inputData == 7){
        playThala("/src/dhoni.mp4")
        if(inputData.length>1){
            const reasonText = inputData.toUpperCase().split("").join(" + ")
            reasonText.concat(" = 7")
            const finalResult = reasonText.concat(" = 7")
            document.querySelector(".reason").innerHTML = `${finalResult}`
            currentAudio = new Audio('/src/bolejokoyal.mp3');
            currentAudio.play();
        }
    }else{
        playThala("/src/jayshah2.mp4")
        document.querySelector(".reason").innerHTML = "Not a Thala"
        currentAudio = new Audio('/src/moyemoye.mp3');
        currentAudio.play();
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



