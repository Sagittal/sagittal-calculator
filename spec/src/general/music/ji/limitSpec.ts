import { Min, Prime, Ratio } from "../../../../../src/general/math"
import { Monzo } from "../../../../../src/general/math/monzo"
import { computeIsWithinPrimeLimit, computeIsWithinPrimeMin, THREE_LIMIT } from "../../../../../src/general/music"
import { FIVE_LIMIT, SEVEN_LIMIT } from "../../../../../src/general/music/ji/constants"

describe("computeIsWithinPrimeLimit", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the pitch is within the given prime limit", (): void => {
            const jiPitch = { monzo: [0, 0, 1] as Monzo }

            const actual = computeIsWithinPrimeLimit(jiPitch, FIVE_LIMIT)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is not within the given prime limit", (): void => {
            const jiPitch = { monzo: [0, 0, 1] as Monzo }

            const actual = computeIsWithinPrimeLimit(jiPitch, THREE_LIMIT)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns true if the pitch is within the given prime limit", (): void => {
            const jiPitch = { ratio: [7, 5] as Ratio }

            const actual = computeIsWithinPrimeLimit(jiPitch, SEVEN_LIMIT)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is not within the given prime limit", (): void => {
            const jiPitch = { ratio: [7, 5] as Ratio }

            const actual = computeIsWithinPrimeLimit(jiPitch, THREE_LIMIT)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeIsWithinPrimeMin", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the pitch has no prime factors less than the prime min", (): void => {
            const jiPitch = { monzo: [0, 0, 1] as Monzo }

            const actual = computeIsWithinPrimeMin(jiPitch, 5 as 5 & Min<Prime>)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is nhas no prime factors less than the prime min", (): void => {
            const jiPitch = { monzo: [0, 0, 1] as Monzo }

            const actual = computeIsWithinPrimeMin(jiPitch, 7 as 7 & Min<Prime>)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns true if the pitch has no prime factors less than the prime min", (): void => {
            const jiPitch = { ratio: [7, 5] as Ratio }

            const actual = computeIsWithinPrimeMin(jiPitch, 5 as 5 & Min<Prime>)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is nhas no prime factors less than the prime min", (): void => {
            const jiPitch = { ratio: [5, 4] as Ratio }

            const actual = computeIsWithinPrimeMin(jiPitch, 7 as 7 & Min<Prime>)

            expect(actual).toBeFalsy()
        })
    })
})
