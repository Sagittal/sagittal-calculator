import { Exponent, Extrema, Integer } from "../../../../src/general"
import { Max, Prime, Sopfr } from "../../../../src/general/math"
import { computeTwoThreeFreePrimesToCheck } from "../../../../src/scripts/pitch/twoThreeFreePrimesToCheck"

describe("computeTwoThreeFreePrimesToCheck", () => {
    it("when none of max prime limit, max sopfr, nor max N2D3P9 are provided, errors", () => {
        expect(() => computeTwoThreeFreePrimesToCheck({})).toThrowError("The maximum prime must be limited somehow.")
    })

    describe("when only the prime limit is provided", () => {
        it("if it is not a prime (for whatever reason), the last prime less than it is the max prime", () => {
            const maxPrimeLimit = 20 as Max<Max<Prime>>

            const actual = computeTwoThreeFreePrimesToCheck({ maxPrimeLimit })

            const expected = [5, 7, 11, 13, 17, 19] as Prime[]
            expect(actual).toEqual(expected)
        })

        it("if it is a prime, that becomes the maximum prime to check", () => {
            const maxPrimeLimit = 19 as Max<Max<Prime>>

            const actual = computeTwoThreeFreePrimesToCheck({ maxPrimeLimit })

            const expected = [5, 7, 11, 13, 17, 19] as Prime[]
            expect(actual).toEqual(expected)
        })
    })

    describe("when only sopfr is provided", () => {
        it("if it is not a prime, the last prime less than it is the max prime", () => {
            const maxTwoThreeFreeSopfr = 20 as Max<Sopfr<5>>

            const actual = computeTwoThreeFreePrimesToCheck({ maxTwoThreeFreeSopfr })

            const expected = [5, 7, 11, 13, 17, 19] as Prime[]
            expect(actual).toEqual(expected)
        })

        it("if it is a prime, then it is the max prime", () => {
            const maxTwoThreeFreeSopfr = 19 as Max<Sopfr<5>>

            const actual = computeTwoThreeFreePrimesToCheck({ maxTwoThreeFreeSopfr })

            const expected = [5, 7, 11, 13, 17, 19] as Prime[]
            expect(actual).toEqual(expected)
        })
    })

    describe("when both prime limit and sopfr are provided", () => {
        it("if the prime limit is less than the sopfr, prime limit should be the max prime", () => {
            const maxPrimeLimit = 13 as Max<Max<Prime>>
            const maxTwoThreeFreeSopfr = 19 as Max<Sopfr<5>>

            const actual = computeTwoThreeFreePrimesToCheck({ maxPrimeLimit, maxTwoThreeFreeSopfr })

            const expected = [5, 7, 11, 13] as Prime[]
            expect(actual).toEqual(expected)
        })

        it("if the sopfr is less than the prime limit, sopfr should be the max prime", () => {
            const maxPrimeLimit = 23 as Max<Max<Prime>>
            const maxTwoThreeFreeSopfr = 17 as Max<Sopfr<5>>

            const actual = computeTwoThreeFreePrimesToCheck({ maxPrimeLimit, maxTwoThreeFreeSopfr })

            const expected = [5, 7, 11, 13, 17] as Prime[]
            expect(actual).toEqual(expected)
        })
    })

    describe("N2D3P9, in the form of prime exponent extremas", (): void => {
        const primeExponentExtremasGivenMaxN2D3P9 = [
            [0, 0],     // 2
            [0, 0],     // 3
            [-2, 6],    // 5
            [-2, 4],    // 7
            [-1, 2],    // 11
            [-1, 1],    // 13
            [0, 1],     // 17
        ] as Array<Extrema<Integer & Exponent<Prime>>>

        it("when only N2D3P9 is provided, its last element is the max prime", () => {
            const actual = computeTwoThreeFreePrimesToCheck({ primeExponentExtremasGivenMaxN2D3P9 })

            const expected = [5, 7, 11, 13, 17] as Prime[]
            expect(actual).toEqual(expected)
        })

        it("when N2D3P9 is provided, as well as other constraints, but it is less, it wins", () => {
            const maxPrimeLimit = 23 as Max<Max<Prime>>
            const maxTwoThreeFreeSopfr = 19 as Max<Sopfr<5>>

            const actual = computeTwoThreeFreePrimesToCheck({
                primeExponentExtremasGivenMaxN2D3P9,
                maxTwoThreeFreeSopfr,
                maxPrimeLimit,
            })

            const expected = [5, 7, 11, 13, 17] as Prime[]
            expect(actual).toEqual(expected)
        })

        it("when N2D3P9 is provided, as well as other constraints, but it is more, the others win", () => {
            const maxPrimeLimit = 11 as Max<Max<Prime>>
            const maxTwoThreeFreeSopfr = 17 as Max<Sopfr<5>>

            const actual = computeTwoThreeFreePrimesToCheck({
                primeExponentExtremasGivenMaxN2D3P9,
                maxTwoThreeFreeSopfr,
                maxPrimeLimit,
            })

            const expected = [5, 7, 11] as Prime[]
            expect(actual).toEqual(expected)
        })
    })
})
