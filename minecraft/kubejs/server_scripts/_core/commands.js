/** @param {$CommandRegistryEventJS} event  */
function commands_Core(event) {
    const { commands: Commands, arguments: Arguments } = event


    event.register(Commands.literal('fr')
        .requires(src => src.hasPermission(3))
        .executes(ctx => {
            let server = ctx.source.getServer()
            server.runCommandSilent('kubejs reload startup_scripts')
            server.runCommandSilent('kubejs reload client_scripts')
            server.runCommandSilent('kubejs reload lang')
            server.runCommand('reload')
            return 1
        })
    )


    event.register(Commands.literal('dev')
        .requires(src => src.hasPermission(3))

        // check if /locate command was successful for each biome in a 12801×12801 area arround the player
        // used because reterraforged makes certain biomes too rare
        .then(Commands.literal('detect_missing_biomes').executes(ctx => {
            let player = ctx.source.getPlayer()

            player.tell(Text.gold('Starting biome checks. The server will lag momentarily...'))
            overworldBiomes.forEach(biome => {
                if (!player.runCommandSilent(`/locate biome ${biome}`)) {
                    player.tell([Text.red('COULD NOT FIND BIOME: '), Text.gray(biome)])
                    console.log(`COULD NOT FIND BIOME: ${biome}`)
                }
            })
            player.tell(Text.gold('Biome checks complete!'))

            return 1
        }))
    )

    // /originReset
    event.register(Commands.literal('resetOrigin')
        .executes(ctx => {
            let player = ctx.source.player
            if (!player.stages.has('originReset')) {
                player.tell([
                    Text.red('Hey you!').bold(), Text.red(' This is a one-time reset for your origin. It will give an Orb of Origin that, when right-clicked, will open the origin selection screen.'),
                    Text.red('\n\nEnsure that you\'re safe, and won\'t lose or drop the Orb of Origin.').bold(),
                    Text.blue('\n\nClick here to confirm and reset.').clickRunCommand('/resetOrigin confirm').hover(Text.gold('/resetOrigin confirm')).underlined()
                ])
            } else {
                player.tell(Text.red('You\'ve already reset your origin.'))
                return 0
            }
            return 1
        })
        .then(Commands.literal('confirm').executes(ctx => {
            let player = ctx.source.player
            if (!player.stages.has('originReset')) {
                player.stages.add('originReset')
                player.give('origins:orb_of_origin')
                player.tell(Text.gray('An Orb of Origin has been added to your inventory. Right-click while it\'s in your hand to use.'))
            } else {
                player.tell(Text.red('You\'ve already reset your origin.'))
                return 0
            }
            return 1
        }))
    )
}
