import { Monzo } from "../../../../../../src/general/math/numeric/monzo"
import { Scamon } from "../../../../../../src/general/math/numeric/scamon"
import { computeRationalScamonFromRationalMonzo } from "../../../../../../src/general/math/rational/scamon"

describe("computeRationalScamonFromRationalMonzo", (): void => {
    it("returns a rational scamon with the rational monzo as its monzo", (): void => {
        const rationalMonzo = [0, 0, -2, 2] as Monzo<{ rational: true }>

        const actual = computeRationalScamonFromRationalMonzo(rationalMonzo)

        const expected = { monzo: rationalMonzo } as Scamon<{ rational: true }>
        expect(actual).toEqual(expected)
    })
})
