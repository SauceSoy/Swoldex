function load() {
    createTable();
}

function createTable() {
    let main = document.getElementById("main");
    let header = document.createElement("h1");
    header.innerHTML = "Abilities";
    main.appendChild(header);
    let table = document.createElement("table");
    table.classList = "loomianTable";

    for (let ability in abilities) {
        table.appendChild(createLoomianRow(abilities[ability]));
    }

    main.appendChild(table);

    main.style = "margin-left:8%";
}

function createLoomianRow(ability) {
    let abilityRow = document.createElement("tr");
    let abilityNameCell = document.createElement("td");
    let abilityLink = document.createElement("a");
    let abilityName = document.createElement("span");
    abilityLink.href = basePath + "/dex/abilities/" + splitString(ability.name);
    abilityName.innerHTML = ability.name;
    abilityLink.appendChild(abilityName);
    abilityNameCell.appendChild(abilityLink);
    abilityRow.appendChild(abilityNameCell);

    abilityRow.classList = "abilityRow";
    abilityNameCell.classList = "abilityRowName";

    abilityRow.appendChild(createAbilityDescriptionRow(ability));

    return abilityRow;
}

function createAbilityDescriptionRow(ability) {
    let descriptionRow = document.createElement("td");
    let descriptionText = document.createElement("span");
    descriptionText.innerHTML = ability.description;
    descriptionRow.appendChild(descriptionText);
    descriptionRow.classList = "abilityRowDescription";

    return descriptionRow;
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
    return final;
}
