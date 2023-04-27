// Поява поп-ап форми через 20 секунд
setTimeout(function () {
  var popup = document.getElementById("popup");
  popup.style.display = "block";

  var gotoFormBtn = document.getElementById("goto-form-btn");
  gotoFormBtn.addEventListener("click", function () {
    popup.style.display = "none";

    var form = document.getElementById("my-form");
    form.scrollIntoView({ behavior: "smooth" });
  });
}, 20000);

// Поява поп-ап форми при виході зі сторінки
var popupOnUnload = true;
window.addEventListener("mouseleave", function (event) {
  if (event.clientY < 0 && popupOnUnload) {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    popupOnUnload = false;

    var gotoFormBtn = document.getElementById("goto-form-btn");
    gotoFormBtn.addEventListener("click", function () {
      popup.style.display = "none";

      var form = document.getElementById("my-form");
      form.scrollIntoView({ behavior: "smooth" });
    });
  }
});
