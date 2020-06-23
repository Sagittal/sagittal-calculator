const {computeInitialPosition} = require("../../../../src/scripts/analyzeBounds/initialPosition")
const {MAXIMUM_POSITION} = require("../../../../src/notations/ji/intervals")

describe("computeInitialPosition", () => {
    it("returns the mean of the bounded commas at the introducing level", () => {
        const bound = {
            levels: ["HIGH", "EXTREME"],
            position: 42, // between ~|\ (40.0043524607400) and //| (43.0125791934297) at the High level
        }

        const result = computeInitialPosition(bound)

        expect(result).toEqual((40.0043524607400 + 43.0125791934297) / 2)
    })

    it("when given a level (for an overriding event) will use that level instead of the initial level for the bound for finding the bounded commas", () => {
        const bound = {
            levels: ["HIGH", "EXTREME"],
            position: 42, // between .//| (41.0588584054956) and //| (43.0125791934297) at the Ultra level
        }
        const level = "ULTRA"

        const result = computeInitialPosition(bound, level)

        expect(result).toEqual((41.0588584054956 + 43.0125791934297) / 2)
    })

    it("gives the maximum position if the position is above the highest comma at that level", () => {
        const bound = {
            levels: ["MEDIUM", "EXTREME"],
            position: 68,
        }
        const level = "MEDIUM"

        const result = computeInitialPosition(bound, level)

        expect(result).toEqual(MAXIMUM_POSITION)
    })
})
