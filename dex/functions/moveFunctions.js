function createMoveRow(move) {
    let moveRow = document.createElement("tr");
    let moveNameCell = document.createElement("td");
    let moveLink = document.createElement("a");
    let moveName = document.createElement("span");
    moveLink.href = basePath + "/dex/moves/" + splitString(move.name);
    moveName.innerHTML = move.name;
    moveLink.appendChild(moveName);
    moveNameCell.appendChild(moveLink);
    moveRow.appendChild(moveNameCell);


    moveRow.appendChild(createMoveTypeRow(move));
    moveRow.appendChild(createMoveMRRow(move));
    moveRow.appendChild(createMovePowerRow(move));
    moveRow.appendChild(createMoveECRow(move));
    moveRow.appendChild(createMoveAccuracyRow(move));
    moveRow.appendChild(createMoveDescriptionRow(move));
    moveRow.classList = "moveRow";
    moveNameCell.classList = "moveRowName";


    return moveRow;
}


function createMoveTypeRow(move) {
    let typeCell = document.createElement("td");

    let typeLink = document.createElement("a");
    typeLink.href = basePath + "/dex/types/" + move.type.toLowerCase();
    typeLink.innerHTML = move.type;

    typeCell.appendChild(typeLink);
    typeCell.classList = "moveRowType";
    typeLink.style.backgroundColor = types[move.type.toLowerCase()].color;

    return typeCell;
}

function createMoveMRRow(move) {
    let mrCell = document.createElement("td");

    let mrImg = document.createElement("img");
    if (move.mr == "Ranged") {
        mrImg.src = "https://vignette.wikia.nocookie.net/loomian-legacy/images/c/c8/Ranged.png/revision/latest/scale-to-width-down/25?cb=20190721164709";
    }
    else if (move.mr == "Melee") {
        mrImg.src = "https://vignette.wikia.nocookie.net/loomian-legacy/images/8/8f/Melee.png/revision/latest/scale-to-width-down/24?cb=20190721164726";
    }
    else {
        mrImg.src = "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/ab/Support.png/revision/latest/scale-to-width-down/23?cb=20190721192306";
    }
    mrCell.appendChild(mrImg);
    
    mrCell.classList = "moveRowMR";
    return mrCell;
}

function createMovePowerRow(move) {
    let powerRow = document.createElement("td");
    let powerText = document.createElement("span");
    let powerValue = document.createElement("span");
    powerText.innerHTML = "Power";
    powerValue.innerHTML = (move.power == 0 ? "—" : move.power);
    powerRow.appendChild(powerText);
    powerRow.appendChild(document.createElement("br"));
    powerRow.appendChild(powerValue);
    powerRow.classList = "moveRowStat";

    return powerRow;
}

function createMoveAccuracyRow(move) {
    let accuracyRow = document.createElement("td");
    let accuracyText = document.createElement("span");
    let accuracyValue = document.createElement("span");
    accuracyText.innerHTML = "Accuracy";
    accuracyValue.innerHTML = (move.accuracy == "N/A" ? "—" : move.accuracy * 100 + "%");
    accuracyRow.appendChild(accuracyText);
    accuracyRow.appendChild(document.createElement("br"));
    accuracyRow.appendChild(accuracyValue);
    accuracyRow.classList = "moveRowStat";

    return accuracyRow;
}

function createMoveECRow(move) {
    let ecRow = document.createElement("td");
    let ecText = document.createElement("span");
    let ecValue = document.createElement("span");
    ecText.innerHTML = "EC";
    ecValue.innerHTML = move.ec;
    ecRow.appendChild(ecText);
    ecRow.appendChild(document.createElement("br"));
    ecRow.appendChild(ecValue);
    ecRow.classList = "moveRowStat";

    return ecRow;
}

function createMoveDescriptionRow(move) {
    let descriptionRow = document.createElement("td");
    let descriptionText = document.createElement("span");
    descriptionText.innerHTML = move.description;
    descriptionRow.appendChild(descriptionText);
    descriptionRow.classList = "moveRowDescription";

    return descriptionRow;
}


function createMoveInfoBox(move, main) {
    let container = document.createElement("div");
    container.classList = "moveInfoBox";

    let moveType = document.createElement("div");    
    let typeLink = document.createElement("a");
    typeLink.href = basePath + "/dex/types/" + move.type.toLowerCase();
    typeLink.style.display = "block";
    typeLink.classList = "moveRowType";
    typeLink.style.backgroundColor = types[move.type.toLowerCase()].color;
    typeLink.innerHTML = move.type;
    moveType.innerHTML = "Type";
    moveType.appendChild(typeLink);
    container.appendChild(moveType)
    
    let moveCategory = document.createElement("div");
    moveCategory.innerHTML = "Category";
    let mrImg = document.createElement("img");
    if (move.mr == "Ranged") {
        mrImg.src = "https://vignette.wikia.nocookie.net/loomian-legacy/images/c/c8/Ranged.png/revision/latest/scale-to-width-down/25?cb=20190721164709";
    }
    else if (move.mr == "Melee") {
        mrImg.src = "https://vignette.wikia.nocookie.net/loomian-legacy/images/8/8f/Melee.png/revision/latest/scale-to-width-down/24?cb=20190721164726";
    }
    else {
        mrImg.src = "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/ab/Support.png/revision/latest/scale-to-width-down/23?cb=20190721192306";
        
    }
    mrImg.style.display = "block";
    moveCategory.appendChild(mrImg);
    container.appendChild(moveCategory);

    let movePower = document.createElement("div");
    movePower.innerHTML = "Power";
    movePower.innerHTML += "<br>" + (move.power == 0 ? "—" : move.power);
    container.appendChild(movePower);

    let moveAccuracy = document.createElement("div");
    moveAccuracy.innerHTML = "Accuracy";
    moveAccuracy.innerHTML += "<br>" + (move.accuracy == "N/A" ? "—" : move.accuracy * 100 + "%");
    container.appendChild(moveAccuracy);

    let moveEC= document.createElement("div");
    moveEC.innerHTML = "Energy Cost";
    moveEC.innerHTML += "<br>" + move.ec;
    container.appendChild(moveEC);

    main.appendChild(container);
}

function splitString(string) {
    let nameSplit = string.split(" ");
    if (nameSplit.length == 1) {
        return nameSplit[0].toLowerCase();
    }
    let final = nameSplit[0].toLowerCase();
    for (let i = 1; i < nameSplit.length; i++) {
        final += nameSplit[i].charAt(0) + nameSplit[i].substring(1).toLowerCase();
    }
    if (final.indexOf("'") != -1) {
        final = final.substr(0, final.indexOf("'")) + final.substr(final.indexOf("'") + 1);
    }
    return final;
}

function findMove(name) {
    for (let move in moves) {
        if (moves[move].name.toLowerCase() == name.toLowerCase()) {
            return moves[move];
        }
        else if (move == name) {
            return moves[move];
        }
        console.log(move);
    }
}