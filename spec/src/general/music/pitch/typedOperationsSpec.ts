import { Monzo } from "../../../../../src/general/math/numeric/monzo"
import { Quotient } from "../../../../../src/general/math/numeric/quotient"
import { addPitches, Pitch, sqrtPitch } from "../../../../../src/general/music/pitch"
import { maxPitches } from "../../../../../src/general/music/pitch/typedOperations"

describe("addPitches", (): void => {
    it("works", (): void => {
        const augendJiPitch = { monzo: [2, -1, -1, 1] } as Pitch<{ rational: true }>
        const addendJiPitch = { monzo: [-2, 1] } as Pitch<{ rational: true }>

        const actual = addPitches(augendJiPitch, addendJiPitch)

        const expected = { monzo: [0, 0, -1, 1] } as Pitch<{ rational: true }>
        expect(actual).toBeCloseToObject(expected)
    })
})

describe("sqrtPitch", (): void => {
    it("introduces a scaler (exponent) of 1/2 (root 2)", (): void => {
        const pitch = { monzo: [-11, 7] } as Pitch<{ rational: true }>

        const actual = sqrtPitch(pitch)

        const expected = {
            monzo: [-11, 7] as Monzo<{ rational: true }>,
            scaler: [1, 2] as Quotient,
        }
        expect(actual).toEqual(expected)
    })
})

describe("maxPitches", (): void => {
    it("works for a mix of JI and non-JI pitches", (): void => {
        const pitchA = { monzo: [-2, -1, 0, 0, 1] } as Pitch<{ rational: true }>   // 11/12
        const pitchB = {
            monzo: [1] as Monzo<{ rational: true }>,
            scaler: [3, 1] as Quotient
        } as Pitch<{ rational: false }>                                                                         // 8
        const pitchC = { monzo: [0, 1] } as Pitch<{ rational: true }>              // 7

        const actual = maxPitches(pitchA, pitchB, pitchC)

        expect(actual).toEqual(pitchB)
    })
})
