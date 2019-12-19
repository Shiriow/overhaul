let forward = {
  Hero: {
    braveheart: { miracleEdge: 0 },
    miracleEdge: { },
    afterimage: { mirageSword: 1 },
    mirageSword: { shadowCharge: 2 },
    braveWide: { freezingSlash: 1 },
    freezingSlash: { shockSpark: 2 },
    encouragement: { herosBonds: 1 },
    herosBonds: { herosProof: 2 },
    shieldArts: { shieldMateria: 2 },
    clearMind: { fervor: 1 },
    chop: { },
    shadowCharge: { shadowBenefit: 2 },
    shadowBenefit: { thickShadow: 3 },
    shockSpark: { burstBlade: 2 },
    burstBlade: { actBreaker: 2 },
    herosProof: { greatCourage: 1 },
    greatCourage: { },
    shieldMateria: { guardRush: 3 },
    fervor: { },
    newChallenger: { },
    thickShadow: { },
    actBreaker: { regimentRave: 3 },
    regimentRave: { },
    forceGifter: { forceSaver: 3 },
    forceSaver: { },
    guardRush: { }
  },
  Protector: {
    shieldProtect: { perfectDefense: 0 },
    perfectDefense: { },
    lineGuard: { keepGuard: 2 },
    keepGuard: { recoveryGuard: 1 },
    cellDivide: { fortify: 2 },
    fortify: { aegis: 1 },
    shieldSmite: { shieldRush: 3 },
    provoke: { preProvoke: 2 },
    preProvoke: { },
    healingWall: { fireWall: 3 },
    chop: { },
    recoveryGuard: { backGuard: 2 },
    aegis: { lineDivide: 3 },
    shieldRush: { shieldBreak: 3 },
    backGuard: { healGuard: 2 },
    shieldSiphon: { shieldFlare: 3 },
    shieldBreak: { shieldSiphon: 3 },
    fireWall: { voltWall: 3 },
    voltWall: { hpUp: 3 },
    hpUp: { iceWall: 3 },
    iceWall: { },
    healGuard: { fullGuard: 2 },
    lineDivide: { autoguard: 3 },
    autoguard: { },
    shieldFlare: { },
    fullGuard: { }
  },
  Medic: {
    steadyHands: { medicalMiracle: 0 },
    medicalMiracle: { },
    healing: { lineHeal: 3 },
    lineHeal: { delayedHeal: 2 },
    patchUp: { },
    refresh: { unbind: 2 },
    antibodies: { },
    revive: { finalGift: 3 },
    scavenge: { },
    headDrop: { starDrop: 3 },
    take: { },
    delayedHeal: { chaseHeal: 3 },
    unbind: { groupTherapy: 1 },
    groupTherapy: { },
    finalGift: { autoRevive: 2 },
    autoRevive: { },
    starDrop: { medicalRod: 2 },
    medicalRod: { heavyStrike: 3 },
    patrol: { },
    elemDefUp: { },
    partyHeal: { },
    chaseHeal: { },
    overheal: { },
    healDejaVu: { },
    heavyStrike: { staffMastery: 1 },
    staffMastery: { }
  },
  Survivalist: {
  illusionStep: { mirageArrow: 0 },
  mirageArrow: { },
  powerShot: { chainDance: 1, sortingSkill: 1 },
  patrol: { chainDance: 1, sortingSkill: 1  },
  blindArrow: { chainDance: 1, sortingSkill: 1  },
  flameArrow: { flankShot: 3, multiShot: 3 },
  chainDance: { trickStep: 2 },
  riskPerception: { stalker: 1 },
  resuscitate: { efficiency: 3 },
  sortingSkill: { trickStep: 2 },
  naturalInstinct: { },
  flankShot: { finishingArrow: 3 },
  finishingArrow: { disablingShot: 1 },
  multiShot: { dropShot: 3 },
  dropShot: { sagittariusShot: 3 },
  trickStep: { speedUp: 2 },
  stalker: { sneakAttack: 1 },
  efficiency: { swapStep: 2 },
  speedUp: { naturesBounty: 3 },
  swapStep: { },
  disablingShot: { },
  sagittariusShot: { hazyShot:1 },
  hazyShot: { },
  naturesBounty: { hazyShot:3 },
  scapegoat: { },
  sneakAttack: { }
},
  Survivalistv2: {
    illusionStep: { mirageArrow: 0 },
    mirageArrow: { },
    flameArrow: { flankShot: 3, multiShot: 3 },
    flankShot: { finishingArrow: 3 },
    finishingArrow: { disablingShot: 1 },
    multiShot: { dropShot: 3 },
    dropShot: { sagittariusShot: 3 },
    disablingShot: { },
    sagittariusShot: { hazyShot:1 },
    paralysisArrow: { chainThrust: 1, mistStep: 1  },
    blindArrow: { chainThrust: 1, mistStep: 1  },
    sleepArrow: { chainThrust: 1, mistStep: 1 },
    chainThrust: { fanDance: 2 },
    mistStep: { fanDance: 2 },
    fanDance: { sylphid: 2, rayOfLight: 2 },
    sylphid: { eyeForAnEye: 3 },
    rayOfLight: { eyeForAnEye: 3 },
    eyeForAnEye: { hazyShot:3 },
    hazyShot: { },
    riskPerception: { stalker: 1 },
    resuscitate: { efficiency: 3 },
    stalker: { scapegoat: 2 },
    efficiency: { scapegoat: 2 },
    scapegoat: { swapStep: 2 },
    swapStep: { },
    naturalInstinct: { }
  },
  Ronin: {
    peerless: { issen: 0 },
    issen: { },
    upperStance: { airBlade: 1, chargingThrust: 1 },
    airBlade: { helmSplitter: 1 },
    chargingThrust: { helmSplitter: 1 },
    clearStance: { armStrike: 1, sheathStrike: 1 },
    armStrike: { hazeSlash: 1 },
    sheathStrike: { hazeSlash: 1 },
    drawingStance: { upwardSlash: 1, breath: 1 },
    upwardSlash: { horizontalSlice: 1 },
    breath: { horizontalSlice: 1 },
    mine: { },
    helmSplitter: { flameGrater: 3 },
    flameGrater: { swallowStrike: 3 },
    hazeSlash: { lightningStab: 3 },
    lightningStab: { bluntingStab: 3 },
    horizontalSlice: { frigidSlash: 3 },
    frigidSlash: { petalScatter: 3 },
    duel: { },
    physAtkUp: { },
    swallowStrike: { proofOfMastery: 2 },
    bluntingStab: { proofOfMastery: 2 },
    petalScatter: { proofOfMastery: 2 },
    proofOfMastery: { },
    risingSpirit: { },
    speedUp: { }
},
  Roninv2: {
    peerless: { issen: 0 },
    issen: { },
    upperStance: { airBlade: 1, delayedStrike: 1, bloodyBlade: 1 },
    airBlade: { moonShadow: 2, flameGrater: 2 },
    delayedStrike: { moonShadow: 2, flameGrater: 2 },
    bloodyBlade: { moonShadow: 2, flameGrater: 2  },
    moonShadow: { helmSplitter: 3 },
    helmSplitter: { swallowStrike: 3  },
    flameGrater: { horizontalSlice: 3 },
    horizontalSlice: { petalScatter: 3 },
    swallowStrike: { risingSpirit: 1 },
    petalScatter: { risingSpirit: 1 },
    clearStance: { armStrike: 1, drainSlice: 1, armorPierce: 1 },
    armStrike: { lightningStab: 2, mirrorMoon: 2 },
    armorPierce: { lightningStab: 2, mirrorMoon: 2  },
    drainSlice: { lightningStab: 2, mirrorMoon: 2 },
    mirrorMoon: { hazeSlash: 3 },
    lightningStab: { frigidSlash: 3 },
    frigidSlash: { earthBreaker: 3 },
    hazeSlash: { bluntingStab: 3 },
    bluntingStab: { risingSpirit: 1 },
    earthBreaker: { risingSpirit: 1 },
    duel: { },
    risingSpirit: { },
    speedUp: { },
    mine: { }
},
  "War Magus": {
    warEdgePower: { fairyRobe: 0 },
    fairyRobe: { },
    warEdgeMastery: { },
    warHealLine: { warRevive: 3 },
    warRevive: { artery: 2, warResponse: 2 },
    artery: { pandemonium: 2 },
    warResponse: { pandemonium: 2 },
    pandemonium: { barrier: 3 },
    barrier: { },
    drippingSlash: { strengthSlash: 1, guardSlash: 1 },
    strengthSlash: { headcut: 2 },
    guardSlash: { armcut: 2 },
    headcut: { legcut: 2 },
    armcut: { legcut: 2 },
    legcut: { ailingSlash: 3, scorpion: 3 },
    ailingSlash: { blindLaughter: 2 },
    scorpion: { looseThread:2 },
    blindLaughter: { },
    looseThread: { },
    leeches: { rouse: 2 },
    rouse: { bindCut: 2 },
    bindCut: { spiritDrain: 2 },
    spiritDrain: { curseCut: 3 },
    curseCut: { },
    displace: { },
    take: { }
  },
  Highlander: {
    heroBattle: { gaeBolg: 0 },
    gaeBolg: { },
    longThrust: { spearAssist: 2 },
    spearAssist: { headPierce: 3 },
    turningTide: { drainingThrust: 2, legionThrust: 2 },
    drainingThrust: { drainingBurst: 2 },
    legionThrust: { legionBurst: 2 },
    spiritShield: { bloodFortune: 1 },
    bloodVeil: { bloodlust: 2 },
    mine: { },
    hpUp: { },
    headPierce: { blackSabbath: 3 },
    drainingBurst: { },
    delayedCharge: { crossCharge: 2 },
    legionBurst: { legionCharge: 3 },
    bloodFortune: { bloodyOffense: 2 },
    battleInstincts: { },
    bloodyOffense: { battleInstincts: 2 },
    bloodlust: { spearReversal: 3 },
    physDefUp: { },
    spearReversal: { },
    crossCharge: { },
    legionCharge: { alliedBonds: 2 },
    alliedBonds: { },
    blackSabbath: { },
    physAtkUp: { }
  },
  Gunner: {
    actionBoost: { supremeBolt: 0 },
    supremeBolt: { },
    rapidFire: { spreadShot: 3 },
    spreadShot: { leadingShot: 2 },
    legSnipe: { armSnipe: 2 },
    armSnipe: { headSnipe: 2 },
    coverFire: { shellShock: 2 },
    shellShock: { preemptiveShell: 1 },
    medicBullet: { },
    popFlares: { autoFlare: 2 },
    mine: { },
    leadingShot: { wildShot: 2 },
    wildShot: { ricochet: 2 },
    headSnipe: { chargedShot: 2 },
    actQuick: { chargedFire: 3, chargedIce: 3, chargedVolt: 3 },
    chargedShot: { },
    preemptiveShell: { },
    autoFlare: { },
    penetrator: { },
    tpUp: { },
    ricochet: { },
    chargedFire: { },
    chargedIce: { },
    chargedVolt: { },
    physAtkUp: { },
    doubleAction: { }
  },
  Sovereign: {
    victoryVow: { proofOfNobility: 0 },
    proofOfNobility: { },
    attackOrder: { fireArms: 2, freezeArms: 2, shockArms: 2 },
    fireArms: { elementalBombI: 1 },
    freezeArms: { elementalBombI: 1 },
    shockArms: { elementalBombI: 1 },
    guardOrder: { reinforce: 2 },
    reinforce: { rallyOrder: 2, protectOrder: 2 },
    royalVeil: { monarchMarch: 2 },
    monarchMarch: { },
    take: { },
    negotiation: { },
    majesty: { },
    royalLineage: { },
    elementalBombI: { elementalBombII: 3 },
    rallyOrder: { preventOrder: 2 },
    protectOrder: { preventOrder: 2 },
    preventOrder: { dauntlessOrder: 1 },
    pairOrder: { lastOrder: 2 },
    healOrder: { lastOrder: 2 },
    statusDefUp: { },
    elementalBombII: { },
    clearance: { },
    dauntlessOrder: { },
    lastOrder: { reorder: 3 },
    reorder: { }
  },

  Ninja: {
    insolence: { ninpoPoisonMist: 0 },
    ninpoPoisonMist: { },
    ninpoDaggers: { ninpoCaltrops: 3 },
    ninpoCaltrops: { foxDrop: 2 },
    shadowBind: { boneCrusher: 3 },
    boneCrusher: { hawkStrike: 2 },
    acrobatics: { concealment: 2 },
    concealment: { ninpoSmoke: 3 },
    ninpoMirage: { autoMirage: 2 },
    chop: { },
    ninpoMastery: { },
    ninpoMirror: { ninpoShock: 2 },
    foxDrop: { ninpoMirror: 3 },
    hawkStrike: { schadenfreude: 2 },
    selfDestruct: { },
    ninpoClone: { drawingSlice: 2, beheading:3 },
    beheading: { },
    autoMirage: { },
    statusAtkUp: { },
    ninpoFlight: { smokePowder: 3 },
    ninpoShock: { eyeForAnEye: 2 },
    eyeForAnEye: { },
    schadenfreude: { drawingSlice: 2, eyeForAnEye: 2  },
    drawingSlice: { },
    ninpoSmoke: { ninpoFlight: 3  },
    smokePowder: { }
  },
  Ninjav2: {
    insolence: { ninpoPoisonMist: 0 },
    ninpoPoisonMist: { },
    ninpoScorpio: { ninpoNeedles: 3 },
    ninpoNeedles: { foxDrop: 2 },
    shadowBind: { boneCrusher: 3 },
    boneCrusher: { hawkStrike: 2 },
    ninpoMastery: { },
    ninpoMirror: { ninpoShock: 2 },
    ninpoShock: { foxDrop: 2 },
    foxDrop: { fallingBloom: 3 },
    hawkStrike: { schadenfreude: 2 },
    fallingBloom: { },
    schadenfreude: { foxDrop: 2  },
    selfDestruct: { },
    ninpoClone: { drawingSlice: 4 },
    autoClone: { },
    acrobatics: { concealment: 2 },
    concealment: { ninpoFlight: 3 },
    ninpoMirage: { autoMirage: 2 },
    autoMirage: { },
    windCurtain: { phantomKnives: 2 },
    ninpoFlight: { lure: 3 },
    drawingSlice: { autoClone: 4 },
    phantomKnives: { ninpoFlight: 3 },
    lure: { },
    chop: { }
  },
  Zodiac: {
    astrologersAxis: { astralSign: 0 },
    astralSign: { },
    pulseStar: { binaryFire: 1, binaryIce: 1, binaryVolt: 1 },
    binaryFire: { astralFire: 3 },
    binaryIce: { astralFire: 3 },
    binaryVolt: { astralFire: 3 },
    astralFire: { umbralIce: 2, solsticeVolt: 2 },
    umbralIce: { meteorRain: 1 },
    solsticeVolt: { meteorRain: 1 },
    meteorRain: { distortionNova: 2 },
    distortionNova: { },
    singularity: { cosmicGleam: 3 },
    cosmicGleam: { asteroidBelt: 2 },
    asteroidBelt: { nebulaResurgence: 2 },
    nebulaResurgence: { aspectedVeil: 2 },
    alignment: { },
    aspectedVeil: { prophecy: 1 },
    prophecy: { },
    celestialReturn: { spacialDistortion: 2, aetherLeak: 2 },
    spacialDistortion: { stellarFlow: 2 },
    stellarFlow: { pulsarFeedback: 2 },
    pulsarFeedback: { },
    aetherLeak: { autoLeak: 2 },
    autoLeak: { },
    guidingStar: { },
    mine: { }
  },
  /*Farmer: {
    itemAgain: { finalTrick: 0 },
    finalTrick: { },
    lullaby: { strangeSeeds: 1, sympathyPain: 1 },
    sympathyPain: { rottenEggs: 3 },
    strangeSeeds: { rottenEggs: 3 },
    flee: { playPossum: 1 },
    playPossum: { },
    searchSkill: { strokeOfLuck: 3 },
    slapAwake: { },
    harvestry: { },
    earthsBounty: { },
    rottenEggs: { persistence: 2 },
    persistence: { keenEye: 2, harvestFestival: 2 },
    wasteNot: { },
    strokeOfLuck: { },
    rainOrShin: { safeStroll: 2 },
    safeStroll: { },
    braveHeart: { sharingIsCaring: 2 },
    sharingIsCaring: { songOfLabour: 3 },
    songOfLabour: { },
    keenEye: { dissection: 2 },
    harvestFestival: { dissection: 1 },
    dissection: { },
    survivalSkills: { naturesBounty: 2 },
    naturesBounty: { doubleChop: 2 },
    doubleChop: { }
  },*/
  Shogun: {
    fullCombatForm: { bodyDouble: 0 },
    bodyDouble: { },
    parryingBlade: { spiritFlow: 2 },
    spiritFlow: { twinSparrow: 3, sight: 3 },
    twinSparrow: { fellingBird: 4 },
    sight: { dusk: 4 },
    dusk: { fiveRingSword: 2 },
    fellingBird: { fiveRingSword: 2 },
    fiveRingSword: { },
    blitzCommand: { baitCommand: 3 },
    baitCommand: { counterCommand: 2 },
    counterCommand: { reprisalCommand: 2 },
    reprisalCommand: { warriorMight: 2 },
    warriorMight: { },
    moraleBoost: { },
    ritualSuicide: { reincarnation: 2 },
    reincarnation: { },
    dissection: { mercyKill: 2 },
    bloodyLance: { mercyKill: 2 },
    mercyKill: { },
    foreHonor: { unifiedSpirit: 2, assassinGathering: 2 },
    unifiedSpirit: { greatGeneral: 2 },
    greatGeneral: { },
    assassinGathering: { morningStar: 2 },
    morningStar: { },
    take: { }
  },
  Landsknecht: {
    trinity: { fullCharge: 0 },
    fullCharge: { },
    blazingLink: { improvedLink: 3 },
    freezingLink: { improvedLink: 3 },
    electricLink: { improvedLink: 3 },
    improvedLink: { linkSmash: 1 },
    linkSmash: { linkMastery: 2, fullBreak: 2 },
    linkMastery: { linkEnd: 2 },
    fullBreak: { swiftStab:2 },
    linkEnd: { },
    swiftStab: { },
    powerBreak: { guardBreak: 2 },
    guardBreak: { speedBreak: 2 },
    speedBreak: { },
    sonicRaid: { doubleStrike: 2 },
    doubleStrike: { spiralSlice: 3 },
    spiralSlice: { penetrate: 3 },
    penetrate: { swordTempest: 2 },
    swordTempest: { },
    vanguard: { statusDefUp: 1 },
    statusDefUp: { },
    proficiency: { initiative: 2 },
    initiative: { singleDevote: 2 },
    singleDevote: { physDefUp: 2 },
    physDefUp: { },
    mine: { }
  },
  Nightseeker: {
    killerStance: { disaster: 0 },
    disaster: { },
    sandThrow: { sleepThrow: 2 },
    sleepThrow: { curseThrow: 3 },
    curseThrow: { nerveThrow: 2 },
    nerveThrow: { venomThrow: 2 },
    shadowBite: { swiftEdge: 3 },
    venomThrow: { },
    swiftEdge: { },
    shadowCloak: { bidingSlice: 1, autoCloak: 1 },
    autoCloak: { returnCloak: 2 },
    returnCloak: { },
    bidingSlice: { backstab: 2 },
    backstab: { assassinate: 3 },
    assassinate: { },
    proficiency: { spreadThrow: 5 },
    spreadThrow: { foulMastery: 2 },
    foulMastery: { autoSpread: 5, shadowBite: 5 },
    autoSpread: { followTrace: 3 },
    followTrace: { },
    decoySign: { attackBait: 2 },
    attackBait: { },
    bladeFlurry: { },
    sneakAttack: { },
    speedUp: { },
    chop: { }
  },
  Arcanist: {
    circleProtection: { releasalSpell: 0 },
    releasalSpell: { },
    circleBoon: { dismissHeal: 1 },
    dismissHeal: { dismissRevive: 2 },
    chainCircle: { snareCircle: 2 },
    snareCircle: { hoodCircle: 2 },
    nerveCircle: { curseCircle: 2 },
    curseCircle: { sleepCircle: 2 },
    bracingWalk: { },
    proficiency: { },
    chop: { },
    dismissRevive: { dismissBlow: 3 },
    dismissBlow: { dismissBlast: 2 },
    hoodCircle: { },
    sleepCircle: { poisonCircle: 2, chaosCircle: 2 },
    charmEye: { atrophicEye: 2 },
    atrophicEye: { },
    statusAtkUp: { },
    tameGround: { },
    wardingMist: { },
    dismissBlast: { circleMastery: 3 },
    circleMastery: { },
    poisonCircle: { dismissTremor: 3 },
    chaosCircle: { dismissTremor: 3 },
    dismissTremor: { },
    tpReturn: { }
  },
  Imperial: {
    ignition: { conversion: 0 },
    conversion: { },
    sharpEdge: { bloodEdge: 2 },
    naturalEdge: { bloodEdge: 2 },
    bloodEdge: { massiveEdge: 3, tripEdge: 3 },
    rearGuard: { },
    assaultDrive: { heatSink: 3, overheatGuard: 3 },
    heatSink: { intercooler: 1 },
    overheatGuard: { intercooler: 1 },
    avenger: { },
    mine: { },
    massiveEdge: { coolEdge: 2 },
    coolEdge: { chargeEdge: 2 },
    tripEdge: { impulseEdge: 2 },
    impulseEdge: { forceEdge: 2 },
    intercooler: { flameDrive: 3, freezeDrive: 3, shockDrive: 3 },
    flameDrive: { accelDrive: 1 },
    freezeDrive: { accelDrive: 1 },
    shockDrive: { accelDrive: 1 },
    statusDefUp: { },
    chargeEdge: { },
    forceEdge: { },
    hpUp: { },
    accelDrive: { },
    absorber: { },
    elemAtkUp: { }
  },
  Pugilist: {
    sealRush: { finalBlow: 0 },
    finalBlow: { },
    concussion: { oneTwoPunch: 2 },
    armBreaker: { oneTwoPunch: 2 },
    lowBlow: { oneTwoPunch: 2 },
    oneTwoPunch: { addedBlow: 2 },
    corkscrew: { addedBlow: 2 },
    adrenaline: { },
    doublePunch: { },
    chop: { },
    hpUp: { },
    devilsFist: { fightingSpirit: 3 },
    fightingSpirit: { thunderFist: 2 },
    addedBlow: { leadingBlow: 2 },
    leadingBlow: { lashOut: 3 },
    breather: { clinch: 1 },
    faultBlocker: { clinch: 1 },
    clinch: { meditation: 3 },
    statusAtkUp: { },
    crossCounter: { },
    thunderFist: { millionLash:3 },
    lashOut: { resonanceBlow: 3 },
    meditation: { ragingWaves: 2 },
    ragingWaves: { },
    millionLash: { },
    resonanceBlow: { }
  },
  Harbinger: {
    infiniteMiasma: { miasmaTorrent: 0 },
    miasmaTorrent: { },
    erodingMiasma: { slowingMiasma: 2 },
    stiflingMiasma: { slowingMiasma: 2 },
    slowingMiasma: { wiltingMiasma: 3, arrestingMiasma: 3 },
    paralyzingReap: { toxicReap: 3 },
    toxicReap: { darknessReap: 2 },
    miasmaArmor: { endlessShroud: 2, atonement: 2 },
    endlessShroud: { spiritAbsorb: 1 },
    atonement: { soulTransfer: 3 },
    take: { },
    wiltingMiasma: { ephemeralReap: 1 },
    arrestingMiasma: { ephemeralReap: 1 },
    darknessReap: { chaosReap: 3 },
    chaosReap: { fatalReap: 2, soulFixation: 2  },
    blackShroud: { blackWave: 2 },
    soulTransfer: { miasmaWall: 1 },
    blackWave: { deathsAsylum: 1 },
    spiritAbsorb: { },
    statusAtkUp: { },
    deathsAsylum: { },
    ephemeralReap: { },
    fatalReap: { },
    miasmaWall: { residualMiasma: 2 },
    soulFixation: { },
    residualMiasma: { }
  },
  Vampire: {
    immortalFlesh: { deathMarch: 0 },
    deathMarch: { },
    bloodPact: { bareFangs: 3 },
    bareFangs: { crimsonShower: 3 },
    crimsonShower: { unscathedBody: 3 },
    unscathedBody: { bloodyCatastrophe: 3  },
    drainBite: { iceVein: 3 },
    iceVein: { lifeSiphon: 3 },
    lifeSiphon: { metamorphosis: 3 },
    metamorphosis: { bloodyCatastrophe: 3 },
    vampiricSpirit: { sanguineTide: 3 },
    sanguineTide: { umbralVeil: 3 },
    umbralVeil: { feast: 3 },
    feast: { vampiricGrace: 3 },
    vitalityDrain: { vigorDrain: 3 },
    vigorDrain: { vampiricGrace: 3 },
    transfusion: { phlebotomy: 3 },
    phlebotomy: { rebirthRitual: 3 },
    rebirthRitual: { riseFromTheDead: 3 },
    riseFromTheDead: { briefImmortality: 3 },
    briefImmortality: { underTheZenith: 3 },
    underTheZenith: { },
    bloodyCatastrophe: { crimsonOath: 3 },
    vampiricGrace: { crimsonOath: 3 },
    crimsonOath: { },
    take: { }
  }
};
meteorRain
