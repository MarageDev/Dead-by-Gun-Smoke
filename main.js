
"use strict";var sections=Array.from(document.querySelectorAll("section")),iframe=document.querySelector("iframe");window.addEventListener("scroll",function(){sections.forEach(function(e){e.getBoundingClientRect().top<document.documentElement.clientHeight/1.5&&e.classList.add("show")})}),document.querySelector("#s1").style.height=document.documentElement.clientHeight+"px",window.addEventListener("resize",function(){return document.querySelector("#s1").style.height=document.documentElement.clientHeight+"px"}),iframe.style.height=.5625*iframe.offsetWidth+"px",window.addEventListener("resize",function(){return iframe.style.height=.5625*iframe.offsetWidth+"px"});var videoID,APIKEY="AIzaSyC5J1lBELEgCPIK9XP2_eJk3UCW-t6KwTg";fetch("https://www.googleapis.com/youtube/v3/search?key=".concat(APIKEY,"&channelId=UCfNjj30JZcDJGsw3TMUnhMA&part=snippet,id&order=date&maxResults=1")).then(function(e){return e.json()}).then(function(e){videoID=e.items[0].id.videoId,document.querySelector(".news").style.backgroundImage="linear-gradient(90deg, #111314 65%, rgba(17, 19, 20, 0.4)), url(".concat(e.items[0].snippet.thumbnails.high.url,")"),document.querySelector(".news h4").innerHTML=e.items[0].snippet.title,document.querySelector(".news a").setAttribute("href","https://youtu.be/".concat(e.items[0].id.videoId)),document.querySelector(".news a").innerHTML="https://youtu.be/".concat(e.items[0].id.videoId)}).then(function(){fetch("https://www.googleapis.com/youtube/v3/videos?key=".concat(APIKEY,"&id=").concat(videoID,"&part=snippet")).then(function(e){return e.json()}).then(function(e){var e=e.items[0].snippet.description.split("\n"),n=[];e.forEach(function(e,t){e.includes("http")||""===e||n.push(e)}),document.querySelector(".news p").innerHTML=n.join("\n").slice(0,200)+"..."})});

