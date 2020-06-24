const {computeInaDistance} = require("../../../../src/notations/ji/inaDistance")
const {ACCURACY_THRESHOLD} = require("../../../../src/utilities/constants")

describe("inaDistance", () => {
    it("returns the distance as a proportion of the size of the ina at that level", () => {
        const distance = 0.1

        expect(computeInaDistance(distance, "MEDIUM")).toBeCloseTo(0.0184720929595055, ACCURACY_THRESHOLD)
        expect(computeInaDistance(distance, "HIGH")).toBeCloseTo(0.041342303290321826, ACCURACY_THRESHOLD)
        expect(computeInaDistance(distance, "ULTRA")).toBeCloseTo(0.05101816150720566, ACCURACY_THRESHOLD)
        expect(computeInaDistance(distance, "EXTREME")).toBeCloseTo(0.20495226950308482, ACCURACY_THRESHOLD)
        expect(computeInaDistance(distance, "INSANE")).toBeCloseTo(0.7116153906780928 , ACCURACY_THRESHOLD)
    })
})
