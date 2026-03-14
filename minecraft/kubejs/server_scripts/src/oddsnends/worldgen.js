/** @param {$DataPackEventJS_} e  */
function worldgen_OddsNEnds(e) {
    removeBiomeModifier(e, 'oddsnends:shale_disk')

    removeBiomeModifier(e, 'oddsnends:patch_algae')
    addFeatures(e, 'oddsnends:patch_algae', 'minecraft:lush_caves', VEGETAL_DECORATION)

    // fix ciderine tree placement by adding wouldSurvive
    registerFeature(e, PLACED, 'oddsnends:ciderine_tree', {
        feature: 'oddsnends:lush_ciderine_tree',
        placement: [
            { type: 'minecraft:in_square' },
            { type: 'minecraft:rarity_filter', chance: 55 },
            { type: 'minecraft:heightmap', heightmap: 'MOTION_BLOCKING_NO_LEAVES' },
            { type: 'minecraft:biome' },
            wouldSurvive('oddsnends:ciderine_sapling')
        ]
    })

    // way too common
    registerFeature(e, PLACED, 'oddsnends:patch_flax_flowers', {
        feature: 'oddsnends:patch_flax_flowers',
        placement: [
            { type: 'minecraft:rarity_filter', chance: 20 },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:heightmap', heightmap: 'MOTION_BLOCKING' },
            { type: 'minecraft:biome' }
        ]
    })
    registerFeature(e, PLACED, 'oddsnends:patch_giant_padma', {
        feature: 'oddsnends:patch_giant_padma',
        placement: [
            { type: 'minecraft:rarity_filter', chance: 24 },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:heightmap', heightmap: 'MOTION_BLOCKING' },
            { type: 'minecraft:biome' }
        ]
    })
    registerFeature(e, PLACED, 'oddsnends:patch_rusty_clovers', {
        feature: 'oddsnends:patch_rusty_clovers',
        placement: [
            { type: 'minecraft:rarity_filter', chance: 16 },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:heightmap', heightmap: 'MOTION_BLOCKING' },
            { type: 'minecraft:biome' }
        ]
    })
    registerFeature(e, PLACED, 'oddsnends:patch_trapped_rusty_clovers', {
        feature: 'oddsnends:patch_trapped_rusty_clovers',
        placement: [
            { type: 'minecraft:rarity_filter', chance: 16 },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:heightmap', heightmap: 'MOTION_BLOCKING' },
            { type: 'minecraft:biome' }
        ]
    })
    registerFeature(e, PLACED, 'oddsnends:cave_branches', {
        feature: 'oddsnends:patch_cave_branches',
        placement: [
            { type: 'minecraft:rarity_filter', chance: 16 },
            { type: 'minecraft:in_square' },
            {
                type: 'minecraft:height_range',
                height: {
                    type: 'minecraft:uniform',
                    max_inclusive: { absolute: 20 },
                    min_inclusive: { above_bottom: -60 }
                }
            },
            { type: 'minecraft:biome' }
        ]
    })
    registerFeature(e, PLACED, 'oddsnends:wild_laco', {
        feature: 'oddsnends:patch_wild_laco',
        placement: [
            { type: 'minecraft:rarity_filter', chance: 16 },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:heightmap', heightmap: 'MOTION_BLOCKING' },
            { type: 'minecraft:biome' }
        ]
    })
}