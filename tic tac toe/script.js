//accessing elements 
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO =true; //playerX,PlayerO

//storing winning patterns in array
const winPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
];

//to reset game
const resetGame =()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

//event listener
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");// to count how many times box was clicked
        
        if (turnO){
            box.innerText="O";
            box.classList.add("O")
            turnO = false;
            
        }
        else{
            box.innerText="X";
            box.classList.add("X")
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
} );

// to diable boxes after printing winner
const disableBoxes = () =>{
    for(let box of boxes)
      {
        box.disabled = true;
      }
};

// to enable boxes after printing winner
const enableBoxes = () =>{
    for(let box of boxes)
      {
        box.disabled = false;
         box.innerText=""
         box.classList.remove("X", "O");// TO reset class box function

      }
};
 
// to show winner
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;//backtick is used in string
    msgContainer.classList.remove("hide");  //hiden section will be removed temporarily
    disableBoxes();// TO DISABLE boxes after winner prints
     // to avoid multiple winner msg
};


// to check winner
const checkWinner = () =>{
    for( let pattern of winPattern){
            let pos1Val = boxes[pattern [0]].innerText;

            let pos2Val = boxes[pattern [1]].innerText;

            let pos3Val = boxes[pattern [2]].innerText;
             if (pos1Val !="" && pos2Val !="" && pos3Val !=""){
                if(pos1Val === pos2Val &&pos2Val=== pos3Val){
                    console.log("Winner", pos1Val);
                    showWinner(pos1Val);
                    return;
                    
                }
                // for(let idx of pattern){
                //     boxes[idx].classList.add("win");
                // }

             }


    }

};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);