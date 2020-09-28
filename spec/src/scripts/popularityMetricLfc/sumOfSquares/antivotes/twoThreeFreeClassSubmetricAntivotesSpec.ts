import { BASE_2, log, Power, RationalMonzo } from "../../../../../../src/general/math"
import { TwoThreeFreeClass } from "../../../../../../src/general/music"
import { ParameterValue } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import { computeSubmetricAntivotes } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/submetricAntivotes"
import { compute23FreeClassSubmetricAntivotes } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/twoThreeFreeClassSubmetricAntivotes"
import { Antivotes } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/types"

describe("compute23FreeClassSubmetricAntivotes", (): void => {
    it("splits the quotient into numerator and denominator, computes their submetric antivotes separately, then adjusts the denominator by k", (): void => {
        const kAsCoefficient = 0.46 as ParameterValue
        const twoThreeFreeClass = { quotient: [11, 7] } as TwoThreeFreeClass
        const submetric = { kAsCoefficient, sum: true }

        const actual = compute23FreeClassSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1] as RationalMonzo, submetric) as Antivotes +
            kAsCoefficient * computeSubmetricAntivotes([0, 0, 0, 1] as RationalMonzo, submetric) as Antivotes,
        )
    })

    it("another example", (): void => {
        const kAsCoefficient = 0.46 as ParameterValue
        const twoThreeFreeClass = { quotient: [25, 11] } as TwoThreeFreeClass // 10:11
        const submetric = { kAsCoefficient, sum: true }

        const actual = compute23FreeClassSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 2] as RationalMonzo, submetric) as Antivotes +
            kAsCoefficient * computeSubmetricAntivotes([0, 0, 0, 0, 1] as RationalMonzo, submetric) as Antivotes,
        )
    })

    it("defaults k and j to 1", (): void => {
        const twoThreeFreeClass = { quotient: [5, 7] } as TwoThreeFreeClass
        const submetric = { sum: true }

        const actual = compute23FreeClassSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1, -1] as RationalMonzo, submetric),
        )
    })

    it("supports deciding the numinator and diminuator by which is the greater of the two", (): void => {
        const kAsCoefficient = 0.46 as ParameterValue
        const twoThreeFreeClass = { quotient: [25, 11] } as TwoThreeFreeClass // 10:11
        const useNuminator = true
        const submetric = { kAsCoefficient, useNuminator, sum: true }

        const actual = compute23FreeClassSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1] as RationalMonzo, submetric) as Antivotes +
            kAsCoefficient * computeSubmetricAntivotes([0, 0, 2] as RationalMonzo, submetric) as Antivotes,
        )
    })

    it("works when k = 0 (and j = 1) therefore it only looks at the numerator", (): void => {
        const kAsCoefficient = 0 as ParameterValue
        const twoThreeFreeClass = { quotient: [5, 7] } as TwoThreeFreeClass
        const submetric = { kAsCoefficient, sum: true }

        const actual = compute23FreeClassSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1] as RationalMonzo, submetric),
        )
    })

    it("works when j = 0 (and k = 1) therefore it only looks at the denominator", (): void => {
        const jAsCoefficient = 0 as ParameterValue
        const twoThreeFreeClass = { quotient: [5, 7] } as TwoThreeFreeClass
        const submetric = { jAsCoefficient, sum: true }

        const actual = compute23FreeClassSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 0, 1] as RationalMonzo, submetric),
        )
    })

    it("works when k is a logarithm base", (): void => {
        const kAsLogarithmBase = 2 as ParameterValue
        const twoThreeFreeClass = { quotient: [5, 7] } as TwoThreeFreeClass
        const submetric = { kAsLogarithmBase, sum: true }

        const actual = compute23FreeClassSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1] as RationalMonzo, submetric) as Antivotes +
            log(
                computeSubmetricAntivotes([0, 0, 0, 1] as RationalMonzo, submetric) as number as Power,
                BASE_2,
            ) as Antivotes,
        )
    })

    it("works when k is a power exponent", (): void => {
        const kAsPowerExponent = 2 as ParameterValue
        const twoThreeFreeClass = { quotient: [5, 7] } as TwoThreeFreeClass
        const submetric = { kAsPowerExponent, sum: true }

        const actual = compute23FreeClassSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1] as RationalMonzo, submetric) as Antivotes +
            computeSubmetricAntivotes([0, 0, 0, 1] as RationalMonzo, submetric) ** 2 as Antivotes,
        )
    })

    it("works when k is a power base", (): void => {
        const kAsPowerBase = 2 as ParameterValue
        const twoThreeFreeClass = { quotient: [5, 7] } as TwoThreeFreeClass
        const submetric = { kAsPowerBase, sum: true }

        const actual = compute23FreeClassSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1] as RationalMonzo, submetric) as Antivotes +
            2 ** computeSubmetricAntivotes([0, 0, 0, 1] as RationalMonzo, submetric) as Antivotes,
        )
    })

    it("works when j is a logarithm base", (): void => {
        const jAsLogarithmBase = 2 as ParameterValue
        const twoThreeFreeClass = { quotient: [5, 7] } as TwoThreeFreeClass
        const submetric = { jAsLogarithmBase, sum: true }

        const actual = compute23FreeClassSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            log(computeSubmetricAntivotes([0, 0, 1] as RationalMonzo, submetric) as number as Power, BASE_2) as number +
            computeSubmetricAntivotes([0, 0, 0, 1] as RationalMonzo, submetric) as Antivotes,
        )
    })

    it("works when j is a power exponent", (): void => {
        const jAsPowerExponent = 2 as ParameterValue
        const twoThreeFreeClass = { quotient: [5, 7] } as TwoThreeFreeClass
        const submetric = { jAsPowerExponent, sum: true }

        const actual = compute23FreeClassSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1] as RationalMonzo, submetric) ** 2 as Antivotes +
            computeSubmetricAntivotes([0, 0, 0, 1] as RationalMonzo, submetric) as Antivotes,
        )
    })

    it("works when j is a power base", (): void => {
        const jAsPowerBase = 2 as ParameterValue
        const twoThreeFreeClass = { quotient: [5, 7] } as TwoThreeFreeClass
        const submetric = { jAsPowerBase, sum: true }

        const actual = compute23FreeClassSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            2 ** computeSubmetricAntivotes([0, 0, 1] as RationalMonzo, submetric) as Antivotes +
            computeSubmetricAntivotes([0, 0, 0, 1] as RationalMonzo, submetric) as Antivotes,
        )
    })
})
