import { Smoothness } from "../../../../../../../src/general/math/rational"
import { IntegerDecimal, isSmoothIntegerDecimal } from "../../../../../../../src/general/math/rational/num/decimal"

describe("isSmoothIntegerDecimal", (): void => {
    it("works, example when it is true (no prime factors > smoothness)", (): void => {
        const integerDecimal = 35 as IntegerDecimal
        const smoothness = 7 as 7 & Smoothness

        const actual = isSmoothIntegerDecimal(integerDecimal, smoothness)

        expect(actual).toBeTruthy()
    })

    it("works, example when it is false (some prime factors > smoothness)", (): void => {
        const integerDecimal = 35 as IntegerDecimal
        const smoothness = 5 as 5 & Smoothness

        const actual = isSmoothIntegerDecimal(integerDecimal, smoothness)

        expect(actual).toBeFalsy()
    })
})
