function render() {
    document.getElementById('board__words--alreadyUsed').innerHTML = `Lettres déjà utilisées : ${usedLetters.join('-')}`;
    document.getElementById('board__words--word').innerHTML = mimeArray.join(' ');
    
    document.getElementById('letter').value = '';
    document.getElementById('letter').focus();
}

function clearAlerts() {
    document.getElementById('board__words--warning').innerHTML = '';
    document.getElementById('board__words--success').innerHTML = '';
    document.getElementById('board__words--alert').innerHTML = '';
}

function clearHangman() {
    for(let i = 1; i < 7; i++) {
        document.querySelector(`.hangman__${i}`).hidden = true;
        document.querySelector(`.hangman__${i}`).classList.remove(`hangman__${i}--hanged`);
    }
    document.querySelector(".scaffold__rope--circle").classList.remove("scaffold__rope--hanged");
    document.querySelector(".scaffold__rope--length").classList.remove("scaffold__rope--extended");
}

function hangTheMan() {
    for(let i = 1; i < 7; i++) {
        document.querySelector(`.hangman__${i}`).classList.add(`hangman__${i}--hanged`);
    }
    document.querySelector(".scaffold__rope--circle").classList.add("scaffold__rope--hanged");
    document.querySelector(".scaffold__rope--length").classList.add("scaffold__rope--extended");
}

function reportLetter(letter) {
    document.getElementById("letter").value = letter;
    lockKeys();
};

function cleanInput() {
    document.getElementById('letter').value = '';
    unlockKeys();
};

function lockKeys() {
    let keys = document.getElementsByClassName("key");
    for(let key of keys) {
        key.disabled = true;
    };
};

function unlockKeys() {
    if(turn !== 0 && !wordArray.every(elt => elt === " ")) {
        let keys = document.getElementsByClassName('key');
        for(let key of keys) {
            if(!usedLetters.find(el => el === key.value)) {
                key.disabled = false;
            }
        };
    };
};
