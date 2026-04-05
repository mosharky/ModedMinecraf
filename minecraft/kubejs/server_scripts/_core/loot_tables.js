/** @param {$LootActionsBuilderJS} all */
function lootReplacements_Core(all) {
    global.COMMON_SWAPPER.forEach((value, key) => {
        all.replaceLoot(key, value, true)
    })
}

/** @param {$LootModificationEventJS} e */
function lootTables_Core(e) {
    e.addEntityLootModifier('minecraft:ravager').addLoot('kubejs:ravager_hide')
    e.addEntityLootModifier('goety:ravager').addLoot('kubejs:ravager_hide')
    e.addEntityLootModifier('goety:trampler').addLoot('kubejs:ravager_hide')
}