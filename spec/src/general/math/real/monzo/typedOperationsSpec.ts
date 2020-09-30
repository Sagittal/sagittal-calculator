import { Monzo } from "../../../../../../src/general/math"
import { computeMonzoSum } from "../../../../../../src/general/math/real/monzo"

describe("computeMonzoSum", (): void => {
    it("sums each of the terms of all of the monzos", (): void => {
        const monzoA = [3, 2, 1, 0, -1, -5] as Monzo
        const monzoB = [0, -2, 4, 7, -3, 6, 1] as Monzo
        const monzoC = [1, 1, 0, 1, 1] as Monzo

        const actual = computeMonzoSum(monzoA, monzoB, monzoC)

        const expected = [4, 1, 5, 8, -3, 1, 1] as Monzo
        expect(actual).toEqual(expected)
    })

    it("trims the result when appropriate", (): void => {
        const monzoA = [3, 2, 1, 0, -1, -5] as Monzo
        const monzoB = [0, -2, 4, 7, -3, 5] as Monzo

        const actual = computeMonzoSum(monzoA, monzoB)

        const expected = [3, 0, 5, 7, -4] as Monzo
        expect(actual).toEqual(expected)
    })
})
