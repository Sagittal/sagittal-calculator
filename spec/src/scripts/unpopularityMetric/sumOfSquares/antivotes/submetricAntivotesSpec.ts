import { computeLog } from "../../../../../../src/general/math"
import { Monzo } from "../../../../../../src/general/music"
import { computeSubmetricAntivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/antivotes/submetricAntivotes"
import { Antivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"
import {
    Parameter,
    ParameterValue,
    Submetric,
    SubmetricType,
} from "../../../../../../src/scripts/unpopularityMetric/types"

describe("computeSubmetricAntivotes", () => {
    let submetric: Submetric

    const fiveRoughNumberMonzo: Monzo = [
        0,                  // prime 2,  prime index 1 (from the prime resolution function)
        0,                  // prime 3,  prime index 2 (from the prime resolution function)
        0,                  // prime 5,  prime index 3 (from the prime resolution function)
        0,                  // prime 7,  prime index 4 (from the prime resolution function)
        1,                  // prime 11, prime index 5 (from the prime resolution function)
        -1,                 // prime 13, prime index 6 (from the prime resolution function)
        2,                  // prime 17, prime index 7 (from the prime resolution function)
    ] as Monzo

    beforeEach(() => {
        submetric = {}
    })

    describe("default case: submetric type is soapfar (all other parameters tested here)", () => {
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
            submetric[ Parameter.A ] = a

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * 11 * a +
                1 * 13 * a +
                2 * 17 * a as Antivotes,
            )
        })

        it("when a is used as an exponent (not a coefficient)", () => {
            const a = 0.56 as ParameterValue
            submetric[ Parameter.A ] = a
            submetric[ Parameter.A_IS_EXPONENT ] = true

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * 11 ** a +
                1 * 13 ** a +
                2 * 17 ** a as Antivotes,
            )
        })

        it("when a is used as a base (not a coefficient)", () => {
            const a = 0.56 as ParameterValue
            submetric[ Parameter.A ] = a
            submetric[ Parameter.A_IS_BASE ] = true

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * computeLog(11, a) +
                1 * computeLog(13, a) +
                2 * computeLog(17, a) as Antivotes,
            )
        })

        it("when w is provided, adds a constant to each prime after applying the coefficient, exponent, or base", () => {
            const a = 0.56 as ParameterValue
            const w = 0.34 as ParameterValue
            submetric[ Parameter.A ] = a
            submetric[ Parameter.W ] = w

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * (11 * a + w) +
                1 * (13 * a + w) +
                2 * (17 * a + w) as Antivotes,
            )
        })

        // it("when x is provided, adds a constant to each prime before applying the coefficient, exponent, or base", () => {
        //     const a = 0.56
        //     const x = -2.1
        //     submetric[Parameter.A] = a
        //     submetric[Parameter.X] = x
        //
        //     const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)
        //
        //     expect(result).toBe(
        //         1 * (11 + x) * a +
        //         1 * (13 + x) * a +
        //         2 * (17 + x) * a,
        //     )
        // })

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

        // it("when v is provided, adds a constant to each *non-zero* prime exponent after applying the exponent", () => {
        //     const y = 0.81 as DynamicParameterValue
        //     const v = 0.34 as DynamicParameterValue
        //     submetric[Parameter.Y] = y
        //     submetric[Parameter.V] = v
        //
        //     const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)
        //
        //     expect(result).toBe(
        //         (1 ** y + v) * 11 +
        //         (1 ** y + v) * 13 +
        //         (2 ** y + v) * 17,
        //     )
        // })

        // it("when t is provided, adds a constant to each *non-zero* prime exponent before applying the exponent", () => {
        //     const y = 0.81 as DynamicParameterValue
        //     const t = 0.34 as DynamicParameterValue
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
    })

    it("when the submetric type is soapf, sums the absolute values of the unique prime factors in the 5-rough monzo", () => {
        submetric[ Parameter.SUBMETRIC_TYPE ] = SubmetricType.SOAPF

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            1 * 11 +
            1 * 13 +
            1 * 17 as Antivotes,
        )
    })

    it("when the submetric type is soapifar, sums the absolute values of the prime factors in the 5-rough monzo, mapped to the prime resolution function", () => {
        submetric[ Parameter.SUBMETRIC_TYPE ] = SubmetricType.SOAPIFAR

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            1 * 5 +
            1 * 6 +
            2 * 7 as Antivotes,
        )
    })

    it("when the submetric type is soapif, sums the absolute values of the unique prime factors in the 5-rough monzo, mapped to the prime resolution function", () => {
        submetric[ Parameter.SUBMETRIC_TYPE ] = SubmetricType.SOAPIF

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            1 * 5 +
            1 * 6 +
            1 * 7 as Antivotes,
        )
    })

    it("when the submetric type is coapfar, counts the prime factors in the 5-rough monzo", () => {
        submetric[ Parameter.SUBMETRIC_TYPE ] = SubmetricType.COAPFAR

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            1 * 1 +
            1 * 1 +
            2 * 1 as Antivotes,
        )
    })

    it("when the submetric type is coapf, counts the unique prime factors in the 5-rough monzo", () => {
        submetric[ Parameter.SUBMETRIC_TYPE ] = SubmetricType.COAPF

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            1 * 1 +
            1 * 1 +
            1 * 1 as Antivotes,
        )
    })

    it("when the submetric type is gpf, takes the maximum prime factor in the 5-rough monzo", () => {
        submetric[ Parameter.SUBMETRIC_TYPE ] = SubmetricType.GPF

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            0 * 11 +
            0 * 13 +
            1 * 17 as Antivotes,
        )
    })

    it("when the submetric type is gpf, takes the maximum prime factor index in the 5-rough monzo", () => {
        submetric[ Parameter.SUBMETRIC_TYPE ] = SubmetricType.GPIF

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            0 * 5 +
            0 * 6 +
            1 * 7 as Antivotes,
        )
    })

    it("works for an empty monzo", () => {
        const result = computeSubmetricAntivotes([], submetric)

        expect(result).toBe(0 as Antivotes)
    })
})
