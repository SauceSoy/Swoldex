function load() {
    let main = document.getElementById("main");
    let loomian = loomians["zuelong"];
    let header = document.createElement("h1");
    header.innerHTML = loomian.name;
    header.classList = "loomianHeader";
    main.appendChild(header);

    let loomianInformation = document.createElement("div");
    loomianInformation.classList = "loomianInformationDiv";

    loomianInformation.appendChild(createLoomianImage(loomian));
    loomianInformation.appendChild(createLoomianInformationTable(loomian));
    loomianInformation.appendChild(createStatTable(loomian));

    main.appendChild(loomianInformation);

    createDescription(loomian, main);
}