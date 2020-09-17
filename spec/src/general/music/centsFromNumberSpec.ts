import { Cents, computeCentsFromNumber } from "../../../../src/general/music"

describe("computeCentsFromNumber", (): void => {
    it("converts a number into cents", (): void => {
        const number = 1.5
        
        const actual = computeCentsFromNumber(number)
        
        const expected = 701.955001 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })
})
