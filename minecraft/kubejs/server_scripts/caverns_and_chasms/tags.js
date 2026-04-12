/** @param {$TagEventJS} e */
function itemTags_CavernsAndChasms(e) {
    e.remove('forge:ingots/copper', 'caverns_and_chasms:waxed_copper_ingot')
}

/** @param {$TagEventJS} e */
function biomeTags_CavernsAndChasms(e) {
    e.add('caverns_and_chasms:has_animal/glare', [
        'darkerdepths:glowshroom_forest',
        'galosphere:lichen_caves'
    ])

    e.add('caverns_and_chasms:has_feature/soul_silver_ore', [
        'gardens_of_the_dead:soulblight_forest'
    ])

    e.add('caverns_and_chasms:has_feature/spinel_ore', [
        'darkerdepths:glowshroom_forest',
        'galosphere:lichen_caves'
    ])
}