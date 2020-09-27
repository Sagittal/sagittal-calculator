import { isRationalDecimal } from "../../../../../../src/general/math/num/decimal"

describe("isRationalDecimal", (): void => {
    it("always returns true, because there's no real way to tell (maybe it's 15793493/10000000)", (): void => {
        const decimal = 1.579349

        const actual = isRationalDecimal(decimal)

        expect(actual).toBeTruthy()
    })
})
