import { computeLevelBoundedSymbols } from "../../../../src/notations/ji/levelBoundedSymbols"
import {
    Bound,
    BoundId,
    Level,
    Mina,
    SymbolId,
    SymbolLongAscii,
    SymbolUnicode,
} from "../../../../src/notations/ji/types"
import { Cents, Proportion } from "../../../../src/utilities/types"
import { Monzo } from "../../../../src/utilities/comma/types"

describe("computeLevelBoundedSymbols", () => {
    it("returns, given a bound, for each of its levels, an array of the pair of symbols it bounds at that level, as well as their distances and ina-distances from the bound", () => {
        const bound: Bound = {
            position: 24.66219847111080 as Cents,
            levels: [Level.MEDIUM, Level.EXTREME, Level.INSANE],
            id: 54 as BoundId,
        }

        const result = computeLevelBoundedSymbols(bound)

        expect(result).toEqual({
            id: 54 as BoundId,
            [ Level.MEDIUM ]: [
                {
                    introducingLevel: Level.MEDIUM,
                    distance: 3.1559088743959975 as Cents,
                    inaDistance: 0.5829624209957123 as Proportion,
                    ascii: "/|" as SymbolLongAscii as SymbolLongAscii,
                    unicode: "" as SymbolUnicode as SymbolUnicode,
                    mina: 44 as Mina as Mina,
                    primaryComma: {
                        monzo: [-4, 4, -1] as Monzo as Monzo,
                        position: 21.5062895967148 as Cents as Cents,
                    },
                    id: 44 as SymbolId,
                    elements: ["/|"] as SymbolLongAscii[] as SymbolLongAscii[],
                },
                {
                    introducingLevel: Level.MEDIUM,
                    distance: 2.601893328989302 as Cents,
                    inaDistance: 0.48062415443807605 as Proportion,
                    ascii: "|)" as SymbolLongAscii,
                    unicode: "" as SymbolUnicode,
                    mina: 56 as Mina,
                    primaryComma: {
                        monzo: [6, -2, 0, -1] as Monzo,
                        position: 27.2640918001001 as Cents,
                    },
                    id: 58 as SymbolId,
                    elements: ["|)"] as SymbolLongAscii[],
                },
            ],
            [ Level.EXTREME ]: [
                {
                    introducingLevel: Level.EXTREME,
                    distance: 0.38371604975449713 as Cents,
                    inaDistance: 0.786434752419428 as Proportion,
                    ascii: ",)/|" as SymbolLongAscii,
                    unicode: "" as SymbolUnicode,
                    mina: 50 as Mina,
                    primaryComma: {
                        monzo: [-8, 3, 3, 0, 0, -1] as Monzo,
                        position: 24.2784824213563 as Cents,
                    },
                    id: 51 as SymbolId,
                    elements: [",|", ")|", "/|"] as SymbolLongAscii[],
                },
                {
                    introducingLevel: Level.HIGH,
                    distance: 0.22210985406900008 as Cents,
                    inaDistance: 0.4552191867044054 as Proportion,
                    ascii: ")/|" as SymbolLongAscii,
                    unicode: "" as SymbolUnicode,
                    mina: 51 as Mina,
                    primaryComma: {
                        monzo: [-13, 7, -1, 0, 0, 0, 0, 1] as Monzo,
                        position: 24.8843083251798 as Cents,
                    },
                    id: 52 as SymbolId,
                    elements: [")|", "/|"] as SymbolLongAscii[],
                },
            ],
            [ Level.INSANE ]: [
                {
                    introducingLevel: Level.EXTREME,
                    distance: 0.38371604975449713 as Cents,
                    inaDistance: 2.7305824665550094 as Proportion,
                    ascii: ",)/|" as SymbolLongAscii,
                    unicode: "" as SymbolUnicode,
                    mina: 50 as Mina,
                    primaryComma: {
                        monzo: [-8, 3, 3, 0, 0, -1] as Monzo,
                        position: 24.2784824213563 as Cents,
                    },
                    id: 51 as SymbolId,
                    elements: [",|", ")|", "/|"] as SymbolLongAscii[],
                },
                {
                    introducingLevel: Level.HIGH,
                    distance: 0.22210985406900008 as Cents,
                    inaDistance: 1.5805679057676565 as Proportion,
                    ascii: ")/|" as SymbolLongAscii,
                    unicode: "" as SymbolUnicode,
                    mina: 51 as Mina,
                    primaryComma: {
                        monzo: [-13, 7, -1, 0, 0, 0, 0, 1] as Monzo,
                        position: 24.8843083251798 as Cents,
                    },
                    id: 52 as SymbolId,
                    elements: [")|", "/|"] as SymbolLongAscii[],
                },
            ],
        })
    })

    it("works for the final bound", () => {
        const bound: Bound = {
            position: 68.57250822118040 as Cents,
            levels: [Level.MEDIUM, Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
            id: 54 as BoundId,
        }

        const result = computeLevelBoundedSymbols(bound)

        expect(result).toEqual({
            id: 54 as BoundId,
            [ Level.MEDIUM ]: [
                {
                    introducingLevel: Level.MEDIUM,
                    ascii: "(|\\" as SymbolLongAscii,
                    unicode: "" as SymbolUnicode,
                    id: 142 as SymbolId,
                    mina: 133 as Mina,
                    distance: 3.6578835602835937 as Cents,
                    inaDistance: 0.6756876516060547 as Proportion,
                    primaryComma: {
                        monzo: [-13, 5, 1, 1] as Monzo,
                        position: 64.9146246608968 as Cents,
                    },
                    elements: ["(|", "|\\"] as SymbolLongAscii[],
                },
                undefined,
            ],
            [ Level.HIGH ]: [
                {
                    introducingLevel: Level.HIGH,
                    ascii: ")|\\\\" as SymbolLongAscii,
                    unicode: "" as SymbolUnicode,
                    mina: 138 as Mina,
                    id: 147 as SymbolId,
                    distance: 1.2814466063946952 as Cents,
                    inaDistance: 0.5297795425192314 as Proportion,
                    primaryComma: {
                        monzo: [-16, 11, 1, 0, 0, -1] as Monzo,
                        position: 67.2910616147857 as Cents,
                    },
                    elements: [")|", "|\\", "|\\"] as SymbolLongAscii[],
                },
                undefined,
            ],
            [ Level.ULTRA ]: [
                {
                    introducingLevel: Level.HIGH,
                    ascii: ")|\\\\" as SymbolLongAscii,
                    unicode: "" as SymbolUnicode,
                    mina: 138 as Mina,
                    id: 147 as SymbolId,
                    distance: 1.2814466063946952 as Cents,
                    inaDistance: 0.6537704992790516 as Proportion,
                    primaryComma: {
                        monzo: [-16, 11, 1, 0, 0, -1] as Monzo,
                        position: 67.2910616147857 as Cents,
                    },
                    elements: [")|", "|\\", "|\\"] as SymbolLongAscii[],
                },
                undefined,
            ],
            [ Level.EXTREME ]: [
                {
                    introducingLevel: Level.EXTREME,
                    ascii: "``)|\\\\" as SymbolLongAscii,
                    unicode: "" as SymbolUnicode,
                    id: 149 as SymbolId,
                    mina: 140 as Mina,
                    distance: 0.44892240228040237 as Cents,
                    inaDistance: 0.9200766517814528 as Proportion,
                    primaryComma: {
                        monzo: [-11, 8, 2, -1, -1] as Monzo,
                        position: 68.1235858189 as Cents,
                    },
                    elements: ["``|", ")|", "|\\", "|\\"] as SymbolLongAscii[],
                },
                undefined,
            ],
            [ Level.INSANE ]: [
                {
                    introducingLevel: Level.EXTREME,
                    ascii: "``)|\\\\" as SymbolLongAscii,
                    unicode: "" as SymbolUnicode,
                    mina: 140 as Mina,
                    id: 149 as SymbolId,
                    distance: 0.44892240228040237 as Cents,
                    inaDistance: 3.194600906829164 as Proportion,
                    primaryComma: {
                        monzo: [-11, 8, 2, -1, -1] as Monzo,
                        position: 68.1235858189 as Cents,
                    },
                    elements: ["``|", ")|", "|\\", "|\\"] as SymbolLongAscii[],
                },
                undefined,
            ],
        })
    })

    it("works for the first bound", () => {
        const bound: Bound = {
            position: 0.210788021120605 as Cents,
            levels: [Level.EXTREME, Level.INSANE],
            id: 55 as BoundId,
        }

        const result = computeLevelBoundedSymbols(bound)

        expect(result).toEqual({
            id: 55 as BoundId,
            [ Level.EXTREME ]: [
                undefined,
                {
                    introducingLevel: Level.EXTREME,
                    ascii: "`|" as SymbolLongAscii,
                    unicode: "" as SymbolUnicode,
                    mina: 1 as Mina,
                    primaryComma: {
                        monzo: [12, -2, -1, -1, 0, -1] as Monzo,
                        position: 0.42271616595482 as Cents,
                    },
                    id: 1 as SymbolId,
                    distance: 0.211928144834215 as Cents,
                    inaDistance: 0.43435154255350816 as Proportion,
                    elements: ["`|"] as SymbolLongAscii[],
                },
            ],
            [ Level.INSANE ]: [
                undefined,
                {
                    introducingLevel: Level.EXTREME,
                    ascii: "`|" as SymbolLongAscii,
                    unicode: "" as SymbolUnicode,
                    mina: 1 as Mina,
                    primaryComma: {
                        monzo: [12, -2, -1, -1, 0, -1] as Monzo,
                        position: 0.42271616595482 as Cents,
                    },
                    id: 1 as SymbolId,
                    distance: 0.211928144834215 as Cents,
                    inaDistance: 1.508113295818833 as Proportion,
                    elements: ["`|"] as SymbolLongAscii[],
                },
            ],
        })
    })
})
