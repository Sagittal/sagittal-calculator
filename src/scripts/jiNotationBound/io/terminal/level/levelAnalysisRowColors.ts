import { ColorMethod, Count, Integer, Maybe, Rank } from "../../../../../general"
import { EventAnalysis } from "../../../history"
import { JI_NOTATION_BOUND_COLORS } from "../boundColors"

const computeLevelAnalysisRowColors = (
    jiNotationLevelsBestHistoryRanks: Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>,
): Array<Maybe<ColorMethod>> => {
    const colors = [] as ColorMethod[]

    const jiNotationLevelsBestHistoryRanksValues =
        Object.keys(jiNotationLevelsBestHistoryRanks) as unknown[] as number[]

    jiNotationLevelsBestHistoryRanksValues.forEach((rankIndex: number): void => {
        const color = JI_NOTATION_BOUND_COLORS[ rankIndex ]
        colors.push(color)
    })

    return colors
}

export {
    computeLevelAnalysisRowColors,
}
