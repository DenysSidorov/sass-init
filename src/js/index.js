console.log(43);

document.addEventListener("DOMContentLoaded", function (event) {
  var body = document.getElementsByTagName("body");
  if (body && body[0]) {
    body[0].className += " load";
  }
});
