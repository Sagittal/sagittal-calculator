import { computeNumberFromMonzo, Monzo } from "../../../../../../src/general/math/rational/monzo"

describe("computeNumberFromMonzo", (): void => {
    it("returns the numeric value of the given monzo", (): void => {
        const monzo = [-1, -1, 0, 1] as Monzo   // 7/6

        const actual = computeNumberFromMonzo(monzo)

        const expected = 1.166667
        expect(actual).toBeCloseToTyped(expected)
    })
})
