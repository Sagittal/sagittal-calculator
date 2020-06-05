const {calculateWithinHalfLevelEda} = require("../../../../src/boundsAnalysis/calculateHistories/calculateWithinHalfLevelEda")

describe("calculateWithinHalfLevelEda", () => {
    it("return true when the position is close to the previous position by an amount less than or equal to the size of a half-step of the EDA at this level", () => {
        const level = "high"
        const position = 48
        const previousPosition = 49.2

        // must be within 1.20941495806

        const result = calculateWithinHalfLevelEda(level, position, previousPosition)

        expect(result).toBe(true)
    })

    it("return false when the position is not close to the previous position by an amount less than or equal to the size of a half-step of the EDA at this level", () => {
        const level = "high"
        const position = 48
        const previousPosition = 49.21

        // must be within 1.20941495806

        const result = calculateWithinHalfLevelEda(level, position, previousPosition)

        expect(result).toBe(false)
    })
})
