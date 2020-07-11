import { invertMonzo } from "../../../../src/utilities/comma/invertMonzo"
import { Monzo } from "../../../../src/utilities/comma/types"

describe("invertMonzo", () => {
    it("returns the inverted (negated) version of the monzo", () => {
        const monzo = [4, -3, -1, 1] as Monzo

        const result = invertMonzo(monzo)

        expect(result).toEqual([-4, 3, 1, -1] as Monzo)
    })
})
