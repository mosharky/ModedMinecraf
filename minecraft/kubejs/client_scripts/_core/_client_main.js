// priority: -1
ItemEvents.tooltip(e => {
    e.add(global.REMOVALS.arr, Text.red('DISABLED. Report to momo if you obtained this.').append(Text.darkGray('\nThis item is supposed to be replaced; ignore if found in a menu').italic()))
    e.add('quark:crate', Text.red('WARNING: RANDOMLY REMOVES ITEMS STORED IN IT').bold())
    /*
    e.add([
        'scguns:gun_bench',
        'scguns:macerator',
        'scguns:mechanical_press',
        'scguns:powered_macerator',
        'scguns:powered_mechanical_press',
    ], Text.gray('Use Create instead ;)').italic())
    */
})

JEIEvents.removeCategories(e => {
    e.remove('woodworks:sawmill')
})

JEIEvents.information(e => {
    e.addItem('kubejs:ravager_hide', 'Obtained by killing a Ravager.')
    e.addItem('miners_delight:silverfish_eggs', 'Obtained by killing a Silverfish with a knife.')
})

ClientEvents.highPriorityAssets(e => {
    clientData_EMI(e)
    clientData_Quark(e)
    clientData_EMIxx(e)
    clientData_Sounds(e)
})
