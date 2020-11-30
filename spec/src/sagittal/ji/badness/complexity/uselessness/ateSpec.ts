import {Abs, Decimal, Exponent, Prime, Scamon} from "../../../../../../../src/general"
import {computeAte} from "../../../../../../../src/sagittal"

describe("computeAte", (): void => {
    it("returns the ATE (abs 3-exponent) of the JI pitch", (): void => {
        const jiPitch = {monzo: [-1, -3, 1, 0, 1]} as Scamon<{rational: true}>

        const actual = computeAte(jiPitch)

        const expected = 3 as Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>
        expect(actual).toBe(expected)
    })

    it("works for monzos without 3-exponents", (): void => {
        const jiPitch = {monzo: [] as unknown[]} as Scamon<{rational: true}>

        const actual = computeAte(jiPitch)

        const expected = 0 as Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>
        expect(actual).toBe(expected)
    })
})
