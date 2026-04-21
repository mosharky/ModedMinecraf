/** @param {$TagEventJS} e  */
function itemTags_Cataclysm(e) {
    e.add('curios:ring', 'cataclysm:ring_of_grudged')
    e.remove('curios:rings', 'cataclysm:ring_of_grudged')

    e.add('curios:charm', 'cataclysm:unbreakable_skull')
    e.remove('curios:talisman', 'cataclysm:unbreakable_skull')
}

/** @param {$TagEventJS} e  */
function structureTags_Cataclysm(e) {
    e.add('cataclysm:berserker_spawn', [
        'minecraft:fortress',
        'betterfortresses:fortress'
    ])
}