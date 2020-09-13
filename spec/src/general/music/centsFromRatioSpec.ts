import { Cents, Ratio } from "../../../../src/general"
import { computeCentsFromRatio } from "../../../../src/general/music"

describe("computeCentsFromRatio", (): void => {
    it("gives the cents value of a ratio", (): void => {
        const ratio = [3, 2] as Ratio

        const actual = computeCentsFromRatio(ratio)

        const expected = 701.955001 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })
})
