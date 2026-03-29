/** @param {$RecipesEventJS} e */
function recipes_Core(e) {
    e.replaceInput({ not: { id: 'woodworks:trapped_chest' } }, 'minecraft:chest', '#forge:chests/wooden')

    e.remove({ id: 'minecraft:lodestone' })

    // Logs into chests
    for (const [mod, woodTypes] of Object.entries(global.WOOD_TYPES)) {
        for (const [woodType, woodTypeObj] of Object.entries(woodTypes)) {
            if (woodTypeObj.minecraft.log == undefined) break
            if (woodTypeObj.woodworks.chest == undefined) break
            if (woodTypeObj.woodworks.trapped_chest == undefined) break
            e.shaped(Item.of(woodTypeObj.woodworks.chest, 4), [
                'AAA',
                'A A',
                'AAA'],
                { A: woodTypeObj.minecraft.log })

            e.shaped(Item.of(woodTypeObj.woodworks.trapped_chest, 4), [
                'AAA',
                'ABA',
                'AAA'],
                {
                    A: woodTypeObj.minecraft.log,
                    B: 'minecraft:tripwire_hook'
                })
        }
    }

    e.shaped('backpacked:backpack', [
        ' A ',
        'BCB',
        'DDD'
    ], {
        A: 'kubejs:ravager_hide',
        B: '#c:string',
        C: '#forge:ingots/iron',
        D: 'minecraft:leather'
    }).id('backpacked:backpack')

    e.shapeless(
        Item.of('akashictome:tome', '{"akashictome:data":{ae2:{Count:1,id:"ae2:guide"},aether:{Count:1,id:"aether:book_of_lore"},alexscaves:{Count:1,id:"alexscaves:cave_book",tag:{"akashictome:displayName":{text:\'{"translate":"item.alexscaves.cave_book"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.alexscaves.cave_book"}]}\'}}},alexsmobs:{Count:1,id:"alexsmobs:animal_dictionary",tag:{"akashictome:displayName":{text:\'{"translate":"item.alexsmobs.animal_dictionary"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.alexsmobs.animal_dictionary"}]}\'}}},cobbledex:{Count:1,id:"cobbledex:cobbledex_item",tag:{"akashictome:displayName":{text:\'{"translate":"item.cobbledex.cobbledex_item"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.cobbledex.cobbledex_item"}]}\'}}},cobblepedia:{Count:1,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"book.cobblepedia"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"book.cobblepedia"}]}\'},"patchouli:book":"cobblepedia:cobblepedia"}},embers:{Count:1,id:"embers:ancient_codex"},goety:{Count:1,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"info.goety.witch_brew.title"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"info.goety.witch_brew.title"}]}\'},"patchouli:book":"goety:witches_brew"}},goety_0:{Count:1,id:"patchouli:guide_book",tag:{"akashictome:definedMod":"goety_0","akashictome:displayName":{text:\'{"translate":"info.goety.black_book.title"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"info.goety.black_book.title"}]}\'},"patchouli:book":"goety:black_book"}},malum:{Count:1,id:"malum:encyclopedia_arcana",tag:{"akashictome:displayName":{text:\'{"translate":"item.malum.encyclopedia_arcana"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.malum.encyclopedia_arcana"}]}\'}}},megamons:{Count:1,id:"patchouli:guide_book",tag:{"patchouli:book":"megamons:megamons_guide"}},unusual_prehistory:{Count:1,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"unusual_prehistory.patchouli.book.name"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"unusual_prehistory.patchouli.book.name"}]}\'},"patchouli:book":"unusual_prehistory:paleopedia"}}},"akashictome:is_morphing":1b}'),
        ['minecraft:book', 'minecraft:dirt']
    )
}