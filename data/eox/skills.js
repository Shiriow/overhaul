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
      desc: "For one turn, automatically restores HP to allies when they are attacked. Every time this skill activates, its chance of activating on that ally decreases.",
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
      name_en: "Indomitability",
      desc: "Increases the party's physical and elemental attack for a set number of turns.",
      stats: ["Head"],
      dep: { immunize:3 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    succor: {
      name_en: "Succor",
      desc: "When the user is alive, party members with buffs will recover HP when they act.",
      stats: ["WIS"],
      dep: { indomitability: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 3 }
    },
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
      desc: "Increases the duration of all buffs on all party members. Cannot be used again for 3 turns.",
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
      desc: "For 3 turns, increases all party members' action speed and evasion.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: {},
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    mirageArrow: {
      name_en: "Mirage Arrow",
      desc: "Deals ranged stab damage to one target. Decreases their accuracy and make them act last for 3 turns.",
      stats: ["STR", "Arms", "Bow"],
      unique: true,
      type: "Break",
      dep: { illusionStep: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    flameArrow: {
      name_en: "Flame Arrow",
      desc: "Deals ranged stab+fire damage to one target, with line-piercing effects.",
      stats: ["STR", "Arms", "Bow"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    multiShot: {
      name_en: "Multi-Shot",
      desc: "Deals 2 instances of ranged stab damage to one enemy.",
      stats: ["STR", "Arms", "Bow"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    dropShot: {
      name_en: "Drop Shot",
      desc: "Deals ranged stab damage to one target. Damage increases if the target is in the back row.",
      stats: ["STR", "Arms", "Bow"],
      dep: { flameArrow: 2, multiShot: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 1.5 }
    },
    finishingArrow: {
      name_en: "Finishing Arrow",
      desc: "When the user attacks a target whose HP is below a set threshold, the user follows up with their weapon. Does not activate for links, chases or counterattacks.",
      stats: ["STR"],
      dep: { dropShot: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    disablingShot: {
      name_en: "Saboteur",
      desc: "After the user attacks this turn, all further attacks against enemies attacked by the user will have increased damage and accuracy.",
      
      stats: [],
      dep: { finishingArrow: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    sagittariusShot: {
      name_en: "Sagittarius Shot",
      
      desc: "In 2 turns, ranged stab damage is dealt to a random target. Attempts to inflict stun. Ineffective if the user dies before the skill activates.",
      stats: ["STR", "LUC", "Arms", "Bow"],
      dep: { dropShot: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    autoSagittarius: {
      name_en: "Downdraft",
      
      desc: "If Sagittarius Shot is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { sagittariusShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },

    chainDance: {
      
      name_en: "Chain Dance",
      desc: "This turn, the user has an increased chance of evading attacks, being targetted, and takes 2x damage. Each time they evade an attack, the boosts are reduced.",
      stats: ["Legs"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    phantomTrick: {
      
      
      name_en: "Phantom Trick",
      desc: "Deals ranged stab damage to one row. For 3 turns, reduces the accuracy of one row of enemies.",
      stats: ["STR", "Arms", "Bow"],
      dep: { chainDance: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    hazyShot: {
      name_en: "Hazy Shot",
      desc: "Deals ranged stab damage to one target. Always hits. Can only be used if the user evaded an attack on the previous turn.", 
      stats: ["STR", "Arms", "Bow"],
      dep: { phantomTrick: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    galeforce: {
      name_en: "Galeforce",
      desc: "When an attack is evaded, the user has a chance to cast Phantom Knives.",
      stats: [],
      dep: { hazyShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    blindArrow: {
      name_en: "Blind Arrow",
      desc: "Deals ranged stab damage to one target. Attempts to inflict blind.",
      stats: ["STR", "LUC", "Arms", "Bow"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    feyPhantasm: {
      name_en: "Fey Phantasm",
      desc: "Creates a decoy of the user in an empty slot. The decoy has added evasion and chance to be targeted. \n\nHas a chance of being used at the start of battle after level 6.",
      stats: ["Head"],
      dep: { blindArrow: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    illusoryWave: {
      name_en: "Illusory Wave",
      desc: "This turn, the selected row has a high chance of evading physical attacks. Each time they evade an attack, the evasion boost is reduced.",
      stats: ["Legs"],
      dep: { feyPhantasm: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    sereneBreeze: {
      name_en: "Nature's Cloak",
      desc: "Places a buff on an ally that allows them to dodge the next incoming physical attack. When an attack is dodged, the buff is removed.",
      stats: ["Head"],
      dep: { illusoryWave: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    shadewalker: {
      name_en: "Shadewalker",
      desc: "This turn, every time the selected ally/mirage dodges an attack, members in the same row will individually counter with an attack using their equipped weapon.",
      stats: ["STR", "Legs"],
      dep: { hazyShot: 2, sereneBreeze: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3.5 }
    },
    resuscitate: {
      name_en: "Resuscitate",
      desc: "Restores HP to one ally. Can only be used in the field. Higher levels allow this skill to revive the target as well.",
      stats: [],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    efficiency: {
      name_en: "Efficiency",
      desc: "For 5 turns, increases the HP restored by Medicas, extends their range to one row, and increases evasion.",
      stats: ["Head"],
      dep: { resuscitate: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    blindingBlossom: {
      name_en: "Blinding Blossom", 
      desc: "At the end of the turn, if the user's HP is full, restores HP to all party members. Only one instance of this skill can activate per turn.",
      stats: [],
      dep: { efficiency: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    riskPerception: {
      name_en: "Risk Perception",
      desc: "There is a set chance that blindsides will be negated.",
      stats: [],
      dep: {},
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    stalker: {
      name_en: "Stalker",
      desc: "For a set number of steps, reduces encounter rate.",
      stats: [],
      dep: { riskPerception: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    scapegoat: {
      name_en: "Scapegoat",
      desc: "Selected ally will cover all party members a set number of times this turn. Ineffective if that ally has leg bind.",
      stats: ["Legs"],
      dep: { blindingBlossom: 2, stalker: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 5.5 }
    },
    swapStep: {
      name_en: "Swap Step",
      desc: "Selected ally has a chance to act first this turn.",
      stats: ["Legs"],
      dep: { scapegoat: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5.5 }
    },
    naturalInstinct: {
      name_en: "Take",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: {},
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Ronin: {
    peerless: {
      name_en: "Peerless",
      desc: "For 3 turns, stance duration will not decrease, and stances cannot be removed. ",
      stats: [],
      unique: true,
      type: "Boost",
      dep: {},
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    issen: {
      name_en: "Issen",
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
      desc: "When Upper Stance is active, damage is increased but various other stats are decreased.",
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    airBlade: {
      name_en: "Air Blade",
      desc: "Deals ranged cut damage to one target. \nAssumes Upper Stance at the end of the turn.",
      stats: ["STR", "Arms", "Katana"],
      dep: { upperStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    ripperBlast: {
      name_en: "Ripper Blast",
      desc: "Deals melee cut damage to one target, with splash damage to the adjacent enemies. \nAssumes Upper Stance at the end of the turn.",
      stats: ["STR", "Arms", "Katana"],
      dep: { upperStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    dyingLotus: {
      name_en: "Dying Lotus",
      desc: "Deals melee cut damage to one target. \nAssume Upper Stance 2 turns later.",
      stats: ["STR", "Arms", "Katana"],
      dep: { upperStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    clearStance: {
      name_en: "Clear Stance",
      desc: "Increases defense and accuracy when Clear Stance is active. At max, Clear Stance has a chance to automatically activate at the start of a battle.",
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 5 }
    },
    armStrike: {
      name_en: "Arm Strike",
      desc: "Deals melee stab damage to one target. Attempts to inflict arm bind. \nAssumes Clear Stance after use.",
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { clearStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    bloodyBlade: {
      name_en: "Bloody Blade",
      desc: "Deals melee cut damage to one target and increases the user's row attack for a set number of turns. \nAssumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { clearStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    flowingPath: {
      name_en: "Flowing Path",
      desc: "Deals melee cut damage to one target. Restores HP to the user based on the amount of damage dealt.\nAssumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { clearStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    soaringTempest: {
      name_en: "Soaring Tempest",
      desc: "Requires Upper Stance. Deals melee cut damage to one target and when a party member on the user's row is attacked, counterattack with melee damage. \nAssumes Clear Stance for 3 turns after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { airBlade: 1, dyingLotus: 1, ripperBlast: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    mirrorMoon: {
      name_en: "Mirror Moon",
      desc: "Requires Clear Stance. On this turn, when the user is attacked with physical damage, there is a chance they will nullify the damage and counterattack the source. \nAssumes Upper Stance for 3 turns after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { armStrike: 1, flowingPath: 1, bloodyBlade: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    moonShadow: {
      name_en: "Moon Shadow",
      desc: "Requires any stance. Deals melee cut+almighty damage to one target.",
      stats: ["STR", "Arms", "Katana"],
      dep: {},
      maxLevel: 8,
      coords: { x: 2, y: 2.5 }
    },
    spiritBreath: {
      name_en: "Spirit Breath",
      desc: "Requires any stance. Deals melee cut damage to one target. Restores HP to the user and allies adjacent to the user.",
      stats: ["STR", "Arms", "Katana"],
      dep: {},
      maxLevel: 8,
      coords: { x: 2, y: 4.5 }
    },
    helmSplitter: {
      name_en: "Helm Splitter",
      desc: "Requires any stance. Deals melee cut damage to one target. Low accuracy. \nReduces stance duration by 2 after use. ",
      stats: ["STR", "Arms", "Katana"],
      dep: { moonShadow: 3 },
      maxLevel: 10,
      coords: { x: 3, y: 1.5 }
    },
    flameGrater: {
      name_en: "Flame Grater",
      desc: "Requires any stance. Deals melee cut+fire damage to one row and reduces their Ailment and Bind Resistance for a set number of turns. \nReduces stance duration by 2 after use. ",
      stats: ["STR", "Arms", "Katana"],
      dep: { moonShadow: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2.5 }
    },
    lightningStab: {
      name_en: "Lightning Stab",
      desc: "Requires any stance. Deals melee stab+volt damage to one target and reduces the targets attack for that turn. \nReduces stance duration by 2 after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { spiritBreath: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4.5 }
    },
    frigidSlash: {
      name_en: "Frigid Slash",
      desc: "Requires any stance. Deals melee cut+ice damage to one target. Attempts to inflict sleep. \nReduces stance duration by 2 after use. ",
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { spiritBreath: 3 },
      maxLevel: 10,
      coords: { x: 3, y: 5.5 }
    },
    swallowStrike: {
      name_en: "Swallow Strike",
      desc: "Requires any stance. Deals multiple instances of melee cut damage to one target. \nRemoves stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { helmSplitter: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    petalScatter: {
      name_en: "Petal Scatter",
      desc: "Requires any stance. Deals ranged cut damage to all targets. Deals less damage based on the number of targets. \nRemoves stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { flameGrater: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2.5 }
    },
    earthBreaker: {
      name_en: "Earth Breaker",
      desc: "Requires any stance. Deals melee cut attack to one target with splash damage and a chance of stunning. \nRemoves stance after use.",
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { mirrorMoon: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 4.5 }
    },
    bluntingStab: {
      name_en: "Blunting Stab",
      desc: "Requires any stance. Deals melee stab damage to one target. Attempts to inflict petrify. \nRemoves stance after use.",
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { hazeSlash: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 5.5 }
    },
    risingSpirit: {
      name_en: "Rising Spirit",
      desc: "Requires Lv 4 Upper and Clear Stance. \nAt the end of the turn, if a stance is active, restores TP to the user.",
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 3.5 }
    },
    duel: {
      name_en: "Duel",
      desc: "Increases damage when attacking enemies that the user attacked last turn.",
      stats: [],
      dep: { swallowStrike: 1, petalScatter: 1 },
      maxLevel: 6,
      coords: { x: 5, y: 2 }
    },
    bladeGrasp: {
      name_en: "Blade Grasp",
      desc: "Provides a chance to nullify physical attacks against the user's row.",
      stats: [],
      dep: { bluntingStab: 1, earthBreaker: 1 },
      maxLevel: 6,
      coords: { x: 5, y: 5 }
    },
    mine: {
      name_en: "Mine",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: {},
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  "War Magus": {
    warEdgePower: {
      name_en: "War Edge Power",
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
      desc: "User can dual-wield and use sword skills with staff. Increases maximum TP when a sword is equipped; increases damage when a staff is equipped on the top slot. Normal attacks may hit 2-4 times if two weapons are equipped.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1.5 }
    },
    warHealLine: {
      name_en: "Blossom Sketch",
      desc: "Restores HP to one row at the start of the turn, then at the end of the turn.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 1.5 }
    },
    warRevive: {
      name_en: "War Revive",
      desc: "Revives one ally at the start of the turn, then attempts to revive them again at the end of the turn.",
      stats: [],
      dep: { warHealLine: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1.5 }
    },
    artery: {
      name_en: "Artery",
      desc: "For a set number of turns, automatically restores HP for all party members when they act, once per turn.",
      stats: ["WIS"],
      dep: { warRevive: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    warResponse: {
      name_en: "War Response",
      desc: "For a set number of turns, automatically restores HP for all party members when the debuffed enemy acts, once per turn.",
      stats: ["WIS"],
      dep: { warRevive: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 2 }
    },
    pandemonium: {
      name_en: "Pandemonium",
      desc: "Increases the targets attack and defense for a set number of turns.",
      stats: [],
      dep: { artery: 2, warResponse: 2  },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    barrier: {
      name_en: "Barrier",
      desc: "For one turn, there is a chance to nullify binds and ailments against all party members, up to a set number of times.",
      stats: [],
      dep: { pandemonium: 2 },
      maxLevel: 10,
      coords: { x: 5, y: 1.5 }
    },
    drippingSlash: {
      name_en: "Dripping Brier",
      desc: "Deals melee cut+almighty damage to one target. Attempts to inflict one of poison, paralyze, blind, sleep or curse.",
      stats: ["LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3.5 }
    },
    strengthSlash: {
      name_en: "Strength Blight",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, decreases their attack for a set number of turns.",
      stats: ["STR"],
      dep: { drippingSlash: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    guardSlash: {
      name_en: "Guard Blight",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, decreases their defense for a set number of turns.",
      stats: ["STR"],
      dep: { drippingSlash: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    headcut: {
      name_en: "Thorn Chains",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict head bind.",
      stats: ["STR", "LUC", "Arms", "Sword"],
      dep: { strengthSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    armcut: {
      name_en: "Thorn Cuffs",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict arm bind.",
      stats: ["STR", "LUC", "Arms", "Sword"],
      dep: { guardSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    legcut: {
      name_en: "Thorn Shackles",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict leg bind.",
      stats: ["STR", "LUC", "Arms", "Sword"],
      dep: { headcut: 2, armcut: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3.5 }
    },
    ailingSlash: {
      name_en: "Ailing Barb",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, increases damage dealt.",
      stats: ["STR"],
      dep: { legcut: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    scorpion: {
      name_en: "Scorpion",
      desc: "Deals melee cut+almighty damage to one enemy, with double splash damage to adjacent enemies. If adjacent enemies have ailments, attempts to petrify the target.",
      stats: ["STR"],
      dep: { legcut: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    blindLaughter: {
      name_en: "Blind Laughter",
      desc: "This turn, if the target is afflicted with any ailments, binds, or stun, the user will perform a follow up attack.",
      stats: [],
      dep: { ailingSlash: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 3 }
    },
    looseThread: {
      name_en: "Loose Thread",
      desc: "Deals melee cut damage to all enemies. Increases damage dealt and attempts to inflict instant death on enemies with binds.",
      stats: ["WIS"],
      dep: { scorpion: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 4 }
    },
    leeches: {
      name_en: "Leech",
      desc: "When the user deals damage to an enemy with an ailment, restores HP to the user's row. Can only activate once per turn.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5.5 }
    },
    rouse: {
      name_en: "Rouse",
      desc: "Increases the user's Force gain based on the number of enemies with binds.",
      stats: [],
      dep: { leeches: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5.5 }
    },
    bindCut: {
      name_en: "Aspir Gash",
      desc: "Deals melee cut+almighty damage to one target. If target is bound, increases the user's Force.",
      stats: [],
      dep: { rouse: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5.5 }
    },
    spiritDrain: {
      name_en: "Spirit Drain",
      desc: "When the user deals damage to an enemy with both an ailment and a bind, restores TP to the user's row. Can only activate once per turn.",
      stats: ["WIS"],
      dep: { bindCut: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5.5 }
    },
    curseCut: {
      name_en: "Maledict Bristle",
      desc: "Deals melee cut+almighty damage to one target and attempt to inflict curse. If sucessful, or if the target is already cursed, restores Force to the users row.",
      stats: ["LUC"],
      dep: { spiritDrain: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 5.5 }
    },
    displace: {
      name_en: "Displace",
      desc: "Removes ailments and binds from one ally, and attempts to inflict them on one enemy.",
      stats: ["LUC"],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    take: {
      name_en: "Take",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Highlander: {
    heroBattle: {
      name_en: "Hero Battle",
      desc: "For 3 turns, spear skills will have increased power, and restore HP to all party members based on damage dealt. \nSpear skills that activate instant death will still restore HP based on the damage that would have been dealt.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: {},
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    gaeBolg: {
      name_en: "Gae Bolg",
      desc: "This turn the party will endure all attacks, and the user will deal ranged stab damage to all combatants.",
      stats: ["STR", "Arm", "Spear"],
      unique: true,
      type: "Break",
      dep: { heroBattle: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    longThrust: {
      name_en: "Vorpal Thrust",
      desc: "Deals ranged stab damage to one target. Restores HP to the user based on the amount of damage dealt.",
      stats: ["STR", "Arm", "Spear"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 3.5 }
    },
    nascentFlash: {
      name_en: "Nascent Flash", 
      desc: "Deals melee stab damage to one target. If it kills, heal the whole party.",
      stats: ["STR", "Arm", "Spear"],
      dep: { longThrust: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 3.5 }
    },
    headPierce: {
      name_en: "Head Pierce",
      desc: "Deals melee stab damage to one target. Attempts to inflict head bind and instant death.",
      stats: ["STR", "LUC", "Arm", "Spear"],
      dep: { nascentFlash: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 3.5 }
    },
    turningTide: {
      name_en: "Turning Tide",
      desc: "When the user defeats an enemy, restores HP to all party members.",
      stats: [],
      dep: { headPierce: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 3.5 }
    },
    blackSabbath: {
      name_en: "Black Sabbath",
      desc: "Deals ranged almighty damage to all enemies, and restores all party members' HP based on damage dealt.",
      stats: ["STR", "Arm", "Spear"],
      dep: { turningTide: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3.5 }
    },
    lifeSurge: {
      name_en: "Life Surge",
      desc: "If the user is in the front row and at full HP, their TP is restored at the end of the turn.",
      stats: [],
      dep: { blackSabbath: 3, alliedBonds: 3 },
      maxLevel: 6,
      coords: { x: 5, y: 4.125 }
    },
    drainingThrust: {
      name_en: "Draining Thrust",
      desc: "Consumes the user's HP to deal melee stab damage to the enemy front row.",
      stats: ["STR", "Arm", "Spear"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 2.25 }
    },
    delayedCharge: {
      name_en: "Delayed Charge",
      desc: "Consumes the user's HP to deal ranged stab damage to one target at the end of a set number of turns after. \nDamage is increased based on the number of turns passed before its activation. \nIneffective if the user dies before the skill activates.",
      stats: ["STR", "Arm", "Spear"],
      dep: { drainingThrust: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2.25 }
    },
    crossCharge: {
      name_en: "Cross Charge",
      desc: "Consumes the user's HP to deal melee stab damage to one target. \nIf currently charging for Delayed Charge, activates it and increases Cross Charge's damage.",
      stats: ["STR", "Arm", "Spear"],
      dep: { delayedCharge: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2.25 }
    },
    thousandSpears: {
      name_en: "Thousand Spears", 
      desc: "Deals multiple instances of melee stab damage to an enemy's row. Damage decreases the higher the user's current HP is.",
      stats: ["STR", "Arm", "Spear"],
      dep: { crossCharge: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2.25 }
    },
    forceOffering: {
      name_en: "Force Offering",
      desc: "Consumes the user's HP to pause the duration of their Force Boost this turn and boost their attack until the end of the next turn. \nOnly usable once per Force Boost.",
      stats: ["Head"],
      dep: { thousandSpears: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2.25 }
    },
    bloodVeil: {
      name_en: "Blood Veil",
      desc: "When the user loses HP, increases defense until the end of the turn.",
      stats: [],
      dep: { drainingThrust: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    bloodlust: {
      name_en: "Bloodlust",
      desc: "When the user loses HP, there is a chance that they will automatically attack with their weapon.",
      stats: [],
      dep: { bloodVeil: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    fightingSpirit: {
      name_en: "Fighting Spirit",
      desc: "If the user lost HP on the previous turn, increases their attack this turn.",
      stats: [],
      dep: { thousandSpears: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    jawsOfDeath: {
      name_en: "Jaws of Death",
      desc: "When cast, the user will endure fatal damage once and take additional damage. \nIf the user endured a fatal hit through Jaws of Death, their damage on the next turn is increased depending on the damage endured.",
      stats: ["Head"],
      dep: { fightingSpirit: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    legionBurst: {
      name_en: "Legion Burst",
      desc: "Consumes the HP of all allies other than the user at the start of the turn. \nAt the end of the turn deal ranged stab damage to all enemies.",
      stats: ["STR", "Arm", "Spear"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 4.75 }
    },
    legionCharge: {
      name_en: "Legion Charge", 
      desc: "Consumes the HP of all allies other than the user at the start of the turn. \nAt the end of the turn deal ranged stab damage to one target.",
      stats: ["STR", "Arm", "Spear"],
      dep: { legionBurst: 3 },
      maxLevel: 10,
      coords: { x: 1, y: 4.75 }
    },
    miseryTear: {
      name_en: "Misery Tear", 
      desc: "Deals melee stab damage to one enemy. Deals more damage the less HP the entire party has. \nBoth the party's current average percentage of HP remaining as well as the raw amount of HP missing are taken into account by this.",
      stats: ["STR", "Arm", "Spear"],
      dep: { legionCharge: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4.75 }
    },
    alliedBonds: {
      name_en: "Allied Bonds",
      desc: "If the user's skill consumed the HP of allies on the user's row, restores their TP at the end of the turn.",
      stats: [],
      dep: { miseryTear: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 4.75 }
    },
    spiritShield: {
      name_en: "Spirit Shield",
      desc: "Consumes the user's HP to increase the elemental defense and maximum HP of one row for a set number of turns.",
      stats: ["Head"],
      dep: { legionBurst: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    bloodyOffense: {
      name_en: "Bloody Offense",
      desc: "Consumes the HP of all allies other than the user to increase a row's attack and decrease defence for a set number of turns.",
      stats: ["Head"],
      dep: { spiritShield: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 6 }
    },
    bloodFortune: {
      name_en: "Blood Fortune",
      desc: "Consumes all party members' HP to increase their infliction rate of binds and ailments for a set number of turns.",
      stats: ["Head"],
      dep: { bloodyOffense: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    battleInstincts: {
      name_en: "Battle Instinct",
      desc: "At the start of battle, there is a chance to cast a buff on all party members that negates ailments once for 3 turns. \nCannot activate if another ally activated it first.",
      stats: [],
      dep: { bloodFortune: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 6 }
    },
    mine: {
      name_en: "Mine",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: {},
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },

  Ninja: {
    insolence: {
      name_en: "Insolence",
      desc: "For 3 turns, increases the user's evasion and chance of being targeted.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: {},
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    ninpoClone: {
      name_en: "Ninpo: Clone", 
      desc: "Consumes half of the user's TP to create a clone in an empty slot. Doesn't break Force Gauge.",
      stats: ["Head"],
      unique: true,
      type: "Break",
      dep: { insolence: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    shadowBind: {
      name_en: "Shadow Bind",
      desc: "Deals melee cut damage to one target. Attempts to inflict leg bind.",
      stats: ["STR", "LUC", "Arms", "Knife"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 1.5 }
    },
    hawkStrike: {
      name_en: "Hawk Strike",
      desc: "Deals multiple instances of melee cut damage to random targets.",
      stats: ["STR", "Arms", "Knife"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 2.5 }
    },
    ninpoScorpio: {
      name_en: "Ninpo: Scorpio",
      
      desc: "Deals 3 instances of ranged stab damage to random targets. Attempts to inflict poison.",
      stats: ["STR", "LUC", "Head"],
      dep: { shadowBind: 2, hawkStrike: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    ninpoMirror: {
      name_en: "Ninpo: Mirror",
      desc: "Attempts to inflict the ailments and binds present on one enemy to all enemies.",
      stats: ["LUC", "Head"],
      dep: { ninpoScorpio: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    ninpoShock: {
      name_en: "Ninpo: Shock",
      desc: "Attempts to inflict panic on one enemy.",
      stats: ["LUC", "Head"],
      dep: { ninpoMirror: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    ninpoNeedles: {
      name_en: "Ninpo: Needles",
      desc: "This turn, when the selected row is attacked, counterattack with ranged stab damage and attempt to inflict sleep.",
      stats: ["STR", "LUC", "Arms"],
      dep: { ninpoScorpio: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 2 }
    },
    quietus: {
      
      
      
      name_en: "Quietus",
      desc: "Deals melee cut damage to one target with a chance to instantly kill it. Chance is increased if the enemy has an ailment.",
      stats: ["STR", "LUC", "Arms", "Knife"],
      dep: { ninpoNeedles: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 2 }
    },
    foxDrop: {
      name_en: "Fox Drop",
      desc: "Deals melee cut damage to one target. Attempts to inflict petrify.", 
      stats: ["STR", "LUC", "Arms", "Knife"],
      dep: { ninpoShock: 3, quietus: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    schadenfreude: {
      name_en: "Schadenfreude",
      desc: "Deals melee cut damage to one target. Always hits. If target has an ailment, increases the user's Force.",
      stats: ["STR", "Arms", "Knife"],
      dep: { ninpoScorpio: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    fallingBloom: {
      name_en: "Falling Bloom",
      desc: "Deals melee cut+almighty damage to one target. Low accuracy.",
      stats: ["STR", "Arms", "Knife"],
      dep: { schadenfreude: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    drawingSlice: {
      name_en: "Tagen Battou", 
      desc: "Deals multiple instances of melee damage to random targets. Consumes a clone to deal quadruple damage; half if no clone.",
      stats: ["STR", "Arms", "Knife"],
      dep: { fallingBloom: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    yaegasumi: {
      name_en: "Yaegasumi", 
      desc: "Main Class only. At the start of the battle, there is a chance to consume half of the user's HP and TP to create a clone in an empty slot.",
      stats: [],
      dep: { drawingSlice: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 3 }
    },

    otori: {
      name_en: "Otori",
      desc: "Increases an ally's chance of being targeted and evasion for a set number of turns.",
      stats: ["STR", "Arms", "Knife"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    fuzake: {
      name_en: "Fuzake",
      desc: "Deals melee stab damage to one target and, for that turn, increases the user's evasion and chance of being targeted.",
      stats: ["Head"],
      dep: { otori: 1 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    stormyGale: {
      name_en: "Stormy Gale",
      desc: "When the user dodges an attack, their chance to be targeted and defense increase. If the they fail to dodge an attack, the effects are reset.",
      stats: [],
      dep: { fuzake: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    concealment: {
      name_en: "Concealment",
      
      
      desc: "Increases evasion based on the number of empty equipment slots.",
      stats: [],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    ninpoSmoke: {
      name_en: "Ninpo: Smoke",
      desc: "For 3 turns, increases the user's evasion.", 
      stats: ["Legs"],
      dep: { concealment: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    rendingShatter: {
      name_en: "Rending Shatter", 
      
      
      desc: "Deals melee cut damage to one target. Damage is increased depending on the number of evades the user has made since they last used this skill.",
      stats: ["Legs"],
      dep: { ninpoSmoke: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    shadowstrike: {
      name_en: "Shadowstrike", 
      desc: "When an attack is dodged, the user will counter-attack the source of the attack multiple times, restoring Force once. ",
      stats: ["STR", "Head", "Knife"],
      dep: { stormyGale: 1, rendingShatter: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4.5 }
    },
    acrobatics: {
      
      name_en: "Acrobatics",
      desc: "When the user evades an attack, their TP is restored. ",
      stats: [],
      dep: { concealment: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    eyeForAnEye: {
      name_en: "Eye for an Eye",
      desc: "If the user evaded an attack on the previous turn, increases chance of inflicting ailments",
      stats: [],
      dep: { acrobatics: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    goad: {
      name_en: "Goad",
      desc: "Transfer some of your TP to one ally.",
      stats: ["Head", "Knife"],
      dep: { eyeForAnEye: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    moonlightOmen: {
      name_en: "Moonlight Omen", 
      desc: "If Ninpo: Smoke is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { goad: 2, shadowstrike: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5.25 }
    },
    chop: {
      name_en: "Keburi no Sue",
      desc: "Melee attacks will hit for full damage and can always reach the enemy back row, even when the user is in the back.\nOccasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: {},
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Zodiac: {
    astrologersAxis: {
      name_en: "Astrologer's Axis",
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
      desc: "Deals ranged fire+ice+volt damage to all enemies. On this turn, all allies' TP cost will be reduced to 0.",
      stats: ["INT"],
      unique: true,
      type: "Break",
      dep: { astrologersAxis: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    pulseStar: {
      name_en: "Pulse Star",
      desc: "Deals ranged almighty damage to one enemy. Reduces their elemental defense for a set number of turns.",
      stats: ["INT, Arms, Staff"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    binaryFire: {
      name_en: "Binary Fire",
      desc: "Deals ranged fire damage to all enemies.",
      stats: ["INT, Head, Staff"],
      dep: { pulseStar: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    binaryIce: {
      name_en: "Binary Ice",
      desc: "Deals ranged ice damage to all enemies.",
      stats: ["INT, Head, Staff"],
      dep: { pulseStar: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    binaryVolt: {
      name_en: "Binary Volt",
      desc: "Deals ranged volt damage to all enemies.",
      stats: ["INT, Head, Staff"],
      dep: { pulseStar: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    meteorRain: {
      name_en: "Meteor Rain",
      desc: "Deals 5-10 instances of ranged random elemental damage to random targets.",
      stats: ["INT, Head, Staff"],
      dep: { binaryFire: 3, binaryIce: 3, binaryVolt: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2.5 }
    },
    refractionNova: {
      name_en: "Refraction Nova",
      desc: "On the third turn after using this skill, ranged almighty damage is dealt to one target. During this time, for each time the target's weakness is hit, this skills damage is increased up to 10 stacks. Multi-hit attacks will trigger multiple stacks.",
      stats: ["INT, Head, Staff"],
      dep: { meteorRain: 4 },
      maxLevel: 10,
      coords: { x: 3, y: 2.5 }
    },
    guidingStar: {
      name_en: "Guiding Star",
      desc: "Increases maximum TP. Increases attack when Astral Fire is active.",
      stats: [],
      dep: { binaryFire: 3, binaryIce: 3, binaryVolt: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1.5 }
    },
    astralFire: {
      name_en: "Astral Fire",
      desc: "Deals ranged fire damage to one target. Applies the Astral Fire stance on the user, increasing damage for a set number of turns. This skill cannot be used again for 3 turns.",
      stats: ["INT, Head, Staff"],
      dep: { guidingStar: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 1.5 }
    },
    umbralIce: {
      name_en: "Umbral Ice",
      desc: "Requires Astral Fire. Deals ranged ice damage to one target. Recovers some TP and removes Astral Fire after use.",
      stats: ["INT, Head, Staff"],
      dep: { astralFire: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    solsticeVolt: {
      name_en: "Solstice Volt",
      desc: "Requires Astral Fire. Deals ranged volt damage to one target. Removes Astral Fire after use.",
      stats: ["INT, Head, Staff"],
      dep: { astralFire: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    singularity: {
      name_en: "Singularity",
      desc: "Increases damage dealt when hitting weaknesses.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    cosmicGleam: {
      name_en: "Cosmic Gleam",
      desc: "For a set number of turns, increases elemental attack and defense for one row.",
      stats: ["Head"],
      dep: { singularity: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    asteroidBelt: {
      name_en: "Asteroid Belt",
      desc: "Provides a chance to nullify elemental attacks against the user's row.",
      stats: [],
      dep: { cosmicGleam: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    nebulaResurgence: {
      name_en: "Nebula Resurgence",
      desc: "When the user hits an enemy's weakness, their Force gauge is increased.",
      stats: [],
      dep: { asteroidBelt: 4 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    aspectedVeil: {
      name_en: "Aspected Veil",
      desc: "For a set number of turns, imbue an ally's weapon with fire/ice/volt and have them automatically counterattack enemies who attacks them.",
      stats: ["Head, STR"],
      dep: { nebulaResurgence: 4 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    prophecy: {
      name_en: "Prophecy",
      desc: "Prevents elemental attacks from one enemy. If an attack is prevented, increases the user's attack until the end of the next turn.",
      stats: ["Head, Staff"],
      dep: { aspectedVeil: 4 },
      maxLevel: 6,
      coords: { x: 5, y: 3.5 }
    },
    fluxAbsorption: {
      name_en: "Flux Absorption",
      desc: "Reduces one instance of elemental damage against all party members. Higher levels upgrade reduction to absorb.",
      stats: ["Head, Staff"],
      dep: { aspectedVeil: 4 },
      maxLevel: 8,
      coords: { x: 5, y: 4.5 }
    },
    celestialReturn: {
      name_en: "Celestial Return",
      desc: "Restores TP to the user when hitting a weakness.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    aetherLeak: {
      name_en: "Aether Leak",
      desc: "For a set amount of turns, when using TP, a percentage of the used TP will be restored to one random party member.",
      stats: ["Head"],
      dep: { celestialReturn : 2 },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    autoLeak: {
      name_en: "Auto-Leak",
      desc: "If Aether Leak is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { aetherLeak: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    darkMatter: {
      name_en: "Dark Matter",
      desc: "Reduce TP usage for one row this turn, while increasing the user's Zodiac skill damage until the end of the next turn.",
      stats: ["Head"],
      dep: { celestialReturn: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    stellarFlow: {
      name_en: "Stellar Flow",
      desc: "Increases attack based on the number of TP spent on the previous turn. Does not activate if TP spent last turn is too low.",
      stats: [],
      dep: { darkMatter: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    pulsarFeedback: {
      name_en: "Pulsar Feedback",
      desc: "Provides a chance to refund the user's TP usage.",
      stats: [],
      dep: { stellarFlow : 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    mine: {
      name_en: "Synastry",
      desc: "The previous skill's element is now added into your attacks. Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },

  Shogun: {
    fullCombatForm: {
      name_en: "Full Combat Form",
      desc: "For 3 turns, increases maximum HP and attack for all party members.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: {},
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    bodyDouble: {
      name_en: "Body Double",
      desc: "This turn, all party members will negate any hostile action once.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { fullCombatForm: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    parryingBlade: {
      name_en: "Second Sword",  
      desc: "Increases physical defense and the user can attack with both weapons if two weapons are equipped. Damage of the second attack is based on this skill's level. Enables sub-weapon when this skill is learned.",
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 1.85 }
    },
    hawkSlice: {
      name_en: "Twilight Glory", 
      desc: "Deals melee damage to one target with the user's weapon. If a second weapon is equipped, attack adjacent enemies with double damage.",
      stats: ["STR", "Arm", "Katana"],
      dep: { parryingBlade: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    gnashingFang: {
      name_en: "Gnashing Fang",
      desc: "Deals melee damage to one target with the user's weapon. If that enemy is killed and a second weapon is equipped, attack all enemies for the same damage.",
      stats: ["STR", "Arm", "Katana"],
      dep: { hawkSlice: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 0.5 }
    },
    fiveRingSword: {
      name_en: "Five-Ring Sword",
      desc: "Deals multiple instances of melee damage to random targets with user's weapon, and this attack will alternate between the katana and the other weapon. If only one weapon is equipped, the maximum number of hits will be halved.",
      stats: ["STR", "Arm", "Katana"],
      dep: { hawkSlice: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1.5 }
    },
    finalFlicker: {
      name_en: "Final Flicker",
      desc: "When the user kills an enemy, restores Force to all party members.",
      stats: [],
      dep: { gnashingFang: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 0 }
    },
    bloodyLance: {
      name_en: "Bloody Lance",
      desc: "When the user kills an enemy or ally, their attack is increased. The effect is reset when the user dies.",
      stats: [],
      dep: { gnashingFang: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    mercyKill: {
      name_en: "Mercy Kill",
      desc: "When any enemy or ally is attacked, and their HP falls below a set percentage, there is a chance to inflict instant death to them.",
      stats: ["Arm"],
      dep: { finalFlicker: 3, bloodyLance: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 0.5 }
    },
    soleFocus: {
      name_en: "Sole Focus", 
      desc: "Increases damage when only one element is used in an attack.",
      stats: [],
      dep: { parryingBlade: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 2.65 }
    },
    wickedTalons: {
      name_en: "Wicked Talons",
      desc: "Normal attacks recover TP.",
      stats: [],
      dep: { soleFocus: 3 },
      maxLevel: 4,
      coords: { x: 2, y: 2.65 }
    },
    savageClaw: {
      name_en: "Savage Claw",
      desc: "Normal attacks may hit 2-4 times.",
      stats: ["STR"],
      dep: { wickedTalons: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 2.65 }
    },
    blitzCommand: {
      name_en: "Blitz Command",
      desc: "All allies other than the user will attack one target with their weapons.",
      stats: ["STR", "Arm"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 3.85 }
    },
    galvanize: {
      name_en: "Galvanize", 
      desc: "All allies other than the user will heal random party members a set number of times. Each party member can only be healed once per ally.",
      stats: ["WIS", "Arm"],
      dep: { blitzCommand: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 3.85 }
    },
    ambushStance: {
      name_en: "Ambush Stance", 
      desc: "This turn, when the selected ally is attacked, all front row allies will counterattack with their weapons. Does not activate against counterattacks.",
      stats: ["STR", "Arm"],
      dep: { galvanize: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 3.85 }
    },
    rearDignity: {
      name_en: "Rear Dignity",  
      desc: "Reduces damage done and taken to a row for one turn.",
      stats: ["Head"],
      dep: { ambushStance: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 3.85 }
    },
    sanzuCross: {
      name_en: "Sanzu Cross",
      desc: "This turn, the user will chase attacks from all allies and enemies. Number of chases is halved if equipped with just one weapon.",
      stats: ["STR", "Leg"],
      dep: { savageClaw: 3, rearDignity: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 3.25 }
    },
    blazeSpirit: {
      name_en: "Blaze Spirit",
      desc: "For a set number of turns, imbues one row of allies' weapons with fire and have them counterattack enemies who attacks them with melee attacks.",
      stats: ["STR","Head"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    hailSpirit: {
      name_en: "Hail Spirit",
      desc: "For a set number of turns, imbues one row of allies' weapons with ice and have them counterattack enemies who attacks them with melee attacks.",
      stats: ["STR","Head"],
      dep: { blazeSpirit: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    boltSpirit: {
      name_en: "Bolt Spirit",
      desc: "For a set number of turns, imbues one row of allies' weapons with volt and have them counterattack enemies who attacks them with melee attacks.",
      stats: ["STR","Head"],
      dep: { blazeSpirit: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    greatGeneral: {
      name_en: "Great General",
      desc: "For a set number of turns, increases one ally's physical attack and chance of being targeted.",
      stats: ["Head"],
      dep: { hailSpirit: 3, boltSpirit: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 5.5 }
    },
    moraleBoost: {
      name_en: "Morale Boost",
      desc: "When the user is revived, restores HP to all allies.",
      stats: ["WIS"],
      dep: { greatGeneral: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    reincarnation: {
      name_en: "Reincarnation",
      desc: "On the turn when the user's HP reaches 0, there is a chance that they may revive at the end of that turn.",
      stats: [],
      dep: { moraleBoost: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 5 }
    },
    bloodfest: {
      name_en: "Bloodfest", 
      desc: "Once per battle, when the user is killed by an enemy attack, they will counterattack with ranged cut damage to all enemies.",
      stats: ["STR"],
      dep: { greatGeneral: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    ritualSuicide: {
      name_en: "Ritual Suicide",
      desc: "Restores HP to all other allies with a chance to revive them, but the user dies. This self-inflicted death cannot be prevented via any means.",
      stats: ["WIS", "Arm"],
      dep: { bloodfest: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    },
    take: {
      name_en: "Take",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: {},
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },


  Nightseeker: {
    killerStance: {
      name_en: "Killer Stance",
      desc: "For 3 turns, increases attack and ailment infliction chance for the user.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    disaster: {
      name_en: "Disaster",
      desc: "Deals melee cut damage to one target. If the target has an ailment, increases the ailment's duration.",
      stats: ["STR"],
      unique: true,
      type: "Break",
      dep: { killerStance: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    abyssalCurse: {
      name_en: "Abyssal Curse",
      desc: "Umbral skill. Deals ranged cut damage to one target. Attempts to inflict curse.",
      stats: ["STR", "LUC", "Arms", "Sword/Knife"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    shadowflame: {
      name_en: "Shadowflame",
      desc: "Umbral skill. Attempt to inflict blind on one target. If the enemy is hit by fire damage, follow up with ranged fire damage that reduces their accuracy for 3 turns.",
      stats: ["STR", "LUC", "Arms", "Sword/Knife"],
      dep: { abyssalCurse: 3  },
      maxLevel: 8,
      coords: { x: 1, y: 1.25 }
    },
    shockgrasp: {
      name_en: "Shockgrasp", 
      desc: "Umbral skill. Attempt to inflict paralysis on one target. If the enemy is hit by volt damage, follow up with ranged volt damage and apply Shadow Cloak on the user.",
      stats: ["STR", "LUC", "Arms", "Sword/Knife"],
      dep: { shadowflame: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 1.25 }
    },
    noxiousTorpor: {
      name_en: "Noxious Torpor",
      desc: "Umbral skill. Deals ranged cut damage to one target. Attempts to inflict sleep. If at the end of the turn the enemy is still asleep, recover Force.",
      stats: ["STR", "LUC", "Arms", "Sword/Knife"],
      dep: { shockgrasp: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1.25 }
    },
    creepingDarkness: {
      name_en: "Creeping Darkness",
      desc: "Any enemies hit with Abyssal Curse or Umbral follow-ups are hit again with a ranged cut attack at the end of the turn.",
      stats: ["STR"],
      dep: { noxiousTorpor: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 0.75 }
    },
    effluviumBurst: {
      name_en: "Effluvium Burst",
      desc: "When an enemy is killed with a Umbral skill, the user will attack another enemy with a ranged bash attack.",
      stats: ["STR"],
      dep: { noxiousTorpor: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 1.75 }
    },
    coldbloodedVenom: {
      name_en: "Coldblood Venom",
      desc: "Umbral skill. Attempt to inflict poison on one target. If the enemy is hit by ice damage, follow up with ranged ice damage that increases poison duration by one.",
      stats: ["STR", "LUC", "Arms", "Sword/Knife"],
      dep: { creepingDarkness: 3, effluviumBurst: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 1.25 }
    },
    maskedPain: {
      name_en: "Masked Pain",
      desc: "Umbral skill. Removes ailments and binds from one ally. Level up to increase number of binds and type of ailments removed.",
      stats: ["Head"],
      dep: { abyssalCurse: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 2.75 }
    },
    eventide: {
      name_en: "Eventide",
      desc: "Until the end of the next turn, Umbral skills will target all enemies and their infliction rate is improved.",
      stats: ["Head"],
      dep: { maskedPain: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2.75 }
    },
    duskToDawn: {
      name_en: "Dusk to Dawn",
      desc: "Deals melee cut damage to one target and removes an ailment. Damage is increased if the target has an ailment. Casts Eventide after use.",
      stats: ["STR", "Arms", "Sword/Knife"],
      dep: { eventide: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 2.25 }
    },
    daggerFetish: {
      name_en: "Dagger Fetish",
      desc: "Increases damage while wielding daggers.",
      stats: [],
      dep: { eventide: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 3.25 }
    },
    sadisticEcstasy: {
      name_en: "Sadistic Ecstasy",
      desc: "Increases attack every time the user inflicts an ailment. Bonus stacks up to 3 times, and is reset if the user dies.",
      stats: [],
      dep: { duskToDawn: 2, daggerFetish: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 2.75 }
    },
    ebonFrenzy: {
      name_en: "Ebon Frenzy",
      desc: "Deals 3-5 instances of melee cut damage to one target. If the target has an ailment, maximum number of attacks is increased to 9 and increases Dusk to Dawn's damage until the end of the next turn.",
      stats: ["STR", "Arms", "Sword/Knife"],
      dep: { sadisticEcstasy: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 2.75 }
    },
    shadowCloak: {
      name_en: "Shadow Cloak",
      desc: "For 3 turns, negates one physical attack made against the user.",
      stats: ["Head"],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4.75 }
    },
    decoySign: {
      name_en: "Decoy Sign",
      desc: "For a set amount of turns, increases one ally's chance of being targeted and their ailment/bind resistance.",
      stats: ["Head"],
      dep: { shadowCloak: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 4.25 }
    },
    autoCloak: {
      name_en: "Auto-Cloak",
      desc: "If Shadow Cloak is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { decoySign: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 4.25 }
    },
    blackestNight: {
      name_en: "Blackest Night",
      desc: "For a set number of turns, increases accuracy and speed for one row.",
      stats: ["Head"],
      dep: { autoCloak: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 4.25 }
    },
    sneakAttack: {
      name_en: "Sneak Attack",
      desc: "For a set number of steps, increases the chance of preemptive attacks.",
      stats: [],
      dep: { blackestNight: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 4.25 }
    },
    shadowRemnant: {
      name_en: "Shadow Remnant",
      desc: "When Shadow Cloak negates an attack, there is a chance that Shadow Cloak will be automatically cast on the user.",
      stats: [],
      dep: { sneakAttack: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 4.25 }
    },
    bidingSlice: {
      name_en: "Biding Slice",
      desc: "Deals melee cut damage to one target. If the user is not damaged until the end of the turn, deals melee cut damage to the target's row.",
      stats: ["STR", "Arms", "Sword/Knife"],
      dep: { shadowCloak: 1 },
      maxLevel: 8,
      coords: { x: 1, y: 5.25 }
    },
    backstab: {
      name_en: "Backstab",
      desc: "Deals melee cut damage to one target. Attempts to inflict head bind. If the user has Shadow Cloak, increase damage.",
      stats: ["STR", "LUC", "Arms", "Sword/Knife"],
      dep: { bidingSlice: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5.25 }
    },
    twilightFury: {
      name_en: "Twilight Fury",
      desc: "When the user or an adjacent ally is hit with an attack, the user will counter, with increased damage if they were the target. The chance of countering goes down with each successive counter.",
      stats: ["STR", "Arms", "Sword/Knife"],
      dep: { backstab: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 5.25 }
    },
    assassinate: {
      name_en: "Assassinate",
      desc: "Deals melee cut damage to one target. If the user has Shadow Cloak, attempts to inflict instant death.",
      stats: ["STR", "LUC", "Arms", "Sword/Knife"],
      dep: { twilightFury: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 5.25 }
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
      name_en: "Trip Edge",
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
      name_en: "Blood Edge",
      desc: "Starter and Combo skill. Deals melee cut damage to one target. Restores HP to the user based on the amount of damage dealt. Reduces overheat duration by 2 turns. Can only be used if an Starter skill was used on the previous turn.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { galeEdge: 2  },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    impulseEdge: {
      name_en: "Impulse Edge",
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
      desc: "Deals melee cut damage to one target, and increases defense for all allies until it executes. Places the user in the overheat state for 5 turns. Cannot be used while overheated or when current TP is below the original TP cost. The TP cost is reduced based on the amount of TP used before this skill was cast.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3.875 }
    },
    heatSink: {
      name_en: "Heat Sink",
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
      desc: "When an ally dies, restore HP and TP.",
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
      desc: "Combo skill. Deals melee cut damage to one target. Preserves the effect of last turn's Rough Divide. Reduces overheat duration by 1 turn.",
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
    thunderFist: {
      name_en: "Thunder Fist",
      desc: "Deals melee bash+volt damage to one target. If that enemy was killed with Thunder Fist, attempt to inflict paralysis on all enemies, otherwise the user takes damage.",
      stats: [],
      dep: { addedBlow: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1.5 }
    },
    leadingBlow: {
      name_en: "Leading Blow",
      desc: "Deals melee bash damage to one target. For every bind the target has, follows up with the corresponding Pugilist skill. For any ailment the target has, follows up with Corkscrew.",
      stats: ["STR"],
      dep: { thunderFist: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 1.5 }
    },
    howlingFist: {
      name_en: "Howling Fist",
      desc: "Enables Cestus skills to crit. Increase Critical chance against bound enemies.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 4.5 }
    },
    axeKick: {
      name_en: "Axe Kick",
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
    clinch: {
      name_en: "Clinch",
      desc: "Attempts to inflict head bind, arm bind, and leg bind on both the user and the target.",
      stats: ["LUC"],
      dep: { meditation: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 3 }
    },
    doublePunch: {
      name_en: "Double Punch",
      desc: "When any single-action, single-target Pugilist skill is used, Corkscrew is used via Added Blow, or Cross Counter is used, if the skill fails to inflict their bind or ailment, there is a chance it will be repeated.",
      stats: [],
      dep: { axeKick: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 4 }
    },
    breather: {
      name_en: "Breather",
      desc: "Removes binds and ailment from an ally. If successful, increases the user's attack until the end of the next turn.",
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
      desc: "At the beginning of the next turn, deals multiple instances of melee bash damage to random enemies. Can hit the same target 4 times at most.",
      stats: ["STR"],
      dep: { vajraForm: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    breakfireRush: {
      name_en: "Breakfire Rush",
      desc: "Deals multiple instances of melee fire damage to an enemy row. Decreases the users critical rate for 1 turn after use.",
      stats: ["STR"],
      dep: { hundredFists: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
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
  },
  Harbinger: {
    infiniteMiasma: {
      name_en: "Endless Miasma",
      desc: "For 3 turns, Miasma Armor's and enemy debuff's duration will not decrease.",
      
      unique: true,
      type: "Boost",
      stats: [],
      dep: {},
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    miasmaTorrent: {
      name_en: "Miasma Torrent",
      desc: "This turn, greatly reduces all enemies' attack, defense, evasion, action speed, and bind/ailment resistance.",
      unique: true,
      type: "Break",
      stats: [],
      dep: { infiniteMiasma: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    miasmaArmor: {
      name_en: "Miasma Armor", 
      desc: "Puts the user in the Miasma Armor state for 3 turns. Increases action speed when Miasma Armor is active. At the start of battle, has a chance to automatically put the user in the Miasma Armor state.",
      stats: [],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 1.5 }
    },
    endlessShroud: {
      name_en: "Endless Shroud",
      desc: "When the user uses a debuff skill, there's a chance to cast Miasma Armor automatically.",
      stats: [],
      dep: { miasmaArmor: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    spiritAbsorb: {
      name_en: "Spirit Absorb",
      desc: "When the user uses a debuff skill, restores HP to the user. This restoration can heal beyond maximum HP. Overhealed HP will disappear at the end of the turn.", 
      stats: [],
      dep: { endlessShroud: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    blackShroud: {
      name_en: "Black Shroud",
      desc: "During Miasma Armor, increases defense. \nSkills which remove Miasma Armor will instead reduce its duration by a set number of turns. If Miasma Armor's duration reaches 0 or less, it is removed.",   
      stats: [],
      dep: { miasmaArmor: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    atonement: {
      name_en: "Atonement",
      desc: "Requires Miasma Armor. Removes Miasma Armor to restore HP to all party members and attempt to remove their ailments.",
      stats: ["WIS", "Head"],
      dep: { blackShroud: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    soulTransfer: {
      name_en: "Soul Transfer",
      desc: "Requires Miasma Armor. Removes Miasma Armor to attempt to revive all party members.",
      stats: ["WIS", "Head"],
      dep: { atonement: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 0.5 }
    },
    deathsAsylum: {
      name_en: "Death's Asylum",
      desc: "Provides a chance to nullify debuffs and ailments on the user as they are inflicted.",
      stats: [],
      dep: { atonement: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 1.5 }
    },
    spectralSeep: {
      name_en: "Spectral Seep",  
      desc: "Gives a chance to nullify physical attacks on party members in the opposite row as the user.", 
      stats: [],
      dep: { soulTransfer: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 0.5 }
    },
    soulFixation: {
      name_en: "Soul Fixation",
      desc: "Requires Miasma Armor. Removes Miasma Armor to attempt to nullify instant death, stun and debuffs against all party members, up to a set number of times.",  
      stats: ["Head"],
      dep: { deathsAsylum: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    judgment: {
      name_en: "Judgment",  
      desc: "If Miasma Armor is active, the user has a chance to extend the de/buffs of an enemy by 1 turn every time they are attacked.",  
      stats: [],
      dep: { spectralSeep: 3, soulFixation: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 1 }
    },
    erodingReap: {
      name_en: "Eroding Reap", 
      desc: "Deals melee cut damage to one row and decreases their defense for a set number of turns.",
      stats: ["STR", "Arms", "Scythe"],
      dep: {},
      maxLevel: 10,
      coords: { x: 0, y: 2.75 }
    },
    stiflingReap: {
      name_en: "Stifling Reap", 
      desc: "Deals melee cut damage to one row and decreases their attack for a set number of turns.", 
      stats: ["STR", "Arms", "Scythe"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 3.75 }
    },
    slowingReap: {
      name_en: "Sluggish Reap",
      desc: "Deals melee cut damage to one row and decreases their evasion and action speed for a set number of turns.",
      stats: ["STR", "Arms", "Scythe"],
      dep: { erodingReap: 2, stiflingReap: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 3.25 }
    },
    maskingReap: {
      name_en: "Masking Reap",
      desc: "Deals melee cut damage to one row and decreases their accuracy for a set number of turns.",
      stats: ["STR", "Arms", "Scythe"],
      dep: { slowingReap: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 3.25 }
    },
    ephemeralReap: {
      name_en: "Ephemeral Reap",
      desc: "Deals multiple instances of melee cut damage to one target. Number of hits increases based on the number of debuffs on the target.",   
      stats: ["STR", "Arms", "Scythe"],
      dep: { maskingReap: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 2.75 }
    },
    reversalDecay: {
      name_en: "Reversal Decay",
      desc: "Dispel an enemy's debuffs, and deal cut damage to all enemies. \nAttempts to inflict instant death. If the target is asleep, the damage and instant death chance doubles.",
      
      
      stats: ["STR", "LUC", "Arms", "Scythe"],
      dep: { ephemeralReap: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3.75 }
    },
    harrowingScythe: {
      name_en: "Harrowing Scythe",
      desc: "Requires Miasma Armor. Removes Miasma Armor to deal melee cut damage to one enemy.  \nExtend the duration of buffs and debuffs that target has.",  
      
      stats: ["STR", "Arms", "Scythe"],
      dep: { ephemeralReap: 2, reversalDecay: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3.25 }
    },
    paralyzingMiasma: {
      name_en: "Numbing Miasma", 
      desc: "If Miasma Armor is active, attempts to inflict paralysis to a row. Lowers the targets' Paralysis resistance and ailment recovery for 3 turns.",
      stats: ["LUC", "Head", "Scythe"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 5 }
    },
    toxicMiasma: {
      name_en: "Venom Miasma",
      desc: "If Miasma Armor is active, attempts to inflict poison to a row. Lowers the targets' Poison resistance and ailment recovery for 3 turns.", 
      stats: ["LUC", "Head", "Scythe"],
      dep: { paralyzingMiasma: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    darknessMiasma: {
      name_en: "Blinding Miasma",
      desc: "If Miasma Armor is active, attempts to inflict blind to a row. Lowers the targets' Blind resistance and ailment recovery for 3 turns. ",
      stats: ["LUC", "Head", "Scythe"],
      dep: { toxicMiasma: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    chaosMiasma: {
      name_en: "Madness Miasma",
      desc: "If Miasma Armor is active, attempts to inflict panic to a row. Lowers the targets' Panic resistance and ailment recovery for a set amount of turns.",
      stats: ["LUC", "Head", "Scythe"],
      dep: { darknessMiasma: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    frigidReap: {
      name_en: "Frigid Reap",
      desc: "Deals melee cut+ice damage to one row. Hits twice on enemies that have ailments.", 
      stats: ["STR", "Arms", "Scythe"],
      dep: { chaosMiasma: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    soulRend: {
      name_en: "Soul Rend",
      desc: "Only effective on enemies with both an Ailment and Debuff applied. Removes one debuff and deals ranged cut damage to target enemy.",
      stats: ["STR", "Arms", "Scythe"],
      dep: { frigidReap: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    take: {
      name_en: "Take",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: {},
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Buccaneer: {
    shiftyMethods: {
      name_en: "Shifty Methods",
      desc: "Allows the use of any skill regardless of weapon. Chase skills will follow any attack.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: {},
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    noQuarter: {
      name_en: "No Quarter",
      desc: "Powerful ranged stab attack to 1 enemy. Allies will deal extra damage to this enemy.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { shiftyMethods: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    lightsOut: {
      name_en: "Lights Out",
      desc: "Melee stab attack to 1 enemy. May blind the enemy. Uses user's AGL for damage.",
      stats: [],
      dep: {},
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    paralyzingShot: {
      name_en: "Paralyzing Shot",
      desc: "Ranged stab attack to 1 enemy. May paralyze the enemy. Targets enemy's AGL for damage.",
      stats: [],
      dep: {},
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    chaseFiresaber: {
      name_en: "Chase Fire-saber",
      desc: "For one turn, follow-up allies cut/fire attacks with fire imbued weapon. Follow-up rate decreases with each attack.",
      stats: [],
      dep: {},
      maxLevel: 10,
      coords: { x: 1, y: 3 }
    },
    chaseIcethrust: {
      name_en: "Chase Ice-thrust",
      desc: "For one turn, follow-up allies stab/ice attacks with ice imbued weapon. Follow-up rate decreases with each attack.",
      stats: [],
      dep: {},
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    chaseVoltblow: {
      name_en: "Chase Volt-blow",
      desc: "For one turn, follow-up allies bash/volt attacks with volt imbued weapon. Follow-up rate decreases with each attack.",
      stats: [],
      dep: {},
      maxLevel: 10,
      coords: { x: 1, y: 5 }
    },
    vulcanStance: {
      name_en: "Vulcan Stance",
      desc: "Normal attacks do more damage and hit all enemies for 3 turns.",
      stats: [],
      dep: {},
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    trickster: {
      name_en: "Trickster",
      desc: "When using attacking skills, recover fixed TP.",
      stats: [],
      dep: {},
      maxLevel: 4,
      coords: { x: 0, y: 1 }
    },
    eagleEye: {
      name_en: "Eagle Eye",
      desc: "Lowers physical/elemental DEF of one enemy for 3 turns.",
      stats: [],
      dep: {},
      maxLevel: 4,
      coords: { x: 0, y: 2 }
    },
    troublemaker: {
      name_en: "Troublemaker",
      desc: "For a set number of steps, raises encounter rate and EXP gained.",
      stats: [],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    speedUp: {
      name_en: "Speed Up",
      desc: "Increaes hit rate, evasion, and act speed.",
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 2, y: 0 }
    },
    hanging: {
      name_en: "Hanging",
      desc: "Melee stab attack to 1 enemy. May bind the enemy's head. Lower's enemy's AGL for 1 turn.",
      stats: ["STR"],
      dep: { lightsOut: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    quickDraw: {
      name_en: "Quick Draw",
      desc: "2-4 ranged random pierce damage to all enemies. Increases User's AGL for 1 turn.",
      stats: ["STR"],
      dep: { paralyzingShot: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    burstChase: {
      name_en: "Burst Chase",
      desc: "When an enemy is defeated by a Chase skill, performs another attack. Level up to raise maximum number of activations per turn.",
      stats: [],
      dep: { chaseFiresaber: 3, chaseIcethrust: 3, chaseVoltblow: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    enhancedChase: {
      name_en: "Enhanced Chase",
      desc: "Next turn, Chase skills will do increased damage and the maximum chases increases.",
      stats: [],
      dep: { burstChase: 3 },
      maxLevel: 4,
      coords: { x: 3, y: 4 }
    },
    ladyLuck: {
      name_en: "Lady Luck",
      desc: "Increases Critical chance and damage. Enables skills to crit.",
      stats: [],
      dep: { vulcanStance: 2 },
      maxLevel: 4,
      coords: { x: 2, y: 6 }
    },
    swashbuckling: {
      name_en: "Swashbuckling",
      desc: "Normal attacks may strike up to 4 times.",
      stats: [],
      dep: { ladyLuck: 1 },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    limitBreak: {
      name_en: "Limit Break",
      desc: "Allows force gauge to go beyond 100 during battle.",
      stats: [],
      dep: {},
      maxLevel: 6,
      coords: { x: 3, y: 0 }
    },
    thrustingFlurry: {
      name_en: "Thrusting Flurry",
      desc: "Melee stab attacks to a row of enemies. May bind enemy's legs. Uses user's AGL for damage.",
      stats: ["STR"],
      dep: { hanging: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    bulletstorm: {
      name_en: "Bulletstorm",
      desc: "Ranged stab attacks to all enemies. May petrify the enemy. Targets enemy's AGL for damage.",
      stats: ["STR"],
      dep: { quickDraw: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    pincushion: {
      name_en: "Pincushion",
      desc: "2-4 ranged stab attacks to 1 enemy. Uses user's and enemy's AGL for damage.",
      stats: ["STR"],
      dep: { thrustingFlurry: 3, bulletstorm: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 1 }
    },
    dirtyFighting: {
      name_en: "Dirty Fighting",
      desc: "Skills may activate twice when equipping a gun or rapier. Chance doubles if equipping both.",
      stats: [],
      dep: { thrustingFlurry: 3, bulletstorm: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 2 }
    },
    doubleChase: {
      name_en: "Double Chase",
      desc: "May perform an extra follow-up attack when using a Chase skill.",
      stats: [],
      dep: { enhancedChase: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    },
    resonance: {
      name_en: "Resonance",
      desc: "Melee stab to 1 enemy. Damage increases based on number of attacks last turn.",
      stats: ["STR"],
      dep: { swashbuckling: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    },
    take: {
      name_en: "Take",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: {},
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Alchemist: {
    analysis: {
      name_en: "Analysis",
      desc: "Raises damage when striking an enemies weakness.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: {},
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    eschaton: {
      name_en: "Eschaton",
      desc: "Powerful ranged almighty attack to all enemies.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { analysis: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    firePalm: {
      name_en: "Fire Palm",
      desc: "Front Line: Melee fire attack. Keep element next turn. Damage also increase for next attack.",
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    icePalm: {
      name_en: "Ice Palm",
      desc: "Front Line: Melee ice attack. Keep element next turn. Damage also increase for next attack.",
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    voltPalm: {
      name_en: "Volt Palm",
      desc: "Front Line: Melee volt attack. Keep element next turn. Damage also increase for next attack.",
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    additionalPalm: {
      name_en: "Additional Palm",
      desc: "Attack target with the same element as the palm skill used at the end of the turn.",
      stats: [],
      dep: { firePalm: 3, icePalm: 3, voltPalm: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    elementResonance: {
      name_en: "Element Resonance",
      desc: "Raise attack if an ally has used the same element.",
      stats: [],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 1 }
    },
    corrosiveFormula: {
      name_en: "Corrosive Formula",
      desc: "Lowers the resistance of the current element on cast.",
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    venomFormula: {
      name_en: "Venom Formula",
      desc: "Ranged bash attack. May poison the enemy. Chance and poison damage increase by the amount of times the user has struck a weakness.",
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 1, y: 4.5 }
    },
    manaShield: {
      name_en: "Mana Shield",
      desc: "Raises maximum TP. Reduces damage from all attacks proportional to current TP.",
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    dilution: {
      name_en: "Dilution",
      desc: "Lowers elemental and almighty DEF for all enemies for [F8 5A][02 04] turns.",
      stats: [],
      dep: { corrosiveFormula: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    blastFormula: {
      name_en: "Blast Formula",
      desc: "Ranged almighty attack to 1 enemy, with increased splash damage. Splash damage will do double the source damage. User recovers TP as damage.",
      stats: ["INT"],
      dep: { dilution: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    splashPalm: {
      name_en: "Splash Palm",
      desc: "Chance of splash damage when a Palm skill hits enemy's weakness.",
      stats: [],
      dep: { additionalPalm: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    gauntletMemory: {
      name_en: "Gauntlet Memory",
      desc: "Increases damage of palm skills. On higher levels increases how long palm charges last.",
      stats: [],
      dep: { splashPalm: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 3 }
    },
    lacerateFormula: {
      name_en: "Lacerate Formula",
      desc: "Ranged cut to all enemies. May arm bind.",
      stats: ["INT"],
      dep: { venomFormula: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    goringFormula: {
      name_en: "Goring Formula",
      desc: "Ranged stab to all enemies. May blind.",
      stats: ["INT"],
      dep: { venomFormula: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    focus: {
      name_en: "Focus",
      desc: "Recover TP at the turn's end if the user's HP is at maximum.",
      stats: [],
      dep: { manaShield: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    analyticalStrike: {
      name_en: "Analytical Strike",
      desc: "If striking weakness increase infliction rate.",
      stats: [],
      dep: { lacerateFormula: 3, goringFormula: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    compression: {
      name_en: "Compression",
      desc: "For 3 turns, all target attacks are stronger but become single target.",
      stats: [],
      dep: { lacerateFormula: 3, goringFormula: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    riotFormula: {
      name_en: "Riot Formula",
      desc: "5 ranged fire/ice/volt attacks to all enemies randomly. The more TP used in battle, the less the TP cost of this skill is.",
      stats: ["INT"],
      dep: { blastFormula: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 0.5 }
    },
    recoilFormula: {
      name_en: "Recoil Formula",
      desc: "Melee bash attack. If used fire/ice/volt attack last turn, attacks with element again.",
      stats: ["INT"],
      dep: { blastFormula: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    lightFormula: {
      name_en: "Light Formula",
      desc: "Lowers cut/stab/bash damage to user for the turn. Counters with ranged fire attack.",
      stats: ["INT"],
      dep: { gauntletMemory: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 2.5 }
    },
    lightTincture: {
      name_en: "Light Tincture",
      desc: "Lowers fire/ice/volt damage to user for the turn. Counters with ranged fire attack.",
      stats: ["INT"],
      dep: { gauntletMemory: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3.5 }
    },
    nuclearFormula: {
      name_en: "Nuclear Formula",
      desc: "Ranged almighty to enemy. If enemy is bound/ailing, do cut/stab/bash attack to all enemies.",
      stats: ["INT"],
      dep: { analyticalStrike: 3, compression: 3, focus: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    forceAbsorber: {
      name_en: "Force Absorber",
      desc: "When striking enemies weakness, recover force.",
      stats: [],
      dep: { riotFormula: 3, recoilFormula: 3 },
      maxLevel: 4,
      coords: { x: 5, y: 1 }
    },
    take: {
      name_en: "Take",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: {},
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  }

};
