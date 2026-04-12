// EMI++ (EMI Plus Plus)
/** @param {$GenerateClientAssetsEventJS} e */
function clientData_EMIxx(e) {
    function createTagGroup(tag) {
        e.add(`kubejs:stack_groups/${tag.split(':')[1]}`, {
            type: 'emixx:tag',
            tag: tag
        })
    }

    function createItemGroup(itemsArray) {
        let obj = { 
            type: 'emixx:group', 
            contents: [] 
        }
        itemsArray.forEach(item => {
            let contentObj = { type: '', id: '' } 
            if (item.charAt(0) == '#') contentObj.type = 'tag'  // idk if this would even work
            else contentObj.type = 'item'
            contentObj.id = item
            obj.contents.push(contentObj)
        })

        e.add(`kubejs:stack_groups/${itemsArray[0].split(':')[1]}`, obj)
    }

    createTagGroup('quark:vertical_slabs')
    createTagGroup('quark:hollow_logs')
    createTagGroup('quark:hedges')
    createTagGroup('quark:posts')
    createTagGroup('forge:ladders')
    createTagGroup('forge:chests/wooden')
    createTagGroup('blueprint:wooden_beehives')
    createTagGroup('blueprint:wooden_bookshelves')
    createTagGroup('blueprint:wooden_chiseled_bookshelves')
    createTagGroup('suppsquared:item_shelves')
    createTagGroup('supplementaries:sign_posts')
    createTagGroup('snowyspirit:sleds')
    createTagGroup('immersive_weathering:bark')
    createTagGroup('decorative_blocks:seats')
    createTagGroup('decorative_blocks:supports')
    createTagGroup('decorative_blocks:palisades')
    createTagGroup('another_furniture:flower_boxes')
    createTagGroup('another_furniture:shutters')
    createTagGroup('another_furniture:tables')
    createTagGroup('another_furniture:chairs')
    createTagGroup('another_furniture:shelves')
    createTagGroup('another_furniture:drawers')
    createTagGroup('another_furniture:bench')
    createTagGroup('dramaticdoors:short_wooden_doors')
    createTagGroup('dramaticdoors:tall_wooden_doors')
    // custom tags
    createTagGroup('kubejs:tms')
    createTagGroup('kubejs:trs')

    // Items
    createItemGroup(['caverns_and_chasms:trail_potion'])
}
