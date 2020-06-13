const {ensureOneBestPossibleEventPerLevel} = require("../../../../src/boundsAnalysis/analyze/ensureOneBestPossibleEventPerLevel")

describe("ensureOneBestPossibleEventPerLevel", () => {
    it("throws an error if a consolidated history has more than one event in a single level which is considered to be the one which is a member of the best possible history", () => {
        const consolidatedHistory = {
            MEDIUM: [
                {isBestPossibleHistoryMember: true},
                {isBestPossibleHistoryMember: true},
            ],
            HIGH: [
                {isBestPossibleHistoryMember: true},
            ],
            EXTREME: [
                {isBestPossibleHistoryMember: true},
                {isBestPossibleHistoryMember: false},
                {isBestPossibleHistoryMember: false},
            ],
        }

        expect(() => ensureOneBestPossibleEventPerLevel(consolidatedHistory)).toThrow(new Error("History had at the MEDIUM level more than one event marked as member of the best possible history."))
    })

    it("throws an error if a consolidated history has, at a particular level, no event which is identified as being the member of the best possible history", () => {
        const consolidatedHistory = {
            MEDIUM: [
                {isBestPossibleHistoryMember: false},
                {isBestPossibleHistoryMember: false},
            ],
            HIGH: [
                {isBestPossibleHistoryMember: true},
            ],
            EXTREME: [
                {isBestPossibleHistoryMember: true},
                {isBestPossibleHistoryMember: false},
                {isBestPossibleHistoryMember: false},
            ],
        }

        expect(() => ensureOneBestPossibleEventPerLevel(consolidatedHistory)).toThrow(new Error("History had at the MEDIUM level no event marked as member of the best possible history."))
    })

    it("does not throw an error if a consolidated history does not have more than one best possible event per level", () => {
        const consolidatedHistory = {
            MEDIUM: [
                {isBestPossibleHistoryMember: true},
                {isBestPossibleHistoryMember: false},
            ],
            HIGH: [
                {isBestPossibleHistoryMember: true},
            ],
            EXTREME: [
                {isBestPossibleHistoryMember: true},
                {isBestPossibleHistoryMember: false},
                {isBestPossibleHistoryMember: false},
            ],
        }

        expect(() => ensureOneBestPossibleEventPerLevel(consolidatedHistory)).not.toThrow()
    })
})
