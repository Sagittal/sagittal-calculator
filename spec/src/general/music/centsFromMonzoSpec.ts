import { computeCentsFromMonzo, Monzo } from "../../../../src/general"
import { ACCURACY_THRESHOLD } from "../../../../src/general/code"
import { Cents } from "../../../../src/general/music"

describe("computeCentsFromMonzo", () => {
    it("returns the cents of a monzo", () => {
        const monzo = [-1, 2, 0, -2, 1] as Monzo

        const actual = computeCentsFromMonzo(monzo)

        const expected = 17.576131157281500 as Cents
        expect(actual).toBeCloseToTyped(expected, ACCURACY_THRESHOLD)
    })

    it("works for monzos with really big 2 exponents", () => {
        const monzo = [158.5, -100] as Monzo<number>

        const actual = computeCentsFromMonzo(monzo)

        const expected = 4.49991346125848 as Cents
        expect(actual).toBeCloseToTyped(expected, ACCURACY_THRESHOLD)
    })
})
