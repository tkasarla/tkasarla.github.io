---
layout: default
title: Art
nav_exclude: True
---
I do digital art, watercolor paintings, resin art and algorithmic art (using [p5.js](https://p5js.org/)). This page is for the algorithmic art I create.


**_To be updated!_**

<style>

  table{
    border-collapse: collapse;
    box-shadow: none;
  }

  table, tr, td{
    border: none;

  th, td {
    padding: 0px;
  }
  }

</style>


<table cellspacing="0" cellpadding="0">
  <tr>
    <td>
      <div style="text-align:left">
        <button onclick="playPause()">Play/Pause</button>
        <br><br>
        <video id="video1" width="240">
        <source src="/assets/mister-spock.mp4" type="video/mp4">
          <source src="mov_bbb.ogg" type="video/ogg">
          Your browser does not support HTML video.
        </video>
      <p> Warp speed from Star Trek [<a href="https://github.com/tkasarla/mister-spock-warp-speed">code</a>] </p>
      </div>
    </td>
    <td></td>
    <td></td>
  </tr>
</table>

<script>
var myVideo = document.getElementById("video1");

function playPause() {
  if (myVideo.paused)
    myVideo.play();
  else
    myVideo.pause();
}

</script>
