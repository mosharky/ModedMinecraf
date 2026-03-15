/** @param {$TagEventJS_} e */
function itemTags_OddsNEnds(e) {
    e.add('forge:seeds/flax', 'oddsnends:flax_seeds')
    e.add('forge:crops/flax', 'oddsnends:flax_fibers')

    e.add('forge:crops', [
        'oddsnends:flax_fibers',
        'oddsnends:mandrake'
    ])
    e.add('forge:seeds', [
        'oddsnends:flax_seeds',
        'oddsnends:mandrake_seeds',
    ])
}

/** @param {$TagEventJS_} e */
function biomeTags_OddsNEnds(e) {
    e.add('oddsnends:spawns_ciderine_trees', [
        'natures_spirit:aspen_forest',
        'natures_spirit:fir_forest',
        'natures_spirit:maple_woodlands',
        'natures_spirit:wisteria_forest',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:floral_ridges',
        'natures_spirit:marigold_meadows',
        'natures_spirit:coniferous_covert',
        'natures_spirit:woody_highlands',
        'natures_spirit:shrubby_highlands',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
    ])
    e.add('oddsnends:spawns_field_clovers', [
        'natures_spirit:prairie',
        'natures_spirit:marigold_meadows',
        'natures_spirit:carnation_fields',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:shrubland',
        'natures_spirit:oak_savanna',
        'natures_spirit:aspen_forest',
        'natures_spirit:maple_woodlands',
        'natures_spirit:heather_fields',
        'natures_spirit:floral_ridges',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
        'neapolitan:strawberry_fields',
    ])
    e.add('oddsnends:spawns_flax_flowers', [
        '#minecraft:is_overworld'
    ])
    e.add('oddsnends:spawns_giant_padmas', [
        'natures_spirit:marsh',
        'natures_spirit:tropical_basin',
        'natures_spirit:tropical_shores',
        'natures_spirit:tropical_woods',
        'natures_spirit:sparse_tropical_woods',
        'climaterivers:lukewarm_river',
        'climaterivers:warm_river',
        'atmospheric:rainforest',
        'atmospheric:sparse_rainforest',
        'atmospheric:rainforest_basin',
        'atmospheric:sparse_rainforest_basin'
    ])
    e.add('oddsnends:spawns_rusty_basalt', [
        'darkerdepths:sandy_catacombs'
    ])
    e.add('oddsnends:spawns_rusty_clovers', [
        'natures_spirit:prairie',
        'natures_spirit:marigold_meadows',
        'natures_spirit:carnation_fields',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:shrubland',
        'natures_spirit:oak_savanna',
        'natures_spirit:aspen_forest',
        'natures_spirit:maple_woodlands',
        'natures_spirit:heather_fields',
        'natures_spirit:floral_ridges',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
        'neapolitan:strawberry_fields'
    ])
    e.add('oddsnends:spawns_wild_laco', [
        'natures_spirit:tropical_beach',
        'climaterivers:lukewarm_river',
        'climaterivers:warm_river'
    ])
}