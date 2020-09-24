import {
    computeIsSubNum,
    computeIsSuperNum,
    computeIsUnisonNum,
    computeSuperNum,
    Decimal,
    Direction,
} from "../../../../src/general/math"
import { Monzo } from "../../../../src/general/math/rational/monzo"
import { Ratio } from "../../../../src/general/math/rational/ratio"
import { Num } from "../../../../src/general/math/types"

describe("computeIsSubNum", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the monzo is sub", (): void => {
            const num = { monzo: [-1] as Monzo }

            const actual = computeIsSubNum(num)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is unison", (): void => {
            const num = { monzo: [] as Monzo }

            const actual = computeIsSubNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is super", (): void => {
            const num = { monzo: [1] as Monzo }

            const actual = computeIsSubNum(num)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns true if the ratio is sub", (): void => {
            const num = { ratio: [1, 3] as Ratio }

            const actual = computeIsSubNum(num)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is unison", (): void => {
            const num = { ratio: [3, 3] as Ratio }

            const actual = computeIsSubNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns false if the ratio is super", (): void => {
            const num = { ratio: [3, 1] as Ratio }

            const actual = computeIsSubNum(num)

            expect(actual).toBeFalsy()
        })
    })

    describe("by decimal", (): void => {
        it("returns true if the num is sub", (): void => {
            const num = { decimal: 0.17 as Decimal }

            const actual = computeIsSubNum(num)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is unison", (): void => {
            const num = { decimal: 1 as Decimal }

            const actual = computeIsSubNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is super", (): void => {
            const num = { decimal: 7.1 as Decimal }

            const actual = computeIsSubNum(num)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeIsSuperNum", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const num = { monzo: [-1] as Monzo }

            const actual = computeIsSuperNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is unison", (): void => {
            const num = { monzo: [] as Monzo }

            const actual = computeIsSuperNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is super", (): void => {
            const num = { monzo: [1] as Monzo }

            const actual = computeIsSuperNum(num)

            expect(actual).toBeTruthy()
        })
    })

    describe("by ratio", (): void => {
        it("returns false if the ratio is sub", (): void => {
            const num = { ratio: [1, 3] as Ratio }

            const actual = computeIsSuperNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns false if the ratio is unison", (): void => {
            const num = { ratio: [3, 3] as Ratio }

            const actual = computeIsSuperNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns true if the ratio is super", (): void => {
            const num = { ratio: [3, 1] as Ratio }

            const actual = computeIsSuperNum(num)

            expect(actual).toBeTruthy()
        })
    })

    describe("by decimal", (): void => {
        it("returns false if the num is sub", (): void => {
            const num = { decimal: 0.17 as Decimal }

            const actual = computeIsSuperNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns false if the num is unison", (): void => {
            const num = { decimal: 1 as Decimal }

            const actual = computeIsSuperNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is super", (): void => {
            const num = { decimal: 7.1 as Decimal }

            const actual = computeIsSuperNum(num)

            expect(actual).toBeTruthy()
        })
    })
})

describe("computeIsUnisonNumber", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const num = { monzo: [-1] as Monzo }

            const actual = computeIsUnisonNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is unison", (): void => {
            const num = { monzo: [] as Monzo }

            const actual = computeIsUnisonNum(num)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is super", (): void => {
            const num = { monzo: [1] as Monzo }

            const actual = computeIsUnisonNum(num)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns false if the ratio is sub", (): void => {
            const num = { ratio: [1, 3] as Ratio }

            const actual = computeIsUnisonNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns true if the ratio is unison", (): void => {
            const num = { ratio: [3, 3] as Ratio }

            const actual = computeIsUnisonNum(num)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is super", (): void => {
            const num = { ratio: [3, 1] as Ratio }

            const actual = computeIsUnisonNum(num)

            expect(actual).toBeFalsy()
        })
    })

    describe("by decimal", (): void => {
        it("returns false if the num is sub", (): void => {
            const num = { decimal: 0.17 as Decimal }

            const actual = computeIsUnisonNum(num)

            expect(actual).toBeFalsy()
        })

        it("returns true if the num is unison", (): void => {
            const num = { decimal: 1 as Decimal }

            const actual = computeIsUnisonNum(num)

            expect(actual).toBeTruthy()
        })

        it("returns false if the num is super", (): void => {
            const num = { decimal: 7.1 as Decimal }

            const actual = computeIsUnisonNum(num)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeSuperNum", (): void => {
    it("flips the monzo, ratio, number", (): void => {
        const num: Num<{ direction: Direction.SUB }> = {
            monzo: [-40, 22, 1, 1] as Monzo<{ direction: Direction.SUB }>,
            ratio: [1098337086315, 1099511627776] as Ratio<{ direction: Direction.SUB }>,
            decimal: 0.2 as Decimal<{ direction: Direction.SUB }>,
        }

        const actual = computeSuperNum(num)

        const expected: Num<{ direction: Direction.SUPER }> = {
            monzo: [40, -22, -1, -1] as Monzo<{ direction: Direction.SUPER }>,
            ratio: [1099511627776, 1098337086315] as Ratio<{ direction: Direction.SUPER }>,
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

    it("works when only ratio is provided", (): void => {
        const num: Num<{ direction: Direction.SUB }> = {
            ratio: [1098337086315, 1099511627776] as Ratio<{ direction: Direction.SUB }>,
        }

        const actual = computeSuperNum(num)

        const expected: Num<{ direction: Direction.SUPER }> = {
            ratio: [1099511627776, 1098337086315] as Ratio<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only number are provided", (): void => {
        const num: Num<{ direction: Direction.SUB }> = {
            decimal: 0.2 as Decimal<{ potentiallyIrrational: true, direction: Direction.SUB }>,
        }

        const actual = computeSuperNum(num)

        const expected: Num<{ direction: Direction.SUPER }> = {
            decimal: 5 as Decimal<{ potentiallyIrrational: true, direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })
})
