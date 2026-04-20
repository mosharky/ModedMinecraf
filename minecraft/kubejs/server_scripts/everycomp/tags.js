/// fixing missing tags on generated blocks
/** @param {$TagEventJS} e  */
function itemTags_EveryComp(e) {
    e.add('blueprint:wooden_beehives', /everycomp:abnww.*_beehive/)
    e.add('blueprint:wooden_bookshelves', /everycomp:abnww.*_bookshelf/)
    e.add('forge:bookshelves', /everycomp:abnww.*_bookshelf/)
    e.add('blueprint:wooden_chiseled_bookshelves', /everycomp:abnww.*_chiseled_bookshelf/)
}