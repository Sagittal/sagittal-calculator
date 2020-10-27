import {Base, EMPTY_MONZO, log, Monzo} from "../../../../../../src/general/math"
import {Parameter, Submetric} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import {computeSubmetricAntivotes} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/submetricAntivotes"
import {Antivotes} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/types"
import {ParameterValue} from "../../../../../../src/scripts/types"

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
            submetric[Parameter.SUM] = true
        })

        it("sums the abs values of the prime factors in the 2,3-free monzo", (): void => {
            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            const expected =
                1 * 11 +
                1 * 13 +
                2 * 17 as Antivotes
            expect(actual).toBe(expected)
        })

        it("when a as a coefficient is provided, multiplies the prime by it", (): void => {
            const aAsCoefficient = 0.56 as ParameterValue
            submetric[Parameter.A_AS_COEFFICIENT] = aAsCoefficient

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            const expected =
                1 * 11 * aAsCoefficient +
                1 * 13 * aAsCoefficient +
                2 * 17 * aAsCoefficient as Antivotes
            expect(actual).toBe(expected)
        })

        it("when a as a power exponent is provided, raises the prime to it", (): void => {
            const aAsPowerExponent = 0.56 as ParameterValue
            submetric[Parameter.A_AS_POWER_EXPONENT] = aAsPowerExponent

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 * 11 ** aAsPowerExponent +
                1 * 13 ** aAsPowerExponent +
                2 * 17 ** aAsPowerExponent as Antivotes,
            )
        })

        it("when a as a logarithm base is provided, takes the base a logarithm of it", (): void => {
            const aAsLogarithmBase = 0.56 as ParameterValue
            submetric[Parameter.A_AS_LOGARITHM_BASE] = aAsLogarithmBase

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 * log(11, aAsLogarithmBase as number as Base) +
                1 * log(13, aAsLogarithmBase as number as Base) +
                2 * log(17, aAsLogarithmBase as number as Base) as Antivotes,
            )
        })

        it("when a as a power base is provided, raises it to the prime", (): void => {
            const aAsPowerBase = 0.56 as ParameterValue
            submetric[Parameter.A_AS_POWER_BASE] = aAsPowerBase

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 * aAsPowerBase ** 11 +
                1 * aAsPowerBase ** 13 +
                2 * aAsPowerBase ** 17 as Antivotes,
            )
        })

        it("when w is provided, adds a constant to each prime after applying the coefficient, exponent, or base              ", (): void => {
            const aAsCoefficient = 0.56 as ParameterValue
            const w = 0.22 as ParameterValue
            submetric[Parameter.A_AS_COEFFICIENT] = aAsCoefficient
            submetric[Parameter.W] = w

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 * (11 * aAsCoefficient + w) +
                1 * (13 * aAsCoefficient + w) +
                2 * (17 * aAsCoefficient + w) as Antivotes,
            )
        })

        it("when b is provided, adds a constant to each prime after applying the coefficient, exponent, or base, but using b for d and w for n", (): void => {
            const aAsCoefficient = 0.56 as ParameterValue
            const w = 0.22 as ParameterValue
            const b = 0.34 as ParameterValue
            submetric[Parameter.A_AS_COEFFICIENT] = aAsCoefficient
            submetric[Parameter.W] = w
            submetric[Parameter.B] = b

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 * (11 * aAsCoefficient + w) +
                1 * (13 * aAsCoefficient + b) +
                2 * (17 * aAsCoefficient + w) as Antivotes,
            )
        })

        it("when x is provided, adds a constant to each prime before applying the coefficient, exponent, or base                ", (): void => {
            const aAsCoefficient = 0.56 as ParameterValue
            const x = -2.1 as ParameterValue
            submetric[Parameter.A_AS_COEFFICIENT] = aAsCoefficient
            submetric[Parameter.X] = x

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 * (11 + x) * aAsCoefficient +
                1 * (13 + x) * aAsCoefficient +
                2 * (17 + x) * aAsCoefficient as Antivotes,
            )
        })

        it("when u is provided, adds a constant to each prime before applying the coefficient, exponent, or base, but using u for d and x for n", (): void => {
            const aAsCoefficient = 0.56 as ParameterValue
            const x = -2.1 as ParameterValue
            const u = -1.1 as ParameterValue
            submetric[Parameter.A_AS_COEFFICIENT] = aAsCoefficient
            submetric[Parameter.X] = x
            submetric[Parameter.U] = u

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 * (11 + x) * aAsCoefficient +
                1 * (13 + u) * aAsCoefficient +
                2 * (17 + x) * aAsCoefficient as Antivotes,
            )
        })

        it("when y is provided, raises the prime exponent to an exponent", (): void => {
            const y = 0.81 as ParameterValue
            submetric[Parameter.Y] = y

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 ** y * 11 +
                1 ** y * 13 +
                2 ** y * 17 as Antivotes,
            )
        })

        it("when v is provided, raises the prime exponent to an exponent, but using v for d and y for n", (): void => {
            const y = 0.81 as ParameterValue
            const v = 0.44 as ParameterValue
            submetric[Parameter.Y] = y
            submetric[Parameter.V] = v

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                1 ** y * 11 +
                1 ** v * 13 +
                2 ** y * 17 as Antivotes,
            )
        })

        it("when Dave's modified count is provided, counts 5's half as much as normal", (): void => {
            submetric[Parameter.MODIFIED_COUNT] = true
            const two3FreeNumberMonzo = [0, 0, 1, -1] as Monzo<{rational: true}>

            const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

            expect(actual).toBe(
                0.5 * 5 +
                1 * 7 as Antivotes,
            )
        })

        it("works for an empty monzo", (): void => {
            const actual = computeSubmetricAntivotes(EMPTY_MONZO as Monzo<{rational: true}>, submetric)

            const expected = 0 as Antivotes
            expect(actual).toBe(expected)
        })
    })

    it("when the submetric type is soapf, sums the abs values of the unique prime factors in the 2,3-free monzo          ", (): void => {
        submetric[Parameter.SUM] = true
        submetric[Parameter.WITHOUT_REPETITION] = true

        const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

        const expected =
            1 * 11 +
            1 * 13 +
            1 * 17 as Antivotes
        expect(actual).toBe(expected)
    })

    it("when the submetric type is soapifar, sums the abs values of the prime factors in the 2,3-free monzo, mapped to the prime count function", (): void => {
        submetric[Parameter.SUM] = true
        submetric[Parameter.USE_PRIME_INDEX] = true

        const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

        const expected =
            1 * 5 +
            1 * 6 +
            2 * 7 as Antivotes
        expect(actual).toBe(expected)
    })

    it("when the submetric type is soapif, sums the abs values of the unique prime factors in the 2,3-free monzo, mapped to the prime count function", (): void => {
        submetric[Parameter.SUM] = true
        submetric[Parameter.USE_PRIME_INDEX] = true
        submetric[Parameter.WITHOUT_REPETITION] = true

        const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

        const expected =
            1 * 5 +
            1 * 6 +
            1 * 7 as Antivotes
        expect(actual).toBe(expected)
    })

    it("when the submetric type is coapfar, counts the prime factors in the 2,3-free monzo", (): void => {
        submetric[Parameter.COUNT] = true

        const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

        const expected =
            1 * 1 +
            1 * 1 +
            2 * 1 as Antivotes
        expect(actual).toBe(expected)
    })

    it("when the submetric type is coapf, counts the unique prime factors in the 2,3-free monzo", (): void => {
        submetric[Parameter.COUNT] = true
        submetric[Parameter.WITHOUT_REPETITION] = true

        const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

        const expected =
            1 * 1 +
            1 * 1 +
            1 * 1 as Antivotes
        expect(actual).toBe(expected)
    })

    it("when the submetric type is GPF, takes the max prime factor in the 2,3-free monzo", (): void => {
        submetric[Parameter.MAX] = true
        submetric[Parameter.WITHOUT_REPETITION] = true

        const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

        const expected =
            0 * 11 +
            0 * 13 +
            1 * 17 as Antivotes
        expect(actual).toBe(expected)
    })

    it("when the submetric type is GPIF, takes the max prime factor index in the 2,3-free monzo", (): void => {
        submetric[Parameter.MAX] = true
        submetric[Parameter.WITHOUT_REPETITION] = true
        submetric[Parameter.USE_PRIME_INDEX] = true

        const actual = computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)

        const expected =
            0 * 5 +
            0 * 6 +
            1 * 7 as Antivotes
        expect(actual).toBe(expected)
    })
})
