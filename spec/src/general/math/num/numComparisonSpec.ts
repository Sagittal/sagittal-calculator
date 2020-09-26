import {
    Decimal,
    equalNums,
    Monzo,
    Num,
    numIsHigher,
    numIsHigherOrEqual,
    numIsLower,
    numIsLowerOrEqual,
    Ratio,
} from "../../../../../src/general/math/num"

describe("equalNums", (): void => {
    it("returns true if the monzos match", (): void => {
        const numA: Num = { monzo: [0, 0, 1, -1] as Monzo }
        const numB: Num = { monzo: [0, 0, 1, -1] as Monzo }

        const actual = equalNums(numA, numB)

        expect(actual).toBeTruthy()
    })

    it("returns true if the ratios match", (): void => {
        const numA: Num = { ratio: [5, 7] as Ratio }
        const numB: Num = { ratio: [5, 7] as Ratio }

        const actual = equalNums(numA, numB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzos do not match", (): void => {
        const numA: Num = { monzo: [0, 0, 1, -1] as Monzo }
        const numB: Num = { monzo: [0, 0, -1, -1] as Monzo }

        const actual = equalNums(numA, numB)

        expect(actual).toBeFalsy()
    })

    it("returns false if the ratios do not match", (): void => {
        const numA: Num = { ratio: [5, 7] as Ratio }
        const numB: Num = { ratio: [5, 6] as Ratio }

        const actual = equalNums(numA, numB)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzo of one is not the same rational num as the ratio of the other", (): void => {
        const numA: Num = { monzo: [0, 0, 1, -1] as Monzo }
        const numB: Num = { ratio: [5, 7] as Ratio }

        const actual = equalNums(numA, numB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo of one is not the same rational num as the ratio of the other", (): void => {
        const numA: Num = { monzo: [0, 0, 1, -1] as Monzo }
        const numB: Num = { ratio: [5, 6] as Ratio }

        const actual = equalNums(numA, numB)

        expect(actual).toBeFalsy()
    })

    it("works when monzos haven't been trimmed", (): void => {
        const numA: Num = { monzo: [0, 0] as Monzo }
        const numB: Num = { monzo: [0] as Monzo }

        const actual = equalNums(numA, numB)

        expect(actual).toBeTruthy()
    })

    it("works when ratios haven't been reduced", (): void => {
        const numA: Num = { ratio: [10, 14] as Ratio }
        const numB: Num = { ratio: [5, 7] as Ratio }

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

    it("returns true when one has a ratio and the other has a decimal, and they match", (): void => {
        const numA: Num = { ratio: [7, 5] as Ratio }
        const numB: Num = { decimal: 1.4 as Decimal }

        const actual = equalNums(numA, numB)

        expect(actual).toBeTruthy()
    })

    it("returns false when one has a ratio and the other has a decimal, and they do not match", (): void => {
        const numA: Num = { ratio: [7, 10] as Ratio }
        const numB: Num = { decimal: 1.4 as Decimal }

        const actual = equalNums(numA, numB)

        expect(actual).toBeFalsy()
    })
})

describe("numIsHigher", (): void => {
    describe("when both numes have monzos", (): void => {
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

    describe("when both numes have ratios", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { ratio: [9, 8] as Ratio }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { ratio: [9, 8] as Ratio }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both numes have decimals", (): void => {
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

    describe("when one num has a monzo and the other has a ratio", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { ratio: [5, 4] as Ratio }

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

    describe("when one num has a ratio and the other has a decimal", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { decimal: 1.2 as Decimal }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { decimal: 1.25 as Decimal }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { decimal: 1.3 as Decimal }

            const actual = numIsHigher(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })
})

describe("numIsLower", (): void => {
    describe("when both numes have monzos", (): void => {
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

    describe("when both numes have ratios", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { ratio: [9, 8] as Ratio }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { ratio: [9, 8] as Ratio }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both numes have decimals", (): void => {
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

    describe("when one num has a monzo and the other has a ratio", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { ratio: [5, 4] as Ratio }

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

    describe("when one num has a ratio and the other has a decimal", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { decimal: 1.2 as Decimal }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is equal to the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { decimal: 1.25 as Decimal }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { decimal: 1.3 as Decimal }

            const actual = numIsLower(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })
})

describe("numIsHigherOrEqual", (): void => {
    describe("when both numes have monzos", (): void => {
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

    describe("when both numes have ratios", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { ratio: [9, 8] as Ratio }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { ratio: [9, 8] as Ratio }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both numes have decimals", (): void => {
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

    describe("when one num has a monzo and the other has a ratio", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { ratio: [5, 4] as Ratio }

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

    describe("when one num has a ratio and the other has a decimal", (): void => {
        it("returns true if the num is higher than the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { decimal: 1.2 as Decimal }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { decimal: 1.25 as Decimal }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is lower than the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { decimal: 1.3 as Decimal }

            const actual = numIsHigherOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })
    })
})

describe("numIsLowerOrEqual", (): void => {
    describe("when both numes have monzos", (): void => {
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

    describe("when both numes have ratios", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { ratio: [9, 8] as Ratio }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { ratio: [9, 8] as Ratio }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both numes have decimals", (): void => {
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

    describe("when one num has a monzo and the other has a ratio", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { ratio: [5, 4] as Ratio }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { ratio: [5, 4] as Ratio }

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

    describe("when one num has a ratio and the other has a decimal", (): void => {
        it("returns false if the num is higher than the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { decimal: 1.2 as Decimal }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is equal to the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { decimal: 1.25 as Decimal }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the num is lower than the other", (): void => {
            const num = { ratio: [5, 4] as Ratio }
            const otherNum = { decimal: 1.3 as Decimal }

            const actual = numIsLowerOrEqual(num, otherNum)

            expect(actual).toBeTruthy()
        })
    })
})

