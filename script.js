let currentAudio;

let inputKey = document.getElementById("inputText")
inputKey.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("submit-btn").click();
    }
});


function getInputText(){
    document.querySelector(".reason").innerHTML = ""
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
            document.querySelector(".reason").innerHTML = ""
            document.querySelector(".reason").innerHTML = `${finalResult}`
        }
    }else{
        playThala("/src/jayshah.mp4")
        document.querySelector(".reason").innerHTML = ""
        document.querySelector(".reason").innerHTML = "Not a Thala"
        
    }
}


function playThala(source){   
    const videoElementclass = document.querySelectorAll('.thala-video');
    const loadingIndicator = document.querySelector('.loading-indicator');

    videoElementclass.forEach( (element) =>{
        const video = document.createElement('video');
        element.innerHTML = '';
        element.appendChild(video);

        // Show loading indicator while the video is loading
        loadingIndicator.style.display = 'block';

        video.setAttribute("src", `${source}`);
        video.setAttribute("autoplay", true);
        video.setAttribute("preload", "auto");
        video.muted = true;

        video.addEventListener('canplay', function() {
            // Video is ready to play, hide the loading indicator
            loadingIndicator.style.display = 'none';
            
            // Play the video
            video.play();
            if (currentAudio) {
                currentAudio.pause();
            }
            if (source.includes('dhoni.mp4')) {
                currentAudio = new Audio('/src/bolejokoyal.mp3');
            }else {
                currentAudio = new Audio('/src/moyemoye.mp3');
            }
            currentAudio.play();
        });

        // Handle video loading errors
        video.addEventListener('error', function() {
            loadingIndicator.style.display = 'none';
            console.error('Error loading video');
        });
    });
}



