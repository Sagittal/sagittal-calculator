import { BASE_2, log, Monzo, Power } from "../../../../../../src/general/math"
import { TwoThreeFreeClass } from "../../../../../../src/general/music"
import { ParameterValue } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import { computeRatioSubmetricAntivotes } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/ratioSubmetricAntivotes"
import { computeSubmetricAntivotes } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/submetricAntivotes"
import { Antivotes } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/types"

describe("computeRatioSubmetricAntivotes", () => {
    it("splits the ratio into numerator and denominator, computes their submetric antivotes separately, then adjusts the denominator by k", () => {
        const kAsCoefficient = 0.46 as ParameterValue
        const twoThreeFreeClass = { ratio: [11, 7] } as TwoThreeFreeClass
        const submetric = { kAsCoefficient, sum: true }

        const actual = computeRatioSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1] as Monzo, submetric) as Antivotes +
            kAsCoefficient * computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric) as Antivotes,
        )
    })

    it("another example", () => {
        const kAsCoefficient = 0.46 as ParameterValue
        const twoThreeFreeClass = { ratio: [25, 11] } as TwoThreeFreeClass // 10:11
        const submetric = { kAsCoefficient, sum: true }

        const actual = computeRatioSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 2] as Monzo, submetric) as Antivotes +
            kAsCoefficient * computeSubmetricAntivotes([0, 0, 0, 0, 1] as Monzo, submetric) as Antivotes,
        )
    })

    it("defaults k and j to 1", () => {
        const twoThreeFreeClass = { ratio: [5, 7] } as TwoThreeFreeClass
        const submetric = { sum: true }

        const actual = computeRatioSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1, -1] as Monzo, submetric),
        )
    })

    it("supports deciding the numinator and diminuator by which is the greater of the two", () => {
        const kAsCoefficient = 0.46 as ParameterValue
        const twoThreeFreeClass = { ratio: [25, 11] } as TwoThreeFreeClass // 10:11
        const useNuminator = true
        const submetric = { kAsCoefficient, useNuminator, sum: true }

        const actual = computeRatioSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1] as Monzo, submetric) as Antivotes +
            kAsCoefficient * computeSubmetricAntivotes([0, 0, 2] as Monzo, submetric) as Antivotes,
        )
    })

    it("works when k = 0 (and j = 1) therefore it only looks at the numerator", () => {
        const kAsCoefficient = 0 as ParameterValue
        const twoThreeFreeClass = { ratio: [5, 7] } as TwoThreeFreeClass
        const submetric = { kAsCoefficient, sum: true }

        const actual = computeRatioSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric),
        )
    })

    it("works when j = 0 (and k = 1) therefore it only looks at the denominator", () => {
        const jAsCoefficient = 0 as ParameterValue
        const twoThreeFreeClass = { ratio: [5, 7] } as TwoThreeFreeClass
        const submetric = { jAsCoefficient, sum: true }

        const actual = computeRatioSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric),
        )
    })

    it("works when k is a logarithm base", () => {
        const kAsLogarithmBase = 2 as ParameterValue
        const twoThreeFreeClass = { ratio: [5, 7] } as TwoThreeFreeClass
        const submetric = { kAsLogarithmBase, sum: true }

        const actual = computeRatioSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric) as Antivotes +
            log(computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric) as number as Power, BASE_2) as Antivotes,
        )
    })

    it("works when k is a power exponent", () => {
        const kAsPowerExponent = 2 as ParameterValue
        const twoThreeFreeClass = { ratio: [5, 7] } as TwoThreeFreeClass
        const submetric = { kAsPowerExponent, sum: true }

        const actual = computeRatioSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric) as Antivotes +
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric) ** 2 as Antivotes,
        )
    })

    it("works when k is a power base", () => {
        const kAsPowerBase = 2 as ParameterValue
        const twoThreeFreeClass = { ratio: [5, 7] } as TwoThreeFreeClass
        const submetric = { kAsPowerBase, sum: true }

        const actual = computeRatioSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric) as Antivotes +
            2 ** computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric) as Antivotes,
        )
    })

    it("works when j is a logarithm base", () => {
        const jAsLogarithmBase = 2 as ParameterValue
        const twoThreeFreeClass = { ratio: [5, 7] } as TwoThreeFreeClass
        const submetric = { jAsLogarithmBase, sum: true }

        const actual = computeRatioSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            log(computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric) as number as Power, BASE_2) as number +
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric) as Antivotes,
        )
    })

    it("works when j is a power exponent", () => {
        const jAsPowerExponent = 2 as ParameterValue
        const twoThreeFreeClass = { ratio: [5, 7] } as TwoThreeFreeClass
        const submetric = { jAsPowerExponent, sum: true }

        const actual = computeRatioSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric) ** 2 as Antivotes +
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric) as Antivotes,
        )
    })

    it("works when j is a power base", () => {
        const jAsPowerBase = 2 as ParameterValue
        const twoThreeFreeClass = { ratio: [5, 7] } as TwoThreeFreeClass
        const submetric = { jAsPowerBase, sum: true }

        const actual = computeRatioSubmetricAntivotes(twoThreeFreeClass, submetric)

        expect(actual).toBe(
            2 ** computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric) as Antivotes +
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric) as Antivotes,
        )
    })
})
