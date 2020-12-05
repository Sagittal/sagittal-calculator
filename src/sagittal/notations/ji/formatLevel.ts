import {Formatted} from "@sagittal/general"
import {JiNotationLevelId} from "./types"

// Not moving into an io folder for JI dir until there's at least one other thing

const formatJiNotationLevel = (jiNotationLevel: JiNotationLevelId): Formatted<JiNotationLevelId> => {
    const almostFormattedJiNotationLevel = jiNotationLevel.replace(/(\_\w)/g, (match: string): string => ` ${match[1].toUpperCase()}`)

    return almostFormattedJiNotationLevel.charAt(0)
        .toUpperCase() + almostFormattedJiNotationLevel.slice(1) as Formatted<JiNotationLevelId>
}

export {
    formatJiNotationLevel,
}
