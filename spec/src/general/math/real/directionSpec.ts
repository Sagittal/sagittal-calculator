import {
    computeSuperReal,
    Direction,
    isSubReal,
    isSuperReal,
    isUnisonReal,
    Monzo,
    Quotient,
    Real,
    RealDecimal,
} from "../../../../../src/general/math/real"

describe("isSubReal", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the monzo is sub", (): void => {
            const real = { monzo: [-1] as Monzo }

            const actual = isSubReal(real)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is unison", (): void => {
            const real = { monzo: [] as Monzo }

            const actual = isSubReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is super", (): void => {
            const real = { monzo: [1] as Monzo }

            const actual = isSubReal(real)

            expect(actual).toBeFalsy()
        })
    })

    describe("by quotient", (): void => {
        it("returns true if the quotient is sub", (): void => {
            const real = { quotient: [1, 3] as Quotient }

            const actual = isSubReal(real)

            expect(actual).toBeTruthy()
        })

        it("returns false if the quotient is unison", (): void => {
            const real = { quotient: [3, 3] as Quotient }

            const actual = isSubReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns false if the quotient is super", (): void => {
            const real = { quotient: [3, 1] as Quotient }

            const actual = isSubReal(real)

            expect(actual).toBeFalsy()
        })
    })

    describe("by decimal", (): void => {
        it("returns true if the real is sub", (): void => {
            const real = { decimal: 0.17 as RealDecimal }

            const actual = isSubReal(real)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is unison", (): void => {
            const real = { decimal: 1 as RealDecimal }

            const actual = isSubReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is super", (): void => {
            const real = { decimal: 7.1 as RealDecimal }

            const actual = isSubReal(real)

            expect(actual).toBeFalsy()
        })
    })

    describe("by direct decimal", (): void => {
        it("returns true if the real is sub", (): void => {
            const decimal = 0.17 as RealDecimal

            const actual = isSubReal(decimal)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is unison", (): void => {
            const decimal = 1 as RealDecimal

            const actual = isSubReal(decimal)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is super", (): void => {
            const decimal = 7.1 as RealDecimal

            const actual = isSubReal(decimal)

            expect(actual).toBeFalsy()
        })
    })
})

describe("isSuperReal", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const real = { monzo: [-1] as Monzo }

            const actual = isSuperReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is unison", (): void => {
            const real = { monzo: [] as Monzo }

            const actual = isSuperReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is super", (): void => {
            const real = { monzo: [1] as Monzo }

            const actual = isSuperReal(real)

            expect(actual).toBeTruthy()
        })
    })

    describe("by quotient", (): void => {
        it("returns false if the quotient is sub", (): void => {
            const real = { quotient: [1, 3] as Quotient }

            const actual = isSuperReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns false if the quotient is unison", (): void => {
            const real = { quotient: [3, 3] as Quotient }

            const actual = isSuperReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns true if the quotient is super", (): void => {
            const real = { quotient: [3, 1] as Quotient }

            const actual = isSuperReal(real)

            expect(actual).toBeTruthy()
        })
    })

    describe("by decimal", (): void => {
        it("returns false if the real is sub", (): void => {
            const real = { decimal: 0.17 as RealDecimal }

            const actual = isSuperReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is unison", (): void => {
            const real = { decimal: 1 as RealDecimal }

            const actual = isSuperReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is super", (): void => {
            const real = { decimal: 7.1 as RealDecimal }

            const actual = isSuperReal(real)

            expect(actual).toBeTruthy()
        })
    })

    describe("by direct decimal", (): void => {
        it("returns false if the real is sub", (): void => {
            const decimal = 0.17 as RealDecimal

            const actual = isSuperReal(decimal)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is unison", (): void => {
            const decimal = 1 as RealDecimal

            const actual = isSuperReal(decimal)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is super", (): void => {
            const decimal = 7.1 as RealDecimal

            const actual = isSuperReal(decimal)

            expect(actual).toBeTruthy()
        })
    })
})

describe("isUnisonNumber", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const real = { monzo: [-1] as Monzo }

            const actual = isUnisonReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is unison", (): void => {
            const real = { monzo: [] as Monzo }

            const actual = isUnisonReal(real)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is super", (): void => {
            const real = { monzo: [1] as Monzo }

            const actual = isUnisonReal(real)

            expect(actual).toBeFalsy()
        })
    })

    describe("by quotient", (): void => {
        it("returns false if the quotient is sub", (): void => {
            const real = { quotient: [1, 3] as Quotient }

            const actual = isUnisonReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns true if the quotient is unison", (): void => {
            const real = { quotient: [3, 3] as Quotient }

            const actual = isUnisonReal(real)

            expect(actual).toBeTruthy()
        })

        it("returns false if the quotient is super", (): void => {
            const real = { quotient: [3, 1] as Quotient }

            const actual = isUnisonReal(real)

            expect(actual).toBeFalsy()
        })
    })

    describe("by decimal", (): void => {
        it("returns false if the real is sub", (): void => {
            const real = { decimal: 0.17 as RealDecimal }

            const actual = isUnisonReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is unison", (): void => {
            const real = { decimal: 1 as RealDecimal }

            const actual = isUnisonReal(real)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is super", (): void => {
            const real = { decimal: 7.1 as RealDecimal }

            const actual = isUnisonReal(real)

            expect(actual).toBeFalsy()
        })
    })

    describe("by direct decimal", (): void => {
        it("returns false if the real is sub", (): void => {
            const decimal = 0.17 as RealDecimal

            const actual = isUnisonReal(decimal)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is unison", (): void => {
            const decimal = 1 as RealDecimal

            const actual = isUnisonReal(decimal)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is super", (): void => {
            const decimal = 7.1 as RealDecimal

            const actual = isUnisonReal(decimal)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeSuperReal", (): void => {
    it("flips the monzo, quotient, and decimal", (): void => {
        const real: Real<{ direction: Direction.SUB }> = {
            monzo: [-40, 22, 1, 1] as Monzo<{ direction: Direction.SUB }>,
            quotient: [1098337086315, 1099511627776] as Quotient<{ direction: Direction.SUB }>,
            decimal: 0.2 as RealDecimal<{ direction: Direction.SUB }>,
        }

        const actual = computeSuperReal(real)

        const expected: Real<{ direction: Direction.SUPER }> = {
            monzo: [40, -22, -1, -1] as Monzo<{ direction: Direction.SUPER }>,
            quotient: [1099511627776, 1098337086315] as Quotient<{ direction: Direction.SUPER }>,
            decimal: 5 as RealDecimal<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only a monzo is contained", (): void => {
        const real: Real<{ direction: Direction.SUB }> = {
            monzo: [-40, 22, 1, 1] as Monzo<{ direction: Direction.SUB }>,
        }

        const actual: Real<{ direction: Direction.SUPER }> = computeSuperReal(real)

        const expected: Real<{ direction: Direction.SUPER }> = {
            monzo: [40, -22, -1, -1] as Monzo<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only a quotient is contained", (): void => {
        const real: Real<{ direction: Direction.SUB }> = {
            quotient: [1098337086315, 1099511627776] as Quotient<{ direction: Direction.SUB }>,
        }

        const actual = computeSuperReal(real)

        const expected: Real<{ direction: Direction.SUPER }> = {
            quotient: [1099511627776, 1098337086315] as Quotient<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only a decimal is contained", (): void => {
        const real: Real<{ direction: Direction.SUB }> = {
            decimal: 0.2 as RealDecimal<{ direction: Direction.SUB }>,
        }

        const actual = computeSuperReal(real)

        const expected: Real<{ direction: Direction.SUPER }> = {
            decimal: 5 as RealDecimal<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works for direct decimals", (): void => {
        const decimal = 0.2

        const actual = computeSuperReal(decimal)

        const expected = 5
        expect(actual).toEqual(expected)
    })
})
