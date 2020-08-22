function load() {
    createTable();
}

function createTable() {
    let main = document.getElementById("main");
    let header = document.createElement("h1");
    header.innerHTML = "Items";
    main.appendChild(header);
    let table = document.createElement("table");
    table.classList = "loomianTable";

    for (let item in items) {
        table.appendChild(createLoomianRow(items[item]));
    }

    main.appendChild(table);

    main.style = "margin-left:8%";
}

function createLoomianRow(item) {
    let itemRow = document.createElement("tr");
    let itemNameCell = document.createElement("td");
    let itemLink = document.createElement("a");
    let itemName = document.createElement("span");
    itemLink.href = basePath + "/dex/items/" + splitString(item.name);
    itemName.innerHTML = item.name;
    itemLink.appendChild(itemName);
    itemNameCell.appendChild(itemLink);
    itemRow.appendChild(itemNameCell);

    itemRow.classList = "abilityRow";
    itemNameCell.classList = "abilityRowName";

    itemRow.appendChild(createItemDescriptionRow(item));

    return itemRow;
}

function createItemDescriptionRow(item) {
    let descriptionRow = document.createElement("td");
    let descriptionText = document.createElement("span");
    descriptionText.innerHTML = item.description;
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