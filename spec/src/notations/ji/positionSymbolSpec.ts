import { computePositionSymbol } from "../../../../src/notations/ji/positionSymbol"
import { Level, Mina, SymbolId, SymbolLongAscii, SymbolUnicode } from "../../../../src/notations/ji/types"
import { Monzo } from "../../../../src/utilities/comma/types"
import { Cents } from "../../../../src/utilities/types"

describe("computePositionSymbol", () => {
    it("given a position, returns the symbol at that position", () => { // TODO: this could be used for the calculator?
        const position: Cents = 3.37801872846485 as Cents

        const result = computePositionSymbol(position)

        expect(result).toEqual({
            id: 7 as SymbolId,
            ascii: ")|" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.HIGH,
            mina: 7 as Mina,
            primaryComma: {
                monzo: [-9, 3, 0, 0, 0, 0, 0, 1] as Monzo,
                position: 3.37801872846485 as Cents,
            },
            elements: [")|"] as SymbolLongAscii[],
        })
    })

    it("does not fail if given an undefined position", () => {
        const position = undefined

        const result = computePositionSymbol(position)

        expect(result).toEqual(undefined)
    })
})
