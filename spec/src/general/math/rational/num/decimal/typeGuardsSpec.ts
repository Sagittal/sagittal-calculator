import { isRationalDecimal } from "../../../../../../../src/general/math/rational/num/decimal"

describe("isRationalDecimal", (): void => {
    it("always returns true, because there's no real way to tell (maybe it's 15793493/10000000)", (): void => {
        const candidateRationalDecimal = 1.579349

        const actual = isRationalDecimal(candidateRationalDecimal)

        expect(actual).toBeTruthy()
    })
})
