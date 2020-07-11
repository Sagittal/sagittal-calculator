import { ensureOneBestPossibleEventPerLevel } from "../../../../src/scripts/analyzeBounds/ensureOneBestPossibleEventPerLevel"
import { Level } from "../../../../src/notations/ji/types"
import { ConsolidatedEvent, ConsolidatedHistories } from "../../../../src/scripts/analyzeBounds/types"

describe("ensureOneBestPossibleEventPerLevel", () => {
    it("throws an error if a consolidated history has more than one event in a single level which is considered to be the one which is a member of the best possible history", () => {
        const consolidatedHistories: ConsolidatedHistories = {
            [ Level.MEDIUM ]: [
                { isBestPossibleHistoryMember: true },
                { isBestPossibleHistoryMember: true },
            ] as ConsolidatedEvent[],
            [ Level.HIGH ]: [
                { isBestPossibleHistoryMember: true },
            ] as ConsolidatedEvent[],
            [ Level.EXTREME ]: [
                { isBestPossibleHistoryMember: true },
                { isBestPossibleHistoryMember: false },
                { isBestPossibleHistoryMember: false },
            ] as ConsolidatedEvent[],
        }

        expect(() => ensureOneBestPossibleEventPerLevel(consolidatedHistories)).toThrow(new Error("History had at the MEDIUM level more than one event marked as member of the best possible history."))
    })

    it("throws an error if a consolidated history has, at a particular level, no event which is identified as being the member of the best possible history", () => {
        const consolidatedHistories: ConsolidatedHistories = {
            [ Level.MEDIUM ]: [
                { isBestPossibleHistoryMember: false },
                { isBestPossibleHistoryMember: false },
            ] as ConsolidatedEvent[],
            [ Level.HIGH ]: [
                { isBestPossibleHistoryMember: true },
            ] as ConsolidatedEvent[],
            [ Level.EXTREME ]: [
                { isBestPossibleHistoryMember: true },
                { isBestPossibleHistoryMember: false },
                { isBestPossibleHistoryMember: false },
            ] as ConsolidatedEvent[],
        }

        expect(() => ensureOneBestPossibleEventPerLevel(consolidatedHistories)).toThrow(new Error("History had at the MEDIUM level no event marked as member of the best possible history."))
    })

    it("does not throw an error if a consolidated history does not have more than one best possible event per level", () => {
        const consolidatedHistories: ConsolidatedHistories = {
            [ Level.MEDIUM ]: [
                { isBestPossibleHistoryMember: true },
                { isBestPossibleHistoryMember: false },
            ] as ConsolidatedEvent[],
            [ Level.HIGH ]: [
                { isBestPossibleHistoryMember: true },
            ] as ConsolidatedEvent[],
            [ Level.EXTREME ]: [
                { isBestPossibleHistoryMember: true },
                { isBestPossibleHistoryMember: false },
                { isBestPossibleHistoryMember: false },
            ] as ConsolidatedEvent[],
        }

        expect(() => ensureOneBestPossibleEventPerLevel(consolidatedHistories)).not.toThrow()
    })
})
