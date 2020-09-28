import {
    computeSuperNum,
    Decimal,
    Direction,
    isSubNum,
    isSuperNum,
    isUnisonNum,
    Monzo,
    Num,
    Quotient,
} from "../../../../../src/general/math/num"

describe("isSubNum", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the monzo is sub", (): void => {
            const num = { monzo: [-1] as Monzo }

            const actual = isSubNum(num)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is unison", (): void => {
            const num = { monzo: [] as Monzo }

            const actual = isSubNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is super", (): void => {
            const num = { monzo: [1] as Monzo }

            const actual = isSubNum(num)

            expect(actual).toBeFalsy()
        })
    })

    describe("by quotient", (): void => {
        it("returns true if the quotient is sub", (): void => {
            const num = { quotient: [1, 3] as Quotient }

            const actual = isSubNum(num)

            expect(actual).toBeTruthy()
        })

        it("returns false if the quotient is unison", (): void => {
            const num = { quotient: [3, 3] as Quotient }

            const actual = isSubNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns false if the quotient is super", (): void => {
            const num = { quotient: [3, 1] as Quotient }

            const actual = isSubNum(num)

            expect(actual).toBeFalsy()
        })
    })

    describe("by decimal", (): void => {
        it("returns true if the num is sub", (): void => {
            const num = { decimal: 0.17 as Decimal }

            const actual = isSubNum(num)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is unison", (): void => {
            const num = { decimal: 1 as Decimal }

            const actual = isSubNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is super", (): void => {
            const num = { decimal: 7.1 as Decimal }

            const actual = isSubNum(num)

            expect(actual).toBeFalsy()
        })
    })
})

describe("isSuperNum", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const num = { monzo: [-1] as Monzo }

            const actual = isSuperNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is unison", (): void => {
            const num = { monzo: [] as Monzo }

            const actual = isSuperNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is super", (): void => {
            const num = { monzo: [1] as Monzo }

            const actual = isSuperNum(num)

            expect(actual).toBeTruthy()
        })
    })

    describe("by quotient", (): void => {
        it("returns false if the quotient is sub", (): void => {
            const num = { quotient: [1, 3] as Quotient }

            const actual = isSuperNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns false if the quotient is unison", (): void => {
            const num = { quotient: [3, 3] as Quotient }

            const actual = isSuperNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns true if the quotient is super", (): void => {
            const num = { quotient: [3, 1] as Quotient }

            const actual = isSuperNum(num)

            expect(actual).toBeTruthy()
        })
    })

    describe("by decimal", (): void => {
        it("returns false if the num is sub", (): void => {
            const num = { decimal: 0.17 as Decimal }

            const actual = isSuperNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is unison", (): void => {
            const num = { decimal: 1 as Decimal }

            const actual = isSuperNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is super", (): void => {
            const num = { decimal: 7.1 as Decimal }

            const actual = isSuperNum(num)

            expect(actual).toBeTruthy()
        })
    })
})

describe("isUnisonNumber", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const num = { monzo: [-1] as Monzo }

            const actual = isUnisonNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is unison", (): void => {
            const num = { monzo: [] as Monzo }

            const actual = isUnisonNum(num)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is super", (): void => {
            const num = { monzo: [1] as Monzo }

            const actual = isUnisonNum(num)

            expect(actual).toBeFalsy()
        })
    })

    describe("by quotient", (): void => {
        it("returns false if the quotient is sub", (): void => {
            const num = { quotient: [1, 3] as Quotient }

            const actual = isUnisonNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns true if the quotient is unison", (): void => {
            const num = { quotient: [3, 3] as Quotient }

            const actual = isUnisonNum(num)

            expect(actual).toBeTruthy()
        })

        it("returns false if the quotient is super", (): void => {
            const num = { quotient: [3, 1] as Quotient }

            const actual = isUnisonNum(num)

            expect(actual).toBeFalsy()
        })
    })

    describe("by decimal", (): void => {
        it("returns false if the num is sub", (): void => {
            const num = { decimal: 0.17 as Decimal }

            const actual = isUnisonNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is unison", (): void => {
            const num = { decimal: 1 as Decimal }

            const actual = isUnisonNum(num)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is super", (): void => {
            const num = { decimal: 7.1 as Decimal }

            const actual = isUnisonNum(num)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeSuperNum", (): void => {
    it("flips the monzo, quotient, number", (): void => {
        const num: Num<{ direction: Direction.SUB }> = {
            monzo: [-40, 22, 1, 1] as Monzo<{ direction: Direction.SUB }>,
            quotient: [1098337086315, 1099511627776] as Quotient<{ direction: Direction.SUB }>,
            decimal: 0.2 as Decimal<{ direction: Direction.SUB }>,
        }

        const actual = computeSuperNum(num)

        const expected: Num<{ direction: Direction.SUPER }> = {
            monzo: [40, -22, -1, -1] as Monzo<{ direction: Direction.SUPER }>,
            quotient: [1099511627776, 1098337086315] as Quotient<{ direction: Direction.SUPER }>,
            decimal: 5 as Decimal<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only monzo is provided", (): void => {
        const num: Num<{ direction: Direction.SUB }> = {
            monzo: [-40, 22, 1, 1] as Monzo<{ direction: Direction.SUB }>,
        }

        const actual: Num<{ direction: Direction.SUPER }> = computeSuperNum(num)

        const expected: Num<{ direction: Direction.SUPER }> = {
            monzo: [40, -22, -1, -1] as Monzo<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only quotient is provided", (): void => {
        const num: Num<{ direction: Direction.SUB }> = {
            quotient: [1098337086315, 1099511627776] as Quotient<{ direction: Direction.SUB }>,
        }

        const actual = computeSuperNum(num)

        const expected: Num<{ direction: Direction.SUPER }> = {
            quotient: [1099511627776, 1098337086315] as Quotient<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only number are provided", (): void => {
        const num: Num<{ direction: Direction.SUB }> = {
            decimal: 0.2 as Decimal<{ irrational: true, direction: Direction.SUB }>,
        }

        const actual = computeSuperNum(num)

        const expected: Num<{ direction: Direction.SUPER }> = {
            decimal: 5 as Decimal<{ irrational: true, direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })
})
