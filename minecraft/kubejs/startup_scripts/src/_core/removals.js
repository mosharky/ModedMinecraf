function removals_Core() {
    global.STRUCTURE_BLOCK_SWAPPER.set(/(minecraft|savage_and_ravage):(pillager_outpost|woodland_mansion).*/, new Map([
        ['minecraft:chest', 'woodworks:dark_oak_chest'],
        ['minecraft:trapped_chest', 'woodworks:dark_oak_trapped_chest'],
    ]))

    global.STRUCTURE_BLOCK_SWAPPER.set(/minecraft:shipwreck.*/, new Map([
        ['minecraft:chest', 'woodworks:oak_chest'],
        ['minecraft:trapped_chest', 'woodworks:oak_chest'],
    ]))

    global.STRUCTURE_BLOCK_SWAPPER.set(/minecraft:bastion.*/, new Map([
        ['minecraft:chest', 'woodworks:crimson_chest'],
        ['minecraft:trapped_chest', 'woodworks:crimson_chest'],
    ]))

    // vanilla backport
    global.REMOVALS.add([
        'minecraft:leaf_litter',
        'minecraft:short_dry_grass',
        'minecraft:tall_dry_grass',
    ])
}