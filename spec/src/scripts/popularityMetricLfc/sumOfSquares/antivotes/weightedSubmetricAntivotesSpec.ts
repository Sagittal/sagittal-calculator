import {log, Two3FreeClass} from "../../../../../../src/general"
import {BASE_2, Power} from "../../../../../../src/general/math"
import {Parameter} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import * as two3FreeClassSubmetricAntivotes
    from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/two3FreeClassSubmetricAntivotes"
import {computeWeightedSubmetricAntivotes} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/weightedSubmetricAntivotes"
import {Antivotes} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/types"
import {ParameterValue} from "../../../../../../src/scripts/types"

describe("computeWeightedSubmetricAntivotes", (): void => {
    const two3FreeClass = {monzo: [-1, 1, 1, -1]} as Two3FreeClass

    it("returns 0 when the weight is 0", (): void => {
        const submetric = {[Parameter.WEIGHT_AS_COEFFICIENT]: 0 as ParameterValue, [Parameter.SUM]: true}

        const actual = computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

        const expected = 0 as Antivotes
        expect(actual).toBe(expected)
    })

    it("does not waste resources calling compute23FreeClassSubmetricAntivotes when the weight is 0", (): void => {
        spyOn(two3FreeClassSubmetricAntivotes, "compute23FreeClassSubmetricAntivotes")

        const submetric = {[Parameter.WEIGHT_AS_COEFFICIENT]: 0 as ParameterValue, [Parameter.SUM]: true}

        computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

        expect(two3FreeClassSubmetricAntivotes.compute23FreeClassSubmetricAntivotes).not.toHaveBeenCalled()
    })

    it("returns the full submetric antivotes when the weight is 1", (): void => {
        const submetric = {[Parameter.WEIGHT_AS_COEFFICIENT]: 1 as ParameterValue, [Parameter.SUM]: true}

        const actual = computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

        const expected = two3FreeClassSubmetricAntivotes.compute23FreeClassSubmetricAntivotes(
            two3FreeClass,
            {[Parameter.SUM]: true},
        )
        expect(actual).toBe(expected)
    })

    it("returns the weighted value of the submetric antivotes", (): void => {
        const submetric = {[Parameter.WEIGHT_AS_COEFFICIENT]: 0.5 as ParameterValue, [Parameter.SUM]: true}

        const actual = computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

        const expected =
            0.5 *
            two3FreeClassSubmetricAntivotes
                .compute23FreeClassSubmetricAntivotes(two3FreeClass, {[Parameter.SUM]: true}) as Antivotes
        expect(actual).toBe(expected)
    })

    it("defaults the weight to 1", (): void => {

        const actual = computeWeightedSubmetricAntivotes(two3FreeClass, {[Parameter.SUM]: true})

        const expected = 17 as Antivotes
        expect(actual).toBe(expected)
    })

    it("can use the weight as a logarithm base", (): void => {
        const submetric = {[Parameter.WEIGHT_AS_LOGARITHM_BASE]: 2 as ParameterValue, [Parameter.SUM]: true}

        const actual = computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

        const expected = log(
            two3FreeClassSubmetricAntivotes.compute23FreeClassSubmetricAntivotes(
                two3FreeClass,
                {[Parameter.SUM]: true},
            ) as number as Power,
            BASE_2,
        ) as number as Antivotes
        expect(actual).toBe(expected)
    })

    it("can use the weight as a power exponent", (): void => {
        const submetric = {[Parameter.WEIGHT_AS_POWER_EXPONENT]: 2 as ParameterValue, [Parameter.SUM]: true}

        const actual = computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

        const expected = two3FreeClassSubmetricAntivotes.compute23FreeClassSubmetricAntivotes(
            two3FreeClass,
            {[Parameter.SUM]: true},
        ) ** 2 as Antivotes
        expect(actual).toBe(expected)
    })

    it("can use the weight as a power base", (): void => {
        const submetric = {[Parameter.WEIGHT_AS_POWER_BASE]: 2 as ParameterValue, [Parameter.SUM]: true}

        const actual = computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

        const expected = 2 ** two3FreeClassSubmetricAntivotes.compute23FreeClassSubmetricAntivotes(
            two3FreeClass,
            {[Parameter.SUM]: true},
        ) as Antivotes
        expect(actual).toBe(expected)
    })
})
