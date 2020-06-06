const {calculateInitialPosition} = require("../../../../src/boundsAnalysis/data/calculateInitialPosition")

describe("calculateInitialPosition", () => {
    it("returns the mean of the neighbor commas of the bound's actual position at its introducing level", () => {
        const bound = {
            levels: ["high", "extreme"],
            position: 42, // between ~|\ (40.0043524607400) and //| (43.0125791934297) at the high level
        }

        const result = calculateInitialPosition(bound)

        expect(result).toEqual((40.0043524607400 + 43.0125791934297) / 2)
    })

    it("when given a level (for an overriding event) will use that level instead of the initial level for the bound for finding the neighbor commas", () => {
        const bound = {
            levels: ["high", "extreme"],
            position: 42, // between .//| (41.0588584054956) and //| (43.0125791934297) at the veryHigh level
        }
        const level = "veryHigh"

        const result = calculateInitialPosition(bound, level)

        expect(result).toEqual((41.0588584054956 + 43.0125791934297) / 2)
    })
})
