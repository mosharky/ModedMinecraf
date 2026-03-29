function biomeTags_Oreganized(e) {
    const prev = e.get('oreganized:has_structure/boulder').getObjectIds()
    e.removeAll('oreganized:has_structure/boulder')
    e.add('oreganized:has_structure/boulder', prev)
    e.remove('oreganized:has_structure/boulder', [
        e.get('kubejs:has_feature/terracotta_cliff').getObjectIds(),
        e.get('kubejs:has_feature/travertine_cliff').getObjectIds(),
        e.get('kubejs:has_feature/kaolin_cliff').getObjectIds(),
        e.get('kubejs:has_feature/chert_cliff').getObjectIds(),
        e.get('kubejs:has_feature/granite_cliff').getObjectIds(),
        e.get('kubejs:has_feature/permafrost_cliff').getObjectIds(),
    ])
}