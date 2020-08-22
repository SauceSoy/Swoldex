var sets = {
    placeholder: {
        name: "placeholder",
        overview: "",
        sets: [
            {
                setName: "Wallbreaker",
                ability: "Awakening",
                items: ["Energy Orb", "Heavy Armor"],
                personalities: ["Very Brawny", "Sluggish", "Clumsy"],
                evs: ["AtkM 200", "HP 200", "DefM 100"],
                moves: {
                    move1: ["Pounce"],
                    move2: ["Singe", "Searing Steel"],
                    move3: ["Power Focus"],
                    move4: ["Ancient Roar", "Gamma Pulse", "Yeti's Wrath"]
                },
                detail: `
                `
            },
        ],
        teamOptions: "",
        checksAndCounters: "",
        credits: "Written by yours truly"
    },

    himbrr: {
        name: "OLD",
        overview: `Boasting incredible HP and M Def stats, Himbrr serves as the premiere Icicle Trapper within the current meta. With an unresisted STAB combination supplemented by Awakening, it is able to deal significant damage to a majority of opposing Loomians while still being able to take attacks from nukes such as Trumbull, Zuelong, and Boarrok. With an Ice / Earth typing, Himbrr can threaten Loomians with hazard removal such as Eruptidon and Avitross. Despite these perks, Himbrr's lack of recovery options leaves it vulnerable to being worn down by opposing attacks or status as a game progresses.`,
        sets: [
            {
                setName: "Bulky Icicle Trapper",
                ability: "Awakening",
                items: ["Health Amulet"],
                personalities: ["Very Clumsy", "Robust", "Clever"],
                evs: ["HP 200", "M Def 100", "R Def 200"],
                moves: {
                    move1: ["Icicle Trap"],
                    move2: ["Winter's Fury"],
                    move3: ["Earthquake"],
                    move4: ["Quicksand"]
                },
                detail: `Max TP investment in HP and R Def alongside a Clever personality allows for maximum protection against ranged attackers. 200 HP with 100 M Def and a Robust personality prevents Himbrr from being 3HKOd by Brawny Power Cuffs Searknight. Health Amulet aids Himbrr with consistent recovery that scales well with it’s high HP stat, a tool Himbrr does not have access to otherwise. Health Amulet is a huge boost to Himbrr's kit, and losing it could cost its user greatly. Despite Ice / Earth STAB hitting the majority of the meta for super-effective damage, Himbrr lacks a high M Atk stat and encourages relatively safe entry from Loomians such as Defensive Vesperatu, Chartiki, and Luminami. Other threats may simply predict and punish Himbrr for selecting a resisted STAB when switching in such as Tahtab and Searknight. Quicksand allows for Himbrr to reliably beat opposing Himbrrs, Trumbull, and potentially R Def variants of Sedimars.`
            }
        ],
        teamOptions: `Himbrr appreciates teammates that benefit from its bulkiness and Icicle Trap damage. Avitross has the ability to threaten and even check Brawler Types while nuking Fire Types such as Eruptidon and Krakaloa. Additionally, Himbrr switches into the likes of Zuelong and Eleguana for Avitross. Tiklipse serves as a Slap Down absorber and benefits from Icicle Traps breaking down the Plant Types that are immune to it’s Gloominous Roar. Wonder Herb users such as Gobbidemic, Florant, Wiki-Wiki, and Gastroak all are effective at serving as clerics erasing the crippling poisons and burns that would typically be the end for Himbrr. The likes of Krakaloa and Ikazune are able to switch into an incoming fire nuke and absorb the attack for Himbrr. It’s for this reason that Chartiki is also able to come into a Tahtab, anticipating a Life Drain and boosting it’s own Plant STAB.`,
        checksAndCounters: `<b>Chip:</b> Himbrr has no form of recovery outside of Health Amulet making it vulnerable to chip damage. Himbrr is also susceptible to being Poisoned or Burned, neutralizing Health Amulet recovery and, if burned, greatly decreasing Himbrr’s damage output. Consequently, Poison Barbs largely affects Himbrr’s longevity.
 
        <br><br><b>Water Types:</b> Luminami and Ventacean excel at taking hits from Himbrr and threatening it with more damage in return. Luminami is able to heal off any damage done by Himbrr easily with Rejuvenate or Power Napper while wearing down Himbrr with super effective STAB. Luminami is further able to create momentum for it’s own team via Flash and Flee on the switch-in. Ventacean threatens a 30% burn from Geyser and disregards Himbrrs attempts to break through its monstrous 142 M Def stat.
         
        <br><br><b>Fire Types:</b> Despite being weak to Earth, many Fire Loomians are capable of nuking Himbrr with huge damage such as Eruptidon, Ikazune, and Revinine. Chartiki, Searknight, and Krakaloa even have the bulk to take Earthquakes from Himbrr. Additionally, Fire Loomians have the ability to pressure Himbrr by burning Icicle Traps when switching in.
         
        <br><br><b>Brawler Types:</b> Tahtab has the offensive power to 2HKO Himbrr when using Power Cuffs and a Brawny personality. It can easily whittle down Himbrr with a mixed attacking set, healing off any damage it may have taken with Life Drain. Ursoul threatens to remove Himbrr’s Health Amulet with slap down and whittles it down with Quick Punches.`,
        writtenBy: "Written by: Buna",
        credits: `<b>Written By:</b> Buna <br><b>Reviewed By:</b> SrRojo`
    },

    zuelong: {
        name: "OLD",
        overview: `Zuelong is a tried-and-true late-game cleaner that is capable of providing a unique form of momentum for its teammates. As one of the fastest Loomians in the game, it is capable of outspeeding almost every offensive threat and punishing teams with a lack of a defensive backbone. Its excellent offensive typing allows for it to hit a majority of the metagame for at least neutral damage which can help pick off weakened foes with ease. Unfortunately, without any way to strengthen its attacks during a battle, it can be hard to deal any significant damage with Zuelong while its checks are still healthy. With many of Zuelong's best checks having either superb bulk or reliable recovery, Zuelong struggles heavily to make dents on bulkier teams without reliable team support.`,
        sets: [
            {
                setName: "Offensive Pivot",
                ability: "Brute Force",
                items: ["Ancient Essence", "Electric Essence"],
                personalities: ["Very Nimble", "Tender", "Foolish"],
                evs: ["R Atk 200", "Spe 200", "M Atk 80", "Eng 20"],
                moves: {
                    move1: ["Elemental Burst"],
                    move2: ["Thunderstrike"],
                    move3: ["Ancient Roar"],
                    move4: ["Chilly Chomp"]
                },
                detail: `200 Speed and a Very Nimble Personality makes Zuelong the second-fastest unboosted Loomian in the game (right after Very Nimble Gobbidemic). This allows for Zuelong to pick off as many Loomians during the late-game as possible. Max Ranged Attack is needed to ensure that Zuelong is dealing as much damage as possible. 20 Energy Investment is used to guarantee Zuelong can perform any combination of Elemental Burst and Thunderstrike a total of 5 times before having to Wait/Rest. The remaining TPs are poured into Melee Attack to strengthen the power of Chilly Chomp or invested into HP if Dodge is used instead. Elemental Burst is Zuelong's most versatile STAB attack as it is only resisted by Light and Metal. Thunderstrike provides helpful coverage by dealing with the aforementioned Metal types as well as opposing Water and Air types. Ancient Roar turns Zuelong into a fast pivot that can provide momentum for teammates. Chilly Chomp, when boosted by Brute Force, allows Zuelong to break past certain Plant types that would otherwise give it trouble such as Florant and Gastroak. Dodge can be used as an alternative to Chilly Chomp to mitigate Energy usage while wasting the opponent's Energy.`
            }
        ],
        teamOptions: `Loomians with access to Chase Down such as Ursoul and Searknight make for excellent partners as they can effectively trap the myriad of Light and Plant types that give Zuelong trouble. In return, Zuelong is capable of luring in these Light and Plant types by using Ancient Roar, forcing Chase Down 50/50s. Tahtab also synergizes well offensively with Zuelong as it can shut down Eleguana and Himbrr while Zuelong handles Loomians such as Vesperatu and Avitross, effectively covering their respective weaknesses
        <br><br><b>Other Options:</b> Power Cuffs is an alternative item that boosts both of Zuelong's STAB attacks. The main drawback to this is the increased Energy cost of all attacks which forces Zuelong to Wait/Rest early. A Smart/Nimble set with Very Foolish or Very Frail can also be used to deal additional damage while still outspeeding relevant threats such as Very Nimble Tahtab.`,
        checksAndCounters: `<b>Eleguana:</b> Eleguana resists both of Zuelong's STABs, sports a great set of natural bulk, and runs enough Melee Defense to shrug off Chilly Chomps. Eleguana also poses an immediate threat to Zuelong with Gamma Pulse.
        
        <br><br><b>Priority Users:</b> Loomians with access to priority such as Ursoul and Vesperatu can pick off weakened Zuelongs without giving them a chance to attack or pivot.
        
        <br><br><b>Earth Types:</b> Sedimars and Himbrr are both able to comfortably switchin to Zuelong's Elemental Burst and threaten it out with a STAB earth attack. Heavy Shield Boarrok can also check Zuelong as it avoids a 2HKO from Elemental Burst.
        
        <br><br><b>R Def Walls:</b> Without Chilly Chomp, plant types such as Florant and Gastroak are capable of reliably switching into Zuelong. Wiki-Wiki, in particular, can swap into Zuelong reliably even with Chilly Chomp.`,
        writtenBy: "Written By: SrRojo",
        credits: `<b>Written By:</b> SrRojo`
    }
    
}