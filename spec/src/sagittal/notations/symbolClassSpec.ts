import { Id } from "../../../../src/general"
import { SymbolLongAscii } from "../../../../src/sagittal/io"
import { getSymbolClass, PrimaryComma, SymbolClass } from "../../../../src/sagittal/notations"

describe("getSymbolClass", (): void => {
    it("given a symbol class ID, returns the full symbol class", (): void => {
        const jiNotationSymbolClassId = 55 as Id<SymbolClass>

        const actual: SymbolClass = getSymbolClass(jiNotationSymbolClassId)

        const expected: SymbolClass = {
            id: 55 as Id<SymbolClass>,
            primaryCommaId: 55 as Id<PrimaryComma>,
            elements: ["`|", ".|", "|)"] as SymbolLongAscii[],
        }
        expect(actual).toEqual(expected)
    })
})
