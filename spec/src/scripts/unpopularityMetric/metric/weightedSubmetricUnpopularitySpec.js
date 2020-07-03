const {computeWeightedSubmetricUnpopularity} = require("../../../../../src/scripts/unpopularityMetric/metric/weightedSubmetricUnpopularity")
const {computeRatioSubmetricUnpopularity} = require("../../../../../src/scripts/unpopularityMetric/metric/ratioSubmetricUnpopularity")
const ratioSubmetricUnpopularity = require("../../../../../src/scripts/unpopularityMetric/metric/ratioSubmetricUnpopularity")
const {ADJUSTMENT, SUBMETRIC_NAME} = require("../../../../../src/scripts/unpopularityMetric/parameters/constants")

describe("computeWeightedSubmetricUnpopularity", () => {
    it("returns 0 when the weight is 0", () => {
        const fiveRoughRatio = [15, 14]
        const adjustments = {[ADJUSTMENT.WEIGHT]: 0}

        const result = computeWeightedSubmetricUnpopularity(fiveRoughRatio, adjustments)

        expect(result).toBe(0)
    })

    it("does not waste resources calling computeRatioSubmetricUnpopularity when the weight is 0", () => {
        spyOn(ratioSubmetricUnpopularity, "computeRatioSubmetricUnpopularity")

        const fiveRoughRatio = [15, 14]
        const adjustments = {[ADJUSTMENT.WEIGHT]: 0}

        computeWeightedSubmetricUnpopularity(fiveRoughRatio, adjustments)

        expect(ratioSubmetricUnpopularity.computeRatioSubmetricUnpopularity).not.toHaveBeenCalled()
    })

    it("returns the full value of the submetric unpopularity when the weight is 1", () => {
        const fiveRoughRatio = [15, 14]
        const adjustments = {[ADJUSTMENT.WEIGHT]: 1}

        const result = computeWeightedSubmetricUnpopularity(fiveRoughRatio, adjustments)

        expect(result).toBe(computeRatioSubmetricUnpopularity(fiveRoughRatio))
    })

    it("returns the weighted value of the submetric unpopularity", () => {
        const fiveRoughRatio = [15, 14]
        const adjustments = {[ADJUSTMENT.WEIGHT]: 0.5}

        const result = computeWeightedSubmetricUnpopularity(fiveRoughRatio, adjustments)

        expect(result).toBe(0.5 * computeRatioSubmetricUnpopularity(fiveRoughRatio))
    })

    it("defaults the weight to 0", () => {
        const fiveRoughRatio = [15, 14]

        const result = computeWeightedSubmetricUnpopularity(fiveRoughRatio)

        expect(result).toBe(0)
    })

    it("defaults the weight to 1 if the submetric is soapfar (the default unpopularity submetric, to which other things are essentially relative, but for consistency and simplicity it can take a weight too)", () => {
        const fiveRoughRatio = [15, 14]
        const submetricType = {name: SUBMETRIC_NAME.SOAPFAR}

        const result = computeWeightedSubmetricUnpopularity(fiveRoughRatio, undefined, submetricType)

        expect(result).toBe(17)
    })

    it("returns 0 when the weight is 0, even when the submetric type is soapfar (it doesn't override this insistence on it being 0)", () => {
        const fiveRoughRatio = [15, 14]
        const adjustments = {[ADJUSTMENT.WEIGHT]: 0}
        const submetricType = {name: SUBMETRIC_NAME.SOAPFAR}

        const result = computeWeightedSubmetricUnpopularity(fiveRoughRatio, adjustments, submetricType)

        expect(result).toBe(0)
    })
})
