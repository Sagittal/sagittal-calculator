import { Cents, Id, Name, Position, Prime, Ratio, Sopfr } from "../../../../src/general"
import { ApotomeSlope, Monzo } from "../../../../src/general/music"
import { computePositionSymbol } from "../../../../src/notations/ji/positionSymbol"
import { Level, Mina, SagittalSymbol, SymbolLongAscii, SymbolUnicode } from "../../../../src/notations/ji/types"

describe("computePositionSymbol", () => {
    it("given a position, returns the symbol at that position", () => { // TODO: this could be used for the calculator?
        const position: Cents = 3.37801872846485 as Cents

        const result = computePositionSymbol(position)

        expect(result).toEqual({
            id: 7 as Id<SagittalSymbol>,
            ascii: ")|" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.HIGH,
            mina: 7 as Mina,
            primaryComma: {
                apotomeSlope: 2.792 as ApotomeSlope,
                fiveRoughSopfr: 19 as Sopfr<5>,
                limit: 19 as Prime,
                ratio: [513, 512] as Ratio,
                monzo: [-9, 3, 0, 0, 0, 0, 0, 1] as Monzo,
                cents: 3.37801872846485 as Cents,
                name: "19s" as Name<Position>,
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
