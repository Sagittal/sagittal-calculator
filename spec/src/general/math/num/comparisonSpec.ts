import {
    Decimal,
    equalNums,
    Monzo,
    Num,
    numIsHigher,
    numIsHigherOrEqual,
    numIsLower,
    numIsLowerOrEqual,
    Quotient,
} from "../../../../../src/general/math/num"

describe("equalNums", (): void => {
    it("returns true if the monzos match", (): void => {
        const numA: Num = { monzo: [0, 0, 1, -1] as Monzo }
        const numB: Num = { monzo: [0, 0, 1, -1] as Monzo }

        const actual = equalNums(numA, numB)

        expect(actual).toBeTruthy()
    })

    it("returns true if the quotients match", (): void => {
        const numA: Num = { quotient: [5, 7] as Quotient }
        const numB: Num = { quotient: [5, 7] as Quotient }

        const actual = equalNums(numA, numB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzos do not match", (): void => {
        const numA: Num = { monzo: [0, 0, 1, -1] as Monzo }
        const numB: Num = { monzo: [0, 0, -1, -1] as Monzo }

        const actual = equalNums(numA, numB)

        expect(actual).toBeFalsy()
    })

    it("returns false if the quotients do not match", (): void => {
        const numA: Num = { quotient: [5, 7] as Quotient }
        const numB: Num = { quotient: [5, 6] as Quotient }

        const actual = equalNums(numA, numB)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzo of one is not the same ratio as the quotient of the other", (): void => {
        const numA: Num = { monzo: [0, 0, 1, -1] as Monzo }
        const numB: Num = { quotient: [5, 7] as Quotient }

        const actual = equalNums(numA, numB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo of one is not the same ratio as the quotient of the other", (): void => {
        const numA: Num = { monzo: [0, 0, 1, -1] as Monzo }
        const numB: Num = { quotient: [5, 6] as Quotient }

        const actual = equalNums(numA, numB)

        expect(actual).toBeFalsy()
    })

    it("works when monzos haven't been trimmed", (): void => {
        const numA: Num = { monzo: [0, 0] as Monzo }
        const numB: Num = { monzo: [0] as Monzo }

        const actual = equalNums(numA, numB)

        expect(actual).toBeTruthy()
    })

    it("works when quotients haven't been reduced", (): void => {
        const numA: Num = { quotient: [10, 14] as Quotient }
        const numB: Num = { quotient: [5, 7] as Quotient }

        const actual = equalNums(numA, numB)

        expect(actual).toBeTruthy()
    })

    it("returns true when both have decimals that match", (): void => {
        const numA: Num = { decimal: 1.4 as Decimal }
        const numB: Num = { decimal: 1.4 as Decimal }

        const actual = equalNums(numA, numB)

        expect(actual).toBeTruthy()
    })

    it("returns false when both have decimals that do not match", (): void => {
        const numA: Num = { decimal: 1.4 as Decimal }
        const numB: Num = { decimal: 1.3 as Decimal }

        const actual = equalNums(numA, numB)

        expect(actual).toBeFalsy()
    })

    it("returns true when one has a monzo and the other has a decimal, and they match", (): void => {
        const numA: Num = { monzo: [0, 0, -1, 1] as Monzo }
        const numB: Num = { decimal: 1.4 as Decimal }

        const actual = equalNums(numA, numB)

        expect(actual).toBeTruthy()
    })

    it("returns false when one has a monzo and the other has a decimal, and they do not match", (): void => {
        const numA: Num = { monzo: [0, 0, -2, 1] as Monzo }
        const numB: Num = { decimal: 1.4 as Decimal }

        const actual = equalNums(numA, numB)

        expect(actual).toBeFalsy()
    })

    it("returns true when one has a quotient and the other has a decimal, and they match", (): void => {
        const numA: Num = { quotient: [7, 5] as Quotient }
        const numB: Num = { decimal: 1.4 as Decimal }

        const actual = equalNums(numA, numB)

        expect(actual).toBeTruthy()
    })

    it("returns false when one has a quotient and the other has a decimal, and they do not match", (): void => {
        const numA: Num = { quotient: [7, 10] as Quotient }
        const numB: Num = { decimal: 1.4 as Decimal }

        const actual = equalNums(numA, numB)

        expect(actual).toBeFalsy()
    })

    it("works for a monzo and a direct decimal", (): void => {
        const numA: Num = { monzo: [0, 0, -1, 1] as Monzo }
        const decimalB: Decimal = 1.4 as Decimal

        const actual = equalNums(numA, decimalB)

        expect(actual).toBeTruthy()
    })

    it("works for a quotient and a direct decimal", (): void => {
        const numA: Num = { quotient: [14, 10] as Quotient }
        const decimalB: Decimal = 1.4 as Decimal

        const actual = equalNums(numA, decimalB)

        expect(actual).toBeTruthy()
    })

    it("works for a decimal and a direct decimal", (): void => {
        const numA: Num = { decimal: 1.4 as Decimal }
        const decimalB: Decimal = 1.4 as Decimal

        const actual = equalNums(numA, decimalB)

        expect(actual).toBeTruthy()
    })
})

describe("numIsHigher", (): void => {
    describe("when both nums have monzos", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-3, 2] as Monzo }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { monzo: [-3, 2] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both nums have quotients", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [9, 8] as Quotient }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { quotient: [9, 8] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both nums have decimals", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { decimal: 3.313714 as Decimal }
            const otherNum = { decimal: 2 as Decimal }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { decimal: 3.313714 as Decimal }
            const otherNum = { decimal: 3.313714 as Decimal }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { decimal: 2 as Decimal }
            const otherNum = { decimal: 3.313714 as Decimal }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one num has a monzo and the other has a quotient", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one num has a monzo and the other has a decimal", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { decimal: 6 as Decimal }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { decimal: 1.25 as Decimal }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { decimal: 1.3 as Decimal }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one num has a quotient and the other has a decimal", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.2 as Decimal }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.25 as Decimal }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.3 as Decimal }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both nums are direct decimals", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const decimal = { decimal: 1.25 as Decimal }
            const otherDecimal = 1.2 as Decimal

            const actual = numIsHigher(decimal, otherDecimal)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const decimal = { decimal: 1.25 as Decimal }
            const otherDecimal = 1.25 as Decimal

            const actual = numIsHigher(decimal, otherDecimal)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const decimal = { decimal: 1.25 as Decimal }
            const otherDecimal = 1.3 as Decimal

            const actual = numIsHigher(decimal, otherDecimal)

            expect(actual).toBeFalsy()
        })
    })
})

describe("numIsLower", (): void => {
    describe("when both nums have monzos", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-3, 2] as Monzo }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { monzo: [-3, 2] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both nums have quotients", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [9, 8] as Quotient }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { quotient: [9, 8] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both nums have decimals", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { decimal: 3.313714 as Decimal }
            const otherNum = { decimal: 2 as Decimal }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { decimal: 3.313714 as Decimal }
            const otherNum = { decimal: 3.313714 as Decimal }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { decimal: 2 as Decimal }
            const otherNum = { decimal: 3.313714 as Decimal }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one num has a monzo and the other has a quotient", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one num has a monzo and the other has a decimal", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { decimal: 6 as Decimal }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { decimal: 1.25 as Decimal }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { decimal: 1.3 as Decimal }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one num has a quotient and the other has a decimal", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.2 as Decimal }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.25 as Decimal }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.3 as Decimal }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both nums are direct decimals", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const decimal = { decimal: 1.25 as Decimal }
            const otherDecimal = 1.2 as Decimal

            const actual = numIsLower(decimal, otherDecimal)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const decimal = { decimal: 1.25 as Decimal }
            const otherDecimal = 1.25 as Decimal

            const actual = numIsLower(decimal, otherDecimal)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const decimal = { decimal: 1.25 as Decimal }
            const otherDecimal = 1.3 as Decimal

            const actual = numIsLower(decimal, otherDecimal)

            expect(actual).toBeTruthy()
        })
    })
})

describe("numIsHigherOrEqual", (): void => {
    describe("when both nums have monzos", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-3, 2] as Monzo }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { monzo: [-3, 2] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both nums have quotients", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [9, 8] as Quotient }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { quotient: [9, 8] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both nums have decimals", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { decimal: 3.313714 as Decimal }
            const otherNum = { decimal: 2 as Decimal }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { decimal: 3.313714 as Decimal }
            const otherNum = { decimal: 3.313714 as Decimal }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { decimal: 2 as Decimal }
            const otherNum = { decimal: 3.313714 as Decimal }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one num has a monzo and the other has a quotient", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one num has a monzo and the other has a decimal", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { decimal: 6 as Decimal }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { decimal: 1.25 as Decimal }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { decimal: 1.3 as Decimal }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one num has a quotient and the other has a decimal", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.2 as Decimal }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.25 as Decimal }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.3 as Decimal }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both nums are direct decimals", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const decimal = { decimal: 1.25 as Decimal }
            const otherDecimal = 1.2 as Decimal

            const actual = numIsHigherOrEqual(decimal, otherDecimal)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const decimal = { decimal: 1.25 as Decimal }
            const otherDecimal = 1.25 as Decimal

            const actual = numIsHigherOrEqual(decimal, otherDecimal)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const decimal = { decimal: 1.25 as Decimal }
            const otherDecimal = 1.3 as Decimal

            const actual = numIsHigherOrEqual(decimal, otherDecimal)

            expect(actual).toBeFalsy()
        })
    })
})

describe("numIsLowerOrEqual", (): void => {
    describe("when both nums have monzos", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-3, 2] as Monzo }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { monzo: [-3, 2] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both nums have quotients", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [9, 8] as Quotient }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { quotient: [9, 8] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both nums have decimals", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { decimal: 3.313714 as Decimal }
            const otherNum = { decimal: 2 as Decimal }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { decimal: 3.313714 as Decimal }
            const otherNum = { decimal: 3.313714 as Decimal }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { decimal: 2 as Decimal }
            const otherNum = { decimal: 3.313714 as Decimal }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one num has a monzo and the other has a quotient", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one num has a monzo and the other has a decimal", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { decimal: 6 as Decimal }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { decimal: 1.25 as Decimal }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { decimal: 1.3 as Decimal }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one num has a quotient and the other has a decimal", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.2 as Decimal }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.25 as Decimal }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.3 as Decimal }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both nums are direct decimals", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const decimal = { decimal: 1.25 as Decimal }
            const otherDecimal = 1.2 as Decimal

            const actual = numIsLowerOrEqual(decimal, otherDecimal)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const decimal = { decimal: 1.25 as Decimal }
            const otherDecimal = 1.25 as Decimal

            const actual = numIsLowerOrEqual(decimal, otherDecimal)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const decimal = { decimal: 1.25 as Decimal }
            const otherDecimal = 1.3 as Decimal

            const actual = numIsLowerOrEqual(decimal, otherDecimal)

            expect(actual).toBeTruthy()
        })
    })
})

