import { BoundType, JiNotationBound, JiNotationLevel, JI_NOTATION_BOUNDS } from "../../../../src/sagittal/notations/ji"
import { analyzeJiNotationBounds } from "../../../../src/scripts/jiNotationBound/analyzeBounds"
import { JiNotationBoundAnalysis } from "../../../../src/scripts/jiNotationBound/bound"
import { BoundEventAnalysis } from "../../../../src/scripts/jiNotationBound/history/events"

describe("analyzeJiNotationBounds", (): void => {
    it(
        "returns the same bound types as in the actual JI notation (with the Extreme level being the current highest)",
        (): void => {
            const actual = analyzeJiNotationBounds()
                .map((jiNotationBoundAnalysis: JiNotationBoundAnalysis, index: number): BoundType => {
                    const jiNotationLevelEventAnalysis =
                        jiNotationBoundAnalysis.bestPossibleBoundHistoryAnalysis.boundEventAnalyses
                            .find((boundEventAnalysis: BoundEventAnalysis): boolean => {
                                return boundEventAnalysis.jiNotationLevel === JiNotationLevel.EXTREME
                            })

                    return jiNotationLevelEventAnalysis!.boundType
                })

            const expected = JI_NOTATION_BOUNDS.map((jiNotationBound: JiNotationBound): BoundType => {
                return jiNotationBound.boundType
            })
            expect(actual).toEqual(expected)
        },
    )
})
