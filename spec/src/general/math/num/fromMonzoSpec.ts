import { computeNumFromMonzo, Num } from "../../../../../src/general/math/num"
import { Monzo } from "../../../../../src/general/math/num/monzo"
import { Integer, IntegerMonzo, Ratio } from "../../../../../src/general/math/rational/num"
import { RationalMonzo } from "../../../../../src/general/math/rational/num/monzo"

describe("computeNumFromMonzo", (): void => {
    it("creates a num from a monzo", (): void => {
        const monzo = [0, 0, -1.1, 1] as Monzo

        const actual = computeNumFromMonzo(monzo)

        const expected: Num = { monzo: [0, 0, -1.1, 1] as Monzo }
        expect(actual).toEqual(expected)
    })

    it("works for rational monzos", (): void => {
        const rationalMonzo = [0, 0, -1, 1] as RationalMonzo

        const actual = computeNumFromMonzo(rationalMonzo)

        const expected: Ratio = { monzo: [0, 0, -1, 1] as RationalMonzo }
        expect(actual).toEqual(expected)
    })

    it("works for integer monzos", (): void => {
        const integerMonzo = [0, 0, 1, 1] as IntegerMonzo

        const actual = computeNumFromMonzo(integerMonzo)

        const expected: Integer = { monzo: [0, 0, 1, 1] as IntegerMonzo }
        expect(actual).toEqual(expected)
    })
})
