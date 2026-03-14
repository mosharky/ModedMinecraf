// PlayerEvents.inventoryChanged('minecraft:enchanted_book', e => {
//     const slot = e.player.inventory.find('minecraft:enchanted_book')
//     const enchantedBook = e.player.inventory.getStackInSlot(slot)
//     if (enchantedBook.hasNBT()) {
//         const enchantment = enchantedBook.nbt.StoredEnchantments[0].id
//         if (enchantment != undefined) {
//             const ancientBook = Item.of('immersiveenchanting:ancient_book', `{"immersiveenchanting:ancient_book_enchantment_type":"${enchantment}"}`)
//             e.player.inventory.setStackInSlot(slot, ancientBook)
//         }
//     }
// })

PlayerEvents.loggedIn(e => {
    if (!e.hasGameStage('starter_items')) {
        e.addGameStage('starter_items')
        e.player.addItem(Item.of('akashictome:tome', '{"akashictome:data":{ae2:{Count:1,id:"ae2:guide"},aether:{Count:1,id:"aether:book_of_lore"},alexscaves:{Count:1,id:"alexscaves:cave_book"},alexsmobs:{Count:1,id:"alexsmobs:animal_dictionary",tag:{"akashictome:displayName":{text:\'{"translate":"item.alexsmobs.animal_dictionary"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.alexsmobs.animal_dictionary"}]}\'}}},cobbledex:{Count:1,id:"cobbledex:cobbledex_item",tag:{"akashictome:displayName":{text:\'{"translate":"item.cobbledex.cobbledex_item"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.cobbledex.cobbledex_item"}]}\'}}},cobblepedia:{Count:1,id:"patchouli:guide_book",tag:{"patchouli:book":"cobblepedia:cobblepedia"}},goety:{Count:1,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"info.goety.witch_brew.title"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"info.goety.witch_brew.title"}]}\'},"patchouli:book":"goety:witches_brew"}},goety_0:{Count:1,id:"patchouli:guide_book",tag:{"akashictome:definedMod":"goety_0","akashictome:displayName":{text:\'{"translate":"info.goety.black_book.title"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"info.goety.black_book.title"}]}\'},"patchouli:book":"goety:black_book"}},malum:{Count:1,id:"malum:encyclopedia_arcana",tag:{"akashictome:displayName":{text:\'{"translate":"item.malum.encyclopedia_arcana"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.malum.encyclopedia_arcana"}]}\'}}},megamons:{Count:1,id:"patchouli:guide_book",tag:{"patchouli:book":"megamons:megamons_guide"}},unusual_prehistory:{Count:1,id:"patchouli:guide_book",tag:{"patchouli:book":"unusual_prehistory:paleopedia"}}},"akashictome:is_morphing":1b}'))
    }
})