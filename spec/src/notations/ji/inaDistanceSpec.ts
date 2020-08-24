import { Cents } from "../../../../src/general"
import { ACCURACY_THRESHOLD } from "../../../../src/general/code"
import { computeInaDistance, Level } from "../../../../src/notations/ji"

describe("inaDistance", () => {
    it("returns the distance as a proportion of the size of the ina at that level", () => {
        const distance: Cents = 0.1 as Cents

        expect(computeInaDistance(distance, Level.MEDIUM)).toBeCloseTo(0.0184720929595055, ACCURACY_THRESHOLD)
        expect(computeInaDistance(distance, Level.HIGH)).toBeCloseTo(0.041342303290321826, ACCURACY_THRESHOLD)
        expect(computeInaDistance(distance, Level.ULTRA)).toBeCloseTo(0.05101816150720566, ACCURACY_THRESHOLD)
        expect(computeInaDistance(distance, Level.EXTREME)).toBeCloseTo(0.20495226950308482, ACCURACY_THRESHOLD)
        expect(computeInaDistance(distance, Level.INSANE)).toBeCloseTo(0.7116153906780928, ACCURACY_THRESHOLD)
    })
})
