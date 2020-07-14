import { computeLog, Ratio } from "../../../../../../src/general"
import * as ratioSubmetricAntivotes
    from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/antivotes/ratioSubmetricAntivotes"
import { computeWeightedSubmetricAntivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/antivotes/weightedSubmetricAntivotes"
import { Antivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"
import { Parameter, SubmetricType } from "../../../../../../src/scripts/unpopularityMetric/types"

describe("computeWeightedSubmetricAntivotes", () => {
    it("returns 0 when the weight is 0", () => {
        const fiveRoughRatio = [15, 14] as Ratio
        const submetric = { [ Parameter.WEIGHT ]: 0 }

        const result = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(0 as Antivotes)
    })

    it("does not waste resources calling computeRatioSubmetricAntivotes when the weight is 0", () => {
        spyOn(ratioSubmetricAntivotes, "computeRatioSubmetricAntivotes")

        const fiveRoughRatio = [15, 14] as Ratio
        const submetric = { [ Parameter.WEIGHT ]: 0 }

        computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(ratioSubmetricAntivotes.computeRatioSubmetricAntivotes).not.toHaveBeenCalled()
    })

    it("returns the full submetric antivotes when the weight is 1", () => {
        const fiveRoughRatio = [15, 14] as Ratio
        const submetric = { [ Parameter.WEIGHT ]: 1 }

        const result = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(ratioSubmetricAntivotes.computeRatioSubmetricAntivotes(fiveRoughRatio))
    })

    it("returns the weighted value of the submetric antivotes", () => {
        const fiveRoughRatio = [15, 14] as Ratio
        const submetric = { [ Parameter.WEIGHT ]: 0.5 }

        const result = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(0.5 * ratioSubmetricAntivotes.computeRatioSubmetricAntivotes(fiveRoughRatio) as Antivotes)
    })

    it("defaults the weight to 1", () => {
        const fiveRoughRatio = [15, 14] as Ratio
        const submetric = { [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.SOAPFAR }

        const result = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(17 as Antivotes)
    })

    it("can use the weight as a base", () => {
        const fiveRoughRatio = [15, 14] as Ratio
        const submetric = { [ Parameter.WEIGHT ]: 2, [ Parameter.WEIGHT_IS_BASE ]: true }

        const result = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(computeLog(ratioSubmetricAntivotes.computeRatioSubmetricAntivotes(fiveRoughRatio), 2) as Antivotes)
    })

    it("can use the weight as an exponent", () => {
        const fiveRoughRatio = [15, 14] as Ratio
        const submetric = { [ Parameter.WEIGHT ]: 0.5, [ Parameter.WEIGHT_IS_EXPONENT ]: true }

        const result = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(ratioSubmetricAntivotes.computeRatioSubmetricAntivotes(fiveRoughRatio) ** 0.5 as Antivotes)
    })
})
