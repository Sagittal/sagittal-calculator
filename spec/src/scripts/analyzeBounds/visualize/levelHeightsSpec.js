const {computeLevelHeights} = require("../../../../../src/scripts/analyzeBounds/visualize/levelHeights")
const {ACCURACY_THRESHOLD} = require("../../../../../src/utilities/constants")

describe("computeLevelHeights", () => {
    it("gives the correct height for the tops of each level", () => {
        const result = computeLevelHeights(0)

        expect(result["MEDIUM"]).toBeCloseTo(410, ACCURACY_THRESHOLD)
        expect(result["HIGH"]).toBeCloseTo(310, ACCURACY_THRESHOLD)
        expect(result["ULTRA"]).toBeCloseTo(210, ACCURACY_THRESHOLD)
        expect(result["EXTREME"]).toBeCloseTo(110, ACCURACY_THRESHOLD)
        expect(result["INSANE"]).toBeCloseTo(10, ACCURACY_THRESHOLD)
    })

    it("gives the correct height for the centers of each level", () => {
        const result = computeLevelHeights(0.5)

        expect(result["MEDIUM"]).toBeCloseTo(460, ACCURACY_THRESHOLD)
        expect(result["HIGH"]).toBeCloseTo(360, ACCURACY_THRESHOLD)
        expect(result["ULTRA"]).toBeCloseTo(260, ACCURACY_THRESHOLD)
        expect(result["EXTREME"]).toBeCloseTo(160, ACCURACY_THRESHOLD)
        expect(result["INSANE"]).toBeCloseTo(60, ACCURACY_THRESHOLD)
    })

    it("gives the correct height for the bottoms of each level", () => {
        const result = computeLevelHeights(1)

        expect(result["MEDIUM"]).toBeCloseTo(510, ACCURACY_THRESHOLD)
        expect(result["HIGH"]).toBeCloseTo(410, ACCURACY_THRESHOLD)
        expect(result["ULTRA"]).toBeCloseTo(310, ACCURACY_THRESHOLD)
        expect(result["EXTREME"]).toBeCloseTo(210, ACCURACY_THRESHOLD)
        expect(result["INSANE"]).toBeCloseTo(110, ACCURACY_THRESHOLD)
    })
})
