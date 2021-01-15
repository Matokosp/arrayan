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

    if (i >= 0) classes.splice(i, 1);
    else classes.push("menu_show");
    menuResponsive.className = classes.join(" ");
  }
}

navButton.onclick = displayNav;

// STAFF MEMBER INFO BUTTON

const plus = $(".staff-plus");
const infoHide = $(".staff-info-hide");

$(plus).on("click", function () {
  $(this)
    .parent(".staff-item-bott")
    .siblings(".staff-item-info")
    .addClass("staff-info-show");
  $(this).parent(".staff-item-bott").hide();
});

$(infoHide).on("click", function () {
  $(this).parents(".staff-item-info").removeClass("staff-info-show");
  $(this).parents(".staff-item-info").siblings(".staff-item-bott").show();
});

const sectionOne = $("#sectionOne").offset();
const sectionTwo = $("#sectionTwo").offset();

// DESKTOPS

// ---------------------------------

var x = window.matchMedia("(min-width: 1000px)");

function myFunction(x) {
  if (x.matches) {
    // If media query matches

    $(".staff-item").on("mouseenter", function () {
      $(this).children(".staff-item-info").addClass("staff-info-show");
    });
    $(".staff-item").on("mouseleave", function () {
      $(this).children(".staff-item-info").removeClass("staff-info-show");
    });

    var windowHeight = $(window).height();
    var position = $(window).scrollTop();
    // SCROLL UP & DOWN

    $(window).scroll(function () {
      if ($(window).scrollTop() >= sectionTwo.top - 150) {
        $(".menu").addClass("menu-white");
        $(".menu").children("a").addClass("menu-a-green");
        $(".laptop-logo img:nth-child(1)").css("display", "none");
        $(".laptop-logo img:nth-child(2)").css("display", "block");
      } else {
        $(".menu").removeClass("menu-white");
        $(".menu").children("a").removeClass("menu-a-green");
        $(".laptop-logo img:nth-child(1)").css("display", "block");
        $(".laptop-logo img:nth-child(2)").css("display", "none");
      }
    });
  }
}

myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

function validateForm(e) {
  let name = document.getElementById("formName");
  let mail = document.getElementById("formMail");
  let asunto = document.getElementById("formAsunto");
  let mensaje = document.getElementById("mensaje");

  if (
    validateName(name) &
    validateMail(mail) &
    validateAsunto(asunto) &
    validateMensaje(mensaje)
  ) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

function validateName(name) {
  let regexExpression = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

  if (name.value.match(regexExpression)) {
    unSetNameError();
    return true;
  } else {
    setNameError();
    return false;
  }
}

function unSetNameError() {
  let nameError = document.getElementById("nameError");
  nameError.innerHTML = "";
}

function setNameError() {
  let nameError = document.getElementById("nameError");
  nameError.innerHTML = "El Nombre no es valido";
}

function validateMail(mail) {
  let regexExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (mail.value.match(regexExpression)) {
    unSetMailError();
    return true;
  } else {
    setMailError();
    return false;
  }
}

function unSetMailError() {
  let mailError = document.getElementById("mailError");
  mailError.innerHTML = "";
}

function setMailError() {
  let mailError = document.getElementById("mailError");
  mailError.innerHTML = "El Email no es valido";
}

function validateAsunto(asunto) {
  if (asunto.value) {
    unSetAsuntoError();
    return true;
  } else {
    setAsuntoError();
    return false;
  }
}

function unSetAsuntoError() {
  let asuntoError = document.getElementById("asuntoError");
  asuntoError.innerHTML = "";
}

function setAsuntoError() {
  let asuntoError = document.getElementById("asuntoError");
  asuntoError.innerHTML = "El Asunto no puede estar vacio";
}

function validateMensaje(mensaje) {
  if (mensaje.value) {
    unSetMensajeError();
    return true;
  } else {
    setMensajeError();
    return false;
  }
}

function unSetMensajeError() {
  let mensajeError = document.getElementById("mensajeError");
  mensajeError.innerHTML = "";
}

function setMensajeError() {
  let mensajeError = document.getElementById("mensajeError");
  mensajeError.innerHTML = "El Mensaje no puede estar vacio";
}
