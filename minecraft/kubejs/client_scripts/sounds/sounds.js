/** @param {$GenerateClientAssetsEventJS} e */
function clientData_Sounds(e) {
    const blockSound = (block, group) => {
        e.add(`minecraft:sounds/blocks/${block}`, {
            enabled: true,
            group: {
                volume: group.volume != undefined ? group.volume : 1.0,
                pitch: group.pitch != undefined ? group.pitch : 1.0,
                break: { sound_id: group.break != undefined ? group.break : `sounds:block.${block}.break` },
                fall: { sound_id: group.fall != undefined ? group.fall : `sounds:block.${block}.fall` },
                hit: { sound_id: group.hit != undefined ? group.hit : `sounds:block.${block}.hit` },
                place: { sound_id: group.place != undefined ? group.place : `sounds:block.${block}.place` },
                step: { sound_id: group.step != undefined ? group.step : `sounds:block.${block}.step` },
            },
            keys: [`#kubejs:sounds/${block}`]
        })
    }

    blockSound('acacia_leaves', {})
    blockSound('acacia_log', {})
    blockSound('acacia_planks', {})
    blockSound('birch_leaves', {})
    blockSound('birch_log', {})
    blockSound('birch_planks', {})
    blockSound('cobblestone', {})
    blockSound('copper_ore', {})
    blockSound('deepslate_gold_ore', {})
    blockSound('deepslate_iron_ore', {})
    blockSound('gold_ore', {})
    blockSound('ice', {})
    blockSound('iron_ore', {})
    blockSound('jungle_leaves', {})
    blockSound('magma_block', {})
    blockSound('mangrove_leaves', {})
    blockSound('mangrove_log', {})
    blockSound('mangrove_planks', {})
    blockSound('oak_log', {})
    blockSound('packed_ice', {})
    blockSound('raw_gold_block', {})
    blockSound('spruce_leaves', {})
    blockSound('spruce_log', {})
    blockSound('spruce_planks', {})

    blockSound('barrel', { break: 'minecraft:block.wood.break', fall: 'minecraft:block.wood.fall' })
    blockSound('beehive', { volume: 1.5, fall: 'minecraft:block.wood.fall', step: 'sounds:block.bookshelf.step' })
    blockSound('bookshelf', { volume: 1.5, fall: 'minecraft:block.wood.fall' })
    blockSound('chest', { 
        volume: 1.5, 
        break: 'minecraft:block.wood.break', 
        fall: 'minecraft:block.wood.fall',
        place: 'sounds:block.barrel.place',
    })
    blockSound('clay', { fall: 'minecraft:block.mod.fall' })
    blockSound('clay_bricks', {
        pitch: 1.5,
        break: 'minecraft:block.nether_bricks.break',
        fall: 'minecraft:block.nether_bricks.fall',
        hit: 'minecraft:block.nether_bricks.hit',
        place: 'minecraft:block.nether_bricks.place',
        step: 'minecraft:block.nether_bricks.step'
    })
    blockSound('dark_prismarine', {
        break: 'minecraft:block.deepslate_tiles.break',
        fall: 'minecraft:block.deepslate_tiles.fall',
        hit: 'minecraft:block.deepslate_tiles.hit',
        place: 'minecraft:block.deepslate_tiles.place',
        step: 'minecraft:block.deepslate_tiles.step'
    })
    blockSound('deepslate_copper_ore', { break: 'sounds:block.copper_ore.break' })
    blockSound('emerald_block', {
        pitch: 1.2,
        break: 'minecraft:block.bone_block.break',
        fall: 'minecraft:block.bone_block.fall',
        hit: 'minecraft:block.bone_block.hit',
        place: 'sounds:block.quartz.place',
        step: 'minecraft:block.bone_block.step'
    })
    blockSound('end_stone', {
        volume: 0.9,
        pitch: 0.8,
        break: 'sounds:block.quartz.break',
        fall: 'minecraft:block.stone.fall',
        hit: 'minecraft:block.stone.hit',
        place: 'sounds:block.quartz.place',
        step: 'sounds:block.quartz.step'
    })
    blockSound('end_stone_bricks', {
        break: 'minecraft:block.deepslate_bricks.break',
        fall: 'minecraft:block.deepslate_bricks.fall',
        hit: 'minecraft:block.deepslate_bricks.hit',
        place: 'minecraft:block.deepslate_bricks.place',
        step: 'sounds:block.quartz.step'
    })
    blockSound('glass', { fall: 'minecraft:block.glass.fall', hit: 'minecraft:block.glass.hit', })
    blockSound('gold', {
        pitch: 1.6,
        break: 'minecraft:block.netherite_block.break',
        fall: 'minecraft:block.netherite_block.fall',
        hit: 'minecraft:block.netherite_block.hit',
        place: 'minecraft:block.netherite_block.place',
        step: 'sounds:block.gold_block.step'
    })
    blockSound('gravel', { fall: 'minecraft:block.gravel.fall' })
    blockSound('hay_block', { fall: 'minecraft:block.tuff.fall' })
    blockSound('iron', {
        pitch: 1.2,
        break: 'minecraft:block.netherite_block.break',
        fall: 'minecraft:block.netherite_block.fall',
        hit: 'minecraft:block.netherite_block.hit',
        place: 'minecraft:block.netherite_block.place',
        step: 'sounds:block.iron_block.step'
    })
    blockSound('jungle_planks', { hit: 'sounds:blocks.spruce_planks.hit' })
    blockSound('lapis_block', {
        pitch: 1.2,
        break: 'minecraft:block.bone_block.break',
        fall: 'minecraft:block.bone_block.fall',
        hit: 'minecraft:block.bone_block.hit',
        place: 'minecraft:block.quartz.place',
        step: 'minecraft:block.bone_block.step'
    })
    blockSound('loom', { fall: 'minecraft:block.wood.fall' })
    blockSound('mossy_cobblestone', { fall: 'sounds:block.cobblestone.fall', place: 'sounds:block.cobblestone.place' })
    blockSound('mossy_stone_bricks', { break: 'sounds:block.mossy_cobblestone.break', place: 'minecraft:block.deepslate_brick.place' })
    blockSound('obsidian', {
        pitch: 0.7,
        break: 'minecraft:block.deepslate.break',
        fall: 'minecraft:block.deepslate.fall',
        hit: 'minecraft:block.deepslate.hit',
        place: 'minecraft:block.deepslate.place',
        step: 'minecraft:block.deepslate.step'
    })
    blockSound('prismarine', {
        break: 'minecraft:block.deepslate.break',
        fall: 'minecraft:block.deepslate.fall',
        hit: 'minecraft:block.deepslate.hit',
        place: 'minecraft:block.deepslate.place',
        step: 'minecraft:block.deepslate.step'
    })
    blockSound('quartz', {
        fall: 'minecraft:block.deepslate.fall',
        hit: 'minecraft:block.stone.hit',
        place: 'minecraft:block.deepslate.place',
    })
    blockSound('sandstone', {
        break: 'minecraft:block.tuff.break',
        fall: 'minecraft:block.tuff.fall',
        hit: 'minecraft:block.tuff.hit',
        place: 'minecraft:block.tuff.place',
    })
    blockSound('sheet_metal', {
        pitch: 1.2,
        fall: 'minecraft:block.netherite_block.fall',
        hit: 'minecraft:block.netherite_block.hit',
        place: 'minecraft:block.netherite_block.place',
    })
    blockSound('spruce_object', {
        fall: 'sounds:block.spruce_planks.fall',
        hit: 'sounds:block.spruce_planks.hit',
        step: 'sounds:block.spruce_planks.step',
    })
    blockSound('stone_bricks', { break: 'sounds:block.cobblestone.break', place: 'minecraft:block.deepslate_bricks.place', })
    blockSound('terracotta', {
        pitch: 0.6,
        break: 'minecraft:block.calcite.break',
        fall: 'minecraft:block.calcite.fall',
        hit: 'minecraft:block.calcite.hit',
        place: 'minecraft:block.calcite.place',
        step: 'minecraft:block.calcite.step'
    })

    // not doing these for now, just use plank sounds
    // blockSound('acacia_object')
    // blockSound('birch_object')
    // blockSound('jungle_object')
    // blockSound('mangrove_object')
}