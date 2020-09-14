import { Cents, Monzo } from "../../../../src/general"
import { computeCentsFromMonzo } from "../../../../src/general/music"

describe("computeCentsFromMonzo", (): void => {
    it("gives the cents value of a monzo", (): void => {
        const monzo = [2, 1, 0, 0, 0, -1] as Monzo  // 12/13

        const actual = computeCentsFromMonzo(monzo)

        const expected = -138.572661 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })
})
