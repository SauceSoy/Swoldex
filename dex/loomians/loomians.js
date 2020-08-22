function load() {
    createTable();
}

function createTable() {
    let main = document.getElementById("main");
    let header = document.createElement("h1");
    header.innerHTML = "Loomians";
    main.appendChild(header);

    let table = document.createElement("table");
    table.classList = "loomianTable";

    for (let loomian in loomians) {
        table.appendChild(createLoomianRow(loomians[loomian]));
    }

    main.appendChild(table);

    main.style = "margin-left:8%";
}
