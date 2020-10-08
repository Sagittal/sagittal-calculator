import { Monzo } from "../../../../../src/general/math/numeric/monzo"
import { computeJiPitchFromRationalMonzo } from "../../../../../src/general/music/ji"
import { Pitch } from "../../../../../src/general/music/pitch"

describe("computeJiPitchFromRationalMonzo", (): void => {
    it("returns a JI pitch with the rational monzo as its monzo", (): void => {
        const rationalMonzo = [0, 0, -2, 2] as Monzo<{ rational: true }>

        const actual = computeJiPitchFromRationalMonzo(rationalMonzo)

        const expected = { monzo: rationalMonzo } as Pitch<{ rational: true }>
        expect(actual).toEqual(expected)
    })
})
