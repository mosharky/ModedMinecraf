function removals_Supplementaries() {
    global.REMOVALS.add([
        'supplementaries:wild_flax',
        'supplementaries:flax_seeds',
        'supplementaries:flax_block',
        'supplementaries:flax',
    ])

    global.BLOCK_SWAPPER.set('supplementaries:flax', 'oddsnends:flax_crop')
    global.BLOCK_SWAPPER.set('supplementaries:wild_flax', 'oddsnends:flax_flowers')
    global.BLOCK_SWAPPER.set('supplementaries:flax_block', 'oddsnends:flax_bale')

    global.ITEM_SWAPPER.set('supplementaries:wild_flax', 'oddsnends:flax_flowers')
    global.ITEM_SWAPPER.set('supplementaries:flax_seeds', 'oddsnends:flax_seeds')
    global.ITEM_SWAPPER.set('supplementaries:flax', 'oddsnends:flax_fibers')
    global.ITEM_SWAPPER.set('supplementaries:flax_block', 'oddsnends:flax_bale')
}