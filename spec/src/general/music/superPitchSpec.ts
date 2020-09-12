import { Direction } from "../../../../src/general"
import { Ratio } from "../../../../src/general/math"
import { Monzo } from "../../../../src/general/math/monzo"
import { Cents, computeSuperPitch, Pitch } from "../../../../src/general/music"

describe("computeSuperPitch", () => {
    it("flips the monzo, ratio, cents", () => {
        const pitch: Pitch<{ direction: Direction.SUB }> = {
            monzo: [-40, 22, 1, 1] as Monzo<{ direction: Direction.SUB }>,
            ratio: [1098337086315, 1099511627776] as Ratio<{ direction: Direction.SUB }>,
            cents: -1.850 as Cents,
        }

        const actual = computeSuperPitch(pitch)

        const expected: Pitch<{ direction: Direction.SUPER }> = {
            monzo: [40, -22, -1, -1] as Monzo<{ direction: Direction.SUPER }>,
            ratio: [1099511627776, 1098337086315] as Ratio<{ direction: Direction.SUPER }>,
            cents: 1.850 as Cents,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only monzo is provided", () => {
        const pitch: Pitch<{ direction: Direction.SUB }> = {
            monzo: [-40, 22, 1, 1] as Monzo<{ direction: Direction.SUB }>,
        }

        const actual: Pitch<{ direction: Direction.SUPER }> = computeSuperPitch(pitch)

        const expected: Pitch<{ direction: Direction.SUPER }> = {
            monzo: [40, -22, -1, -1] as Monzo<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only ratio is provided", () => {
        const pitch: Pitch<{ direction: Direction.SUB }> = {
            ratio: [1098337086315, 1099511627776] as Ratio<{ direction: Direction.SUB }>,
        }

        const actual = computeSuperPitch(pitch)

        const expected: Pitch<{ direction: Direction.SUPER }> = {
            ratio: [1099511627776, 1098337086315] as Ratio<{ direction: Direction.SUPER }>,
        }
        expect(actual).toEqual(expected)
    })

    it("works when only cents are provided", () => {
        const pitch: Pitch<{ direction: Direction.SUB }> = {
            cents: -1.850 as Cents,
        }

        const actual = computeSuperPitch(pitch)

        const expected: Pitch<{ direction: Direction.SUPER }> = {
            cents: 1.850 as Cents,
        }
        expect(actual).toEqual(expected)
    })
})
