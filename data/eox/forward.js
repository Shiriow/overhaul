let forward = {
  Medic: {
    steadyHands: { medicalMiracle: 0 },
    medicalMiracle: { },
    lineHeal: { refresh: 3, unbind: 3 },
    refresh: { delayedHeal: 3 },
    unbind: { chaseHeal: 3 },
    delayedHeal: { overheal: 3 },
    chaseHeal: { overheal: 3 },
    overheal: { groupTherapy: 3, healDejaVu: 3 },
    defender: { immunize: 3 },
    immunize: { indomitability: 3 },
    indomitability: { succor: 3 },
    succor: { groupTherapy: 3, healDejaVu: 3  },
    groupTherapy: { aglaophotis: 3 },
    healDejaVu: { aglaophotis: 3 },
    aglaophotis: { },
    revive: { finalGift: 3, patchUp: 3 },
    patchUp: { antibodies: 3 },
    antibodies: { physick: 3 },
    physick: { },
    finalGift: { autoRevive: 3 },
    autoRevive: { },
    caduceus: { mendingBlow: 3 },
    mendingBlow: { heavyStrike: 3 },
    heavyStrike: { starDrop: 3 },
    starDrop: { },
    take: { }
  },

  Survivalist: {
    illusionStep: { mirageArrow: 0 },
    mirageArrow: {},
    flameArrow: { dropShot: 2 },
    multiShot: { dropShot: 2 },
    dropShot: { finishingArrow: 2, sagittariusShot: 2 },
    finishingArrow: { disablingShot: 3 },
    disablingShot: {},
    sagittariusShot: { autoSagittarius: 3 },
    autoSagittarius: {},
    chainDance: { phantomTrick: 2, },
    phantomTrick: { hazyShot: 3 },
    hazyShot: { galeforce: 3 },
    galeforce: { shadewalker: 3 },
    blindArrow: { feyPhantasm: 2 },
    feyPhantasm: { illusoryWave: 3 },
    illusoryWave: { sereneBreeze: 3 },
    sereneBreeze: { shadewalker: 2 },
    shadewalker: {},
    resuscitate: { efficiency: 2 },
    efficiency: { blindingBlossom: 2 },
    blindingBlossom: { scapegoat: 2 },
    riskPerception: { stalker: 2 },
    stalker: { scapegoat: 2 },
    scapegoat: { swapStep: 2 },
    swapStep: {},
    naturalInstinct: {}
  },
  Ronin: {
    peerless: { issen: 0 },
    issen: {},
    upperStance: { airBlade: 1, dyingLotus: 1, ripperBlast: 1 },
    clearStance: { armStrike: 1, bloodyBlade: 1, flowingPath: 1 },
    risingSpirit: {},
    airBlade: { soaringTempest: 1 },
    ripperBlast: { soaringTempest: 1 },
    dyingLotus: { soaringTempest: 1 },
    bloodyBlade: { mirrorMoon: 1 },
    armStrike: { mirrorMoon: 1 },
    flowingPath: { mirrorMoon: 1 },
    moonShadow: { helmSplitter: 3, flameGrater: 3 },
    helmSplitter: { swallowStrike: 3 },
    flameGrater: { petalScatter: 3 },
    spiritBreath: { frigidSlash: 3, lightningStab: 3 },
    soaringTempest: {},
    mirrorMoon: {},
    lightningStab: { earthBreaker: 3 },
    frigidSlash: { bluntingStab: 3 },
    swallowStrike: { duel: 1 },
    petalScatter: { duel: 1 },
    duel: {},
    bluntingStab: { bladeGrasp: 1 },
    earthBreaker: { bladeGrasp: 1 },
    bladeGrasp: {},
    mine: {}
  },
  "War Magus": {
    warEdgePower: { fairyRobe: 0 },
    fairyRobe: {},
    warEdgeMastery: {},
    blossomSketch: { warResponse: 3, displace: 3 },
    warResponse: { warRevive: 3 },
    warRevive: { pandemonium: 3, barrier: 3 },
    displace: { artery: 3 },
    artery: {},
    pandemonium: { demiseBurst: 3 },
    barrier: { spiritDrain: 3 },
    viralVector: { blindLaughter: 3, maledictBristle: 3 },
    strengthSlash: { headcut: 3 },
    guardSlash: { headcut: 3 },
    headcut: { legcut: 3, armcut: 3 },
    armcut: { blindLaughter: 3, maledictBristle: 3 },
    legcut: { blindLaughter: 3, maledictBristle: 3 },
    maledictBristle: { demiseBurst: 3 },
    blindLaughter: { demiseBurst: 3 },
    demiseBurst: { looseThread: 3, corpseAsh: 3 },
    aspirGash: { rouse: 3 },
    rouse: { hollowScourge: 3, naturesWill: 3 },
    hollowScourge: { spiritDrain: 3 },
    naturesWill: { spiritDrain: 3 },
    spiritDrain: { looseThread: 3, corpseAsh: 3 },
    corpseAsh: {},
    looseThread: {},
    take: {}
  },
  Highlander: {
    heroBattle: { gaeBolg: 0 },
    gaeBolg: {},
    longThrust: { nascentFlash: 3 },
    nascentFlash: { headPierce: 3 },
    headPierce: { turningTide: 3 },
    turningTide: { blackSabbath: 3 },
    blackSabbath: { lifeSurge: 3 },
    lifeSurge: {},
    drainingThrust: { delayedCharge: 3, bloodVeil: 3 },
    delayedCharge: { crossCharge: 3 },
    crossCharge: { thousandSpears: 3 },
    thousandSpears: { forceOffering: 3 },
    forceOffering: {},
    legionBurst: { legionCharge: 3, spiritShield: 3 },
    legionCharge: { miseryTear: 3 },
    miseryTear: { alliedBonds: 3 },
    alliedBonds: { lifeSurge: 3 },
    spiritShield: { bloodyOffense: 3 },
    bloodyOffense: { bloodFortune: 3 },
    bloodFortune: { battleInstincts: 3 },
    battleInstincts: {},
    bloodVeil: { bloodlust: 3 },
    bloodlust: { fightingSpirit: 3 },
    fightingSpirit: { jawsOfDeath: 3 },
    jawsOfDeath: {},
    mine: {}
  },

  Gunner: {
    actionBoost: { supremeBolt: 0 },
    supremeBolt: {},
    rapidFire: { grapeshotBlast: 1, legSnipe: 1, vileBlast: 1 },
    doubleTap: { grapeshotBlast: 1, legSnipe: 1, vileBlast: 1 },
    grapeshotBlast: { ricochet: 3 },
    ricochet: { wildShot: 3, burstShot: 3 },
    burstShot: { burstCannon: 3 },
    wildShot: { burstCannon: 3 },
    burstCannon: {},
    legSnipe: { armSnipe: 3 },
    armSnipe: { headSnipe: 3 },
    headSnipe: { sharpShooter: 3 },
    sharpShooter: {},
    vileBlast: { sixthSense: 3 },
    sixthSense: { disablingShot: 3 },
    disablingShot: { penetrator: 3 },
    penetrator: { bulletSymphony: 3 },
    bulletSymphony: {},
    silentScope: { medicBullet: 1, actQuick: 1 },
    medicBullet: { coverFire: 3 },
    actQuick: { coverFire: 3, },
    coverFire: { shellShock: 3 },
    shellShock: { smokeGrenade: 3, initiative: 3 },
    smokeGrenade: { bulletSymphony: 3 },
    initiative: {},
    mine: {}
  },
  Ninja: {
    insolence: { ninpoClone: 0 },
    ninpoClone: {},
    shadowBind: { ninpoScorpio: 2 },
    hawkStrike: { ninpoScorpio: 2 },
    ninpoScorpio: { ninpoMirror: 2, ninpoNeedles: 2, schadenfreude: 2 },
    ninpoMirror: { ninpoShock: 3 },
    ninpoShock: { foxDrop: 3 },
    ninpoNeedles: { quietus: 2 },
    quietus: { foxDrop: 3 },
    foxDrop: {},
    schadenfreude: { fallingBloom: 2 },
    fallingBloom: { drawingSlice: 2 },
    drawingSlice: { yaegasumi: 3 },
    yaegasumi: {},

    otori: { fuzake: 1 },
    fuzake: { stormyGale: 2 },
    stormyGale: { shadowstrike: 1 },
    concealment: { ninpoSmoke: 2, acrobatics: 2 },
    ninpoSmoke: { rendingShatter: 2 },
    rendingShatter: { shadowstrike: 3 },
    shadowstrike: { moonlightOmen: 2 },
    acrobatics: { eyeForAnEye: 2 },
    eyeForAnEye: { goad: 2 },
    goad: { moonlightOmen: 2 },
    moonlightOmen: {},
    chop: {}
  },
  Zodiac: {
    astrologersAxis: { astralSign: 0 },
    astralSign: { },
    pulseStar: { binaryFire: 3, binaryIce: 3, binaryVolt: 3 },
    binaryFire: { meteorRain: 3, guidingStar: 3 },
    binaryIce: { meteorRain: 3, guidingStar: 3 },
    binaryVolt: { meteorRain: 3, guidingStar: 3 },
    guidingStar: { astralFire: 3 },
    astralFire: { umbralIce: 3, solsticeVolt: 3 },
    umbralIce: {  },
    solsticeVolt: {  },
    meteorRain: { refractionNova: 4 },
    refractionNova: { },
    singularity: { cosmicGleam: 3 },
    cosmicGleam: { asteroidBelt: 3 },
    asteroidBelt: { nebulaResurgence: 4 },
    nebulaResurgence: { aspectedVeil: 4 },
    aspectedVeil: { prophecy: 4, fluxAbsorption: 4 },
    prophecy: { },
    fluxAbsorption: { },
    celestialReturn: { darkMatter: 2, aetherLeak: 2 },
    darkMatter: { stellarFlow: 2 },
    stellarFlow: { pulsarFeedback: 2 },
    pulsarFeedback: { },
    aetherLeak: { autoLeak: 2 },
    autoLeak: { },
    mine: { }
  },


  Shogun: {
    fullCombatForm: { bodyDouble: 0 },
    bodyDouble: {},
    parryingBlade: { hawkSlice: 3, soleFocus: 3 },
    hawkSlice: { fiveRingSword: 3, gnashingFang: 3 },
    fiveRingSword: {},
    gnashingFang: { finalFlicker: 3, bloodyLance: 2 },
    finalFlicker: { mercyKill: 3 },
    bloodyLance: { mercyKill: 3 },
    mercyKill: {},
    blitzCommand: { galvanize: 3 },
    galvanize: { ambushStance: 3 },
    ambushStance: { rearDignity: 3 },
    rearDignity: { sanzuCross: 3 },
    soleFocus: { wickedTalons: 3 },
    wickedTalons: { savageClaw: 2 },
    savageClaw: { sanzuCross: 3 },
    sanzuCross: {},
    blazeSpirit: { hailSpirit: 3, boltSpirit: 3 },
    hailSpirit: { greatGeneral: 3 },
    boltSpirit: { greatGeneral: 3 },
    greatGeneral: { moraleBoost: 3, ritualSuicide: 3 },
    moraleBoost: { reincarnation: 3 },
    ritualSuicide: {},
    bloodfest: { ritualSuicide: 3 },
    reincarnation: {},
    take: {}
  },

  Nightseeker: {
    killerStance: { disaster: 0 },
    disaster: { },
    abyssalCurse: { shadowflame: 3, eventide: 2 },
    shadowflame: { shockgrasp: 3 },
    shockgrasp: { noxiousTorpor: 3 },
    noxiousTorpor: { effluviumBurst: 3, creepingDarkness: 3 },
    effluviumBurst: { coldbloodedVenom: 3 },
    creepingDarkness: { coldbloodedVenom: 3 },
    coldbloodedVenom: { },
    maskedPain: { eventide: 2 },
    eventide: { duskToDawn: 2, daggerFetish: 2 },
    duskToDawn: { sadisticEcstasy: 3 },
    daggerFetish: { sadisticEcstasy: 2 },
    sadisticEcstasy: { ebonFrenzy: 2  },
    ebonFrenzy: { },
    shadowCloak: { bidingSlice: 1, decoySign: 1 },
    decoySign: { autoCloak: 2 },
    autoCloak: { blackestNight: 2 },
    blackestNight: { sneakAttack: 2 },
    sneakAttack: { shadowRemnant: 2 },
    shadowRemnant: {  },
    bidingSlice: { backstab: 2 },
    backstab: { twilightFury: 3 },
    twilightFury: { assassinate: 2 },
    assassinate: { },
    chop: { }
  },

  Imperial: {
    ignition: { conversion: 0 },
    conversion: {},
    returnStroke: { busterBeat: 2 },
    busterBeat: { wideEffect: 2, heatSink: 2 },
    wideEffect: { typhoonTrigger: 3 },
    typhoonTrigger: { doubleDown: 2 },
    doubleDown: {},
    heatSink: { finisher: 3 },
    finisher: { overdrive: 3 },
    ampedDischarge: { energyBlade: 2 },
    energyBlade: { tranceRiot: 2 },
    tranceRiot: { powderMark: 2 },
    powderMark: { overdrive: 2 },
    overdrive: {},
    roughDivide: { guardPoint: 2 },
    rearGuard: { guardPoint: 2 },
    guardPoint: { solidBarrel: 2 },
    solidBarrel: { keenFlurry: 2 },
    keenFlurry: { sentinelShell: 2 },
    deflectorField: { overheatShield: 2 },
    overheatShield: { thermalAura: 2 },
    avenger: { coolingCell: 2 },
    coolingCell: { thermalAura: 2 },
    thermalAura: { sentinelShell: 2 },
    sentinelShell: {},
    mine: {}
  },
  Pugilist: {
    sealRush: { finalBlow: 0 },
    finalBlow: {},
    concussion: { oneTwoPunch: 1 },
    armBreaker: { oneTwoPunch: 1 },
    lowBlow: { oneTwoPunch: 1 },
    oneTwoPunch: { addedBlow: 2 },
    corkscrew: { addedBlow: 2 },
    addedBlow: { thunderFist: 2 },
    thunderFist: { leadingBlow: 2 },
    leadingBlow: {},
    howlingFist: { axeKick: 2, vajraForm: 2 },
    axeKick: { faultBlocker: 2, doublePunch: 2 },
    faultBlocker: { adrenaline: 2 },
    adrenaline: { meditation: 2 },
    meditation: { clinch: 2 },
    clinch: {},
    doublePunch: { breather: 2 },
    breather: { crossCounter: 2 },
    crossCounter: {},
    vajraForm: { hundredFists: 2, resonanceBlow: 2 },
    resonanceBlow: { flowingStrikes: 2 },
    flowingStrikes: { lashOut: 2 },
    lashOut: {},
    hundredFists: { breakfireRush: 2 },
    breakfireRush: {},
    chop: {}
  },
  Harbinger: {
    infiniteMiasma: { miasmaTorrent: 0 },
    miasmaTorrent: {},
    erodingReap: { slowingReap: 2 },
    stiflingReap: { slowingReap: 2 },
    slowingReap: { maskingReap: 3 },
    maskingReap: { ephemeralReap: 2, reversalDecay: 2 },
    ephemeralReap: { harrowingScythe: 2 },
    reversalDecay: { harrowingScythe: 2 },
    harrowingScythe: {},
    paralyzingMiasma: { toxicMiasma: 3 },
    toxicMiasma: { darknessMiasma: 2, frigidReap: 2 },
    darknessMiasma: { chaosMiasma: 3 },
    chaosMiasma: {},
    frigidReap: { soulRend: 2 },
    soulRend: {},
    miasmaArmor: { endlessShroud: 2, blackShroud: 2 },
    endlessShroud: { spiritAbsorb: 3 },
    spiritAbsorb: {},
    blackShroud: { atonement: 2 },
    atonement: { soulTransfer: 3, deathsAsylum: 3 },
    soulTransfer: { spectralSeep: 3 },
    deathsAsylum: { soulFixation: 3 },
    spectralSeep: { judgment: 3 },
    soulFixation: { judgment: 3 },
    judgment: {},
    take: {}
  },
  Buccaneer: {
    shiftyMethods: { noQuarter: 0 },
    noQuarter: {},
    lightsOut: { hanging: 2 },
    paralyzingShot: { quickDraw: 2 },
    chaseFiresaber: { burstChase: 3 },
    chaseIcethrust: { burstChase: 3 },
    chaseVoltblow: { burstChase: 3 },
    vulcanStance: { ladyLuck: 1 },
    trickster: {},
    eagleEye: {},
    troublemaker: {},
    speedUp: {},
    hanging: { thrustingFlurry: 2 },
    quickDraw: { bulletstorm: 2 },
    burstChase: { enhancedChase: 3 },
    enhancedChase: { doubleChase: 2 },
    ladyLuck: { swashbuckling: 1 },
    swashbuckling: { resonance: 2 },
    limitBreak: {},
    thrustingFlurry: { pincushion: 3, dirtyFighting: 3 },
    bulletstorm: { pincushion: 3, dirtyFighting: 3 },
    pincushion: {},
    dirtyFighting: {},
    doubleChase: {},
    resonance: {},
    take: {}
  },
  Alchemist: {
    analysis: { eschaton: 0 },
    eschaton: {},
    firePalm: { additionalPalm: 2 },
    icePalm: { additionalPalm: 2 },
    voltPalm: { additionalPalm: 2 },
    additionalPalm: { splashPalm: 3 },
    elementResonance: {},
    corrosiveFormula: { dilution: 3 },
    venomFormula: { lacerateFormula: 3, goringFormula: 3 },
    manaShield: { focus: 3 },
    dilution: { blastFormula: 2 },
    blastFormula: { riotFormula: 2, recoilFormula: 2 },
    splashPalm: { gauntletMemory: 2 },
    gauntletMemory: { lightFormula: 3, lightTincture: 3 },
    lacerateFormula: { analyticalStrike: 2, compression: 2 },
    goringFormula: { analyticalStrike: 2, compression: 2 },
    focus: { nuclearFormula: 2 },
    analyticalStrike: { nuclearFormula: 3 },
    compression: { nuclearFormula: 3 },
    riotFormula: { forceAbsorber: 3 },
    recoilFormula: { forceAbsorber: 3 },
    lightFormula: {},
    lightTincture: {},
    nuclearFormula: {},
    forceAbsorber: {},
    take: {}
  }

};
