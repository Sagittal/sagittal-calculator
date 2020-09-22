import { Monzo, Step } from "../../../../../../src/general"
import { computeMonzoMapping } from "../../../../../../src/general/math/rational/monzo/monzoMapping"
import { Val } from "../../../../../../src/general/math/rational/monzo/types"

describe("computeMonzoMapping", (): void => {
    it("consistent?", (): void => {
        const val: Val = [8539, 13534, 19827, 23972, 29540, 31598] as Val
        const monzo = [5, -3, 1, -1, -1, 1] as Monzo

        const actual = computeMonzoMapping(monzo, val)

        const expected = 6 as Step
        expect(actual).toBe(expected)
    })
})
