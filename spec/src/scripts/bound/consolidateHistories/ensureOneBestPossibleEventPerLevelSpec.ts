import { Level } from "../../../../../src/sagittal/notations/ji"
import { HistoryConsolidation } from "../../../../../src/scripts/bound/consolidateHistories"
import { ensureOneBestPossibleEventPerLevel } from "../../../../../src/scripts/bound/consolidateHistories/ensureOneBestPossibleEventPerLevel"
import { eventConsolidationFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("ensureOneBestPossibleEventPerLevel", (): void => {
    it(
        `throws an error if a history consolidation has more than one event in a single level 
        which is considered to be the one which is a member of the best possible history`,
        (): void => {
            const historyConsolidation: HistoryConsolidation = {
                [ Level.MEDIUM ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                ],
                [ Level.HIGH ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                ],
                [ Level.EXTREME ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                ],
            }

            expect((): void => ensureOneBestPossibleEventPerLevel(historyConsolidation))
                .toThrow(new Error("History had at the medium level more than one event marked as member of the best possible history."))
        },
    )

    it(
        `throws an error if a history consolidation has, at a particular level, 
        no event which is identified as being the member of the best possible history`,
        (): void => {
            const historyConsolidation: HistoryConsolidation = {
                [ Level.MEDIUM ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                ],
                [ Level.HIGH ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                ],
                [ Level.EXTREME ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                ],
            }

            expect((): void => ensureOneBestPossibleEventPerLevel(historyConsolidation))
                .toThrow(new Error("History had at the medium level no event marked as member of the best possible history."))
        },
    )

    it(
        `does not throw an error if a history consolidation does not have more than one best possible event per level`,
        (): void => {
            const historyConsolidation: HistoryConsolidation = {
                [ Level.MEDIUM ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                ],
                [ Level.HIGH ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                ],
                [ Level.EXTREME ]: [
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: true },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                    { ...eventConsolidationFixture, isBestPossibleHistoryMember: false },
                ],
            }

            expect((): void => ensureOneBestPossibleEventPerLevel(historyConsolidation)).not.toThrow()
        },
    )
})
