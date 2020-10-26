import {Name} from "../../../../src/general"
import {
    BoundType,
    JiNotationBound,
    JiNotationBoundClassEntry,
    JiNotationLevel,
    JI_NOTATION_BOUND_CLASS_ENTRIES,
} from "../../../../src/sagittal/notations"
import {analyzeJiNotationBoundClasses} from "../../../../src/scripts/jiNotationBoundClass/analyzeBoundClasses"
import {JiNotationBoundClassAnalysis} from "../../../../src/scripts/jiNotationBoundClass/boundClass"
import {BoundEventAnalysis} from "../../../../src/scripts/jiNotationBoundClass/history/events"
import {onlyRunInCi} from "../../../helpers/onlyRunInCi"

describe("analyzeJiNotationBoundClasses", (): void => {
    it("returns the same bound types as in the actual JI notation (with the Extreme level being the current highest)              ", (): void => {
        onlyRunInCi()

        const actual = analyzeJiNotationBoundClasses()
            .map((jiNotationBoundClassAnalysis: JiNotationBoundClassAnalysis): BoundType => {
                const jiNotationLevelEventAnalysis =
                    jiNotationBoundClassAnalysis.bestPossibleBoundHistoryAnalysis.boundEventAnalyses
                        .find((boundEventAnalysis: BoundEventAnalysis): boolean => {
                            return boundEventAnalysis.jiNotationLevel === JiNotationLevel.EXTREME
                        })

                return jiNotationLevelEventAnalysis!.boundType
            })

        const expected = JI_NOTATION_BOUND_CLASS_ENTRIES
            .map(([_, jiNotationBoundClass]: JiNotationBoundClassEntry): BoundType => {
                return jiNotationBoundClass.boundType
            })
        expect(actual).toEqual(expected)
    })

    it("returns the same bound names as in the actual JI notation (with the Insane level being the current highest)               ", (): void => {
        onlyRunInCi()

        const actual = analyzeJiNotationBoundClasses()
            .map((jiNotationBoundClassAnalysis: JiNotationBoundClassAnalysis): Name<JiNotationBound> => {
                const jiNotationLevelEventAnalysis =
                    jiNotationBoundClassAnalysis.bestPossibleBoundHistoryAnalysis.boundEventAnalyses
                        .find((boundEventAnalysis: BoundEventAnalysis): boolean => {
                            return boundEventAnalysis.jiNotationLevel === JiNotationLevel.INSANE
                        })

                return jiNotationLevelEventAnalysis!.name
            })

        const expected = JI_NOTATION_BOUND_CLASS_ENTRIES
            .map(([_, jiNotationBoundClass]: JiNotationBoundClassEntry): Name<JiNotationBound> => {
                return jiNotationBoundClass.name
            })
        expect(actual).toEqual(expected)
    })
})
