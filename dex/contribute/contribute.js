function load() {
    let main = document.getElementById("main");

    let header = document.createElement("h1");
    header.innerHTML = "Contribute";
    let description = document.createElement("p");
    description.innerHTML = `Contributions are always welcome! If there are any inaccuracies with information or you want to write an article yourself, please either let me or
                            team apex know.<br><br><a href="https://github.com/SauceSoy/Swoldex">Github Repo</a>`;

    main.appendChild(header);
    main.appendChild(description);

}