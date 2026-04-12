// priority: -1

ServerEvents.tags('item', e => {
    itemTags_Core(e)
    itemTags_AlexsMobs(e)
    // itemTags_CallOfYucutan(e)
    itemTags_Neapolitan(e)
    itemTags_Origins(e)
    itemTags_OddsNEnds(e)
    itemTags_SimpleTMs(e)
    itemTags_EveryComp(e)
    itemTags_CavernsAndChasms(e)
})

ServerEvents.tags('block', e => {
    blockTags_Core(e)
    blockTags_AlexsCaves(e)
    blockTags_AlexsMobs(e)
    blockTags_SnowRealMagic(e)
    blockTags_Origins(e)
    blockTags_Supplementaries(e)
})

ServerEvents.tags('entity_type', e => {
    entityTags_Core(e)
    entityTags_AlexsMobs(e)
    entityTags_Atmospheric(e)
    entityTags_Biomancy(e)
    entityTags_Environmental(e)
    entityTags_Galosphere(e)
    entityTags_NumismaticOverhaul(e)
    entityTags_Supplementaries(e)
    entityTags_FtbChunks(e)
})

ServerEvents.tags('worldgen/biome', e => {
    biomeTags_Core(e)
    biomeTags_Atmospheric(e)
    biomeTags_Autumnity(e)
    // biomeTags_CallOfYucutan(e)
    biomeTags_CavernsAndChasms(e)
    biomeTags_CollectorsReap(e)
    biomeTags_Environmental(e)
    biomeTags_Galosphere(e)
    biomeTags_ImmersiveWeathering(e)
    biomeTags_Malum(e)
    biomeTags_MyNethersDelight(e)
    biomeTags_NaturesSpirit(e)
    biomeTags_Neapolitan(e)
    biomeTags_UpgradeAquatic(e)
    biomeTags_Windswept(e)
    // biomeTags_ScGuns(e)
    biomeTags_Oreganized(e)
    biomeTags_OddsNEnds(e)
})

ServerEvents.tags('worldgen/structure', e => {
    structureTags_Cataclysm(e)
})

ServerEvents.tags('damage_type', e => {
    damageTypeTags_Origins(e)
})

ServerEvents.recipes(e => {
    recipes_Core(e)
    recipes_Aetherworks(e)
    recipes_AlexsMobs(e)
    recipes_Atmospheric(e)
    recipes_BrewinAndChewin(e)
    recipes_Cataclysm(e)
    recipes_CavernsAndChasms(e)
    recipes_CreateDeco(e)
    recipes_Embers(e)
    recipes_Everycomp(e)
    recipes_FarmersDelight(e)
    recipes_Goety(e)
    recipes_ImmersiveWeathering(e)
    recipes_MoreMinecarts(e)
    recipes_Neapolitan(e)
    recipes_Quark(e)
    // recipes_ScGuns(e)
    recipes_SootyChimneys(e)
    recipes_Supplementaries(e)
    recipes_Windswept(e)
    recipes_Woodworks(e)
    recipes_EndRem(e)
    recipes_OddsNEnds(e)
    recipes_Botania(e)
    recipes_FunctionalStorage(e)

    // Fully removing any recipe tied to items in REMOVALS
    global.REMOVALS.set.forEach(removal => {
        e.remove({ input: removal })
        e.remove({ output: removal })
    })
})


ServerEvents.loaded(e => {
    // Default game rules
    if (e.server.persistentData.gameRules) return
    e.server.gameRules.set('playersSleepingPercentage', 0)
    e.server.gameRules.set('spawnRadius', 0)
    e.server.gameRules.set('disableElytraMovementCheck', true)
    if (global.DEBUG_MODE) {
        e.server.gameRules.set('doDaylightCycle', false)
        e.server.gameRules.set('doWeatherCycle', false)
    }
    if (Platform.isLoaded('decorative_blocks')) {
        e.server.gameRules.set('decorative_blocks:disableThatch', true)
    }
    if (Platform.isLoaded('cobblemon')) {
        e.server.gameRules.set('doShinyStarters', true)
    }

    e.server.persistentData.gameRules = true
})

ServerEvents.highPriorityData(e => {
    advancements_Core(e)

    numismaticTrades_Core(e)
    moonlightTrades_Supplementaries(e)
    moonlightTrades_Sawmill(e)

    // enchants_ImmersiveEnchanting(e)
    // enchants_AlexsMobs(e)
    // enchants_Allurement(e)
    // enchants_Backpacked(e)
    // enchants_Biomancy(e)
    // enchants_CallOfYucutan(e)
    // enchants_Create(e)
    // enchants_Galosphere(e)
    // enchants_Goety(e)
    // enchants_Malum(e)
    // enchants_ScGuns(e)
    // enchants_Supplementaries(e)
    // enchants_UnusualEnd(e)
    // enchants_VeinMining(e)
    // enchants_Soulbound(e)

    worldgen_Core(e)
    worldgen_Atmospheric(e)
    worldgen_Autumnity(e)
    // worldgen_CallOfYucutan(e)
    worldgen_CavernsAndChasms(e)
    worldgen_Environmental(e)
    worldgen_Embers(e)
    worldgen_Galosphere(e)
    worldgen_Goety(e)
    worldgen_Idas(e)
    worldgen_ImmersiveWeathering(e)
    worldgen_MoreMinecarts(e)
    worldgen_MyNethersDelight(e)
    worldgen_NaturesSpirit(e)
    worldgen_Oreganized(e)
    worldgen_SnowySpirit(e)
    worldgen_Windswept(e)
    // worldgen_ScGuns(e)
    worldgen_OddsNEnds(e)
    worldgen_DoomAndGloom(e)
    worldgen_CollectorsReap(e)
    worldgen_Botania(e)

    origins_Layer(e)
    origins_Overrides(e)
    origins_Dryad(e)
    origins_Dwarf(e)
    origins_Froggie(e)
    origins_Goblin(e)
    origins_Pyke(e)
    origins_Xayah(e)
})

ServerEvents.commandRegistry(event => {
    commands_Core(event)
    commands_Origins(event)
})


LootJS.modifiers(e => {
    // Replacements
    const all = e.addLootTableModifier(/.*/)
    lootReplacements_Core(all)
    // lootReplacements_ImmersiveEnchanting(all)
    lootRemovals_EndRem(all)

    lootTables_Core(e)
    lootTables_EndRem(e)
    // lootTables_ImmersiveEnchanting(e)
    lootTables_SootyChimneys(e)
    lootTables_OddsNEnds(e)
})


EntityEvents.spawned(e => {
    entitySpawned_Core(e)
})
