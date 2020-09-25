import { computeSuperPitch, Decimal } from "../../../../src/general"
import { Direction, Ratio } from "../../../../src/general/math"
import { Monzo } from "../../../../src/general/math/rational/monzo"
import { computeIsSubPitch, computeIsUnisonPitch, Pitch } from "../../../../src/general/music"
import { computeIsSuperPitch } from "../../../../src/general/music/pitchDirection"

describe("computeIsSubPitch", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the monzo is sub", (): void => {
            const pitch = { monzo: [-1] as Monzo }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is unison", (): void => {
            const pitch = { monzo: [] as Monzo }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is super", (): void => {
            const pitch = { monzo: [1] as Monzo }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns true if the ratio is sub", (): void => {
            const pitch = { ratio: [1, 3] as Ratio }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is unison", (): void => {
            const pitch = { ratio: [3, 3] as Ratio }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the ratio is super", (): void => {
            const pitch = { ratio: [3, 1] as Ratio }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by decimal", (): void => {
        it("returns true if the decimal is sub", (): void => {
            const pitch = { decimal: 0.9 as Decimal }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the decimal is unison", (): void => {
            const pitch = { decimal: 1 as Decimal }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the decimal is super", (): void => {
            const pitch = { decimal: 1.1 as Decimal }

            const actual = computeIsSubPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeIsSuperPitch", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const pitch = { monzo: [-1] as Monzo }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the monzo is unison", (): void => {
            const pitch = { monzo: [] as Monzo }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is super", (): void => {
            const pitch = { monzo: [1] as Monzo }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("by ratio", (): void => {
        it("returns false if the ratio is sub", (): void => {
            const pitch = { ratio: [1, 3] as Ratio }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the ratio is unison", (): void => {
            const pitch = { ratio: [3, 3] as Ratio }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the ratio is super", (): void => {
            const pitch = { ratio: [3, 1] as Ratio }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("by decimal", (): void => {
        it("returns true if the decimal is super", (): void => {
            const pitch = { decimal: 1.1 as Decimal }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the decimal is unison", (): void => {
            const pitch = { decimal: 1 as Decimal }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the decimal is sub", (): void => {
            const pitch = { decimal: 0.9 as Decimal }

            const actual = computeIsSuperPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeIsUnisonPitch", (): void => {
    describe("by monzo", (): void => {
        it("returns false if the monzo is sub", (): void => {
            const pitch = { monzo: [-1] as Monzo }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the monzo is unison", (): void => {
            const pitch = { monzo: [] as Monzo }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the monzo is super", (): void => {
            const pitch = { monzo: [1] as Monzo }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns false if the ratio is sub", (): void => {
            const pitch = { ratio: [1, 3] as Ratio }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the ratio is unison", (): void => {
            const pitch = { ratio: [3, 3] as Ratio }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is super", (): void => {
            const pitch = { ratio: [3, 1] as Ratio }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("by decimal", (): void => {
        it("returns false if the decimal is super", (): void => {
            const pitch = { decimal: 1.1 as Decimal }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the decimal is unison", (): void => {
            const pitch = { decimal: 1 as Decimal }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the decimal is sub", (): void => {
            const pitch = { decimal: 0.9 as Decimal }

            const actual = computeIsUnisonPitch(pitch)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeSuperPitch", (): void => {
    it("flips the monzo, ratio, cents, and decimal", (): void => {
        const pitch: Pitch<{ direction: Direction.SUB }> = {
            monzo: [-40, 22, 1, 1] as Monzo<{ direction: Direction.SUB }>,
            ratio: [1098337086315, 1099511627776] as Ratio<{ direction: Direction.SUB }>,
            decimal: 0.99893176076 as Decimal<{ direction: Direction.SUB }>,
        }

        const actual = computeSuperPitch(pitch)

        const expected: Pitch<{ direction: Direction.SUPER }> = {
            monzo: [40, -22, -1, -1] as Monzo<{ direction: Direction.SUPER }>,
            ratio: [1099511627776, 1098337086315] as Ratio<{ direction: Direction.SUPER }>,
            decimal: 1.00106938159 as Decimal<{ direction: Direction.SUPER }>,
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when only monzo is provided", (): void => {
        const pitch: Pitch<{ direction: Direction.SUB }> = {
            monzo: [-40, 22, 1, 1] as Monzo<{ direction: Direction.SUB }>,
        }

        const actual: Pitch<{ direction: Direction.SUPER }> = computeSuperPitch(pitch)

        const expected: Pitch<{ direction: Direction.SUPER }> = {
            monzo: [40, -22, -1, -1] as Monzo<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only ratio is provided", (): void => {
        const pitch: Pitch<{ direction: Direction.SUB }> = {
            ratio: [1098337086315, 1099511627776] as Ratio<{ direction: Direction.SUB }>,
        }

        const actual = computeSuperPitch(pitch)

        const expected: Pitch<{ direction: Direction.SUPER }> = {
            ratio: [1099511627776, 1098337086315] as Ratio<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only decimal is provided", (): void => {
        const pitch: Pitch = {
            decimal: 0.99893176076 as Decimal,
        }

        const actual = computeSuperPitch(pitch)

        const expected: Pitch = {
            decimal: 1.00106938159 as Decimal,
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("does not mutate the original pitch", (): void => {
        const pitch: Pitch = {
            decimal: 1.25 as Decimal,
        }

        computeSuperPitch(pitch)

        expect(pitch.decimal).toEqual(1.25 as Decimal)
    })
})
