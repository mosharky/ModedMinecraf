/** @param {$LootModificationEventJS} e */
function lootTables_OddsNEnds(e) {
    const wildFlax = ['oddsnends:flax_flowers', 'oddsnends:dried_flax_flowers'].forEach(flax => {
        e.addBlockLootModifier(flax)
            .removeLoot(Ingredient.all)
            .addAlternativesLoot(
                LootEntry.of(flax).when(c => c.matchMainHand(ForgeItemFilter.canPerformAction('shears_dig'))),
                LootEntry.of('oddsnends:flax_seeds').when(c => c.randomChance(0.66))
            )
    })
}