/** @param {$RecipesEventJS} e */
function recipes_Embers(e) {
    e.remove({ id: /embers:.*plate_hammering/ })
    e.remove({ id: 'embers:lead_adhesive' })

    e.replaceInput({}, 'embers:ash', '#forge:dusts/ash')
    e.replaceOutput({}, 'embers:ash', '#forge:dusts/ash')

    e.recipes.create.pressing('embers:lead_plate', 'oreganized:lead_ingot')
    e.recipes.create.pressing('embers:silver_plate', 'caverns_and_chasms:silver_ingot')
    e.recipes.create.pressing('embers:dawnstone_plate', 'embers:dawnstone_ingot')

    // https://github.com/RCXcrafter/EmbersRekindled/blob/rekindled/src/generated/resources/data/embers/recipes/alchemy/adhesive.json
    e.forEachRecipe({ type: 'embers:alchemy' }, r => {
        let changed = false;
        const json = global.json2js(r.json)
        json.inputs.forEach(input => {
            if (input.item != undefined && global.COMMON_SWAPPER.has(input.item)) {
                input.item = global.COMMON_SWAPPER.get(input.item)
                changed = true
            }
        })
        if (json.tablet.item != undefined && global.COMMON_SWAPPER.has(json.tablet.item))  {
            json.tablet.item = global.COMMON_SWAPPER.get(json.tablet.item)
            changed = true
        }
        if (global.COMMON_SWAPPER.has(json.output.item)) {
            json.output.item = global.COMMON_SWAPPER.get(json.output.item)
            changed = true
        }
        if (changed) e.custom(json).id(r.getId())
    })
}