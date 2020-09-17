import { Id } from "../../../../../src/general"
import { JiNotationSymbolClass, SagittalComma, SymbolClass, SymbolLongAscii } from "../../../../../src/sagittal"
import { getJiNotationSymbolClass, JiNotationLevel, Mina } from "../../../../../src/sagittal/notations/ji"
import { SymbolSubset } from "../../../../../src/sagittal/notations/types"

describe("getJiNotationSymbolClass", (): void => {
    it("given a JI Notation symbol class's ID, returns the full symbol", (): void => {
        const jiNotationSymbolClassId = 55 as Id<SymbolClass>

        const actual: JiNotationSymbolClass = getJiNotationSymbolClass(jiNotationSymbolClassId)

        const expected: JiNotationSymbolClass = {
            id: 55 as Id<SymbolClass>,
            smallestSymbolSubset: SymbolSubset.OLYMPIAN,
            mina: 53 as Mina,
            primaryCommaId: 55 as Id<SagittalComma>,
            elements: ["`|", ".|", "|)"] as SymbolLongAscii[],
        }
        expect(actual).toEqual(expected)
    })
})
