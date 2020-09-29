import { isRatio, RationalMonzo, RationalQuotient } from "../../../../../../src/general/math/rational/num"

describe("isRatio", (): void => {
    describe("works for nums with monzos", (): void => {
        it("returns true if the monzo is irrational", (): void => {
            const candidateRatio = { monzo: [ 5, 4 ] as RationalMonzo }

            const actual = isRatio(candidateRatio)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is irrational", (): void => {
            const candidateRatio = { monzo: [ 5.1, 4.5 ] as RationalMonzo }

            const actual = isRatio(candidateRatio)

            expect(actual).toBeFalsy()
        })
    })

    describe("works for nums with quotients", (): void => {
        it("returns true if the quotient is rational", (): void => {
            const candidateRatio = { quotient: [ 5, 4 ] as RationalQuotient }

            const actual = isRatio(candidateRatio)

            expect(actual).toBeTruthy()
        })

        it("returns false if the quotient is irrational", (): void => {
            const candidateRatio = { quotient: [ 5.1, 4.5 ] as RationalQuotient }

            const actual = isRatio(candidateRatio)

            expect(actual).toBeFalsy()
        })
    })

    describe("works for nums with decimals", (): void => {
        it("returns true if the decimal is rational", (): void => {
            const candidateRatio = { decimal: 1.58965 }

            const actual = isRatio(candidateRatio)

            expect(actual).toBeTruthy()
        })

        it("returns false if the decimal is irrational", (): void => {
            const candidateRatio = { decimal: 1.589655 }

            const actual = isRatio(candidateRatio)

            expect(actual).toBeFalsy()
        })
    })

    describe("works for direct decimals", (): void => {
        it("returns true if the decimal is rational", (): void => {
            const candidateRationalDecimal = 1.58965

            const actual = isRatio(candidateRationalDecimal)

            expect(actual).toBeTruthy()
        })

        it("returns false if the decimal is irrational", (): void => {
            const candidateRationalDecimal = 1.589655

            const actual = isRatio(candidateRationalDecimal)

            expect(actual).toBeFalsy()
        })
    })
})
