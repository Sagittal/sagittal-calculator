import { Monzo } from "../../../../../src/general/math/numeric/monzo"
import { Quotient } from "../../../../../src/general/math/numeric/quotient"
import {
    arePitchesEqual,
    isPitchHigher,
    isPitchHigherOrEqual,
    isPitchLower,
    isPitchLowerOrEqual,
    Pitch,
} from "../../../../../src/general/music/pitch"

describe("arePitchesEqual", (): void => {
    describe("for JI pitches", (): void => {
        it("returns true if the monzos match", (): void => {
            const pitchA = { monzo: [0, 0, 1, -1] } as Pitch<{ rational: true }>
            const pitchB = { monzo: [0, 0, 1, -1] } as Pitch<{ rational: true }>

            const actual = arePitchesEqual(pitchA, pitchB)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzos do not match", (): void => {
            const pitchA = { monzo: [0, 0, 1, -1] } as Pitch<{ rational: true }>
            const pitchB = { monzo: [0, 0, -1, -1] } as Pitch<{ rational: true }>

            const actual = arePitchesEqual(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })

        it("works when monzos haven't been trimmed", (): void => {
            const pitchA = { monzo: [0, 0] } as Pitch<{ rational: true }>
            const pitchB = { monzo: [0] } as Pitch<{ rational: true }>

            const actual = arePitchesEqual(pitchA, pitchB)

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

            const actual = arePitchesEqual(pitchA, pitchB)

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

            const actual = arePitchesEqual(pitchA, pitchB)

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

            const actual = arePitchesEqual(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })
    })

    describe("for a combination of a JI pitch and a non-JI pitch", (): void => {
        it("returns true if they are equivalent", (): void => {
            const pitchA = {
                monzo: [0, 0, 1, -1] as Monzo<{ rational: true }>,
            } as Pitch<{ rational: true }>
            const pitchB = {
                monzo: [0, 0, 2, -2] as Monzo<{ rational: true }>,
                scaler: [1, 2] as Quotient,
            } as Pitch<{ rational: false }>

            const actual = arePitchesEqual(pitchA, pitchB)

            expect(actual).toBeTruthy()
        })

        it("returns false if they are not equivalent", (): void => {
            const pitchA = {
                monzo: [0, 0, 2, -2] as Monzo<{ rational: true }>,
            } as Pitch<{ rational: true }>
            const pitchB = {
                monzo: [0, 0, 2, -2] as Monzo<{ rational: true }>,
                scaler: [1, 2] as Quotient,
            } as Pitch<{ rational: false }>

            const actual = arePitchesEqual(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })
    })
})

describe("isPitchHigher", (): void => {
    it("returns true if the pitch is higher than the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>

        const actual = isPitchHigher(pitch, otherPitch)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pitch is equal to the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = isPitchHigher(pitch, otherPitch)

        expect(actual).toBeFalsy()
    })

    it("returns false if the pitch is lower than the other", (): void => {
        const pitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = isPitchHigher(pitch, otherPitch)

        expect(actual).toBeFalsy()
    })
})

describe("isPitchLower", (): void => {
    it("returns false if the pitch is higher than the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>

        const actual = isPitchLower(pitch, otherPitch)

        expect(actual).toBeFalsy()
    })

    it("returns false if the pitch is equal to the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = isPitchLower(pitch, otherPitch)

        expect(actual).toBeFalsy()
    })

    it("returns true if the pitch is lower than the other", (): void => {
        const pitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = isPitchLower(pitch, otherPitch)

        expect(actual).toBeTruthy()
    })

})

describe("isPitchHigherOrEqual", (): void => {
    it("returns true if the pitch is higher than the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>

        const actual = isPitchHigherOrEqual(pitch, otherPitch)

        expect(actual).toBeTruthy()
    })

    it("returns true if the pitch is equal to the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = isPitchHigherOrEqual(pitch, otherPitch)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pitch is lower than the other", (): void => {
        const pitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = isPitchHigherOrEqual(pitch, otherPitch)

        expect(actual).toBeFalsy()
    })
})

describe("isPitchLowerOrEqual", (): void => {
    it("returns false if the pitch is higher than the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>

        const actual = isPitchLowerOrEqual(pitch, otherPitch)

        expect(actual).toBeFalsy()
    })

    it("returns true if the pitch is equal to the other", (): void => {
        const pitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = isPitchLowerOrEqual(pitch, otherPitch)

        expect(actual).toBeTruthy()
    })

    it("returns true if the pitch is lower than the other", (): void => {
        const pitch = { monzo: [-3, 2] } as Pitch<{ rational: true }>
        const otherPitch = { monzo: [-2, 0, 1] } as Pitch<{ rational: true }>

        const actual = isPitchLowerOrEqual(pitch, otherPitch)

        expect(actual).toBeTruthy()
    })
})

