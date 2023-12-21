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
        }
        currentAudio = new Audio('/src/1.mp3');
        currentAudio.play();
    }else{
        playThala("/src/jayshah.mp4")
        document.querySelector(".reason").innerHTML = "Not a Thala"
        currentAudio = new Audio('/src/2.mp3');
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
        video.setAttribute("preload", "auto"); // Add preload attribute
        video.muted = true
        video.addEventListener('canplay', function() {
            // Video is ready to play, you can handle the display logic here
            video.play();
        });
    } );
}



