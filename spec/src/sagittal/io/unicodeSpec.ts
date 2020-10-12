import { computeUnicodeFromSymbol } from "../../../../src/sagittal/io"
import { SagittalSymbol } from "../../../../src/sagittal/notations"

describe("computeUnicodeFromSymbol", (): void => {
    it("given a symbol, returns its unicode representation", (): void => {
        const symbol = "``)|" as SagittalSymbol

        const actual = computeUnicodeFromSymbol(symbol)

        const expected = ""
        expect(actual).toBe(expected)
    })
})
