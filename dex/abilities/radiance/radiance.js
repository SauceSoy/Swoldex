function load() {
    let main = document.getElementById("main");
    let ability = abilities["radiance"];
    let header = document.createElement("h1");
    header.innerHTML = ability.name;
    let description = document.createElement("p");
    description.innerHTML = ability.description;
    let loomiansHeader = document.createElement("h1");
    loomiansHeader.innerHTML = "Loomians";
    
    main.appendChild(header);
    main.appendChild(description);
    main.appendChild(loomiansHeader);

    let table = document.createElement("table");
    table.classList = "loomianTable";

    for (let loomian in loomians) {
        if (loomians[loomian].abilities.includes(ability.name)) {
            table.appendChild(createLoomianRow(loomians[loomian]));
        }
        else if (loomians[loomian].sAbility != undefined) {
            if (loomians[loomian].sAbility[0] == ability.name) {
                table.appendChild(createLoomianRow(loomians[loomian]));
            }
        }
    }

    main.appendChild(table);
}