const clickPlayer1 = document.getElementById("clickPlayer1");
const clickPlayer2 = document.getElementById("clickPlayer2");

function animateWavingHand1() {
  clickPlayer1.play();
  clickPlayer1.goToAndStop(0);
}

function animateWavingHand2() {
  clickPlayer2.play();
  animateWavingHand1();
}

LottieInteractivity.create({
  player: "#clickPlayer1",
  mode: "cursor",
  actions: [
    {
      type: "click",
      forceFlag: false,
    },
  ],
});

LottieInteractivity.create({
  player: "#clickPlayer2",
  mode: "cursor",
  actions: [
    {
      type: "click",
      forceFlag: false,
    },
  ],
});
