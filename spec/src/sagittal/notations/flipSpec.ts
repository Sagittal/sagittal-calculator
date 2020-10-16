import { SagittalSymbol } from "../../../../src/sagittal/notations"
import { flipAccents, flipSymbol } from "../../../../src/sagittal/notations/flip"

describe("flipAccents", (): void => {
    it("flips the accents", (): void => {
        const symbol = ",')|(" as SagittalSymbol

        const actual = flipAccents(symbol)

        const expected = "`.)|(" as SagittalSymbol
        expect(actual).toBe(expected)
    })

    it("works the other way", (): void => {
        const symbol = "`.)|(" as SagittalSymbol

        const actual = flipAccents(symbol)

        const expected = ",')|(" as SagittalSymbol
        expect(actual).toBe(expected)
    })
})

describe("flipSymbol", (): void => {
    it("flips the entire symbol from up to down (it does not work the other way)", (): void => {
        const symbol = "`./|||\\" as SagittalSymbol

        const actual = flipSymbol(symbol)

        const expected = ",'\\!!!/" as SagittalSymbol
        expect(actual).toBe(expected)
    })
})
