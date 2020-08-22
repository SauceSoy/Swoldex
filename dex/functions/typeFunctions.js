function createTypeInformation(type, main) {
    let h1 = document.createElement("h1");
    h1.innerHTML = type.name;
    main.appendChild(h1);

    createOffensiveInformation(type, main);

    let header = document.createElement("h2");
    header.innerHTML = "Loomians";
    main.appendChild(header);
    let table = document.createElement("table");
    for (let loomian in loomians) {
        if (loomians[loomian].types.includes(type.name)) {
            table.appendChild(createLoomianRow(loomians[loomian]));
        }
    }
    main.appendChild(table);
}

function createOffensiveInformation(type, main) {
    let superContainer = document.createElement("div");
    let containerO = document.createElement("div");
    let containerD = document.createElement("div");
    superContainer.appendChild(containerO);
    superContainer.appendChild(containerD);
    main.appendChild(superContainer);
    containerO.style.display = "inline-block";
    containerO.style.minHeight = "25em";
    containerD.style.display = "inline-block";
    containerD.style.minHeight = "25em";
    containerD.style.marginLeft = "3em";

    let header = document.createElement("h2");
    header.innerHTML = "Offensively";
    containerO.appendChild(header);

    let weakAgainstList = document.createElement("dl");
    let weakAgainstHeader = document.createElement("dt");
    weakAgainstHeader.innerHTML = "Weak Against";
    weakAgainstList.appendChild(weakAgainstHeader);
    containerO.appendChild(weakAgainstList);
    for (let typeK in types) {
        if (types[typeK].resistances.includes(type.name.toLowerCase())) {
            weakAgainstList.appendChild(createTypeBox(typeK));
        }
    }

    let strongAgainstList = document.createElement("dl");
    let strongAgainstHeader = document.createElement("dt");
    strongAgainstHeader.innerHTML = "Strong Against";
    strongAgainstList.appendChild(strongAgainstHeader);
    containerO.appendChild(strongAgainstList);
    for (let typeK in types) {
        if (types[typeK].weaknesses.includes(type.name.toLowerCase())) {
            strongAgainstList.appendChild(createTypeBox(typeK));
        }
    }
    if (strongAgainstList.children.length == 1) {
        let nothing = document.createElement("dd");
        nothing.innerHTML = "Nothing!";
        strongAgainstList.appendChild(nothing);
    }

    let noEffectList = document.createElement("dl");
    let noEffectHeader = document.createElement("dt");
    noEffectHeader.innerHTML = "No Effect On";
    noEffectList.appendChild(noEffectHeader);
    containerO.appendChild(noEffectList);
    for (let typeK in types) {
        if (types[typeK].immunities.includes(type.name.toLowerCase())) {
            noEffectList.appendChild(createTypeBox(typeK));
        }
    }
    if (noEffectList.children.length == 1) {
        let nothing = document.createElement("dd");
        nothing.innerHTML = "Nothing!";
        noEffectList.appendChild(nothing);
    }

    let header2 = document.createElement("h2");
    header2.innerHTML = "Defensively";
    containerD.appendChild(header2);

    let weaknessList = document.createElement("dl");
    let weaknessHeader = document.createElement("dt");
    weaknessHeader.innerHTML = "Weaknesses";
    weaknessList.appendChild(weaknessHeader);
    containerD.appendChild(weaknessList);
    for (let weakness in type.weaknesses) {
        weaknessList.appendChild(createTypeBox(type.weaknesses[weakness]));
    }

    let resistanceList = document.createElement("dl");
    let resistanceHeader = document.createElement("dt");
    resistanceHeader.innerHTML = "Resistances";
    resistanceList.appendChild(resistanceHeader);
    containerD.appendChild(resistanceList);
    for (let resistance in type.resistances) {
        resistanceList.appendChild(createTypeBox(type.resistances[resistance]));
    }
    if (resistanceList.children.length == 1) {
        let nothing = document.createElement("dd");
        nothing.innerHTML = "Nothing!";
        resistanceList.appendChild(nothing);
    }

    let immunityList = document.createElement("dl");
    let immunityHeader = document.createElement("dt");
    immunityHeader.innerHTML = "Immunities";
    immunityList.appendChild(immunityHeader);
    containerD.appendChild(immunityList);
    for (let immunity in type.immunities) {
        immunityList.appendChild(createTypeBox(type.immunities[immunity]));
    }
    if (immunityList.children.length == 1) {
        let nothing = document.createElement("dd");
        nothing.innerHTML = "Nothing!";
        immunityList.appendChild(nothing);
    }
}

function createTypeBox(typeN) {
    let typeDD = document.createElement("dd");
    let typeLink = document.createElement("a");
    typeLink.href = basePath + "/dex/types/" + typeN.toLowerCase();
    typeLink.innerHTML = typeN.charAt(0).toUpperCase() + typeN.substring(1);
    typeLink.classList = "typeBox";
    typeLink.style.backgroundColor = types[typeN].color;

    typeDD.appendChild(typeLink);
    return typeDD;
}