/** @param {$DataPackEventJS} e */
function worldgen_CollectorsReap(e) {
    removeBiomeModifier(e, 'collectorsreap:chieftain_crab')
    addSpawn(e, '#collectorsreap:has_spawn/chieftain_crab', 'collectorsreap:chieftain_crab', 1, 1, 3)
}