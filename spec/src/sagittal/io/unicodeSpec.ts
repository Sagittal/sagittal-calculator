import { SYMBOL_TO_UNICODE_MAP } from "../../../../src/sagittal/io"
import { SagittalSymbol } from "../../../../src/sagittal/notations"

describe("SYMBOL_TO_UNICODE_MAP", (): void => {
    it("given a symbol, returns its unicode representation", (): void => {
        const symbol = "``)|" as SagittalSymbol

        const actual = SYMBOL_TO_UNICODE_MAP[ symbol ]

        const expected = ""
        expect(actual).toBe(expected)
    })
})
