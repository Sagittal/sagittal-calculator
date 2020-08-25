import { Monzo } from "../../../../src/general/math"
import { combineMonzos } from "../../../../src/general/math/combineMonzos"

describe("combineMonzos", () => {
    it("sums each of the terms of all of the monzos", () => {
        const monzoOne = [3, 2, 1, 0, -1, -5] as Monzo
        const monzoTwo = [0, -2, 4, 7, -3, 6, 1] as Monzo
        const monzoThree = [1, 1, 0, 1, 1] as Monzo

        const actual = combineMonzos(monzoOne, monzoTwo, monzoThree)

        const expected = [4, 1, 5, 8, -3, 1, 1] as Monzo
        expect(actual).toEqual(expected)
    })
})
