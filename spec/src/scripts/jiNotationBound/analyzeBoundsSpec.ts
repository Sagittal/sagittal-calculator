import { Name } from "../../../../src/general"
import {
    Bound,
    BoundType,
    JiNotationBound,
    JiNotationLevel,
    JI_NOTATION_BOUNDS,
} from "../../../../src/sagittal/notations/ji"
import { analyzeJiNotationBounds } from "../../../../src/scripts/jiNotationBound/analyzeBounds"
import { JiNotationBoundAnalysis } from "../../../../src/scripts/jiNotationBound/bound"
import { BoundEventAnalysis } from "../../../../src/scripts/jiNotationBound/history/events"

describe("analyzeJiNotationBounds", (): void => {
    it("returns the same bound types as in the actual JI notation (with the Extreme level being the current highest)              ", (): void => {
        const actual = analyzeJiNotationBounds()
            .map((jiNotationBoundAnalysis: JiNotationBoundAnalysis): BoundType => {
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
    })

    it("returns the same bound names as in the actual JI notation (with the Insane level being the current highest)               ", (): void => {
        const actual = analyzeJiNotationBounds()
            .map((jiNotationBoundAnalysis: JiNotationBoundAnalysis): Name<Bound> => {
                const jiNotationLevelEventAnalysis =
                    jiNotationBoundAnalysis.bestPossibleBoundHistoryAnalysis.boundEventAnalyses
                        .find((boundEventAnalysis: BoundEventAnalysis): boolean => {
                            return boundEventAnalysis.jiNotationLevel === JiNotationLevel.INSANE
                        })

                return jiNotationLevelEventAnalysis!.name
            })

        const expected = JI_NOTATION_BOUNDS.map((jiNotationBound: JiNotationBound): Name<Bound> => {
            return jiNotationBound.name
        })
        expect(actual).toEqual(expected)
    })
})
