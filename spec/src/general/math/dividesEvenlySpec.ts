import {dividesEvenly} from "../../../../src/general/math"

describe("dividesEvenly", (): void => {
    it("returns the whole version of the type passed to it", (): void => {
        const numeral = 5
        const modulus = 2

        const actual = dividesEvenly(numeral, modulus)

        expect(actual).toBeFalsy()
    })
})
