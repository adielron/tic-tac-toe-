let btnRef = document.querySelectorAll(".button");
let btnRestart = document.getElementById("restart");
let message = document.getElementById("message");
let popup = document.querySelector(".popup")

xTurn = true;
count = 0;


let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
  ];



btnRef.forEach((element) =>{
    element.addEventListener("click", ()  => {
        if (xTurn) {
            xTurn = false;
            //Display X
            element.innerText = "X";
            element.disabled = true;
          } else {
            xTurn = true;
            //Display Y
            element.innerText = "O";
            element.disabled = true;
          }
          count++;
          if (count == 9) {
            drawFunction();
          }
          winChecker();
    }  )

});

//restart
btnRestart.addEventListener("click", ()=> {
    count = 0;
    enableButtons();
});

//Enable all buttons (For New Game and Restart)
const enableButtons = () => {
    btnRef.forEach((element) => {
      element.innerText = "";
      element.disabled = false;
    });
    popup.classList.add("hide");
  };


const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    //enable popup
    popup.classList.remove("hide");
  };


//Win Logic
const winChecker = () => {
    //Loop through all win patterns
    for (let i of winningPattern) {
      let [element1, element2, element3] = [
        btnRef[i[0]].innerText,
        btnRef[i[1]].innerText,
        btnRef[i[2]].innerText,
      ];
      if (element1 != "" && (element2 != "") & (element3 != "")) {
        if (element1 == element2 && element2 == element3) {
          //If all 3 buttons have same values then pass the value to winFunction
          winFunction(element1);
        }
      }
    }
  };



  const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        message.innerHTML = "  X Wins";
    } else {
        message.innerHTML = "  O Wins";
    }
  };

  //Function for draw
const drawFunction = () => {
    disableButtons();
    message.innerHTML = " Draw";
  };
  







  window.onload = enableButtons;
