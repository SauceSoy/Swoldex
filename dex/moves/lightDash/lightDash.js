function load() {
    let main = document.getElementById("main");
    let move = findMove("Light Dash");
    let header = document.createElement("h1");
    header.innerHTML = move.name;
    let description = document.createElement("p");
    description.innerHTML = move.description;
    let loomiansHeader = document.createElement("h1");
    loomiansHeader.innerHTML = "Loomians";

    
    main.appendChild(header);
    main.appendChild(description);
    createMoveInfoBox(move, main);
    main.appendChild(loomiansHeader);

    let table = document.createElement("table");
    for (let loomian in loomians) {
        if (loomians[loomian].moveset.includes(move.name)) {
            table.appendChild(createLoomianRow(loomians[loomian]));
        }
    }
    main.appendChild(table);

    console.log(basePath);
}