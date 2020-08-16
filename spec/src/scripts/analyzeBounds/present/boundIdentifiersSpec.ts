import { Cents, Id, Name, Position, Prime, Proportion, Ratio, Sopfr } from "../../../../../src/general"
import { ApotomeSlope, Monzo } from "../../../../../src/general/music"
import { INA_SIZES } from "../../../../../src/notations/ji/intervals"
import { Bound, JiSymbol, Level, Mina } from "../../../../../src/notations/ji"
import { extractBoundIdentifiers } from "../../../../../src/scripts/analyzeBounds/present/boundIdentifiers"
import { BoundIdentifiers } from "../../../../../src/scripts/analyzeBounds/present/types"
import { N2D3P9 } from "../../../../../src/general/music/types"
import { SymbolLongAscii } from "../../../../../src/notations"
import { SymbolUnicode } from "../../../../../src/notations/types"

describe("extractBoundIdentifiers", () => {
    const bound = {
        cents: 23.1164196495597 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
        id: 47 as Id<Bound>,
    }

    it("returns helpful identifying information about the bound", () => {
        const result: BoundIdentifiers = extractBoundIdentifiers(bound)

        expect(result).toEqual({
            extremeLevelLesserBoundedSymbol: ".)/|" as SymbolLongAscii,
            extremeLevelGreaterBoundedSymbol: "'/|" as SymbolLongAscii,
            cents: 23.1164196495597 as Cents as Cents,
            boundedSymbols: {
                id: 47 as Id<Bound>,
                [ Level.ULTRA ]: [
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Cents,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / INA_SIZES[ Level.ULTRA ] as Proportion,
                        ascii: ".)/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 47 as Mina,
                        primaryComma: {
                            apotomeSlope: -2.412 as ApotomeSlope,
                            fiveRoughSopfr: 29 as Sopfr<5>,
                            limit: 19 as Prime,
                            ratio: [76, 75] as Ratio,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo,
                            cents: 22.9305875372457 as Cents,
                            name: "19/25C" as Name<Position>,
                            n2d3p9: 55.70987654320989 as N2D3P9,
                        },
                        id: 47 as Id<JiSymbol>, // not the best example since id and mina are the same up to this point
                        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
                    },
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Cents,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / INA_SIZES[ Level.ULTRA ] as Proportion,
                        ascii: "'/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 48 as Mina,
                        primaryComma: {
                            apotomeSlope: 10.555 as ApotomeSlope,
                            fiveRoughSopfr: 0 as Sopfr<5>,
                            limit: 3 as Prime,
                            ratio: [531441, 524288] as Ratio,
                            monzo: [-19, 12] as Monzo,
                            cents: 23.460010384649 as Cents,
                            name: "1C" as Name<Position>,
                            n2d3p9: 0.1111111111111111 as N2D3P9,
                        },
                        id: 48 as Id<JiSymbol>,
                        elements: ["'|", "/|"] as SymbolLongAscii[],
                    },
                ],
                [ Level.EXTREME ]: [
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Cents,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / INA_SIZES[ Level.EXTREME ] as Proportion,
                        ascii: ".)/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 47 as Mina,
                        primaryComma: {
                            apotomeSlope: -2.412 as ApotomeSlope,
                            fiveRoughSopfr: 29 as Sopfr<5>,
                            limit: 19 as Prime,
                            ratio: [76, 75] as Ratio,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo,
                            cents: 22.9305875372457 as Cents,
                            name: "19/25C" as Name<Position>,
                            n2d3p9: 55.70987654320989 as N2D3P9,
                        },
                        id: 47 as Id<JiSymbol>,
                        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
                    },
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Cents,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / INA_SIZES[ Level.EXTREME ] as Proportion,
                        ascii: "'/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 48 as Mina,
                        primaryComma: {
                            apotomeSlope: 10.555 as ApotomeSlope,
                            fiveRoughSopfr: 0 as Sopfr<5>,
                            limit: 3 as Prime,
                            ratio: [531441, 524288] as Ratio,
                            monzo: [-19, 12] as Monzo,
                            cents: 23.460010384649 as Cents,
                            name: "1C" as Name<Position>,
                            n2d3p9: 0.1111111111111111 as N2D3P9,
                        },
                        id: 48 as Id<JiSymbol>,
                        elements: ["'|", "/|"] as SymbolLongAscii[],
                    },
                ],
                [ Level.INSANE ]: [
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Cents,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / INA_SIZES[ Level.INSANE ] as Proportion,
                        ascii: ".)/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 47 as Mina,
                        id: 47 as Id<JiSymbol>,
                        primaryComma: {
                            apotomeSlope: -2.412 as ApotomeSlope,
                            fiveRoughSopfr: 29 as Sopfr<5>,
                            limit: 19 as Prime,
                            ratio: [76, 75] as Ratio,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo,
                            cents: 22.9305875372457 as Cents,
                            name: "19/25C" as Name<Position>,
                            n2d3p9: 55.70987654320989 as N2D3P9,
                        },
                        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
                    },
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Cents,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / INA_SIZES[ Level.INSANE ] as Proportion,
                        ascii: "'/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 48 as Mina,
                        id: 48 as Id<JiSymbol>,
                        primaryComma: {
                            apotomeSlope: 10.555 as ApotomeSlope,
                            fiveRoughSopfr: 0 as Sopfr<5>,
                            limit: 3 as Prime,
                            ratio: [531441, 524288] as Ratio,
                            monzo: [-19, 12] as Monzo,
                            cents: 23.460010384649 as Cents,
                            name: "1C" as Name<Position>,
                            n2d3p9: 0.1111111111111111 as N2D3P9,
                        },
                        elements: ["'|", "/|"] as SymbolLongAscii[],
                    },
                ],
            },
            lesserBoundedMina: 47 as Mina,
            greaterBoundedMina: 48 as Mina,
        })
    })
})
