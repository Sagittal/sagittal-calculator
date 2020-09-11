import { Monzo } from "../../../../../src/general/math"
import { sumMonzos } from "../../../../../src/general/math/monzo"

describe("sumMonzos", () => {
    it("sums each of the terms of all of the monzos", () => {
        const monzoOne = [3, 2, 1, 0, -1, -5] as Monzo
        const monzoTwo = [0, -2, 4, 7, -3, 6, 1] as Monzo
        const monzoThree = [1, 1, 0, 1, 1] as Monzo

        const actual = sumMonzos(monzoOne, monzoTwo, monzoThree)

        const expected = [4, 1, 5, 8, -3, 1, 1] as Monzo
        expect(actual).toEqual(expected)
    })

    it("trims the result when appropriate", () => {
        const monzoOne = [3, 2, 1, 0, -1, -5] as Monzo
        const monzoTwo = [0, -2, 4, 7, -3, 5] as Monzo

        const actual = sumMonzos(monzoOne, monzoTwo)

        const expected = [3, 0, 5, 7, -4] as Monzo
        expect(actual).toEqual(expected)
    })
})
