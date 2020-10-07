import { Direction, EMPTY_MONZO, Monzo, Quotient } from "../../../../../src/general/math/numeric"
import {
    computeSuperPitch,
    isSubPitch,
    isSuperPitch,
    isUnisonPitch,
    Pitch,
} from "../../../../../src/general/music/pitch"
import { NON_JI_PITCH_BASE_MONZO } from "../../../../../src/general/music/pitch/constants"

describe("isSubPitch", (): void => {
    describe("for JI pitches", (): void => {
        it("returns true if the monzo is sub", (): void => {
            const pitch = { monzo: [-1] } as Pitch<{ rational: true }>

            const actual = isSubPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is unison", (): void => {
            const pitch = { monzo: [] as unknown[] } as Pitch<{ rational: true }>

            const actual = isSubPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is super", (): void => {
            const pitch = { monzo: [1] } as Pitch<{ rational: true }>

            const actual = isSubPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("for non-JI pitches", (): void => {
        it("returns true if the pitch is sub", (): void => {
            const pitch = { monzo: NON_JI_PITCH_BASE_MONZO, scaler: [-1, 1] as Quotient } as Pitch<{ rational: false }>

            const actual = isSubPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is unison", (): void => {
            const pitch = { monzo: NON_JI_PITCH_BASE_MONZO, scaler: [0, 1] as Quotient } as Pitch<{ rational: false }>

            const actual = isSubPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is super", (): void => {
            const pitch = { monzo: NON_JI_PITCH_BASE_MONZO, scaler: [1, 1] as Quotient } as Pitch<{ rational: false }>

            const actual = isSubPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })
})

describe("isSuperPitch", (): void => {
    describe("for JI pitches", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const pitch = { monzo: [-1] } as Pitch<{ rational: true }>

            const actual = isSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is unison", (): void => {
            const pitch = { monzo: [] as unknown[] } as Pitch<{ rational: true }>

            const actual = isSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is super", (): void => {
            const pitch = { monzo: [1] } as Pitch<{ rational: true }>

            const actual = isSuperPitch(pitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("for non-JI pitches", (): void => {
        it("returns false if the pitch is sub", (): void => {
            const pitch = { monzo: NON_JI_PITCH_BASE_MONZO, scaler: [-1, 1] as Quotient } as Pitch<{ rational: false }>

            const actual = isSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is unison", (): void => {
            const pitch = { monzo: NON_JI_PITCH_BASE_MONZO, scaler: [0, 1] as Quotient } as Pitch<{ rational: false }>

            const actual = isSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is super", (): void => {
            const pitch = { monzo: NON_JI_PITCH_BASE_MONZO, scaler: [1, 1] as Quotient } as Pitch<{ rational: false }>

            const actual = isSuperPitch(pitch)

            expect(actual).toBeTruthy()
        })
    })
})

describe("isUnisonPitch", (): void => {
    describe("for JI pitches", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const pitch = { monzo: [-1] } as Pitch<{ rational: true }>

            const actual = isUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is unison", (): void => {
            const pitch = { monzo: [] as unknown[] } as Pitch<{ rational: true }>

            const actual = isUnisonPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is super", (): void => {
            const pitch = { monzo: [1] } as Pitch<{ rational: true }>

            const actual = isUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("for non-JI pitches", (): void => {
        it("returns false if the pitch is sub", (): void => {
            const pitch = { monzo: NON_JI_PITCH_BASE_MONZO, scaler: [-1, 1] as Quotient } as Pitch<{ rational: false }>

            const actual = isUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is unison", (): void => {
            const pitch = { monzo: NON_JI_PITCH_BASE_MONZO, scaler: [0, 1] as Quotient } as Pitch<{ rational: false }>

            const actual = isUnisonPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is super", (): void => {
            const pitch = { monzo: NON_JI_PITCH_BASE_MONZO, scaler: [1, 1] as Quotient } as Pitch<{ rational: false }>

            const actual = isUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeSuperPitch", (): void => {
    it("if the pitch is sub, flips the monzo", (): void => {
        const pitch = {
            monzo: [-40, 22, 1, 1] as Monzo<{ rational: true, direction: Direction.SUB }>,
        } as Pitch<{ rational: true, direction: Direction.SUB }>

        const actual: Pitch<{ rational: true, direction: Direction.SUPER }> = computeSuperPitch(pitch)

        const expected = {
            monzo: [40, -22, -1, -1] as Monzo<{ rational: true, direction: Direction.SUPER }>,
        } as Pitch<{ rational: true, direction: Direction.SUPER }>
        expect(actual).toEqual(expected)
    })

    it("if the pitch is sub, flips the monzo, even for a non-JI pitch, in which case it would be equivalent to negate the scaler - but we don't do that so we can preserve the relationship between the pitch and its monzo in terms of its numeric properties", (): void => {
        const pitch = {
            monzo: [-40, 22, 1, 1] as Monzo<{ rational: true }>,
            scaler: [1, 2] as Quotient,
        } as Pitch<{ rational: false, direction: Direction.SUB }>

        const actual: Pitch<{ rational: false, direction: Direction.SUPER }> = computeSuperPitch(pitch)

        const expected = {
            monzo: [40, -22, -1, -1] as Monzo<{ rational: true, direction: Direction.SUPER }>,
            scaler: [1, 2] as Quotient,
        } as Pitch<{ rational: false, direction: Direction.SUPER }>
        expect(actual).toEqual(expected)
    })

    it("returns unchanged a super pitch", (): void => {
        const pitch = {
            monzo: [40, -22, -1, -1] as Monzo<{ rational: true, direction: Direction.SUPER }>,
        } as Pitch<{ rational: true, direction: Direction.SUPER }>

        const actual: Pitch<{ rational: true, direction: Direction.SUPER }> = computeSuperPitch(pitch)

        expect(actual).toEqual(pitch)
    })

    it("returns unchanged a unison pitch", (): void => {
        const pitch = {
            monzo: EMPTY_MONZO as Monzo<{ rational: true, direction: Direction.UNISON }>,
        } as Pitch<{ rational: true, direction: Direction.UNISON }>

        const actual: Pitch<{ rational: true, direction: Direction.UNISON }> = computeSuperPitch(pitch)

        expect(actual).toEqual(pitch)
    })
})
