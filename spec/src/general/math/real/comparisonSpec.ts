import {
    equalReals,
    Monzo,
    Quotient,
    Real,
    RealDecimal,
    realIsHigher,
    realIsHigherOrEqual,
    realIsLower,
    realIsLowerOrEqual,
} from "../../../../../src/general/math/real"

describe("equalReals", (): void => {
    it("returns true if the monzos match", (): void => {
        const realA: Real = { monzo: [0, 0, 1, -1] as Monzo }
        const realB: Real = { monzo: [0, 0, 1, -1] as Monzo }

        const actual = equalReals(realA, realB)

        expect(actual).toBeTruthy()
    })

    it("returns true if the quotients match", (): void => {
        const realA: Real = { quotient: [5, 7] as Quotient }
        const realB: Real = { quotient: [5, 7] as Quotient }

        const actual = equalReals(realA, realB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzos do not match", (): void => {
        const realA: Real = { monzo: [0, 0, 1, -1] as Monzo }
        const realB: Real = { monzo: [0, 0, -1, -1] as Monzo }

        const actual = equalReals(realA, realB)

        expect(actual).toBeFalsy()
    })

    it("returns false if the quotients do not match", (): void => {
        const realA: Real = { quotient: [5, 7] as Quotient }
        const realB: Real = { quotient: [5, 6] as Quotient }

        const actual = equalReals(realA, realB)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzo of one is not the same rational as the quotient of the other", (): void => {
        const realA: Real = { monzo: [0, 0, 1, -1] as Monzo }
        const realB: Real = { quotient: [5, 7] as Quotient }

        const actual = equalReals(realA, realB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo of one is not the same rational as the quotient of the other", (): void => {
        const realA: Real = { monzo: [0, 0, 1, -1] as Monzo }
        const realB: Real = { quotient: [5, 6] as Quotient }

        const actual = equalReals(realA, realB)

        expect(actual).toBeFalsy()
    })

    it("works when monzos haven't been trimmed", (): void => {
        const realA: Real = { monzo: [0, 0] as Monzo }
        const realB: Real = { monzo: [0] as Monzo }

        const actual = equalReals(realA, realB)

        expect(actual).toBeTruthy()
    })

    it("works when quotients haven't been reduced", (): void => {
        const realA: Real = { quotient: [10, 14] as Quotient }
        const realB: Real = { quotient: [5, 7] as Quotient }

        const actual = equalReals(realA, realB)

        expect(actual).toBeTruthy()
    })

    it("returns true when both have decimals that match", (): void => {
        const realA: Real = { decimal: 1.4 as RealDecimal }
        const realB: Real = { decimal: 1.4 as RealDecimal }

        const actual = equalReals(realA, realB)

        expect(actual).toBeTruthy()
    })

    it("returns false when both have decimals that do not match", (): void => {
        const realA: Real = { decimal: 1.4 as RealDecimal }
        const realB: Real = { decimal: 1.3 as RealDecimal }

        const actual = equalReals(realA, realB)

        expect(actual).toBeFalsy()
    })

    it("returns true when one has a monzo and the other has a decimal, and they match", (): void => {
        const realA: Real = { monzo: [0, 0, -1, 1] as Monzo }
        const realB: Real = { decimal: 1.4 as RealDecimal }

        const actual = equalReals(realA, realB)

        expect(actual).toBeTruthy()
    })

    it("returns false when one has a monzo and the other has a decimal, and they do not match", (): void => {
        const realA: Real = { monzo: [0, 0, -2, 1] as Monzo }
        const realB: Real = { decimal: 1.4 as RealDecimal }

        const actual = equalReals(realA, realB)

        expect(actual).toBeFalsy()
    })

    it("returns true when one has a quotient and the other has a decimal, and they match", (): void => {
        const realA: Real = { quotient: [7, 5] as Quotient }
        const realB: Real = { decimal: 1.4 as RealDecimal }

        const actual = equalReals(realA, realB)

        expect(actual).toBeTruthy()
    })

    it("returns false when one has a quotient and the other has a decimal, and they do not match", (): void => {
        const realA: Real = { quotient: [7, 10] as Quotient }
        const realB: Real = { decimal: 1.4 as RealDecimal }

        const actual = equalReals(realA, realB)

        expect(actual).toBeFalsy()
    })

    it("works for a monzo and a direct decimal", (): void => {
        const realA: Real = { monzo: [0, 0, -1, 1] as Monzo }
        const decimalB: RealDecimal = 1.4 as RealDecimal

        const actual = equalReals(realA, decimalB)

        expect(actual).toBeTruthy()
    })

    it("works for a quotient and a direct decimal", (): void => {
        const realA: Real = { quotient: [14, 10] as Quotient }
        const decimalB: RealDecimal = 1.4 as RealDecimal

        const actual = equalReals(realA, decimalB)

        expect(actual).toBeTruthy()
    })

    it("works for a decimal and a direct decimal", (): void => {
        const realA: Real = { decimal: 1.4 as RealDecimal }
        const decimalB: RealDecimal = 1.4 as RealDecimal

        const actual = equalReals(realA, decimalB)

        expect(actual).toBeTruthy()
    })
})

describe("realIsHigher", (): void => {
    describe("when both reals have monzos", (): void => {
        it("returns true if the real is higher than the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-3, 2] as Monzo }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is equal to the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is lower than the other", (): void => {
            const real = { monzo: [-3, 2] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both reals have quotients", (): void => {
        it("returns true if the real is higher than the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [9, 8] as Quotient }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is equal to the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is lower than the other", (): void => {
            const real = { quotient: [9, 8] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both reals have decimals", (): void => {
        it("returns true if the real is higher than the other", (): void => {
            const real = { decimal: 3.313714 as RealDecimal }
            const otherNum = { decimal: 2 as RealDecimal }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is equal to the other", (): void => {
            const real = { decimal: 3.313714 as RealDecimal }
            const otherNum = { decimal: 3.313714 as RealDecimal }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is lower than the other", (): void => {
            const real = { decimal: 2 as RealDecimal }
            const otherNum = { decimal: 3.313714 as RealDecimal }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one real has a monzo and the other has a quotient", (): void => {
        it("returns true if the real is higher than the other", (): void => {
            const real = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is equal to the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is lower than the other", (): void => {
            const real = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one real has a monzo and the other has a decimal", (): void => {
        it("returns true if the real is higher than the other", (): void => {
            const real = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { decimal: 6 as RealDecimal }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is equal to the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { decimal: 1.25 as RealDecimal }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is lower than the other", (): void => {
            const real = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { decimal: 1.3 as RealDecimal }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one real has a quotient and the other has a decimal", (): void => {
        it("returns true if the real is higher than the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.2 as RealDecimal }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is equal to the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.25 as RealDecimal }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is lower than the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.3 as RealDecimal }

            const actual = realIsHigher(real, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both reals are direct decimals", (): void => {
        it("returns true if the real is higher than the other", (): void => {
            const decimal = { decimal: 1.25 as RealDecimal }
            const otherDecimal = 1.2 as RealDecimal

            const actual = realIsHigher(decimal, otherDecimal)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is equal to the other", (): void => {
            const decimal = { decimal: 1.25 as RealDecimal }
            const otherDecimal = 1.25 as RealDecimal

            const actual = realIsHigher(decimal, otherDecimal)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is lower than the other", (): void => {
            const decimal = { decimal: 1.25 as RealDecimal }
            const otherDecimal = 1.3 as RealDecimal

            const actual = realIsHigher(decimal, otherDecimal)

            expect(actual).toBeFalsy()
        })
    })
})

describe("realIsLower", (): void => {
    describe("when both reals have monzos", (): void => {
        it("returns false if the real is higher than the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-3, 2] as Monzo }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is equal to the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is lower than the other", (): void => {
            const real = { monzo: [-3, 2] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both reals have quotients", (): void => {
        it("returns false if the real is higher than the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [9, 8] as Quotient }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is equal to the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is lower than the other", (): void => {
            const real = { quotient: [9, 8] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both reals have decimals", (): void => {
        it("returns false if the real is higher than the other", (): void => {
            const real = { decimal: 3.313714 as RealDecimal }
            const otherNum = { decimal: 2 as RealDecimal }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is equal to the other", (): void => {
            const real = { decimal: 3.313714 as RealDecimal }
            const otherNum = { decimal: 3.313714 as RealDecimal }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is lower than the other", (): void => {
            const real = { decimal: 2 as RealDecimal }
            const otherNum = { decimal: 3.313714 as RealDecimal }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one real has a monzo and the other has a quotient", (): void => {
        it("returns false if the real is higher than the other", (): void => {
            const real = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is equal to the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is lower than the other", (): void => {
            const real = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one real has a monzo and the other has a decimal", (): void => {
        it("returns false if the real is higher than the other", (): void => {
            const real = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { decimal: 6 as RealDecimal }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is equal to the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { decimal: 1.25 as RealDecimal }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is lower than the other", (): void => {
            const real = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { decimal: 1.3 as RealDecimal }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one real has a quotient and the other has a decimal", (): void => {
        it("returns false if the real is higher than the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.2 as RealDecimal }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is equal to the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.25 as RealDecimal }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is lower than the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.3 as RealDecimal }

            const actual = realIsLower(real, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both reals are direct decimals", (): void => {
        it("returns false if the real is higher than the other", (): void => {
            const decimal = { decimal: 1.25 as RealDecimal }
            const otherDecimal = 1.2 as RealDecimal

            const actual = realIsLower(decimal, otherDecimal)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is equal to the other", (): void => {
            const decimal = { decimal: 1.25 as RealDecimal }
            const otherDecimal = 1.25 as RealDecimal

            const actual = realIsLower(decimal, otherDecimal)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is lower than the other", (): void => {
            const decimal = { decimal: 1.25 as RealDecimal }
            const otherDecimal = 1.3 as RealDecimal

            const actual = realIsLower(decimal, otherDecimal)

            expect(actual).toBeTruthy()
        })
    })
})

describe("realIsHigherOrEqual", (): void => {
    describe("when both reals have monzos", (): void => {
        it("returns true if the real is higher than the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-3, 2] as Monzo }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the real is equal to the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is lower than the other", (): void => {
            const real = { monzo: [-3, 2] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both reals have quotients", (): void => {
        it("returns true if the real is higher than the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [9, 8] as Quotient }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the real is equal to the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is lower than the other", (): void => {
            const real = { quotient: [9, 8] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both reals have decimals", (): void => {
        it("returns true if the real is higher than the other", (): void => {
            const real = { decimal: 3.313714 as RealDecimal }
            const otherNum = { decimal: 2 as RealDecimal }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the real is equal to the other", (): void => {
            const real = { decimal: 3.313714 as RealDecimal }
            const otherNum = { decimal: 3.313714 as RealDecimal }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is lower than the other", (): void => {
            const real = { decimal: 2 as RealDecimal }
            const otherNum = { decimal: 3.313714 as RealDecimal }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one real has a monzo and the other has a quotient", (): void => {
        it("returns true if the real is higher than the other", (): void => {
            const real = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the real is equal to the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is lower than the other", (): void => {
            const real = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one real has a monzo and the other has a decimal", (): void => {
        it("returns true if the real is higher than the other", (): void => {
            const real = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { decimal: 6 as RealDecimal }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the real is equal to the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { decimal: 1.25 as RealDecimal }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is lower than the other", (): void => {
            const real = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { decimal: 1.3 as RealDecimal }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one real has a quotient and the other has a decimal", (): void => {
        it("returns true if the real is higher than the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.2 as RealDecimal }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the real is equal to the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.25 as RealDecimal }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is lower than the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.3 as RealDecimal }

            const actual = realIsHigherOrEqual(real, otherNum)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both reals are direct decimals", (): void => {
        it("returns true if the real is higher than the other", (): void => {
            const decimal = { decimal: 1.25 as RealDecimal }
            const otherDecimal = 1.2 as RealDecimal

            const actual = realIsHigherOrEqual(decimal, otherDecimal)

            expect(actual).toBeTruthy()
        })

        it("returns true if the real is equal to the other", (): void => {
            const decimal = { decimal: 1.25 as RealDecimal }
            const otherDecimal = 1.25 as RealDecimal

            const actual = realIsHigherOrEqual(decimal, otherDecimal)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is lower than the other", (): void => {
            const decimal = { decimal: 1.25 as RealDecimal }
            const otherDecimal = 1.3 as RealDecimal

            const actual = realIsHigherOrEqual(decimal, otherDecimal)

            expect(actual).toBeFalsy()
        })
    })
})

describe("realIsLowerOrEqual", (): void => {
    describe("when both reals have monzos", (): void => {
        it("returns false if the real is higher than the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-3, 2] as Monzo }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is equal to the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the real is lower than the other", (): void => {
            const real = { monzo: [-3, 2] as Monzo }
            const otherNum = { monzo: [-2, 0, 1] as Monzo }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both reals have quotients", (): void => {
        it("returns false if the real is higher than the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [9, 8] as Quotient }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is equal to the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the real is lower than the other", (): void => {
            const real = { quotient: [9, 8] as Quotient }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both reals have decimals", (): void => {
        it("returns false if the real is higher than the other", (): void => {
            const real = { decimal: 3.313714 as RealDecimal }
            const otherNum = { decimal: 2 as RealDecimal }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is equal to the other", (): void => {
            const real = { decimal: 3.313714 as RealDecimal }
            const otherNum = { decimal: 3.313714 as RealDecimal }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the real is lower than the other", (): void => {
            const real = { decimal: 2 as RealDecimal }
            const otherNum = { decimal: 3.313714 as RealDecimal }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one real has a monzo and the other has a quotient", (): void => {
        it("returns false if the real is higher than the other", (): void => {
            const real = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is equal to the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the real is lower than the other", (): void => {
            const real = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { quotient: [5, 4] as Quotient }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one real has a monzo and the other has a decimal", (): void => {
        it("returns false if the real is higher than the other", (): void => {
            const real = { monzo: [0, 0, 0, 1] as Monzo }
            const otherNum = { decimal: 6 as RealDecimal }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is equal to the other", (): void => {
            const real = { monzo: [-2, 0, 1] as Monzo }
            const otherNum = { decimal: 1.25 as RealDecimal }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the real is lower than the other", (): void => {
            const real = { monzo: [4, -1, -1] as Monzo }
            const otherNum = { decimal: 1.3 as RealDecimal }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one real has a quotient and the other has a decimal", (): void => {
        it("returns false if the real is higher than the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.2 as RealDecimal }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is equal to the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.25 as RealDecimal }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })

        it("returns true if the real is lower than the other", (): void => {
            const real = { quotient: [5, 4] as Quotient }
            const otherNum = { decimal: 1.3 as RealDecimal }

            const actual = realIsLowerOrEqual(real, otherNum)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both reals are direct decimals", (): void => {
        it("returns false if the real is higher than the other", (): void => {
            const decimal = { decimal: 1.25 as RealDecimal }
            const otherDecimal = 1.2 as RealDecimal

            const actual = realIsLowerOrEqual(decimal, otherDecimal)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is equal to the other", (): void => {
            const decimal = { decimal: 1.25 as RealDecimal }
            const otherDecimal = 1.25 as RealDecimal

            const actual = realIsLowerOrEqual(decimal, otherDecimal)

            expect(actual).toBeTruthy()
        })

        it("returns true if the real is lower than the other", (): void => {
            const decimal = { decimal: 1.25 as RealDecimal }
            const otherDecimal = 1.3 as RealDecimal

            const actual = realIsLowerOrEqual(decimal, otherDecimal)

            expect(actual).toBeTruthy()
        })
    })
})

