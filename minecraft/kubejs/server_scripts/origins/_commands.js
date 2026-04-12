/** @param {$CommandRegistryEventJS} event  */
function commands_Origins(event) {
    const { commands: Commands, arguments: Arguments } = event

    // checks for resource value and gives feathers of amount resourceValue
    let redeem = (player) => {
        let powers = player.nbt.ForgeCaps['apoli:powers'].Powers
        let resourceValue = 0

        // find resource bar value
        powers.forEach(power => {
            if (power.Type == 'kubejs:xayah/feathered_hygiene_resource') resourceValue = power.Data.Value
        })

        if (resourceValue == 0) {
            player.displayClientMessage(Text.red('You\'ve preened all of your loose feathers already.'), true)
            return 0
        } else {
            // i hate you
            if (resourceValue >= 1) player.displayClientMessage(Text.darkPurple(`Preened ${resourceValue} feathers.`), true)
            else player.displayClientMessage(Text.darkPurple(`Preened ${resourceValue} feather.`), true)
            player.give(Item.of('kubejs:xayahs_feather', resourceValue))
        }

        return 1
    }


    event.register(Commands.literal('mosorigins')
        .requires(src => src.hasPermission(2))
        .then(Commands.literal('xayah')
            .then(Commands.literal('redeem')
                // doesn't need selector for regular use though!
                .executes(ctx => redeem(ctx.source.player))
                // need selector for origins
                .then(Commands.argument('target', Arguments.PLAYER.create(event))
                    .executes(ctx => redeem(Arguments.PLAYER.getResult(ctx, 'target')))
                )
            )
        )
    )
}