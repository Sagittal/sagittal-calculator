import {BASE_2, Grade, log, Monzo, Parameter, Power, Two3FreeClass} from "../../../../../../src/general"
import {LfcUnpopularityEstimate} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import {computeSubmetricAntivotes} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/submetricAntivotes"
import {compute23FreeClassSubmetricAntivotes} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/two3FreeClassSubmetricAntivotes"

describe("compute23FreeClassSubmetricAntivotes", (): void => {
    it("splits the 2,3-free class into numerator and denominator, computes their submetric antivotes separately, then adjusts the denominator by k", (): void => {
        const kAsCoefficient = 0.46 as Parameter
        const two3FreeClass = {monzo: [0, 0, 0, -1, 1]} as Two3FreeClass
        const submetric = {kAsCoefficient, sum: true}

        const actual = compute23FreeClassSubmetricAntivotes(two3FreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1] as Monzo<{rational: true}>, submetric) as
                Grade<LfcUnpopularityEstimate> +
            kAsCoefficient *
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo<{rational: true}>, submetric) as
                Grade<LfcUnpopularityEstimate>,
        )
    })

    it("another example", (): void => {
        const kAsCoefficient = 0.46 as Parameter
        const two3FreeClass = {monzo: [0, 0, 2, 0, -1]} as Two3FreeClass // {25/11}₂,₃
        const submetric = {kAsCoefficient, sum: true}

        const actual = compute23FreeClassSubmetricAntivotes(two3FreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 2] as Monzo<{rational: true}>, submetric) as
                Grade<LfcUnpopularityEstimate> +
            kAsCoefficient *
            computeSubmetricAntivotes([0, 0, 0, 0, 1] as Monzo<{rational: true}>, submetric) as
                Grade<LfcUnpopularityEstimate>,
        )
    })

    it("defaults k and j to 1", (): void => {
        const two3FreeClass = {monzo: [0, 0, 1, -1]} as Two3FreeClass
        const submetric = {sum: true}

        const actual = compute23FreeClassSubmetricAntivotes(two3FreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1, -1] as Monzo<{rational: true}>, submetric),
        )
    })

    it("supports deciding the numinator and diminuator by which is the greater of the two", (): void => {
        const kAsCoefficient = 0.46 as Parameter
        const two3FreeClass = {monzo: [0, 0, 2, 0, -1]} as Two3FreeClass // {25/11}₂,₃
        const useNuminator = true
        const submetric = {kAsCoefficient, useNuminator, sum: true}

        const actual = compute23FreeClassSubmetricAntivotes(two3FreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1] as Monzo<{rational: true}>, submetric) as
                Grade<LfcUnpopularityEstimate> +
            kAsCoefficient * computeSubmetricAntivotes([0, 0, 2] as Monzo<{rational: true}>, submetric) as
                Grade<LfcUnpopularityEstimate>,
        )
    })

    it("works when k = 0 (and j = 1) therefore it only looks at the numerator", (): void => {
        const kAsCoefficient = 0 as Parameter
        const two3FreeClass = {monzo: [0, 0, 1, -1]} as Two3FreeClass
        const submetric = {kAsCoefficient, sum: true}

        const actual = compute23FreeClassSubmetricAntivotes(two3FreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo<{rational: true}>, submetric),
        )
    })

    it("works when j = 0 (and k = 1) therefore it only looks at the denominator", (): void => {
        const jAsCoefficient = 0 as Parameter
        const two3FreeClass = {monzo: [0, 0, 1, -1]} as Two3FreeClass
        const submetric = {jAsCoefficient, sum: true}

        const actual = compute23FreeClassSubmetricAntivotes(two3FreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo<{rational: true}>, submetric),
        )
    })

    it("works when k is a logarithm base", (): void => {
        const kAsLogarithmBase = 2 as Parameter
        const two3FreeClass = {monzo: [0, 0, 1, -1]} as Two3FreeClass
        const submetric = {kAsLogarithmBase, sum: true}

        const actual = compute23FreeClassSubmetricAntivotes(two3FreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo<{rational: true}>, submetric) as
                Grade<LfcUnpopularityEstimate> +
            log(
                computeSubmetricAntivotes([0, 0, 0, 1] as Monzo<{rational: true}>, submetric) as number as Power,
                BASE_2,
            ) as Grade<LfcUnpopularityEstimate>,
        )
    })

    it("works when k is a power exponent", (): void => {
        const kAsPowerExponent = 2 as Parameter
        const two3FreeClass = {monzo: [0, 0, 1, -1]} as Two3FreeClass
        const submetric = {kAsPowerExponent, sum: true}

        const actual = compute23FreeClassSubmetricAntivotes(two3FreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo<{rational: true}>, submetric) as
                Grade<LfcUnpopularityEstimate> +
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo<{rational: true}>, submetric) ** 2 as
                Grade<LfcUnpopularityEstimate>,
        )
    })

    it("works when k is a power base", (): void => {
        const kAsPowerBase = 2 as Parameter
        const two3FreeClass = {monzo: [0, 0, 1, -1]} as Two3FreeClass
        const submetric = {kAsPowerBase, sum: true}

        const actual = compute23FreeClassSubmetricAntivotes(two3FreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo<{rational: true}>, submetric) as
                Grade<LfcUnpopularityEstimate> +
            2 ** computeSubmetricAntivotes([0, 0, 0, 1] as Monzo<{rational: true}>, submetric) as
                Grade<LfcUnpopularityEstimate>,
        )
    })

    it("works when j is a logarithm base", (): void => {
        const jAsLogarithmBase = 2 as Parameter
        const two3FreeClass = {monzo: [0, 0, 1, -1]} as Two3FreeClass
        const submetric = {jAsLogarithmBase, sum: true}

        const actual = compute23FreeClassSubmetricAntivotes(two3FreeClass, submetric)

        expect(actual).toBe(
            log(
                computeSubmetricAntivotes(
                    [0, 0, 1] as Monzo<{rational: true}>,
                    submetric,
                ) as number as Power, BASE_2,
            ) as number +
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo<{rational: true}>, submetric) as
                Grade<LfcUnpopularityEstimate>,
        )
    })

    it("works when j is a power exponent", (): void => {
        const jAsPowerExponent = 2 as Parameter
        const two3FreeClass = {monzo: [0, 0, 1, -1]} as Two3FreeClass
        const submetric = {jAsPowerExponent, sum: true}

        const actual = compute23FreeClassSubmetricAntivotes(two3FreeClass, submetric)

        expect(actual).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo<{rational: true}>, submetric) ** 2 as
                Grade<LfcUnpopularityEstimate> +
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo<{rational: true}>, submetric) as
                Grade<LfcUnpopularityEstimate>,
        )
    })

    it("works when j is a power base", (): void => {
        const jAsPowerBase = 2 as Parameter
        const two3FreeClass = {monzo: [0, 0, 1, -1]} as Two3FreeClass
        const submetric = {jAsPowerBase, sum: true}

        const actual = compute23FreeClassSubmetricAntivotes(two3FreeClass, submetric)

        expect(actual).toBe(
            2 ** computeSubmetricAntivotes([0, 0, 1] as Monzo<{rational: true}>, submetric) as
                Grade<LfcUnpopularityEstimate> +
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo<{rational: true}>, submetric) as
                Grade<LfcUnpopularityEstimate>,
        )
    })
})
