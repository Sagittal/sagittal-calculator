const {computeWeightedSubmetricAntivotes} = require("../../../../../src/scripts/unpopularityMetric/antivotes/weightedSubmetricAntivotes")
const {computeRatioSubmetricAntivotes} = require("../../../../../src/scripts/unpopularityMetric/antivotes/ratioSubmetricAntivotes")
const ratioSubmetricUnpopularity = require("../../../../../src/scripts/unpopularityMetric/antivotes/ratioSubmetricAntivotes")
const {computeLog} = require("../../../../../src/utilities/log")
const {PARAMETER, SUBMETRIC_TYPE} = require("../../../../../src/scripts/unpopularityMetric/constants")

describe("computeWeightedSubmetricAntivotes", () => {
    it("returns 0 when the weight is 0", () => {
        const fiveRoughRatio = [15, 14]
        const submetric = {[PARAMETER.WEIGHT]: 0}

        const result = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(0)
    })

    it("does not waste resources calling computeRatioSubmetricAntivotes when the weight is 0", () => {
        spyOn(ratioSubmetricUnpopularity, "computeRatioSubmetricAntivotes")

        const fiveRoughRatio = [15, 14]
        const submetric = {[PARAMETER.WEIGHT]: 0}

        computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(ratioSubmetricUnpopularity.computeRatioSubmetricAntivotes).not.toHaveBeenCalled()
    })

    it("returns the full submetric antivotes when the weight is 1", () => {
        const fiveRoughRatio = [15, 14]
        const submetric = {[PARAMETER.WEIGHT]: 1}

        const result = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(computeRatioSubmetricAntivotes(fiveRoughRatio))
    })

    it("returns the weighted value of the submetric antivotes", () => {
        const fiveRoughRatio = [15, 14]
        const submetric = {[PARAMETER.WEIGHT]: 0.5}

        const result = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(0.5 * computeRatioSubmetricAntivotes(fiveRoughRatio))
    })

    it("defaults the weight to 1", () => {
        const fiveRoughRatio = [15, 14]
        const submetric = {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR}

        const result = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(17)
    })

    it("can use the weight as a base", () => {
        const fiveRoughRatio = [15, 14]
        const submetric = {[PARAMETER.WEIGHT]: 2, [PARAMETER.WEIGHT_IS_BASE]: true}

        const result = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(computeLog(computeRatioSubmetricAntivotes(fiveRoughRatio), 2))
    })

    it("can use the weight as an exponent", () => {
        const fiveRoughRatio = [15, 14]
        const submetric = {[PARAMETER.WEIGHT]: 0.5, [PARAMETER.WEIGHT_IS_EXPONENT]: true}

        const result = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(computeRatioSubmetricAntivotes(fiveRoughRatio) ** 0.5)
    })
})
