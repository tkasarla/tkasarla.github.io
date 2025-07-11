---
layout: default
title: Art
nav_exclude: True
---

<div class="art-intro" markdown="1">
I do digital art, watercolor paintings, resin art and algorithmic art (using [p5.js](https://p5js.org/)). This page is for the algorithmic art I create.

**_To be updated!_**
</div>

<div class="art-gallery">
  <div class="art-item">
    <div class="video-container">
      <video id="video1" controls>
        <source src="/assets/mister-spock.mp4" type="video/mp4">
        Your browser does not support HTML video.
      </video>
    </div>
    <div class="art-description">
      <p><strong>Star Trek: Warp speed!</strong> [<a href="https://github.com/tkasarla/mister-spock-warp-speed">code</a>]</p>
      <button onclick="playPause()" class="paper-button">Play/Pause</button>
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
