var video = document.getElementById("player1");

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video.autoplay = false; /*html已经false了*/
    console.log("Autoplay is set to false");
    video.loop = false;
    console.log("Loop is set to false");
});

document.getElementById("play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%"; /*滑动没变化*/
});

document.getElementById("pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.getElementById("slower").addEventListener("click", function() {
    console.log("Slow down video");
    video.playbackRate *= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function() {
    console.log("Speed up video");
    video.playbackRate /= 0.9; /*what is 5 digits of 100%*/
    console.log("New speed is " + video.playbackRate);
});

document.getElementById("skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime += 15;
    }
    console.log("Video current time is " + video.currentTime);
});

document.getElementById("mute").addEventListener("click", function() {
    if (video.muted) { /*why加这句*/
        video.muted = false;
        console.log("Unmuted");
        document.getElementById("mute").innerHTML = "Mute";
    } else {
        video.muted = true;
        console.log("Muted");
        document.getElementById("mute").innerHTML = "Unmute";
    }
});

document.getElementById("slider").addEventListener("input", function() {
    video.volume = document.getElementById("slider").value / 100;
    /*document.getElementById("volume").innerHTML = document.video.volume * 100 + "%";为啥这个不行*/
    document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";
    console.log("The current volume is " + video.volume); /*需要加span吗*/
});

document.getElementById("vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});