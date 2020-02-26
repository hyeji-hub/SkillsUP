var openButton = document.querySelector(".open");
var closeButton = document.querySelector(".close");
var modal = document.querySelector(".modal");


openButton.addEventListener("click", function(event) {
    modal.classList.remove("hidden");
});

closeButton.addEventListener("click", function(event) {
    modal.classList.add("hidden");
});
