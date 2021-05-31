function newGame() {

    clearAnimations(stoolParts, stoolAnimationReversed);
    clearHangman();
    clearAlerts();

    document.getElementById('letter').disabled = false;
    document.getElementById('submit').disabled = false;
    document.getElementById('new').disabled = true;
    chosenIndex = randomMinMax(0, db.length);
    word = aseptWord(db[chosenIndex]);
    wordArray = word.split('');
    checkForSigns(wordArray);
    mimeArray = ['_','_','_','_','_','_','_','_'];
    usedLetters = [];
    turn = 7;

    
    animate(stoolParts, stoolAnimation);
    animate(diags, diagAnimation);
    animate(base, baseAnimation);
    animate(mast, mastAnimation);
    animate(horiz, horizAnimation);
    animate(ropeParts, ropeStartAnimation);

    setTimeout(() => {
        clearAnimations(stoolParts, stoolAnimation);
        clearAnimations(diags, diagAnimation);
        clearAnimations(base, baseAnimation);
        clearAnimations(mast, mastAnimation);
        clearAnimations(horiz, horizAnimation);
        clearAnimations(ropeParts, ropeStartAnimation);
    }, 3000);

    render();
}