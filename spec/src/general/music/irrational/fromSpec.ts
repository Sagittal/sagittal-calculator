import { Monzo } from "../../../../../src/general/math/numeric/monzo"
import { Quotient } from "../../../../../src/general/math/numeric/quotient"
import { computeNonJiPitchFromMonzo } from "../../../../../src/general/music/irrational"
import { NON_JI_PITCH_BASE_MONZO } from "../../../../../src/general/music/irrational/constants"
import { Pitch } from "../../../../../src/general/music/pitch"

describe("computeNonJiPitchFromMonzo", (): void => {
    it("when given a monzo, returns a non-JI pitch", (): void => {
        const monzo = [-5.5, 3.5] as Monzo

        const actual = computeNonJiPitchFromMonzo(monzo)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [0.047369, 1] as Quotient,
        } as Pitch<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })

    it("when given a rational monzo, still returns a non-JI pitch", (): void => {
        const monzo = [-11, 7] as Monzo<{ rational: true }>

        const actual = computeNonJiPitchFromMonzo(monzo)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [0.094738, 1] as Quotient,
        } as Pitch<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})
