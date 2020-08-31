import { Formatted } from "../../../general"
import { Level } from "./types"

// not moving into an io folder for JI dir until there's at least one other thing

const formatLevel = (level: Level): Formatted<Level> => {
    const almostFormattedLevel = level.replace(/(\_\w)/g, match => ` ${match[ 1 ].toUpperCase()}`)

    return almostFormattedLevel.charAt(0)
        .toUpperCase() + almostFormattedLevel.slice(1) as Formatted<Level>
}

export {
    formatLevel,
}
