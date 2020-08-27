import { Cents, Ratio } from "../../../../src/general"
import { ACCURACY_THRESHOLD } from "../../../../src/general/code"
import { computeCentsFromRatio } from "../../../../src/general/music"

describe("computeCentsFromRatio", () => {
    it("gives the cents value of a ratio", () => {
        const ratio = [3, 2] as Ratio

        const actual = computeCentsFromRatio(ratio)

        const expected = 701.955001 as Cents
        expect(actual).toBeCloseToTyped(expected, ACCURACY_THRESHOLD)
    })
})
