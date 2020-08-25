import { computeLog, Monzo } from "../../../../../../src/general/math"
import { Parameter, ParameterValue, Submetric } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"
import { computeSubmetricAntivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/antivotes/submetricAntivotes"
import { Antivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"

describe("computeSubmetricAntivotes", () => {
    let submetric: Submetric

    const fiveRoughNumberMonzo: Monzo = [
        0,                  // prime 2,  prime index 1 (from the prime count function)
        0,                  // prime 3,  prime index 2 (from the prime count function)
        0,                  // prime 5,  prime index 3 (from the prime count function)
        0,                  // prime 7,  prime index 4 (from the prime count function)
        1,                  // prime 11, prime index 5 (from the prime count function)
        -1,                 // prime 13, prime index 6 (from the prime count function)
        2,                  // prime 17, prime index 7 (from the prime count function)
    ] as Monzo

    beforeEach(() => {
        submetric = {}
    })

    describe("default case: submetric type is soapfar (all other parameters tested here)", () => {
        beforeEach(() => {
            submetric[ Parameter.SUM ] = true
        })

        it("sums the absolute values of the prime factors in the 5-rough monzo", () => {
            const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            const expected =
                1 * 11 +
                1 * 13 +
                2 * 17 as Antivotes
            expect(actual).toBe(expected)
        })

        it("when a as a coefficient is provided, multiplies the prime by it", () => {
            const aAsCoefficient = 0.56 as ParameterValue
            submetric[ Parameter.A_AS_COEFFICIENT ] = aAsCoefficient

            const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            const expected =
                1 * 11 * aAsCoefficient +
                1 * 13 * aAsCoefficient +
                2 * 17 * aAsCoefficient as Antivotes
            expect(actual).toBe(expected)
        })

        it("when a as a power exponent is provided, raises the prime to it", () => {
            const aAsPowerExponent = 0.56 as ParameterValue
            submetric[ Parameter.A_AS_POWER_EXPONENT ] = aAsPowerExponent

            const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(actual).toBe(
                1 * 11 ** aAsPowerExponent +
                1 * 13 ** aAsPowerExponent +
                2 * 17 ** aAsPowerExponent as Antivotes,
            )
        })

        it("when a as a logarithm base is provided, takes the base a logarithm of it", () => {
            const aAsLogarithmBase = 0.56 as ParameterValue
            submetric[ Parameter.A_AS_LOGARITHM_BASE ] = aAsLogarithmBase

            const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(actual).toBe(
                1 * computeLog(11, aAsLogarithmBase) +
                1 * computeLog(13, aAsLogarithmBase) +
                2 * computeLog(17, aAsLogarithmBase) as Antivotes,
            )
        })

        it("when a as a power base is provided, raises it to the prime", () => {
            const aAsPowerBase = 0.56 as ParameterValue
            submetric[ Parameter.A_AS_POWER_BASE ] = aAsPowerBase

            const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(actual).toBe(
                1 * aAsPowerBase ** 11 +
                1 * aAsPowerBase ** 13 +
                2 * aAsPowerBase ** 17 as Antivotes,
            )
        })

        it("when w is provided, adds a constant to each prime after applying the coefficient, exponent, or base", () => {
            const aAsCoefficient = 0.56 as ParameterValue
            const w = 0.22 as ParameterValue
            submetric[ Parameter.A_AS_COEFFICIENT ] = aAsCoefficient
            submetric[ Parameter.W ] = w

            const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(actual).toBe(
                1 * (11 * aAsCoefficient + w) +
                1 * (13 * aAsCoefficient + w) +
                2 * (17 * aAsCoefficient + w) as Antivotes,
            )
        })

        it("when b is provided, adds a constant to each prime after applying the coefficient, exponent, or base, but using b for d and w for n", () => {
            const aAsCoefficient = 0.56 as ParameterValue
            const w = 0.22 as ParameterValue
            const b = 0.34 as ParameterValue
            submetric[ Parameter.A_AS_COEFFICIENT ] = aAsCoefficient
            submetric[ Parameter.W ] = w
            submetric[ Parameter.B ] = b

            const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(actual).toBe(
                1 * (11 * aAsCoefficient + w) +
                1 * (13 * aAsCoefficient + b) +
                2 * (17 * aAsCoefficient + w) as Antivotes,
            )
        })

        it("when x is provided, adds a constant to each prime before applying the coefficient, exponent, or base", () => {
            const aAsCoefficient = 0.56 as ParameterValue
            const x = -2.1 as ParameterValue
            submetric[ Parameter.A_AS_COEFFICIENT ] = aAsCoefficient
            submetric[ Parameter.X ] = x

            const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(actual).toBe(
                1 * (11 + x) * aAsCoefficient +
                1 * (13 + x) * aAsCoefficient +
                2 * (17 + x) * aAsCoefficient as Antivotes,
            )
        })

        it("when u is provided, adds a constant to each prime before applying the coefficient, exponent, or base, but using u for d and x for n", () => {
            const aAsCoefficient = 0.56 as ParameterValue
            const x = -2.1 as ParameterValue
            const u = -1.1 as ParameterValue
            submetric[ Parameter.A_AS_COEFFICIENT ] = aAsCoefficient
            submetric[ Parameter.X ] = x
            submetric[ Parameter.U ] = u

            const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(actual).toBe(
                1 * (11 + x) * aAsCoefficient +
                1 * (13 + u) * aAsCoefficient +
                2 * (17 + x) * aAsCoefficient as Antivotes,
            )
        })

        it("when y is provided, raises the prime exponent to an exponent", () => {
            const y = 0.81 as ParameterValue
            submetric[ Parameter.Y ] = y

            const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(actual).toBe(
                1 ** y * 11 +
                1 ** y * 13 +
                2 ** y * 17 as Antivotes,
            )
        })

        it("when v is provided, raises the prime exponent to an exponent, but using v for d and y for n", () => {
            const y = 0.81 as ParameterValue
            const v = 0.44 as ParameterValue
            submetric[ Parameter.Y ] = y
            submetric[ Parameter.V ] = v

            const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(actual).toBe(
                1 ** y * 11 +
                1 ** v * 13 +
                2 ** y * 17 as Antivotes,
            )
        })

        it("when Dave's modified resolution is provided, counts 5's half as much as normal", () => {
            submetric[ Parameter.MODIFIED_COUNT ] = true
            const fiveRoughNumberMonzo = [0, 0, 1, -1] as Monzo

            const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(actual).toBe(
                0.5 * 5 +
                1 * 7 as Antivotes,
            )
        })

        it("works for an empty monzo", () => {
            const actual = computeSubmetricAntivotes([], submetric)

            const expected = 0 as Antivotes
            expect(actual).toBe(expected)
        })
    })

    it("when the submetric type is soapf, sums the absolute values of the unique prime factors in the 5-rough monzo", () => {
        submetric[ Parameter.SUM ] = true
        submetric[ Parameter.WITHOUT_REPETITION ] = true

        const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        const expected =
            1 * 11 +
            1 * 13 +
            1 * 17 as Antivotes
        expect(actual).toBe(expected)
    })

    it("when the submetric type is soapifar, sums the absolute values of the prime factors in the 5-rough monzo, mapped to the prime count function", () => {
        submetric[ Parameter.SUM ] = true
        submetric[ Parameter.USE_PRIME_INDEX ] = true

        const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        const expected =
            1 * 5 +
            1 * 6 +
            2 * 7 as Antivotes
        expect(actual).toBe(expected)
    })

    it("when the submetric type is soapif, sums the absolute values of the unique prime factors in the 5-rough monzo, mapped to the prime count function", () => {
        submetric[ Parameter.SUM ] = true
        submetric[ Parameter.USE_PRIME_INDEX ] = true
        submetric[ Parameter.WITHOUT_REPETITION ] = true

        const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        const expected =
            1 * 5 +
            1 * 6 +
            1 * 7 as Antivotes
        expect(actual).toBe(expected)
    })

    it("when the submetric type is coapfar, counts the prime factors in the 5-rough monzo", () => {
        submetric[ Parameter.COUNT ] = true

        const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        const expected =
            1 * 1 +
            1 * 1 +
            2 * 1 as Antivotes
        expect(actual).toBe(expected)
    })

    it("when the submetric type is coapf, counts the unique prime factors in the 5-rough monzo", () => {
        submetric[ Parameter.COUNT ] = true
        submetric[ Parameter.WITHOUT_REPETITION ] = true

        const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        const expected =
            1 * 1 +
            1 * 1 +
            1 * 1 as Antivotes
        expect(actual).toBe(expected)
    })

    it("when the submetric type is gpf, takes the max prime factor in the 5-rough monzo", () => {
        submetric[ Parameter.MAX ] = true
        submetric[ Parameter.WITHOUT_REPETITION ] = true

        const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        const expected =
            0 * 11 +
            0 * 13 +
            1 * 17 as Antivotes
        expect(actual).toBe(expected)
    })

    it("when the submetric type is gpif, takes the max prime factor index in the 5-rough monzo", () => {
        submetric[ Parameter.MAX ] = true
        submetric[ Parameter.WITHOUT_REPETITION ] = true
        submetric[ Parameter.USE_PRIME_INDEX ] = true

        const actual = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        const expected =
            0 * 5 +
            0 * 6 +
            1 * 7 as Antivotes
        expect(actual).toBe(expected)
    })
})
