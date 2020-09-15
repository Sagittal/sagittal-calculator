import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { HistoryConsolidation } from "../../../../../src/scripts/jiNotationBound/consolidateHistories"
import { ensureOneBestPossibleEventPerJiNotationLevel } from "../../../../../src/scripts/jiNotationBound/consolidateHistories/ensureOneBestPossibleEventPerLevel"
import { eventConsolidationFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("ensureOneBestPossibleEventPerJiNotationLevel", (): void => {
    it(
        `throws an error if a history consolidation has more than one event in a single JI notation level 
        which is considered to be the one which is a member of the best possible history`,
        (): void => {
            const historyConsolidation: HistoryConsolidation = {
                [ JiNotationLevel.MEDIUM ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                ],
                [ JiNotationLevel.HIGH ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                ],
                [ JiNotationLevel.EXTREME ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                ],
            }

            expect((): void => ensureOneBestPossibleEventPerJiNotationLevel(historyConsolidation))
                .toThrow(new Error("History had at the Medium JI notation level more than one event marked as member of the best possible history."))
        },
    )

    it(
        `throws an error if a history consolidation has, at a particular JI notation level, 
        no event which is identified as being the member of the best possible history`,
        (): void => {
            const historyConsolidation: HistoryConsolidation = {
                [ JiNotationLevel.MEDIUM ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                ],
                [ JiNotationLevel.HIGH ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                ],
                [ JiNotationLevel.EXTREME ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                ],
            }

            expect((): void => ensureOneBestPossibleEventPerJiNotationLevel(historyConsolidation))
                .toThrow(new Error("History had at the Medium JI notation level no event marked as member of the best possible history."))
        },
    )

    it(
        `does not throw an error if a history consolidation does not have more than one best possible event per JI notation level`,
        (): void => {
            const historyConsolidation: HistoryConsolidation = {
                [ JiNotationLevel.MEDIUM ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                ],
                [ JiNotationLevel.HIGH ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                ],
                [ JiNotationLevel.EXTREME ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                ],
            }

            expect((): void => ensureOneBestPossibleEventPerJiNotationLevel(historyConsolidation)).not.toThrow()
        },
    )
})
