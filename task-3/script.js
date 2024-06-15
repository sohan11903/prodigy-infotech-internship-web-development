let currentPlayer = "X";
let target = false;
const printTurn = document.querySelector('.turn');
const box = document.querySelector('.box');
const winPlayer = document.querySelector('.winner');
const drawPlayer = document.querySelector('.draw');
let array = Array(9).fill(null);
function handleClick(ele){
    let id = Number(ele.id);
    if(array[id] !== null) return;
    if(target !== false) return;
    array[id] = currentPlayer;
    ele.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "0" : "X";
    printTurn.textContent = currentPlayer;
}

function checkWinner(){
    if((array[0]!== null && array[0] === array[1] && array[1] === array[2])||
    (array[3]!== null && array[3] === array[4] && array[4] === array[5])||
    (array[6]!== null && array[6] === array[7] && array[7] === array[8])||
    (array[0]!== null && array[0] === array[3] && array[3] === array[6])||
    (array[1]!== null && array[1] === array[4] && array[4] === array[7])||
    (array[2]!== null && array[2] === array[5] && array[5] === array[8])||
    (array[0]!== null && array[0] === array[4] && array[4] === array[8])||
    (array[2]!== null && array[2] === array[4] && array[4] === array[6])
){
    winPlayer.textContent = `Congratulation🎊, the winner is ${currentPlayer}`
    target=true;
    return;
}
if (!array.some(ele => ele === null)){
    drawPlayer.textContent = "draw!!😢";
    return;
}

}
document.querySelector('.reset-btn').addEventListener(
    'click',() => {
        window.location.reload(true);
    }
)