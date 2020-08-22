function createItemSetTable(item, main) {
    let header = document.createElement("h1");
    header.innerHTML = item.name;
    main.appendChild(header);

    let description = document.createElement("p");
    description.innerHTML = item.description;
    main.appendChild(description);

    let subHeader = document.createElement("h2");
    subHeader.innerHTML = "Loomians containing a set that recommends this item";
    main.appendChild(subHeader);
    
    let table = document.createElement("table");
    table.classList = "loomianTable";
    main.appendChild(table);

    for (let loomian in sets) {
        for (let set in sets[loomian].sets) {
            if (sets[loomian].sets[set].items.includes(item.name)) {
                table.appendChild(createLoomianRow(loomians[loomian]));
            }
        }
    }
}