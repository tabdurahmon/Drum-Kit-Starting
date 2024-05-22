const drums = document.querySelectorAll(".drum");

drums.forEach((drum) => {
  drum.addEventListener("click", () => {
    const crash = new Audio("./sounds/crash.mp3");
    crash.play();
  });
});
