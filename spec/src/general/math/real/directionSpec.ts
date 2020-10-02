import {
    computeSuperReal,
    Direction,
    isSubReal,
    isSuperReal,
    isUnisonReal,
    Real,
    RealDecimal,
    RealMonzo,
    RealQuotient,
} from "../../../../../src/general/math/real"

describe("isSubReal", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the monzo is sub", (): void => {
            const real = { monzo: [-1] as RealMonzo }

            const actual = isSubReal(real)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is unison", (): void => {
            const real = { monzo: [] as RealMonzo }

            const actual = isSubReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is super", (): void => {
            const real = { monzo: [1] as RealMonzo }

            const actual = isSubReal(real)

            expect(actual).toBeFalsy()
        })
    })

    describe("by quotient", (): void => {
        it("returns true if the quotient is sub", (): void => {
            const real = { quotient: [1, 3] as RealQuotient }

            const actual = isSubReal(real)

            expect(actual).toBeTruthy()
        })

        it("returns false if the quotient is unison", (): void => {
            const real = { quotient: [3, 3] as RealQuotient }

            const actual = isSubReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns false if the quotient is super", (): void => {
            const real = { quotient: [3, 1] as RealQuotient }

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
            const realDecimal = 0.17 as RealDecimal

            const actual = isSubReal(realDecimal)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is unison", (): void => {
            const realDecimal = 1 as RealDecimal

            const actual = isSubReal(realDecimal)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is super", (): void => {
            const realDecimal = 7.1 as RealDecimal

            const actual = isSubReal(realDecimal)

            expect(actual).toBeFalsy()
        })
    })
})

describe("isSuperReal", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const real = { monzo: [-1] as RealMonzo }

            const actual = isSuperReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is unison", (): void => {
            const real = { monzo: [] as RealMonzo }

            const actual = isSuperReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is super", (): void => {
            const real = { monzo: [1] as RealMonzo }

            const actual = isSuperReal(real)

            expect(actual).toBeTruthy()
        })
    })

    describe("by quotient", (): void => {
        it("returns false if the quotient is sub", (): void => {
            const real = { quotient: [1, 3] as RealQuotient }

            const actual = isSuperReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns false if the quotient is unison", (): void => {
            const real = { quotient: [3, 3] as RealQuotient }

            const actual = isSuperReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns true if the quotient is super", (): void => {
            const real = { quotient: [3, 1] as RealQuotient }

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
            const realDecimal = 0.17 as RealDecimal

            const actual = isSuperReal(realDecimal)

            expect(actual).toBeFalsy()
        })

        it("returns false if the real is unison", (): void => {
            const realDecimal = 1 as RealDecimal

            const actual = isSuperReal(realDecimal)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is super", (): void => {
            const realDecimal = 7.1 as RealDecimal

            const actual = isSuperReal(realDecimal)

            expect(actual).toBeTruthy()
        })
    })
})

describe("isUnisonNumber", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const real = { monzo: [-1] as RealMonzo }

            const actual = isUnisonReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is unison", (): void => {
            const real = { monzo: [] as RealMonzo }

            const actual = isUnisonReal(real)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is super", (): void => {
            const real = { monzo: [1] as RealMonzo }

            const actual = isUnisonReal(real)

            expect(actual).toBeFalsy()
        })
    })

    describe("by quotient", (): void => {
        it("returns false if the quotient is sub", (): void => {
            const real = { quotient: [1, 3] as RealQuotient }

            const actual = isUnisonReal(real)

            expect(actual).toBeFalsy()
        })

        it("returns true if the quotient is unison", (): void => {
            const real = { quotient: [3, 3] as RealQuotient }

            const actual = isUnisonReal(real)

            expect(actual).toBeTruthy()
        })

        it("returns false if the quotient is super", (): void => {
            const real = { quotient: [3, 1] as RealQuotient }

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
            const realDecimal = 0.17 as RealDecimal

            const actual = isUnisonReal(realDecimal)

            expect(actual).toBeFalsy()
        })

        it("returns true if the real is unison", (): void => {
            const realDecimal = 1 as RealDecimal

            const actual = isUnisonReal(realDecimal)

            expect(actual).toBeTruthy()
        })

        it("returns false if the real is super", (): void => {
            const realDecimal = 7.1 as RealDecimal

            const actual = isUnisonReal(realDecimal)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeSuperReal", (): void => {
    it("flips the monzo, quotient, and decimal", (): void => {
        const real: Real<{ direction: Direction.SUB }> = {
            monzo: [-40, 22, 1, 1] as RealMonzo<{ direction: Direction.SUB }>,
            quotient: [1098337086315, 1099511627776] as RealQuotient<{ direction: Direction.SUB }>,
            decimal: 0.2 as RealDecimal<{ direction: Direction.SUB }>,
        }

        const actual = computeSuperReal(real)

        const expected: Real<{ direction: Direction.SUPER }> = {
            monzo: [40, -22, -1, -1] as RealMonzo<{ direction: Direction.SUPER }>,
            quotient: [1099511627776, 1098337086315] as RealQuotient<{ direction: Direction.SUPER }>,
            decimal: 5 as RealDecimal<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only a monzo is contained", (): void => {
        const real: Real<{ direction: Direction.SUB }> = {
            monzo: [-40, 22, 1, 1] as RealMonzo<{ direction: Direction.SUB }>,
        }

        const actual: Real<{ direction: Direction.SUPER }> = computeSuperReal(real)

        const expected: Real<{ direction: Direction.SUPER }> = {
            monzo: [40, -22, -1, -1] as RealMonzo<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only a quotient is contained", (): void => {
        const real: Real<{ direction: Direction.SUB }> = {
            quotient: [1098337086315, 1099511627776] as RealQuotient<{ direction: Direction.SUB }>,
        }

        const actual = computeSuperReal(real)

        const expected: Real<{ direction: Direction.SUPER }> = {
            quotient: [1099511627776, 1098337086315] as RealQuotient<{ direction: Direction.SUPER }>,
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
        const realDecimal = 0.2

        const actual = computeSuperReal(realDecimal)

        const expected = 5
        expect(actual).toEqual(expected)
    })
})
