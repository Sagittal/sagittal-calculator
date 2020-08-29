import { log, Ratio } from "../../../../../../src/general"
import { BASE_2, Power } from "../../../../../../src/general/math"
import { Parameter } from "../../../../../../src/scripts/lfc/sumOfSquares"
import * as ratioSubmetricAntivotes
    from "../../../../../../src/scripts/lfc/sumOfSquares/antivotes/ratioSubmetricAntivotes"
import { computeWeightedSubmetricAntivotes } from "../../../../../../src/scripts/lfc/sumOfSquares/antivotes/weightedSubmetricAntivotes"
import { Antivotes } from "../../../../../../src/scripts/lfc/sumOfSquares/types"

describe("computeWeightedSubmetricAntivotes", () => {
    it("returns 0 when the weight is 0", () => {
        const fiveRoughRatio = [15, 14] as Ratio
        const submetric = { [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0, [ Parameter.SUM ]: true }

        const actual = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        const expected = 0 as Antivotes
        expect(actual).toBe(expected)
    })

    it("does not waste resources calling computeRatioSubmetricAntivotes when the weight is 0", () => {
        spyOn(ratioSubmetricAntivotes, "computeRatioSubmetricAntivotes")

        const fiveRoughRatio = [15, 14] as Ratio
        const submetric = { [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0, [ Parameter.SUM ]: true }

        computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(ratioSubmetricAntivotes.computeRatioSubmetricAntivotes).not.toHaveBeenCalled()
    })

    it("returns the full submetric antivotes when the weight is 1", () => {
        const fiveRoughRatio = [15, 14] as Ratio
        const submetric = { [ Parameter.WEIGHT_AS_COEFFICIENT ]: 1, [ Parameter.SUM ]: true }

        const actual = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        const expected =
            ratioSubmetricAntivotes.computeRatioSubmetricAntivotes(fiveRoughRatio, { [ Parameter.SUM ]: true })
        expect(actual).toBe(expected)
    })

    it("returns the weighted value of the submetric antivotes", () => {
        const fiveRoughRatio = [15, 14] as Ratio
        const submetric = { [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0.5, [ Parameter.SUM ]: true }

        const actual = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        const expected =
            0.5 *
            ratioSubmetricAntivotes
                .computeRatioSubmetricAntivotes(fiveRoughRatio, { [ Parameter.SUM ]: true }) as Antivotes
        expect(actual).toBe(expected)
    })

    it("defaults the weight to 1", () => {
        const fiveRoughRatio = [15, 14] as Ratio

        const actual = computeWeightedSubmetricAntivotes(fiveRoughRatio, { [ Parameter.SUM ]: true })

        const expected = 17 as Antivotes
        expect(actual).toBe(expected)
    })

    it("can use the weight as a logarithm base", () => {
        const fiveRoughRatio = [15, 14] as Ratio
        const submetric = { [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: 2, [ Parameter.SUM ]: true }

        const actual = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        const expected = log(
            ratioSubmetricAntivotes
                .computeRatioSubmetricAntivotes(fiveRoughRatio, { [ Parameter.SUM ]: true }) as number as Power,
            BASE_2,
        ) as number as Antivotes
        expect(actual).toBe(expected)
    })

    it("can use the weight as a power exponent", () => {
        const fiveRoughRatio = [15, 14] as Ratio
        const submetric = { [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: 2, [ Parameter.SUM ]: true }

        const actual = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        const expected = ratioSubmetricAntivotes.computeRatioSubmetricAntivotes(
            fiveRoughRatio,
            { [ Parameter.SUM ]: true },
        ) ** 2 as Antivotes
        expect(actual).toBe(expected)
    })

    it("can use the weight as a power base", () => {
        const fiveRoughRatio = [15, 14] as Ratio
        const submetric = { [ Parameter.WEIGHT_AS_POWER_BASE ]: 2, [ Parameter.SUM ]: true }

        const actual = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

        const expected = 2 ** ratioSubmetricAntivotes.computeRatioSubmetricAntivotes(
            fiveRoughRatio,
            { [ Parameter.SUM ]: true },
        ) as Antivotes
        expect(actual).toBe(expected)
    })
})
