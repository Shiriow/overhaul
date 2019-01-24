let forward = {
  Landsknecht: {
    hpUp: { },
    tpUp: { blazer: 3, freezer: 3, shocker: 3 },
    atkUp: { warCry: 3, hellCry: 10 },
    defUp: { armHeal: 1, flee: 5 },
    axes: { twoHit: 5, crush: 1, stunner: 3, silencer: 7 },
    swords: { twoHit: 5, cleaver: 1, tornado: 5, allslash: 5, blazer: 7, freezer: 7, shocker: 7 },
    twoHit: { allslash: 3 },
    warCry: { },
    hellCry: { },
    armHeal: { },
    flee: { },
    cleaver: { },
    tornado: { },
    allslash: { },
    blazer: { },
    freezer: { },
    shocker: { },
    crush: { },
    stunner: { },
    silencer: { },
    mine: { }
  },
  Survivalist: {
    hpUp: { },
    tpUp: { },
    agiUp: { ambush: 3, firstHit: 5, trickery: 1, quicken: 1 },
    bows: { trueshot: 1, multihit: 5, disable: 3, apollon: 10 },
    ambush: { aware: 2, owlEye: 1, stalker: 3 },
    aware: { },
    firstHit: { },
    trickery: { cloak: 3, firstTurn: 3 },
    quicken: { escape: 3, firstTurn: 3 },
    cloak: { },
    escape: { },
    firstTurn: { firstHit: 3 },
    trueshot: { },
    multihit: { },
    disable: { },
    apollon: { },
    owlEye: { },
    stalker: { },
    chop: { },
    mine: { },
    take: { }
  },
  Protector: {
    hpUp: { cure: 3, cureTwo: 5 },
    tpUp: { antifire: 3, antivolt: 3, anticold: 3 },
    defUp: { aegis: 5, enGarde: 7, provoke: 1, flee: 3, parry: 3, fortify: 3, stalker: 5 },
    shields: { enGarde: 7, fortify: 3, frontGuard: 1, backGuard: 1, antifire: 5, antivolt: 5, anticold: 5, smite: 10 },
    aegis: { },
    enGarde: { },
    provoke: { },
    flee: { },
    parry: { },
    fortify: { smite: 5 },
    defender: { },
    frontGuard: { defender: 3 },
    backGuard: { defender: 3 },
    antifire: { },
    antivolt: { },
    anticold: { },
    smite: { },
    cure: { },
    cureTwo: { },
    stalker: { },
    mine: { }
  },
  "Dark Hunter": {
    hpUp: { },
    tpUp: { cloak: 3 },
    atkUp: { boostUp: 3, fury: 5, ecstasy: 5, bait: 5 },
    whips: { viper: 1, gag: 2, shackles: 3, cuffs: 4, ecstasy: 5, climax: 10 },
    swords: { hypnos: 1, nerve: 2, mirage: 3, drain: 4, bait: 5, petrify: 10 },
    boostUp: { },
    fury: { },
    cloak: { },
    viper: { },
    gag: { },
    shackles: { },
    cuffs: { },
    ecstasy: { },
    climax: { },
    hypnos: { },
    nerve: { },
    mirage: { },
    drain: { },
    bait: { },
    petrify: { },
    take: { }
  },
  Medic: {
    hpUp: { },
    tpUp: { scavenge: 3, tpRegen: 10 },
    atkUp: { caduceus: 10 },
    healer: { patchUp: 2, cure: 1, cureTwo: 3, cureThree: 5, salve: 3, salveTwo: 5, revive: 7, unbind: 3, refresh: 5, immunize: 3, regen: 5, healingTouch: 10 },
    patchUp: { },
    scavenge: { },
    tpRegen: { },
    cure: { salve: 3, regen: 5 },
    cureTwo: { salveTwo: 3 },
    cureThree: { revive: 3 },
    salve: { immunize: 3 },
    salveTwo: { cpr: 5 },
    revive: { },
    unbind: { },
    refresh: { },
    immunize: { cpr: 3 },
    cpr: { },
    regen: { },
    caduceus: { },
    healingTouch: { },
    chop: { }
  },
  Alchemist: {
    tpUp: { scavenge: 3, tpRegen: 10, sight: 5, warp: 7 },
    fireUp: { fire: 1, flame: 5, inferno: 5 },
    iceUp: { ice: 1, freeze: 5, cocytus: 5 },
    voltUp: { volt: 1, thunder: 5, thor: 5 },
    toxins: { poison: 1, venom: 5 },
    scavenge: { },
    tpRegen: { },
    fire: { flame: 3 },
    flame: { },
    inferno: { },
    ice: { freeze: 3 },
    freeze: { },
    cocytus: { },
    volt: { thunder: 3 },
    thunder: { },
    thor: { },
    poison: { },
    venom: { },
    sight: { },
    warp: { },
    chop: { }
  },
  Troubadour: {
    hpUp: { stamina: 3, healing: 5 },
    tpUp: { relaxing: 5, stalker: 5 },
    songs: { divinity: 10, bravery: 1, shelter: 1, mercury: 1, erasure: 3, recovery: 3, stamina: 3, blaze: 5, frost: 5, shock: 5, ifrit: 7, ymir: 7, taranis: 7, healing: 7, relaxing: 7 },
    divinity: { },
    bravery: { blaze: 3, frost: 3, shock: 3 },
    shelter: { },
    mercury: { },
    erasure: { },
    recovery: { },
    stamina: { },
    blaze: { },
    frost: { },
    shock: { },
    ifrit: { },
    ymir: { },
    taranis: { },
    healing: { },
    relaxing: { divinity: 5 },
    stalker: { return: 3 },
    return: { },
    take: { }
  },
  Ronin: {
    hpUp: { ibuki: 3 },
    tpUp: { },
    atkUp: { sight: 3, critUp: 5 },
    katanas: { kesagiri: 1, overhead: 3, zamba: 5, midareba: 7, orochi: 10, seigan: 3, mikiri: 5, koteuchi: 7, raizuki: 10, iai: 3, kubiuchi: 5, gatotsu: 7, hyosetsu: 10 },
    sight: { },
    critUp: { },
    ibuki: { },
    kesagiri: { },
    overhead: { zamba: 1, midareba: 3, orochi: 5 },
    zamba: { },
    midareba: { },
    orochi: { },
    seigan: { mikiri: 1, koteuchi: 3, raizuki: 5 },
    mikiri: { },
    koteuchi: { },
    raizuki: { },
    iai: { kubiuchi: 1, gatotsu: 3, hyosetsu: 5 },
    kubiuchi: { },
    gatotsu: { },
    hyosetsu: { },
    mine: { }
  },
  Hexer: {
    hpUp: { },
    tpUp: { },
    curses: { sapping: 1, frailty: 1, leaden: 1, blinding: 2, relapse: 3, crainial: 5, abdomen: 5, immobile: 5, torpor: 6, corrupt: 7, revenge: 7, evilEye: 10 },
    stagger: { },
    sapping: { },
    frailty: { },
    leaden: { },
    blinding: { },
    relapse: { },
    crainial: { },
    abdomen: { },
    immobile: { },
    torpor: { stagger: 5 },
    corrupt: { stagger: 5, revenge: 10 },
    revenge: { },
    evilEye: { paralyze: 3, betrayal: 5, suicide: 10, lure: 10 },
    paralyze: { },
    betrayal: { },
    suicide: { },
    lure: { },
    mine: { }
  }
};
