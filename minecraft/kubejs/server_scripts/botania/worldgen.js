/** @param {$DataPackEventJS} e */
function worldgen_Botania(e) {
    removeBiomeModifier(e, 'botania:add_mystical_flowers')
    removeBiomeModifier(e, 'botania:add_mystical_mushrooms')
    removeBiomeModifier(e, 'botania:remove_mystical_flowers')
    removeBiomeModifier(e, 'botania:remove_mystical_mushrooms')
}