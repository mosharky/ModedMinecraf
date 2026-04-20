function removals_Goety() {
    global.REMOVALS.add([
        /goety:.*pine.*/,
        'goety:ice_cube',
        // /goety:jade_(ore|tiles|block|pillar|stairs|slab)/,
        // 'goety:jade'
        'goety:snow_bricks',
        'goety:snow_brick_slab',
        'goety:snow_brick_stairs',
        'goety:snow_brick_wall',
        'v_slab_compat:goety/snow_brick_vertical_slab',
    ])

    global.ITEM_SWAPPER.set('goety:ice_cube', 'neapolitan:ice_cubes')
    // global.ITEM_SWAPPER.set('goety:jade', 'call_of_yucutan:jade')

    // global.BLOCK_SWAPPER.set('goety:jade_ore', 'call_of_yucutan:jade_ore')
    // global.BLOCK_SWAPPER.set('goety:jade_tiles', 'call_of_yucutan:jade_tiles')
    // global.BLOCK_SWAPPER.set('goety:jade_block', 'call_of_yucutan:jade_block')
    // global.BLOCK_SWAPPER.set('goety:jade_pillar', 'call_of_yucutan:polished_jade_block')
    // global.BLOCK_SWAPPER.set('goety:jade_stairs', 'call_of_yucutan:jade_stairs')
    // global.BLOCK_SWAPPER.set('goety:jade_slab', 'call_of_yucutan:jade_slab')

    global.BLOCK_SWAPPER.set('goety:compacted_pine_planks', 'windswept:pine_boards')
    global.BLOCK_SWAPPER.set('goety:compacted_pine_slab', 'windswept:pine_slab')
    global.BLOCK_SWAPPER.set('goety:thatched_pine_planks', 'windswept:pine_boards')
    global.BLOCK_SWAPPER.set('goety:pine_lantern', 'minecraft:lantern')
    global.BLOCK_SWAPPER.set('goety:pine_leaves', 'windswept:pine_leaves')
    global.BLOCK_SWAPPER.set('goety:snow_bricks', 'windswept:snow_bricks')
    global.BLOCK_SWAPPER.set('goety:snow_brick_slab', 'windswept:snow_brick_slab')
    global.BLOCK_SWAPPER.set('goety:snow_brick_stairs', 'windswept:snow_brick_stairs')
    global.BLOCK_SWAPPER.set('goety:snow_brick_wall', 'windswept:snow_brick_wall')

    swapWoodType(global.DISABLED_WOOD_TYPES.goety.pine, global.WOOD_TYPES.windswept.pine)
}