// Has to load after all other removals
// If a slab was removed, remove its vertical slab as well
function removals_vSlabCompat() {
    let arr = []
    global.REMOVALS.set.forEach( /** @param {string} removal */ removal => {
        if (removal.match(/.*_slab$/)) {
            const split = removal.split(':')
            const modId = split[0]
            const block = split[1]
            const verticalSlab = 'v_slab_compat:' + modId + '/' + block.split('slab')[0] + 'vertical_slab'
            if (modId == 'v_slab_compat' || modId == 'quark') return
            if (Item.exists(verticalSlab)) arr.push(verticalSlab)
        }
    })
    global.REMOVALS.add(arr)
}