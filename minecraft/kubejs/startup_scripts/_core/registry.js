/*
from: https://modrinth.com/mod/attribute-tooltip-fix

If you are using KubeJS or another mod which let's you define attributes directly through the UUID string, use these:

Attack Damage: CB3F55D3-645C-4F38-A497-9C13A33DB5CF
Attack Speed: FA233E1C-4180-4865-B01B-BCCE9785ACA3
*/

StartupEvents.registry('item', e => {
    e.create('ravager_hide')
        .displayName('Ravager Hide')
        .maxStackSize(16)
        .rarity('uncommon')
        .texture('quark:item/ravager_hide')

    // Origins
    e.create('goblin_icon').displayName('Goblin Icon')
    e.create('xayahs_feather').displayName('Xayah\'s Feather')
        .rarity('epic')
        .modifyAttribute('minecraft:generic.attack_damage', '54333c3d-6031-4094-95de-3d13e78d20cf', 5, 'addition')
        .modifyAttribute('minecraft:generic.attack_speed', '44333c3d-6031-4094-95de-3d13e78d20cf', -2.4, 'addition')
})

// Sounds for Origins
StartupEvents.registry('sound_event', e => {
    e.create('pyke_harpoon')
    e.create('ghostwater_dive_0')
    e.create('ghostwater_dive_1')
    e.create('ghostwater_dive_2')
})

// origins keybind
KeyBindEvents.register(e => {
    e.create('Active Power (Tertiary)', 'key.origins.tertiary_active', GLFW.GLFW_KEY_V, 'category.origins')
})

// xayah arrow
const $ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey')
const DAMAGE_TYPE = $ResourceKey.createRegistryKey('damage_type')
function getDamageSource(/** @type {Internal.Level}*/ level, /** @type {Internal.DamageType_}*/ damageType) {
    const resourceKey = $ResourceKey.create(DAMAGE_TYPE, Utils.id(damageType))
    const holder = level.registryAccess().registryOrThrow(DAMAGE_TYPE).getHolderOrThrow(resourceKey)
    return new DamageSource(holder)
}

// Xayah arrow registry
StartupEvents.registry('entity_type', e => {
    e.create('xayahs_feather_arrow', 'entityjs:arrow')
        .sized(0.5, 0.5)
        .updateInterval(1)
        .defaultHitGroundSoundEvent('minecraft:block.grass.step')
        .setWaterInertia(1)
        .mobCategory('misc') // Set mob category to 'misc'
        .textureLocation(entity => { return 'kubejs:textures/entity/projectiles/xayahs_feather_arrow.png' })
        .noItem() // won't create an arrow item
        .tryPickup(ctx => { return ctx.player.isCreative() }) // player can only pick up arrows in creative
        // change damage type
        .setBaseDamage(0)
        .onHitEntity(ctx => { 
            const { entity, result } = ctx
            let damageSource = getDamageSource(entity.getLevel(), 'kubejs:xayahs_feather_arrow')
            // if (entity.isPlayer()) damageSource = getDamageSource(entity.getLevel(), 'kubejs:xayahs_feather_arrow_player')
            result.entity.attack(damageSource, 8)
        })
        // particles spawning on arrow
        .tick(function(/** @type {Internal.Entity} */ entity) {
            if (entity.isMoving()) {
                entity.getLevel().addParticle('galosphere:amethyst_rain', entity.x, entity.y, entity.z, 0, 0, 0)
                // entity.server.runCommandSilent('particle galosphere:amethyst_rain ^ ^ ^ 0 0 0 0 1')
                // // spawn particle 0.5 blocks behind arrow
                // entity.server.runCommandSilent('particle galosphere:amethyst_rain ^ ^ ^-0.5 0 0 0 0 1')
            }
        })
})

/** @param {$ItemModificationEventJS_} e */
function itemModification_Core(e) {
    e.modify('minecraft:suspicious_stew', item => item.maxStackSize = 16)
}