// EMI++ (EMI Plus Plus)
/** @param {$GenerateClientAssetsEventJS} e */
function clientData_EMIxx(e) {
    function createGroup(tag) {
        e.add(`kubejs:stack_groups/${tag.split(':')[1]}`, {
            type: 'emixx:tag',
            tag: tag
        })
    }

    createGroup('quark:vertical_slabs')
    createGroup('quark:hollow_logs')
    createGroup('quark:hedges')
    createGroup('quark:posts')
    createGroup('forge:ladders')
    createGroup('forge:chests/wooden')
    createGroup('blueprint:wooden_beehives')
    createGroup('blueprint:wooden_bookshelves')
    createGroup('blueprint:wooden_chiseled_bookshelves')
    createGroup('suppsquared:item_shelves')
    createGroup('supplementaries:sign_posts')
    createGroup('snowyspirit:sleds')
    createGroup('immersive_weathering:bark')
    createGroup('decorative_blocks:seats')
    createGroup('decorative_blocks:supports')
    createGroup('decorative_blocks:palisades')
    createGroup('another_furniture:flower_boxes')
    createGroup('another_furniture:shutters')
    createGroup('another_furniture:tables')
    createGroup('another_furniture:chairs')
    createGroup('another_furniture:shelves')
    createGroup('another_furniture:drawers')
    createGroup('another_furniture:bench')
    createGroup('dramaticdoors:short_wooden_doors')
    createGroup('dramaticdoors:tall_wooden_doors')
}
