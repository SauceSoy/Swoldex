var abilities = {
    abilityThief: {
        name: "Ability Thief",
        description: "When this Loomian makes contact with the foe, it copies their ability."
    },

    adorable: {
        name: "Adorable",
        description: "On switch-in, this Loomian lowers the foes' Melee Defense by 1 stage."
    },

    ambush: {
        name: "Ambush",
        description: "This Loomian attacks with double power against a foe that switched in this turn."
    },

    analyze: {
        name: "Analyze",
        description: "On switch-in, this Loomian's Melee Attack or Ranged Attack is raised by 1 stage based on the foe's weaker Defense."
    },

    appliedFrustration: {
        name: "Applied Frustration",
        description: "This Loomian's Ranged Attack is raised by 2 stages for each of its stats that is lowered by a foe."
    },

    apprehension: {
        name: "Apprehension",
        description: "On switch-in, this Loomian shudders if any foe has a supereffective move."
    },

    awakening: {
        name: "Awakening",
        description: "This Loomian's same-type attack bonus is 1.4x instead of 1.25x."
    },

    baneful: {
        name: "Baneful",
        description: "This Loomian deals 1.2x more damage against poisoned foes."
    },

    boast: {
        name: "Boast",
        description: "On switch-in, this Loomian's Melee Attack is raised by 1 stage if this Loomian's Melee Attack is higher than the foe's, and is lowered by 1 stage otherwise."
    },

    bruteForce: {
        name: "Brute Force",
        description: "This Loomian's attacks with secondary effects have 1.2x power; nullifies the effects."
    },

    bugFever: {
        name: "Bug Fever",
        description: "This Loomian's Melee Attack is raised by 1 stage if it attacks and KOs another Loomian with a Bug-type attack."
    },

    burglar: {
        name: "Burglar",
        description: "When this Loomian makes contact with the foe, if this Loomian is not already holding an item, it will steal the foe's, otherwise it will knock off their item."
    },

    chaperone: {
        name: "Chaperone",
        description: "This side's Plant types can't have stats lowered or status inflicted by other Loomian."
    },

    circadian: {
        name: "Circadian",
        description: "If Tiklipse, this Loomian's type will alternate between Light and Dark every turn."
    },

    clutch: {
        name: "Clutch",
        description: "If this Loomian is at full HP, it survives one hit with at least 1 HP."
    },

    combustible: {
        name: "Combustible",
        description: "This Loomian's Fire-type attacks do 1.5x damage if hit by one Fire-type move; Fire immunity."
    },

    communication: {
        name: "Communication",
        description: "This Loomian does not take damage from attacks made by its allies."
    },

    confidence: {
        name: "Confidence",
        description: "This Loomian does not flinch."
    },

    contactCurse: {
        name: "Contact Curse",
        description: "When an opponent makes contact with this Loomian, they lose 1/16 of their maximum energy."
    },

    coursingVenom: {
        name: "Coursing Venom",
        description: "This Loomian's Toxic-type attacks do 1.5x damage if hit by one Toxic-type move; Toxic immunity."
    },

    dawn: {
        name: "Dawn",
        description: "If an active ally has this Ability or the Dusk Ability, this Loomian's Ranged Attack is 1.5x."
    },

    defensivePriority: {
        name: "Defensive Priority",
        description: "On switch-in, this Loomian's Speed is lowered by 2 stages and its Melee Defense and Ranged Defense are both increased by 1 stage."
    },

    drainage: {
        name: "Drainage",
        description: "This Loomian gains 1.5x HP from moves that drain a foe's HP."
    },

    dusk: {
        name: "Dusk",
        description: "If an active ally has this Ability or the Dawn Ability, this Loomian's Melee Attack is 1.5x."
    },

    earlyBird: {
        name: "Early Bird",
        description: "This Loomian's sleep counter drops by 2 instead of 1."
    },

    enchant: {
        name: "Enchant",
        description: "This Loomian's damaging attacks have a 10% chance to daze the foe."
    },

    flutter: {
        name: "Flutter",
        description: "This Loomian is immune to powder moves and damage from weather."
    },

    frailArmor: {
        name: "Frail Armor",
        description: "When hit by a Melee attack, this Loomian's Melee Defense is lowered by 1 stage and its Speed is raised by 1 stage."
    },

    handy: {
        name: "Handy",
        description: "Support moves have +1 priority."
    },

    harmonize: {
        name: "Harmonize",
        description: "If another Loomian burns/poisons/paralyzes this Loomian, it also gets that status."
    },

    hasty: {
        name: "Hasty",
        description: "This Loomian's Melee Attack is 1.5x and accuracy of its melee attacks is 0.8x."
    },

    heavyFists: {
        name: "Heavy Fists",
        description: "Punching and slapping moves have 50% more power."
    },

    idiosyncratic: {
        name: "Idiosyncratic",
        description: "This Loomian's Melee and Ranged stats are swapped compared to other members of their species."
    },

    illuminate: {
        name: "Illuminate",
        description: "This Loomian's Typeless-type moves become Light type and have 1.1x power."
    },

    immunized: {
        name: "Immunized",
        description: "This Loomian is immune to status ailments."
    },

    lazy: {
        name: "Lazy",
        description: "This Loomian moves last among Loomian using the same or greater priority moves."
    },

    lightningRod: {
        name: "Lightning Rod",
        description: "This Loomian draws Electric moves to itself to raise its Ranged Attack by 1 stage; Electric immunity."
    },

    meanSpirited: {
        name: "Mean Spirited",
        description: "This Loomian deals 1.2x more damage against sleeping foes."
    },

    mysteryToxins: {
        name: "Mystery Toxins",
        description: "There is a 30% chance of poison/paralysis/sleep on others making contact with this Loomian."
    },

    neutralize: {
        name: "Neutralize",
        description: "This Loomian's moves are changed to be Typeless type and have 1.2x power."
    },

    noxiousWeeds: {
        name: "Noxious Weeds",
        description: "This Loomian's Plant-type attacks do 1.5x damage if hit by one Plant-type move; Plant immunity."
    },

    oddHusk: {
        name: "Odd Husk",
        description: "This Loomian is protected from the secondary effects of moves that hit it."
    },

    overshadow: {
        name: "Overshadow",
        description: "This Loomian's Typeless-type moves become Dark type and have 1.1x power."
    },

    partingGift: {
        name: "Parting Gift",
        description: "When this Loomian is knocked out, this Loomian deals a random amount of damage to the foe that knocked it out; 20% chance to deal 1/16 of their max HP, 50% chance to deal 1/8 of their max HP, 20% chance to deal 1/4 of their max HP, 10% chance to deal 1/2 of their max HP."
    },

    pincerTrap: {
        name: "Pincer Trap",
        description: "This Loomian's biting moves trap the foe until the end of the next turn, or until this Loomian switches."
    },

    powerJaw: {
        name: "Power Jaw",
        description: "Biting attacks have 50% more power."
    },

    powerNapper: {
        name: "Power Napper",
        description: "This Loomian restores 1/4 of its maximum HP, rounded down, when it switches out."
    },

    premonition: {
        name: "Premonition",
        description: "On switch-in, this Loomian is alerted to the foes' move with the highest power."
    },

    prismatic: {
        name: "Prismatic",
        description: "This Loomian's Light-type attacks do 1.5x damage if hit by one Light-type move; Light immunity."
    },

    protectiveShell: {
        name: "Protective Shell",
        description: "This Loomian cannot be critically hit."
    },

    pyro: {
        name: "Pyro",
        description: "This Loomian's Fire-type attacks do 1.5x damage and cost 1.5x more energy."
    },

    radiance: {
        name: "Radiance",
        description: "This Loomian's Light-type attacks have a 10% chance to daze the foe."
    },

    ragingFire: {
        name: "Raging Fire",
        description: "1/4 of this Loomian's max Energy is restored if hit by a Fire-type attack; Fire immunity."
    },

    rechargeable: {
        name: "Rechargeable",
        description: "This Loomian's Speed is raised 1 stage if hit by an Electric-type attack; Electric immunity."
    },

    replicate: {
        name: "Replicate",
        description: "This Loomian copies the foe's ability when it enters battle."
    },

    resilience: {
        name: "Resilience",
        description: "This Loomian's Melee Defense is raised by 1 stage after it is damaged by a move."
    },

    revUp: {
        name: "Rev Up",
        description: "This Loomian's Speed is raised 1 stage at the end of each full turn on the field."
    },

    salvage: {
        name: "Salvage",
        description: "If this Loomian has no item, it finds one used by an adjacent Loomian this turn."
    },

    scorchingSkin: {
        name: "Scorching Skin",
        description: "There is a 30% chance that a Loomian making contact with this Loomian will be burned."
    },

    sharpClaws: {
        name: "Sharp Claws",
        description: "This Loomian's contact moves have their power multiplied by 1.3."
    },

    sharpEdges: {
        name: "Sharp Edges",
        description: "Loomian making contact with this Loomian lose 1/8 of their max HP."
    },

    sharpFocus: {
        name: "Sharp Focus",
        description: "Moves this Loomian uses that have less than 100% Accuracy are boosted to 100% Accuracy and cost 10% more Energy."
    },

    slickShell: {
        name: "Slick Shell",
        description: "This Loomian's Ranged Defense is doubled."
    },

    slimy: {
        name: "Slimy",
        description: "Loomian making contact with this Loomian have their Speed lowered by 1 stage."
    },

    specialization: {
        name: "Specialization",
        description: "The fewer moves this Loomian knows, the more power they have; 200% for 1 move, 150% for 2 moves, 125% for 3 moves."
    },

    staunch: {
        name: "Staunch",
        description: "Prevents other Loomian from lowering this Loomian's stat stages."
    },

    tank: {
        name: "Tank",
        description: "This Loomian takes half damage on the first turn every time it is switched into battle."
    },

    temper: {
        name: "Temper",
        description: "This Loomian's Ranged Attack is raised by 1 stage when it reaches 1/2 or less of its max HP."
    },

    terrifying: {
        name: "Terrifying",
        description: "On switch-in, this Loomian lowers the Melee Attack of adjacent opponents by 1 stage."
    },

    territorial: {
        name: "Territorial",
        description: "This Loomian's moves have their power boosted by 25% when attacking Loomians of the same gender, but are 25% weaker against Loomians of the opposite gender."
    },

    thrivingPace: {
        name: "Thriving Pace",
        description: "If this Loomian is statused, its Speed is 1.5x; ignores Speed drop from paralysis."
    },

    toneDeaf: {
        name: "Tone Deaf",
        description: "This Loomian's sound moves have their power multiplied by 1.1."
    },

    totalEclipse: {
        name: "Total Eclipse",
        description: "This Loomian's Speed is raised 1 stage if hit by a Light-type or Dark-type attack; Light and Dark immunity."
    },

    toxicFilter: {
        name: "Toxic Filter",
        description: "This Loomian's next Air-type attack has 50% more power when hit by a Toxic-type move; Toxic immunity."
    },

    trashArmor: {
        name: "Trash Armor",
        description: "This Loomian's Melee Defense is increased by 50%."
    },

    ungraciousHost: {
        name: "Ungracious Host",
        description: "This Loomian damages those draining HP from it for as much as they would heal."
    },

    vengeance: {
        name: "Vengeance",
        description: "If an ally was knocked out last turn, this Loomian's attacks have 2x power."
    },

    virtuoso: {
        name: "Virtuoso",
        description: "This Loomian's sound moves have their energy cost reduced by 25%."
    },

    volcanic: {
        name: "Volcanic",
        description: "This Loomian's Fire-type attacks do 2x damage; cannot act the next turn if a Fire-type attack was used."
    },

    webbing: {
        name: "Webbing",
        description: "Loomian making contact with this Loomian have their Speed lowered by 1 stage."
    },

    woodsman: {
        name: "Woodsman",
        description: "This Loomian's Melee Attack is raised by 1 stage if hit by a Plant-type attack; Plant immunity."
    }
};