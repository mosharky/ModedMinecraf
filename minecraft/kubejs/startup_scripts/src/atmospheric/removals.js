function removals_Atmospheric() {
    global.REMOVALS.add([
        // TODO: Remove woods from compat stuff (Supplementaries, everycomp, etc)
        /atmospheric:.*aspen.*/,
        /atmospheric:.*leaf_pile.*/,
        /atmospheric:.*travertine.*/,
    ])

    structureSwapChest(/atmospheric:arid_garden.*/, 'atmospheric:laurel')
    structureSwapChest('atmospheric:kousa_sanctum', 'atmospheric:kousa')
}