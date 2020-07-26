let skills = {
  Medic: {
    steadyHands: {
      name_en: "Steady Hands",
      desc: "For 3 turns, increases the action speed of all actions, and the healing power of healing skills (including items). The TP cost of healing skills is halved.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    medicalMiracle: {
      name_en: "Medical Miracle",
      desc: "Revives and removes ailments, binds and debuffs from all party members, and restores their HP.",
      stats: ["WIS"],
      unique: true,
      type: "Break",
      dep: { steadyHands: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    lineHeal: {
      name_en: "Line Heal",
      desc: "Restores HP to one row.",
      stats: ["WIS", "Head"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1.5 }
    },
    refresh: {
      name_en: "Refresh",
      desc: "Removes ailments from one ally. Higher level increases range to one row.",
      stats: ["Head"],
      dep: { lineHeal:3 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    unbind: {
      name_en: "Unbind",
      desc: "Removes binds from one ally. Higher levels increase range to one row.",
      stats: ["Head"],
      dep: { lineHeal:3 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    delayedHeal: {
      name_en: "Delayed Heal",
      desc: "Restores HP to all party members at the start of the next turn. Cannot be used on consecutive turns. Ineffective if the user dies before the skill activates.",
      stats: ["WIS", "Head"],
      dep: { refresh: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    chaseHeal: {
      name_en: "Chase Heal",
      // for a set number of times
      desc: "For one turn, automatically restores HP to allies when they are attacked. Every time this skill activates, its chance of activating decreases.",
      stats: ["WIS", "Head"],
      dep: { unbind: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    overheal: {
      name_en: "Overheal",
      desc: "Medic skills in battle can restore HP over party members' maximum HP by a set percentage. The overhealed amount is removed at the end of turn.",
      stats: [],
      dep: { delayedHeal:3, chaseHeal:3 },
      maxLevel: 6,
      coords: { x: 3, y: 1.5 }
    },
    defender: {
      name_en: "Defender",
      desc: "Increases the party's physical and bind defense for a set number of turns.",
      stats: ["Head"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    immunize: {
      name_en: "Immunize",
      desc: "Increases the party's elemental and ailment defense for a set number of turns.",
      stats: ["Head"],
      dep: { defender:3 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    indomitability: {
      //Rouse
      name_en: "Indomitability",
      desc: "Increases the party's physical and elemental attack for a set number of turns.",
      stats: ["Head"],
      dep: { immunize:3 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    succor: {
      name_en: "Succor",
      //desc: "When the user is alive, party members with buffs will recover HP when taking damage.",
      desc: "When the user is alive, party members with buffs will recover HP when they act.",
      stats: ["WIS"],
      dep: { indomitability: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 3 }
    },
    // scavenge: {
    //   name_en: "Skanda Ensemble",
    //   desc: "For one turn, all allies with a buff will have their action speed increased.",
    //   stats: [],
    //   dep: {  },
    //   maxLevel: 4,
    //   coords: { x: 5, y: 3 }
    // },
    // healing: {
    //   name_en: "CPR/Appease Spirits/Benevolence",
    //   desc: "This turn, the selected target(s) may endure fatal damage. / When the Shaman is alive, party members with buffs will recover HP when they act. / While the Shaman is alive, party members with buffs will recover HP when taking damage.",
    //   stats: ["WIS"],
    //   dep: { },
    //   maxLevel: 8,
    //   coords: { x: 0, y: 3 }
    // },
    groupTherapy: {
      name_en: "Group Therapy",
      desc: "For a set number of turns, increases the range of the user's healing skills, but decreases healing power and action speed.",
      stats: [],
      dep: { overheal:3, succor:3 },
      maxLevel: 8,
      coords: { x: 4, y: 1.75 }
    },
    healDejaVu: {
      name_en: "Heal Deja Vu",
      desc: "For a set number of turns, at the end of each turn, all party members will receive again the effect of the last Medic active skill they received, provided that they received at least one Medic active skill while Heal Deja Vu is active.",
      stats: [],
      dep: { overheal:3, succor:3 },
      maxLevel: 8,
      coords: { x: 4, y: 2.75 }
    },
    aglaophotis: {
      name_en: "Aglaophotis",
      desc: "Increases the duration of all buffs on all party members.",
      stats: [],
      dep: { groupTherapy: 3, healDejaVu: 3 },
      maxLevel: 6,
      coords: { x: 5, y: 2.25 }
    },
    caduceus: {
      name_en: "Caduceus",
      desc: "Deals melee bash damage to one target. Attempts to inflict stun and head bind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    mendingBlow: {
      name_en: "Mending Blow",
      desc: "Deal melee bash damage to one target. Restores HP to the users row.",
      stats: ["STR", "LUC"],
      dep: { caduceus: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    heavyStrike: {
      //Heavy Strike Knockout Blow
      name_en: "Fierce Strike",
      desc: "Deals melee bash damage to one target. The user is inflicted with paralysis afterwards.",
      stats: ["STR", "LUC"],
      dep: { mendingBlow: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    starDrop: {
      name_en: "Star Drop",
      desc: "Deals melee bash damage to one target and increases damage that target takes for the rest of the turn.",
      stats: [],
      dep: { heavyStrike: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    // vitalHit: {
    //   name_en: "Vital Hit",
    //   desc: "Deals melee bash damage to one enemy. Damage is multiplied by the party's current average HP compared to their normal max.",
    //   stats: ["STR", "LUC"],
    //   dep: { starDrop: 2 },
    //   maxLevel: 8,
    //   coords: { x: 4, y: 4 }
    // },
    // scavenge: {
    //   //name_en: "Salve",
    //   name_en: "Phantom Pain",
    //   //desc: "Restores HP to ???. This restoration can heal beyond maximum HP. Overhealed HP will disappear at the end of the turn.",
    //   desc: "For a set number of turns, at the end of each turn, all enemies will receive again the effect of the last Medic active skill they received, provided that they received at least one Medic active skill while Phantom Pain is active.",
    //   stats: [],
    //   dep: { staffMastery: 3 },
    //   maxLevel: 4,
    //   coords: { x: 5, y: 4.5 }
    // },
    revive: {
      name_en: "Revive",
      desc: "Revives one ally.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5.5 }
    },
    finalGift: {
      name_en: "Final Gift",
      desc: "When the user dies, restores HP to all allies.",
      stats: ["WIS"],
      dep: { revive: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    autoRevive: {
      name_en: "Auto-Revive",
      desc: "When an ally dies, there is a chance to automatically revive that ally.",
      stats: [],
      dep: { finalGift: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    patchUp: {
      name_en: "Patch Up",
      desc: "Restores HP to all allies at the end of battle. Does not activate if the party flees.",
      stats: ["WIS"],
      dep: { revive: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    antibodies: {
      name_en: "Antibodies",
      desc: "Increases the user's rate of recovery from binds and ailments.",
      stats: [],
      dep: { patchUp: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    physick: {
      name_en: "Physick",
      desc: "Increases all healing done by your party.",
      stats: [],
      dep: { antibodies: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    take: {
      name_en: "Take",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },

  Survivalist: {
    illusionStep: {
      name_en: "Illusion Step",
      name_jp: "夢幻陣形",
      desc: "For 3 turns, increases the user's evasion and chance of being targeted.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    // illusionStep: {
    //   name_en: "Illusion Step",
    //   name_jp: "夢幻陣形",
    //   desc: "For 3 turns, increases the user's evasion and chance of being targeted. Adds an extra chaser attack to bow attacks and skills.",
    //   stats: [],
    //   unique: true,
    //   type: "Boost",
    //   dep: { },
    //   maxLevel: 0,
    //   coords: { x: 0, y: 0 }
    // },
    mirageArrow: {
        name_en: "Mirage Arrow",
        name_jp: "ミラージュアロー",
        desc: "Deals ranged stab damage to one target. Decreases their accuracy and make them act last for 3 turns.",
        stats: ["STR", "Arms"],
        unique: true,
        type: "Break",
        dep: { illusionStep: 0 },
        maxLevel: 0,
        coords: { x: 1, y: 0 }
      },
    // mirageArrow: {
    //   name_en: "Summer Rain",
    //   name_jp: "ミラージュアロー",
    //   desc: "Deals 16 instances of ranged stab damage to random targets. Can hit the same target 4 times at most. Decreases their accuracy and make them act last for 3 turns.",
    //   stats: ["STR", "Arms", "Bow"],
    //   unique: true,
    //   type: "Break",
    //   dep: { illusionStep: 0 },
    //   maxLevel: 0,
    //   coords: { x: 1, y: 0 }
    // },
    flameArrow: {
      name_en: "Flame Arrow",
      name_jp: "フレイムアロー",
      desc: "Deals ranged stab+fire damage to one target, with line-piercing effects.",
      stats: ["STR", "Arms", "Bow"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1.5 }
    },
    flankShot: {
      // name_en: "Foot Pierce",
      // desc: "Deals ranged stab damage to one row. Attempts to inflict leg bind. If sucessful, or if the enemy is already inflicted with leg bind, the user will attack that enemy again.",
      name_en: "Flank Shot",
      name_jp: "フランクショット",
      desc: "Deals ranged stab damage to one row.",
      stats: ["STR", "Arms", "Bow"],
      dep: { flameArrow: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    finishingArrow: {
      name_en: "Finishing Arrow",
      name_jp: "仕留めの一矢",
      desc: "When the user attacks a target whose HP is below a set threshold, the user follows up with their weapon. Does not activate for links, chases or counterattacks.",
      stats: ["STR"],
      dep: { flankShot: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    multiShot: {
      name_en: "Multi-Shot",
      name_jp: "ダブルショット",
      desc: "Deals 2 instances of ranged stab damage to one enemy.",
      stats: ["STR", "Arms", "Bow"],
      dep: { flameArrow: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    dropShot: {
      name_en: "Drop Shot",
      name_jp: "ドロップショット",
      desc: "Deals ranged stab damage to one target. Damage increases if the target is in the back row.",
      stats: ["STR", "Arms", "Bow"],
      dep: { multiShot: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    disablingShot: {
      name_en: "Disabling Shot",
      name_jp: "エイミングフット",
      desc: "When the user attacks with a bow skill, attempts to inflict leg bind.",
      //[/Deals ranged stab damage to one target. Attempts to inflict stun and leg bind.]
      stats: ["LUC, Bow"],
      dep: { finishingArrow: 1 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    sagittariusShot: {
      name_en: "Sagittarius Shot",
      name_jp: "サジタリウスの矢",
      desc: "At the beginning of the next turn, ranged stab damage is dealt to a random target. Attempts to inflict stun. Ineffective if the user dies before the skill activates.",
      stats: ["STR", "LUC", "Arms", "Bow"],
      dep: { dropShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    autoSagittarius: {
      name_en: "Auto-Sagittarius",
      name_jp: "自然の恩恵",
      // desc: "Deals ranged stab damage to one target. Damage is increased depending on the number of evades the user has made since they last used this skill.",
      desc: "If Sagittarius Shot is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: ["STR", "Arms", "Bow"],
      dep: { sagittariusShot: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    naturesCloak: {
      //Sylphscreen
      name_en: "Nature's Cloak",
      name_jp: "トリックステップ",
      // / Increases evasion whenever the user deals damage to an enemy. / Increases evasion and damage taken from cut/stab/bash. / Damage taken is increased during the turn this skill is used.  /
      desc: "Increases evasion until the end of the next turn. Damage taken is increased during the turn this skill is used. At the start of battle, automatically puts the user in the Nature's Cloak state.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    chainThrust: {
      //Squall Volley
      name_en: "Chain Thrust",
      name_jp: "チェインダンス",
      desc: "Deals ranged stab damage to one target and, for that turn, increases the user's evasion and chance of being targeted.",
      stats: ["STR", "Arms", "Bow"],
      dep: { naturesCloak: 2  },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    blindArrow: {
      name_en: "Blind Arrow",
      name_jp: "ブラインドアロー",
      desc: "Deals ranged stab damage to one target. Attempts to inflict blind.",
      stats: ["STR", "LUC", "Arms", "Bow"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    sereneBreeze: {
      name_en: "Serene Breeze",
      name_jp: "抑制攻撃ブースト",
      desc: "Places a buff on an ally that allows them to dodge the next incoming physical attack. When an attack is dodged, the buff is removed.",
      stats: ["Legs"],
      dep: { blindArrow: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    blurredVeil: {
      name_en: "Blurred Veil",
      name_jp: "忍法　猿飛",
      desc: "This turn, the selected row has a high chance of evading physical attacks. Each time they evade an attack, the evasion boost is reduced.",
      stats: ["Legs"],
      dep: { sereneBreeze:2 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    mistStep: {
      name_en: "Mist Step",
      name_jp: "整頓術",
      desc: "Increases Force whenever the user dodges an attack.",
      stats: [],
      dep: { chainThrust: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    sylphid: {
      name_en: "Sylphid",
      name_jp: "素早さブースト",
      desc: "When an attack is dodged, the user will counter-attack the source of the attack. Has a chance of triggering multiple times.",
      stats: ["STR", "Arms", "Bow"],
      dep: { mistStep: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    rayOfLight: {
      name_en: "Ray of Light",/*Shivelight, Komorebi*/
      name_jp: "奇襲",
      desc: "When the user dodges an attack, their chance to be targeted and defense increase. If the they fail to dodge an attack, Ray of Light's effects are reset.",
      stats: [],
      dep: { blurredVeil: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    hazyShot: {
      name_en: "Hazy Shot",
      name_jp: "朧矢",
      desc: "Deals ranged stab damage to one target. Always hits. Can only be used if the user evaded an attack on the previous turn.",
      stats: ["STR", "Arms", "Bow"],
      dep: { sylphid: 3, rayOfLight: 3  },
      maxLevel: 8,
      coords: { x: 4, y: 3.5 }
    },/*
    eyeForAnEye: {
      name_en: "Nature's Wrath",
      name_jp: "自然の恩恵",
      desc: "Deals ranged stab damage to one target. Damage is increased depending on the number of evades the user has made since they last used this skill.",
      stats: ["STR", "Arms", "Bow"],
      dep: { hazyShot: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 3.5 }
    },*/
    riskPerception: {
      name_en: "Risk Perception",
      name_jp: "危機感知",
      desc: "There is a set chance that blindsides will be negated.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    resuscitate: {
      name_en: "Resuscitate",
      name_jp: "簡易手当",
      desc: "Restores HP to one ally. Can only be used in the field. Higher levels allow this skill to revive the target as well.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    stalker: {
      name_en: "Stalker",
      name_jp: "警戒歩行",
      desc: "For a set number of steps, reduces encounter rate.",
      stats: [],
      dep: { riskPerception: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    efficiency: {
      name_en: "Efficiency",
      name_jp: "エフィシエント",
      desc: "For 5 turns, increases the HP restored by Medica and upgrades used by the user, and extends their range to one row.",
      stats: ["Head"],
      dep: { resuscitate: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    scapegoat: {
      name_en: "Scapegoat",
      name_jp: "スケープゴート",
      desc: "Selected ally will cover all party members a set number of times this turn. Ineffective if that ally has leg bind.",
      stats: ["Legs"],
      dep: { efficiency: 2, stalker: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 5.5 }
    },
    swapStep: {
      name_en: "Swap Step",
      name_jp: "アザーズステップ",
      desc: "Selected ally has a chance to act first this turn.",
      stats: ["Legs"],
      dep: { scapegoat: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5.5 }
    },
    naturalInstinct: {
      name_en: "Take",
      name_jp: "野生の勘",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Ronin: {
    peerless: {
      name_en: "Peerless",
      name_jp: "無双",
      desc: "For 3 turns, stance duration will not decrease, and stances cannot be removed. In addition, the user gains the effect of both stances.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    issen: {
      name_en: "Issen",
      name_jp: "一閃",
      desc: "Deals ranged cut damage to all enemies. Attempts to inflict instant death. Chance of instant death is increased against targets at low HP.",
      stats: ["STR", "LUC", "Arms"],
      unique: true,
      type: "Break",
      dep: { peerless: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    upperStance: {
      name_en: "Upper Stance",
      name_jp: "上段の構え",
	    desc: "Increases attack and evasion when Upper Stance is active. At the start of each battle, the user automatically assumes the stance with the highest skill level.",
      stats: ["Katana"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    airBlade: {
      name_en: "Air Blade",
      name_jp: "空刃",
      desc: "Deals ranged cut damage to one target. Assumes Upper Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { upperStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    bloodyBlade: {
      name_en: "Bloody Blade",
      name_jp: "逆袈裟",
      desc: "Deals melee cut damage to one target and increases the users row attack for a set number of turns. Assumes Upper Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { upperStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    delayedStrike: {
      name_en: "Delayed Strike",
      name_jp: "貫突",
      desc: "Deals melee cut damage to one target, and attack again 2 turns later. Assumes Upper Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { upperStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    moonShadow: {
      name_en: "Moon Shadow",
      name_jp: "鞘撃",
      desc: "Requires Upper Stance. Deals melee cut damage to one target. Assumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { airBlade: 1, delayedStrike: 1, bloodyBlade: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 1.5 }
    },
    helmSplitter: {
      name_en: "Helm Splitter",
      name_jp: "兜割り ",
      desc: "Requires Upper Stance. Deals melee cut+almighty damage to one target. Low accuracy. Assumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { moonShadow: 1  },
      maxLevel: 8,
      coords: { x: 3, y: 1.5 }
    },
    flameGrater: {
      name_en: "Flame Grater",
      name_jp: "卸し焔",
      desc: "Requires Upper Stance. Deals melee cut+fire damage to one target and when a party member on the user's row is attacked, counterattack with melee damage. Assumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { airBlade: 1, delayedStrike: 1, bloodyBlade: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 2.5 }
    },
    horizontalSlice: {
      name_en: "Horizontal Slice",
      name_jp: "横一文字",
      desc: "Requires Upper Stance. Deals melee cut damage to one row and reduces their Ailment and Bind Resistance for a set number of turns. Assumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { flameGrater: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 2.5 }
    },
    swallowStrike: {
      name_en: "Swallow Strike",
      name_jp: "ツバメがえし",
      desc: "Requires Upper Stance. Deals multiple instances of melee cut damage to one target. Assumes Clear Stance after use. Novice and Master skills cannot be used again for 3 turns.",
      stats: ["STR", "Arms", "Katana"],
      dep: { helmSplitter: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    petalScatter: {
      name_en: "Petal Scatter",
      name_jp: "散華",
      desc: "Requires Upper Stance. Deals ranged cut damage to all targets. Deals less damage based on the number of targets. Assumes Clear Stance after use. Novice and Master skills cannot be used again for 3 turns.",
      stats: ["STR", "Arms", "Katana"],
      dep: { horizontalSlice: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 2.5 }
    },
    clearStance: {
      name_en: "Clear Stance",
      name_jp: "青眼の構え",
  	  desc: "Increases defense and Ronin skills' infliction rate when Clear Stance is active. At the start of each battle, the user automatically assumes the stance with the highest skill level.",
      stats: ["Katana"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 5 }
    },
    armStrike: {
      name_en: "Arm Strike",
      name_jp: "小手討ち",
      desc: "Deals melee stab damage to one target. Attempts to inflict arm bind. Assumes Clear Stance after use.",
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { clearStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    armorPierce: {
      name_en: "Armor Pierce",
      name_jp: "居合の構え",
	    desc: "Deals melee stab damage to one target and decreases their Defense for a set number of turns. Assumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { clearStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    drainSlice: {
      name_en: "Drain Slice",
      name_jp: "息吹",
      desc: "Deals melee cut damage to one target and restores HP to the users row based on their Max HP. Assumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { clearStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    mirrorMoon: {
      name_en: "Mirror Moon",
      name_jp: "物理攻撃ブースト",
      desc: "Requires Clear Stance. On this turn, when the user is attacked with physical damage, there is a chance they will nullify the damage and counterattack the source. Assumes Upper Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { armStrike: 1, armorPierce: 1, drainSlice: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 4.5 }
    },
    hazeSlash: {
      name_en: "Haze Slash",
      name_jp: "霞斬り",
      desc: "Requires Clear Stance. Deals melee cut damage to one target. Attempts to inflict sleep. Assumes Upper Stance after use.",
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { mirrorMoon: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 4.5 }
    },
    lightningStab: {
      name_en: "Lightning Stab",
      name_jp: "雷耀突き",
      desc: "Requires Clear Stance. Deals melee stab+volt damage to one target and reduces the targets attack for that turn. Assumes Upper Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { armStrike: 1, armorPierce: 1, drainSlice: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 5.5 }
    },
    frigidSlash: {
      name_en: "Frigid Slash",
      name_jp: "抜刀氷雪",
      desc: "Requires Clear Stance. Deals ranged cut+ice damage to one target. Increases the user's defense and accuracy until the end of next turn.  Assumes Upper Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { lightningStab: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 5.5 }
    },
    bluntingStab: {
      name_en: "Blunting Stab",
      name_jp: "鈍通し",
      desc: "Requires Clear Stance. Deals melee stab damage to one target. Attempts to inflict petrify. Assumes Upper Stance after use. Novice and Master skills cannot be used again for 3 turns.",
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { hazeSlash: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 4.5 }
    },
    earthBreaker: {
      name_en: "Earth Breaker",
      name_jp: "免許皆伝",
      desc: "Requires Clear Stance. Deals melee cut attack to one target with splash damage and a chance of stunning. Assumes Upper Stance after use. Novice and Master skills cannot be used again for 3 turns.",
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { frigidSlash: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 5.5 }
    },
    speedUp: {
      name_en: "Serene Heart",
      name_jp: "素早さブースト",
      desc: "Increases accuracy, evasion and action speed.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 0 }
    },
    duel: {
      name_en: "Duel",
      name_jp: "果し合い",
      desc: "Increases damage when attacking enemies that the user attacked last turn.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 0 }
    },
    risingSpirit: {
      name_en: "Rising Spirit",
      name_jp: "戦意高揚",
      desc: "At the end of the turn, if a stance is active, restores TP to the user.",
      stats: [],
      dep: { swallowStrike: 1, petalScatter: 1, bluntingStab: 1, earthBreaker: 1 },
      maxLevel: 6,
      coords: { x: 5, y: 3.5 }
    },
    mine: {
      name_en: "Mine",
      name_jp: "採掘",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
},
  "War Magus": {
    warEdgePower: {
      name_en: "War Edge Power",
      name_jp: "巫剣の力",
      desc: "For 3 turns, War Edge skills can activate additional effects even against targets without an ailment and the users speed is increased.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    fairyRobe: {
      name_en: "Fairy Robe",
      name_jp: "大巫術：精霊衣",
      desc: "Removes ailments, binds and debuffs from all party members, and restores their HP. This turn, negates all binds, ailments, stun, instant death and debuffs against all party members.",
      stats: ["WIS"],
      unique: true,
      type: "Break",
      dep: { warEdgePower: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    warEdgeMastery: {
      name_en: "War Edge Mastery",
      name_jp: "巫剣マスタリー",
      desc: "User can dual-wield and use sword skills with staff. Increases maximum TP when a sword is equipped; increases damage when a staff is equipped on the top slot. Normal attacks may hit 2-4 times if two weapons are equipped.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1.5 }
    },
    warHealLine: {
      name_en: "War Heal Line",
      name_jp: "巫術：再生帯",
      desc: "Restores HP to one row at the start of the turn, then at the end of the turn.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 1.5 }
    },
    warRevive: {
      name_en: "War Revive",
      name_jp: "巫術：反魂",
      desc: "Revives one ally at the start of the turn, then attempts to revive them again at the end of the turn.",
      stats: [],
      dep: { warHealLine: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1.5 }
    },
    artery: {
      name_en: "Artery",
      name_jp: "巫術：脈動",
      desc: "For a set number of turns, automatically restores HP for all party members when they act, once per turn.",
      stats: ["WIS"],
      dep: { warRevive: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    warResponse: {
      name_en: "War Response",
      name_jp: "巫術：呼応",
      desc: "For a set number of turns, automatically restores HP for all party members when the debuffed enemy acts, once per turn.",
      stats: ["WIS"],
      dep: { warRevive: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 2 }
    },
    pandemonium: {
      name_en: "Pandemonium",
      name_jp: "ＨＰブースト",
      desc: "Increases the targets attack and defense for a set number of turns.",
      stats: [],
      dep: { artery: 2, warResponse: 2  },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    barrier: {
      name_en: "Barrier",
      name_jp: "巫術：結界",
      desc: "For one turn, there is a chance to nullify binds and ailments against all party members, up to a set number of times.",
      stats: [],
      dep: { pandemonium: 2 },
      maxLevel: 10,
      coords: { x: 5, y: 1.5 }
    },
    drippingSlash: {
      name_en: "Dripping Slash",
      name_jp: "巫術：乱疫",
      desc: "Deals melee cut+almighty damage to one target. Attempts to inflict one of poison, paralyze, blind, sleep or curse.",
      stats: ["LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3.5 }
    },
    strengthSlash: {
      name_en: "Strength Slash",
      name_jp: "巫剣：霊攻衰斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, decreases their attack for a set number of turns.",
      stats: ["STR"],
      dep: { drippingSlash: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    guardSlash: {
      name_en: "Guard Slash",
      name_jp: "巫剣：霊防衰斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, decreases their defense for a set number of turns.",
      stats: ["STR"],
      dep: { drippingSlash: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    headcut: {
      name_en: "Headcut",
      name_jp: "巫剣：霊封頭斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict head bind.",
      stats: ["STR", "LUC"],
      dep: { strengthSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    armcut: {
      name_en: "Armcut",
      name_jp: "巫剣：霊封腕斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict arm bind.",
      stats: ["STR", "LUC"],
      dep: { guardSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    legcut: {
      name_en: "Legcut",
      name_jp: "巫剣：霊封脚斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict leg bind.",
      stats: ["STR", "LUC"],
      dep: { headcut: 2, armcut: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3.5 }
    },
    ailingSlash: {
      name_en: "Ailing Slash",
      name_jp: "巫剣：霊攻大斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, increases damage dealt.",
      stats: ["STR"],
      dep: { legcut: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    scorpion: {
      name_en: "Scorpion",
      name_jp: "巫術：再生陣",
      desc: "Deals melee cut damage to one enemy, with double splash damage to adjacent enemies. If adjacent enemies have ailments, attempts to petrify the target.",
      stats: ["STR"],
      dep: { legcut: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    blindLaughter: {
      name_en: "Blind Laughter",
      name_jp: "抑制防御ブースト",
      desc: "This turn, if an enemy is afflicted with any ailments, binds, or stun, the user will perform a follow up attack.",
      stats: [],
      dep: { ailingSlash: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 3 }
    },
    looseThread: {
      name_en: "Loose Thread",
      name_jp: "巫術：再生",
      desc: "Deals melee cut damage to all enemies. Increases damage dealt and attempts to inflict instant death on enemy with binds.",
      stats: ["WIS"],
      dep: { scorpion: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 4 }
    },
    leeches: {
      name_en: "Leech",
      name_jp: "吸命",
      desc: "When the user deals damage to an enemy with an ailment, restores HP to the user's row. Can only activate once per turn.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5.5 }
    },
    rouse: {
      name_en: "Rouse",
      name_jp: "奮起",
      desc: "Increases the user's Force gain based on the number of enemies with binds.",
      stats: [],
      dep: { leeches: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5.5 }
    },
    bindCut: {
      name_en: "Bind Cut",
      name_jp: "物理攻撃ブースト",
      desc: "Deals melee cut+almighty damage to one target. If target is bound, increases the user's Force.",
      stats: [],
      dep: { rouse: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5.5 }
    },
    spiritDrain: {
      name_en: "Spirit Drain",
      name_jp: "吸気",
      desc: "When the user deals damage to an enemy with both an ailment and a bind, restores TP to the user's row. Can only activate once per turn.",
      stats: ["WIS"],
      dep: { bindCut: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5.5 }
    },
    curseCut: {
      name_en: "Curse Cut",
      name_jp: "発疫",
      desc: "Deals melee cut+almighty damage to one target and attempt to inflict curse. If sucessful, or if the target is already cursed, restores Force to the users row.",
      stats: ["LUC"],
      dep: { spiritDrain: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 5.5 }
    },
    displace: {
      name_en: "Displace",
      name_jp: "巫術：転移",
      desc: "Removes ailments and binds from one ally, and attempts to inflict them on one enemy.",
      stats: ["LUC"],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    take: {
      name_en: "Take",
      name_jp: "採取",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },

  Ninja: {
    insolence: {
      name_en: "Insolence",
      name_jp: "不忍",
      desc: "For 3 turns, increases all party members' action speed and evasion.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    ninpoPoisonMist: {
      name_en: "Ninpo: Poison Mist",
      name_jp: "忍法　毒霧",
      desc: "Attempts to inflict poison on all enemies.",
      stats: ["LUC", "Head"],
      unique: true,
      type: "Break",
      dep: { insolence: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    ninpoScorpio: {
      name_en: "Ninpo: Scorpio",
      name_jp: "忍法　含針",
      //desc: "Deals ranged stab damage to a set number of random targets. Can hit each target once at most. Attempts to inflict poison.",
      desc: "Deals 3 instances of ranged stab damage to random targets. Attempts to inflict poison.",
      stats: ["STR", "LUC", "Head"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    ninpoNeedles: {
      name_en: "Ninpo: Needles",
      name_jp: "忍法　撒菱",
      desc: "This turn, when the selected row is attacked, counterattack with ranged stab damage and attempt to inflict sleep.",
      stats: ["STR", "LUC", "Arms"],
      dep: { ninpoScorpio: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    ninpoMirror: {
      name_en: "Ninpo: Mirror",
      name_jp: "忍法　水鏡",
      desc: "Attempts to inflict the ailments and binds present on one enemy to all enemies.",
      stats: ["LUC", "Head"],
      dep: { ninpoNeedles: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    ninpoShock: {
      name_en: "Ninpo: Shock",
      name_jp: "忍法　驚忍",
      desc: "Attempts to inflict panic on one enemy, with line-piercing effects.",
      stats: ["LUC", "Head"],
      dep: { ninpoMirror: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    shadowBind: {
      name_en: "Shadow Bind",
      name_jp: "影縫",
      desc: "Deals melee cut damage to one target. Attempts to inflict leg bind.",
      stats: ["STR", "LUC", "Arms", "Knife"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    hawkStrike: {
      name_en: "Hawk Strike",
      name_jp: "鷹乃羽",
      desc: "Deals multiple instances of melee cut damage to random targets.",
      stats: ["STR", "Arms", "Knife"],
      dep: { shadowBind: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    schadenfreude: {
      name_en: "Schadenfreude",
      name_jp: "幸災楽禍",
      desc: "Deals melee cut damage to one target. Always hits. If target has an ailment, increases the user's Force.",
      stats: ["STR", "Arms", "Knife"],
      dep: { hawkStrike: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 2 }
    },
    foxDrop: {
      name_en: "Fox Drop",
      name_jp: "飯綱",
      desc: "Deals melee cut damage to one target. Attempts to inflict petrify.",
      stats: ["STR", "LUC", "Arms", "Knife"],
      dep: { schadenfreude:2 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    quietus: {
      //name_en: "Illusionary Swap",
      //name_jp: "抑制攻撃ブースト",
      //desc: "Targets a Mirage. That Mirage will take damage for the selected row for one turn, with a multiplier applied to the damage they take from redirected hits.",
      //name_en: "Coup de Grace/Guillotine/Jugulate",
      name_en: "Quietus",
      name_jp: "抑制攻撃ブースト",
      desc: "Deals melee cut damage to one target with a chance to instantly kill it. Chance is increased if the enemy has an ailment.",
      stats: ["STR", "LUC", "Arms", "Knife"],
      dep: { foxDrop: 2, ninpoShock: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    fallingBloom: {
      name_en: "Falling Bloom",
      name_jp: "意趣返し",
      desc: "Deals melee cut+almighty damage to one target. Low accuracy.",
      stats: ["STR", "Arms", "Knife"],
      dep: { quietus: 2  },
      maxLevel: 8,
      coords: { x: 5, y: 1.5 }
    },
    ninpoClone: {
      name_en: "Ninpo: Clone",
      name_jp: "忍法　分身",
      desc: "Consumes a percentage of the user's HP and TP to create a clone in an empty slot. Force Boost and Force Break are unusable while a clone is active.",
      stats: ["Head"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    drawingSlice: {
      name_en: "Drawing Slice",
      name_jp: "多元抜刀",
      desc: "Deals multiple instances of melee damage to random targets. All clones will disappear after use.",
      stats: ["STR", "Arms", "Knife"],
      dep: { ninpoClone: 4 },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    autoClone: {
      name_en: "Auto-Clone",
      name_jp: "首切",
      desc: "If Ninpo: Clone is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { drawingSlice: 4 },
      maxLevel: 10,
      coords: { x: 3, y: 6 }
    },
    ninpoMirage: {
      name_en: "Ninpo: Mirage",
      name_jp: "忍法　陽炎",
      desc: "Creates a decoy of the user in an empty slot. The decoy has added evasion and chance to be targeted.",
      stats: ["Head"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    phantomKnives: {
      name_en: "Phantom Knives",
      name_jp: "忍びの心得",
      desc: "Deals melee cut damage to one row. For 3 turns, reduces the accuracy of one row of enemies.",
      stats: ["STR", "Arms", "Knife"],
      dep: { ninpoMirage: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    selfDestruct: {
      name_en: "Corpse Explosion",
      name_jp: "肉弾",
      //desc: "Destroys a Mirage. Deals ranged fire damage to all enemies.",
      desc: "Instantly kill an ally/mirage. Deals ranged fire damage to all enemies.",
      stats: ["STR", "Head", "Knife"],
      dep: { phantomKnives:2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    shadewalker: {
      name_en: "Shadewalker",
      name_jp: "忍法　猿飛",
      //desc: "Targets a Mirage. This turn, every time the Mirage dodges an attack, members in the same row will individually counter with an attack using their equipped weapon.",
      desc: "This turn, every time the selected ally/mirage dodges an attack, members in the same row will individually counter with an attack using their equipped weapon.",
      stats: ["STR", "Head", "Knife"],
      dep: { selfDestruct: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    autoMirage: {
      name_en: "Auto-Mirage",
      name_jp: "先制陽炎",
      desc: "If Ninpo: Mirage is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { ninpoMirage: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    acrobatics: {
      //Force Energy
      name_en: "Acrobatics",
      name_jp: "軽業",
      desc: "When the user evades an attack, their TP is restored. At level 4, melee attacks will hit for full damage and can always reach the enemy back row, even when the user is in the back.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    ninpoSmoke: {
      name_en: "Ninpo: Smoke",
      //name_en: "Ninpo: Flight/Smoke",
      name_jp: "潜伏",
      //desc: "This turn, the user has a high chance of evading physical attacks. Each time the user dodges an attack, their evasion and chance to be targeted are decreased.",
      desc: "Reduces the user's maximum HP to greatly increase their evasion and aggro for 3 turns.",
      stats: ["Legs"],
      dep: { acrobatics: 2  },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    eyeForAnEye: {
      name_en: "Eye for an Eye",
      name_jp: "忍法　猿飛",
      desc: "If the user evaded an attack on the previous turn, increases chance of inflicting ailments",
      stats: [],
      dep: { ninpoSmoke: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    reprisal: {
      name_en: "Reprisal",
      //name_en: "Deep Breath/???",
      name_jp: "骨砕き",
      //desc: "All clones will disappear and the user recovers HP and TP.",
      desc: "Deals melee cut damage to one target. Damage is increased depending on the number of evades the user has made since they last used this skill.",
      stats: ["STR", "Arms", "Knife"],
      dep: { eyeForAnEye: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    shadowstrike: {
      name_en: "Shadowstrike",
      //name_en: "Deep Breath/Revenge Thrust",
      name_jp: "忍法　雲隠",
      //desc: "Requires a Mirage. Deals melee cut damage to one row. For a set number of turns, reduces their accuracy.",
      //[their HP is restored. / reduce the attackers accuracy. / inflict ?.]
      desc: "When an attack is evaded, the user has a chance to cast Phantom Knives.",
      stats: [],
      dep: { reprisal: 2, shadewalker: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3.5 }
    },
    chop: {
      name_en: "Chop",
      name_jp: "伐採",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Zodiac: {
    astrologersAxis: {
      name_en: "Astrologer's Axis",
      name_jp: "占星時軸",
      desc: "For 3 turns, Zodiac attack skills will have increased power, and restore half of their TP cost to the user.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    astralSign: {
      name_en: "Astrosign",
      name_jp: "アストロサイン",
      desc: "Deals ranged fire+ice+volt damage to all enemies. On this turn, all allies' TP cost will be reduced to 0.",
      stats: ["INT"],
      unique: true,
      type: "Break",
      dep: { astrologersAxis: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
  /*astralSign: {
      name_en: "Conversion",
      name_jp: "アストロサイン",
      desc: "Restores TP to the user. This can restore TP over maximum TP. The overhealed TP will disappear at the end of battle, or when the user dies.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { astrologersAxis: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }*/
    },
    pulseStar: {
      name_en: "Pulse Star",
      name_jp: "エーテルシュート",
      desc: "Deals ranged almighty damage to one enemy. Reduces their elemental defense for a set number of turns.",
      stats: ["INT, Arms, Staff"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    binaryFire: {
      name_en: "Binary Fire",
      name_jp: "炎の連星術",
      desc: "Deals ranged fire damage to all enemies.",
      //  Replaces the element of the next skill with fire. [For three turns, enemies will take more damage from fire attacks./ Slightly increases the power of Zodiac attack skills until the next turn.
      stats: ["INT, Head, Staff"],
      dep: { pulseStar: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    binaryIce: {
      name_en: "Binary Ice",
      name_jp: "氷の連星術",
      desc: "Deals ranged ice damage to all enemies.",
      stats: ["INT, Head, Staff"],
      dep: { pulseStar: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    binaryVolt: {
      name_en: "Binary Volt",
      name_jp: "雷の連星術",
      desc: "Deals ranged volt damage to all enemies.",
      stats: ["INT, Head, Staff"],
      dep: { pulseStar: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    meteorRain: {
      name_en: "Meteor Rain",
      name_jp: "メテオ",
      desc: "Deals 5-10 instances of ranged random elemental damage to random targets.",
      stats: ["INT, Head, Staff"],
      dep: { binaryFire: 3, binaryIce: 3, binaryVolt: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2.5 }
    },
    refractionNova: {
      //name_en: "Distortion Nova",
      //name_en: "Refraction Spark",
      name_en: "Refraction Nova",
      name_jp: "雷の先見術",
      desc: "On the third turn after using this skill, ranged almighty damage is dealt to one target. During this time, for each time the target's weakness is hit, this skills damage is increased up to 10 stacks. Multi-hit attacks will trigger multiple stacks.",
      stats: ["INT, Head, Staff"],
      dep: { meteorRain: 4 },
      maxLevel: 10,
      coords: { x: 3, y: 2.5 }
    },
    guidingStar: {
      name_en: "Guiding Star",
      name_jp: "ＴＰブースト",
      desc: "Increases maximum TP. Increases attack when Astral Fire is active.",
      stats: [],
      dep: { binaryFire: 3, binaryIce: 3, binaryVolt: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1.5 }
    },
    astralFire: {
      name_en: "Astral Fire",
      name_jp: "炎の星術",
      desc: "Deals ranged fire damage to one target. Applies the Astral Fire stance on the user, increasing damage for a set number of turns. This skill cannot be used again for 3 turns.",
      //[On the next turn, if the user uses an elemental skill, follows up with a ranged Int-based Cut+Element attack on all enemies hit with an element by the user.]
      stats: ["INT, Head, Staff"],
      dep: { guidingStar: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 1.5 }
    },
    umbralIce: {
      name_en: "Umbral Ice",
      name_jp: "氷の星術",
      desc: "Requires Astral Fire. Deals ranged ice damage to one target. Recovers some TP and removes Astral Fire after use.",
      stats: ["INT, Head, Staff"],
      dep: { astralFire: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    solsticeVolt: {
      name_en: "Solstice Volt",
      name_jp: "雷の星術",
      desc: "Requires Astral Fire. Deals ranged volt damage to one target. Removes Astral Fire after use.",
      //, and ignores resistances
      stats: ["INT, Head, Staff"],
      dep: { astralFire: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    singularity: {
      name_en: "Singularity",
      name_jp: "特異点定理",
      desc: "Increases damage dealt when hitting weaknesses. In addition, the previous skill's element is now added into your attacks.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    cosmicGleam: {
      name_en: "Cosmic Gleam",
      name_jp: "エーテルの輝き",
      desc: "For a set number of turns, increases elemental attack and defense for one row.",
      stats: ["Head"],
      dep: { singularity: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    asteroidBelt: {
      name_en: "Asteroid Belt",
       //Spacial Distortion
      name_jp: "アンチエーテル",
      desc: "Provides a chance to nullify elemental attacks against the user's row.",
      stats: [],
      dep: { cosmicGleam: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    nebulaResurgence: {
      name_en: "Nebula Resurgence",
      name_jp: "多段式エーテル",
      desc: "When the user hits an enemy's weakness, their Force gauge is increased.",
      stats: [],
      dep: { asteroidBelt: 4 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    aspectedVeil: {
      name_en: "Aspected Veil",
      name_jp: "氷の先見術",
      //desc: "For a set number of turns, imbue an ally's weapon with fire/ice/volt and have them counterattack whenever the row they're in is attacked by an enemy.",
      desc: "For a set number of turns, imbue an ally's weapon with fire/ice/volt and have them automatically counterattack enemies who attacks them.",
      stats: ["Head, STR"],
      dep: { nebulaResurgence: 4 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    prophecy: {
      name_en: "Prophecy",
      name_jp: "氷の先見術",
      desc: "Prevents elemental attacks from one enemy. If an attack is prevented, increases the user's attack until the end of the next turn.",
      stats: ["Head, Staff"],
      dep: { aspectedVeil: 4 },
      maxLevel: 6,
      coords: { x: 5, y: 3.5 }
    },
    fluxAbsorption: {
      name_en: "Flux Absorption",
      name_jp: "炎の先見術",
      desc: "Reduces one instance of elemental damage against all party members. Higher levels upgrade reduction to absorb.",
      stats: ["Head, Staff"],
      dep: { aspectedVeil: 4 },
      maxLevel: 8,
      coords: { x: 5, y: 4.5 }
    },
    celestialReturn: {
      name_en: "Celestial Return",
      name_jp: "リターンエーテル",
      desc: "Restores TP to the user when hitting a weakness.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    aetherLeak: {
      name_en: "Aether Leak",
      //name_en: "Planar Crack/Fracture/Rift/Breach/Tear/Rend",
      name_jp: "エーテル圧縮",
      desc: "For a set amount of turns, when using TP, a percentage of the used TP will be restored to one random party member.",
      stats: ["Head"],
      dep: { celestialReturn : 2 },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    autoLeak: {
      name_en: "Auto-Leak",
      name_jp: "エーテルマスター",
      desc: "If Aether Leak is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { aetherLeak: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    darkMatter: {
      name_en: "Dark Matter",
      name_jp: "ダークエーテル",
      desc: "Reduce TP usage for one row this turn, while increasing the user's Zodiac skill damage until the end of the next turn.",
      //desc: "Reduce TP usage for one row this turn, while increasing the users damage until the end of the next turn.",
      // [. The user absorbs some of it, recovering their own.]
      stats: ["Head"],
      dep: { celestialReturn: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    stellarFlow: {
      name_en: "Stellar Flow",
      name_jp: "レストアエーテル",
      desc: "Increases attack based on the number of TP spent on the previous turn. Does not activate if TP spent last turn is too low.",
      stats: [],
      dep: { darkMatter: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    pulsarFeedback: {
      name_en: "Pulsar Feedback",
      name_jp: "ＴＰカット",
      desc: "Provides a chance to refund the user's TP usage.",
      stats: [],
      dep: { stellarFlow : 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    mine: {
      name_en: "Mine",
      name_jp: "採掘",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Imperial: {
    ignition: {
      name_en: "Ignition",
      desc: "For 3 turns, the user's drive skills will not activate the overheat state.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    conversion: {
      name_en: "Overdrive",
      desc: "Deals ranged cut/almighty damage to all enemies, and restores TP to the user based on damage dealt.",
      stats: ["STR"],
      unique: true,
      type: "Break",
      dep: { ignition: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    tripEdge: {
      name_en: "*Trip Edge",
      desc: "Starter skill. Deals melee cut damage to one target. Attempts to inflict leg bind. Reduces overheat duration by 1 turn.",
      stats: ["STR", "LUC", "Arms", "Driveblade"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    galeEdge: {
      name_en: "Gale Edge",
      desc: "Starter skill. Deals melee cut damage to one target. Reduces overheat duration by 1 turn.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { tripEdge: 3  },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    bloodEdge: {
      name_en: "*Blood Edge",
      desc: "Starter and Combo skill. Deals melee cut damage to one target. Restores HP to the user based on the amount of damage dealt. Reduces overheat duration by 2 turns. Can only be used if an Starter skill was used on the previous turn.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { galeEdge: 2  },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    impulseEdge: {
      name_en: "*Impulse Edge",
      desc: "Starter and Combo skill. Deals melee cut damage to one target. Restores TP and Force to the user. Reduces overheat duration by 1 turn. Can only be used if an Starter skill was used on the previous turn.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { bloodEdge: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    smashEdge: {
      name_en: "Smash Edge",
      desc: "Starter and Combo skill. Deals melee cut damage to one target. Each cast doubles its damage and is reset upon the user's death. Reduces overheat duration by 2 turns. Can only be used if an Starter skill was used on the previous turn.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { impulseEdge: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 0.5 }
    },
    thermalCell: {
      name_en: "Thermal Cell",
      desc: "Passively restores a percentage of the user's maximum TP plus a static amount while they are in the Force Boost state.",
      stats: [],
      dep: { impulseEdge: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    chargeEdge: {
      name_en: "Charge Edge",
      desc: "Final skill. Deals melee cut damage to one target. Until the end of the next turn, increases the user's attack. Can only be used if an Starter skill or Combo skill was used on the previous turn.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { smashEdge: 2, thermalCell: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 1 }
    },
    bulwarkDrive: {
      name_en: "Bulwark Drive",
      //Deals melee cut damage to one target, and places the user in the overheat state for 5 turns. Cannot be used while overheated. When cast, doubles this skills TP cost and damage until the user's death. |
      //Deals melee cut damage to one target, and places the user in the overheat state for 5 turns. Cannot be used while overheated. Damage is reduced when used consecutively, and the TP cost is reduced based on the amount of TP used before this skill was cast.
      desc: "Deals melee cut damage to one target, and increases defense for all allies until it executes. Places the user in the overheat state for 5 turns. Cannot be used while overheated or when current TP is below the original TP cost. The TP cost is reduced based on the amount of TP used before this skill was cast.",
      //desc: "Deals melee cut damage to one target, and increases defense for all allies until it executes. Places the user in the overheat state for 5 turns and cannot be used while overheated. ",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3.875 }
    },
    heatSink: {
      name_en: "*Heat Sink",
      // desc: "Reduces overheat duration by a set number of turns and increases the users defense until the end of the next turn. Can only be used while overheated.",
      desc: "Reduces overheat duration by a set number of turns and restores Force to the user. Can only be used while overheated.",
      stats: ["Head", "Driveblade"],
      dep: { bulwarkDrive: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2.25 }
    },
    wideEffect: {
      name_en: "Wide Effect",
      desc: "Single-target skills have a chance to affect neighboring enemies. The chance is rolled for each enemy individually if there are two enemies next to the target, rather than once for both.",
      stats: [],
      dep: { bulwarkDrive: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 3.25 }
    },
    // intercooler: {
    //   //Amped Blade, Condensed Heat, Heated Blade
    //   name_en: "Zero Sum",
    //   desc: "Increases your damage for the rest of combat (or until you are killed) every time your Driveblade overheats.",
    //   stats: [],
    //   dep: { heatSink: 1 },
    //   maxLevel: 8,
    //   coords: { x: 2, y: 2.75 }
    // },
    flameDrive: {
      name_en: "Flame Drive",
      desc: "Deals melee cut+fire damage to one target, and places the user in the overheat state for 6 turns. Cannot be used while overheated or when current TP is below the original TP cost. The TP cost is reduced based on the amount of TP used before this skill was cast.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { heatSink: 3, wideEffect: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 2.75 }
    },
    freezeDrive: {
      name_en: "Freeze Drive",
      desc: "Deals melee cut+ice damage to one target, and places the user in the overheat state for 6 turns. Cannot be used while overheated or when current TP is below the original TP cost. The TP cost is reduced based on the amount of TP used before this skill was cast.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { flameDrive: 1 },
      maxLevel: 6,
      coords: { x: 3, y: 2.25 }
    },
    shockDrive: {
      name_en: "Shock Drive",
      desc: "Deals melee cut+volt damage to one target, and places the user in the overheat state for 6 turns. Cannot be used while overheated or when current TP is below the original TP cost. The TP cost is reduced based on the amount of TP used before this skill was cast.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { flameDrive: 1 },
      maxLevel: 6,
      coords: { x: 3, y: 3.25 }
    },
    bladeRecoil: {
      name_en: "Blade Recoil",
      // Cannot be used below the original TP cost. The TP cost is reduced based on the amount of TP used before this skill was cast.
      desc: "Deals melee cut damage to one target. If the user used an elemental attack on the last turn, also adds a follow-up attack of that element. The user will take 2x more damage until the skill activates.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { shockDrive: 3, freezeDrive: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 2.75 }
    },
    finisher: {
      name_en: "Finisher",
      desc: "When the user kills an enemy, their TP is restored.",
      stats: [],
      dep: { bladeRecoil: 4 },
      maxLevel: 8,
      coords: { x: 5, y: 2.75 }
    },
    // driveStake: {
    //   //Amped Blade, Condensed Heat, Heated Blade
    //   name_en: "Drivestake Blast",
    //   desc: "Any enemies hit with Drive skills are hit again with an attack of the same element at the end of the turn.",
    //   stats: [],
    //   dep: { bladeRecoil: 4 },
    //   maxLevel: 8,
    //   coords: { x: 5, y: 2.75 }
    // },
    overheatGuard: {
      name_en: "Overheat Guard",
      desc: "While overheated, increases the user's defense.",
      stats: [],
      dep: { bulwarkDrive: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 4.5 }
    },
    bloodfest: {
      name_en: "Avenger",
      //name_en: "Bloodfest",
      desc: "When an ally dies, restore HP and TP.",
      //desc: "When the user uses a skill, restore HP.",
      //desc: "When an ally dies or an enemy is killed by the user, restore HP.",
      //desc: "Combo skill. Deals melee cut damage to one target, heals the party for 25% of the damage dealt and increases the user's chance of being targeted. Reduces overheat duration by 1 turn.",
      stats: [],
      dep: { bulwarkDrive: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 5.5 }
    },
    roughDivide: {
      name_en: "Rough Divide",
      desc: "Starter skill. Reduces physical damage to the user's row for one turn. If Rough Divide is activated by enemy damage, the user will use their equipped weapon to counterattack the source of the damage and reduce overheat duration by 1 turn.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { overheatGuard: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 4.5 }
    },
    rearGuard: {
      name_en: "Rear Guard",
      desc: "Starter skill. For a set number of turns, increases defense for one ally, but that ally will move last each turn. Reduces overheat duration by 2 turns.",
      stats: ["Head"],
      dep: { bloodfest: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5.5 }
    },
    solidBarrel: {
      name_en: "Solid Barrel",
      //desc: "Combo skill. Deals melee cut damage to one target and, for that turn, increases the user's chance of being targeted. Preserves the effect of last turn's Rough Divide. Reduces overheat duration by 2 turns.",
      desc: "Combo skill. Deals melee cut damage to one target and heals the party for 15% of the damage dealt. Preserves the effect of last turn's Rough Divide. Reduces overheat duration by 1 turn.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { roughDivide: 2, rearGuard: 2  },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    keenFlurry: {
      name_en: "Keen Flurry",
      desc: "Final skill. Attempts to nullify physical attacks directed at the user's row for one turn. Each time an attack is nullified, the chance of it triggering again on that ally is reduced.",
      stats: ["Arms", "Driveblade"],
      dep: { solidBarrel: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 4.5 }
    },
    sentinelShell: {
      name_en: "Sentinel Shell",
      desc: "Final skill. Reduces all damage to all party members and sets their defensive values to the user's for one turn.",
      stats: ["Arms", "Driveblade"],
      dep: { solidBarrel: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5.5 }
    },
    driveRevenge: {
      //Amped Blade, Condensed/Compressed Heat, Heated Blade, Discharge
      name_en: "Amped Discharge",
      desc: "Increases the damage of Drive skills after activating Rough Divide, Keen Flurry or Sentinel Shell.",
      stats: [],
      dep: { keenFlurry: 2, sentinelShell: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 5 }
    },
    mine: {
      name_en: "Mine",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Pugilist: {
    sealRush: {
      name_en: "Seal Rush",
      desc: "For 3 turns, increases the user's bind infliction chance, and chases any of the user's attacks against an enemy with binds, ailments or stun. Multi-hit attacks will only be chased once.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    finalBlow: {
      name_en: "Final Blow",
      desc: "Deals melee bash damage to one target. Attempts to inflict head bind, arm bind and leg bind.",
      stats: ["STR", "LUC"],
      unique: true,
      type: "Break",
      dep: { sealRush: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    concussion: {
      name_en: "Concussion",
      desc: "Deals melee bash damage to one target. Attempts to inflict head bind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1 }
    },
    armBreaker: {
      name_en: "Arm Breaker",
      desc: "Deals melee bash damage to one target. Attempts to inflict arm bind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 2 }
    },
    lowBlow: {
      name_en: "Low Blow",
      desc: "Deals melee bash damage to one target. Attempts to inflict leg bind on the target.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    oneTwoPunch: {
      name_en: "One-Two Punch",
      desc: "Deals melee bash damage to one target. May follow up with Concussion, Arm Breaker, and Low Blow if the target does not have the respective bind.",
      // Follow-up skills deal reduced damage.
      stats: ["STR", "LUC"],
      dep: { concussion: 1, armBreaker: 1, lowBlow: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    corkscrew: {
      name_en: "Corkscrew",
      desc: "Deals melee bash damage to one target. Attempts to inflict paralysis on the target.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    addedBlow: {
      name_en: "Added Blow",
      desc: "When the user inflicts a bind on an enemy, there is a chance to follow up with Corkscrew.",
      stats: [],
      dep: { oneTwoPunch: 2, corkscrew: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1.5 }
    },
    leadingBlow: {
      name_en: "Leading Blow",
      desc: "Deals melee bash damage to one target. For every bind the target has, follows up with the corresponding Pugilist skill. For any ailment the target has, follows up with Corkscrew.",
      stats: ["STR"],
      dep: { addedBlow: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1.5 }
    },
    clinch: {
      name_en: "Clinch",
      desc: "Attempts to inflict head bind, arm bind, and leg bind on both the user and the target.",
      stats: ["LUC"],
      dep: { leadingBlow: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    howlingFist: {
      //Fist God/
      name_en: "Howling Fist",
      //desc: "Enables Cestus skills to crit. Increase Critical Chance",  Increase Critical chance against bound enemies.
      desc: "Enables Cestus skills to crit. Increase Critical chance against bound enemies.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 4.5 }
    },
    axeKick: {
      name_en: "Axe Kick",
      //name_en: "Breaking Waves",Crimson Rouge
      desc: "Deals melee bash damage to one target, with splash damage. If the target has binds or paralysis, attempts to spread them to adjacent enemies.",
      stats: ["STR"],
      dep: { howlingFist: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 3.5 }
    },
    faultBlocker: {
      name_en: "Fault Blocker",
      desc: "For 3 turns, increases ailment/bind resistance and recovery for the user's row.",
      stats: [],
      dep: { axeKick: 2  },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    adrenaline: {
      name_en: "Adrenaline",
      desc: "Restores TP to the user when they inflict a bind, ailment or stun. Inflicting something on multiple enemies will not increase the effect of this skill.",
      stats: [],
      dep: { faultBlocker: 2  },
      maxLevel: 6,
      coords: { x: 3, y: 3 }
    },
    meditation: {
      name_en: "Meditation",
      desc: "Until the end of the next turn, increases user's chance of inflicting binds and ailments.",
      stats: [],
      dep: { adrenaline: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    thunderFist: {
      name_en: "Thunder Fist",
      //Unbrindled Strength Rushing Blood Punching Bag
      //If it kills, recover TP. If the attack does not kill the target,
      desc: "Deals melee bash+volt damage to one target. If that enemy was killed with Thunder Fist, attempt to inflict paralysis on all enemies, otherwise the user takes damage.",
      stats: [],
      dep: { meditation: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 3 }
    },
    doublePunch: {
      name_en: "Double Punch",
      desc: "When any single-action, single-target Pugilist skill is used, Corkscrew is used via Added Blow, or Cross Counter is used, if the skill fails to inflict their bind or ailment, there is a chance it will be repeated.",
      // desc: "When any single-action, single-target Pugilist skill is used, or when Corkscrew is used via Added Blow, or when Cross Counter is used (despite what the description claims), if the skill fails to inflict their bind or ailment, there is a chance it will be repeated.",
      stats: [],
      dep: { axeKick: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    breather: {
      name_en: "Breather",
      desc: "Removes binds and ailment from an ally. If successful, increases the user's attack until the end of the next turn.",
      //desc: "Removes binds and ailment from the user, and increases attack until the end of the next turn. Cannot be used if the user has no binds or ailments.",
      stats: [],
      dep: { doublePunch: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    crossCounter: {
      name_en: "Cross Counter",
      desc: "This turn, when a party member on the user's row is attacked, counterattacks with melee damage with the user's weapon and attempts to inflict the corresponding bind on the target. Does not activate if the counterattack cannot reach the enemy.",
      stats: ["STR", "LUC"],
      dep: { breather: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    vajraForm: {
      name_en: "Vajra Form",
      //Raging Waves
      //desc: "Increases damage dealt based on the number of binds and ailments the target has.",
      desc: "For 5 turns, increase the user's critical chance and defence but decrease ailment/bind infliction chance.",
      stats: [],
      dep: { howlingFist: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 5.5 }
    },
   resonanceBlow: {
      name_en: "Resonance Blow",
      desc: "Deals multiple instances of melee bash damage to one target. The number of hits increases based on the number of turns since Resonance Blow was last used.",
      stats: ["STR"],
      dep: { vajraForm: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    flowingStrikes: {
      name_en: "Greased Lightning",
      //Relentless Strikes / Flowing Strikes
      desc: "Increases damage dealt based on the number of attacks.",
      stats: [],
      dep: { resonanceBlow: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    lashOut: {
      name_en: "Lash Out",
      desc: "Deals multiple instances of melee bash damage to one target. The number of hits is equal to the number of hits made on the previous turn. No matter how many attacks Lash Out makes, it will always count as 1 attack for the purpose of this skill.",
      stats: ["STR"],
      dep: { flowingStrikes: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    },
    hundredFists: {
      name_en: "Hundred Fists",
      //Flurry of Fists
      //desc: "When an enemy is killed with Breakfire Rush, the user will attack another enemy with melee bash damage.",
      desc: "At the beginning of the next turn, deals multiple instances of melee bash damage to random enemies. Can hit the same target 4 times at most.",
      stats: ["STR"],
      dep: { vajraForm: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    breakfireRush: {
      name_en: "Breakfire Rush",
      //Weaving Flurry
      //desc: "After using an attack skill, if at least one of the skill's targets has a bind, there is a chance to repeat the skill.", Deals multiple instances of melee bash+fire damage to random targets.
      //desc: "This turn, if the designated target is hit by a Fire or Bash attack, follow up with a melee Fire+Bash attack. The chance of a Chain activating starts at 100%, and decreases with each activation.",
      desc: "Deals multiple instances of melee fire damage to an enemy row. Decreases the users critical rate for 1 turn after use.",
      stats: ["STR"],
      dep: { hundredFists: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    haymaker: {
      name_en: "Haymaker",
      //Duplex Suplex (????)
      //desc: "Gives a chance for an extra follow-up attack on Breakfire Rush activation.",
      /// Activates Breakfire Rush, Resonance Blow, and Lash Out all at once. Applies a multiplier-based reduction to each skill's damage. The user's buffs are dispelled after Peerless Combo's use.
      desc: "This turn, when the selected ally is attacked, counterattack with multiple instances of melee bash damage.",
      stats: ["STR"],
      dep: { breakfireRush: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    },
    chop: {
      name_en: "Chop",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
      //Onslaught / Shoulder Tackle / Triple Strike / Cursed Fist
      //desc: "Whenever an enemy gets inflicted by a bind, follow up with an attack.
      // Deals 3 instances of melee bash damage to one enemy. Each hit attempts to inflict head/arm/leg bind. If the target is bound by one of the attacks, the remaining attacks will not be made.",
      //Deals multiple instances of melee bash+fire damage to random targets. For 3 turns, increases the user's attack but decreases ailment/bind infliction.
      //Deals melee bash damage to one target. Attempts to inflict curse on the target. Clears ailments and for 3 turns, the enemy will negate ailments and have their ailment recovery reduced.
      //Toxic Jab |(Attempts to inflict poison on the target. 1% Chance and 200+ Poison damage)
  },

};
