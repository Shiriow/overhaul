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
      desc: "For 3 turns, increases the user's evasion and chance of being targeted.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
   mirageArrow: {
      name_en: "Mirage Arrow",
      desc: "Deals ranged stab damage to one target. Decreases their accuracy and make them act last for 3 turns.",
      stats: ["STR", "Arms"],
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
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1.5 }
    },
    flankShot: {
      name_en: "Flank Shot",
      desc: "Deals ranged stab damage to one row.",
      stats: ["STR", "Arms", "Bow"],
      dep: { flameArrow: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    finishingArrow: {
      name_en: "Finishing Arrow",
      desc: "When the user attacks a target whose HP is below a set threshold, the user follows up with their weapon. Does not activate for links, chases or counterattacks.",
      stats: ["STR"],
      dep: { flankShot: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    multiShot: {
      name_en: "Multi-Shot",
      desc: "Deals 2 instances of ranged stab damage to one enemy.",
      stats: ["STR", "Arms", "Bow"],
      dep: { flameArrow: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    dropShot: {
      name_en: "Drop Shot",
      desc: "Deals ranged stab damage to one target. Damage increases if the target is in the back row.",
      stats: ["STR", "Arms", "Bow"],
      dep: { multiShot: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    disablingShot: {
      name_en: "Disabling Shot",
      desc: "When the user attacks with a bow skill, attempts to inflict leg bind.",
      stats: ["LUC, Bow"],
      dep: { finishingArrow: 1 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    sagittariusShot: {
      name_en: "Sagittarius Shot",
      desc: "In 2 turns, ranged stab damage is dealt to a random target. Attempts to inflict stun. Ineffective if the user dies before the skill activates.",
      stats: ["STR", "LUC", "Arms", "Bow"],
      dep: { dropShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    autoSagittarius: {
      name_en: "Auto-Sagittarius",
      desc: "If Sagittarius Shot is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: ["STR", "Arms", "Bow"],
      dep: { sagittariusShot: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    naturesCloak: {
      name_en: "Nature's Cloak",
      desc: "Increases evasion until the end of the next turn. Damage taken is increased during the turn this skill is used. At the start of battle, automatically puts the user in the Nature's Cloak state.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    chainThrust: {
      name_en: "Chain Thrust",
      desc: "Deals ranged stab damage to one target and, for that turn, increases the user's evasion and chance of being targeted.",
      stats: ["STR", "Arms", "Bow"],
      dep: { naturesCloak: 2  },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    blindArrow: {
      name_en: "Blind Arrow",
      desc: "Deals ranged stab damage to one target. Attempts to inflict blind.",
      stats: ["STR", "LUC", "Arms", "Bow"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    sereneBreeze: {
      name_en: "Serene Breeze",
      desc: "Places a buff on an ally that allows them to dodge the next incoming physical attack. When an attack is dodged, the buff is removed.",
      stats: ["Legs"],
      dep: { blindArrow: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    blurredVeil: {
      name_en: "Blurred Veil",
      desc: "This turn, the selected row has a high chance of evading physical attacks. Each time they evade an attack, the evasion boost is reduced.",
      stats: ["Legs"],
      dep: { sereneBreeze:2 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    mistStep: {
      name_en: "Mist Step",
      desc: "Increases Force whenever the user dodges an attack.",
      stats: [],
      dep: { chainThrust: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    sylphid: {
      name_en: "Sylphid",
      desc: "When an attack is dodged, the user will counter-attack the source of the attack. Has a chance of triggering multiple times.",
      stats: ["STR", "Arms", "Bow"],
      dep: { mistStep: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    rayOfLight: {
      name_en: "Ray of Light",
      desc: "When the user dodges an attack, their chance to be targeted and defense increase. If the they fail to dodge an attack, Ray of Light's effects are reset.",
      stats: [],
      dep: { blurredVeil: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    hazyShot: {
      name_en: "Hazy Shot",
      desc: "Deals ranged stab damage to one target. Always hits. Can only be used if the user evaded an attack on the previous turn.",
      stats: ["STR", "Arms", "Bow"],
      dep: { sylphid: 3, rayOfLight: 3  },
      maxLevel: 8,
      coords: { x: 4, y: 3.5 }
    },
    riskPerception: {
      name_en: "Risk Perception",
      desc: "There is a set chance that blindsides will be negated.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    resuscitate: {
      name_en: "Resuscitate",
      desc: "Restores HP to one ally. Can only be used in the field. Higher levels allow this skill to revive the target as well.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    stalker: {
      name_en: "Stalker",
      desc: "For a set number of steps, reduces encounter rate.",
      stats: [],
      dep: { riskPerception: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    efficiency: {
      name_en: "Efficiency",
      desc: "For 5 turns, increases the HP restored by Medica and upgrades used by the user, and extends their range to one row.",
      stats: ["Head"],
      dep: { resuscitate: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    scapegoat: {
      name_en: "Scapegoat",
      desc: "Selected ally will cover all party members a set number of times this turn. Ineffective if that ally has leg bind.",
      stats: ["Legs"],
      dep: { efficiency: 2, stalker: 2 },
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
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Ronin: {
    peerless: {
      name_en: "Peerless",
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
	    desc: "Increases attack and evasion when Upper Stance is active. At the start of each battle, the user automatically assumes the stance with the highest skill level.",
      stats: ["Katana"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    airBlade: {
      name_en: "Air Blade",
      desc: "Deals ranged cut damage to one target. Assumes Upper Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { upperStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    bloodyBlade: {
      name_en: "Bloody Blade",
      desc: "Deals melee cut damage to one target and increases the users row attack for a set number of turns. Assumes Upper Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { upperStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    delayedStrike: {
      name_en: "Delayed Strike",
      desc: "Deals melee cut damage to one target, and attack again 2 turns later. Assumes Upper Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { upperStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    moonShadow: {
      name_en: "Moon Shadow",
      desc: "Requires Upper Stance. Deals melee cut damage to one target. Assumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { airBlade: 1, delayedStrike: 1, bloodyBlade: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 1.5 }
    },
    helmSplitter: {
      name_en: "Helm Splitter",
      desc: "Requires Upper Stance. Deals melee cut+almighty damage to one target. Low accuracy. Assumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { moonShadow: 1  },
      maxLevel: 8,
      coords: { x: 3, y: 1.5 }
    },
    flameGrater: {
      name_en: "Flame Grater",
      desc: "Requires Upper Stance. Deals melee cut+fire damage to one target and when a party member on the user's row is attacked, counterattack with melee damage. Assumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { airBlade: 1, delayedStrike: 1, bloodyBlade: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 2.5 }
    },
    horizontalSlice: {
      name_en: "Horizontal Slice",
      desc: "Requires Upper Stance. Deals melee cut damage to one row and reduces their Ailment and Bind Resistance for a set number of turns. Assumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { flameGrater: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 2.5 }
    },
    swallowStrike: {
      name_en: "Swallow Strike",
      desc: "Requires Upper Stance. Deals multiple instances of melee cut damage to one target. Assumes Clear Stance after use. Novice and Master skills cannot be used again for 3 turns.",
      stats: ["STR", "Arms", "Katana"],
      dep: { helmSplitter: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    petalScatter: {
      name_en: "Petal Scatter",
      desc: "Requires Upper Stance. Deals ranged cut damage to all targets. Deals less damage based on the number of targets. Assumes Clear Stance after use. Novice and Master skills cannot be used again for 3 turns.",
      stats: ["STR", "Arms", "Katana"],
      dep: { horizontalSlice: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 2.5 }
    },
    clearStance: {
      name_en: "Clear Stance",
  	  desc: "Increases defense and Ronin skills' infliction rate when Clear Stance is active. At the start of each battle, the user automatically assumes the stance with the highest skill level.",
      stats: ["Katana"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 5 }
    },
    armStrike: {
      name_en: "Arm Strike",
      desc: "Deals melee stab damage to one target. Attempts to inflict arm bind. Assumes Clear Stance after use.",
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { clearStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    armorPierce: {
      name_en: "Armor Pierce",
	    desc: "Deals melee stab damage to one target and decreases their Defense for a set number of turns. Assumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { clearStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    drainSlice: {
      name_en: "Drain Slice",
      desc: "Deals melee cut damage to one target and restores HP to the users row based on their Max HP. Assumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { clearStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    mirrorMoon: {
      name_en: "Mirror Moon",
      desc: "Requires Clear Stance. On this turn, when the user is attacked with physical damage, there is a chance they will nullify the damage and counterattack the source. Assumes Upper Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { armStrike: 1, armorPierce: 1, drainSlice: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 4.5 }
    },
    hazeSlash: {
      name_en: "Haze Slash",
      desc: "Requires Clear Stance. Deals melee cut damage to one target. Attempts to inflict sleep. Assumes Upper Stance after use.",
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { mirrorMoon: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 4.5 }
    },
    lightningStab: {
      name_en: "Lightning Stab",
      desc: "Requires Clear Stance. Deals melee stab+volt damage to one target and reduces the targets attack for that turn. Assumes Upper Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { armStrike: 1, armorPierce: 1, drainSlice: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 5.5 }
    },
    frigidSlash: {
      name_en: "Frigid Slash",
      desc: "Requires Clear Stance. Deals ranged cut+ice damage to one target. Increases the user's defense and accuracy until the end of next turn.  Assumes Upper Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { lightningStab: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 5.5 }
    },
    bluntingStab: {
      name_en: "Blunting Stab",
      desc: "Requires Clear Stance. Deals melee stab damage to one target. Attempts to inflict petrify. Assumes Upper Stance after use. Novice and Master skills cannot be used again for 3 turns.",
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { hazeSlash: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 4.5 }
    },
    earthBreaker: {
      name_en: "Earth Breaker",
      desc: "Requires Clear Stance. Deals melee cut attack to one target with splash damage and a chance of stunning. Assumes Upper Stance after use. Novice and Master skills cannot be used again for 3 turns.",
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { frigidSlash: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 5.5 }
    },
    speedUp: {
      name_en: "Serene Heart",
      desc: "Increases accuracy, evasion and action speed.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 0 }
    },
    duel: {
      name_en: "Duel",
      desc: "Increases damage when attacking enemies that the user attacked last turn.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 0 }
    },
    risingSpirit: {
      name_en: "Rising Spirit",
      desc: "At the end of the turn, if a stance is active, restores TP to the user.",
      stats: [],
      dep: { swallowStrike: 1, petalScatter: 1, bluntingStab: 1, earthBreaker: 1 },
      maxLevel: 6,
      coords: { x: 5, y: 3.5 }
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
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    armcut: {
      name_en: "Thorn Cuffs",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict arm bind.",
      stats: ["STR", "LUC", "Arms", "Sword"],
      dep: { guardSlash: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    legcut: {
      name_en: "Thorn Shackles",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict leg bind.",
      stats: ["STR", "LUC", "Arms", "Sword"],
      dep: { headcut: 2, armcut: 2 },
      maxLevel: 6,
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
      desc: "Deals melee cut damage to all enemies. Increases damage dealt and attempts to inflict instant death on enemy with binds.",
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

  Ninja: {
    insolence: {
      name_en: "Insolence",
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
      desc: "Deals 3 instances of ranged stab damage to random targets. Attempts to inflict poison.",
      stats: ["STR", "LUC", "Head"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    ninpoNeedles: {
      name_en: "Ninpo: Needles",
      desc: "This turn, when the selected row is attacked, counterattack with ranged stab damage and attempt to inflict sleep.",
      stats: ["STR", "LUC", "Arms"],
      dep: { ninpoScorpio: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    ninpoMirror: {
      name_en: "Ninpo: Mirror",
      desc: "Attempts to inflict the ailments and binds present on one enemy to all enemies.",
      stats: ["LUC", "Head"],
      dep: { ninpoNeedles: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    ninpoShock: {
      name_en: "Ninpo: Shock",
      desc: "Attempts to inflict panic on one enemy, with line-piercing effects.",
      stats: ["LUC", "Head"],
      dep: { ninpoMirror: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    shadowBind: {
      name_en: "Shadow Bind",
      desc: "Deals melee cut damage to one target. Attempts to inflict leg bind.",
      stats: ["STR", "LUC", "Arms", "Knife"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    hawkStrike: {
      name_en: "Hawk Strike",
      desc: "Deals multiple instances of melee cut damage to random targets.",
      stats: ["STR", "Arms", "Knife"],
      dep: { shadowBind: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    schadenfreude: {
      name_en: "Schadenfreude",
      desc: "Deals melee cut damage to one target. Always hits. If target has an ailment, increases the user's Force.",
      stats: ["STR", "Arms", "Knife"],
      dep: { hawkStrike: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 2 }
    },
    foxDrop: {
      name_en: "Fox Drop",
      desc: "Deals melee cut damage to one target. Attempts to inflict petrify.",
      stats: ["STR", "LUC", "Arms", "Knife"],
      dep: { schadenfreude:2 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    quietus: {
      name_en: "Quietus",
      desc: "Deals melee cut damage to one target with a chance to instantly kill it. Chance is increased if the enemy has an ailment.",
      stats: ["STR", "LUC", "Arms", "Knife"],
      dep: { foxDrop: 2, ninpoShock: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    fallingBloom: {
      name_en: "Falling Bloom",
      desc: "Deals melee cut+almighty damage to one target. Low accuracy.",
      stats: ["STR", "Arms", "Knife"],
      dep: { quietus: 2  },
      maxLevel: 8,
      coords: { x: 5, y: 1.5 }
    },
    ninpoClone: {
      name_en: "Ninpo: Clone",
      desc: "Consumes a percentage of the user's HP and TP to create a clone in an empty slot. Force Boost and Force Break are unusable while a clone is active.",
      stats: ["Head"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    drawingSlice: {
      name_en: "Drawing Slice",
      desc: "Deals multiple instances of melee damage to random targets. All clones will disappear after use.",
      stats: ["STR", "Arms", "Knife"],
      dep: { ninpoClone: 4 },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    autoClone: {
      name_en: "Auto-Clone",
      desc: "If Ninpo: Clone is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { drawingSlice: 4 },
      maxLevel: 10,
      coords: { x: 3, y: 6 }
    },
    ninpoMirage: {
      name_en: "Ninpo: Mirage",
      desc: "Creates a decoy of the user in an empty slot. The decoy has added evasion and chance to be targeted.",
      stats: ["Head"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    phantomKnives: {
      name_en: "Phantom Knives",
      desc: "Deals melee cut damage to one row. For 3 turns, reduces the accuracy of one row of enemies.",
      stats: ["STR", "Arms", "Knife"],
      dep: { ninpoMirage: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    selfDestruct: {
      name_en: "Corpse Explosion",
      desc: "Instantly kill an ally/mirage. Deals ranged fire damage to all enemies.",
      stats: ["STR", "Head", "Knife"],
      dep: { phantomKnives:2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    shadewalker: {
      name_en: "Shadewalker",
      desc: "This turn, every time the selected ally/mirage dodges an attack, members in the same row will individually counter with an attack using their equipped weapon.",
      stats: ["STR", "Head", "Knife"],
      dep: { selfDestruct: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    autoMirage: {
      name_en: "Auto-Mirage",
      desc: "If Ninpo: Mirage is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { ninpoMirage: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    acrobatics: {
      name_en: "Acrobatics",
      desc: "When the user evades an attack, their TP is restored. At level 4, melee attacks will hit for full damage and can always reach the enemy back row, even when the user is in the back.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    ninpoSmoke: {
      name_en: "Ninpo: Smoke",
      desc: "Reduces the user's maximum HP to greatly increase their evasion and aggro for 3 turns.",
      stats: ["Legs"],
      dep: { acrobatics: 2  },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    eyeForAnEye: {
      name_en: "Eye for an Eye",
      desc: "If the user evaded an attack on the previous turn, increases chance of inflicting ailments",
      stats: [],
      dep: { ninpoSmoke: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    reprisal: {
      name_en: "Reprisal",
      desc: "Deals melee cut damage to one target. Damage is increased depending on the number of evades the user has made since they last used this skill.",
      stats: ["STR", "Arms", "Knife"],
      dep: { eyeForAnEye: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    shadowstrike: {
      name_en: "Shadowstrike",
      desc: "When an attack is evaded, the user has a chance to cast Phantom Knives.",
      stats: [],
      dep: { reprisal: 2, shadewalker: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3.5 }
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
      desc: "Increases damage dealt when hitting weaknesses. In addition, the previous skill's element is now added into your attacks.",
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
      name_en: "Mine",
      desc: "Occasionally gains more items when using Mine points.",
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
      desc: "For a set number of turns, imbues one row of allies' weapons with fire and have them counterattack enemies who attacks them.",
      stats: ["STR","Head"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    hailSpirit: {
      name_en: "Hail Spirit",
      desc: "For a set number of turns, imbues one row of allies' weapons with ice and have them counterattack enemies who attacks them.",
      stats: ["STR","Head"],
      dep: { blazeSpirit: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    boltSpirit: {
      name_en: "Bolt Spirit",
      desc: "For a set number of turns, imbues one row of allies' weapons with volt and have them counterattack enemies who attacks them.",
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
      desc: "When a party member is killed, attack all enemies with the users weapon.",
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
      desc: "For a set number of turns, increases Umbral skills' range to all targets, and improves their infliction rate.",
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
    thunderFist: {
      name_en: "Thunder Fist",
      desc: "Deals melee bash+volt damage to one target. If that enemy was killed with Thunder Fist, attempt to inflict paralysis on all enemies, otherwise the user takes damage.",
      stats: [],
      dep: { meditation: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 3 }
    },
    doublePunch: {
      name_en: "Double Punch",
      desc: "When any single-action, single-target Pugilist skill is used, Corkscrew is used via Added Blow, or Cross Counter is used, if the skill fails to inflict their bind or ailment, there is a chance it will be repeated.",
      stats: [],
      dep: { axeKick: 2 },
      maxLevel: 6,
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
    haymaker: {
      name_en: "Haymaker",
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
  },

};
