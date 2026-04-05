global.COMMON_SWAPPER.forEach((replaceWith, toReplace) => {
    PlayerEvents.inventoryChanged(toReplace, e => {
        const slot = e.player.inventory.find(toReplace)
        const stack = e.player.inventory.getStackInSlot(slot)
        e.player.inventory.setStackInSlot(slot, Item.of(replaceWith, stack.count))
        e.player.tell([
            Text.gray('An item in your inventory, '),
            Text.red(prettyItem(toReplace)),
            Text.gray(' has been replaced with '),
            Text.green(prettyItem(replaceWith)),
            Text.gray('!')
        ])
    })
})

PlayerEvents.loggedIn(e => {
    if (!e.hasGameStage('starter_items')) {
        e.addGameStage('starter_items')
        e.player.addItem(
            Item.of('akashictome:tome', '{"akashictome:data":{ae2:{Count:1,id:"ae2:guide"},aether:{Count:1,id:"aether:book_of_lore"},alexscaves:{Count:1,id:"alexscaves:cave_book",tag:{"akashictome:displayName":{text:\'{"translate":"item.alexscaves.cave_book"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.alexscaves.cave_book"}]}\'}}},alexsmobs:{Count:1,id:"alexsmobs:animal_dictionary",tag:{"akashictome:displayName":{text:\'{"translate":"item.alexsmobs.animal_dictionary"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.alexsmobs.animal_dictionary"}]}\'}}},botania:{Count:1,id:"botania:lexicon",tag:{"akashictome:displayName":{text:\'{"translate":"item.botania.lexicon"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.botania.lexicon"}]}\'}}},cobbledex:{Count:1,id:"cobbledex:cobbledex_item",tag:{"akashictome:displayName":{text:\'{"translate":"item.cobbledex.cobbledex_item"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.cobbledex.cobbledex_item"}]}\'}}},cobblepedia:{Count:1,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"book.cobblepedia"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"book.cobblepedia"}]}\'},"patchouli:book":"cobblepedia:cobblepedia"}},embers:{Count:1,id:"embers:ancient_codex"},goety:{Count:1,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"info.goety.witch_brew.title"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"info.goety.witch_brew.title"}]}\'},"patchouli:book":"goety:witches_brew"}},goety_0:{Count:1,id:"patchouli:guide_book",tag:{"akashictome:definedMod":"goety_0","akashictome:displayName":{text:\'{"translate":"info.goety.black_book.title"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"info.goety.black_book.title"}]}\'},"patchouli:book":"goety:black_book"}},malum:{Count:1,id:"malum:encyclopedia_arcana",tag:{"akashictome:displayName":{text:\'{"translate":"item.malum.encyclopedia_arcana"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.malum.encyclopedia_arcana"}]}\'}}},megamons:{Count:1,id:"patchouli:guide_book",tag:{"patchouli:book":"megamons:megamons_guide"}},unusual_prehistory:{Count:1,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"unusual_prehistory.patchouli.book.name"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"unusual_prehistory.patchouli.book.name"}]}\'},"patchouli:book":"unusual_prehistory:paleopedia"}}},"akashictome:is_morphing":1b}')
        )
    }
})