import {computeInitialPosition} from "../../../../src/scripts/analyzeBounds/initialPosition"

describe("computeInitialPosition", () => {
    it("returns the mean of the bounded commas at the introducing level", () => {
        const bound = {
            levels: ["HIGH", "EXTREME"],
            position: 42, // between ~|\ (40.0043524607400) and //| (43.0125791934297) at the High level
        }

        const result = computeInitialPosition(bound)

        expect(result).toEqual((40.0043524607400 + 43.0125791934297) / 2)
    })
})
