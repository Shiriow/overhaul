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
    frontGuard: { backGuard: 2 },
    backGuard: { recoveryGuard: 1 },
    cellDivide: { fortify: 2 },
    fortify: { aegis: 1 },
    shieldSmite: { shieldRush: 3 },
    provoke: { preProvoke: 2 },
    preProvoke: { },
    healingWall: { },
    chop: { },
    recoveryGuard: { keepGuard: 2 },
    aegis: { lineDivide: 3 },
    shieldRush: { elemDefUp: 3 },
    keepGuard: { healGuard: 2 },
    physDefUp: { shieldFlare: 3 },
    elemDefUp: { physDefUp: 3 },
    fireWall: { hpUp: 2 },
    iceWall: { hpUp: 2 },
    voltWall: { hpUp: 2 },
    hpUp: { },
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
    delayedHeal: { partyHeal: 3, chaseHeal: 3 },
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
/*
  Ronin: {
    peerless: { issen: 0 },
    issen: { },
    upperStance: { upwardSlash: 1, airBlade:1, drawingStance:1 },
    upwardSlash: { helmSplitter: 1 },
    airBlade: { helmSplitter: 1 },
    drawingStance: { helmSplitter: 1 },
    clearStance: { chargingThrust: 1, armStrike:1, breath:1 },
    chargingThrust: { hazeSlash: 1 },
    breath: { hazeSlash: 1 },
    armStrike: { hazeSlash: 1 },
    mine: { },
    helmSplitter: { horizontalSlice: 3, sheathStrike:3 },
    horizontalSlice: { swallowStrike: 2, petalScatter: 2 },
    sheathStrike: { swallowStrike: 1, petalScatter: 1 },
    hazeSlash: { flameGrater: 3, frigidSlash: 3, lightningStab: 3 },
    flameGrater: { bluntingStab: 1 },
    lightningStab: { bluntingStab: 1 },
    frigidSlash: { bluntingStab: 1 },
    duel: { },
    physAtkUp: { },
    swallowStrike: { proofOfMastery: 2 },
    bluntingStab: { proofOfMastery: 2 },
    petalScatter: { proofOfMastery: 2 },
    proofOfMastery: { },
    risingSpirit: { },
    speedUp: { }
  },
*/
  "War Magus": {
    warEdgePower: { fairyRobe: 0 },
    fairyRobe: { },
    warHeal: { warHealLine: 2 },
    warHealLine: { warRevive: 3 },
    randomDisease: { strengthSlash: 1, guardSlash: 1 },
    strengthSlash: { headcut: 2 },
    guardSlash: { armcut: 2 },
    displace: { },
    vampire: { rouse: 2 },
    take: { },
    warEdgeMastery: { },
    warRevive: { artery: 2, warResponse: 2 },
    artery: { barrier: 2 },
    warResponse: { barrier: 2 },
    headcut: { legcut: 2 },
    armcut: { legcut: 2 },
    legcut: { ailingSlash: 3 },
    rouse: { spiritDrain: 2 },
    hpUp: { },
    statusDefUp: { },
    warHealAll: { },
    barrier: { },
    ailingSlash: { warHealAll: 2 },
    spiritDrain: { plague: 3 },
    plague: { },
    physAtkUp: { }
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
  Zodiac: {
    astrologersAxis: { astralSign: 0 },
    astralSign: { },
    ethericGleam: { binaryFire: 1, binaryIce: 1, binaryVolt: 1 },
    binaryFire: { fireStar: 3 },
    binaryIce: { fireStar: 3 },
    binaryVolt: { fireStar: 3 },
    fireStar: { iceStar: 2, voltStar: 2 },
    iceStar: { fireProphecy: 2, iceProphecy: 2, voltProphecy: 2 },
    voltStar: { fireProphecy: 2, iceProphecy: 2, voltProphecy: 2 },
    singularity: { focusEther: 3, ethericReturn: 3 },
    focusEther: { restoreEther: 2 },
    ethericReturn: { darkEther: 2 },
    mine: { },
    horoscope: { },
    etherMastery: { },
    tpUp: { },
    restoreEther: { antiEther: 2 },
    antiEther: { spreadEther: 2 },
    darkEther: { ethericShoot: 2 },
    ethericShoot: { },
    fireProphecy: { freeEnergy: 1, meteor: 1 },
    iceProphecy: { freeEnergy: 1, meteor: 1 },
    voltProphecy: { freeEnergy: 1, meteor: 1 },
    freeEnergy: { },
    spreadEther: { },
    meteor: { }
  },
  Farmer: {
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
  },
  Shogun: {
    fullCombatForm: { bodyDouble: 0 },
    bodyDouble: { },
    parryingBlade: { spiritFlow: 2 },
    spiritFlow: { twinSparrow: 3 },
    counterCommand: { baitCommand: 2 },
    boltSlash: { morningStar: 3 },
    sight: { dusk: 2 },
    greatGeneral: { curseStrike: 2 },
    assassinGathering: { },
    take: { },
    moraleBoost: { },
    twinSparrow: { fellingBird: 4 },
    baitCommand: { blitzCommand: 2 },
    blitzCommand: { reprisalCommand: 3 },
    morningStar: { },
    dusk: { },
    bloodyLance: { mercyKill: 3 },
    fellingBird: { fiveRingSword: 2 },
    ritualSuicide: { reincarnation: 2 },
    curseStrike: { foreHonor: 2 },
    fiveRingSword: { },
    reprisalCommand: { warriorMight: 2 },
    reincarnation: { },
    warriorMight: { },
    mercyKill: { },
    foreHonor: { }
  },
  Landsknecht: {
    trinity: { fullCharge: 0 },
    fullCharge: { },
    proficiency: { initiative: 2 },
    sonicRaid: { doubleStrike: 2 },
    blazingLink: { improvedLink: 3 },
    freezingLink: { improvedLink: 3 },
    electricLink: { improvedLink: 3 },
    vanguard: { },
    powerBreak: { guardBreak: 2 },
    guardBreak: { speedBreak: 2 },
    mine: { },
    doubleStrike: { spiralSlice: 3, penetrate: 3 },
    spiralSlice: { swordTempest: 2 },
    penetrate: { swiftStab: 2 },
    improvedLink: { linkSmash: 1 },
    linkSmash: { linkMastery: 2 },
    speedBreak: { physDefUp: 2 },
    physDefUp: { fullBreak: 2  },
    initiative: { singleDevote: 2 },
    statusDefUp: { },
    swordTempest: { statusDefUp:1 },
    swiftStab: { statusDefUp:1 },
    linkMastery: { linkEnd: 2 },
    linkEnd: { },
    fullBreak: { },
    singleDevote: { }
  },
  Nightseeker: {
    killerStance: { disaster: 0 },
    disaster: { },
    sandThrow: { sleepThrow: 2 },
    sleepThrow: { curseThrow: 3, shadowBite: 3 },
    shadowCloak: { bidingSlice: 1 },
    bidingSlice: { autoCloak: 2 },
    iceKnife: { },
    proficiency: { sneakAttack: 2 },
    decoySign: { },
    bladeFlurry: { followTrace: 4 },
    chop: { },
    curseThrow: { nerveThrow: 2 },
    nerveThrow: { venomThrow: 2 },
    shadowBite: { swiftEdge: 3 },
    autoCloak: { backstab: 2 },
    backstab: { assassinate: 3 },
    sneakAttack: { foulMastery: 2 },
    foulMastery: { },
    speedUp: { },
    spreadThrow: { autoSpread: 2 },
    venomThrow: { },
    swiftEdge: { },
    assassinate: { returnCloak: 3 },
    returnCloak: { },
    followTrace: { },
    autoSpread: { }
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
  }
};
