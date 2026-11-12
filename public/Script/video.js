/* video.js - play/pause button for the About Me video
   From the INFR3120 Week 2 lecture ("Using JavaScript Controls") */

// Find the video on the page using its id ("video")
let myvideo = document.getElementById("video");

// Runs when the button is clicked (onclick="playPause()" in about.ejs):
// if the video is paused, play it; otherwise pause it
function playPause()
{
    if (myvideo.paused)
        myvideo.play();
    else
        myvideo.pause();
}