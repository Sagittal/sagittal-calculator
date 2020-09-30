import { isRational, RationalMonzo, RationalQuotient } from "../../../../../../src/general/math/rational/real"

describe("isRational", (): void => {
    describe("works for reals with monzos", (): void => {
        it("returns true if the monzo is irrational", (): void => {
            const candidateRational = { monzo: [ 5, 4 ] as RationalMonzo }

            const actual = isRational(candidateRational)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is irrational", (): void => {
            const candidateRational = { monzo: [ 5.1, 4.5 ] as RationalMonzo }

            const actual = isRational(candidateRational)

            expect(actual).toBeFalsy()
        })
    })

    describe("works for reals with quotients", (): void => {
        it("returns true if the quotient is rational", (): void => {
            const candidateRational = { quotient: [ 5, 4 ] as RationalQuotient }

            const actual = isRational(candidateRational)

            expect(actual).toBeTruthy()
        })

        it("returns false if the quotient is irrational", (): void => {
            const candidateRational = { quotient: [ 5.1, 4.5 ] as RationalQuotient }

            const actual = isRational(candidateRational)

            expect(actual).toBeFalsy()
        })
    })

    describe("works for reals with decimals", (): void => {
        it("returns true if the decimal is rational", (): void => {
            const candidateRational = { decimal: 1.58965 }

            const actual = isRational(candidateRational)

            expect(actual).toBeTruthy()
        })

        it("returns false if the decimal is irrational", (): void => {
            const candidateRational = { decimal: 1.589655 }

            const actual = isRational(candidateRational)

            expect(actual).toBeFalsy()
        })
    })

    describe("works for direct decimals", (): void => {
        it("returns true if the decimal is rational", (): void => {
            const candidateRationalDecimal = 1.58965

            const actual = isRational(candidateRationalDecimal)

            expect(actual).toBeTruthy()
        })

        it("returns false if the decimal is irrational", (): void => {
            const candidateRationalDecimal = 1.589655

            const actual = isRational(candidateRationalDecimal)

            expect(actual).toBeFalsy()
        })
    })
})
