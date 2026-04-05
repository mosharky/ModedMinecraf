function removals_Quark() {
    global.REMOVALS.add([
        /quark:.*(dirt_bricks|ladder|bookshelf|leaf_carpet|thatch|blossom|permafrost|cobblestone_brick|limestone|shale).*/,
        /quark:.*(crab|foxhound|shiba|wraith).*/,
        /quark:.*ancient(?!_tome|_fruit).*/,
        /quark:.*azalea(?!_hedge).*/,
        'quark:gold_bars',
        'quark:chute',
        /quark:.*sack/,
        'quark:golden_apple_crate',
        'quark:apple_crate',
        'quark:potato_crate',
        'quark:carrot_crate',
        'quark:golden_carrot_crate',
        'quark:beetroot_crate',
        'quark:pipe',
        // match everything except vertical slab
        /quark:.*(andesite|granite|diorite|dripstone(?!_block)|tuff|calcite)(?!_vertical_slab)(?:_.+)?/,
        /quark:polished_(dripstone|tuff|calcite).*/,
        'quark:sturdy_stone',
        /quark:(?!lootr|purpur|nether_brick|prismarine).*chest/,
    ])

    global.ITEM_SWAPPER.set('quark:crab_leg', 'collectorsreap:chieftain_leg')
    global.ITEM_SWAPPER.set('quark:crab_shell', 'collectorsreap:chieftain_claw')

    global.BLOCK_SWAPPER.set('quark:sturdy_stone', 'packedup:stone_pile')
    // IDAS structures need these swapped out
    global.BLOCK_SWAPPER.set('quark:thatch', 'packedup:grass_thatch')
    global.BLOCK_SWAPPER.set('quark:thatch_slab', 'packedup:grass_thatch_slab')
    global.BLOCK_SWAPPER.set('quark:gold_bars', 'caverns_and_chasms:golden_bars')
    global.BLOCK_SWAPPER.set('quark:iron_ladder', 'create:andesite_ladder')
    global.BLOCK_SWAPPER.set('quark:permafrost', 'minecraft:packed_ice')
    global.BLOCK_SWAPPER.set('quark:permafrost_wall', 'windswept:packed_ice_brick_wall')
    global.BLOCK_SWAPPER.set('quark:permafrost_vertical_slab', 'v_slab_compat:windswept/packed_ice_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:spruce_leaf_carpet', 'immersive_weathering:spruce_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:birch_leaf_carpet', 'immersive_weathering:birch_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:cherry_leaf_carpet', 'immersive_weathering:cherry_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:mangrove_leaf_carpet', 'immersive_weathering:mangrove_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:azalea_leaf_carpet', 'immersive_weathering:azalea_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:jungle_leaf_carpet', 'immersive_weathering:jungle_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:oak_leaf_carpet', 'immersive_weathering:oak_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:flowering_azalea_leaf_carpet', 'immersive_weathering:flowering_azalea_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:dark_oak_leaf_carpet', 'immersive_weathering:dark_oak_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:acacia_leaf_carpet', 'immersive_weathering:acacia_leaf_pile')
    // global.BLOCK_SWAPPER.set('quark:nether_brick_trapped_chest', 'woodworks:trapped_crimson_chest')
    // global.BLOCK_SWAPPER.set('quark:nether_brick_chest', 'woodworks:crimson_chest')
    // global.BLOCK_SWAPPER.set('quark:purpur_trapped_chest', 'woodworks:trapped_crimson_chest')
    // global.BLOCK_SWAPPER.set('quark:purpur_chest', 'woodworks:crimson_chest')
    // global.BLOCK_SWAPPER.set('quark:prismarine_trapped_chest', 'woodworks:trapped_warped_chest')
    // global.BLOCK_SWAPPER.set('quark:prismarine_chest', 'woodworks:warped_chest')
    global.BLOCK_SWAPPER.set('quark:chute', 'create:chute')
    global.BLOCK_SWAPPER.set('quark:dirt_bricks', 'environmental:dirt_bricks')
    global.BLOCK_SWAPPER.set('quark:dirt_bricks_stairs', 'environmental:dirt_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:dirt_bricks_slab', 'environmental:dirt_brick_slab')
    global.BLOCK_SWAPPER.set('quark:dirt_bricks_wall', 'environmental:dirt_brick_wall')
    global.BLOCK_SWAPPER.set('quark:dirt_bricks_vertical_slab', 'v_slab_compat:environmental/dirt_brick_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:cobblestone_bricks', 'caverns_and_chasms:cobblestone_bricks')
    global.BLOCK_SWAPPER.set('quark:cobblestone_bricks_stairs', 'caverns_and_chasms:cobblestone_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:cobblestone_bricks_slab', 'caverns_and_chasms:cobblestone_brick_slab')
    global.BLOCK_SWAPPER.set('quark:cobblestone_bricks_wall', 'caverns_and_chasms:cobblestone_brick_wall')
    global.BLOCK_SWAPPER.set('quark:cobblestone_bricks_vertical_slab', 'v_slab_compat:caverns_and_chasms/cobblestone_brick_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:mossy_cobblestone_bricks', 'caverns_and_chasms:mossy_cobblestone_bricks')
    global.BLOCK_SWAPPER.set('quark:mossy_cobblestone_bricks_stairs', 'caverns_and_chasms:mossy_cobblestone_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:mossy_cobblestone_bricks_slab', 'caverns_and_chasms:mossy_cobblestone_brick_slab')
    global.BLOCK_SWAPPER.set('quark:mossy_cobblestone_bricks_wall', 'caverns_and_chasms:mossy_cobblestone_brick_wall')
    global.BLOCK_SWAPPER.set('quark:mossy_cobblestone_bricks_vertical_slab', 'v_slab_compat:caverns_and_chasms/mossy_cobblestone_brick_vertical_slab')

    const swapStone = (stone, extras) => {
        global.BLOCK_SWAPPER.set(`quark:${stone}_bricks`, `caverns_and_chasms:${stone}_bricks`)
        global.BLOCK_SWAPPER.set(`quark:${stone}_bricks_stairs`, `caverns_and_chasms:${stone}_brick_stairs`)
        global.BLOCK_SWAPPER.set(`quark:${stone}_bricks_slab`, `caverns_and_chasms:${stone}_brick_slab`)
        global.BLOCK_SWAPPER.set(`quark:${stone}_bricks_wall`, `caverns_and_chasms:${stone}_brick_wall`)
        global.BLOCK_SWAPPER.set(`quark:${stone}_bricks_vertical_slab`, `v_slab_compat:caverns_and_chasms/${stone}_brick_vertical_slab`)
        global.BLOCK_SWAPPER.set(`quark:chiseled_${stone}_bricks`, `caverns_and_chasms:chiseled_polished_${stone}`)

        if (stone == 'dripstone' || stone == 'tuff') global.BLOCK_SWAPPER.set(`quark:${stone}_pillar`, `create:${stone}_pillar`)
        else global.BLOCK_SWAPPER.set(`quark:${stone}_pillar`, `caverns_and_chasms:${stone}_pillar`)
        if (extras) {
            global.BLOCK_SWAPPER.set(`quark:chiseled_${stone}_bricks`, `caverns_and_chasms:chiseled_${stone}_bricks`)
            global.BLOCK_SWAPPER.set(`quark:${stone == 'dripstone' ? stone + '_block' : stone}_slab`, `caverns_and_chasms:${stone}_slab`)
            global.BLOCK_SWAPPER.set(`quark:${stone == 'dripstone' ? stone + '_block' : stone}_stairs`, `caverns_and_chasms:${stone}_stairs`)
            //global.BLOCK_SWAPPER.set(`quark:${stone == 'dripstone' ? stone + '_block' : stone}_vertical_slab`, `v_slab_compat:caverns_and_chasms/${stone}_vertical_slab`)
            global.BLOCK_SWAPPER.set(`quark:${stone == 'dripstone' ? stone + '_block' : stone}_wall`, `caverns_and_chasms:${stone}_wall`)
            global.BLOCK_SWAPPER.set(`quark:polished_${stone}`, `caverns_and_chasms:polished_${stone}`)
            global.BLOCK_SWAPPER.set(`quark:polished_${stone}_slab`, `caverns_and_chasms:polished_${stone}_slab`)
            global.BLOCK_SWAPPER.set(`quark:polished_${stone}_vertical_slab`, `v_slab_compat:create/polished_cut_${stone}_vertical_slab`)
            global.BLOCK_SWAPPER.set(`quark:polished_${stone}_stairs`, `caverns_and_chasms:polished_${stone}_stairs`)
        }
    }
    swapStone('granite', false)
    swapStone('diorite', false)
    swapStone('andesite', false)
    swapStone('calcite', true)
    swapStone('dripstone', true)
    swapStone('tuff', true)

    // Limestone
    global.BLOCK_SWAPPER.set('quark:limestone', 'natures_spirit:travertine')
    global.BLOCK_SWAPPER.set('quark:limestone_wall', 'natures_spirit:cobbled_travertine_wall')
    global.BLOCK_SWAPPER.set('quark:limestone_slab', 'natures_spirit:travertine_slab')
    global.BLOCK_SWAPPER.set('quark:limestone_vertical_slab', 'v_slab_compat:natures_spirit/travertine_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:limestone_stairs', 'natures_spirit:travertine_stairs')
    global.BLOCK_SWAPPER.set('quark:limestone_pillar', 'stonezone:c/natures_spirit/travertine_pillar')
    global.BLOCK_SWAPPER.set('quark:polished_limestone', 'natures_spirit:polished_travertine')
    global.BLOCK_SWAPPER.set('quark:polished_limestone_slab', 'natures_spirit:polished_travertine_slab')
    global.BLOCK_SWAPPER.set('quark:polished_limestone_vertical_slab', 'v_slab_compat:natures_spirit/polished_travertine_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:polished_limestone_stairs', 'natures_spirit:polished_travertine_stairs')
    global.BLOCK_SWAPPER.set('quark:limestone_bricks', 'natures_spirit:travertine_bricks')
    global.BLOCK_SWAPPER.set('quark:limestone_bricks_wall', 'natures_spirit:travertine_brick_wall')
    global.BLOCK_SWAPPER.set('quark:limestone_bricks_slab', 'natures_spirit:travertine_brick_slab')
    global.BLOCK_SWAPPER.set('quark:limestone_bricks_vertical_slab', 'v_slab_compat:natures_spirit/travertine_brick_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:limestone_bricks_stairs', 'natures_spirit:travertine_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:chiseled_limestone_bricks', 'natures_spirit:chiseled_travertine')
    // Shale
    global.BLOCK_SWAPPER.set('quark:shale', 'windswept:shale')
    global.BLOCK_SWAPPER.set('quark:shale_wall', 'windswept:shale_wall')
    global.BLOCK_SWAPPER.set('quark:shale_slab', 'windswept:shale_slab')
    global.BLOCK_SWAPPER.set('quark:shale_vertical_slab', 'v_slab_compat:windswept/polished_shale_brick_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:shale_stairs', 'windswept:shale_stairs')
    global.BLOCK_SWAPPER.set('quark:shale_pillar', 'stonezone:c/windswept/shale_pillar')
    global.BLOCK_SWAPPER.set('quark:polished_shale', 'windswept:polished_shale')
    global.BLOCK_SWAPPER.set('quark:polished_shale_slab', 'windswept:polished_shale_slab')
    global.BLOCK_SWAPPER.set('quark:polished_shale_vertical_slab', 'v_slab_compat:windswept/polished_shale_brick_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:polished_shale_stairs', 'windswept:polished_shale_stairs')
    global.BLOCK_SWAPPER.set('quark:shale_bricks', 'windswept:polished_shale_bricks')
    global.BLOCK_SWAPPER.set('quark:shale_bricks_wall', 'windswept:polished_shale_brick_wall')
    global.BLOCK_SWAPPER.set('quark:shale_bricks_slab', 'windswept:polished_shale_brick_slab')
    global.BLOCK_SWAPPER.set('quark:shale_bricks_vertical_slab', 'v_slab_compat:windswept/polished_shale_brick_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:shale_bricks_stairs', 'windswept:polished_shale_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:chiseled_shale_bricks', 'windswept:chiseled_polished_shale_bricks')
    // Storage blocks
    global.BLOCK_SWAPPER.set('quark:cocoa_beans_sack', 'packedup:cocoa_bean_bag')
    global.BLOCK_SWAPPER.set('quark:nether_wart_sack', 'packedup:nether_wart_bag')
    global.BLOCK_SWAPPER.set('quark:gunpowder_sack', 'packedup:gunpowder_crate')
    global.BLOCK_SWAPPER.set('quark:berry_sack', 'packedup:sweet_berry_basket')
    global.BLOCK_SWAPPER.set('quark:glowberry_sack', 'packedup:glow_berry_basket')
    global.BLOCK_SWAPPER.set('quark:golden_apple_crate', 'packedup:golden_apple_basket')
    global.BLOCK_SWAPPER.set('quark:apple_crate', 'packedup:apple_basket')
    global.BLOCK_SWAPPER.set('quark:potato_crate', 'farmersdelight:potato_crate')
    global.BLOCK_SWAPPER.set('quark:carrot_crate', 'farmersdelight:carrot_crate')
    global.BLOCK_SWAPPER.set('quark:golden_carrot_crate', 'packedup:golden_carrot_crate')
    global.BLOCK_SWAPPER.set('quark:beetroot_crate', 'farmersdelight:beetroot_crate')
    // Quark Oddities
    global.BLOCK_SWAPPER.set('quark:pipe', 'create:fluid_pipe')

    // Entities
    global.ENTITY_SWAPPER.set('quark:wraith', 'caverns_and_chasms:mime')
    global.ENTITY_SWAPPER.set('quark:foxhound', 'alexsmobs:dropbear')
    global.ENTITY_SWAPPER.set('quark:shiba', 'minecraft:wolf')
    global.ENTITY_SWAPPER.set('quark:crab', 'minecraft:frog')
    global.ENTITY_REMOVALS.push(
        'quark:wraith',
        'quark:foxhound',
        'quark:shiba',
        'quark:crab'
    )

    // Carpets
    global.BLOCK_SWAPPER.set('quark:red_blossom_leaf_carpet', 'immersive_weathering:natures_spirit/red_maple_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:orange_blossom_leaf_carpet', 'immersive_weathering:natures_spirit/orange_maple_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:yellow_blossom_leaf_carpet', 'immersive_weathering:natures_spirit/yellow_maple_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:blue_blossom_leaf_carpet', 'immersive_weathering:natures_spirit/blue_wisteria_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:lavender_blossom_leaf_carpet', 'immersive_weathering:natures_spirit/purple_wisteria_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:ancient_leaf_carpet', 'immersive_weathering:minecraft/pale_oak_leaf_pile')
    // Hedges
    global.BLOCK_SWAPPER.set('quark:red_blossom_hedge', 'everycomp:q/natures_spirit/red_maple_hedge')
    global.BLOCK_SWAPPER.set('quark:orange_blossom_hedge', 'everycomp:q/natures_spirit/orange_maple_hedge')
    global.BLOCK_SWAPPER.set('quark:yellow_blossom_hedge', 'everycomp:q/natures_spirit/yellow_maple_hedge')
    global.BLOCK_SWAPPER.set('quark:blue_blossom_hedge', 'everycomp:q/natures_spirit/blue_wisteria_hedge')
    global.BLOCK_SWAPPER.set('quark:lavender_blossom_hedge', 'everycomp:q/natures_spirit/purple_wisteria_hedge')
    global.BLOCK_SWAPPER.set('quark:ancient_hedge', 'everycomp:q/minecraft/pale_oak_hedge')
    // Saplings
    global.BLOCK_SWAPPER.set('quark:red_blossom_sapling', 'natures_spirit:red_maple_sapling')
    global.BLOCK_SWAPPER.set('quark:orange_blossom_sapling', 'natures_spirit:orange_maple_sapling')
    global.BLOCK_SWAPPER.set('quark:yellow_blossom_sapling', 'natures_spirit:yellow_maple_sapling')
    global.BLOCK_SWAPPER.set('quark:blue_blossom_sapling', 'natures_spirit:blue_wisteria_sapling')
    global.BLOCK_SWAPPER.set('quark:lavender_blossom_sapling', 'natures_spirit:purple_wisteria_sapling')
    global.BLOCK_SWAPPER.set('quark:ancient_sapling', 'minecraft:pale_oak_sapling')
    // Potted Saplings
    global.BLOCK_SWAPPER.set('quark:potted_red_blossom_sapling', 'natures_spirit:potted_red_maple_sapling')
    global.BLOCK_SWAPPER.set('quark:potted_orange_blossom_sapling', 'natures_spirit:potted_orange_maple_sapling')
    global.BLOCK_SWAPPER.set('quark:potted_yellow_blossom_sapling', 'natures_spirit:potted_yellow_maple_sapling')
    global.BLOCK_SWAPPER.set('quark:potted_blue_blossom_sapling', 'natures_spirit:potted_blue_wisteria_sapling')
    global.BLOCK_SWAPPER.set('quark:potted_lavender_blossom_sapling', 'natures_spirit:potted_purple_wisteria_sapling')
    global.BLOCK_SWAPPER.set('quark:potted_ancient_sapling', 'minecraft:potted_pale_oak_sapling')
    // Leaves
    global.BLOCK_SWAPPER.set('quark:red_blossom_leaves', 'natures_spirit:red_maple_leaves')
    global.BLOCK_SWAPPER.set('quark:orange_blossom_leaves', 'natures_spirit:orange_maple_leaves')
    global.BLOCK_SWAPPER.set('quark:yellow_blossom_leaves', 'natures_spirit:yellow_maple_leaves')
    global.BLOCK_SWAPPER.set('quark:blue_blossom_leaves', 'natures_spirit:blue_wisteria_leaves')
    global.BLOCK_SWAPPER.set('quark:lavender_blossom_leaves', 'natures_spirit:purple_wisteria_leaves')
    global.BLOCK_SWAPPER.set('quark:ancient_leaves', 'minecraft:pale_oak_leaves')

    // Swap Quark wooden blocks to woodworks variants
    for (const [woodType, woodTypeObj] of Object.entries(global.WOOD_TYPES.minecraft)) {
        if (woodType == 'pale_oak') continue
        global.BLOCK_SWAPPER.set('quark:' + woodType + '_chest', woodTypeObj.woodworks.chest)
        global.BLOCK_SWAPPER.set('quark:' + woodType + '_trapped_chest', woodTypeObj.woodworks.trapped_chest)
        if (woodType != 'oak') {
            global.BLOCK_SWAPPER.set('quark:' + woodType + '_bookshelf', woodTypeObj.woodworks.bookshelf)
            global.BLOCK_SWAPPER.set('quark:' + woodType + '_ladder', woodTypeObj.woodworks.ladder)
        }
    }

    for (const woodType in woodTypesToConstruct.quark) {
        if (woodTypesToConstruct.quark[woodType]) continue  // Skip enabled wood types
        global.DISABLED_WOOD_TYPES.quark[woodType].woodworks.chest = 'quark:' + woodType + '_chest'
        global.DISABLED_WOOD_TYPES.quark[woodType].woodworks.trapped_chest = 'quark:' + woodType + '_trapped_chest'
        global.DISABLED_WOOD_TYPES.quark[woodType].woodworks.bookshelf = 'quark:' + woodType + '_bookshelf'
        global.DISABLED_WOOD_TYPES.quark[woodType].woodworks.ladder = 'quark:' + woodType + '_ladder'
    }

    swapWoodType(global.DISABLED_WOOD_TYPES.quark.blossom, global.WOOD_TYPES.environmental.plum)
    swapWoodType(global.DISABLED_WOOD_TYPES.quark.azalea, global.WOOD_TYPES.caverns_and_chasms.azalea)
    swapWoodType(global.DISABLED_WOOD_TYPES.quark.ancient, global.WOOD_TYPES.minecraft.pale_oak)
}