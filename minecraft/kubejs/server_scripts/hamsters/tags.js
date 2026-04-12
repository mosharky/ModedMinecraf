/** @param {$TagEventJS} e  */
function itemTags_Hamsters(e) {
    e.add('hamsters:hamster_food', [
        'oddsnends:flax_seeds'
    ])
}

/** @param {$TagEventJS} e  */
function biomeTags_Hamsters(e) {
    e.removeAll('hamsters:has_hamster')
    e.add('hamsters:has_hamster', [
        'natures_spirit:xeric_plains',
        'natures_spirit:cedar_thicket',
        'natures_spirit:carnation_fields',
        'natures_spirit:chaparral',
        'minecraft:meadow'
    ])
}