import { Decimal, formatIntegerDecimal, Formatted, Rank } from "../../../../../general"
import { BoundType, JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../../sagittal"
import { BoundEventAnalysis, BoundHistoryAnalysis } from "../../../history"

const extractJiNotationLevelRanks = (
    boundHistoryAnalysis: BoundHistoryAnalysis,
): Array<Formatted<Decimal<{ integer: true }> & Rank<BoundType>>> =>
    JI_NOTATION_LEVELS.map((
        jiNotationLevel: JiNotationLevel,
    ): Formatted<Decimal<{ integer: true }> & Rank<BoundType>> => {
        const jiNotationLevelEventAnalysis = boundHistoryAnalysis.boundEventAnalyses
            .find((boundEventAnalysis: BoundEventAnalysis): boolean => {
                return boundEventAnalysis.jiNotationLevel === jiNotationLevel
            })

        return jiNotationLevelEventAnalysis ?
            formatIntegerDecimal(
                jiNotationLevelEventAnalysis.rank,
                { align: true },
            ) as Formatted<Decimal<{ integer: true }> & Rank<BoundType>> :
            " " as Formatted<Decimal<{ integer: true }> & Rank<BoundType>>
    })

export {
    extractJiNotationLevelRanks,
}
