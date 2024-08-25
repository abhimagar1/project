document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("chnageTextButton");

  button.addEventListener("click", function() {

    const text = document.getElementById("text");

    text.textContent = "The text has been changed";

    text.style.color = "blue";
  });
});
