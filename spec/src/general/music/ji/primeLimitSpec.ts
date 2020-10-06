import { Max, Min, Prime } from "../../../../../src/general/math"
import {
    computePrimeLimit,
    isWithinPrimeLimit,
    isWithinPrimeMin,
    Pitch,
    THREE_PRIME_LIMIT,
} from "../../../../../src/general/music"
import { FIVE_PRIME_LIMIT } from "../../../../../src/general/music/ji/constants"

describe("isWithinPrimeLimit", (): void => {
    it("returns true if the pitch is within the given prime limit", (): void => {
        const jiPitch = { monzo: [0, 0, 1] } as Pitch<{ rational: true }>

        const actual = isWithinPrimeLimit(jiPitch, FIVE_PRIME_LIMIT)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pitch is not within the given prime limit", (): void => {
        const jiPitch = { monzo: [0, 0, 1] } as Pitch<{ rational: true }>

        const actual = isWithinPrimeLimit(jiPitch, THREE_PRIME_LIMIT)

        expect(actual).toBeFalsy()
    })
})

describe("isWithinPrimeMin", (): void => {
    it("returns true if the pitch has no prime factors less than the prime min", (): void => {
        const jiPitch = { monzo: [0, 0, 1] } as Pitch<{ rational: true }>

        const actual = isWithinPrimeMin(jiPitch, 5 as 5 & Min<Prime>)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pitch has no prime factors less than the prime min", (): void => {
        const jiPitch = { monzo: [0, 0, 1] } as Pitch<{ rational: true }>

        const actual = isWithinPrimeMin(jiPitch, 7 as 7 & Min<Prime>)

        expect(actual).toBeFalsy()
    })
})

describe("computePrimeLimit", (): void => {
    it("returns the greatest prime factor (AKA prime limit) of the given JI pitch", (): void => {
        const jiPitch = { monzo: [2, 3, 0, 0, 4] } as Pitch<{ rational: true }>

        const actual = computePrimeLimit(jiPitch)

        const expected = 11 as Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works when its monzo has trailing zeroes", (): void => {
        const jiPitch = { monzo: [2, 3, 4, 0, 0] } as Pitch<{ rational: true }>

        const actual = computePrimeLimit(jiPitch)

        const expected = 5 as Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works for those with an empty monzo", (): void => {
        const jiPitch = { monzo: [] as unknown[] } as Pitch<{ rational: true }>

        const actual = computePrimeLimit(jiPitch)

        const expected = 1 as Max<Prime>
        expect(actual).toBe(expected)
    })
})
