import { Ratio } from "../../../../src/general/math"
import { Monzo } from "../../../../src/general/math/monzo"
import { Cents, computeIsSubPitch, computeIsUnisonPitch } from "../../../../src/general/music"
import { computeIsSuperPitch } from "../../../../src/general/music/pitchDirection"

describe("computeIsSubPitch", () => {
    describe("by monzo", () => {
        it("returns true if the monzo is sub", () => {
            const pitch = { monzo: [-1] as Monzo }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is unison", () => {
            const pitch = { monzo: [] as Monzo }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is super", () => {
            const pitch = { monzo: [1] as Monzo }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", () => {
        it("returns true if the ratio is sub", () => {
            const pitch = { ratio: [1, 3] as Ratio }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is unison", () => {
            const pitch = { ratio: [3, 3] as Ratio }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the ratio is super", () => {
            const pitch = { ratio: [3, 1] as Ratio }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by cents", () => {
        it("returns true if the cents are negative", () => {
            const pitch = { cents: -7.1 as Cents }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the cents are zero", () => {
            const pitch = { cents: 0 as Cents }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the cents are positive", () => {
            const pitch = { cents: 7.1 as Cents }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeIsSuperPitch", () => {
    describe("by monzo", () => {
        it("returns false if the monzo is sub", () => {
            const pitch = { monzo: [-1] as Monzo }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is unison", () => {
            const pitch = { monzo: [] as Monzo }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is super", () => {
            const pitch = { monzo: [1] as Monzo }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("by ratio", () => {
        it("returns false if the ratio is sub", () => {
            const pitch = { ratio: [1, 3] as Ratio }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the ratio is unison", () => {
            const pitch = { ratio: [3, 3] as Ratio }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the ratio is super", () => {
            const pitch = { ratio: [3, 1] as Ratio }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("by cents", () => {
        it("returns false if the cents are negative", () => {
            const pitch = { cents: -7.1 as Cents }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the cents are zero", () => {
            const pitch = { cents: 0 as Cents }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the cents are positive", () => {
            const pitch = { cents: 7.1 as Cents }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeTruthy()
        })
    })
})

describe("computeIsUnisonPitch", () => {
    describe("by monzo", () => {
        it("returns false if the monzo is sub", () => {
            const pitch = { monzo: [-1] as Monzo }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is unison", () => {
            const pitch = { monzo: [] as Monzo }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is super", () => {
            const pitch = { monzo: [1] as Monzo }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", () => {
        it("returns false if the ratio is sub", () => {
            const pitch = { ratio: [1, 3] as Ratio }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the ratio is unison", () => {
            const pitch = { ratio: [3, 3] as Ratio }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is super", () => {
            const pitch = { ratio: [3, 1] as Ratio }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by cents", () => {
        it("returns false if the cents are negative", () => {
            const pitch = { cents: -7.1 as Cents }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the cents are zero", () => {
            const pitch = { cents: 0 as Cents }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the cents are positive", () => {
            const pitch = { cents: 7.1 as Cents }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })
})
