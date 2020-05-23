---
title: Counting Clicks
layout: default
author: Mark M.
date: 2020-05-22
dom_ref_page: https://www.w3schools.com/js/js_htmldom_navigation.asp
categories: [webdev, snippets]
tags: [javascript, scripting, webdev, browser, languages, OOP, object-oriented programming]
---

This is the first in a series about learning and using Javascript.  Unlike other blog posts, however, this won't be a bottom-to-top tutorial.

The goal with this post is to explore simple clicking within a browser and to count the cumulative number of clicks. My browser of choice is Firefox,

~~~javascript
// Constant reset value
const initValue = 0;

document.addEventListener("DOMContentLoaded", function(event) {
  let currValue = sessionStorage.getItem("clickcount");
  if (currValue == "") {
    sessionStorage.setItem("clickcount", initValue);
  }
  updateOutput(currValue);
});



function updateOutput(sessionValue) {
  // Tense of time(s).
  let tenseCount = Number(sessionValue) == 1 ? 'time' : 'times';  
  document.getElementById("result").innerHTML = `You clicked the button ${sessionValue} ${tenseCount}.`;
}



function clickrement() {
  let currentValue = sessionStorage.getItem("clickcount");
  currentValue = Number(currentValue) + 1;
  // Update session storage value
  sessionStorage.setItem("clickcount", currentValue);

  updateOutput(currentValue);
}


function resetter() {
  sessionStorage.setItem("clickcount", initValue);
  updateOutput(initValue);
}

// Adding listeners to the two buttons
document.getElementById("btn-increment").addEventListener("click", function() {
  clickrement();
})


document.getElementById("btn-reset").addEventListener("click", function() {
  resetter();
})
~~~


For example, we have a click counter and reset button for testing purposes on this page:

<div class="uk-container uk-container-xsmall uk-align-left uk-button-group">
  <button class="uk-button uk-button-default" id="btn-increment" type="button">Click me!</button>
  <button class="uk-button uk-button-default" id="btn-reset" type="button">Reset!</button>
</div>
<div id="result"></div>


<script>
// Constant reset value
const initValue = 0;

document.addEventListener("DOMContentLoaded", function(event) {
  let currValue = sessionStorage.getItem("clickcount");
  if (currValue == "") {
    sessionStorage.setItem("clickcount", initValue);
  }
  updateOutput(currValue);
});

function updateOutput(sessionValue) {
  // Tense of time(s).
  let tenseCount = Number(sessionValue) == 1 ? 'time' : 'times';  
  document.getElementById("result").innerHTML = `You clicked the button ${sessionValue} ${tenseCount}.`;
}


function clickrement() {
  let currentValue = sessionStorage.getItem("clickcount");
  currentValue = Number(currentValue) + 1;
  // Update session storage value
  sessionStorage.setItem("clickcount", currentValue);

  updateOutput(currentValue);
}


function resetter() {
  sessionStorage.setItem("clickcount", initValue);
  updateOutput(initValue);
}

// Adding listeners to the two buttons
document.getElementById("btn-increment").addEventListener("click", function() {
  clickrement();
})


document.getElementById("btn-reset").addEventListener("click", function() {
  resetter();
})

</script>