import {Grade, Parameter} from "../../../../../../src/general/lfc"
import {Base, EMPTY_MONZO, log, Monzo} from "../../../../../../src/general/math"
import {
    LfcUnpopularityEstimate,
    PopularityParameterId,
    Submetric,
} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import {computeSubmetricAntivotes} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/submetricAntivotes"

describe("computeSubmetricAntivotes", (): void => {
    let submetric: Submetric

    const two3FreeNumberMonzo: Monzo<{rational: true}> = [
        0,                  // Prime 2,  prime index 1 (from the prime count function)
        0,                  // Prime 3,  prime index 2 (from the prime count function)
        0,                  // Prime 5,  prime index 3 (from the prime count function)
        0,                  // Prime 7,  prime index 4 (from the prime count function)
        1,                  // Prime 11, prime index 5 (from the prime count function)
        -1,                 // Prime 13, prime index 6 (from the prime count function)
        2,                  // Prime 17, prime index 7 (from the prime count function)
    ] as Monzo<{rational: true}>

    beforeEach((): void => {
        submetric = {}
    })

    describe("default case: submetric type is soapfar (all other parameters tested here)", (): void => {
        beforeEach((): void => {
            submetric[PopularityParameterId.SUM] = true
        })

        it("sums the abs values of the prime factors in the 2,3-free monzo", (): void => {
            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            const expected =
                1 * 11 +
                1 * 13 +
                2 * 17 as Grade<LfcUnpopularityEstimate>
            expect(actual).toBe(expected)
        })

        it("when a as a coefficient is provided, multiplies the prime by it", (): void => {
            const aAsCoefficient = 0.56 as Parameter
            submetric[PopularityParameterId.A_AS_COEFFICIENT] = aAsCoefficient

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            const expected =
                1 * 11 * aAsCoefficient +
                1 * 13 * aAsCoefficient +
                2 * 17 * aAsCoefficient as Grade<LfcUnpopularityEstimate>
            expect(actual).toBe(expected)
        })

        it("when a as a power exponent is provided, raises the prime to it", (): void => {
            const aAsPowerExponent = 0.56 as Parameter
            submetric[PopularityParameterId.A_AS_POWER_EXPONENT] = aAsPowerExponent

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 * 11 ** aAsPowerExponent +
                1 * 13 ** aAsPowerExponent +
                2 * 17 ** aAsPowerExponent as Grade<LfcUnpopularityEstimate>,
            )
        })

        it("when a as a logarithm base is provided, takes the base a logarithm of it", (): void => {
            const aAsLogarithmBase = 0.56 as Parameter
            submetric[PopularityParameterId.A_AS_LOGARITHM_BASE] = aAsLogarithmBase

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 * log(11, aAsLogarithmBase as number as Base) +
                1 * log(13, aAsLogarithmBase as number as Base) +
                2 * log(17, aAsLogarithmBase as number as Base) as Grade<LfcUnpopularityEstimate>,
            )
        })

        it("when a as a power base is provided, raises it to the prime", (): void => {
            const aAsPowerBase = 0.56 as Parameter
            submetric[PopularityParameterId.A_AS_POWER_BASE] = aAsPowerBase

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 * aAsPowerBase ** 11 +
                1 * aAsPowerBase ** 13 +
                2 * aAsPowerBase ** 17 as Grade<LfcUnpopularityEstimate>,
            )
        })

        it("when w is provided, adds a constant to each prime after applying the coefficient, exponent, or base              ", (): void => {
            const aAsCoefficient = 0.56 as Parameter
            const w = 0.22 as Parameter
            submetric[PopularityParameterId.A_AS_COEFFICIENT] = aAsCoefficient
            submetric[PopularityParameterId.W] = w

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 * (11 * aAsCoefficient + w) +
                1 * (13 * aAsCoefficient + w) +
                2 * (17 * aAsCoefficient + w) as Grade<LfcUnpopularityEstimate>,
            )
        })

        it("when b is provided, adds a constant to each prime after applying the coefficient, exponent, or base, but using b for d and w for n", (): void => {
            const aAsCoefficient = 0.56 as Parameter
            const w = 0.22 as Parameter
            const b = 0.34 as Parameter
            submetric[PopularityParameterId.A_AS_COEFFICIENT] = aAsCoefficient
            submetric[PopularityParameterId.W] = w
            submetric[PopularityParameterId.B] = b

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 * (11 * aAsCoefficient + w) +
                1 * (13 * aAsCoefficient + b) +
                2 * (17 * aAsCoefficient + w) as Grade<LfcUnpopularityEstimate>,
            )
        })

        it("when x is provided, adds a constant to each prime before applying the coefficient, exponent, or base                ", (): void => {
            const aAsCoefficient = 0.56 as Parameter
            const x = -2.1 as Parameter
            submetric[PopularityParameterId.A_AS_COEFFICIENT] = aAsCoefficient
            submetric[PopularityParameterId.X] = x

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 * (11 + x) * aAsCoefficient +
                1 * (13 + x) * aAsCoefficient +
                2 * (17 + x) * aAsCoefficient as Grade<LfcUnpopularityEstimate>,
            )
        })

        it("when u is provided, adds a constant to each prime before applying the coefficient, exponent, or base, but using u for d and x for n", (): void => {
            const aAsCoefficient = 0.56 as Parameter
            const x = -2.1 as Parameter
            const u = -1.1 as Parameter
            submetric[PopularityParameterId.A_AS_COEFFICIENT] = aAsCoefficient
            submetric[PopularityParameterId.X] = x
            submetric[PopularityParameterId.U] = u

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 * (11 + x) * aAsCoefficient +
                1 * (13 + u) * aAsCoefficient +
                2 * (17 + x) * aAsCoefficient as Grade<LfcUnpopularityEstimate>,
            )
        })

        it("when y is provided, raises the prime exponent to an exponent", (): void => {
            const y = 0.81 as Parameter
            submetric[PopularityParameterId.Y] = y

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 ** y * 11 +
                1 ** y * 13 +
                2 ** y * 17 as Grade<LfcUnpopularityEstimate>,
            )
        })

        it("when v is provided, raises the prime exponent to an exponent, but using v for d and y for n", (): void => {
            const y = 0.81 as Parameter
            const v = 0.44 as Parameter
            submetric[PopularityParameterId.Y] = y
            submetric[PopularityParameterId.V] = v

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 ** y * 11 +
                1 ** v * 13 +
                2 ** y * 17 as Grade<LfcUnpopularityEstimate>,
            )
        })

        it("when Dave's modified count is provided, counts 5's half as much as normal", (): void => {
            submetric[PopularityParameterId.MODIFIED_COUNT] = true
            const two3FreeNumberMonzo = [0, 0, 1, -1] as Monzo<{rational: true}>

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                0.5 * 5 +
                1 * 7 as Grade<LfcUnpopularityEstimate>,
            )
        })

        it("works for an empty monzo", (): void => {
            const actual = computeSubmetricAntivotes(EMPTY_MONZO as Monzo<{rational: true}>, submetric)

            const expected = 0 as Grade<LfcUnpopularityEstimate>
            expect(actual).toBe(expected)
        })
    })

    it("when the submetric type is soapf, sums the abs values of the unique prime factors in the 2,3-free monzo          ", (): void => {
        submetric[PopularityParameterId.SUM] = true
        submetric[PopularityParameterId.WITHOUT_REPETITION] = true

        const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

        const expected =
            1 * 11 +
            1 * 13 +
            1 * 17 as Grade<LfcUnpopularityEstimate>
        expect(actual).toBe(expected)
    })

    it("when the submetric type is soapifar, sums the abs values of the prime factors in the 2,3-free monzo, mapped to the prime count function", (): void => {
        submetric[PopularityParameterId.SUM] = true
        submetric[PopularityParameterId.USE_PRIME_INDEX] = true

        const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

        const expected =
            1 * 5 +
            1 * 6 +
            2 * 7 as Grade<LfcUnpopularityEstimate>
        expect(actual).toBe(expected)
    })

    it("when the submetric type is soapif, sums the abs values of the unique prime factors in the 2,3-free monzo, mapped to the prime count function", (): void => {
        submetric[PopularityParameterId.SUM] = true
        submetric[PopularityParameterId.USE_PRIME_INDEX] = true
        submetric[PopularityParameterId.WITHOUT_REPETITION] = true

        const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

        const expected =
            1 * 5 +
            1 * 6 +
            1 * 7 as Grade<LfcUnpopularityEstimate>
        expect(actual).toBe(expected)
    })

    it("when the submetric type is coapfar, counts the prime factors in the 2,3-free monzo", (): void => {
        submetric[PopularityParameterId.COUNT] = true

        const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

        const expected =
            1 * 1 +
            1 * 1 +
            2 * 1 as Grade<LfcUnpopularityEstimate>
        expect(actual).toBe(expected)
    })

    it("when the submetric type is coapf, counts the unique prime factors in the 2,3-free monzo", (): void => {
        submetric[PopularityParameterId.COUNT] = true
        submetric[PopularityParameterId.WITHOUT_REPETITION] = true

        const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

        const expected =
            1 * 1 +
            1 * 1 +
            1 * 1 as Grade<LfcUnpopularityEstimate>
        expect(actual).toBe(expected)
    })

    it("when the submetric type is GPF, takes the max prime factor in the 2,3-free monzo", (): void => {
        submetric[PopularityParameterId.MAX] = true
        submetric[PopularityParameterId.WITHOUT_REPETITION] = true

        const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

        const expected =
            0 * 11 +
            0 * 13 +
            1 * 17 as Grade<LfcUnpopularityEstimate>
        expect(actual).toBe(expected)
    })

    it("when the submetric type is GPIF, takes the max prime factor index in the 2,3-free monzo", (): void => {
        submetric[PopularityParameterId.MAX] = true
        submetric[PopularityParameterId.WITHOUT_REPETITION] = true
        submetric[PopularityParameterId.USE_PRIME_INDEX] = true

        const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

        const expected =
            0 * 5 +
            0 * 6 +
            1 * 7 as Grade<LfcUnpopularityEstimate>
        expect(actual).toBe(expected)
    })
})
