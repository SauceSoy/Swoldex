function createLoomianImage(loomian) {
    let imageDiv = document.createElement("div");
    imageDiv.style.backgroundImage = "url('" + loomian.image + "')";
    imageDiv.classList = "imageDiv";

    return imageDiv;
}

function createLoomianInformationTable(loomian) {
    let informationDiv = document.createElement("div");
    let informationTable = document.createElement("table");

    let typeRow = document.createElement("tr");
    let typeRowName = document.createElement("td");
    typeRowName.innerHTML = "Type: ";
    typeRow.appendChild(typeRowName);
    typeRow.appendChild(createPrimaryLoomianTypeRow(loomian));
    typeRow.appendChild(createSecondaryLoomianTypeRow(loomian));
    informationTable.appendChild(typeRow);
    informationDiv.appendChild(informationTable);



    let abilityRow = document.createElement("tr");
    let abilityRowName = document.createElement("td");
    abilityRowName.innerHTML = "Abilities: ";
    abilityRow.appendChild(abilityRowName);
    abilityRow.appendChild(createAbilityRow(loomian));
    informationTable.appendChild(abilityRow);

    typeRow.classList = "loomianInformationRow";
    typeRowName.classList = "loomianInformationTd";
    abilityRow.classList = "loomianInformationRow";
    abilityRowName.classList = "loomianInformationTd";
    informationDiv.classList = "loomianInformationTable";

    return informationDiv;
}

function createPrimaryLoomianTypeRow(loomian) {
    let primaryTypeCell = document.createElement("td");

    let typeLink = document.createElement("a");
    typeLink.href = basePath + "/dex/types/" + loomian.types[0].toLowerCase();
    typeLink.innerHTML = loomian.types[0];

    primaryTypeCell.appendChild(typeLink);
    primaryTypeCell.classList = "loomianRowType";
    typeLink.style.backgroundColor = types[loomian.types[0].toLowerCase()].color;

    return primaryTypeCell;
}

function createSecondaryLoomianTypeRow(loomian) {
    if (loomian.types[1] == undefined) return document.createElement("td");
    let secondaryTypeCell = document.createElement("td");

    let typeLink = document.createElement("a");
    typeLink.href = basePath + "/dex/types/" + (loomian.types[1] == undefined ? "" : loomian.types[1]).toLowerCase();
    typeLink.innerHTML = (loomian.types[1] == undefined ? "" : loomian.types[1]);

    secondaryTypeCell.appendChild(typeLink);
    secondaryTypeCell.classList = "loomianRowType";
    typeLink.style.backgroundColor = types[loomian.types[1].toLowerCase()].color;

    return secondaryTypeCell;
}

function createAbilityRow(loomian) {
    let abilityNameCell = document.createElement("td");

    for (let i = 0; i < loomian.abilities.length; i++) {
        let abilityLink = document.createElement("a");
        abilityLink.href = basePath + "/dex/abilities/" + splitString(loomian.abilities[i]);
        abilityLink.innerHTML = loomian.abilities[i];
        abilityNameCell.appendChild(abilityLink);
        abilityNameCell.appendChild(document.createElement("br"));
    }

    if (loomian.sAbility == undefined) {
        abilityNameCell.classList = "loomianRowAbility";
        return abilityNameCell;
    }
    let hAbility = loomian.sAbility;
    let hAbilityLink = document.createElement("a");
    hAbilityLink.href = basePath + "/dex/abilities/" + splitString(hAbility[0]);
    hAbilityLink.innerHTML = hAbility;
    abilityNameCell.appendChild(hAbilityLink);

    abilityNameCell.classList = "loomianRowAbility";
    return abilityNameCell;
}

function createStatTable(loomian) {
    let loomianStatsDiv = document.createElement("div");
    let loomianStats = document.createElement("table");

    let hpRow = document.createElement("tr");
    let hpStat = document.createElement("td");
    hpStat.innerHTML = "HP: ";
    let hp = document.createElement("th");
    hp.innerHTML = loomian.baseStats.hp;
    let hpBar = document.createElement("td");
    hpBar.appendChild(createStatBar(loomian.baseStats.hp));

    hpRow.appendChild(hpStat);
    hpRow.appendChild(hp);
    hpRow.appendChild(hpBar);
    loomianStats.appendChild(hpRow);
    hpRow.classList = "loomianStatRow";

    let engRow = document.createElement("tr");
    let engStat = document.createElement("td");
    engStat.innerHTML = "Energy: ";
    let eng = document.createElement("th");
    eng.innerHTML = loomian.baseStats.energy;
    let engBar = document.createElement("td");
    engBar.appendChild(createStatBar(loomian.baseStats.energy));

    engRow.appendChild(engStat);
    engRow.appendChild(eng);
    engRow.appendChild(engBar);
    loomianStats.appendChild(engRow);
    engRow.classList = "loomianStatRow";

    let atkRow = document.createElement("tr");
    let atkStat = document.createElement("td");
    atkStat.innerHTML = "Attack: ";
    let atk = document.createElement("th");
    atk.innerHTML = loomian.baseStats.attack;
    let atkBar = document.createElement("td");
    atkBar.appendChild(createStatBar(loomian.baseStats.attack));

    atkRow.appendChild(atkStat);
    atkRow.appendChild(atk);
    atkRow.appendChild(atkBar);
    loomianStats.appendChild(atkRow);
    atkRow.classList = "loomianStatRow";

    let defRow = document.createElement("tr");
    let defStat = document.createElement("td");
    defStat.innerHTML = "Defense: ";
    let def = document.createElement("th");
    def.innerHTML = loomian.baseStats.defense;
    let defBar = document.createElement("td");
    defBar.appendChild(createStatBar(loomian.baseStats.defense));

    defRow.appendChild(defStat);
    defRow.appendChild(def);
    defRow.appendChild(defBar);
    loomianStats.appendChild(defRow);
    defRow.classList = "loomianStatRow";

    let atkRRow = document.createElement("tr");
    let atkRStat = document.createElement("td");
    atkRStat.innerHTML = "AttackR: ";
    let atkR = document.createElement("th");
    atkR.innerHTML = loomian.baseStats.attackR;
    let atkRBar = document.createElement("td");
    atkRBar.appendChild(createStatBar(loomian.baseStats.attackR));

    atkRRow.appendChild(atkRStat);
    atkRRow.appendChild(atkR);
    atkRRow.appendChild(atkRBar);
    loomianStats.appendChild(atkRRow);
    atkRRow.classList = "loomianStatRow";

    let defRRow = document.createElement("tr");
    let defRStat = document.createElement("td");
    defRStat.innerHTML = "DefenseR: ";
    let defR = document.createElement("th");
    defR.innerHTML = loomian.baseStats.defenseR;
    let defRBar = document.createElement("td");
    defRBar.appendChild(createStatBar(loomian.baseStats.defenseR));

    defRRow.appendChild(defRStat);
    defRRow.appendChild(defR);
    defRRow.appendChild(defRBar);
    loomianStats.appendChild(defRRow);
    defRRow.classList = "loomianStatRow";

    let spdRow = document.createElement("tr");
    let spdStat = document.createElement("td");
    spdStat.innerHTML = "Speed: ";
    let spd = document.createElement("th");
    spd.innerHTML = loomian.baseStats.speed;
    let spdBar = document.createElement("td");
    spdBar.appendChild(createStatBar(loomian.baseStats.speed));

    spdRow.appendChild(spdStat);
    spdRow.appendChild(spd);
    spdRow.appendChild(spdBar);
    loomianStats.appendChild(spdRow);
    spdRow.classList = "loomianStatRow";


    loomianStatsDiv.classList = "loomianStatsTable";
    loomianStatsDiv.appendChild(loomianStats);
    return loomianStatsDiv;
}

function createStatBar(value) {
    let statBar = document.createElement("div");
    let length = (value / 160) * 10;
    let color = pickColor(value);
    statBar.style.backgroundColor = rgbToHex(color[0], color[1], color[2]);
    statBar.style.width = length + "em";
    statBar.style.height = "1em";

    statBar.classList = "loomianStatBar";
    return statBar;
}

function createDescription(loomian, main) {
    let setData = sets[loomian.name.toLowerCase()];

    if (setData != undefined) {
        let writtenBy = document.createElement("span");
        writtenBy.innerHTML = "<i>" + setData.writtenBy + "</i>";
        main.appendChild(writtenBy);

        let overviewHeader = document.createElement("h2");
        overviewHeader.innerHTML = "Overview";
        let overview = document.createElement("p");
        overview.innerHTML = setData.overview;
        main.appendChild(overviewHeader);
        main.appendChild(overview);

        let container = document.createElement("div");
        main.appendChild(container);
        container.style.width = "100%";
        for (let key in setData.sets) {
            let set = setData.sets[key];
            let title = document.createElement("h2");
            title.innerHTML = set.setName;
            container.appendChild(title);

            let setBox = document.createElement("div");
            setBox.classList = "loomianSetBox";
            container.appendChild(setBox);

            let movesDiv = document.createElement("div");
            movesDiv.classList = "loomianInfoBox";
            let moveTable = document.createElement("table");
            for (let move in set.moves) {
                let moveRow = document.createElement("tr");
                let moveNo = document.createElement("td");
                moveNo.innerHTML = "Move " + move.charAt(4) + ":";
                moveNo.style.width = "20%";
                moveRow.appendChild(moveNo);
                moveTable.appendChild(moveRow);

                let moveCell = document.createElement("td");
                for (let subMove in set.moves[move]) {
                    let moveLink = document.createElement("a");
                    moveLink.innerHTML = set.moves[move][subMove];
                    moveLink.href = basePath + "/dex/moves/" + splitString(set.moves[move][subMove]);
                    moveCell.appendChild(moveLink);

                    if (subMove != set.moves[move].length - 1) {
                        let divider = document.createElement("span");
                        divider.innerHTML = " / ";
                        moveCell.appendChild(divider);
                    }
                }
                moveRow.appendChild(moveCell);
            }
            movesDiv.appendChild(moveTable);
            setBox.appendChild(movesDiv);

            let miscDiv = document.createElement("div");
            miscDiv.classList = "loomianInfoBox";
            let miscTable = document.createElement("table");

            let itemRow = document.createElement("tr");
            let itemText = document.createElement("td");
            itemText.innerHTML = "Item:";
            itemText.style.width = "15%";
            itemText.style.textAlign = "right";
            itemRow.appendChild(itemText);
            miscTable.appendChild(itemRow);
            let itemCell = document.createElement("td");
            itemCell.style.paddingLeft = "1.5em";
            for (let item in set.items) {
                let itemLink = document.createElement("a");
                itemLink.innerHTML = set.items[item];
                itemLink.href = basePath + "/dex/items/" + splitString(set.items[item]);
                itemCell.appendChild(itemLink);

                if (item != set.items.length - 1) {
                    let divider = document.createElement("span");
                    divider.innerHTML = " / ";
                    itemCell.appendChild(divider);
                }
            }
            itemRow.appendChild(itemCell);
            miscDiv.appendChild(miscTable);
            setBox.appendChild(miscDiv);

            let abilityRow = document.createElement("tr");
            let abilityText = document.createElement("td");
            abilityText.innerHTML = "Ability:";
            abilityText.style.width = "15%";
            abilityText.style.textAlign = "right";
            let abilityCell = document.createElement("td");
            abilityCell.style.paddingLeft = "1.5em";
            let abilityLink = document.createElement("a");
            abilityLink.innerHTML = set.ability;
            abilityLink.href = basePath + "/dex/abilities/" + splitString(set.ability);
            abilityRow.appendChild(abilityText);
            abilityCell.appendChild(abilityLink);
            abilityRow.appendChild(abilityCell);
            miscTable.appendChild(abilityRow);

            let personalityRow = document.createElement("tr");
            let personalityText = document.createElement("td");
            personalityText.innerHTML = "Personality:";
            personalityText.style.width = "15%";
            personalityText.style.textAlign = "right";
            let personalityCell = document.createElement("td");
            personalityCell.style.paddingLeft = "1.5em";
            let personalities = document.createElement("span");
            for (let personality in set.personalities) {
                personalities.innerHTML += set.personalities[personality];

                if (personality != set.personalities.length - 1) {
                    personalities.innerHTML += " / ";
                }
            }
            personalityCell.appendChild(personalities);
            personalityRow.appendChild(personalityText);
            personalityRow.appendChild(personalityCell);
            miscTable.appendChild(personalityRow);

            let evRow = document.createElement("tr");
            let evText = document.createElement("td");
            evText.innerHTML = "TPs:";
            evText.style.width = "15%";
            evText.style.textAlign = "right";
            let evCell = document.createElement("td");
            evCell.style.paddingLeft = "1.5em";
            let evs = document.createElement("span");
            for (let ev in set.evs) {
                evs.innerHTML += set.evs[ev];

                if (ev != set.evs.length - 1) {
                    evs.innerHTML += " / ";
                }
            }
            evCell.appendChild(evs);
            evRow.appendChild(evText);
            evRow.appendChild(evCell);
            miscTable.appendChild(evRow);

            let detailHolder = document.createElement("section");
            let detailText = document.createElement("p");
            detailText.innerHTML = set.detail;
            detailHolder.appendChild(detailText);
            container.appendChild(detailHolder);
        }

        let optionsHeader = document.createElement("h2");
        optionsHeader.innerHTML = "Team Options";
        let options = document.createElement("p");
        options.innerHTML = setData.teamOptions;
        main.appendChild(optionsHeader);
        main.appendChild(options);

        let countersHeader = document.createElement("h2");
        countersHeader.innerHTML = "Checks and Counters";
        let counters = document.createElement("p");
        counters.innerHTML = setData.checksAndCounters;
        main.appendChild(countersHeader);
        main.appendChild(counters);

        let creditsHeader = document.createElement("h2");
        creditsHeader.innerHTML = "Credits";
        let credits = document.createElement("p");
        credits.innerHTML = setData.credits;
        main.appendChild(creditsHeader);
        main.appendChild(credits);

    } else {
        let container = document.createElement("div");
        let none = document.createElement("p");
        none.innerHTML = "This Loomian currently does not have a moveset. Try contributing!";
        container.style.display = "block";
        container.style.marginTop = "18em";
        container.appendChild(none);
        main.appendChild(container);
    }

    let movesetHeader = document.createElement("h2");
    movesetHeader.innerHTML = "Moves";
    main.appendChild(movesetHeader);
    let movesetTable = document.createElement("table");
    movesetTable.classList = "loomianTable"
    for (let move in loomian.moveset) {
        movesetTable.appendChild(createMoveRow(findMove(loomian.moveset[move])));
    }
    main.appendChild(movesetTable);
}

function pickColor(value) {
    let greenIncrement = Math.floor(255 / 80 * value);
    let redDecrement;
    if (greenIncrement > 255) {
        greenIncrement = 255;
        redDecrement = 255 - Math.floor(255 / 80 * (value - 80));
    } else {
        redDecrement = 255;
    }
    return [redDecrement, greenIncrement, 0];
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Loomian Row


function createLoomianRow(loomian) {
    let loomianRow = document.createElement("tr");
    let loomianNameCell = document.createElement("td");
    let loomianLink = document.createElement("a");
    let loomianName = document.createElement("span");
    let loomianImage = document.createElement("img");
    loomianLink.href = basePath + "/dex/loomians/" + loomian.name.toLowerCase();
    loomianName.innerHTML = loomian.name;
    loomianImage.src = loomian.tinyImage;
    loomianLink.appendChild(loomianImage);
    loomianLink.appendChild(loomianName);
    loomianNameCell.appendChild(loomianLink);
    loomianRow.appendChild(loomianNameCell);

    loomianRow.classList = "loomianRow";
    loomianNameCell.classList = "loomianRowName";
    loomianImage.classList = "loomianRowImage";

    loomianRow.appendChild(createLoomianAbilityRow(loomian));
    loomianRow.appendChild(createLoomianHiddenAbilityRow(loomian));
    loomianRow.appendChild(createPrimaryLoomianTypeRow(loomian));
    loomianRow.appendChild(createSecondaryLoomianTypeRow(loomian));

    createLoomianStatRow(loomian, loomianRow);
    return loomianRow;
}

function createLoomianAbilityRow(loomian) {
    let abilityNameCell = document.createElement("td");

    for (let i = 0; i < loomian.abilities.length; i++) {
        let abilityLink = document.createElement("a");
        abilityLink.href = basePath + "/dex/abilities/" + splitString(loomian.abilities[i]);
        abilityLink.innerHTML = loomian.abilities[i];
        abilityNameCell.appendChild(abilityLink);
        abilityNameCell.appendChild(document.createElement("br"));
    }
    
    abilityNameCell.classList = "loomianRowAbility";
    return abilityNameCell;
}

function createLoomianHiddenAbilityRow(loomian) {
    if (loomian.sAbility == undefined) {
        return document.createElement("td");
    }
    let hAbility = loomian.sAbility;
    let hAbilityNameCell = document.createElement("td");
    let hAbilityLink = document.createElement("a");
    hAbilityLink.href = basePath + "/dex/abilities/" + splitString(hAbility[0]);
    hAbilityLink.innerHTML = hAbility;
    hAbilityNameCell.appendChild(hAbilityLink);
    hAbilityNameCell.classList = "loomianRowAbility";
    return hAbilityNameCell;
}


function createPrimaryLoomianTypeRow(loomian) {
    let primaryTypeCell = document.createElement("td");

    let typeLink = document.createElement("a");
    typeLink.href = basePath + "/dex/types/" + loomian.types[0].toLowerCase();
    typeLink.innerHTML = loomian.types[0];

    primaryTypeCell.appendChild(typeLink);
    primaryTypeCell.classList = "loomianRowType";
    typeLink.style.backgroundColor = types[loomian.types[0].toLowerCase()].color;

    return primaryTypeCell;
}

function createSecondaryLoomianTypeRow(loomian) {
    if (loomian.types[1] == undefined) return document.createElement("td");
    let secondaryTypeCell = document.createElement("td");

    let typeLink = document.createElement("a");
    typeLink.href = basePath + "/dex/types/" + (loomian.types[1] == undefined ? "" : loomian.types[1]).toLowerCase();
    typeLink.innerHTML = (loomian.types[1] == undefined ? "" : loomian.types[1]);

    secondaryTypeCell.appendChild(typeLink);
    secondaryTypeCell.classList = "loomianRowType";
    typeLink.style.backgroundColor = types[loomian.types[1].toLowerCase()].color;

    return secondaryTypeCell;
}

function createLoomianStatRow(loomian, loomianRow) {
    let hpRow = document.createElement("td");
    let hpText = document.createElement("span");
    let hpValue = document.createElement("span");
    hpText.innerHTML = "HP";
    hpValue.innerHTML = loomian.baseStats.hp;
    hpRow.appendChild(hpText);
    hpRow.appendChild(document.createElement("br"));
    hpRow.appendChild(hpValue);
    hpRow.classList = "loomianRowStat";

    let energyRow = document.createElement("td");
    let energyText = document.createElement("span");
    let energyValue = document.createElement("span");
    energyText.innerHTML = "ENG";
    energyValue.innerHTML = loomian.baseStats.energy;
    energyRow.appendChild(energyText);
    energyRow.appendChild(document.createElement("br"));
    energyRow.appendChild(energyValue);
    energyRow.classList = "loomianRowStat";

    let atkMRow = document.createElement("td");
    let atkMText = document.createElement("span");
    let atkMValue = document.createElement("span");
    atkMText.innerHTML = "AtkM";
    atkMValue.innerHTML = loomian.baseStats.attack;
    atkMRow.appendChild(atkMText);
    atkMRow.appendChild(document.createElement("br"));
    atkMRow.appendChild(atkMValue);
    atkMRow.classList = "loomianRowStat";

    let defMRow = document.createElement("td");
    let defMText = document.createElement("span");
    let defMValue = document.createElement("span");
    defMText.innerHTML = "DefM";
    defMValue.innerHTML = loomian.baseStats.defense;
    defMRow.appendChild(defMText);
    defMRow.appendChild(document.createElement("br"));
    defMRow.appendChild(defMValue);
    defMRow.classList = "loomianRowStat";

    let atkRRow = document.createElement("td");
    let atkRText = document.createElement("span");
    let atkRValue = document.createElement("span");
    atkRText.innerHTML = "AtkR";
    atkRValue.innerHTML = loomian.baseStats.attackR;
    atkRRow.appendChild(atkRText);
    atkRRow.appendChild(document.createElement("br"));
    atkRRow.appendChild(atkRValue);
    atkRRow.classList = "loomianRowStat";

    let defRRow = document.createElement("td");
    let defRText = document.createElement("span");
    let defRValue = document.createElement("span");
    defRText.innerHTML = "DefR";
    defRValue.innerHTML = loomian.baseStats.defenseR;
    defRRow.appendChild(defRText);
    defRRow.appendChild(document.createElement("br"));
    defRRow.appendChild(defRValue);
    defRRow.classList = "loomianRowStat";

    let spdRow = document.createElement("td");
    let spdText = document.createElement("span");
    let spdValue = document.createElement("span");
    spdText.innerHTML = "SPE";
    spdValue.innerHTML = loomian.baseStats.speed;
    spdRow.appendChild(spdText);
    spdRow.appendChild(document.createElement("br"));
    spdRow.appendChild(spdValue);
    spdRow.classList = "loomianRowStat";

    loomianRow.appendChild(hpRow);
    loomianRow.appendChild(energyRow);
    loomianRow.appendChild(atkMRow);
    loomianRow.appendChild(defMRow);
    loomianRow.appendChild(atkRRow);
    loomianRow.appendChild(defRRow);
    loomianRow.appendChild(spdRow);

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
