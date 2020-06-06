const {calculateLevelRank} = require("../../../../src/boundsAnalysis/analyzeHistories/calculateLevelRank")

describe("calculateLevelRank", () => {
    let withinHalfLevelEda
    describe("when within a half-step of the EDA", () => {
        beforeEach(() => {
            withinHalfLevelEda = true
        })

        it("works for EDA midpoints events", () => {
            const type = "EDA"

            const result = calculateLevelRank(type, withinHalfLevelEda)

            expect(result).toBe(1)
        })

        it("works for comma mean events", () => {
            const type = "MEAN"

            const result = calculateLevelRank(type, withinHalfLevelEda)

            expect(result).toBe(2)
        })

        it("works for size category bound events", () => {
            const type = "SIZE"

            const result = calculateLevelRank(type, withinHalfLevelEda)

            expect(result).toBe(3)
        })
    })

    describe("when not within a half-step of the EDA", () => {
        beforeEach(() => {
            withinHalfLevelEda = false
        })

        it("works for EDA midpoints events", () => {
            const type = "EDA"

            const result = calculateLevelRank(type, withinHalfLevelEda)

            expect(result).toBe(4)
        })

        it("works for comma mean events events", () => {
            const type = "MEAN"

            const result = calculateLevelRank(type, withinHalfLevelEda)

            expect(result).toBe(5)
        })

        it("works for size category bound events", () => {
            const type = "SIZE"

            const result = calculateLevelRank(type, withinHalfLevelEda)

            expect(result).toBe(6)
        })
    })

    it("gives the second-lowest rank to override events", () => {
        const type = "OVERRIDE"

        const result = calculateLevelRank(type, withinHalfLevelEda)

        expect(result).toBe(7)
    })

    it("gives the lowest rank to impossible events", () => {
        const type = "IMPOSSIBLE"

        const result = calculateLevelRank(type, withinHalfLevelEda)

        expect(result).toBe(8)
    })
})
