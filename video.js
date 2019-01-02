function toggleMute() {

    var video = document.getElementById("bg_vid__video");

    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }

}