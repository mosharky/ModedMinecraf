function removals_Incubation() {
    global.REMOVALS.add([
        'incubation:fried_egg',
        'incubation:chicken_egg_crate',
    ])

    global.ITEM_SWAPPER.set('incubation:fried_egg', 'farmersdelight:fried_egg')
}