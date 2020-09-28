import { RationalQuotient } from "../../../../../../../src/general/math/rational/num/quotient"
import {
    isIntegerQuotient,
    isRationalQuotient,
} from "../../../../../../../src/general/math/rational/num/quotient/typeGuards"

describe("isIntegerQuotient", (): void => {
    it("returns true if the denominator divides evenly into the numerator", (): void => {
        const candidateIntegerQuotient = [77, 11] as RationalQuotient

        const actual = isIntegerQuotient(candidateIntegerQuotient)

        expect(actual).toBeTruthy()
    })

    it("returns false if the denominator does not divide evenly into the numerator", (): void => {
        const candidateIntegerQuotient = [77, 10] as RationalQuotient

        const actual = isIntegerQuotient(candidateIntegerQuotient)

        expect(actual).toBeFalsy()
    })
})

describe("isRationalQuotient", (): void => {
    it("returns true if the quotient is rational", (): void => {
        const candidateRationalQuotient = [11, 6] as RationalQuotient

        const actual = isRationalQuotient(candidateRationalQuotient)

        expect(actual).toBeTruthy()
    })

    it("returns false if the quotient is irrational", (): void => {
        const candidateRationalQuotient = [11.3, 6.1] as RationalQuotient

        const actual = isRationalQuotient(candidateRationalQuotient)

        expect(actual).toBeFalsy()
    })
})
