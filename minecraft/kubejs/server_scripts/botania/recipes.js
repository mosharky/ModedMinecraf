/** @param {$RecipesEventJS} e */
function recipes_Botania(e) {
    // https://github.com/VazkiiMods/Botania/tree/1.20.x/Xplat/src/generated/resources/data/botania/recipes/orechid
    // Stone
    e.recipes.botania.orechid('create:zinc_ore', 'minecraft:stone', 29371)
    e.recipes.botania.orechid('oreganized:lead_ore', 'minecraft:stone', 2647)
    e.recipes.botania.orechid('galosphere:silver_ore', 'minecraft:stone', 7654)
    e.recipes.botania.orechid('caverns_and_chasms:spinel_ore', 'minecraft:stone', 2647)
    e.recipes.botania.orechid('goety:jade_ore', 'minecraft:stone', 1239)
    e.recipes.botania.orechid('malum:soulstone_ore', 'minecraft:stone', 2647)
    e.recipes.botania.orechid('malum:brilliant_stone', 'minecraft:stone', 400)
    e.recipes.botania.orechid('malum:natural_quartz_ore', 'minecraft:stone', 400)
    // Deepslate
    e.recipes.botania.orechid('create:deepslate_zinc_ore', 'minecraft:deepslate', 250)
    e.recipes.botania.orechid('oreganized:deepslate_lead_ore', 'minecraft:deepslate', 125)
    e.recipes.botania.orechid('galosphere:deepslate_silver_ore', 'minecraft:deepslate', 125)
    e.recipes.botania.orechid('caverns_and_chasms:deepslate_spinel_ore', 'minecraft:deepslate', 100)
    e.recipes.botania.orechid('malum:deepslate_soulstone_ore', 'minecraft:deepslate', 100)
    e.recipes.botania.orechid('malum:brilliant_deepslate', 'minecraft:deepslate', 75)
    e.recipes.botania.orechid('malum:deepslate_quartz_ore', 'minecraft:deepslate', 50)
    e.recipes.botania.orechid('malum:cthonic_gold_ore', 'minecraft:deepslate', 10)

    // Soul soil
    e.recipes.botania.orechid_ignem('caverns_and_chasms:soul_silver_ore', 'minecraft:soul_soil', 1)
    e.recipes.botania.orechid_ignem('netherexp:fossil_ore', 'minecraft:soul_soil', 1)
    e.recipes.botania.orechid_ignem('netherexp:fossil_fuel_ore', 'minecraft:soul_soil', 1)
    // Netherrack
    e.recipes.botania.orechid_ignem('malum:blazing_quartz_ore', 'minecraft:netherrack', 10000)
}