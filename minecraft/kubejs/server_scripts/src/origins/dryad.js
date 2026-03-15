// copied from Origins Minus

/** @param {$DataPackEventJS} e  */
function origins_Dryad(e) {
    e.addJson('kubejs:origins/dryad', {
        name: 'Dryad',
        description: 'One with the trees.',
        icon: 'raccompat:vine_ring',
        powers: [
            'kubejs:dryad/sunlight',
            'kubejs:dryad/no_hunger',
            'kubejs:dryad/vine_whip',
            'kubejs:dryad/old_friends',
            'kubejs:dryad/bioluminescence',
            'kubejs:dryad/ursus_family',
            'kubejs:dryad/dryad_particles'
        ],
        impact: 1
    })

    e.addJson('kubejs:powers/dryad/sunlight', {
        name: 'Sunlight',
        description: 'Refills in the sun.',
        type: 'origins:multiple',
        badges: [
            {
                sprite: 'kubejs:textures/gui/badge/empty_shank.png',
                text: 'Replaces hunger.'
            },
            {
                sprite: 'kubejs:textures/gui/badge/heal_heart.png',
                text: 'Healing is fast when almost full, and efficient when almost empty.'
            },
            {
                type: 'origins:tooltip',
                sprite: 'kubejs:textures/gui/badge/honey_bottle.png',
                text: {
                    translate: '%s %s',
                    with: [
                        {
                            translate: 'item.minecraft.honey_bottle'
                        },
                        {
                            text: '§7Replenishes sunlight.'
                        }
                    ]
                }
            }
        ],
        res: {
            type: 'origins:resource',
            min: 0,
            max: 280,
            start_value: 280,
            hud_render: {
                should_render: true,
                sprite_location: 'origins:textures/gui/community/spiderkolo/resource_bar_02.png',
                bar_index: 24,
                condition: {
                    type: 'origins:or',
                    inverted: true,
                    conditions: [
                        {
                            type: 'origins:gamemode',
                            gamemode: 'creative'
                        },
                        {
                            type: 'origins:gamemode',
                            gamemode: 'spectator'
                        }
                    ]
                }
            }
        },
        fill_on_spawn: {
            type: 'origins:action_on_callback',
            entity_action_respawned: {
                type: 'origins:and',
                actions: [
                    {
                        type: 'origins:change_resource',
                        resource: '*:*_res',
                        change: 280
                    }
                ]
            }
        },
        drain_sprint: {
            type: 'origins:action_over_time',
            interval: 140,
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_res',
                change: -1
            },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:sprinting'
                    },
                    {
                        type: 'origins:resource',
                        resource: '*:*_res',
                        comparison: '>',
                        compare_to: 40
                    },
                    {
                        type: 'origins:or',
                        inverted: true,
                        conditions: [
                            {
                                type: 'origins:gamemode',
                                gamemode: 'creative'
                            },
                            {
                                type: 'origins:gamemode',
                                gamemode: 'spectator'
                            }
                        ]
                    }
                ]
            }
        },
        drain_sprint_jump: {
            type: 'origins:active_self',
            entity_action: {
                type: 'origins:chance',
                chance: 0.01,
                action: {
                    type: 'origins:change_resource',
                    resource: '*:*_res',
                    change: -1
                }
            },
            cooldown: 15,
            key: {
                key: 'key.jump'
            },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:sprinting'
                    },
                    {
                        type: 'origins:resource',
                        resource: '*:*_res',
                        comparison: '>',
                        compare_to: 40
                    },
                    {
                        type: 'origins:or',
                        inverted: true,
                        conditions: [
                            {
                                type: 'origins:gamemode',
                                gamemode: 'creative'
                            },
                            {
                                type: 'origins:gamemode',
                                gamemode: 'spectator'
                            }
                        ]
                    }
                ]
            }
        },
        regeneration_high: {
            type: 'origins:action_over_time',
            interval: 10,
            entity_action: {
                type: 'origins:and',
                actions: [
                    {
                        type: 'origins:heal',
                        amount: 1
                    },
                    {
                        type: 'origins:change_resource',
                        resource: '*:*_res',
                        change: -3
                    }
                ]
            },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:resource',
                        resource: '*:*_res',
                        comparison: '>',
                        compare_to: 100
                    },
                    {
                        type: 'origins:relative_health',
                        comparison: '<',
                        compare_to: 1
                    }
                ]
            }
        },
        regeneration_mid: {
            type: 'origins:action_over_time',
            interval: 80,
            entity_action: {
                type: 'origins:and',
                actions: [
                    {
                        type: 'origins:heal',
                        amount: 1
                    },
                    {
                        type: 'origins:change_resource',
                        resource: '*:*_res',
                        change: -2
                    }
                ]
            },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:resource',
                        resource: '*:*_res',
                        comparison: '>',
                        compare_to: 40
                    },
                    {
                        type: 'origins:resource',
                        resource: '*:*_res',
                        comparison: '<=',
                        compare_to: 100
                    },
                    {
                        type: 'origins:relative_health',
                        comparison: '<',
                        compare_to: 1
                    }
                ]
            }
        },
        regeneration_low: {
            type: 'origins:action_over_time',
            interval: 160,
            entity_action: {
                type: 'origins:and',
                actions: [
                    {
                        type: 'origins:heal',
                        amount: 1
                    },
                    {
                        type: 'origins:change_resource',
                        resource: '*:*_res',
                        change: -1
                    }
                ]
            },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:resource',
                        resource: '*:*_res',
                        comparison: '>',
                        compare_to: 0
                    },
                    {
                        type: 'origins:resource',
                        resource: '*:*_res',
                        comparison: '<=',
                        compare_to: 40
                    },
                    {
                        type: 'origins:relative_health',
                        comparison: '<',
                        compare_to: 1
                    }
                ]
            }
        },
        prevent_sprinting: {
            type: 'origins:prevent_sprinting',
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:resource',
                        resource: '*:*_res',
                        comparison: '<=',
                        compare_to: 80
                    },
                    {
                        type: 'origins:or',
                        inverted: true,
                        conditions: [
                            {
                                type: 'origins:gamemode',
                                gamemode: 'creative'
                            },
                            {
                                type: 'origins:gamemode',
                                gamemode: 'spectator'
                            }
                        ]
                    }
                ]
            }
        },
        fill_sun: {
            type: 'origins:action_over_time',
            interval: 40,
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_res',
                change: 1
            },
            condition: {
                type: 'origins:exposed_to_sun'
            }
        },
        fill_food: {
            type: 'origins:action_on_item_use',
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_res',
                change: 120
            },
            item_condition: {
                type: 'origins:ingredient',
                ingredient: {
                    tag: 'kubejs:sunlight_fill_food'
                }
            }
        },
        tooltips: {
            type: 'origins:tooltip',
            item_condition: {
                type: 'origins:ingredient',
                ingredient: {
                    tag: 'kubejs:sunlight_fill_food'
                }
            },
            text: {
                type: 'translatable',
                translate: '§7Replenishes sunlight.'
            }
        }
    })



    e.addJson('kubejs:powers/dryad/no_hunger', {
        hidden: true,
        type: 'origins:multiple',
        no_exhaustion: {
            type: 'origins:modify_exhaustion',
            modifier: { operation: 'multiply_base', value: -1 }
        },
        no_starving: {
            type: 'origins:invulnerability',
            damage_condition: { type: 'origins:name', name: 'starve' }
        },
        no_regen: {
            type: 'origins:disable_regen'
        },
        hunger_immunity: {
            type: 'origins:effect_immunity',
            effect: 'minecraft:hunger'
        },
        no_saturation_on_spawn: {
            type: 'origins:action_on_callback',
            entity_action_gained: {
                type: 'origins:feed',
                food: 20,
                saturation: -20
            },
            entity_action_respawned: {
                type: 'origins:feed',
                food: 20,
                saturation: -20
            }
        },
        snacking: {
            type: 'origins:modify_food',
            item_condition: { type: 'origins:food' },
            saturation_modifier: { operation: 'multiply_total', value: -1 },
            always_edible: true
        },
        no_bar: {
            type: 'origins:status_bar_texture',
            texture: 'kubejs:textures/gui/no_hunger.png'
        }
    })



    e.addJson('kubejs:powers/dryad/vine_whip', {
        name: 'Vine Whip',
        description: 'Slingshot through plants.',
        type: 'origins:multiple',
        badges: [
            {
                type: 'origins:keybind',
                sprite: 'origins:textures/gui/badge/active.png',
                text: 'origins.gui.badge.active'
            },
            {
                sprite: 'kubejs:textures/gui/badge/half_heart.png',
                text: 'Health Cost §71 HP.'
            }
        ],
        active: {
            type: 'origins:active_self',
            entity_action: {
                type: 'origins:and',
                actions: [
                    {
                        type: 'origins:raycast',
                        distance: 16,
                        block: true,
                        entity: false,
                        shape_type: 'outline',
                        fluid_handling: 'none',
                        command_along_ray: 'particle block minecraft:vine',
                        command_along_ray_only_on_hit: false
                    },
                    {
                        type: 'origins:play_sound',
                        sound: 'block.bamboo_sapling.place',
                        volume: 2,
                        pitch: 0.5
                    },
                    {
                        type: 'origins:play_sound',
                        sound: 'block.slime_block.place',
                        volume: 1,
                        pitch: 2
                    },
                    {
                        type: 'origins:spawn_particles',
                        particle: {
                            type: 'minecraft:block',
                            params: 'minecraft:vine'
                        },
                        count: 16,
                        speed: 3,
                        spread: {
                            x: 0.5,
                            y: 0.2,
                            z: 0.5
                        }
                    },
                    {
                        type: 'origins:set_fall_distance',
                        fall_distance: 0
                    },
                    {
                        type: 'origins:add_velocity',
                        y: 0.1,
                        space: 'world',
                        client: true,
                        server: true
                    },
                    {
                        type: 'origins:add_velocity',
                        z: 3,
                        space: 'local',
                        client: true,
                        server: true
                    },
                    {
                        type: 'origins:heal',
                        amount: -1
                    }
                ]
            },
            cooldown: 40,
            hud_render: {
                should_render: true,
                inverted: true,
                sprite_location: 'origins:textures/gui/community/spiderkolo/resource_bar_02.png',
                bar_index: 22
            },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:health',
                        comparison: '>',
                        compare_to: 1
                    },
                    {
                        type: 'origins:raycast',
                        distance: 16,
                        block: true,
                        entity: false,
                        shape_type: 'outline',
                        fluid_handling: 'none',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:vine_whip_plants'
                        }
                    }
                ]
            }
        },
        particle: {
            type: 'origins:particle',
            particle: {
                type: 'minecraft:block',
                params: 'minecraft:vine'
            },
            frequency: 1,
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        inverted: true,
                        type: 'origins:on_block'
                    },
                    {
                        type: 'origins:resource',
                        resource: '*:*_active',
                        comparison: '>',
                        compare_to: 0
                    }
                ]
            }
        }
    })



    e.addJson('kubejs:powers/dryad/old_friends', {
        name: 'Old Friends',
        description: 'Plants soften your falls.',
        type: 'origins:multiple',
        leaves_phasing: {
            type: 'origins:phasing',
            block_condition: {
                type: 'origins:in_tag',
                tag: 'kubejs:old_friends_leaves'
            },
            render_type: 'none',
            phase_down_condition: {
                type: 'origins:constant',
                value: false
            }
        },
        leaves_fall_immunity: {
            type: 'origins:invulnerability',
            damage_condition: {
                type: 'origins:from_falling'
            },
            condition: {
                type: 'origins:or',
                conditions: [
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_leaves'
                        },
                        offset_x: -0.3,
                        offset_y: -0.7,
                        offset_z: -0.3
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_leaves'
                        },
                        offset_x: -0.3,
                        offset_y: -0.7,
                        offset_z: 0
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_leaves'
                        },
                        offset_x: -0.3,
                        offset_y: -0.7,
                        offset_z: 0.3
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_leaves'
                        },
                        offset_x: 0,
                        offset_y: -0.7,
                        offset_z: -0.3
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_leaves'
                        },
                        offset_x: 0,
                        offset_y: -0.7,
                        offset_z: 0
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_leaves'
                        },
                        offset_x: 0,
                        offset_y: -0.7,
                        offset_z: 0.3
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_leaves'
                        },
                        offset_x: 0.3,
                        offset_y: -0.7,
                        offset_z: -0.3
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_leaves'
                        },
                        offset_x: 0.3,
                        offset_y: -0.7,
                        offset_z: 0
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_leaves'
                        },
                        offset_x: 0.3,
                        offset_y: -0.7,
                        offset_z: 0.3
                    }
                ]
            }
        },
        plants_fall_resistance: {
            type: 'origins:modify_damage_taken',
            damage_condition: {
                type: 'origins:from_falling'
            },
            modifier: {
                operation: 'multiply_total_multiplicative',
                value: -0.8
            },
            condition: {
                type: 'origins:or',
                conditions: [
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_plants'
                        },
                        offset_x: -0.3,
                        offset_y: -0.7,
                        offset_z: -0.3
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_plants'
                        },
                        offset_x: -0.3,
                        offset_y: -0.7,
                        offset_z: 0
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_plants'
                        },
                        offset_x: -0.3,
                        offset_y: -0.7,
                        offset_z: 0.3
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_plants'
                        },
                        offset_x: 0,
                        offset_y: -0.7,
                        offset_z: -0.3
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_plants'
                        },
                        offset_x: 0,
                        offset_y: -0.7,
                        offset_z: 0
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_plants'
                        },
                        offset_x: 0,
                        offset_y: -0.7,
                        offset_z: 0.3
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_plants'
                        },
                        offset_x: 0.3,
                        offset_y: -0.7,
                        offset_z: -0.3
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_plants'
                        },
                        offset_x: 0.3,
                        offset_y: -0.7,
                        offset_z: 0
                    },
                    {
                        type: 'origins:block_collision',
                        block_condition: {
                            type: 'origins:in_tag',
                            tag: 'kubejs:old_friends_plants'
                        },
                        offset_x: 0.3,
                        offset_y: -0.7,
                        offset_z: 0.3
                    }
                ]
            }
        },
        plants_fall_protection: {
            type: 'origins:prevent_death',
            damage_condition: {
                type: 'origins:from_falling'
            },
            condition: {
                type: 'origins:in_block',
                block_condition: {
                    type: 'origins:or',
                    conditions: [
                        {
                            type: 'origins:offset',
                            condition: {
                                type: 'origins:in_tag',
                                tag: 'kubejs:old_friends_plants'
                            },
                            y: -1,
                            x: -1,
                            z: -1
                        },
                        {
                            type: 'origins:offset',
                            condition: {
                                type: 'origins:in_tag',
                                tag: 'kubejs:old_friends_plants'
                            },
                            y: -1,
                            x: -1,
                            z: 0
                        },
                        {
                            type: 'origins:offset',
                            condition: {
                                type: 'origins:in_tag',
                                tag: 'kubejs:old_friends_plants'
                            },
                            y: -1,
                            x: -1,
                            z: 1
                        },
                        {
                            type: 'origins:offset',
                            condition: {
                                type: 'origins:in_tag',
                                tag: 'kubejs:old_friends_plants'
                            },
                            y: -1,
                            x: 0,
                            z: -1
                        },
                        {
                            type: 'origins:offset',
                            condition: {
                                type: 'origins:in_tag',
                                tag: 'kubejs:old_friends_plants'
                            },
                            y: -1,
                            x: 0,
                            z: 0
                        },
                        {
                            type: 'origins:offset',
                            condition: {
                                type: 'origins:in_tag',
                                tag: 'kubejs:old_friends_plants'
                            },
                            y: -1,
                            x: 0,
                            z: 1
                        },
                        {
                            type: 'origins:offset',
                            condition: {
                                type: 'origins:in_tag',
                                tag: 'kubejs:old_friends_plants'
                            },
                            y: -1,
                            x: 1,
                            z: -1
                        },
                        {
                            type: 'origins:offset',
                            condition: {
                                type: 'origins:in_tag',
                                tag: 'kubejs:old_friends_plants'
                            },
                            y: -1,
                            x: 1,
                            z: 0
                        },
                        {
                            type: 'origins:offset',
                            condition: {
                                type: 'origins:in_tag',
                                tag: 'kubejs:old_friends_plants'
                            },
                            y: -1,
                            x: 1,
                            z: 1
                        }
                    ]
                }
            }
        }
    })



    e.addJson('kubejs:powers/dryad/bioluminescence', {
        name: 'Bioluminescence',
        description: 'Spit glow lichen.',
        type: 'origins:fire_projectile',
        badges: [
            {
                type: 'origins:keybind',
                sprite: 'origins:textures/gui/badge/active.png',
                text: 'origins.gui.badge.active'
            },
            {
                sprite: 'kubejs:textures/gui/badge/full_heart.png',
                text: 'Health Cost §710 HP.'
            },
            {
                sprite: 'kubejs:textures/gui/badge/full_heart.png',
                text: 'Health Cost §710 HP.'
            },
            {
                sprite: 'kubejs:textures/gui/badge/full_heart.png',
                text: 'Health Cost §710 HP.'
            },
            {
                sprite: 'kubejs:textures/gui/badge/full_heart.png',
                text: 'Health Cost §710 HP.'
            },
            {
                sprite: 'kubejs:textures/gui/badge/full_heart.png',
                text: 'Health Cost §710 HP.'
            }
        ],
        speed: 2,
        entity_type: 'minecraft:arrow',
        tag: '{Tags:[\'bioluminescence\'],PortalCooldown:100,damage:0,pickup:0b,ShotFromCrossbow:1b,SoundEvent:\'block.cave_vines.fall\',PierceLevel:50,Silent:1b,ActiveEffects:[{Id:14,Amplifier:0,Duration:2147483647,ShowParticles:0b}]}',
        key: 'key.origins.secondary_active',
        shooter_action: {
            type: 'origins:and',
            actions: [
                {
                    type: 'origins:damage',
                    amount: 10,
                    damage_type: 'cactus'
                },
                {
                    type: 'origins:play_sound',
                    sound: 'entity.player.hurt_sweet_berry_bush',
                    volume: 0.75,
                    pitch: 1
                },
                {
                    type: 'origins:spawn_particles',
                    particle: {
                        type: 'minecraft:block',
                        params: 'minecraft:glow_lichen'
                    },
                    count: 32,
                    speed: 5,
                    spread: {
                        x: 0.5,
                        y: 0.2,
                        z: 0.5
                    }
                },
                {
                    type: 'origins:play_sound',
                    sound: 'item.crossbow.shoot',
                    volume: 0.75,
                    pitch: 0.75
                }
            ]
        },
        cooldown: 100,
        hud_render: {
            should_render: true,
            inverted: true,
            sprite_location: 'origins:textures/gui/community/spiderkolo/resource_bar_02.png',
            bar_index: 7
        },
        condition: {
            type: 'origins:and',
            conditions: [
                {
                    type: 'origins:health',
                    comparison: '>',
                    compare_to: 10
                },
                {
                    inverted: true,
                    type: 'origins:gamemode',
                    gamemode: 'spectator'
                },
                {
                    inverted: true,
                    type: 'origins:gamemode',
                    gamemode: 'adventure'
                }
            ]
        }
    })



    e.addJson('kubejs:powers/dryad/dryad_particles', {
        hidden: true,
        type: 'origins:particle',
        particle: 'aether_redux:falling_skyroot_leaves',
        frequency: 20,
        condition: { type: 'origins:moving' }
    })



    // bear love
    e.addJson('kubejs:powers/dryad/ursus_family', {
        name: 'Ursus Family',
        badges: [{
            type: 'origins:keybind',
            sprite: 'origins:textures/gui/badge/active.png',
            text: 'Press %s to heal all grizzly bears in a 10 block radius.\n- Has a cooldown of five minutes'
        }],
        description: 'You are one with the grizzly bears; they won\'t show aggression. You can heal nearby owned grizzly bears.',
        type: 'origins:multiple',
        bear_ignore: {
            type: 'apugli:mobs_ignore',
            mob_condition: {
                type: 'origins:entity_type',
                entity_type: 'alexsmobs:grizzly_bear'
            }
        },
        bear_heal: {
            type: 'origins:active_self',
            entity_action: {
                type: 'origins:area_of_effect',
                radius: 10,
                bientity_action: {
                    type: 'origins:and',
                    actions: [
                        {
                            type: 'origins:target_action',
                            action: {
                                type: 'origins:heal',
                                amount: 16
                            }
                        },
                        {
                            type: 'origins:actor_action',
                            action: {
                                type: 'origins:play_sound',
                                sound: 'minecraft:block.beacon.activate',
                                volume: 0.75
                            }
                        },
                        {
                            type: 'origins:target_action',
                            action: {
                                type: 'origins:spawn_particles',
                                particle: 'minecraft:heart',
                                count: 4,
                                speed: 0.0,
                                force: true,
                                spread: { x: 0.5, y: 0.0, z: 0.5 },
                                offset_y: 1.0
                            }
                        }
                    ]
                },
                bientity_condition: {
                    type: 'origins:and',
                    conditions: [
                        { type: 'origins:owner' },
                        { type: 'origins:can_see' },
                        {
                            type: 'origins:target_condition',
                            condition: {
                                type: 'origins:entity_type',
                                entity_type: 'alexsmobs:grizzly_bear'
                            }
                        }
                    ]
                }
            },
            key: { key: 'key.origins.tertiary_active' },
            hud_render: {
                sprite_location: 'kubejs:textures/gui/resource_bar.png',
                bar_index: 3
            },
            cooldown: 6000 // 5 minutes
        }
    })
}