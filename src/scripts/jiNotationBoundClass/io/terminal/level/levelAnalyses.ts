import {Io, join, NEWLINE, shallowClone, sumTexts} from "@sagittal/general"
import {JiNotationLevelId, JI_NOTATION_LEVELS} from "@sagittal/system"
import {LEVEL_ANALYSES_TITLE} from "../titles"
import {formatJiNotationLevelAnalysis} from "./levelAnalysis"

const formatJiNotationLevelAnalyses = (): Io => {
    const formattedJiNotationLevelAnalysis: Io[] = [] as Io[]

    shallowClone(JI_NOTATION_LEVELS).reverse().forEach((jiNotationLevel: JiNotationLevelId): void => {
        if (jiNotationLevel === JiNotationLevelId.INSANE) {
            return
        }

        formattedJiNotationLevelAnalysis.push(formatJiNotationLevelAnalysis(jiNotationLevel))
    })

    return sumTexts(LEVEL_ANALYSES_TITLE, join(formattedJiNotationLevelAnalysis, NEWLINE))
}

export {
    formatJiNotationLevelAnalyses,
}
