import { computeCentsFromRatio } from "../../../../src/utilities/comma/centsFromRatio"
import { ACCURACY_THRESHOLD } from "../../../../src/utilities/constants"
import { Ratio } from "../../../../src/utilities/types"

describe("computeCentsFromRatio", () => {
    it("gives the cents value of a ratio", () => {
        const ratio = [3, 2] as Ratio

        const result = computeCentsFromRatio(ratio)

        expect(result).toBeCloseTo(701.955001, ACCURACY_THRESHOLD)
    })
})
