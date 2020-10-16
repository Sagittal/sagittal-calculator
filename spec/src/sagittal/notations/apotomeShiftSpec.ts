import { SagittalSymbol } from "../../../../src/sagittal/notations"
import { apotomeShift } from "../../../../src/sagittal/notations/apotomeShift"

describe("apotomeShift", (): void => {
    it("takes a symbol and shifts it by an apotome by adding shafts", (): void => {
        const symbol = ",')|(" as SagittalSymbol
        
        const actual = apotomeShift(symbol)
        
        const expected = ",')|||(" as SagittalSymbol
        expect(actual).toBe(expected)
    })

    it("works for a symbol which already has two shafts", (): void => {
        const symbol = ")||(" as SagittalSymbol

        const actual = apotomeShift(symbol)

        const expected = ")X(" as SagittalSymbol
        expect(actual).toBe(expected)
    })

    it("works for a symbol which is a bare shaft with accents", (): void => {
        const symbol = "`|" as SagittalSymbol
        
        const actual = apotomeShift(symbol)
        
        const expected = "`/||\\" as SagittalSymbol
        expect(actual).toBe(expected)
    })
})
