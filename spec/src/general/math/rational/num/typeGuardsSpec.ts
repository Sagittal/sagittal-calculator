import { Monzo, Ratio } from "../../../../../../src/general/math/num"
import { isRationalNum } from "../../../../../../src/general/math/rational/num"

describe("isRationalNum", (): void => {
    describe("works for nums with monzos", (): void => {
        it("returns true if the monzo is irrational", (): void => {
            const num = { monzo: [ 5, 4 ] as Monzo }

            const actual = isRationalNum(num)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is irrational", (): void => {
            const num = { monzo: [ 5.1, 4.5 ] as Monzo }

            const actual = isRationalNum(num)

            expect(actual).toBeFalsy()
        })
    })

    describe("works for nums with ratios", (): void => {
        it("returns true if the ratio is rational", (): void => {
            const num = { ratio: [ 5, 4 ] as Ratio }

            const actual = isRationalNum(num)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is irrational", (): void => {
            const num = { ratio: [ 5.1, 4.5 ] as Ratio }

            const actual = isRationalNum(num)

            expect(actual).toBeFalsy()
        })
    })

    describe("works for nums with decimals", (): void => {
        it("always returns true", (): void => {
            const num = { decimal: 1.589655}

            const actual = isRationalNum(num)

            expect(actual).toBeTruthy()
        })
    })
})