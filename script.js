var isMobile = false; //initiate as false
// device detection
if (window.screen.width < 800) {
  isMobile = true;
}

if (isMobile) {
  var header = document.getElementById("header-container");
  header.style.height = window.innerHeight.toString() + "px";
  var cards = document.getElementById("card-container");
  cards.style.marginTop = "20px";
  cards.style.flexDirection = "column";

  var detail = document.getElementsByClassName("update-detail");
  for (var index = 0; index < detail.length; index++) {
    detail[index].style.opacity = 1;
  }
}
var buttons = document.getElementsByClassName("button");

var curPage = 1;

function changePage(pageNum) {
  if (pageNum === curPage) return;
  var lastPage = "page" + curPage;
  buttons[curPage - 1].classList.remove("active-button");
  buttons[pageNum - 1].classList.add("active-button");

  curPage = pageNum;
  var items = document.getElementsByClassName("page" + curPage);
  var lastItems = document.getElementsByClassName(lastPage);
  for (let i of items) {
    i.classList.add("visible");
  }
  for (let i of lastItems) {
    i.classList.remove("visible");
  }
}
