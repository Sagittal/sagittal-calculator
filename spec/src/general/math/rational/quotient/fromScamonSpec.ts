import { Quotient } from "../../../../../../src/general/math/numeric/quotient"
import { Scamon } from "../../../../../../src/general/math/numeric/scamon"
import { computeRationalQuotientFromRationalScamon } from "../../../../../../src/general/math/rational/quotient"

describe("computeRationalQuotientFromRationalScamon", (): void => {
    it("given a Rational scamon, returns a rational quotient", (): void => {
        const rationalScamon = { monzo: [-4, 4, -1] } as Scamon<{ rational: true }>

        const actual = computeRationalQuotientFromRationalScamon(rationalScamon)

        const expected = [81, 80] as Quotient<{ rational: true }>
        expect(actual).toEqual(expected)
    })
})
