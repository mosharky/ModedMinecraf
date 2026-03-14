/** @param {$RecipesEventJS_} e */
function recipes_Supplementaries(e) {
    e.remove('supplementaries:rope')

    e.stonecutting('supplementaries:rope', '#supplementaries:ropes')

    e.replaceInput({}, 'supplementaries:flax', 'oddsnends:flax_fibers')
    e.replaceInput({}, 'supplementaries:flax_block', 'oddsnends:flax_bale')
    e.replaceOutput({}, 'supplementaries:flax_seeds', 'oddsnends:flax_seeds')
}