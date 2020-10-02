document.addEventListener("DOMContentLoaded", function (event) {
  showBody();
  showHideMenu();
});

// show body with duration
function showBody() {
  var body = document.getElementsByTagName("body");
  if (body && body[0]) {
    body[0].className += " load";
  }
}

// show/hide main menu
function showHideMenu() {

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  // var header = document.getElementById('rd_head');
  var header = document.getElementById('rd_menu');

  var checkScroll = function () {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function (direction, curScroll) {
    //replace 52 with the height of your header in px
    if (direction === 2 && curScroll > 700) {
      header.classList.add('hide');
      prevDirection = direction;
    } else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);

};
