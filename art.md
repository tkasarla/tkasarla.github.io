---
layout: default
title: Art
nav_exclude: True
---
I do digital art, watercolor paintings, resin art and algorithmic art (using [p5.js](https://p5js.org/)). This page is for the algorithmic art I create.


**_To be updated!_**

<div class="row">
    <div class="col-sm-4 col-xs-12">
    <div style="text-align:center">
      <button onclick="playPause()">Play/Pause</button>
      <br>
      <video id="video1" width="240">
      <source src="/assets/mister-spock.mp4" type="video/mp4">
        Your browser does not support HTML video.
      </video>
    <p style="text-align:left">Star Trek: Warp speed! [<a href="https://github.com/tkasarla/mister-spock-warp-speed">code</a>]</p>
    </div>
    </div>

</div>



<script>
var myVideo = document.getElementById("video1");

function playPause() {
  if (myVideo.paused)
    myVideo.play();
  else
    myVideo.pause();
}

</script>
