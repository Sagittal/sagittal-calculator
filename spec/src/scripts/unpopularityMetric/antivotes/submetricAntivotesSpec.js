const {computeSubmetricAntivotes} = require("../../../../../src/scripts/unpopularityMetric/antivotes/submetricAntivotes")
const {computeLog} = require("../../../../../src/utilities/log")
const {PARAMETER, SUBMETRIC_TYPE} = require("../../../../../src/scripts/unpopularityMetric/submetricCombinations/constants")

describe("computeSubmetricAntivotes", () => {
    let submetric

    const fiveRoughNumberMonzo = [
        0,                  // prime 2;  prime index 1 (from the prime count function)
        0,                  // prime 3;  prime index 2 (from the prime count function)
        0,                  // prime 5;  prime index 3 (from the prime count function)
        0,                  // prime 7;  prime index 4 (from the prime count function)
        1,                  // prime 11; prime index 5 (from the prime count function)
        -1,                 // prime 13; prime index 6 (from the prime count function)
        2,                  // prime 17; prime index 7 (from the prime count function)
    ]

    beforeEach(() => {
        submetric = {}
    })

    describe("default case: submetric type is soapfar (all other parameters tested here)", () => {
        it("sums the absolute values of the prime factors in the 5-rough monzo", () => {
            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * 11 +
                1 * 13 +
                2 * 17,
            )
        })

        it("when a is provided, raises the prime to a power", () => {
            const a = 0.56
            submetric[PARAMETER.A] = a

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * 11 ** a +
                1 * 13 ** a +
                2 * 17 ** a,
            )
        })

        it("when a is used as a base (not a power)", () => {
            const a = 0.56
            submetric[PARAMETER.A] = a
            submetric[PARAMETER.A_IS_BASE_NOT_POWER] = 1

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * computeLog(11, a) +
                1 * computeLog(13, a) +
                2 * computeLog(17, a),
            )
        })

        it("when w is provided, adds a constant to each prime after applying the power or base", () => {
            const a = 0.56
            const w = 0.34
            submetric[PARAMETER.A] = a
            submetric[PARAMETER.W] = w

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * (11 ** a + w) +
                1 * (13 ** a + w) +
                2 * (17 ** a + w),
            )
        })

        it("when x is provided, adds a constant to each prime before applying the power or base", () => {
            const a = 0.56
            const x = -2.1
            submetric[PARAMETER.A] = a
            submetric[PARAMETER.X] = x

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 * (11 + x) ** a +
                1 * (13 + x) ** a +
                2 * (17 + x) ** a,
            )
        })

        it("when y is provided, raises the term to a power", () => {
            const y = 0.81
            submetric[PARAMETER.Y] = y

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                1 ** y * 11 +
                1 ** y * 13 +
                2 ** y * 17,
            )
        })

        it("when v is provided, adds a constant to each *non-zero* term after applying the power", () => {
            const y = 0.81
            const v = 0.34
            submetric[PARAMETER.Y] = y
            submetric[PARAMETER.V] = v

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                (1 ** y + v) * 11 +
                (1 ** y + v) * 13 +
                (2 ** y + v) * 17,
            )
        })

        it("when t is provided, adds a constant to each *non-zero* term before applying the power", () => {
            const y = 0.81
            const t = 0.34
            submetric[PARAMETER.Y] = y
            submetric[PARAMETER.T] = t

            const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

            expect(result).toBe(
                (1 + t) ** y * 11 +
                (1 + t) ** y * 13 +
                (2 + t) ** y * 17,
            )
        })
    })

    it("when the submetric type is soapf, sums the absolute values of the unique prime factors in the 5-rough monzo", () => {
        submetric[PARAMETER.SUBMETRIC_TYPE] = SUBMETRIC_TYPE.SOAPF

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            1 * 11 +
            1 * 13 +
            1 * 17,
        )
    })

    it("when the submetric type is soapifar, sums the absolute values of the prime factors in the 5-rough monzo, mapped to the prime count function", () => {
        submetric[PARAMETER.SUBMETRIC_TYPE] = SUBMETRIC_TYPE.SOAPIFAR

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            1 * 5 +
            1 * 6 +
            2 * 7,
        )
    })

    it("when the submetric type is soapif, sums the absolute values of the unique prime factors in the 5-rough monzo, mapped to the prime count function", () => {
        submetric[PARAMETER.SUBMETRIC_TYPE] = SUBMETRIC_TYPE.SOAPIF

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            1 * 5 +
            1 * 6 +
            1 * 7,
        )
    })

    it("when the submetric type is coapfar, counts the prime factors in the 5-rough monzo", () => {
        submetric[PARAMETER.SUBMETRIC_TYPE] = SUBMETRIC_TYPE.COAPFAR

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            1 * 1 +
            1 * 1 +
            2 * 1,
        )
    })

    it("when the submetric type is coapf, counts the unique prime factors in the 5-rough monzo", () => {
        submetric[PARAMETER.SUBMETRIC_TYPE] = SUBMETRIC_TYPE.COAPF

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            1 * 1 +
            1 * 1 +
            1 * 1,
        )
    })

    it("when the submetric type is gpf, takes the maximum prime factor in the 5-rough monzo", () => {
        submetric[PARAMETER.SUBMETRIC_TYPE] = SUBMETRIC_TYPE.GPF

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            0 * 11 +
            0 * 13 +
            1 * 17,
        )
    })

    it("when the submetric type is gpf, takes the maximum prime factor index in the 5-rough monzo", () => {
        submetric[PARAMETER.SUBMETRIC_TYPE] = SUBMETRIC_TYPE.GPIF

        const result = computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)

        expect(result).toBe(
            0 * 5 +
            0 * 6 +
            1 * 7,
        )
    })

    it("works for an empty monzo", () => {
        const result = computeSubmetricAntivotes([], submetric)

        expect(result).toBe(0)
    })
})
