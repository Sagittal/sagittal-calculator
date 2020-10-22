import {Io, join, NEWLINE, shallowClone, sumTexts} from "../../../../../general"
import {JiNotationLevel, JI_NOTATION_LEVELS} from "../../../../../sagittal"
import {LEVEL_ANALYSES_TITLE} from "../titles"
import {formatJiNotationLevelAnalysis} from "./levelAnalysis"

const formatJiNotationLevelAnalyses = (): Io => {
    const formattedJiNotationLevelAnalysis: Io[] = [] as Io[]

    shallowClone(JI_NOTATION_LEVELS).reverse().forEach((jiNotationLevel: JiNotationLevel): void => {
        if (jiNotationLevel === JiNotationLevel.INSANE) {
            return
        }

        formattedJiNotationLevelAnalysis.push(formatJiNotationLevelAnalysis(jiNotationLevel))
    })

    return sumTexts(LEVEL_ANALYSES_TITLE, join(formattedJiNotationLevelAnalysis, NEWLINE))
}

export {
    formatJiNotationLevelAnalyses,
}
