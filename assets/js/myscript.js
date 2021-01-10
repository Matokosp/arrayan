// WINDOW VH

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

// SCROLL WINDOW TO ID

$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});



// MENU
var navButton = document.getElementById("navButton");
var menuResponsive = document.getElementById("menu");
var hambIconOne = document.getElementById("hambIconOne");
var hambIconTwo = document.getElementById("hambIconTwo");
var hambIconThree = document.getElementById("hambIconThree");

function displayNav() {

if (menuResponsive.classList) {
  menuResponsive.classList.toggle("menu_show");
  hambIconOne.classList.toggle("hamburger_icon_one");
  hambIconTwo.classList.toggle("hamburger_icon_two");
  hambIconThree.classList.toggle("hamburger_icon_three");
} else {
  // crossborwser For IE9
  // according to w3 schools
  // I've never personally used this method
  var classes = menuResponsive.className.split(" ");
  var i = classes.indexOf("menu_show");

  if (i >= 0)
    classes.splice(i, 1);
  else
    classes.push("menu_show");
    menuResponsive.className = classes.join(" ");
}
}

navButton.onclick = displayNav;


// STAFF MEMBER INFO BUTTON

const plus = $('.staff-plus');
const infoHide = $('.staff-info-hide');

$(plus).on('click', function(){
    $(this).parent('.staff-item-bott').siblings('.staff-item-info').addClass('staff-info-show');
    $(this).parent('.staff-item-bott').hide();
});

$(infoHide).on('click', function(){
    $(this).parents('.staff-item-info').removeClass('staff-info-show');
    $(this).parents('.staff-item-info').siblings('.staff-item-bott').show();
});

