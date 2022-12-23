const allProfiles = document.querySelectorAll('.profiles');
const allRedDot = document.querySelectorAll('.red-dot');
const h1Span = document.querySelector(".count");
const markButton = document.querySelector("h2");

var count = h1Span.innerText;

markButton.addEventListener("click", () => {

  allRedDot.forEach((redDot) => {
    redDot.classList.remove('red-dot');
    count = 0;
    h1Span.innerText = count;
    markButton.innerText = "Marked All As Read";
  });
});


allRedDot.forEach((targetRedDot) => {

  targetRedDot.addEventListener("click", () => {

    var targetRedDotClass = targetRedDot.classList.value.slice(19);

    if (targetRedDotClass === 'red-dot') {

      if (count <= 0) {
        count = 0;
      } else {
        count--;
      }
      h1Span.innerText = count;

      if (count === 0) {
        markButton.innerText = "Marked All As Read";
      }
    }
    targetRedDot.classList.remove('red-dot');
  });
});
