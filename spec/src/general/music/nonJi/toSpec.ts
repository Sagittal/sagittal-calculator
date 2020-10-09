import { Decimal } from "../../../../../src/general/math/numeric/decimal"
import { Monzo } from "../../../../../src/general/math/numeric/monzo"
import { Quotient } from "../../../../../src/general/math/numeric/quotient"
import {
    computeIrrationalDecimalFromPitch,
    computeIrrationalMonzoFromPitch,
    computeIrrationalQuotientFromPitch,
} from "../../../../../src/general/music/nonJi"
import { NON_JI_PITCH_BASE_MONZO } from "../../../../../src/general/music/nonJi/constants"
import { Pitch } from "../../../../../src/general/music/pitch"

describe("computeIrrationalMonzoFromPitch", (): void => {
    it("works for a non-JI pitch", (): void => {
        const nonJiPitch = {
            monzo: [-1, 0, -1, 0, 1],
            scaler: [1, 3] as Quotient
        } as Pitch<{ rational: false }>

        const actual = computeIrrationalMonzoFromPitch(nonJiPitch)

        const expected = [-1 / 3, 0, -1 / 3, 0, 1 / 3] as Monzo<{ rational: false }>
        expect(actual).toEqual(expected)
    })
})

describe("computeIrrationalDecimalFromPitch", (): void => {
    it("given a non-JI pitch, returns an irrational decimal", (): void => {
        const nonJiPitch = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [6.400178, 1] as Quotient,
        } as Pitch<{ rational: false }>

        const actual = computeIrrationalDecimalFromPitch(nonJiPitch)

        const expected = 84.45893 as Decimal<{ rational: false }>
        expect(actual).toBeCloseTo(expected)
    })
})

describe("computeIrrationalQuotientFromPitch", (): void => {
    it("returns a dumb irrational quotient, essentially the same irrational decimal you would have gotten, but over 1            ", (): void => {
        const nonJiPitch = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [6.400178, 1] as Quotient,
        } as Pitch<{ rational: false }>

        const actual = computeIrrationalQuotientFromPitch(nonJiPitch)

        const expected = [84.45893, 1] as Quotient<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})
