let AA = document.getElementById("out1");
let BB = document.getElementById("out2");
let CC = document.getElementById("out3");
let DD = document.getElementById("out4");
let EE = document.getElementById("out5");
let FF = document.getElementById("out6");
let GG = document.getElementById("out7");

document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // Get User Input
  let aa = document.getElementById("1").value;
  let bb = document.getElementById("2").value;
  let cc = document.getElementById("3").value;
  let dd = document.getElementById("4").value;
  let score = 0;
  if (aa.toLowerCase() === "king") {
    AA.innerHTML = "correct";
    AA.style.color = "green";
    score = score + 25;
  } else {
    AA.innerHTML = "incorrect";
    AA.style.color = "red";
  }
  if (bb.toLowerCase() === "queen") {
    BB.innerHTML = "correct";
    BB.style.color = "green";
    score = score + 25;
  } else {
    BB.innerHTML = "incorrect";
    BB.style.color = "red";
  }
  if (cc === "64") {
    CC.innerHTML = "correct";
    CC.style.color = "green";
    score = score + 25;
  } else {
    CC.innerHTML = "incorrect";
    CC.style.color = "red";
  }
  if (dd.toLowerCase() === "knight") {
    dd.innerHTML = "correct";
    dd.style.color = "green";
    score = score + 25;
  } else {
    DD.innerHTML = "incorrect";
    DD.style.color = "red";
  }
  FF.innerHTML = score;
  if (score === 0) {
    EE.innerHTML = 0;
    GG.innerHTML = "Don't give up";
  }
  if (score === 25) {
    EE.innerHTML = 1;
    GG.innerHTML = "Come on!";
  }

  if (score === 50) {
    EE.innerHTML = 2;
    GG.innerHTML = "Not bad";
  }
  if (score === 75) {
    EE.innerHTML = 3;
    GG.innerHTML = "Good job";
  }
  if (score === 100) {
    EE.innerHTML = 4;
    GG.innerHTML = "You are a chess master!";
  }
}
