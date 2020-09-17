import { Id } from "../../../../src/general"
import { SymbolLongAscii } from "../../../../src/sagittal/io"
import { getSymbolClass, SagittalComma, SymbolClass } from "../../../../src/sagittal/notations"
import { SymbolSubset } from "../../../../src/sagittal/notations/types"

describe("getSymbolClass", (): void => {
    it("given a symbol class ID, returns the full symbol class", (): void => {
        const jiNotationSymbolClassId = 55 as Id<SymbolClass>

        const actual: SymbolClass = getSymbolClass(jiNotationSymbolClassId)

        const expected: SymbolClass = {
            id: 55 as Id<SymbolClass>,
            smallestSymbolSubset: SymbolSubset.OLYMPIAN,
            primaryCommaId: 55 as Id<SagittalComma>,
            elements: ["`|", ".|", "|)"] as SymbolLongAscii[],
        }
        expect(actual).toEqual(expected)
    })
})
