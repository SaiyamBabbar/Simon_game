// let gameseq = [];
// let userseq = [];

// let btns = ["yellow", "red", "blue", "green"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function () {
//   if (started == false) {
//     console.log("game start");
//     started = true;

//     levelUp();
//   }
// });

// function gameFlash(btn) {
//   btn.classList.add("flash");
//   setTimeout(function () {
//     btn.classList.remove("flash");
//   }, 250);
// }

// function userFlash(btn) {
//   btn.classList.add("userflash");
//   setTimeout(function () {
//     btn.classList.remove("userflash");
//   }, 250);
// }

// function levelUp() {
//   level++;
//   h2.innerText = `level ${level}`;

//   let randIdx = Math.floor(Math.random() * 3);
//   let randColor = btns[randIdx];
//   let randBtn = document.querySelector(`.${randColor}`);
//   gameseq.push(randColor);
//   console.log(gameseq);
//   gameFlash(randBtn);
// }

// function btnPress() {
//   console.log(this);
//   let btn = this;
//   userFlash(btn);

//   usercolor=btn.
// }

// let allBtns = document.querySelectorAll(".btn");
// for (btn of allBtns) {
//   btn.addEventListener("click", btnPress);
// }

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btncolors = ["yellow", "red", "blue", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

const gameFlash = (btn) => {
  btn.classList.add("gameflash");
  setTimeout(() => {
    btn.classList.remove("gameflash");
  }, 200);
};

const userFlash = (btn) => {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 200);
};

let levelUp = () => {
  userSeq = [];
  level++;
  h2.innerText = `Level: ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randomcolor = btncolors[randIdx];
  let randBtn = document.querySelector(`.${randomcolor}`);
  gameSeq.push(randomcolor);
  console.log(gameSeq);
  gameFlash(randBtn);
};

function match(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = `Game Over : your score is ${level}, Press any key to start`;
    di;
  }
}

function btnPress(event) {
  userSeq.push(event.target.id);
  console.log(userSeq);
  userFlash(this);
  match(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
