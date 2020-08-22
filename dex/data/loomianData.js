var loomians = {
    embit: {
        name: "Embit",
        number: 01,
        types: ["Fire"],
        abilities: ["Awakening"],
        sAbility: ["Terrifying"],
        weight: 20,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/1/1c/Embit-model.png/revision/latest?cb=20190718023057",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/dd/Embit-menu.png/revision/latest?cb=20190725224938",
        baseStats: {
            hp: 57,
            energy: 51,
            attack: 60,
            defense: 67,
            attackR: 36,
            defenseR: 50,
            speed: 40
        },
        evolvesTo: "Rabburn",
        moveset: ["Pounce", "Growl", "Singe", "Burrow", "Ear Slap", "Hop Kick", "Fire Slam", "Power Focus", "Flaming Kick", "Chase Down", "Fire Breath", "Slap Down"]
    },
 
    rabburn: {
        name: "Rabburn",
        number: 02,
        types: ["Fire"],
        abilities: ["Awakening"],
        sAbility: ["Terrifying"],
        weight: 39,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/5/50/Rabburn-model.png/revision/latest?cb=20190721181208",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/5/55/Rabburn-menu.png/revision/latest?cb=20190725225004",
        baseStats: {
            hp: 61,
            energy: 67,
            attack: 75,
            defense: 95,
            attackR: 46,
            defenseR: 68,
            speed: 60
        },
        evolvesTo: "Searknight",
        evolvesFrom: "Embit",
        moveset: ["Rapid Fire"]
    },
 
    searknight: {
        name: "Searknight",
        number: 03,
        types: ["Fire", "Metal"],
        abilities: ["Awakening"],
        sAbility: ["Terrifying"],
        weight: 98,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/6/63/Searknight-model.png/revision/latest?cb=20191205004109",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/3/34/Searknight-menu.png/revision/latest?cb=20190725225027",
        baseStats: {
            hp: 88,
            energy: 88,
            attack: 102,
            defense: 125,
            attackR: 60,
            defenseR: 82,
            speed: 65
        },
        evolvesFrom: "Rabburn",
        moveset: ["Searing Steel"]
    },
 
    dripple: {
        name: "Dripple",
        number: 04,
        types: ["Water"],
        abilities: ["Awakening"],
        sAbility: ["Power Napper"],
        weight: 17,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/0/09/Dripple-model.png/revision/latest?cb=20190724215125",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/2/23/Dripple-menu.png/revision/latest?cb=20190725225131",
        baseStats: {
            hp: 63,
            energy: 51,
            attack: 56,
            defense: 50,
            attackR: 55,
            defenseR: 45,
            speed: 41
        },
        evolvesTo: "Reptide",
        moveset: ["Strike", "Dawdle", "Spray", "Mind's Eye", "Swipe", "Water Bomb", "Soft Water", "Maroon", "Chilly Chomp", "Gamma Pulse", "Hydro Slash", "Mega Chomp", "Thunder Chomp", "Peace of Mind"]
    },
 
    reptide: {
        name: "Reptide",
        number: 05,
        types: ["Water"],
        abilities: ["Awakening"],
        sAbility: ["Power Napper"],
        weight: 35,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/e6/Reptide-model.png/revision/latest?cb=20190720205243",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/bc/Reptide-menu.png/revision/latest?cb=20190725225154",
        baseStats: {
            hp: 78,
            energy: 67,
            attack: 71,
            defense: 70,
            attackR: 70,
            defenseR: 65,
            speed: 51
        },
        evolvesTo: "Luminami",
        evolvesFrom: "Dripple",
        moveset: ["Submerge", "Sleet Shot"]
    },
 
    luminami: {
        name: "Luminami",
        number: 06,
        types: ["Water", "Light"],
        abilities: ["Awakening"],
        sAbility: ["Power Napper"],
        weight: 91,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/9/9f/Luminami-model.png/revision/latest?cb=20190721123827",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/c/c7/Luminami-menu.png/revision/latest?cb=20190725225216",
        baseStats: {
            hp: 102,
            energy: 88,
            attack: 90,
            defense: 93,
            attackR: 94,
            defenseR: 83,
            speed: 60
        },
        evolvesFrom: "Reptide",
        moveset: ["Flash Pulse", "Flash n Flee", "Rejuvenate"]
    },
 
    fevine: {
        name: "Fevine",
        number: 07,
        types: ["Plant"],
        abilities: ["Awakening"],
        sAbility: ["Thriving Pace"],
        weight: 15,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/6/61/Fevine-model.png/revision/latest?cb=20190716182453",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/0/04/Fevine-menu.png/revision/latest?cb=20190725225244",
        baseStats: {
            hp: 45,
            energy: 51,
            attack: 71,
            defense: 44,
            attackR: 50,
            defenseR: 36,
            speed: 64
        },
        evolvesTo: "Felver",
        moveset: ["Pounce", "Growl", "Petal Pummel", "Stretch", "Swipe", "Leaf Barrage", "Life Drain", "Nature's Force", "Bush Whack", "Poison", "Tease", "Wonder Herb", "Mud Spatter"]
    },
 
    felver: {
        name: "Felver",
        number: 08,
        types: ["Plant"],
        abilities: ["Awakening"],
        sAbility: ["Thriving Pace"],
        weight: 37,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/0/01/Felver-model.png/revision/latest?cb=20190723202617",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/f/f5/Felver-menu.png/revision/latest?cb=20190725225339",
        baseStats: {
            hp: 55,
            energy: 67,
            attack: 96,
            defense: 55,
            attackR: 70,
            defenseR: 45,
            speed: 84
        },
        evolvesTo: "Tahtab",
        evolvesFrom: "Fevine",
        moveset: ["Nature's Rage", "Toxic Tail"]
    },
 
    tahtab: {
        name: "Tahtab",
        number: 09,
        types: ["Plant", "Brawler"],
        abilities: ["Awakening"],
        sAbility: ["Thriving Pace"],
        weight: 74,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/6/6e/Tahtab-model.png/revision/latest?cb=20190723202705",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/e7/Tahtab-menu.png/revision/latest?cb=20190725225358",
        baseStats: {
            hp: 72,
            energy: 88,
            attack: 126,
            defense: 75,
            attackR: 80,
            defenseR: 65,
            speed: 104
        },
        evolvesFrom: "Felver",
        moveset: ["Junglejutsu", "Ill Will", "Barter"]
    },
 
    eaglit: {
        name: "Eaglit",
        number: 10,
        types: ["Light"],
        abilities: ["Awakening"],
        sAbility: ["Applied Frustration"],
        weight: 17,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/a5/Eaglit-model.png/revision/latest?cb=20190803153822",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/8/8e/Eaglit-menu.png/revision/latest?cb=20190725225421",
        baseStats: {
            hp: 45,
            energy: 51,
            attack: 36,
            defense: 33,
            attackR: 79,
            defenseR: 57,
            speed: 60
        },
        evolvesTo: "Torprey",
        moveset: ["Pounce", "Stare", "Shine", "Growl", "Peck", "Luster Loot", "Cyclone Slam", "Power Focus", "Gamma Pulse", "Air Blade", "Nosedive", "Raging Howl", "Flash n Flee"]
    },
 
    torprey: {
        name: "Torprey",
        number: 11,
        types: ["Light"],
        abilities: ["Awakening"],
        sAbility: ["Applied Frustration"],
        weight: 25,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/e2/Torprey-model.png/revision/latest?cb=20190723202643",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/2/23/Torprey-menu.png/revision/latest?cb=20190725225443",
        baseStats: {
            hp: 57,
            energy: 67,
            attack: 64,
            defense: 40,
            attackR: 91,
            defenseR: 63,
            speed: 90
        },
        evolvesTo: "Falkyrie",
        evolvesFrom: "Eaglit",
        moveset: ["Radiant Forecast", "Metal Blast"]
    },
 
    falkyrie: {
        name: "Falkyrie",
        number: 12,
        types: ["Light", "Metal"],
        abilities: ["Awakening"],
        sAbility: ["Applied Frustration"],
        weight: 80,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/0/09/Falkyrie-model.png/revision/latest?cb=20191222173739",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/d3/Falkyrie-menu.png/revision/latest?cb=20190725225502",
        baseStats: {
            hp: 84,
            energy: 88,
            attack: 80,
            defense: 71,
            attackR: 125,
            defenseR: 87,
            speed: 75
        },
        evolvesFrom: "Torprey",
        moveset: ["Holy Slash", "Rejuvenate"]
    },
 
    vambat: {
        name: "Vambat",
        number: 13,
        types: ["Dark"],
        abilities: ["Awakening"],
        sAbility: ["Sharp Claws"],
        weight: 8,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/7/79/Vambat-model.png/revision/latest?cb=20190803153856",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/1/19/Vambat-menu.png/revision/latest?cb=20190725225612",
        baseStats: {
            hp: 47,
            energy: 51,
            attack: 47,
            defense: 50,
            attackR: 47,
            defenseR: 50,
            speed: 69
        },
        evolvesTo: "Dimpire",
        moveset: ["Gnaw", "Growl", "Chomp", "Tease", "Dive Bomb", "Bamboozle", "Air Blade", "Sharpen", "Mega Chomp", "Phantom Slash", "Slap Down"]
    },
 
    dimpire: {
        name: "Dimpire",
        number: 14,
        types: ["Dark"],
        abilities: ["Awakening"],
        sAbility: ["Sharp Claws"],
        weight: 30,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/1/13/Dimpire-model.png/revision/latest?cb=20190721041802",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/6/6a/Dimpire-menu.png/revision/latest?cb=20190725225633",
        baseStats: {
            hp: 60,
            energy: 67,
            attack: 65,
            defense: 75,
            attackR: 60,
            defenseR: 60,
            speed: 85
        },
        evolvesTo: "Vesperatu",
        evolvesFrom: "Vambat",
        moveset: ["Blood Drain"]
    },
 
    vesperatu: {
        name: "Vesperatu",
        number: 15,
        types: ["Dark", "Spirit"],
        abilities: ["Awakening"],
        sAbility: ["Sharp Claws"],
        weight: 65,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/6/6e/Vesperatu-model.png/revision/latest?cb=20190724000303",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/c/ca/Vesperatu-menu.png/revision/latest?cb=20190725225653",
        baseStats: {
            hp: 76,
            energy: 88,
            attack: 110,
            defense: 90,
            attackR: 82,
            defenseR: 65,
            speed: 99
        },
        evolvesFrom: "Dimpire",
        moveset: ["Revival", "Shadow Sprint"]
    },
 
    snocub: {
        name: "Snocub",
        number: 16,
        types: ["Ice"],
        abilities: ["Awakening"],
        sAbility: ["Staunch"],
        weight: 6,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/8/82/Snocub-model.png/revision/latest?cb=20190716182454",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/3/34/Snocub-menu.png/revision/latest?cb=20190725225720",
        baseStats: {
            hp: 55,
            energy: 51,
            attack: 45,
            defense: 38,
            attackR: 67,
            defenseR: 60,
            speed: 45
        },
        evolvesTo: "Snowki",
        moveset: ["Strike", "Brace", "Flurry", "Dawdle", "Snowdozer", "Chilly Chomp", "Sleet Shot", "Icicle Trap", "Body Slam", "Earthquake", "Quicksand"]
    },
 
    snowki: {
        name: "Snowki",
        number: 17,
        types: ["Ice"],
        abilities: ["Awakening"],
        sAbility: ["Staunch"],
        weight: 35,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/d2/Snowki-model.png/revision/latest?cb=20190721120500",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/5/57/Snowki-menu.png/revision/latest?cb=20190725225739",
        baseStats: {
            hp: 55,
            energy: 67,
            attack: 45,
            defense: 38,
            attackR: 67,
            defenseR: 60,
            speed: 45
        },
        evolvesTo: "Himbrr",
        evolvesFrom: "Snocub",
        moveset: ["Winter's Fury", "Quick Punch"]
    },
 
    himbrr: {
        name: "Himbrr",
        number: 18,
        types: ["Ice", "Earth"],
        abilities: ["Awakening"],
        sAbility: ["Staunch"],
        weight: 108,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/3/3f/Himbrr-model.png/revision/latest/scale-to-width-down/620?cb=20190726063841",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/8/8c/Himbrr-menu.png/revision/latest?cb=20190725225759",
        baseStats: {
            hp: 124,
            energy: 88,
            attack: 98,
            defense: 115,
            attackR: 65,
            defenseR: 75,
            speed: 45
        },
        evolvesFrom: "Snowki",
        moveset: ["Yeti's Wrath", "Mud Spatter"]
    },
 
    weevolt: {
        name: "Weevolt",
        number: 19,
        types: ["Electric"],
        abilities: ["Awakening"],
        sAbility: ["Brute Force"],
        weight: 14,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/a3/Weevolt-model.png/revision/latest?cb=20190716182451",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/9/9d/Weevolt-menu.png/revision/latest?cb=20190725225817",
        baseStats: {
            hp: 51,
            energy: 51,
            attack: 36,
            defense: 36,
            attackR: 67,
            defenseR: 55,
            speed: 65
        },
        evolvesTo: "Stozap",
        moveset: ["Pounce", "Growl", "Static Shock", "Stretch", "Swipe", "Thunder Slam", "Thunder Chomp", "Thunderstrike", "Blaze Chomp", "Chilly Chomp", "Primal Slash", "Tase"]
    },
 
    stozap: {
        name: "Stozap",
        number: 20,
        types: ["Electric"],
        abilities: ["Awakening"],
        sAbility: ["Brute Force"],
        weight: 33,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/c/c6/Stozap-model.png/revision/latest?cb=20190721030742",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/6/62/Stozap-menu.png/revision/latest?cb=20190725225837",
        baseStats: {
            hp: 71,
            energy: 67,
            attack: 56,
            defense: 41,
            attackR: 88,
            defenseR: 60,
            speed: 89
        },
        evolvesTo: "Zuelong",
        evolvesFrom: "Weevolt",
        moveset: ["Storm Summon", "Elemental Burst"]
    },
 
    zuelong: {
        name: "Zuelong",
        number: 21,
        types: ["Electric", "Ancient"],
        abilities: ["Awakening"],
        sAbility: ["Brute Force"],
        weight: 59,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/2/2e/Zuelong-model.png/revision/latest?cb=20190722011333",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/1/13/Zuelong-menu.png/revision/latest?cb=20190725225916",
        baseStats: {
            hp: 78,
            energy: 88,
            attack: 89,
            defense: 56,
            attackR: 106,
            defenseR: 74,
            speed: 119
        },
        evolvesFrom: "Stozap",
        moveset: ["Ancient Roar"]
    },
 
    twilat: {
        name: "Twilat",
        number: 22,
        types: ["Typeless"],
        abilities: ["Territorial", "Confidence"],
        sAbility: ["Neutralize"],
        weight: 10,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/c/cb/Twilat-model.png/revision/latest?cb=20190721223001",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/e7/Twilat-menu.png/revision/latest?cb=20190725230038",
        baseStats: {
            hp: 50,
            energy: 41,
            attack: 42,
            defense: 38,
            attackR: 42,
            defenseR: 38,
            speed: 40
        },
        evolvesTo: ["Umbrat", "Luxoar", "Tiklipse"],
        moveset: ["Dawdle", "Gnaw", "Stretch", "Quick Pounce", "Swipe", "Scapegoat", "Gloominous Roar", "Power Focus"]
    },
 
    umbrat: {
        name: "Umbrat",
        number: 23,
        types: ["Dark"],
        abilities: ["Dusk", "Confidence"],
        sAbility: ["Overshadow"],
        weight: 38,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/5/59/Umbrat-model.png/revision/latest?cb=20190721223019",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/ee/Umbrat-menu.png/revision/latest?cb=20190725230059",
        baseStats: {
            hp: 75,
            energy: 79,
            attack: 96,
            defense: 79,
            attackR: 51,
            defenseR: 78,
            speed: 71
        },
        evolvesFrom: "Twilat",
        moveset: ["Gloom Fangs", "Sharpen", "Raging Tackle"]
    },
 
    luxoar: {
        name: "Luxoar",
        number: 24,
        types: ["Light"],
        abilities: ["Dawn", "Confidence"],
        sAbility: ["Illuminate"],
        weight: 37,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/3/37/Luxoar-model.png/revision/latest?cb=20190724171452",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/1/19/Luxoar-menu.png/revision/latest?cb=20190725230119",
        baseStats: {
            hp: 75,
            energy: 75,
            attack: 51,
            defense: 68,
            attackR: 96,
            defenseR: 69,
            speed: 91
        },
        evolvesFrom: "Twilat",
        moveset: ["Luminous Roar", "Disperse", "Raging Howl", "Flash n Flee"]
    },
 
    tiklipse: {
        name: "Tiklipse",
        number: 25,
        types: ["Light", "Dark"],
        abilities: ["Circadian"],
        sAbility: ["Total Eclipse"],
        weight: 42,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/d4/Tiklipse-model.png/revision/latest?cb=20191230191002",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/6/62/Tiklipse-menu.png/revision/latest?cb=20191130105716",
        baseStats: {
            hp: 85,
            energy: 80,
            attack: 51,
            defense: 84,
            attackR: 116,
            defenseR: 83,
            speed: 96
        },
        evolvesFrom: "Twilat",
        moveset: ["Sharpen", "Disperse", "Raging Howl", "Raging Tackle"]
    },
 
    cathorn: {
        name: "Cathorn",
        number: 26,
        types: ["Bug"],
        abilities: ["Hasty"],
        sAbility: ["Defensive Priority"],
        weight: 7,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/4/42/Cathorn-model.png/revision/latest?cb=20190722172345",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/0/01/Cathorn-menu.png/revision/latest?cb=20190725230218",
        baseStats: {
            hp: 35,
            energy: 37,
            attack: 40,
            defense: 24,
            attackR: 55,
            defenseR: 24,
            speed: 47
        },
        evolvesTo: "Propae",
        moveset: ["Gnaw", "Stare", "Bug Bite", "Pestilence", "Pheroblast", "Air Blade", "Pester", "Poison"]
    },
 
    propae: {
        name: "Propae",
        number: 27,
        types: ["Bug"],
        abilities: ["Hasty"],
        sAbility: ["Defensive Priority"],
        weight: 14,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/8/89/Propae-model.png/revision/latest?cb=20190722195714",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/ae/Propae-menu.png/revision/latest?cb=20190725230239",
        baseStats: {
            hp: 50,
            energy: 46,
            attack: 39,
            defense: 60,
            attackR: 39,
            defenseR: 55,
            speed: 37
        },
        evolvesTo: "Cynamoth",
        evolvesFrom: "Cathorn",
        moveset: ["Brace"]
    },
 
    cynamoth: {
        name: "Cynamoth",
        number: 28,
        types: ["Bug", "Air"],
        abilities: ["Mystery Toxins"],
        sAbility: ["Flutter"],
        weight: 20,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/ab/Cynamoth-model.png/revision/latest/scale-to-width-down/620?cb=20190721103548",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/1/1d/Cynamoth-menu.png/revision/latest?cb=20190728090236",
        baseStats: {
            hp: 60,
            energy: 69,
            attack: 45,
            defense: 55,
            attackR: 92,
            defenseR: 80,
            speed: 83
        },
        evolvesFrom: "Propae",
        moveset: ["Mystic Breeze", "Gust", "Wing Slap", "Life Drain"]
    },
 
    twittle: {
        name: "Twittle",
        number: 29,
        types: ["Air"],
        abilities: ["Early Bird", "Confidence"],
        sAbility: ["Rev Up"],
        weight: 7,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/d5/Twittle-model.png/revision/latest?cb=20190722171826",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/0/07/Twittle-menu.png/revision/latest?cb=20190725230418",
        baseStats: {
            hp: 44,
            energy: 40,
            attack: 50,
            defense: 38,
            attackR: 22,
            defenseR: 33,
            speed: 58
        },
        evolvesTo: "Paratweet",
        moveset: ["Pounce", "Stare", "Peck", "Squawk", "Stretch", "Gust", "Air Whip", "Cyclone Slam", "Perch", "Slash", "Body Slam", "Sharpen", "Thunder Crash"]
    },
 
    paratweet: {
        name: "Paratweet",
        number: 30,
        types: ["Air"],
        abilities: ["Early Bird", "Confidence"],
        sAbility: ["Rev Up"],
        weight: 15,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/c/c8/Paratweet-model.png/revision/latest?cb=20190721164742",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/af/Paratweet-menu.png/revision/latest?cb=20190725230439",
        baseStats: {
            hp: 54,
            energy: 56,
            attack: 75,
            defense: 48,
            attackR: 32,
            defenseR: 43,
            speed: 88
        },
        evolvesTo: "Avitross",
        evolvesFrom: "Twittle",
        moveset: ["Scavenge"]
    },
 
    avitross: {
        name: "Avitross",
        number: 31,
        types: ["Air"],
        abilities: ["Early Bird", "Confidence"],
        sAbility: ["Rev Up"],
        weight: 44,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/9/9f/Avitross-model.png/revision/latest?cb=20190725115243",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/bc/Avitross-menu.png/revision/latest?cb=20190725230500",
        baseStats: {
            hp: 79,
            energy: 80,
            attack: 100,
            defense: 68,
            attackR: 62,
            defenseR: 63,
            speed: 113
        },
        evolvesFrom: "Paratweet",
        moveset: ["Nosedive", "Accelerate"]
    },
 
    pyder: {
        name: "Pyder",
        number: 32,
        types: ["Bug", "Toxic"],
        abilities: ["Webbing", "Apprehension"],
        sAbility: ["Coursing Venom"],
        weight: 7,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/be/Pyder-model.png/revision/latest?cb=20190721123857",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/9/93/Pyder-menu.png/revision/latest?cb=20190725230521",
        baseStats: {
            hp: 45,
            energy: 43,
            attack: 60,
            defense: 40,
            attackR: 30,
            defenseR: 40,
            speed: 45
        },
        evolvesTo: "Swolder",
        moveset: ["Web Shot", "Sting", "Bug Bite", "Burrow", "Eerie Stare", "Corrode", "Pestilence", "Pester", "Slime", "Parasitize", "Body Slam", "Mega Chomp"]
    },
 
    swolder: {
        name: "Swolder",
        number: 33,
        types: ["Bug", "Toxic"],
        abilities: ["Webbing", "Apprehension"],
        sAbility: ["Coursing Venom"],
        weight: 24,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/d2/Swolder-model.png/revision/latest?cb=20190721123843",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/f/f6/Swolder-menu.png/revision/latest?cb=20190725230545",
        baseStats: {
            hp: 85,
            energy: 70,
            attack: 115,
            defense: 85,
            attackR: 10,
            defenseR: 65,
            speed: 65
        },
        evolvesFrom: "Pyder",
        moveset: ["Poison", "Venom Chomp", "Slime", "Rejuvenate"]
    },
 
    antsee: {
        name: "Antsee",
        number: 34,
        types: ["Bug", "Plant"],
        abilities: ["Mystery Toxins", "Woodsman"],
        sAbility: ["Drainage"],
        weight: 5,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/1/1e/Antsee-model.png/revision/latest?cb=20190726190603",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/8/88/Antsee-menu.png/revision/latest?cb=20190725230617",
        baseStats: {
            hp: 55,
            energy: 43,
            attack: 25,
            defense: 60,
            attackR: 40,
            defenseR: 60,
            speed: 20
        },
        evolvesTo: "Florant",
        moveset: ["Dawdle", "Gnaw", "Bug Bite", "Burrow", "Take Root", "Pine Shot", "Pestilence", "Pester", "Parasitize", "Nature's Force", "Pheroblast", "Poison", "Wonder Herb"]
    },
 
    florant: {
        name: "Florant",
        number: 35,
        types: ["Bug", "Plant"],
        abilities: ["Mystery Toxins", "Woodsman"],
        sAbility: ["Drainage"],
        weight: 33,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/4/4e/Florant-model.png/revision/latest?cb=20190721230929",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/d7/Florant-menu.png/revision/latest?cb=20190725230634",
        baseStats: {
            hp: 85,
            energy: 68,
            attack: 45,
            defense: 90,
            attackR: 65,
            defenseR: 90,
            speed: 35
        },
        evolvesFrom: "Antsee",
        moveset: ["Sap Plant", "Bush Whack"]
    },
 
    grubby: {
        name: "Grubby",
        number: 36,
        types: ["Bug"],
        abilities: ["Premonition", "Odd Husk"],
        sAbility: ["Defensive Priority"],
        weight: 6,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/4/46/Grubby-model.png/revision/latest?cb=20190723011543",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/6/6c/Grubby-menu.png/revision/latest?cb=20190725230654",
        baseStats: {
            hp: 60,
            energy: 39,
            attack: 45,
            defense: 65,
            attackR: 35,
            defenseR: 48,
            speed: 37
        },
        evolvesTo: "Coonucopia",
        moveset: ["Gnaw", "Stare", "Bug Bite", "Sting", "Pestilence", "Life Drain", "Parasitize", "Provoke", "Venom Chomp", "Wing Slap"]
    },
 
    coonucopia: {
        name: "Coonucopia",
        number: 37,
        types: ["Bug"],
        abilities: ["Premonition", "Odd Husk"],
        sAbility: ["Defensive Priority"],
        weight: 12,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/ec/Coonucopia-model.png/revision/latest?cb=20190720215630",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/6/67/Coonucopia-menu.png/revision/latest?cb=20190725230719",
        baseStats: {
            hp: 60,
            energy: 48,
            attack: 45,
            defense: 65,
            attackR: 35,
            defenseR: 48,
            speed: 37
        },
        evolvesTo: ["Terrafly", "Terraclaw"],
        evolvesFrom: "Grubby",
        moveset: ["Brace"]
    },
 
    terrafly: {
        name: "Terrafly",
        number: 38,
        types: ["Bug", "Toxic"],
        abilities: ["Ambush", "Odd Husk"],
        sAbility: ["Bug Fever"],
        weight: 37,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/9/93/Terrafly-model.png/revision/latest?cb=20190724213822",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/e2/Terrafly-menu.png/revision/latest?cb=20190725230743",
        baseStats: {
            hp: 70,
            energy: 70,
            attack: 97,
            defense: 80,
            attackR: 46,
            defenseR: 60,
            speed: 72
        },
        evolvesFrom: "Coonucopia",
        moveset: ["Double Sting", "Slime", "Muck Blast"]
    },
 
    kleptyke: {
        name: "Kleptyke",
        number: 39,
        types: ["Dark"],
        abilities: ["Burglar", "Apprehension"],
        sAbility: ["Ability Thief"],
        weight: 14,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/9/93/Kleptyke-model.png/revision/latest?cb=20190721222923",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/6/6a/Kleptyke-menu.png/revision/latest?cb=20190725231021",
        baseStats: {
            hp: 55,
            energy: 48,
            attack: 50,
            defense: 40,
            attackR: 20,
            defenseR: 30,
            speed: 95
        },
        evolvesTo: "Ragoon",
        moveset: ["Dawdle", "Pounce", "Chomp", "Quick pounce", "Sharpen", "Pilfer", "Charade", "Rant", "Mega Chomp", "Provoke", "Dark Surge", "Body Slam", "Chase Down", "Hop Kick", "Spare"]
    },
 
    ragoon: {
        name: "Ragoon",
        number: 40,
        types: ["Dark"],
        abilities: ["Burglar", "Apprehension"],
        sAbility: ["Ability Thief"],
        weight: 30,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/e9/Ragoon-model.png/revision/latest?cb=20190721222943",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/8/88/Ragoon-menu.png/revision/latest?cb=20190725231025",
        baseStats: {
            hp: 90,
            energy: 75,
            attack: 95,
            defense: 85,
            attackR: 40,
            defenseR: 50,
            speed: 90
        },
        evolvesFrom: "Kleptyke",
        moveset: ["Slap Down", "Ill Will", "Barter"]
    },
 
    babore: {
        name: "Babore",
        number: 41,
        types: ["Earth"],
        abilities: ["Boast"],
        sAbility: ["Resilience"],
        weight: 21,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/d6/Babore-model.png/revision/latest?cb=20190722074643",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/e0/Babore-menu.png/revision/latest?cb=20190725231029",
        baseStats: {
            hp: 62,
            energy: 46,
            attack: 60,
            defense: 60,
            attackR: 30,
            defenseR: 30,
            speed: 38
        },
        evolvesTo: "Boarrok",
        moveset: ["Pounce", "Burrow", "Chomp", "Aim", "Quick Pounce", "Mud Spatter", "Quicksand", "Headbutt", "Body Slam", "Boulder Blast", "Earthquake", "Mega Chomp", "Raging Tackle"]
    },
 
    boarrok: {
        name: "Boarrok",
        number: 42,
        types: ["Earth"],
        abilities: ["Boast"],
        sAbility: ["Resilience"],
        weight: 53,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/d2/Boarrok-model.png/revision/latest?cb=20190723042511",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/4/45/Boarrok-menu.png/revision/latest?cb=20190725231032",
        baseStats: {
            hp: 92,
            energy: 76,
            attack: 110,
            defense: 90,
            attackR: 40,
            defenseR: 60,
            speed: 68
        },
        evolvesFrom: "Babore",
        moveset: ["Muck Buck"]
    },
 
    geklow: {
        name: "Geklow",
        number: 43,
        types: ["Electric", "Light"],
        abilities: ["Lightning Rod", "Radiance"],
        sAbility: ["Prismatic"],
        weight: 17,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/0/07/Geklow-model.png/revision/latest?cb=20190722174117",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/d8/Geklow-menu.png/revision/latest?cb=20190725231036",
        baseStats: {
            hp: 50,
            energy: 55,
            attack: 50,
            defense: 45,
            attackR: 68,
            defenseR: 50,
            speed: 67
        },
        evolvesTo: "Eleguana",
        moveset: ["Static Shock", "Stare", "Spare", "Shine", "Dodge", "Tase", "Light Dash", "Energize", "Examine", "Earthquake", "Luster Loot", "Thunderstrike", "Flash n Flee"]
    },
 
    eleguana: {
        name: "Eleguana",
        number: 44,
        types: ["Electric", "Light"],
        abilities: ["Lightning Rod", "Radiance"],
        sAbility: ["Prismatic"],
        weight: 57,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/db/Eleguana-model.png/revision/latest?cb=20191223032453",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/3/3e/Eleguana-menu.png/revision/latest?cb=20191214190218",
        baseStats: {
            hp: 80,
            energy: 80,
            attack: 50,
            defense: 85,
            attackR: 80,
            defenseR: 115,
            speed: 80
        },
        evolvesFrom: "Geklow",
        moveset: ["Magnify", "Gamma Pulse", "Thunder Crash"]
    },
 
    slugling: {
        name: "Slugling",
        number: 45,
        types: ["Plant"],
        abilities: ["Mystery Toxins", "Ungracious Host"],
        sAbility: ["Slimy"],
        weight: 12,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/6/6a/Slugling-model.png/revision/latest?cb=20200111194411",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/e5/Slugling-menu.png/revision/latest?cb=20191010140644",
        baseStats: {
            hp: 70,
            energy: 41,
            attack: 10,
            defense: 10,
            attackR: 50,
            defenseR: 70,
            speed: 45
        },
        evolvesTo: "Escargrow",
        moveset: ["Strike", "Dawdle", "Petal Pummel", "Slime", "Take Root", "Pine Shot", "Leaf Barrage", "Poison", "Nature's Force", "Photosynthesis", "Life Drain"]
    },
 
    escargrow: {
        name: "Escargrow",
        number: 46,
        types: ["Plant"],
        abilities: ["Mystery Toxins", "Ungracious Host"],
        sAbility: ["Slimy"],
        weight: 30,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/3/35/Escargrow-model.png/revision/latest?cb=20191007042646",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/b4/Escargrow-menu.png/revision/latest?cb=20191010140248",
        baseStats: {
            hp: 90,
            energy: 65,
            attack: 35,
            defense: 20,
            attackR: 65,
            defenseR: 90,
            speed: 50
        },
        evolvesTo: "Gastroak",
        evolvesFrom: "Slugling",
        moveset: ["Trip Root"]
    },
 
    gastroak: {
        name: "Gastroak",
        number: 47,
        types: ["Plant"],
        abilities: ["Mystery Toxins", "Ungracious Host"],
        sAbility: ["Slimy"],
        weight: 130,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/4/44/Gastroak-model.png/revision/latest?cb=20190722140413",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/5/50/Gastroak-menu.png/revision/latest?cb=20191010163648",
        baseStats: {
            hp: 115,
            energy: 83,
            attack: 55,
            defense: 35,
            attackR: 85,
            defenseR: 115,
            speed: 55
        },
        evolvesFrom: "Escargrow",
        moveset: ["Briar Block"]
    },
 
    kabunga: {
        name: "Kabunga",
        number: 48,
        types: ["Plant"],
        abilities: ["Communication", "Territorial"],
        sAbility: ["Noxious Weeds"],
        weight: 24,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/2/26/Kabunga-model.png/revision/latest?cb=20190917193651",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/c/cf/Kabunga-menu.png/revision/latest?cb=20191010140509",
        baseStats: {
            hp: 52,
            energy: 53,
            attack: 76,
            defense: 43,
            attackR: 64,
            defenseR: 34,
            speed: 86
        },
        evolvesTo: ["WikiWiki", "Chartiki"],
        moveset: ["Strike", "Brace", "Petal Pummel", "Pine Shot", "Bush Whack", "Muck Blast", "Provoke", "Scapegoat", "Toxic Spores", "Rejuvenate", "Ill Will", "Barter"]
    },
 
    wikiwiki: {
        name: "WikiWiki",
        number: 49,
        types: ["Plant"],
        abilities: ["Communication", "Chaperone"],
        sAbility: ["Noxious Weeds"],
        weight: 117,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/be/Wiki-Wiki-model.png/revision/latest?cb=20191006163729",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/bf/Wiki-Wiki-menu.png/revision/latest?cb=20191010140715",
        baseStats: {
            hp: 152,
            energy: 125,
            attack: 49,
            defense: 55,
            attackR: 49,
            defenseR: 55,
            speed: 47
        },
        evolvesFrom: "Kabunga",
        moveset: ["Wonder Herb", "Life Drain", "Poison", "Sap Plant", "Photosynthesis", "Energy Gift", "Health Gift", "Hypnotize"]
    },
 
    chartiki: {
        name: "Chartiki",
        number: 50,
        types: ["Plant", "Fire"],
        abilities: ["Communication", "Territorial"],
        sAbility: ["Noxious Weeds"],
        weight: 81,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/1/15/Chartiki-model.png/revision/latest?cb=20191007055627",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/a8/Chartiki-menu.png/revision/latest?cb=20191010140216",
        baseStats: {
            hp: 98,
            energy: 104,
            attack: 15,
            defense: 75,
            attackR: 103,
            defenseR: 75,
            speed: 62
        },
        evolvesFrom: "Kabunga",
        moveset: ["Fire Breath", "Life Drain", "Briar Block", "Photosynthesis", "Nature's Force"]
    },
 
    shawchi: {
        name: "Shawchi",
        number: 51,
        types: ["Mind"],
        abilities: ["Enchant"],
        sAbility: ["Sharp Focus"],
        weight: 19,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/a2/Shawchi-model.png/revision/latest?cb=20200111200527",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/2/26/Shawchi-menu.png/revision/latest?cb=20191010140613",
        baseStats: {
            hp: 79,
            energy: 91,
            attack: 36,
            defense: 42,
            attackR: 99,
            defenseR: 64,
            speed: 89
        },
        moveset: ["Brainwash", "Dawdle", "Mind's Eye", "Aim", "Swipe", "Quick Pounce", "Peace of Mind", "Foul Chant", "Elemental Burst", "Energy Gift", "Health Gift", "Flabbergast", "Barter"]
    },
 
    rakrawla: {
        name: "Rakrawla",
        number: 52,
        types: ["Earth"],
        abilities: ["Clutch", "Hasty"],
        sAbility: ["Lazy"],
        weight: 15,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/1/15/Rakrawla-model.png/revision/latest?cb=20191019151227",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/c/c1/Rakrawla-menu.png/revision/latest?cb=20191010140543",
        baseStats: {
            hp: 75,
            energy: 59,
            attack: 51,
            defense: 68,
            attackR: 44,
            defenseR: 54,
            speed: 43
        },
        evolvesTo: "Sedimars",
        moveset: ["Burrow", "Gnaw", "Boulder Blast", "Swipe", "Mud Spatter", "Examine", "Chomp", "Blaze Chomp", "Body Slam", "Chase Down", "Thunder Chomp", "Rejuvenate"]
    },
 
    sedimars: {
        name: "Sedimars",
        number: 53,
        types: ["Earth"],
        abilities: ["Clutch", "Hasty"],
        sAbility: ["Lazy"],
        weight: 106,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/dd/Sedimars-model2.png/revision/latest?cb=20191008012437",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/9/9b/Sedimars-menu.png/revision/latest?cb=20191010140556",
        baseStats: {
            hp: 107,
            energy: 87,
            attack: 88,
            defense: 98,
            attackR: 47,
            defenseR: 76,
            speed: 54
        },
        evolvesFrom: "Rakrawla",
        moveset: ["Raging Tackle", "Provoke", "Sharpen", "Earthquake", "Ill Will"]
    },
 
    gumpod: {
        name: "Gumpod",
        number: 54,
        types: ["Water"],
        abilities: ["Protective Shell"],
        sAbility: ["Sharp Edges"],
        weight: 5,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/f/fc/Gumpod-model.png/revision/latest?cb=20191006112958",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/4/47/Gumpod-menu.png/revision/latest?cb=20191010140350",
        baseStats: {
            hp: 60,
            energy: 55,
            attack: 42,
            defense: 98,
            attackR: 42,
            defenseR: 43,
            speed: 33
        },
        evolvesTo: "Ventacean",
        moveset: ["Spray", "Brace", "Eerie Stare", "Sleet Shot", "Water Bomb", "Scapegoat"]
    },
 
    ventacean: {
        name: "Ventacean",
        number: 55,
        types: ["Water"],
        abilities: ["Protective Shell"],
        sAbility: ["Sharp Edges"],
        weight: 104,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/5/5d/Ventacean-model.png/revision/latest?cb=20191007041809",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/2/27/Ventacean-menu.png/revision/latest?cb=20191010163724",
        baseStats: {
            hp: 90,
            energy: 85,
            attack: 52,
            defense: 142,
            attackR: 75,
            defenseR: 53,
            speed: 48
        },
        evolvesFrom: "Gumpod",
        moveset: ["Geyser", "Hydro Slash", "Soft Water"]
    },
 
    phancub: {
        name: "Phancub",
        number: 56,
        types: ["Spirit", "Brawler"],
        abilities: ["Sharp Claws"],
        sAbility: ["Adorable"],
        weight: 8,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/9/98/Phancub-model.png/revision/latest?cb=20191012072754",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/2/22/Phancub-menu.png/revision/latest?cb=20191014084522",
        baseStats: {
            hp: 46,
            energy: 60,
            attack: 65,
            defense: 50,
            attackR: 46,
            defenseR: 55,
            speed: 60
        },
        evolvesTo: "Ursoul",
        moveset: ["Startle", "Stare", "Punch", "Quick Punch", "Slash", "Chase Down", "Final Ruse", "Shadow Sprint", "Slap Down"]
    },
 
    ursoul: {
        name: "Ursoul",
        number: 57,
        types: ["Spirit", "Brawler"],
        abilities: ["Sharp Claws"],
        sAbility: ["Terrifying"],
        weight: 95,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/5/59/Ursoul-model.png/revision/latest?cb=20191012070306",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/ee/Ursoul-menu.png/revision/latest?cb=20191014084336",
        baseStats: {
            hp: 99,
            energy: 89,
            attack: 115,
            defense: 63,
            attackR: 30,
            defenseR: 80,
            speed: 75
        },
        evolvesFrom: "Phancub",
        moveset: ["Steel Trap", "Hop Kick", "Sharpen", "Phantom Slash"]
    },
 
    whispup: {
        name: "Whispup",
        number: 58,
        types: ["Spirit", "Fire"],
        abilities: ["Temper", "Scorching Skin"],
        sAbility: ["Vengeance"],
        weight: 1,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/ea/Whispup-model.png/revision/latest?cb=20191012072955",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/b5/Whispup-menu.png/revision/latest?cb=20191014084355",
        baseStats: {
            hp: 45,
            energy: 60,
            attack: 57,
            defense: 42,
            attackR: 70,
            defenseR: 48,
            speed: 72
        },
        evolvesTo: "Revenine",
        moveset: ["Startle", "Stare", "Singe", "Gnaw", "Final Ruse", "Stretch", "Shadow Sprint", "Blaze Chomp", "Fire Breath", "Mega Chomp", "Phantom Slash", "Power Focus"]
    },
 
    revenine: {
        name: "Revenine",
        number: 59,
        types: ["Spirit", "Fire"],
        abilities: ["Temper", "Scorching Skin"],
        sAbility: ["Vengeance"],
        weight: 22,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/3/32/Revenine-model.png/revision/latest?cb=20191013011031",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/7/7c/Revenine-menu.png/revision/latest?cb=20191014084420",
        baseStats: {
            hp: 60,
            energy: 89,
            attack: 90,
            defense: 58,
            attackR: 115,
            defenseR: 62,
            speed: 97
        },
        evolvesFrom: "Whispup",
        moveset: ["Ghostly Howl", "Accelerate", "Spectral Burst"]
    },
 
    skilava: {
        name: "Skilava",
        number: 60,
        types: ["Fire"],
        abilities: ["Combustible", "Scorching Skin"],
        sAbility: ["Pyro"],
        weight: 6,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/2/2c/Skilava-render.png/revision/latest?cb=20190908155158",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/c/ce/Skilava-menu.png/revision/latest?cb=20191010140628",
        baseStats: {
            hp: 50,
            energy: 70,
            attack: 48,
            defense: 49,
            attackR: 58,
            defenseR: 49,
            speed: 55
        },
        evolvesTo: "Geksplode",
        moveset: ["Growl", "Gnaw", "Dodge", "Quick Pounce", "Stretch", "Accelerate", "Earthquake", "Mud Spatter"]
    },
 
    geksplode: {
        name: "Geksplode",
        number: 61,
        types: ["Fire"],
        abilities: ["Combustible", "Scorching Skin"],
        sAbility: ["Pyro"],
        weight: 54,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/b3/Geksplode-model.png/revision/latest?cb=20191007032945",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/b8/Geksplode-menu.png/revision/latest?cb=20191010140335",
        baseStats: {
            hp: 65,
            energy: 80,
            attack: 52,
            defense: 58,
            attackR: 80,
            defenseR: 59,
            speed: 60
        },
        evolvesTo: "Eruptidon",
        evolvesFrom: "Skilava",
        moveset: ["Fire Slam", "Burn Up", "Magma Block", "Blaze Chomp"]
    },
 
    eruptidon: {
        name: "Eruptidon",
        number: 62,
        types: ["Fire"],
        abilities: ["Combustible", "Scorching Skin"],
        sAbility: ["Pyro"],
        weight: 102,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/f/f4/Eruptidon-model.png/revision/latest?cb=20191007054146",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/a9/Eruptidon-menu.png/revision/latest?cb=20191010163657",
        baseStats: {
            hp: 81,
            energy: 90,
            attack: 89,
            defense: 69,
            attackR: 100,
            defenseR: 84,
            speed: 77
        },
        evolvesFrom: "Geksplode",
        moveset: ["Lava Slash", "Fire Breath"]
    },
 
    craytal: {
        name: "Craytal",
        number: 63,
        types: ["Fire"],
        abilities: ["Volcanic", "Territorial"],
        sAbility: ["Combustible"],
        weight: 11,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/2/28/Craytal-model.png/revision/latest?cb=20191006111112",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/a9/Craytal-menu.png/revision/latest?cb=20191010140234",
        baseStats: {
            hp: 76,
            energy: 74,
            attack: 34,
            defense: 43,
            attackR: 76,
            defenseR: 43,
            speed: 62
        },
        evolvesTo: ["Krakaloa", "Volkaloa"],
        moveset: ["Singe", "Brace", "Spare", "Swipe", "Dodge", "Slash", "Power Focus", "Fire Slam", "Burn Up", "Earthquake", "Fire Breath", "Raging Tackle", "Mud Spatter", "Rejuvenate"]
    },
 
    krakaloa: {
        name: "Krakaloa",
        number: 64,
        types: ["Fire"],
        abilities: ["Volcanic", "Territorial"],
        sAbility: ["Combustible"],
        weight: 155,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/3/3c/Krakaloa-model.png/revision/latest?cb=20191006151049",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/e1/Krakaloa-menu.png/revision/latest?cb=20191010140523",
        baseStats: {
            hp: 85,
            energy: 125,
            attack: 35,
            defense: 90,
            attackR: 81,
            defenseR: 94,
            speed: 22
        },
        evolvesFrom: "Craytal",
        moveset: ["Magma Burst", "Scapegoat", "Magma Block"]
    },
 
    volkaloa: {
        name: "Volkaloa",
        number: 65,
        types: ["Fire", "Ancient"],
        abilities: ["Volcanic", "Territorial"],
        sAbility: ["Combustible"],
        weight: 107,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/8/8d/Volkaloa-model.png/revision/latest/scale-to-width-down/620?cb=20191109235506",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/0/08/Volkaloa-menu.png/revision/latest?cb=20191010140658",
        baseStats: {
            hp: 81,
            energy: 86,
            attack: 105,
            defense: 54,
            attackR: 55,
            defenseR: 49,
            speed: 102
        },
        evolvesFrom: "Craytal",
        moveset: ["Savage Greed", "Coconut Bomb", "Blaze Chomp", "Primal Slash", "Ill Will"]
    },
 
    igneol: {
        name: "Igneol",
        number: 66,
        types: ["Ancient"],
        abilities: ["Premonition", "Sharp Edges"],
        sAbility: ["Resilience"],
        weight: 15,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/9/9f/Igneol-model.png/revision/latest?cb=20191008003857",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/a6/Igneol-menu.png/revision/latest?cb=20191010140404",
        baseStats: {
            hp: 62,
            energy: 75,
            attack: 60,
            defense: 70,
            attackR: 42,
            defenseR: 41,
            speed: 42
        },
        evolvesTo: "Chrysite",
        moveset: ["Gnaw", "Burrow", "Mud Spatter", "Power Focus", "Headbutt", "Scapegoat", "Raging Tackle", "Body Slam", "Earthquake", "Mega Chomp"]
    },
 
    chrysite: {
        name: "Chrysite",
        number: 67,
        types: ["Ancient"],
        abilities: ["Premonition", "Sharp Edges"],
        sAbility: ["Resilience"],
        weight: 77,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/6/6d/Chrysite-model.png/revision/latest?cb=20191009010904",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/ee/Chrysite-menu.png/revision/latest?cb=20191010163706",
        baseStats: {
            hp: 82,
            energy: 80,
            attack: 64,
            defense: 99,
            attackR: 47,
            defenseR: 46,
            speed: 42
        },
        evolvesTo: "Obsidrugon",
        evolvesFrom: "Igneol",
        moveset: ["Brace"]
    },
 
    obsidrugon: {
        name: "Obsidrugon",
        number: 68,
        types: ["Ancient"],
        abilities: ["Premonition", "Sharp Edges"],
        sAbility: ["Resilience"],
        weight: 133,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/f/f8/Obsidrugon-model.png/revision/latest?cb=20191222064052",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/bc/Obsidrugon-menu.png/revision/latest?cb=20191010163715",
        baseStats: {
            hp: 99,
            energy: 100,
            attack: 90,
            defense: 124,
            attackR: 67,
            defenseR: 65,
            speed: 65
        },
        evolvesFrom: "Chrysite",
        moveset: ["Beast's Slumber", "Primal Slash", "Sharpen"]
    },
 
    cafnotef: {
        name: "CafnoteF",
        number: 69,
        types: ["Typeless"],
        abilities: ["Adorable", "Virtuoso"],
        sAbility: ["Tone Deaf"],
        weight: 57,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/3/35/Cafnote-F-model.png/revision/latest?cb=20191209053448",
        tinyImage: "https://media.discordapp.net/attachments/657074172664610817/678143428734746624/cafnotef.png",
        baseStats: {
            hp: 60,
            energy: 60,
            attack: 42,
            defense: 58,
            attackR: 42,
            defenseR: 62,
            speed: 53
        },
        evolvesTo: "Mootune",
        moveset: ["Stare", "Strike", "Spare", "Stretch", "Repeating Tune", "Quick Pounce", "Raging Howl", "Tease"]
    },
 
    cafnotem: {
        name: "CafnoteM",
        number: 69,
        types: ["Typeless"],
        abilities: ["Territorial", "Virtuoso"],
        sAbility: ["Brute Force"],
        weight: 57,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/dd/Cafnote-M-model.png/revision/latest?cb=20191209053436",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/f/fb/Cafnote-menu.png/revision/latest?cb=20191130145628",
        baseStats: {
            hp: 60,
            energy: 60,
            attack: 42,
            defense: 62,
            attackR: 42,
            defenseR: 58,
            speed: 53
        },
        evolvesTo: "Trumbull",
        moveset: ["Stare", "Strike", "Spare", "Stretch", "Tone Barrier", "Quick Pounce", "Mega Chomp", "Raging Tackle"]
    },
 
    trumbull: {
        name: "Trumbull",
        number: 70,
        types: ["Typeless"],
        abilities: ["Territorial", "Virtuoso"],
        sAbility: ["Brute Force"],
        weight: 187,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/4/4a/Trumbull-model.png/revision/latest?cb=20191130164456",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/be/Trumbull-menu.png/revision/latest?cb=20191130144243",
        baseStats: {
            hp: 92,
            energy: 75,
            attack: 134,
            defense: 102,
            attackR: 42,
            defenseR: 62,
            speed: 73
        },
        evolvesFrom: "CafnoteM",
        moveset: ["Battle Horn", "Headbutt", "Provoke", "Body Slam"]
    },
 
    mootune: {
        name: "Mootune",
        number: 71,
        types: ["Typeless"],
        abilities: ["Adorable", "Virtuoso"],
        sAbility: ["Tone Deaf"],
        weight: 146,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/0/0e/Mootune-model.png/revision/latest?cb=20191130164530",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/b5/Mootune-menu.png/revision/latest?cb=20191130144257",
        baseStats: {
            hp: 92,
            energy: 75,
            attack: 42,
            defense: 73,
            attackR: 134,
            defenseR: 102,
            speed: 62
        },  
        evolvesFrom: "CafnoteF",
        moveset: ["Resonate", "Harmonious Chord", "Dissonant Chord"]
    },
 
    gobbidemic: {
        name: "Gobbidemic",
        number: 72,
        types: ["Toxic"],
        abilities: ["Immunized"],
        sAbility: ["Baneful"],
        weight: 43,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/8/8f/Gobbidemic-model.png/revision/latest?cb=20191130162605",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/0/0e/Gobbidemic-menu.png/revision/latest?cb=20191130144757",
        baseStats: {
            hp: 70,
            energy: 80,
            attack: 15,
            defense: 60,
            attackR: 88,
            defenseR: 64,
            speed: 123
        },
        moveset: ["Sting", "Squawk", "Peck", "Corrode", "Stretch", "Slime", "Muck Blast", "Gobble Goop", "Energy Gift", "Health Gift", "Poison", "Provoke", "Wonder Herb", "Hypnotize", "Trip Root"]
    },
 
    icigool: {
        name: "Icigool",
        number: 73,
        types: ["Spirit", "Ice"],
        abilities: ["Parting Gift"],
        weight: 7,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/f/fb/Icigool-Yellow-model.png/revision/latest?cb=20191213232138",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/9/9d/Icigool-menu.png/revision/latest?cb=20191213014505",
        baseStats: {
            hp: 95,
            energy: 69,
            attack: 112,
            defense: 94,
            attackR: 10,
            defenseR: 81,
            speed: 39
        },
        moveset: ["Startle", "Snowdozer", "Chomp", "Gain Drain", "Chilly Chomp", "Phantom Slash", "Mega Chomp", "Impersonate", "Blaze Chomp", "Energy Gift", "Health Gift", "Thunder Chomp", "Hypnotize", "Ill Will", "Barter"]
    },

    pyramind: {
        name: "Pyramind",
        number: 74,
        types: ["Mind"],
        abilities: ["Idiosyncratic", "Temper"],
        sAbility: ["Contact Curse"],
        weight: 113,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/4/43/Pyramind-model.png/revision/latest?cb=20200314022909",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/b0/Pyramind-menu.png/revision/latest?cb=20200312235600",
        baseStats: {
            hp: 88,
            energy: 60,
            attack: 45,
            defense: 69,
            attackR: 84,
            defenseR: 99,
            speed: 35
        },
        evolvesTo: "Pharoglyph", 
        moveset: ["Brainwash", "Mind's Eye", "Rant", "Return to Sender", "Boulder Blast", "Peace of Mind", "Spectral Burst", "Flabbergast", "Bane of Haste", "Dark Surge", "Phantom Slash", "Provoke", "Mud Spatter"]
    },

    pharoglyph: {
        name: "Pharoglyph",
        number: 75,
        types: ["Mind"],
        abilities: ["Idiosyncratic", "Temper"],
        sAbility: ["Contact Curse"],
        weight: 166,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/5/57/Pharoglyph-model.png/revision/latest?cb=20200310213001",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/2/2d/Pharoglyph-menu.png/revision/latest?cb=20200312234208",
        baseStats: {
            hp: 88,
            energy: 95,
            attack: 50,
            defense: 50,
            attackR: 120,
            defenseR: 101,
            speed: 106
        },
        evolvesFrom: "Pyramind",
        moveset: ["Memorize", "Hop Kick", "Cerebral Slash"]
    },

    burroach: {
        name: "Burroach",
        number: 76,
        types: ["Bug", "Earth"],
        abilities: ["Trash Armor", "Slimy"],
        sAbility: ["Sharp Claws"],
        weight: 16,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/f/f4/Burroach-model.png/revision/latest/scale-to-width-down/310?cb=20200802094800",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/5/51/Burroach-menu.png/revision/latest/scale-to-width-down/35?cb=20200802164905",
        baseStats: {
            hp: 32,
            energy: 60,
            attack: 46,
            defense: 63,
            attackR: 45,
            defenseR: 54,
            speed: 77
        },
        evolvesTo: "Garbantis",
        moveset: ["Gnaw", "Burrow", "Bug Bite", "Mud Spatter", "Stretch", "Venom Chomp", "Headbutt", "Eerie Stare", "Poison"]
    },
 
    garbantis: {
        name: "Garbantis",
        number: 77,
        types: ["Bug", "Earth"],
        abilities: ["Trash Armor", "Slimy"],
        sAbility: ["Sharp Claws"],
        weight: 58,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/a7/Garbantis-model.png/revision/latest?cb=20200803192502",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/1/14/Garbantis-menu.png/revision/latest/scale-to-width-down/35?cb=20200802164919",
        baseStats: {
            hp: 53,
            energy: 76,
            attack: 77,
            defense: 90,
            attackR: 54,
            defenseR: 64,
            speed: 104
        },
        evolvesFrom: "Burroach",
        moveset: ["Battering Ram", "Provoke", "Clay Slap", "Molt", "Parasitize"]
    },
 
     whimpor: {
        name: "Whimpor",
        number: 78,
        types: ["Metal", "Air"],
        abilities: ["Clutch", "Frail Armor"],
        sAbility: ["Toxic Filter"],
        weight: 32,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/4/49/Whimpor-render-0.png/revision/latest/scale-to-width-down/310?cb=20200804093442",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/d3/Whimpor-menu.png/revision/latest?cb=20200802164939",
        baseStats: {
            hp: 62,
            energy: 58,
            attack: 21,
            defense: 46,
            attackR: 59,
            defenseR: 62,
            speed: 53
        },
        evolvesTo: "Stratusoar",
        moveset: ["Tail Slap", "Metal Swipes", "Brace", "Gust", "Body Slam", "Metal Shriek", "Cyclone Slam", "Heavy Bash", "Air Blade", "Reflection Burst", "Metal Blast", "Perch"]
    },
 
    stratusoar: {
        name: "Stratusoar",
        number: 79,
        types: ["Metal", "Air"],
        abilities: ["Clutch", "Frail Armor"],
        sAbility: ["Toxic Filter"],
        weight: 221,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/2/2b/Stratusoar-model.png/revision/latest/scale-to-width-down/310?cb=20200804085902",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/eb/Stratusoar-menu.png/revision/latest/scale-to-width-down/35?cb=20200802164954",
        baseStats: {
            hp: 95,
            energy: 80,
            attack: 34,
            defense: 77,
            attackR: 105,
            defenseR: 108,
            speed: 81
        },
        evolvesFrom: "Whimpor",
        moveset: ["Second Wind"]
    },
 
    territi: {
        name: "Territi",
        number: 80,
        types: ["Toxic", "Metal"],
        abilities: ["Immunized", "Confidence"],
        sAbility: ["Handy"],
        weight: 29,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/ac/Territi-model.png/revision/latest?cb=20200803182024",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/4/49/Territi-menu.png/revision/latest/scale-to-width-down/35?cb=20200802165010",
        baseStats: {
            hp: 51,
            energy: 58,
            attack: 61,
            defense: 44,
            attackR: 59,
            defenseR: 48,
            speed: 52
        },
        evolvesTo: "Dyeborg",
        moveset: ["Dawdle", "Corrode", "Bash", "Punch", "Power Focus", "Hop Kick", "Canister Burst", "Poison", "Steel Crusher", "Hypnotize", "Barter"]
    },
 
    dyeborg: {
        name: "Dyeborg",
        number: 81,
        types: ["Toxic", "Metal"],
        abilities: ["Immunized", "Tank"],
        sAbility: ["Handy"],
        weight: 180,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/5/5c/Dyeborg-model.png/revision/latest/scale-to-width-down/310?cb=20200802210555",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/a7/Dyeborg-menu.png/revision/latest/scale-to-width-down/35?cb=20200802165024",
        baseStats: {
            hp: 73,
            energy: 86,
            attack: 92,
            defense: 78,
            attackR: 88,
            defenseR: 82,
            speed: 68
        },
        evolvesFrom: "Territi",
        moveset: ["Graffiti", "Heavy Bash", "Paint Shower"]
    },
 
    operaptor: {
        name: "Operaptor",
        number: 82,
        types: ["Metal", "Earth"],
        abilities: ["Terrifying", "Power Jaw"],
        sAbility: ["Staunch"],
        weight: 39,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/a3/Operaptor-model.png/revision/latest?cb=20200803170527",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/c/c0/Operaptor-menu.png/revision/latest/scale-to-width-down/35?cb=20200802165037",
        baseStats: {
            hp: 53,
            energy: 67,
            attack: 64,
            defense: 61,
            attackR: 45,
            defenseR: 53,
            speed: 49
        },
        evolvesTo: "Concredon",
        moveset: ["Gnaw", "Clamp", "Burrow", "Chomp", "Headbutt", "Power Focus", "Quicksand", "Scapegoat", "Earthquake", "Mud Spatter"]
    },
 
    concredon: {
        name: "Concredon",
        number: 83,
        types: ["Metal", "Earth"],
        abilities: ["Terrifying", "Power Jaw"],
        sAbility: ["Staunch"],
        weight: 106,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/1/18/Concredon-model.png/revision/latest?cb=20200805102429",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/a3/Concredon-menu.png/revision/latest/scale-to-width-down/35?cb=20200802165052",
        baseStats: {
            hp: 77,
            energy: 77,
            attack: 84,
            defense: 69,
            attackR: 53,
            defenseR: 64,
            speed: 66
        },
        evolvesTo: "Tyrecks",
        evolvesFrom: "Operaptor",
        moveset: ["Clay Slap", "Body Slam", "Heavy Bash"]
    },
 
    tyrecks: {
        name: "Tyrecks",
        number: 84,
        types: ["Metal", "Earth"],
        abilities: ["Terrifying", "Power Jaw"],
        sAbility: ["Staunch"],
        weight: 405,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/2/21/Tyrecks-model.png/revision/latest/scale-to-width-down/310?cb=20200804093548",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/5/5b/Tyrecks-menu.png/revision/latest/scale-to-width-down/35?cb=20200802165104",
        baseStats: {
            hp: 89,
            energy: 89,
            attack: 111,
            defense: 102,
            attackR: 62,
            defenseR: 83,
            speed: 74
        },
        evolvesFrom: "Concredon",
        moveset: ["Complete Demolition"]
    },
 
    chompactor: {
        name: "Chompactor",
        number: 85,
        types: ["Metal"],
        abilities: ["Salvage", "Rev Up"],
        sAbility: ["Specialization"],
        weight: 24,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/e8/Chompactor-render.png/revision/latest/scale-to-width-down/310?cb=20200518222153",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/b4/Chompactor-menu.png/revision/latest/scale-to-width-down/35?cb=20200802165118",
        baseStats: {
            hp: 58,
            energy: 55,
            attack: 61,
            defense: 73,
            attackR: 32,
            defenseR: 51,
            speed: 45
        },
        evolvesTo: "Munchweel",
        moveset: ["Gnaw", "Aim", "Metal Swipes", "Oil Leak", "Chomp", "Bash", "Double Whack", "Blaze Chomp", "Chilly Chomp", "Thunder Chomp"]
    },
 
    munchweel: {
        name: "Munchweel",
        number: 86,
        types: ["Metal"],
        abilities: ["Salvage", "Rev Up"],
        sAbility: ["Specialization"],
        weight: 193,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/da/Munchweel-model.png/revision/latest?cb=20200804002527",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/1/1e/Munchweel-menu.png/revision/latest/scale-to-width-down/35?cb=20200802165131",
        baseStats: {
            hp: 89,
            energy: 79,
            attack: 94,
            defense: 113,
            attackR: 42,
            defenseR: 78,
            speed: 66
        },
        evolvesFrom: "Chompactor",
        moveset: ["Heavy Bash", "Quick Punch", "Mega Chomp"]
    },
 
    scorb: {
        name: "Scorb",
        number: 87,
        types: ["Metal"],
        abilities: ["Communication"],
        sAbility: ["Clutch"],
        weight: 11,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/5/53/Scorb-model.png/revision/latest?cb=20200807050150",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/2/2c/Scorb-menu.png/revision/latest/scale-to-width-down/35?cb=20200802165146",
        baseStats: {
            hp: 49,
            energy: 55,
            attack: 25,
            defense: 42,
            attackR: 67,
            defenseR: 45,
            speed: 77
        },
        evolvesTo: "Veylens",
        moveset: ["Bash", "Static Shock", "Singe", "Flurry", "Metal Shriek", "Examine"]
    },
 
    veylens: {
        name: "Veylens",
        number: 88,
        types: ["Metal"],
        abilities: ["Communication"],
        sAbility: ["Clutch"],
        weight: 24,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/1/14/Veylens-Model.png/revision/latest?cb=20200802151602",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/9/98/Veylens-menu.png/revision/latest/scale-to-width-down/35?cb=20200802165159",
        baseStats: {
            hp: 57,
            energy: 64,
            attack: 28,
            defense: 56,
            attackR: 88,
            defenseR: 67,
            speed: 55
        },
        evolvesTo: "Gardrone",
        moveset: ["Heavy Bash", "Reflection Burst", "Thunder Slam", "Precision Bolt", "Fire Slam", "Raging Flame", "Snowdozer", "Sleet Shot", "Eerie Stare", "Mind's Eye"]
    },
 
    gardrone: {
        name: "Gardrone",
        number: 89,
        types: ["Metal"],
        abilities: ["Communication"],
        sAbility: ["Clutch"],
        weight: 67,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/a/af/Gardrone-model.png/revision/latest/scale-to-width-down/310?cb=20200803172033",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/e/e9/Gardrone-menu.png/revision/latest/scale-to-width-down/35?cb=20200802165213",
        baseStats: {
            hp: 69,
            energy: 82,
            attack: 54,
            defense: 68,
            attackR: 132,
            defenseR: 119,
            speed: 61
        },
        evolvesFrom: "Veylens",
        moveset: ["Jump Start", "Metal Blast", "Steel Crusher", "Thundestrike", "Fire Breath", "Frost Beam"]
    },
 
    poochrol: {
        name: "Poochrol",
        number: 90,
        types: ["Metal", "Electric"],
        abilities: ["Brute Force"],
        sAbility: ["Power Jaw"],
        weight: 9,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/b2/Poochrol-model.png/revision/latest?cb=20200803201058",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/db/Poochrol-menu.png/revision/latest/scale-to-width-down/35?cb=20200802165224",
        baseStats: {
            hp: 51,
            energy: 51,
            attack: 49,
            defense: 52,
            attackR: 41,
            defenseR: 47,
            speed: 69
        },
        evolvesTo: "Hunder",
        moveset: ["Growl", "Static Shock", "Metal Swipes", "Quick Pounce", "Precision Bolt", "Chomp", "Blaze Chomp", "Chilly Chomp", "Thunder Chomp"]
    },
 
    hunder: {
        name: "Hunder",
        number: 91,
        types: ["Metal", "Electric"],
        abilities: ["Brute Force"],
        sAbility: ["Power Jaw"],
        weight: 43,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/c/cb/Hunder-model.png/revision/latest/scale-to-width-down/310?cb=20200804022558",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/c/c3/Hunder-menu.png/revision/latest/scale-to-width-down/35?cb=20200802165239",
        baseStats: {
            hp: 78,
            energy: 84,
            attack: 94,
            defense: 83,
            attackR: 43,
            defenseR: 69,
            speed: 116
        },
        evolvesFrom: "Poochrol",
        moveset: ["Rough Up", "Sharpen", "Heavy Bash", "Mega Chomp"]
    },

    terraclaw: {
        name: "Terraclaw",
        number: 92,
        types: ["Bug"],
        abilities: ["Odd Husk", "Pincer Trap"],
        sAbility: ["Slick Shell"],
        weight: 33,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/0/09/Terraclaw-model.png/revision/latest?cb=20200817030441",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/3/30/Terraclaw-menu.png/revision/latest/scale-to-width-down/35?cb=20200816182023",
        baseStats: {
            hp: 79,
            energy: 72,
            attack: 121,
            defense: 106,
            attackR: 20,
            defenseR: 54,
            speed: 43
        },
        evolvesFrom: "Coonucopia",
        moveset: ["Clamp Claw", "Eerie Stare", "Cyclone Slam", "Body Slam", "Mega Chomp"]
    },
 
    duskit: {
        name: "Duskit",
        number: 192,
        types: ["Mind", "Spirit"],
        abilities: ["Harmonize"],
        sAbility: ["Mean Spirited"],
        weight: 16,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/b/b5/Duskit-model.png/revision/latest?cb=20190721034301",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/3/37/Duskit-menu.png/revision/latest?cb=20190725231044",
        baseStats: {
            hp: 74,
            energy: 100,
            attack: 100,
            defense: 81,
            attackR: 105,
            defenseR: 81,
            speed: 109
        },
        moveset: ["Startle", "Final Ruse", "Brainwash", "Stupefy", "Return to Sender", "Oppress", "Spectral Burst", "Peace of Mind", "Phantom Slash", "Chase Down", "Dark Surge", "Flabbergast", "Hypnotize"]
    },
 
    ikazune: {
        name: "Ikazune",
        number: 193,
        types: ["Fire", "Electric"],
        abilities: ["Raging Fire"],
        sAbility: ["Rechargeable"],
        weight: 38,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/d/d2/Ikazune-model.png/revision/latest?cb=20191012191221",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/3/3a/Ikazune-menu.png/revision/latest?cb=20191014084316",
        baseStats: {
            hp: 68,
            energy: 125,
            attack: 104,
            defense: 62,
            attackR: 139,
            defenseR: 78,
            speed: 74
        },
        moveset: ["Tase", "Singe", "Static Shock", "Thunder Chomp", "Blaze Chomp", "Electroburst", "Fire Breath", "Power Focus", "Thunder Crash", "Energize", "Flash n Flee"]
    },

    protogon: {
        name: "Protogon",
        number: 194,
        types: ["Metal"],
        abilities: ["Analyze"],
        sAbility: ["Replicate"],
        weight: 135,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/4/48/Protogon-model.png/revision/latest?cb=20200803180225",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/7/78/Protogon-menu.png/revision/latest/scale-to-width-down/35?cb=20200803235744",
        baseStats: {
            hp: 53,
            energy: 108,
            attack: 67,
            defense: 94,
            attackR: 111,
            defenseR: 96,
            speed: 121
        },
        moveset: ["Metal Swipes", "Power Siphon", "Dart Burst", "Energy Surge", "Ancient Instinct", "Metal Blast", "Thunderstrike", "Bash", "Tail Slap", "Tune-up"]
    },

    mutagon: {
        name: "Mutagon",
        number: 203,
        types: ["Mind", "Brawler"],
        abilities: ["Tank"],
        sAbility: ["Heavy Fists"],
        weight: 125,
        image: "https://vignette.wikia.nocookie.net/loomian-legacy/images/3/38/Mutagon-model.png/revision/latest/scale-to-width-down/310?cb=20200816020513",
        tinyImage: "https://vignette.wikia.nocookie.net/loomian-legacy/images/0/0c/Mutagon-menu.png/revision/latest/scale-to-width-down/35?cb=20200816183855",
        baseStats: {
            hp: 107,
            energy: 123,
            attack: 104,
            defense: 134,
            attackR: 48,
            defenseR: 63,
            speed: 71
        },
        moveset: ["Chop", "Telekinetic Sweep", "Frost Punch", "Brawn Boost", "Mega Punch", "Punch", "Stare", "Brainwash", "Swipe", "Ill Will", "Barter"]
    },
};

for (let key in loomians) {
    let loomian = loomians[key]; 
    if (loomian.evolvesFrom != undefined) {
        for (let key2 in loomians[loomian.evolvesFrom.toLowerCase()].moveset) {
            let move = loomians[loomian.evolvesFrom.toLowerCase()].moveset[key2];
            loomian.moveset.push(move);
        }
    }
    if (!loomian.moveset.includes("Dodge")) {
        loomian.moveset.push("Dodge");
    }
    loomian.moveset.sort();
}