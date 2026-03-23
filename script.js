// const card = document.querySelector(".question-btn");
// const plusBtn = document.querySelector(".img-plus-1");
// const minusBtn = document.querySelector(".img-minus-1");

// const hiddenPara = document.querySelector(".hidden");

// plusBtn.addEventListener("click", (e) => {
//   hiddenPara.classList.toggle("hidden");
//   plusBtn.classList.toggle("img-plus-1");
//   minusBtn.classList.toggle("img-minus-1");
// });

//Select all question containers
const faqs = document.querySelectorAll(".section-qa");

faqs.forEach((faq) => {
  const btn = faq.querySelector(".question-btn");
  const plusImg = faq.querySelector(".img-plus");
  const minusImg = faq.querySelector(".img-minus");
  const paragraph = faq.querySelector(".hidden-p");

  // Initially show plus, hide minus
  plusImg.style.display = "inline";
  minusImg.style.display = "none";

  btn.addEventListener("click", () => {
    paragraph.classList.toggle("hidden-p");

    if (paragraph.classList.contains("hidden-p")) {
      plusImg.style.display = "inline";
      minusImg.style.display = "none";
    } else {
      plusImg.style.display = "none";
      minusImg.style.display = "inline";
    }
  });
});
