function load() {
    createTable();
}

function createTable() {
    let main = document.getElementById("main");
    let header = document.createElement("h1");
    header.innerHTML = "Moves";
    main.appendChild(header);

    let table = document.createElement("table");
    table.classList = "loomianTable";

    for (let move in moves) {
        table.appendChild(createMoveRow(moves[move]));
    }

    main.appendChild(table);

    let moveString = "{\n";

    for (let move in moves) {
        let moveO = moves[move];
        moveString += convertMoveName(moveO.name) + ': {\n name: "'+ moveO.name + '",\n power: ' + (moveO.power == "N/A" ? 0 : moveO.power) + ',\n type: "' + moveO.type + '",\n mr: "' + moveO.mr + '",\n ec: ' + moveO.ec + ',\n';
        moveString += ' accuracy: ' + (moveO.accuracy == "N/A" ? '"' : "") + moveO.accuracy + (moveO.accuracy == "N/A" ? '"' : "") + ',\n aoe: ' + moveO.aoe + ',\n contact: ' + moveO.contact;
        moveString += ',\n sound: ' + moveO.sound + ',\n description: "' + moveO.DESCRIPTION +  '",\n},\n\n';
    }
    main.style = "margin-left:8%";
}