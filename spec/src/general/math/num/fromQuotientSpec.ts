import { computeNumFromQuotient, Num } from "../../../../../src/general/math/num"
import { Quotient } from "../../../../../src/general/math/num/quotient"
import { Integer, IntegerQuotient, Ratio } from "../../../../../src/general/math/rational/num"
import { RationalQuotient } from "../../../../../src/general/math/rational/num/quotient"

describe("computeNumFromQuotient", (): void => {
    it("creates a num from a quotient", (): void => {
        const quotient = [7.5, 5] as Quotient

        const actual = computeNumFromQuotient(quotient)

        const expected: Num = { quotient: [7.5, 5] as Quotient }
        expect(actual).toEqual(expected)
    })

    it("works for rational quotients", (): void => {
        const rationalQuotient = [7, 5] as RationalQuotient

        const actual = computeNumFromQuotient(rationalQuotient)

        const expected: Ratio = { quotient: [7, 5] as RationalQuotient }
        expect(actual).toEqual(expected)
    })

    it("works for integer quotients", (): void => {
        const integerQuotient = [35, 1] as IntegerQuotient

        const actual = computeNumFromQuotient(integerQuotient)

        const expected: Integer = { quotient: [35, 1] as IntegerQuotient }
        expect(actual).toEqual(expected)
    })
})
