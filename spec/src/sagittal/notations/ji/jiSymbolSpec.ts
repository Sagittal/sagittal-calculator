import { Id } from "../../../../../src/general"
import { SagittalComma, SymbolLongAscii } from "../../../../../src/sagittal"
import { getJiSymbol, JiSymbol, Level, Mina } from "../../../../../src/sagittal/notations/ji"
import { SymbolSet, SymbolUnicode } from "../../../../../src/sagittal/notations/types"

describe("getJiSymbol", () => {
    it("given a symbol's ID, returns the full symbol", () => {
        const jiSymbolId = 55 as Id<JiSymbol>

        const actual = getJiSymbol(jiSymbolId)

        const expected = {
            id: 55 as Id<JiSymbol>,
            ascii: "`.|)" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.EXTREME,
            lowestSymbolSet: SymbolSet.OLYMPIAN,
            mina: 53 as Mina,
            primaryCommaId: 55 as Id<SagittalComma>,
            elements: ["`|", ".|", "|)"] as SymbolLongAscii[],
        }
        expect(actual).toEqual(expected)
    })
})
