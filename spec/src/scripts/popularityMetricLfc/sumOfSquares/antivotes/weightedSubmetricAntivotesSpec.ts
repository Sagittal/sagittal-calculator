import { log, TwoThreeFreeClass } from "../../../../../../src/general"
import { BASE_2, Power } from "../../../../../../src/general/math"
import { Parameter, ParameterValue } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import * as quotientSubmetricAntivotes
    from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/twoThreeFreeClassSubmetricAntivotes"
import { computeWeightedSubmetricAntivotes } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/weightedSubmetricAntivotes"
import { Antivotes } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/types"

describe("computeWeightedSubmetricAntivotes", (): void => {
    it("returns 0 when the weight is 0", (): void => {
        const twoThreeFreeClass = { quotient: [15, 14] } as TwoThreeFreeClass
        const submetric = { [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0 as ParameterValue, [ Parameter.SUM ]: true }

        const actual = computeWeightedSubmetricAntivotes(twoThreeFreeClass, submetric)

        const expected = 0 as Antivotes
        expect(actual).toBe(expected)
    })

    it("does not waste resources calling compute23FreeClassSubmetricAntivotes when the weight is 0", (): void => {
        spyOn(quotientSubmetricAntivotes, "compute23FreeClassSubmetricAntivotes")

        const twoThreeFreeClass = { quotient: [15, 14] } as TwoThreeFreeClass
        const submetric = { [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0 as ParameterValue, [ Parameter.SUM ]: true }

        computeWeightedSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(quotientSubmetricAntivotes.compute23FreeClassSubmetricAntivotes).not.toHaveBeenCalled()
    })

    it("returns the full submetric antivotes when the weight is 1", (): void => {
        const twoThreeFreeClass = { quotient: [15, 14] } as TwoThreeFreeClass
        const submetric = { [ Parameter.WEIGHT_AS_COEFFICIENT ]: 1 as ParameterValue, [ Parameter.SUM ]: true }

        const actual = computeWeightedSubmetricAntivotes(twoThreeFreeClass, submetric)

        const expected = quotientSubmetricAntivotes.compute23FreeClassSubmetricAntivotes(
            twoThreeFreeClass,
            { [ Parameter.SUM ]: true },
        )
        expect(actual).toBe(expected)
    })

    it("returns the weighted value of the submetric antivotes", (): void => {
        const twoThreeFreeClass = { quotient: [15, 14] } as TwoThreeFreeClass
        const submetric = { [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0.5 as ParameterValue, [ Parameter.SUM ]: true }

        const actual = computeWeightedSubmetricAntivotes(twoThreeFreeClass, submetric)

        const expected =
            0.5 *
            quotientSubmetricAntivotes
                .compute23FreeClassSubmetricAntivotes(twoThreeFreeClass, { [ Parameter.SUM ]: true }) as Antivotes
        expect(actual).toBe(expected)
    })

    it("defaults the weight to 1", (): void => {
        const twoThreeFreeClass = { quotient: [15, 14] } as TwoThreeFreeClass

        const actual = computeWeightedSubmetricAntivotes(twoThreeFreeClass, { [ Parameter.SUM ]: true })

        const expected = 17 as Antivotes
        expect(actual).toBe(expected)
    })

    it("can use the weight as a logarithm base", (): void => {
        const twoThreeFreeClass = { quotient: [15, 14] } as TwoThreeFreeClass
        const submetric = { [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: 2 as ParameterValue, [ Parameter.SUM ]: true }

        const actual = computeWeightedSubmetricAntivotes(twoThreeFreeClass, submetric)

        const expected = log(
            quotientSubmetricAntivotes.compute23FreeClassSubmetricAntivotes(
                twoThreeFreeClass,
                { [ Parameter.SUM ]: true },
            ) as number as Power,
            BASE_2,
        ) as number as Antivotes
        expect(actual).toBe(expected)
    })

    it("can use the weight as a power exponent", (): void => {
        const twoThreeFreeClass = { quotient: [15, 14] } as TwoThreeFreeClass
        const submetric = { [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: 2 as ParameterValue, [ Parameter.SUM ]: true }

        const actual = computeWeightedSubmetricAntivotes(twoThreeFreeClass, submetric)

        const expected = quotientSubmetricAntivotes.compute23FreeClassSubmetricAntivotes(
            twoThreeFreeClass,
            { [ Parameter.SUM ]: true },
        ) ** 2 as Antivotes
        expect(actual).toBe(expected)
    })

    it("can use the weight as a power base", (): void => {
        const twoThreeFreeClass = { quotient: [15, 14] } as TwoThreeFreeClass
        const submetric = { [ Parameter.WEIGHT_AS_POWER_BASE ]: 2 as ParameterValue, [ Parameter.SUM ]: true }

        const actual = computeWeightedSubmetricAntivotes(twoThreeFreeClass, submetric)

        const expected = 2 ** quotientSubmetricAntivotes.compute23FreeClassSubmetricAntivotes(
            twoThreeFreeClass,
            { [ Parameter.SUM ]: true },
        ) as Antivotes
        expect(actual).toBe(expected)
    })
})
