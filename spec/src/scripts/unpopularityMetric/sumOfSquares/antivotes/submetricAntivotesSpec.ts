import { computeLog } from "../../../../../../src/general/math"
import { Monzo } from "../../../../../../src/general/music"
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
            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * 11 +
                1 * 13 +
                2 * 17 as Antivotes,
            )
        })

        it("when a is provided, multiplies the prime by it", () => {
            const a = 0.56 as ParameterValue
            submetric[ Parameter.A_AS_COEFFICIENT ] = a

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * 11 * a +
                1 * 13 * a +
                2 * 17 * a as Antivotes,
            )
        })

        it("when a is used as an exponent (not a coefficient)", () => {
            const a = 0.56 as ParameterValue
            submetric[ Parameter.A_AS_EXPONENT ] = a

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * 11 ** a +
                1 * 13 ** a +
                2 * 17 ** a as Antivotes,
            )
        })

        it("when a is used as a base (not a coefficient)", () => {
            const a = 0.56 as ParameterValue
            submetric[ Parameter.A_AS_BASE ] = a

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * computeLog(11, a) +
                1 * computeLog(13, a) +
                2 * computeLog(17, a) as Antivotes,
            )
        })

        it("when w is provided, adds a constant to each prime after applying the coefficient, exponent, or base", () => {
            const a = 0.56 as ParameterValue
            const w = 0.22 as ParameterValue
            submetric[ Parameter.A_AS_COEFFICIENT ] = a
            submetric[ Parameter.W ] = w

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * (11 * a + w) +
                1 * (13 * a + w) +
                2 * (17 * a + w) as Antivotes,
            )
        })

        it("when b is provided, and w is not, adds a constant to each prime after applying the coefficient, exponent, or base, but only to d", () => {
            const a = 0.56 as ParameterValue
            const b = 0.34 as ParameterValue
            submetric[ Parameter.A_AS_COEFFICIENT ] = a
            submetric[ Parameter.B ] = b

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * (11 * a + 0) +
                1 * (13 * a + b) +
                2 * (17 * a + 0) as Antivotes,
            )
        })

        it("when b is provided, and w is too, adds a constant to each prime after applying the coefficient, exponent, or base, but using b for d and w for n", () => {
            const a = 0.56 as ParameterValue
            const w = 0.22 as ParameterValue
            const b = 0.34 as ParameterValue
            submetric[ Parameter.A_AS_COEFFICIENT ] = a
            submetric[ Parameter.W ] = w
            submetric[ Parameter.B ] = b

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * (11 * a + w) +
                1 * (13 * a + b) +
                2 * (17 * a + w) as Antivotes,
            )
        })

        it("when x is provided, adds a constant to each prime before applying the coefficient, exponent, or base", () => {
            const a = 0.56 as ParameterValue
            const x = -2.1 as ParameterValue
            submetric[ Parameter.A_AS_COEFFICIENT ] = a
            submetric[ Parameter.X ] = x

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * (11 + x) * a +
                1 * (13 + x) * a +
                2 * (17 + x) * a as Antivotes,
            )
        })

        it("when u is provided, and x is not, adds a constant to each prime before applying the coefficient, exponent, or base, but only to d", () => {
            const a = 0.56 as ParameterValue
            const u = -1.1 as ParameterValue
            submetric[ Parameter.A_AS_COEFFICIENT ] = a
            submetric[ Parameter.U ] = u

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * (11 + 0) * a +
                1 * (13 + u) * a +
                2 * (17 + 0) * a as Antivotes,
            )
        })

        it("when u is provided, and x is too, adds a constant to each prime before applying the coefficient, exponent, or base, but using u for d and x for n", () => {
            const a = 0.56 as ParameterValue
            const x = -2.1 as ParameterValue
            const u = -1.1 as ParameterValue
            submetric[ Parameter.A_AS_COEFFICIENT ] = a
            submetric[ Parameter.X ] = x
            submetric[ Parameter.U ] = u

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * (11 + x) * a +
                1 * (13 + u) * a +
                2 * (17 + x) * a as Antivotes,
            )
        })

        it("when y is provided, raises the prime exponent to an exponent", () => {
            const y = 0.81 as ParameterValue
            submetric[ Parameter.Y ] = y

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 ** y * 11 +
                1 ** y * 13 +
                2 ** y * 17 as Antivotes,
            )
        })

        it("when v is provided, if y is not, raises the prime exponent to an exponent, but only for d", () => {
            const v = 0.44 as ParameterValue
            submetric[ Parameter.V ] = v

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 ** 1 * 11 +
                1 ** v * 13 +
                2 ** 1 * 17 as Antivotes,
            )
        })

        it("when v is provided, if y is too, raises the prime exponent to an exponent, but using v for d and y for n", () => {
            const y = 0.81 as ParameterValue
            const v = 0.44 as ParameterValue
            submetric[ Parameter.Y ] = y
            submetric[ Parameter.V ] = v

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 ** y * 11 +
                1 ** v * 13 +
                2 ** y * 17 as Antivotes,
            )
        })

        // it("when s is provided, adds a constant to each *non-zero* prime exponent after applying the exponent", () => {
        //     const y = 0.81 as ParameterValue
        //     const s = 0.34 as ParameterValue
        //     submetric[Parameter.Y] = y
        //     submetric[Parameter.S] = s
        //
        //     const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)
        //
        //     expect(result).toBe(
        //         (1 ** y + s) * 11 +
        //         (1 ** y + s) * 13 +
        //         (2 ** y + s) * 17,
        //     )
        // })

        // it("when t is provided, adds a constant to each *non-zero* prime exponent before applying the exponent", () => {
        //     const y = 0.81 as ParameterValue
        //     const t = 0.34 as ParameterValue
        //     submetric[Parameter.Y] = y
        //     submetric[Parameter.T] = t
        //
        //     const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)
        //
        //     expect(result).toBe(
        //         (1 + t) ** y * 11 +
        //         (1 + t) ** y * 13 +
        //         (2 + t) ** y * 17,
        //     )
        // })

        it("when Dave's modified resolution is provided, counts 5's half as much as normal", () => {
            submetric[ Parameter.MODIFIED_COUNT ] = true
            const fiveRoughNumberMonzo = [0, 0, 1, -1] as Monzo

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                0.5 * 5 +
                1 * 7 as Antivotes,
            )
        })

        it("works for an empty monzo", () => {
            const result = computeSubmetricAntivotes([], submetric)

            expect(result).toBe(0 as Antivotes)
        })
    })

    it("when the submetric type is soapf, sums the absolute values of the unique prime factors in the 5-rough monzo", () => {
        submetric[ Parameter.SUM ] = true
        submetric[ Parameter.WITHOUT_REPETITION ] = true

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            1 * 11 +
            1 * 13 +
            1 * 17 as Antivotes,
        )
    })

    it("when the submetric type is soapifar, sums the absolute values of the prime factors in the 5-rough monzo, mapped to the prime count function", () => {
        submetric[ Parameter.SUM ] = true
        submetric[ Parameter.USE_PRIME_INDEX ] = true

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            1 * 5 +
            1 * 6 +
            2 * 7 as Antivotes,
        )
    })

    it("when the submetric type is soapif, sums the absolute values of the unique prime factors in the 5-rough monzo, mapped to the prime count function", () => {
        submetric[ Parameter.SUM ] = true
        submetric[ Parameter.USE_PRIME_INDEX ] = true
        submetric[ Parameter.WITHOUT_REPETITION ] = true

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            1 * 5 +
            1 * 6 +
            1 * 7 as Antivotes,
        )
    })

    it("when the submetric type is coapfar, counts the prime factors in the 5-rough monzo", () => {
        submetric[ Parameter.COUNT ] = true

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            1 * 1 +
            1 * 1 +
            2 * 1 as Antivotes,
        )
    })

    it("when the submetric type is coapf, counts the unique prime factors in the 5-rough monzo", () => {
        submetric[ Parameter.COUNT ] = true
        submetric[ Parameter.WITHOUT_REPETITION ] = true

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            1 * 1 +
            1 * 1 +
            1 * 1 as Antivotes,
        )
    })

    it("when the submetric type is gpf, takes the maximum prime factor in the 5-rough monzo", () => {
        submetric[ Parameter.MAX ] = true
        submetric[ Parameter.WITHOUT_REPETITION ] = true

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            0 * 11 +
            0 * 13 +
            1 * 17 as Antivotes,
        )
    })

    it("when the submetric type is gpif, takes the maximum prime factor index in the 5-rough monzo", () => {
        submetric[ Parameter.MAX ] = true
        submetric[ Parameter.WITHOUT_REPETITION ] = true
        submetric[ Parameter.USE_PRIME_INDEX ] = true

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            0 * 5 +
            0 * 6 +
            1 * 7 as Antivotes,
        )
    })
})
