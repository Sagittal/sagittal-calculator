const {calculateHasPossibleNonoverriddenHistory} = require("../../../../src/boundsAnalysis/analyzeHistories/calculateHasPossibleNonoverriddenHistory")

describe("calculateHasPossibleNonoverriddenHistory", () => {
    it("returns true when the bound has at least one possible history which was not the result of an override", () => {
        const analyzedHistories = [
            {
                possible: true,
                overridden: true,
            },
            {
                possible: true,
            },
            {
                possible: false,
            },
        ]

        const result = calculateHasPossibleNonoverriddenHistory(analyzedHistories)

        expect(result).toBe(true)
    })

    it("returns false when the bound has no possible histories", () => {
        const analyzedHistories = [
            {
                possible: false,
                overridden: true,
            },
            {
                possible: false,
            },
        ]

        const result = calculateHasPossibleNonoverriddenHistory(analyzedHistories)

        expect(result).toBe(false)
    })

    it("returns false when all of a bound's possible histories were the result of overriding", () => {
        const analyzedHistories = [
            {
                possible: true,
                overridden: true,
            },
            {
                possible: true,
                overridden: true,
            },
            {
                possible: false,
            },
        ]

        const result = calculateHasPossibleNonoverriddenHistory(analyzedHistories)

        expect(result).toBe(false)
    })
})
