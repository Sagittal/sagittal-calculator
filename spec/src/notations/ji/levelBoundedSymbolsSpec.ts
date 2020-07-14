import { Cents, Id, Name, Position, Prime, Proportion, Ratio, Sopfr } from "../../../../src/general"
import { Monzo } from "../../../../src/general/music"
import { ApotomeSlope } from "../../../../src/general/music/types"
import { computeLevelBoundedSymbols } from "../../../../src/notations/ji/levelBoundedSymbols"
import { Bound, Level, Mina, SagittalSymbol, SymbolLongAscii, SymbolUnicode } from "../../../../src/notations/ji/types"

describe("computeLevelBoundedSymbols", () => {
    it("returns, given a bound, for each of its levels, an array of the pair of symbols it bounds at that level, as well as their distances and ina-distances from the bound", () => {
        const bound: Bound = {
            cents: 24.66219847111080 as Cents,
            levels: [Level.MEDIUM, Level.EXTREME, Level.INSANE],
            id: 54 as Id<Bound>,
        }

        const result = computeLevelBoundedSymbols(bound)

        expect(result).toEqual({
            id: 54 as Id<Bound>,
            [ Level.MEDIUM ]: [
                {
                    introducingLevel: Level.MEDIUM,
                    distance: 3.1559088743959975 as Cents,
                    inaDistance: 0.5829624209957123 as Proportion,
                    ascii: "/|" as SymbolLongAscii as SymbolLongAscii,
                    unicode: "" as SymbolUnicode as SymbolUnicode,
                    mina: 44 as Mina as Mina,
                    primaryComma: {
                        apotomeSlope: 2.676 as ApotomeSlope,
                        fiveRoughSopfr: 5 as Sopfr<5>,
                        limit: 5 as Prime,
                        ratio: [81, 80] as Ratio,
                        monzo: [-4, 4, -1] as Monzo,
                        cents: 21.5062895967148 as Cents,
                        name: "1/5C" as Name<Position>,
                    },
                    id: 44 as Id<SagittalSymbol>,
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
                        apotomeSlope: -3.679 as ApotomeSlope,
                        fiveRoughSopfr: 7 as Sopfr<5>,
                        limit: 7 as Prime,
                        ratio: [64, 63] as Ratio,
                        monzo: [6, -2, 0, -1] as Monzo,
                        cents: 27.2640918001001 as Cents,
                        name: "1/7C" as Name<Position>,
                    },
                    id: 58 as Id<SagittalSymbol>,
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
                        apotomeSlope: 1.505 as ApotomeSlope,
                        fiveRoughSopfr: 28 as Sopfr<5>,
                        limit: 13 as Prime,
                        ratio: [3375, 3328] as Ratio,
                        monzo: [-8, 3, 3, 0, 0, -1] as Monzo,
                        cents: 24.2784824213563 as Cents,
                        name: "125/13C" as Name<Position>,
                    },
                    id: 51 as Id<SagittalSymbol>,
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
                        apotomeSlope: 5.468 as ApotomeSlope,
                        fiveRoughSopfr: 24 as Sopfr<5>,
                        limit: 19 as Prime,
                        ratio: [41553, 40960] as Ratio,
                        monzo: [-13, 7, -1, 0, 0, 0, 0, 1] as Monzo,
                        cents: 24.8843083251798 as Cents,
                        name: "19/5C" as Name<Position>,
                    },
                    id: 52 as Id<SagittalSymbol>,
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
                        apotomeSlope: 1.505 as ApotomeSlope,
                        fiveRoughSopfr: 28 as Sopfr<5>,
                        limit: 13 as Prime,
                        ratio: [3375, 3328] as Ratio,
                        monzo: [-8, 3, 3, 0, 0, -1] as Monzo,
                        cents: 24.2784824213563 as Cents,
                        name: "125/13C" as Name<Position>,
                    },
                    id: 51 as Id<SagittalSymbol>,
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
                        apotomeSlope: 5.468 as ApotomeSlope,
                        fiveRoughSopfr: 24 as Sopfr<5>,
                        limit: 19 as Prime,
                        ratio: [41553, 40960] as Ratio,
                        monzo: [-13, 7, -1, 0, 0, 0, 0, 1] as Monzo,
                        cents: 24.8843083251798 as Cents,
                        name: "19/5C" as Name<Position>,
                    },
                    id: 52 as Id<SagittalSymbol>,
                    elements: [")|", "/|"] as SymbolLongAscii[],
                },
            ],
        })
    })

    it("works for the final bound", () => {
        const bound: Bound = {
            cents: 68.57250822118040 as Cents,
            levels: [Level.MEDIUM, Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
            id: 54 as Id<Bound>,
        }

        const result = computeLevelBoundedSymbols(bound)

        expect(result).toEqual({
            id: 54 as Id<Bound>,
            [ Level.MEDIUM ]: [
                {
                    introducingLevel: Level.MEDIUM,
                    ascii: "(|\\" as SymbolLongAscii,
                    unicode: "" as SymbolUnicode,
                    id: 142 as Id<SagittalSymbol>,
                    mina: 133 as Mina,
                    distance: 3.6578835602835937 as Cents,
                    inaDistance: 0.6756876516060547 as Proportion,
                    primaryComma: {
                        apotomeSlope: 1.003 as ApotomeSlope,
                        fiveRoughSopfr: 12 as Sopfr<5>,
                        limit: 7 as Prime,
                        ratio: [8505, 8192] as Ratio,
                        monzo: [-13, 5, 1, 1] as Monzo,
                        cents: 64.9146246608968 as Cents,
                        name: "35L" as Name<Position>,
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
                    id: 147 as Id<SagittalSymbol>,
                    distance: 1.2814466063946952 as Cents,
                    inaDistance: 0.5297795425192314 as Proportion,
                    primaryComma: {
                        apotomeSlope: 6.857 as ApotomeSlope,
                        fiveRoughSopfr: 18 as Sopfr<5>,
                        limit: 13 as Prime,
                        ratio: [885735, 851968] as Ratio,
                        monzo: [-16, 11, 1, 0, 0, -1] as Monzo,
                        cents: 67.2910616147857 as Cents,
                        name: "5/13L" as Name<Position>,
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
                    id: 147 as Id<SagittalSymbol>,
                    distance: 1.2814466063946952 as Cents,
                    inaDistance: 0.6537704992790516 as Proportion,
                    primaryComma: {
                        apotomeSlope: 6.857 as ApotomeSlope,
                        fiveRoughSopfr: 18 as Sopfr<5>,
                        limit: 13 as Prime,
                        ratio: [885735, 851968] as Ratio,
                        monzo: [-16, 11, 1, 0, 0, -1] as Monzo,
                        cents: 67.2910616147857 as Cents,
                        name: "5/13L" as Name<Position>,
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
                    id: 149 as Id<SagittalSymbol>,
                    mina: 140 as Mina,
                    distance: 0.44892240228040237 as Cents,
                    inaDistance: 0.9200766517814528 as Proportion,
                    primaryComma: {
                        apotomeSlope: 3.805 as ApotomeSlope,
                        fiveRoughSopfr: 28 as Sopfr<5>,
                        limit: 11 as Prime,
                        ratio: [164025, 157696] as Ratio,
                        monzo: [-11, 8, 2, -1, -1] as Monzo,
                        cents: 68.1235858189 as Cents,
                        name: "25/77L" as Name<Position>,
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
                    id: 149 as Id<SagittalSymbol>,
                    distance: 0.44892240228040237 as Cents,
                    inaDistance: 3.194600906829164 as Proportion,
                    primaryComma: {
                        apotomeSlope: 3.805 as ApotomeSlope,
                        fiveRoughSopfr: 28 as Sopfr<5>,
                        limit: 11 as Prime,
                        ratio: [164025, 157696] as Ratio,
                        monzo: [-11, 8, 2, -1, -1] as Monzo,
                        cents: 68.1235858189 as Cents,
                        name: "25/77L" as Name<Position>,
                    },
                    elements: ["``|", ")|", "|\\", "|\\"] as SymbolLongAscii[],
                },
                undefined,
            ],
        })
    })

    it("works for the first bound", () => {
        const bound: Bound = {
            cents: 0.210788021120605 as Cents,
            levels: [Level.EXTREME, Level.INSANE],
            id: 55 as Id<Bound>,
        }

        const result = computeLevelBoundedSymbols(bound)

        expect(result).toEqual({
            id: 55 as Id<Bound>,
            [ Level.EXTREME ]: [
                undefined,
                {
                    introducingLevel: Level.EXTREME,
                    ascii: "`|" as SymbolLongAscii,
                    unicode: "" as SymbolUnicode,
                    mina: 1 as Mina,
                    primaryComma: {
                        apotomeSlope: -2.026 as ApotomeSlope,
                        fiveRoughSopfr: 25 as Sopfr<5>,
                        limit: 13 as Prime,
                        ratio: [4096, 4095] as Ratio,
                        monzo: [12, -2, -1, -1, 0, -1] as Monzo,
                        cents: 0.42271616595482 as Cents,
                        name: "1/455n" as Name<Position>,
                    },
                    id: 1 as Id<SagittalSymbol>,
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
                        apotomeSlope: -2.026 as ApotomeSlope,
                        fiveRoughSopfr: 25 as Sopfr<5>,
                        limit: 13 as Prime,
                        ratio: [4096, 4095] as Ratio,
                        monzo: [12, -2, -1, -1, 0, -1] as Monzo,
                        cents: 0.42271616595482 as Cents,
                        name: "1/455n" as Name<Position>,
                    },
                    id: 1 as Id<SagittalSymbol>,
                    distance: 0.211928144834215 as Cents,
                    inaDistance: 1.508113295818833 as Proportion,
                    elements: ["`|"] as SymbolLongAscii[],
                },
            ],
        })
    })
})
