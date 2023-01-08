var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");

function zoomin() {
  var img = document.getElementById("myImg");
  var currWidth = img.clientWidth;
  img.style.width = currWidth + 100 + "px";
}

function zoomout() {
  var img = document.getElementById("myImg");
  var currWidth = img.clientWidth;
  img.style.width = currWidth - 100 + "px";
}
