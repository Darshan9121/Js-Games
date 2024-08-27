var Player = "P1";
var score = 0;
var wins=false;

let user = document.getElementById("user");


let matrix = Array(9).fill(0);

var Player1 = {
    name:"P1",
    symbol:"X",
    place:[]
}
var Player2 = {
    name:"P2",
    symbol:"O",
    place:[]
}
var notification = document.querySelector("h2");

function enableNotification(){
    let notification = document.querySelector("h2");
    notification.classList.remove("hidden");
    notification.classList.add("block");
}

function check(){
    if((matrix[0] == "P1" && matrix[1] == "P1" && matrix[2] == "P1") ||(matrix[3] == "P1" && matrix[4] == "P1" && matrix[5] == "P1") || (matrix[6] == "P1" && matrix[7] == "P1" && matrix[8] == "P1") || (matrix[0] == "P1" && matrix[4] == "P1" && matrix[8] == "P1") || (matrix[2] == "P1" && matrix[4] == "P1" && matrix[6] == "P1") || (matrix[0]=="P1" && matrix[3] == "P1" && matrix[6] == "P1") || (matrix[1]=="P1" && matrix[4] == "P1" && matrix[7] == "P1") || (matrix[2]=="P1" && matrix[5] == "P1" && matrix[8] == "P1")){
        alert("U1 winds");
       enableNotification();
       notification.classList.add("text-green-500");
       notification.classList.add("border-green-500");
        notification.innerText = "Congratulation User1 you won the game";
        user.innerText ="User1 Won";
        wins=true;
    }
   else if((matrix[0] == "P2" && matrix[1] == "P2" && matrix[2] == "P2") ||(matrix[3] == "P2" && matrix[4] == "P2" && matrix[5] == "P2") || (matrix[6] == "P2" && matrix[7] == "P2" && matrix[8] == "P2") || (matrix[0] == "P2" && matrix[4] == "P2" && matrix[8] == "P2") || (matrix[2] == "P2" && matrix[4] == "P2" && matrix[6] == "P2")){
        alert("U2 winds");
        enableNotification();
      notification.classList.add("text-green-500");
      notification.classList.add("border-green-500");
        notification.innerText = "Congratulation User2 you won the game";
        user.innerText ="User2 Won";
        wins=true;
    }else if(draw()){
        wins=true;
        enableNotification();
        notification.classList.add("text-yellow-500");
        notification.classList.add("border-yellow-500");
        notification.innerText = "Sorry!but match is draw";
        user.innerText ="Draw";
        alert("draw");
    }

    if(wins){
    let btns = document.getElementsByTagName("button");

   for(let obj of btns){
    obj.disabled = true;
   }
}
    
    // let newmatrix = 
}

function draw() {
    if (!matrix.includes(0)) return true;
}
function play() {
    let target = event.target;
    alert(event.target.innerText);
    let index = Number(event.target.innerText);
    let arrayindex = Math.floor(index/3);
   

    if(Player == "P1"){
        if(Player1.place.includes(index) || Player2.place.includes(index)){
            alert("Already Selected found");
        }else{
        target.innerText = Player1.symbol;
        Player1.place.push(index);
        matrix[index-1]="P1";
        console.log("P1 "+Player1.place.toString());
        // matrix[arrayindex][index/3];
        user.innerText = "Player2's turn";
        Player = "P2";}
        check();
    }
    else if(Player == "P2"){
        if(Player2.place.includes(index) || Player1.place.includes(index)){
            alert("Already Selected found");
        }else{
            target.innerText = Player2.symbol;
        Player2.place.push(index);
        matrix[index-1]="P2";
        console.log("P2 "+Player2.place.toString());
        user.innerText = "Player1's turn";
        Player = "P1";}
        check();
    }

    console.log(matrix.toString())
  
}

