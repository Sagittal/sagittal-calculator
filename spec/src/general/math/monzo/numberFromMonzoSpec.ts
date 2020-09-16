import { Monzo } from "../../../../../src/general/math/monzo"
import { computeNumberFromMonzo } from "../../../../../src/general/math/monzo/numberFromMonzo"

describe("computeNumberFromMonzo", (): void => {
    it("returns the numeric value of the given monzo", (): void => {
        // TODO: shite there is a difference between integer and "noninteger"-formerly-known-as-"irrational"
        //  because that's referring to the EXPONENTS in the monzo, the TERMS, not the value it represents
        //  and in the case of a ratio, if you said it was noninteger, you'd just be saying the denominator isn't 1
        //  you really should have a separate numeric type parameter that's truly integer/noninteger
        //  and bring back the rational/irrational bit, because otherwise it's a lie, what you're passing down as T
        //  from the Monzo<T> to the Numeric<T>
        //  and then you can go in integerFromMonzo and I udnno... nevermind, I guess I was thinking have a test for
        //  isIntegerMonzo that's separate and available that's how it checks whether to error or not

        const monzo = [-1, -1, 0, 1] as Monzo   // 7/6

        const actual = computeNumberFromMonzo(monzo)

        const expected = 1.166667
        expect(actual).toBeCloseToTyped(expected)
    })
})
