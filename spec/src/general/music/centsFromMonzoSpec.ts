import { ACCURACY_THRESHOLD } from "../../../../src/general/code"
import { Cents, Monzo } from "../../../../src/general/music"
import { computeCentsFromMonzo } from "../../../../src/general/music/computeCentsFromMonzo"

describe("computeCentsFromMonzo", () => {
    it("returns the cents of a monzo", () => {
        const monzo = [-1, 2, 0, -2, 1] as Monzo

        const actual = computeCentsFromMonzo(monzo)

        const expected = 17.576131157281500 as Cents
        expect(actual).toBeCloseTo(expected, ACCURACY_THRESHOLD)
    })
})
