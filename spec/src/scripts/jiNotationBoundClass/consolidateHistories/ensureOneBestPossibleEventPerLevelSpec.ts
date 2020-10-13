import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { BoundClassHistoryConsolidation } from "../../../../../src/scripts/jiNotationBoundClass/consolidateHistories"
import { ensureOneBestPossibleEventPerJiNotationLevel } from "../../../../../src/scripts/jiNotationBoundClass/consolidateHistories/ensureOneBestPossibleEventPerLevel"
import { boundClassEventConsolidationFixture } from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("ensureOneBestPossibleEventPerJiNotationLevel", (): void => {
    it("throws an error if a bound class history consolidation has more than one event in a single JI notation level which is considered to be the one which is a member of the best possible bound class history", (): void => {
        const boundClassHistoryConsolidation: BoundClassHistoryConsolidation = {
            [ JiNotationLevel.MEDIUM ]: [
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: true },
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: true },
            ],
            [ JiNotationLevel.HIGH ]: [
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: true },
            ],
            [ JiNotationLevel.EXTREME ]: [
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: true },
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: false },
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: false },
            ],
        }

        expect((): void => ensureOneBestPossibleEventPerJiNotationLevel(boundClassHistoryConsolidation))
            .toThrow(new Error("Bound class history had at the Medium JI notation level more than one event marked as member of the best possible bound class history."))
    })

    it("throws an error if a bound class history consolidation has, at a particular JI notation level, no event which is identified as being the member of the best possible bound class history", (): void => {
        const boundClassHistoryConsolidation: BoundClassHistoryConsolidation = {
            [ JiNotationLevel.MEDIUM ]: [
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: false },
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: false },
            ],
            [ JiNotationLevel.HIGH ]: [
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: true },
            ],
            [ JiNotationLevel.EXTREME ]: [
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: true },
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: false },
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: false },
            ],
        }

        expect((): void => ensureOneBestPossibleEventPerJiNotationLevel(boundClassHistoryConsolidation))
            .toThrow(new Error("Bound class history had at the Medium JI notation level no event marked as member of the best possible bound class history."))
    })

    it("does not throw an error if a bound class history consolidation does not have more than one best possible event per JI notation level", (): void => {
        const boundClassHistoryConsolidation: BoundClassHistoryConsolidation = {
            [ JiNotationLevel.MEDIUM ]: [
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: true },
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: false },
            ],
            [ JiNotationLevel.HIGH ]: [
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: true },
            ],
            [ JiNotationLevel.EXTREME ]: [
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: true },
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: false },
                { ...boundClassEventConsolidationFixture, isBestPossibleBoundClassHistoryMember: false },
            ],
        }

        expect((): void => ensureOneBestPossibleEventPerJiNotationLevel(boundClassHistoryConsolidation)).not.toThrow()
    })
})
