import { Decimal, formatIntegerDecimal, Formatted, Rank } from "../../../../../general"
import { BoundType, JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../../sagittal"
import { BoundClassEventAnalysis, BoundClassHistoryAnalysis } from "../../../history"

const extractJiNotationLevelRanks = (
    boundClassHistoryAnalysis: BoundClassHistoryAnalysis,
): Array<Formatted<Decimal<{ integer: true }> & Rank<BoundType>>> =>
    JI_NOTATION_LEVELS.map((
        jiNotationLevel: JiNotationLevel,
    ): Formatted<Decimal<{ integer: true }> & Rank<BoundType>> => {
        const jiNotationLevelEventAnalysis = boundClassHistoryAnalysis.boundClassEventAnalyses
            .find((boundClassEventAnalysis: BoundClassEventAnalysis): boolean => {
                return boundClassEventAnalysis.jiNotationLevel === jiNotationLevel
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
