import { formatIntegerDecimal, Formatted, IntegerDecimal, Rank } from "../../../../../general"
import { BoundType, JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../../sagittal"
import { BoundEventAnalysis, BoundHistoryAnalysis } from "../../../history"

const extractJiNotationLevelRanks = (
    boundHistoryAnalysis: BoundHistoryAnalysis,
): Array<Formatted<IntegerDecimal & Rank<BoundType>>> =>
    JI_NOTATION_LEVELS.map((jiNotationLevel: JiNotationLevel): Formatted<IntegerDecimal & Rank<BoundType>> => {
        const jiNotationLevelEventAnalysis = boundHistoryAnalysis.boundEventAnalyses
            .find((boundEventAnalysis: BoundEventAnalysis): boolean => {
                return boundEventAnalysis.jiNotationLevel === jiNotationLevel
            })

        return jiNotationLevelEventAnalysis ?
            formatIntegerDecimal(
                jiNotationLevelEventAnalysis.rank,
                { align: true },
            ) as Formatted<IntegerDecimal & Rank<BoundType>> :
            " " as Formatted<IntegerDecimal & Rank<BoundType>>
    })

export {
    extractJiNotationLevelRanks,
}
