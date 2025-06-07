function validateForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        alert("Please fill in all fields before proceeding.");
    } else {
        document.getElementById("userForm").style.display = "none";
        document.getElementById("videoSection").style.display = "block";
    }
}

let videoPlayer = document.getElementById("videoPlayer");

function playVideo() {
    videoPlayer.play();
}

function pauseVideo() {
    videoPlayer.pause();
}

function loopVideo() {
    videoPlayer.loop = !videoPlayer.loop;
}

function updateSubtitles() {
    let subtitles = document.getElementById("subtitles");
    let currentTime = videoPlayer.currentTime;

    if (currentTime < 5) {
        subtitles.innerText = "Welcome to Pioneer Exchange!";
    } else if (currentTime < 10) {
        subtitles.innerText = "We connect ideas with investors.";
    } else {
        subtitles.innerText = "Start your journey today.";
    }
}

videoPlayer.addEventListener("timeupdate", updateSubtitles);