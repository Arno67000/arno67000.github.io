let db;
let mimeArray = ['_','_','_','_','_','_','_','_'];
let usedLetters = [];
let chosenIndex;
let word;
let wordArray;
let turn;
let stoolParts = document.getElementsByClassName('scaffold__stool');
let stoolAnimation = 'scaffold__stool--animated';
let stoolAnimationReversed = 'scaffold__stool--reversed';
let diags = document.getElementsByClassName('scaffold__diag');
let diagAnimation = 'scaffold__diag--animated';
let base = Array.of(document.querySelector(".scaffold__base"));
let baseAnimation = 'scaffold__base--animated';
let mast = Array.of(document.querySelector(".scaffold__mast"));
let mastAnimation = 'scaffold__mast--animated';
let horiz = Array.of(document.querySelector(".scaffold__horizontal"));
let horizAnimation = 'scaffold__horizontal--animated';
let ropeParts = document.getElementsByClassName('scaffold__rope');
let ropeStartAnimation = 'scaffold__rope--animated';


onload = async function() {

    await dbFetch();
    
    newGame();
}