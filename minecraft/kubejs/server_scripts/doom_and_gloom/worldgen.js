/** @param {$DataPackEventJS} e */
function worldgen_DoomAndGloom(e) {
    removeBiomeModifier(e, 'doom_and_gloom:spawn_holler')
    addSpawn(e, '#minecraft:is_overworld', 'doom_and_gloom:holler', 1, 1, 1)
}
