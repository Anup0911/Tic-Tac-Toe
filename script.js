let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset-btn");
let para=document.querySelector(".win");

console.log(boxes)

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        // console.log("box is clicked");
        if (turnO){//check if player O's turn
            box.style.color='pink';
            box.innerText='O';
            turnO=false;
        }
        else{//else player X's turn
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;
        checkwinner()
    })
});

reset.addEventListener('click',gamereset);
function gamereset(){
    for(box of boxes){
        box.disabled=false;
        box.innerText='';
        box.style.backgroundColor="#2E4052";
        para.innerText=""; 
        turnO=true;        
    }
}

let winner

function checkwinner(){
    for (pattern of winPatterns){
        let pos1=pattern[0];
        let pos2=pattern[1];
        let pos3=pattern[2];
        // console.log(pos1,pos2,pos3)
        // console.log(boxes[pos1],boxes[pos2],boxes[pos3])

        if( boxes[pos1].innerText!=='' && boxes[pos2].innerText!=='' && boxes[pos3].innerText!==''){
            if(boxes[pos1].innerText===boxes[pos2].innerText&& boxes[pos2].innerText===boxes[pos3].innerText){
                winner=boxes[pos1].innerText;
                console.log("Winner is: ",boxes[pos1].innerText);
                para.style.visibility='visible';
                para.innerText=`Congratulations player ${winner} won `
                for(box of boxes){
                    box.disabled=true;
                    highlight(pos1,pos2,pos3)
                }
                break;
            }
        }
    }
}
const highlight=(pos1,pos2,pos3)=>{
    boxes[pos1].style.backgroundColor="aliceblue";
    boxes[pos2].style.backgroundColor='aliceblue';
    boxes[pos3].style.backgroundColor='aliceblue';
};
