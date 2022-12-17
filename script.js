let btnRef = document.querySelectorAll(".button");
let btnRestart = document.querySelectorAll(".restart");

xTurn = true;
count = 0;

btnRestart.addEventListener("click", ()=>{
    btnRef.forEach((element) => {
        element.innerText = "";
    })
})

btnRef.forEach((element) =>{
    element.addEventListener("click", ()  => {
        console.log("click");
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
    }  )
})