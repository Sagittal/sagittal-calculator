import { Monzo } from "../../../../../src/general/math/monzo"
import { computeNumberFromMonzo } from "../../../../../src/general/math/monzo/numberFromMonzo"

describe("computeNumberFromMonzo", (): void => {
    it("returns the numeric value of the given monzo", (): void => {
        const monzo = [-1, -1, 0, 1] as Monzo   // 7/6

        const actual = computeNumberFromMonzo(monzo)

        const expected = 1.166667
        expect(actual).toBeCloseToTyped(expected)
    })
})
