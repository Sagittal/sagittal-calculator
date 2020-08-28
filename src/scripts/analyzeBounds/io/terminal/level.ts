import { Formatted } from "../../../../general"
import { Level } from "../../../../notations"

const formatLevel = (level: Level): Formatted<Level> => {
    const almostFormattedLevel = level.replace(/(\_\w)/g, match => ` ${match[ 1 ].toUpperCase()}`)

    return almostFormattedLevel.charAt(0)
        .toUpperCase() + almostFormattedLevel.slice(1) as Formatted<Level>
}

export {
    formatLevel,
}
