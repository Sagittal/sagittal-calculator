import { extractBoundIdentifiers } from "../../../../../src/scripts/analyzeBounds/present/boundIdentifiers"
import { INA_SIZES } from "../../../../../src/notations/ji/intervals"
import {
    Bound,
    Level,
    Mina,
    SagittalSymbol,
    SymbolLongAscii,
    SymbolUnicode,
} from "../../../../../src/notations/ji/types"
import { BoundIdentifiers } from "../../../../../src/scripts/analyzeBounds/present/types"
import { Cents, Id } from "../../../../../src/utilities/types"
import { Monzo } from "../../../../../src/utilities/comma/types"

describe("extractBoundIdentifiers", () => {
    const bound = {
        position: 23.1164196495597 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
        id: 47 as Id<Bound>,
    }

    it("returns helpful identifying information about the bound", () => {
        const result: BoundIdentifiers = extractBoundIdentifiers(bound)

        expect(result).toEqual({
            extremeLevelLesserBoundedSymbol: ".)/|" as SymbolLongAscii,
            extremeLevelGreaterBoundedSymbol: "'/|" as SymbolLongAscii,
            position: 23.1164196495597 as Cents as Cents,
            boundedSymbols: {
                id: 47 as Id<Bound>,
                [ Level.ULTRA ]: [
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Cents,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / INA_SIZES[ Level.ULTRA ],
                        ascii: ".)/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 47 as Mina,
                        primaryComma: {
                            position: 22.9305875372457 as Cents,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo,
                        },
                        id: 47 as Id<SagittalSymbol>, // not the best example since id and mina are the same up to this point
                        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
                    },
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Cents,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / INA_SIZES[ Level.ULTRA ],
                        ascii: "'/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 48 as Mina,
                        primaryComma: {
                            position: 23.4600103846490 as Cents,
                            monzo: [-19, 12] as Monzo,
                        },
                        id: 48 as Id<SagittalSymbol>,
                        elements: ["'|", "/|"] as SymbolLongAscii[],
                    },
                ],
                [ Level.EXTREME ]: [
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Cents,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / INA_SIZES[ Level.EXTREME ],
                        ascii: ".)/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 47 as Mina,
                        primaryComma: {
                            position: 22.9305875372457 as Cents,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo,
                        },
                        id: 47 as Id<SagittalSymbol>,
                        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
                    },
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Cents,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / INA_SIZES[ Level.EXTREME ],
                        ascii: "'/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 48 as Mina,
                        primaryComma: {
                            position: 23.4600103846490 as Cents,
                            monzo: [-19, 12] as Monzo,
                        },
                        id: 48 as Id<SagittalSymbol>,
                        elements: ["'|", "/|"] as SymbolLongAscii[],
                    },
                ],
                [ Level.INSANE ]: [
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Cents,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / INA_SIZES[ Level.INSANE ],
                        ascii: ".)/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 47 as Mina,
                        id: 47 as Id<SagittalSymbol>,
                        primaryComma: {
                            position: 22.9305875372457 as Cents,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo,
                        },
                        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
                    },
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Cents,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / INA_SIZES[ Level.INSANE ],
                        ascii: "'/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 48 as Mina,
                        id: 48 as Id<SagittalSymbol>,
                        primaryComma: {
                            position: 23.4600103846490 as Cents,
                            monzo: [-19, 12] as Monzo,
                        },
                        elements: ["'|", "/|"] as SymbolLongAscii[],
                    },
                ],
            },
            lesserBoundedMina: 47 as Mina,
            greaterBoundedMina: 48 as Mina,
        } as BoundIdentifiers)
    })
})
