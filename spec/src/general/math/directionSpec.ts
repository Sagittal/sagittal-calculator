import {
    computeIsSubNumber,
    computeIsSuperNumber,
    computeIsUnisonNumber,
    computeSuperNumber,
    Direction, Numeric,
} from "../../../../src/general/math"
import { Monzo } from "../../../../src/general/math/rational/monzo"
import { Ratio } from "../../../../src/general/math/rational/ratio"
import { NumericType } from "../../../../src/general/math/types"

describe("computeIsSubNumber", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the monzo is sub", (): void => {
            const numericType = { monzo: [-1] as Monzo }

            const actual = computeIsSubNumber(numericType)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is unison", (): void => {
            const numericType = { monzo: [] as Monzo }

            const actual = computeIsSubNumber(numericType)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is super", (): void => {
            const numericType = { monzo: [1] as Monzo }

            const actual = computeIsSubNumber(numericType)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns true if the ratio is sub", (): void => {
            const numericType = { ratio: [1, 3] as Ratio }

            const actual = computeIsSubNumber(numericType)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is unison", (): void => {
            const numericType = { ratio: [3, 3] as Ratio }

            const actual = computeIsSubNumber(numericType)

            expect(actual).toBeFalsy()
        })

        it("returns false if the ratio is super", (): void => {
            const numericType = { ratio: [3, 1] as Ratio }

            const actual = computeIsSubNumber(numericType)

            expect(actual).toBeFalsy()
        })
    })

    describe("by number", (): void => {
        it("returns true if the number is sub", (): void => {
            const numericType = { number: 0.17 as Numeric<{ irrational: true }> }

            const actual = computeIsSubNumber(numericType)

            expect(actual).toBeTruthy()
        })

        it("returns false if the number is unison", (): void => {
            const numericType = { number: 1 as Numeric<{ irrational: true }> }

            const actual = computeIsSubNumber(numericType)

            expect(actual).toBeFalsy()
        })

        it("returns false if the number is super", (): void => {
            const numericType = { number: 7.1 as Numeric<{ irrational: true }> }

            const actual = computeIsSubNumber(numericType)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeIsSuperNumber", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const numericType = { monzo: [-1] as Monzo }

            const actual = computeIsSuperNumber(numericType)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is unison", (): void => {
            const numericType = { monzo: [] as Monzo }

            const actual = computeIsSuperNumber(numericType)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is super", (): void => {
            const numericType = { monzo: [1] as Monzo }

            const actual = computeIsSuperNumber(numericType)

            expect(actual).toBeTruthy()
        })
    })

    describe("by ratio", (): void => {
        it("returns false if the ratio is sub", (): void => {
            const numericType = { ratio: [1, 3] as Ratio }

            const actual = computeIsSuperNumber(numericType)

            expect(actual).toBeFalsy()
        })

        it("returns false if the ratio is unison", (): void => {
            const numericType = { ratio: [3, 3] as Ratio }

            const actual = computeIsSuperNumber(numericType)

            expect(actual).toBeFalsy()
        })

        it("returns true if the ratio is super", (): void => {
            const numericType = { ratio: [3, 1] as Ratio }

            const actual = computeIsSuperNumber(numericType)

            expect(actual).toBeTruthy()
        })
    })

    describe("by number", (): void => {
        it("returns false if the number is sub", (): void => {
            const numericType = { number: 0.17 as Numeric<{ irrational: true }> }

            const actual = computeIsSuperNumber(numericType)

            expect(actual).toBeFalsy()
        })

        it("returns false if the number is unison", (): void => {
            const numericType = { number: 1 as Numeric<{ irrational: true }> }

            const actual = computeIsSuperNumber(numericType)

            expect(actual).toBeFalsy()
        })

        it("returns true if the number is super", (): void => {
            const numericType = { number: 7.1 as Numeric<{ irrational: true }> }

            const actual = computeIsSuperNumber(numericType)

            expect(actual).toBeTruthy()
        })
    })
})

describe("computeIsUnisonNumber", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const numericType = { monzo: [-1] as Monzo }

            const actual = computeIsUnisonNumber(numericType)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is unison", (): void => {
            const numericType = { monzo: [] as Monzo }

            const actual = computeIsUnisonNumber(numericType)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is super", (): void => {
            const numericType = { monzo: [1] as Monzo }

            const actual = computeIsUnisonNumber(numericType)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns false if the ratio is sub", (): void => {
            const numericType = { ratio: [1, 3] as Ratio }

            const actual = computeIsUnisonNumber(numericType)

            expect(actual).toBeFalsy()
        })

        it("returns true if the ratio is unison", (): void => {
            const numericType = { ratio: [3, 3] as Ratio }

            const actual = computeIsUnisonNumber(numericType)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is super", (): void => {
            const numericType = { ratio: [3, 1] as Ratio }

            const actual = computeIsUnisonNumber(numericType)

            expect(actual).toBeFalsy()
        })
    })

    describe("by number", (): void => {
        it("returns false if the number is sub", (): void => {
            const numericType = { number: 0.17 as Numeric<{ irrational: true }> }

            const actual = computeIsUnisonNumber(numericType)

            expect(actual).toBeFalsy()
        })

        it("returns true if the number is unison", (): void => {
            const numericType = { number: 1 as Numeric<{ irrational: true }> }

            const actual = computeIsUnisonNumber(numericType)

            expect(actual).toBeTruthy()
        })

        it("returns false if the number is super", (): void => {
            const numericType = { number: 7.1 as Numeric<{ irrational: true }> }

            const actual = computeIsUnisonNumber(numericType)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeSuperNumber", (): void => {
    it("flips the monzo, ratio, number", (): void => {
        const numericType: NumericType<{ direction: Direction.SUB }> = {
            monzo: [-40, 22, 1, 1] as Monzo<{ direction: Direction.SUB }>,
            ratio: [1098337086315, 1099511627776] as Ratio<{ direction: Direction.SUB }>,
            number: 0.2 as Numeric<{ direction: Direction.SUB }>,
        }

        const actual = computeSuperNumber(numericType)

        const expected: NumericType<{ direction: Direction.SUPER }> = {
            monzo: [40, -22, -1, -1] as Monzo<{ direction: Direction.SUPER }>,
            ratio: [1099511627776, 1098337086315] as Ratio<{ direction: Direction.SUPER }>,
            number: 5 as Numeric<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only monzo is provided", (): void => {
        const numericType: NumericType<{ direction: Direction.SUB }> = {
            monzo: [-40, 22, 1, 1] as Monzo<{ direction: Direction.SUB }>,
        }

        const actual: NumericType<{ direction: Direction.SUPER }> = computeSuperNumber(numericType)

        const expected: NumericType<{ direction: Direction.SUPER }> = {
            monzo: [40, -22, -1, -1] as Monzo<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only ratio is provided", (): void => {
        const numericType: NumericType<{ direction: Direction.SUB }> = {
            ratio: [1098337086315, 1099511627776] as Ratio<{ direction: Direction.SUB }>,
        }

        const actual = computeSuperNumber(numericType)

        const expected: NumericType<{ direction: Direction.SUPER }> = {
            ratio: [1099511627776, 1098337086315] as Ratio<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only number are provided", (): void => {
        const numericType: NumericType<{ direction: Direction.SUB }> = {
            number: 0.2 as Numeric<{ irrational: true, direction: Direction.SUB}>,
        }

        const actual = computeSuperNumber(numericType)

        const expected: NumericType<{ direction: Direction.SUPER }> = {
            number: 5 as Numeric<{ irrational: true, direction: Direction.SUPER}>,
        }
        expect(actual).toEqual(expected)
    })
})
