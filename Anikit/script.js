// Function to hide the loading screen after a delay
function hideLoadingScreen() {
    var loadingScreen = document.getElementById("loading");
    // Hide the loading screen after a delay (e.g., 2 seconds)
    setTimeout(function() {
        loadingScreen.style.display = "none";
    }, 2000); // Adjust the delay time as needed (in milliseconds)
}

window.onload = function() {
    // Call the function to hide the loading screen
    hideLoadingScreen();

    var img = document.getElementById("img1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("a.mp3");

    // Preload the audio
    audio.preload = "auto";

    // Function to play the sound
    function playSound() {
        // Check if the audio is already playing and restart if needed
        if (!audio.paused) {
            audio.currentTime = 0;
        }
        audio.play();
    }

    // Function to increment score
    function inc() {
        score++;
        count.innerHTML = score;
    }

    // Handle mouse events
    img.addEventListener('mousedown', function (){
        img.src = "image/anigay.png";
        inc();
        playSound();
    });

    img.addEventListener('mouseup', function (){
        img.src = "image/aninor.png";
    });

    // Handle touch events
    img.addEventListener('touchstart', function (event){
        event.preventDefault(); // Prevent default touchstart action
        img.src = "image/anigay.png";
        inc();
        playSound();
    });

    img.addEventListener('touchend', function (event){
        event.preventDefault(); // Prevent default touchend action
        img.src = "image/aninor.png";
    });
};
