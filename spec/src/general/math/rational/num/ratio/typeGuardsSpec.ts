import { RationalRatio } from "../../../../../../../src/general/math/rational/num/ratio"
import {
    isIntegerRatio,
    isRationalRatio,
} from "../../../../../../../src/general/math/rational/num/ratio/typeGuards"

describe("isIntegerRatio", (): void => {
    it("returns true if the denominator divides evenly into the numerator", (): void => {
        const candidateIntegerRatio = [77, 11] as RationalRatio

        const actual = isIntegerRatio(candidateIntegerRatio)

        expect(actual).toBeTruthy()
    })

    it("returns false if the denominator does not divide evenly into the numerator", (): void => {
        const candidateIntegerRatio = [77, 10] as RationalRatio

        const actual = isIntegerRatio(candidateIntegerRatio)

        expect(actual).toBeFalsy()
    })
})

describe("isRationalRatio", (): void => {
    it("returns true if the ratio is rational", (): void => {
        const candidateRationalRatio = [11, 6] as RationalRatio

        const actual = isRationalRatio(candidateRationalRatio)

        expect(actual).toBeTruthy()
    })

    it("returns false if the ratio is irrational", (): void => {
        const candidateRationalRatio = [11.3, 6.1] as RationalRatio

        const actual = isRationalRatio(candidateRationalRatio)

        expect(actual).toBeFalsy()
    })
})
