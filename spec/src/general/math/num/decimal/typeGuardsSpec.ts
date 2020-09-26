import { computeDecimalIsRational } from "../../../../../../src/general/math/num/decimal"

describe("computeDecimalIsRational", (): void => {
    it("always returns true, because there's no real way to tell (maybe it's 15793493/10000000)", (): void => {
        const decimal = 1.5793493

        const actual = computeDecimalIsRational(decimal)

        expect(actual).toBeTruthy()
    })
})
