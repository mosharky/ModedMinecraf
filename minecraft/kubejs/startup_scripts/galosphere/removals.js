function removals_Galosphere() {
    global.REMOVALS.add([
        'galosphere:silver_block',
        'galosphere:silver_panel',
        'galosphere:silver_panel_stairs',
        'galosphere:silver_panel_slab',
        'galosphere:silver_tiles',
        'galosphere:silver_tiles_stairs',
        'galosphere:silver_tiles_slab',
        'galosphere:silver_lattice',
        'galosphere:raw_silver_block',
        'galosphere:raw_silver',
        'galosphere:silver_nugget',
        'galosphere:silver_ingot',
        'galosphere:silver_ore',
        'galosphere:deepslate_silver_ore',
    ])

    global.ITEM_SWAPPER.set('galosphere:silver_block', 'caverns_and_chasms:silver_block')
    global.ITEM_SWAPPER.set('galosphere:silver_panel', 'caverns_and_chasms:silver_bricks')
    global.ITEM_SWAPPER.set('galosphere:silver_panel_stairs', 'caverns_and_chasms:silver_brick_stairs')
    global.ITEM_SWAPPER.set('galosphere:silver_panel_slab', 'caverns_and_chasms:silver_brick_slab')
    global.ITEM_SWAPPER.set('galosphere:silver_tiles', 'caverns_and_chasms:silver_bricks')
    global.ITEM_SWAPPER.set('galosphere:silver_tiles_stairs', 'caverns_and_chasms:silver_brick_stairs')
    global.ITEM_SWAPPER.set('galosphere:silver_tiles_slab', 'caverns_and_chasms:silver_brick_slab')
    global.ITEM_SWAPPER.set('galosphere:silver_lattice', 'caverns_and_chasms:silver_bars')
    global.ITEM_SWAPPER.set('galosphere:raw_silver', 'caverns_and_chasms:raw_silver')
    global.ITEM_SWAPPER.set('galosphere:silver_ingot', 'caverns_and_chasms:silver_ingot')
    global.ITEM_SWAPPER.set('galosphere:silver_nugget', 'caverns_and_chasms:silver_nugget')

    global.BLOCK_SWAPPER.set('galosphere:raw_silver_block', 'caverns_and_chasms:raw_silver_block')
}