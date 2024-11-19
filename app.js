let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let highScore = 0;


let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("start");
    started = true;
    // as ek baar hi game start kara na hai
    levelup();
  }
});

function flash(btn) {
  //game flash
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  //user se click karne pe
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  //random button choose karna hai(0-3)

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`); 
  //   console.log(randIdx);
  //   console.log(randColor);
  //   console.log(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);

  flash(randBtn); //game
}

let allbtns = document.querySelectorAll(".btn");
for (i of allbtns) {
  i.addEventListener("click", press);
}

function press() {
  //user press

  let btn = this;
  userflash(btn);

  usercolor = btn.getAttribute("id");
  userSeq.push(usercolor);
  console.log(userSeq);
  checkans(userSeq.length - 1);
}

function checkans(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game over! Your score was <B>${level}</B><BR> Press any key to restart`;
    if (level > highScore) {
        highScore = level;
      }
  
      h3.innerHTML = `Highest score is <B>${highScore}</B>`;
   

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}


function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
