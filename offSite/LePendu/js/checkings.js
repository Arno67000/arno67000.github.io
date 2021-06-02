function aseptWord(word) {
    return word.replace(/[éèêë]+/g, 'e')
                .replace(/[àâä]+/g, 'a')
                .replace(/[ïî]+/g, 'i')
                .replace(/[ôö]+/g, 'o')
                .replace(/[ùüû]+/g, 'u')
                .replace(/[ç]+/g, 'c')
                .toUpperCase();
}

function checkForSigns(array) {
    for(let i = 0; i<array.length; i++) {
        if(array[i] === '-') {
            newGame();
        }
    };
}

function checkLetter() {
    clearAlerts();

    let input = document.getElementById('letter').value;

    if(input.match(/[a-zA-Z]{1}/)) {
        let letter = input.toUpperCase();

        if(usedLetters.find(el => el === letter)) {
            document.getElementById('board__words--warning').innerHTML = "Tu as déjà utilisé cette lettre. Essayes-en une autre !!";
            render();
        } else {
            let count = 0;
            for(i=0; i<wordArray.length; i++) {
                if(wordArray[i] === letter) {
                    mimeArray.splice(i, 1, letter);
                    wordArray.splice(i, 1, ' ');
                    count++;
                }
            };
            usedLetters.push(letter);
            if(count === 0) {
                turn--;
                if(turn !== 0) {
                    document.querySelector(`.hangman__${turn}`).hidden = false;
                };
            };
            unlockKeys();
            render();
            if(turn === 0 || wordArray.every(elt => elt === " ")) {
                document.getElementById('letter').disabled = true;
                document.getElementById('submit').disabled = true;
                document.getElementById('new').disabled = false;
                disableKeyboard();
                if(turn === 0 && !wordArray.every(elt => elt === " ")) {
                    animate(stoolParts, stoolAnimationReversed);
                    hangTheMan();
                    document.getElementById('board__words--alert').innerHTML = `Perdu !! Il fallait trouver le mot : ${word}`;
                } else {
                    document.getElementById('board__words--success').innerHTML = 'Félicitations !! Vous avez gagné !!';
                };
            };
        };   
    } else if(turn !== 0 && !wordArray.every(elt => elt === " ")) {
        document.getElementById('board__words--alert').innerHTML = "Tu dois entrer 1 lettre majuscule ou minuscule";
        render();
    } else {
        document.getElementById('board__words--alert').innerHTML = 'Clique sur "Nouvelle Partie" pour rejouer';
    };
};


function disableKeyboard() {
    let keys = document.getElementsByClassName('key');
    for (let key of keys) {
        key.disabled = true;
    };
};

function enableKeyboard() {
    let keys = document.getElementsByClassName('key');
    for (let key of keys) {
        key.disabled = false;
    };
};

function checkDisplay(elt) {
    let btn = getComputedStyle(elt);
    return btn;
};