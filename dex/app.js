function load() {
    let main = document.getElementById("main");

    let header = document.createElement("h1");
    header.innerHTML = "Home";
    let description = document.createElement("p");
    description.innerHTML = `Welcome to Swoldex! This is a compilation of data and PVP information for Loomian Legacy.
                            Use the navigation bar on the left or the search bar below to start learning more about the PVP Meta.`;

    let credits = document.createElement("p");
    credits.innerHTML = `Huge thanks to Smogon for inspiration and directions on design choice.<br> Also huge thanks to i_eaturface
    and SrRojo (thank you for the logo!) for help on data collection and design choice.<br> Site Created by Sioist`;
    credits.style.fontSize = "1em";

    main.appendChild(header);
    main.appendChild(description);

    let searchBar = document.createElement("select");   
    searchBar.classList = "select"
    $(document).ready(function () {
        $("select").select2();
    });
    $(document).on("change", "select", function() {
        let selected = this.options[this.selectedIndex];
        link.innerHTML = "Go to " + selected.text;
        link.href = basePath + "/dex/" + this.value + "/" + splitString(selected.text);
        link.style.visibility = "visible";
    });
    main.appendChild(searchBar);   

    let data = [];
    let dataTypes = {};
    for (let loomian in loomians) {
        data.push(loomians[loomian].name);
        dataTypes[loomians[loomian].name] = "loomians";
    }
    for (let move in moves) {
        data.push(moves[move].name);
        dataTypes[moves[move].name] = "moves";
    }
    for (let ability in abilities) {
        data.push(abilities[ability].name);
        dataTypes[abilities[ability].name] = "abilities";
    }
    for (let item in items) {
        data.push(items[item].name);
        dataTypes[items[item].name] = "items";
    }
    data.sort();
    for (let key in data) {
        let option = new Option(data[key], dataTypes[data[key]]);
        searchBar.options.add(option);
    }
    $("select").val("");

    let container = document.createElement("div");
    container.style.marginTop = "1em";
    let link = document.createElement("a");
    link.style.visibility = "hidden";
    container.appendChild(link);
    main.appendChild(container);
    main.appendChild(credits);
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


