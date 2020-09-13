import { Ratio } from "../../../../src/general/math"
import { Monzo } from "../../../../src/general/math/monzo"
import { Cents, computeIsSubPitch, computeIsUnisonPitch } from "../../../../src/general/music"
import { computeIsSuperPitch } from "../../../../src/general/music/pitchDirection"

describe("computeIsSubPitch", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the monzo is sub", (): void => {
            const pitch = { monzo: [-1] as Monzo }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is unison", (): void => {
            const pitch = { monzo: [] as Monzo }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is super", (): void => {
            const pitch = { monzo: [1] as Monzo }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns true if the ratio is sub", (): void => {
            const pitch = { ratio: [1, 3] as Ratio }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is unison", (): void => {
            const pitch = { ratio: [3, 3] as Ratio }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the ratio is super", (): void => {
            const pitch = { ratio: [3, 1] as Ratio }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by cents", (): void => {
        it("returns true if the cents are negative", (): void => {
            const pitch = { cents: -7.1 as Cents }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the cents are zero", (): void => {
            const pitch = { cents: 0 as Cents }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the cents are positive", (): void => {
            const pitch = { cents: 7.1 as Cents }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeIsSuperPitch", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const pitch = { monzo: [-1] as Monzo }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is unison", (): void => {
            const pitch = { monzo: [] as Monzo }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is super", (): void => {
            const pitch = { monzo: [1] as Monzo }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("by ratio", (): void => {
        it("returns false if the ratio is sub", (): void => {
            const pitch = { ratio: [1, 3] as Ratio }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the ratio is unison", (): void => {
            const pitch = { ratio: [3, 3] as Ratio }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the ratio is super", (): void => {
            const pitch = { ratio: [3, 1] as Ratio }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("by cents", (): void => {
        it("returns false if the cents are negative", (): void => {
            const pitch = { cents: -7.1 as Cents }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the cents are zero", (): void => {
            const pitch = { cents: 0 as Cents }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the cents are positive", (): void => {
            const pitch = { cents: 7.1 as Cents }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeTruthy()
        })
    })
})

describe("computeIsUnisonPitch", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const pitch = { monzo: [-1] as Monzo }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is unison", (): void => {
            const pitch = { monzo: [] as Monzo }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is super", (): void => {
            const pitch = { monzo: [1] as Monzo }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns false if the ratio is sub", (): void => {
            const pitch = { ratio: [1, 3] as Ratio }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the ratio is unison", (): void => {
            const pitch = { ratio: [3, 3] as Ratio }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is super", (): void => {
            const pitch = { ratio: [3, 1] as Ratio }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by cents", (): void => {
        it("returns false if the cents are negative", (): void => {
            const pitch = { cents: -7.1 as Cents }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the cents are zero", (): void => {
            const pitch = { cents: 0 as Cents }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the cents are positive", (): void => {
            const pitch = { cents: 7.1 as Cents }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })
})
