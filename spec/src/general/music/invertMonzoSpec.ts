import { invertMonzo, Monzo } from "../../../../src/general/music"

describe("invertMonzo", () => {
    it("returns the inverted (negated) version of the monzo", () => {
        const monzo = [4, -3, -1, 1] as Monzo

        const result = invertMonzo(monzo)

        expect(result).toEqual([-4, 3, 1, -1] as Monzo)
    })
})
