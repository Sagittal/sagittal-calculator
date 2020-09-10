import { Cents, Id, Monzo, Multiplier, Name, Prime, Ratio, Sopfr } from "../../../../../../src/general"
import {
    AnalyzedComma,
    ApotomeSlope,
    Ina,
    N2D3P9,
    SagittalComma,
    SymbolLongAscii,
    TINA,
    TwoThreeFreeClass,
} from "../../../../../../src/sagittal"
import { SymbolUnicode } from "../../../../../../src/sagittal/io"
import { Bound, JiSymbol, Level, Mina } from "../../../../../../src/sagittal/notations/ji"
import { MINA, ULTRINA } from "../../../../../../src/sagittal/notations/ji/intervals"
import { SymbolSubset } from "../../../../../../src/sagittal/notations/types"
import { extractBoundIdentifiers } from "../../../../../../src/scripts/bound/io/terminal/boundIdentifiers"
import { BoundIdentifiers } from "../../../../../../src/scripts/bound/io/terminal/types"

describe("extractBoundIdentifiers", () => {
    const bound = {
        cents: 23.1164196495597 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
        id: 47 as Id<Bound>,
    }

    it("returns helpful identifying information about the bound", () => {
        const actual: BoundIdentifiers = extractBoundIdentifiers(bound)

        const expected: BoundIdentifiers = {
            extremeLevelLesserBoundedSymbol: ".)/|" as SymbolLongAscii,
            extremeLevelGreaterBoundedSymbol: "'/|" as SymbolLongAscii,
            cents: 23.1164196495597 as Cents as Cents,
            boundedSymbols: {
                id: 47 as Id<Bound>,
                [ Level.ULTRA ]: [
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Cents,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / ULTRINA as Multiplier<Ina>,
                        ascii: ".)/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        smallestJiSymbolSubset: SymbolSubset.HERCULEAN,
                        mina: 47 as Mina,
                        analyzedPrimaryComma: {
                            id: 47 as Id<SagittalComma>,
                            apotomeSlope: -2.411919815346935 as ApotomeSlope,
                            twoThreeFreeClass: { monzo: [0, 0, 2, 0, 0, 0, 0, -1] } as TwoThreeFreeClass,
                            twoThreeFreeSopfr: 29 as Sopfr<5>,
                            limit: 19 as Prime,
                            ratio: [76, 75] as Ratio,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo<{ comma: true }>,
                            cents: 22.9305875372457 as Cents,
                            name: "19/25C" as Name<SagittalComma>,
                            n2d3p9: 83.564815 as N2D3P9,
                        } as AnalyzedComma & { id: Id<SagittalComma> },
                        id: 47 as Id<JiSymbol>, // not the best example since id and mina are the same up to this point
                        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
                    },
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Cents,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / ULTRINA as Multiplier<Ina>,
                        ascii: "'/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        smallestJiSymbolSubset: SymbolSubset.HERCULEAN,
                        mina: 48 as Mina,
                        analyzedPrimaryComma: {
                            id: 48 as Id<SagittalComma>,
                            apotomeSlope: 10.555481691145998 as ApotomeSlope,
                            twoThreeFreeClass: { monzo: [] as Monzo } as TwoThreeFreeClass,
                            twoThreeFreeSopfr: 0 as Sopfr<5>,
                            limit: 3 as Prime,
                            ratio: [531441, 524288] as Ratio,
                            monzo: [-19, 12] as Monzo<{ comma: true }>,
                            cents: 23.460010384649 as Cents,
                            name: "3C" as Name<SagittalComma>,
                            n2d3p9: 1 as N2D3P9,
                        } as AnalyzedComma & { id: Id<SagittalComma> },
                        id: 48 as Id<JiSymbol>,
                        elements: ["'|", "/|"] as SymbolLongAscii[],
                    },
                ],
                [ Level.EXTREME ]: [
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Cents,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / MINA as Multiplier<Ina>,
                        ascii: ".)/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        smallestJiSymbolSubset: SymbolSubset.HERCULEAN,
                        mina: 47 as Mina,
                        analyzedPrimaryComma: {
                            id: 47 as Id<SagittalComma>,
                            apotomeSlope: -2.411919815346935 as ApotomeSlope,
                            twoThreeFreeClass: { monzo: [0, 0, 2, 0, 0, 0, 0, -1] } as TwoThreeFreeClass,
                            twoThreeFreeSopfr: 29 as Sopfr<5>,
                            limit: 19 as Prime,
                            ratio: [76, 75] as Ratio,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo<{ comma: true }>,
                            cents: 22.9305875372457 as Cents,
                            name: "19/25C" as Name<SagittalComma>,
                            n2d3p9: 83.564815 as N2D3P9,
                        } as AnalyzedComma & { id: Id<SagittalComma> },
                        id: 47 as Id<JiSymbol>,
                        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
                    },
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Cents,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / MINA as Multiplier<Ina>,
                        ascii: "'/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        smallestJiSymbolSubset: SymbolSubset.HERCULEAN,
                        mina: 48 as Mina,
                        analyzedPrimaryComma: {
                            id: 48 as Id<SagittalComma>,
                            apotomeSlope: 10.555481691145998 as ApotomeSlope,
                            twoThreeFreeClass: { monzo: [] as Monzo } as TwoThreeFreeClass,
                            twoThreeFreeSopfr: 0 as Sopfr<5>,
                            limit: 3 as Prime,
                            ratio: [531441, 524288] as Ratio,
                            monzo: [-19, 12] as Monzo<{ comma: true }>,
                            cents: 23.460010384649 as Cents,
                            name: "3C" as Name<SagittalComma>,
                            n2d3p9: 1 as N2D3P9,
                        } as AnalyzedComma & { id: Id<SagittalComma> },
                        id: 48 as Id<JiSymbol>,
                        elements: ["'|", "/|"] as SymbolLongAscii[],
                    },
                ],
                [ Level.INSANE ]: [
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Cents,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / TINA as Multiplier<Ina>,
                        ascii: ".)/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 47 as Mina,
                        smallestJiSymbolSubset: SymbolSubset.HERCULEAN,
                        id: 47 as Id<JiSymbol>,
                        analyzedPrimaryComma: {
                            id: 47 as Id<SagittalComma>,
                            apotomeSlope: -2.411919815346935 as ApotomeSlope,
                            twoThreeFreeClass: { monzo: [0, 0, 2, 0, 0, 0, 0, -1] } as TwoThreeFreeClass,
                            twoThreeFreeSopfr: 29 as Sopfr<5>,
                            limit: 19 as Prime,
                            ratio: [76, 75] as Ratio,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo<{ comma: true }>,
                            cents: 22.9305875372457 as Cents,
                            name: "19/25C" as Name<SagittalComma>,
                            n2d3p9: 83.564815 as N2D3P9,
                        } as AnalyzedComma & { id: Id<SagittalComma> },
                        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
                    },
                    {
                        introducingLevel: Level.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Cents,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / TINA as Multiplier<Ina>,
                        ascii: "'/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        mina: 48 as Mina,
                        smallestJiSymbolSubset: SymbolSubset.HERCULEAN,
                        id: 48 as Id<JiSymbol>,
                        analyzedPrimaryComma: {
                            id: 48 as Id<SagittalComma>,
                            apotomeSlope: 10.555481691145998 as ApotomeSlope,
                            twoThreeFreeClass: { monzo: [] as Monzo } as TwoThreeFreeClass,
                            twoThreeFreeSopfr: 0 as Sopfr<5>,
                            limit: 3 as Prime,
                            ratio: [531441, 524288] as Ratio,
                            monzo: [-19, 12] as Monzo<{ comma: true }>,
                            cents: 23.460010384649 as Cents,
                            name: "3C" as Name<SagittalComma>,
                            n2d3p9: 1 as N2D3P9,
                        } as AnalyzedComma & { id: Id<SagittalComma> },
                        elements: ["'|", "/|"] as SymbolLongAscii[],
                    },
                ],
            },
            lesserBoundedMina: 47 as Mina,
            greaterBoundedMina: 48 as Mina,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
