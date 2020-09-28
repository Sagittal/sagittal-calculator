// tslint:disable max-line-length

import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Decimal,
    Direction,
    Exponent,
    Id,
    Integer,
    Multiplier,
    Name,
    Prime,
    RationalMonzo,
    RationalQuotient,
    Sopfr,
} from "../../../../../../src/general"
import {
    ApotomeSlope,
    BoundType,
    Ina,
    N2D3P9,
    PrimaryComma,
    SymbolClass,
    SymbolLongAscii,
    TINA,
    TwoThreeFreeClassAnalysis,
} from "../../../../../../src/sagittal"
import { SymbolUnicode } from "../../../../../../src/sagittal/io"
import { SymbolSubset } from "../../../../../../src/sagittal/notations"
import { JiNotationBound, JiNotationLevel, Mina } from "../../../../../../src/sagittal/notations/ji"
import { MINA, ULTRINA } from "../../../../../../src/sagittal/notations/ji/intervals"
import { PrimaryCommaAnalysis } from "../../../../../../src/sagittal/notations/types"
import { extractJiNotationBoundIdentifiers } from "../../../../../../src/scripts/jiNotationBound/io/terminal/boundIdentifiers"
import { JiNotationBoundIdentifiers } from "../../../../../../src/scripts/jiNotationBound/io/terminal/types"
import { jiNotationBoundFixture } from "../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("extractJiNotationBoundIdentifiers", (): void => {
    const jiNotationBound: JiNotationBound = {
        ...jiNotationBoundFixture,
        decimal: 1.01344211084 as Decimal,  // 23.116419¢
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
        id: 47 as Id<JiNotationBound>,
        boundType: BoundType.INA_MIDPOINT,
    }

    it("returns helpful identifying information about the bound", (): void => {
        const actual: JiNotationBoundIdentifiers = extractJiNotationBoundIdentifiers(jiNotationBound)

        const expected: JiNotationBoundIdentifiers = {
            extremeLevelLesserBoundedSymbolClass: ".)/|" as SymbolLongAscii,
            extremeLevelGreaterBoundedSymbolClass: "'/|" as SymbolLongAscii,
            cents: 23.116419 as Cents as Cents,
            boundedSymbolClassAnalyses: {
                id: 47 as Id<JiNotationBound>,
                [ JiNotationLevel.ULTRA ]: [
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Abs<Cents>,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / ULTRINA as Multiplier<Ina>,
                        ascii: ".)/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        minaName: "47" as Name<Mina>,
                        primaryCommaAnalysis: {
                            id: 47 as Id<PrimaryComma>,
                            apotomeSlope: -2.411919815346935 as ApotomeSlope,
                            aas: 2.411919815346935 as Abs<ApotomeSlope>,
                            ate: 1 as Abs<Integer & Exponent<3 & Prime>>,
                            twoThreeFreeClassAnalysis: {
                                twoThreeFreeCopfr: 3 as Copfr<{ rough: 5 }>,
                                twoThreeFreeSopfr: 29 as Sopfr<{ rough: 5 }>,
                                monzo: [0, 0, 2, 0, 0, 0, 0, -1] as RationalMonzo<{ rough: 5, direction: Direction.SUPER }>,
                                twoThreeFreePrimeLimit: 19 as Prime,
                                n2d3p9: 83.564815 as N2D3P9,
                            } as TwoThreeFreeClassAnalysis,
                            quotient: [76, 75] as RationalQuotient,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as RationalMonzo,
                            decimal: 1.01333333302 as Decimal,
                            cents: 22.930587 as Cents,
                            name: "19/25C" as Name<Comma>,
                        } as PrimaryCommaAnalysis,
                        // Not the best example b/c ID and mina name are the same up to this point
                        id: 47 as Id<SymbolClass>,
                        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
                    },
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Abs<Cents>,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / ULTRINA as Multiplier<Ina>,
                        ascii: "'/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        minaName: "48" as Name<Mina>,
                        primaryCommaAnalysis: {
                            id: 48 as Id<PrimaryComma>,
                            apotomeSlope: 10.555481691145998 as ApotomeSlope,
                            aas: 10.555481691145998 as Abs<ApotomeSlope>,
                            ate: 12 as Abs<Integer & Exponent<3 & Prime>>,
                            twoThreeFreeClassAnalysis: {
                                twoThreeFreeCopfr: 0 as Copfr<{ rough: 5 }>,
                                twoThreeFreeSopfr: 0 as Sopfr<{ rough: 5 }>,
                                monzo: [] as RationalMonzo as RationalMonzo<{ rough: 5, direction: Direction.SUPER }>,
                                twoThreeFreePrimeLimit: 1 as Prime,
                                n2d3p9: 1 as N2D3P9,
                            } as TwoThreeFreeClassAnalysis,
                            quotient: [531441, 524288] as RationalQuotient,
                            monzo: [-19, 12] as RationalMonzo,
                            decimal: 1.01364326455 as Decimal,
                            cents: 23.460010 as Cents,
                            name: "3C" as Name<Comma>,
                        } as PrimaryCommaAnalysis,
                        id: 48 as Id<SymbolClass>,
                        elements: ["'|", "/|"] as SymbolLongAscii[],
                    },
                ],
                [ JiNotationLevel.EXTREME ]: [
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Abs<Cents>,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / MINA as Multiplier<Ina>,
                        ascii: ".)/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        minaName: "47" as Name<Mina>,
                        primaryCommaAnalysis: {
                            id: 47 as Id<PrimaryComma>,
                            apotomeSlope: -2.411919815346935 as ApotomeSlope,
                            aas: 2.411919815346935 as Abs<ApotomeSlope>,
                            ate: 1 as Abs<Integer & Exponent<3 & Prime>>,
                            twoThreeFreeClassAnalysis: {
                                twoThreeFreeCopfr: 3 as Copfr<{ rough: 5 }>,
                                twoThreeFreeSopfr: 29 as Sopfr<{ rough: 5 }>,
                                monzo: [0, 0, 2, 0, 0, 0, 0, -1] as RationalMonzo<{ rough: 5, direction: Direction.SUPER }>,
                                twoThreeFreePrimeLimit: 19 as Prime,
                                n2d3p9: 83.564815 as N2D3P9,
                            } as TwoThreeFreeClassAnalysis,
                            quotient: [76, 75] as RationalQuotient,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as RationalMonzo,
                            decimal: 1.01333333302 as Decimal,
                            cents: 22.930587 as Cents,
                            name: "19/25C" as Name<Comma>,
                        } as PrimaryCommaAnalysis,
                        id: 47 as Id<SymbolClass>,
                        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
                    },
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Abs<Cents>,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / MINA as Multiplier<Ina>,
                        ascii: "'/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        minaName: "48" as Name<Mina>,
                        primaryCommaAnalysis: {
                            id: 48 as Id<PrimaryComma>,
                            apotomeSlope: 10.555481691145998 as ApotomeSlope,
                            aas: 10.555481691145998 as Abs<ApotomeSlope>,
                            ate: 12 as Abs<Integer & Exponent<3 & Prime>>,
                            twoThreeFreeClassAnalysis: {
                                twoThreeFreeCopfr: 0 as Copfr<{ rough: 5 }>,
                                twoThreeFreeSopfr: 0 as Sopfr<{ rough: 5 }>,
                                monzo: [] as RationalMonzo as RationalMonzo<{ rough: 5, direction: Direction.SUPER }>,
                                twoThreeFreePrimeLimit: 1 as Prime,
                                n2d3p9: 1 as N2D3P9,
                            } as TwoThreeFreeClassAnalysis,
                            quotient: [531441, 524288] as RationalQuotient,
                            monzo: [-19, 12] as RationalMonzo,
                            decimal: 1.01364326455 as Decimal,
                            cents: 23.460010 as Cents,
                            name: "3C" as Name<Comma>,
                        } as PrimaryCommaAnalysis,
                        id: 48 as Id<SymbolClass>,
                        elements: ["'|", "/|"] as SymbolLongAscii[],
                    },
                ],
                [ JiNotationLevel.INSANE ]: [
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Abs<Cents>,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / TINA as Multiplier<Ina>,
                        ascii: ".)/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        minaName: "47" as Name<Mina>,
                        smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        id: 47 as Id<SymbolClass>,
                        primaryCommaAnalysis: {
                            id: 47 as Id<PrimaryComma>,
                            apotomeSlope: -2.411919815346935 as ApotomeSlope,
                            aas: 2.411919815346935 as Abs<ApotomeSlope>,
                            ate: 1 as Abs<Integer & Exponent<3 & Prime>>,
                            twoThreeFreeClassAnalysis: {
                                twoThreeFreeCopfr: 3 as Copfr<{ rough: 5 }>,
                                twoThreeFreeSopfr: 29 as Sopfr<{ rough: 5 }>,
                                monzo: [0, 0, 2, 0, 0, 0, 0, -1] as RationalMonzo<{ rough: 5, direction: Direction.SUPER }>,
                                twoThreeFreePrimeLimit: 19 as Prime,
                                n2d3p9: 83.564815 as N2D3P9,
                            } as TwoThreeFreeClassAnalysis,
                            quotient: [76, 75] as RationalQuotient,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as RationalMonzo,
                            decimal: 1.01333333302 as Decimal,
                            cents: 22.930587 as Cents,
                            name: "19/25C" as Name<Comma>,
                        } as PrimaryCommaAnalysis,
                        elements: [".|", ")|", "/|"] as SymbolLongAscii[],
                    },
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Abs<Cents>,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / TINA as Multiplier<Ina>,
                        ascii: "'/|" as SymbolLongAscii,
                        unicode: "" as SymbolUnicode,
                        minaName: "48" as Name<Mina>,
                        smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        id: 48 as Id<SymbolClass>,
                        primaryCommaAnalysis: {
                            id: 48 as Id<PrimaryComma>,
                            apotomeSlope: 10.555481691145998 as ApotomeSlope,
                            aas: 10.555481691145998 as Abs<ApotomeSlope>,
                            ate: 12 as Abs<Integer & Exponent<3 & Prime>>,
                            twoThreeFreeClassAnalysis: {
                                twoThreeFreeCopfr: 0 as Copfr<{ rough: 5 }>,
                                twoThreeFreeSopfr: 0 as Sopfr<{ rough: 5 }>,
                                monzo: [] as RationalMonzo as RationalMonzo<{ rough: 5, direction: Direction.SUPER }>,
                                twoThreeFreePrimeLimit: 1 as Prime,
                                n2d3p9: 1 as N2D3P9,
                            } as TwoThreeFreeClassAnalysis,
                            quotient: [531441, 524288] as RationalQuotient,
                            monzo: [-19, 12] as RationalMonzo,
                            decimal: 1.01364326455 as Decimal,
                            cents: 23.460010 as Cents,
                            name: "3C" as Name<Comma>,
                        } as PrimaryCommaAnalysis,
                        elements: ["'|", "/|"] as SymbolLongAscii[],
                    },
                ],
            },
            lesserBoundedMinaName: "47" as Name<Mina>,
            greaterBoundedMinaName: "48" as Name<Mina>,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
