let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnO = true // player O

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener('click', function(){
        if(turnO){
            box.innerText = "o";
            turnO = false;
        }else{
            box.innerText = "x";
            turnO = true;
        }
        box.disabled =true;
       checkWinner(); 
    })
});

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText =""
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, winner is ${winner} `;
    // displayimg();
    msgContainer.classList.remove("hide");
    
    disableBoxes();
}

// const displayimg = ()=>{
//     <img src = 'https://www.shutterstock.com/shutterstock/photos/1049534216/display_1500/stock-vector-congratulations-typography-lettering-handwritten-vector-for-greeting-1049534216.jpg'></img>
// }

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
};

const resetGame = ()=>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGamebtn.addEventListener('click',function(){
    resetGame();
});
resetbtn.addEventListener('click', function(){
    resetGame();
});

