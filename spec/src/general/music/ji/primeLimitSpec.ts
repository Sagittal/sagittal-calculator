import { Max, Min, Prime, Ratio } from "../../../../../src/general/math"
import { Monzo } from "../../../../../src/general/math/num/monzo"
import {
    computePrimeLimit,
    isWithinPrimeLimit,
    isWithinPrimeMin,
    THREE_PRIME_LIMIT,
} from "../../../../../src/general/music"
import { FIVE_PRIME_LIMIT, SEVEN_PRIME_LIMIT } from "../../../../../src/general/music/ji/constants"

describe("isWithinPrimeLimit", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the pitch is within the given prime limit", (): void => {
            const jiPitch = { monzo: [0, 0, 1] as Monzo }

            const actual = isWithinPrimeLimit(jiPitch, FIVE_PRIME_LIMIT)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is not within the given prime limit", (): void => {
            const jiPitch = { monzo: [0, 0, 1] as Monzo }

            const actual = isWithinPrimeLimit(jiPitch, THREE_PRIME_LIMIT)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns true if the pitch is within the given prime limit", (): void => {
            const jiPitch = { ratio: [7, 5] as Ratio }

            const actual = isWithinPrimeLimit(jiPitch, SEVEN_PRIME_LIMIT)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is not within the given prime limit", (): void => {
            const jiPitch = { ratio: [7, 5] as Ratio }

            const actual = isWithinPrimeLimit(jiPitch, THREE_PRIME_LIMIT)

            expect(actual).toBeFalsy()
        })
    })
})

describe("isWithinPrimeMin", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the pitch has no prime factors less than the prime min", (): void => {
            const jiPitch = { monzo: [0, 0, 1] as Monzo }

            const actual = isWithinPrimeMin(jiPitch, 5 as 5 & Min<Prime>)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch has no prime factors less than the prime min", (): void => {
            const jiPitch = { monzo: [0, 0, 1] as Monzo }

            const actual = isWithinPrimeMin(jiPitch, 7 as 7 & Min<Prime>)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns true if the pitch has no prime factors less than the prime min", (): void => {
            const jiPitch = { ratio: [7, 5] as Ratio }

            const actual = isWithinPrimeMin(jiPitch, 5 as 5 & Min<Prime>)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch has no prime factors less than the prime min", (): void => {
            const jiPitch = { ratio: [5, 4] as Ratio }

            const actual = isWithinPrimeMin(jiPitch, 7 as 7 & Min<Prime>)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computePrimeLimit", (): void => {
    it("works for pitches with monzos", (): void => {
        const jiPitch = { monzo: [0, 4, 1, -3, 0, 1] as Monzo }

        const actual = computePrimeLimit(jiPitch)

        const expected = 13 as Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works for pitches with ratios", (): void => {
        const jiPitch = { ratio: [7, 5] as Ratio }

        const actual = computePrimeLimit(jiPitch)

        const expected = 7 as Max<Prime>
        expect(actual).toBe(expected)
    })
})

