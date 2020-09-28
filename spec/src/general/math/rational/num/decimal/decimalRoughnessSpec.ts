import { Roughness } from "../../../../../../../src/general/math/rational"
import {
    computeRoughIntegerDecimal,
    IntegerDecimal,
    isRoughIntegerDecimal,
} from "../../../../../../../src/general/math/rational/num/decimal"

describe("isRoughIntegerDecimal", (): void => {
    it("works for integers", (): void => {
        const integerDecimal = 221 as IntegerDecimal
        const roughness = 11 as Roughness

        const actual = isRoughIntegerDecimal(integerDecimal, roughness)

        expect(actual).toBeTruthy()
    })

    it("works for integers, example where it is false", (): void => {
        const integerDecimal = 33 as IntegerDecimal
        const roughness = 5 as Roughness

        const actual = isRoughIntegerDecimal(integerDecimal, roughness)

        expect(actual).toBeFalsy()
    })

    it("1 is always rough", (): void => {
        const integerDecimal = 1 as IntegerDecimal
        const roughness = 5 as Roughness

        const actual = isRoughIntegerDecimal(integerDecimal, roughness)

        expect(actual).toBeTruthy()
    })

    it("another example", (): void => {
        const integerDecimal = 10 as IntegerDecimal
        const roughness = 11 as Roughness

        const actual = isRoughIntegerDecimal(integerDecimal, roughness)

        expect(actual).toBeFalsy()
    })

    it("even more examples", (): void => {
        const integerDecimal = 11 as IntegerDecimal
        const roughness = 11 as Roughness

        const actual = isRoughIntegerDecimal(integerDecimal, roughness)

        expect(actual).toBeTruthy()
    })
})

describe("computeRoughIntegerDecimal", (): void => {
    it("roughens the number to the desired roughness", (): void => {
        const integerDecimal = 1155 as IntegerDecimal      // 3 * 5 * 7 * 11
        const roughness = 7 as Roughness

        const actual = computeRoughIntegerDecimal(integerDecimal, roughness)

        const expected = 77 as IntegerDecimal
        expect(actual).toBe(expected)
    })
})

