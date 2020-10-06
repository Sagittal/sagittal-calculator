import { Quotient } from "../../../../../../src/general/math/numeric/quotient"
import { equalRationalQuotients } from "../../../../../../src/general/math/rational/quotient"

describe("equalRationalQuotients", (): void => {
    it("returns true when the quotients are equal", (): void => {
        const rationalQuotientA = [11, 10] as Quotient<{ rational: true }>
        const rationalQuotientB = [11, 10] as Quotient<{ rational: true }>

        const actual = equalRationalQuotients(rationalQuotientA, rationalQuotientB)

        expect(actual).toBeTruthy()
    })

    it("returns false when the quotients are equal", (): void => {
        const rationalQuotientA = [11, 10] as Quotient<{ rational: true }>
        const rationalQuotientB = [11, 9] as Quotient<{ rational: true }>

        const actual = equalRationalQuotients(rationalQuotientA, rationalQuotientB)

        expect(actual).toBeFalsy()
    })

    it("returns true when the quotients are equal when reduced to lowest terms", (): void => {
        const rationalQuotientA = [11, 10] as Quotient<{ rational: true }>
        const rationalQuotientB = [33, 30] as Quotient<{ rational: true }>

        const actual = equalRationalQuotients(rationalQuotientA, rationalQuotientB)

        expect(actual).toBeTruthy()
    })
})
