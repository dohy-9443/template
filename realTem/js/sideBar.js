document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
  });

  const lists = document.querySelectorAll(".list");
  for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("click", function () {
      let j = 0;
      while (j < lists.length) {
        lists[j++].className = "list";
      }
      lists[i].className = "list active";
    });
  }

  // home
  const typing = document.getElementById("typing");

  let typewriter = new Typewriter(typing, { loop: true });

  typewriter
    .typeString("안녕하세요!")
    .pauseFor(2500)
    .deleteAll()
    .typeString("FRONT-END 개발자를 꿈꾸는!")
    .pauseFor(2500)
    .deleteAll()
    .typeString("백동현입니다!")
    .pauseFor(2500)
    .start();
});
