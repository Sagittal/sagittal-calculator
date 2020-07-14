import { Ratio } from "../../../../src/general"
import { ACCURACY_THRESHOLD } from "../../../../src/general/code/constants"
import { computeCentsFromRatio } from "../../../../src/general/music/centsFromRatio"

describe("computeCentsFromRatio", () => {
    it("gives the cents value of a ratio", () => {
        const ratio = [3, 2] as Ratio

        const result = computeCentsFromRatio(ratio)

        expect(result).toBeCloseTo(701.955001, ACCURACY_THRESHOLD)
    })
})
