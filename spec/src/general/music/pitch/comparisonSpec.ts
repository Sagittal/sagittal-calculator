import { Monzo } from "../../../../../src/general/math/numeric/monzo"
import { Quotient } from "../../../../../src/general/math/numeric/quotient"
import {
    equalPitches,
    Pitch,
    pitchIsHigher,
    pitchIsHigherOrEqual,
    pitchIsLower,
    pitchIsLowerOrEqual,
} from "../../../../../src/general/music/pitch"

describe("equalPitches", (): void => {
    describe("for JI pitches", (): void => {
        it("returns true if the monzos match", (): void => {
            const pitchA = { monzo: [0, 0, 1, -1] } as Pitch<{ rational: true }>
            const pitchB = { monzo: [0, 0, 1, -1] } as Pitch<{ rational: true }>

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzos do not match", (): void => {
            const pitchA = { monzo: [0, 0, 1, -1] } as Pitch<{ rational: true }>
            const pitchB = { monzo: [0, 0, -1, -1] } as Pitch<{ rational: true }>

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })

        it("works when monzos haven't been trimmed", (): void => {
            const pitchA = { monzo: [0, 0] } as Pitch<{ rational: true }>
            const pitchB = { monzo: [0] } as Pitch<{ rational: true }>

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeTruthy()
        })
    })

    describe("for non-JI pitches", (): void => {
        it("returns true if both the monzos and scalers match", (): void => {
            const pitchA = {
                monzo: [0, 0, 1, -1] as Monzo<{ rational: true }>,
                scaler: [1, 12] as Quotient,
            } as Pitch<{ rational: false }>
            const pitchB = {
                monzo: [0, 0, 1, -1] as Monzo<{ rational: true }>,
                scaler: [1, 12] as Quotient,
            } as Pitch<{ rational: false }>

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzos do not match", (): void => {
            const pitchA = {
                monzo: [0, 0, 1, -1] as Monzo<{ rational: true }>,
                scaler: [1, 12] as Quotient,
            } as Pitch<{ rational: false }>
            const pitchB = {
                monzo: [0, 0, -1, -1] as Monzo<{ rational: true }>,
                scaler: [1, 12] as Quotient,
            } as Pitch<{ rational: false }>

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })

        it("returns false if the scalers do not match", (): void => {
            const pitchA = {
                monzo: [0, 0, 1, -1] as Monzo<{ rational: true }>,
                scaler: [1, 12] as Quotient,
            } as Pitch<{ rational: false }>
            const pitchB = {
                monzo: [0, 0, 1, -1] as Monzo<{ rational: true }>,
                scaler: [1, 2] as Quotient,
            } as Pitch<{ rational: false }>

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })
    })
})

describe("pitchIsHigher", (): void => {
    it("returns true if the pitch is higher than the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>

        const actual = pitchIsHigher(pitch, otherPitch)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pitch is equal to the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = pitchIsHigher(pitch, otherPitch)

        expect(actual).toBeFalsy()
    })

    it("returns false if the pitch is lower than the other", (): void => {
        const pitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = pitchIsHigher(pitch, otherPitch)

        expect(actual).toBeFalsy()
    })
})

describe("pitchIsLower", (): void => {
    it("returns false if the pitch is higher than the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>

        const actual = pitchIsLower(pitch, otherPitch)

        expect(actual).toBeFalsy()
    })

    it("returns false if the pitch is equal to the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = pitchIsLower(pitch, otherPitch)

        expect(actual).toBeFalsy()
    })

    it("returns true if the pitch is lower than the other", (): void => {
        const pitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = pitchIsLower(pitch, otherPitch)

        expect(actual).toBeTruthy()
    })

})

describe("pitchIsHigherOrEqual", (): void => {
    it("returns true if the pitch is higher than the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>

        const actual = pitchIsHigherOrEqual(pitch, otherPitch)

        expect(actual).toBeTruthy()
    })

    it("returns true if the pitch is equal to the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = pitchIsHigherOrEqual(pitch, otherPitch)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pitch is lower than the other", (): void => {
        const pitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = pitchIsHigherOrEqual(pitch, otherPitch)

        expect(actual).toBeFalsy()
    })
})

describe("pitchIsLowerOrEqual", (): void => {
    it("returns false if the pitch is higher than the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>

        const actual = pitchIsLowerOrEqual(pitch, otherPitch)

        expect(actual).toBeFalsy()
    })

    it("returns true if the pitch is equal to the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = pitchIsLowerOrEqual(pitch, otherPitch)

        expect(actual).toBeTruthy()
    })

    it("returns true if the pitch is lower than the other", (): void => {
        const pitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = pitchIsLowerOrEqual(pitch, otherPitch)

        expect(actual).toBeTruthy()
    })
})

