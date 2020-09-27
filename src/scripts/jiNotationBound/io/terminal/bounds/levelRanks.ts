import { formatInteger, Formatted, Integer, Rank } from "../../../../../general"
import { BoundType, JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../../sagittal"
import { BoundEventAnalysis, BoundHistoryAnalysis } from "../../../history"

const extractJiNotationLevelRanks = (
    boundHistoryAnalysis: BoundHistoryAnalysis,
): Array<Formatted<Integer & Rank<BoundType>>> =>
    JI_NOTATION_LEVELS.map((jiNotationLevel: JiNotationLevel): Formatted<Integer & Rank<BoundType>> => {
        const jiNotationLevelEventAnalysis = boundHistoryAnalysis.boundEventAnalyses
            .find((boundEventAnalysis: BoundEventAnalysis): boolean => {
                return boundEventAnalysis.jiNotationLevel === jiNotationLevel
            })

        return jiNotationLevelEventAnalysis ?
            formatInteger(jiNotationLevelEventAnalysis.rank, { align: true }) as Formatted<Integer & Rank<BoundType>> :
            " " as Formatted<Integer & Rank<BoundType>>
    })

export {
    extractJiNotationLevelRanks,
}
