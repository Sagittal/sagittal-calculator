// tslint:disable max-line-length

import {
    Abs,
    Cents,
    Comma,
    computePitchFromCents,
    Copfr,
    Decimal,
    Direction,
    EMPTY_MONZO,
    Exponent,
    Id,
    Max,
    Monzo,
    Multiplier,
    Name,
    Prime,
    Quotient,
    Sopfr,
    Two3FreeClass,
} from "../../../../../../src/general"
import { ApotomeSlope, Ascii, BoundType, CommaClass, Ina, N2D3P9, TINA } from "../../../../../../src/sagittal"
import { Unicode } from "../../../../../../src/sagittal/io"
import { SymbolSubset } from "../../../../../../src/sagittal/notations"
import { JiNotationBound, JiNotationLevel, Mina } from "../../../../../../src/sagittal/notations/ji"
import { MINA, ULTRINA } from "../../../../../../src/sagittal/notations/ji/intervals"
import { extractJiNotationBoundIdentifiers } from "../../../../../../src/scripts/jiNotationBound/io/terminal/boundIdentifiers"
import { JiNotationBoundIdentifiers } from "../../../../../../src/scripts/jiNotationBound/io/terminal/types"
import { jiNotationBoundFixture } from "../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("extractJiNotationBoundIdentifiers", (): void => {
    const jiNotationBound: JiNotationBound = {
        ...jiNotationBoundFixture,
        pitch: computePitchFromCents(23.116419 as Cents),
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
        id: 47 as Id<JiNotationBound>,
        boundType: BoundType.INA_MIDPOINT,
    }

    it("returns helpful identifying information about the bound", (): void => {
        const actual: JiNotationBoundIdentifiers = extractJiNotationBoundIdentifiers(jiNotationBound)

        const expected: JiNotationBoundIdentifiers = {
            extremeLevelLesserBoundedCommaClass: ".)/|" as Ascii,
            extremeLevelGreaterBoundedCommaClass: "'/|" as Ascii,
            cents: 23.116419 as Cents as Cents,
            boundedCommaClassAnalyses: {
                id: 47 as Id<JiNotationBound>,
                [ JiNotationLevel.ULTRA ]: [
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Abs<Cents>,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / ULTRINA as Multiplier<Ina>,
                        representativeSymbol: {
                            ascii: ".)/|" as Ascii,
                            unicode: "" as Unicode,
                            smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        },
                        minaName: "47" as Name<Mina>,
                        commaAnalysis: {
                            apotomeSlope: -2.411919815346935 as ApotomeSlope,
                            aas: 2.411919815346935 as Abs<ApotomeSlope>,
                            ate: 1 as Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>,
                            two3FreeClassAnalysis: {
                                name: "25/19₍₂,₃₎" as Name<Two3FreeClass>,
                                two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                                two3FreeSopfr: 29 as Sopfr<{ rough: 5 }>,
                                two3FreePrimeLimit: 19 as Max<Prime<{ rough: 5 }>>,
                                n2d3p9: 83.564815 as N2D3P9,
                                two3FreeClass: {
                                    monzo: [0, 0, 2, 0, 0, 0, 0, -1] as Monzo<{ rational: true, rough: 5, direction: Direction.SUPER }>,
                                } as Two3FreeClass,
                            },
                            quotient: [76, 75] as Quotient<{ rational: true }>,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                            decimal: 1.01333333302 as Decimal<{ rational: true }>,
                            cents: 22.930587 as Cents,
                            name: "19/25C" as Name<Comma>,
                            pitch: {
                                id: 47 as Id<CommaClass>,
                                monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                            } as CommaClass,
                        },
                        // Not the best example b/c ID and mina name are the same up to this point
                        id: 47 as Id<CommaClass>,
                    },
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Abs<Cents>,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / ULTRINA as Multiplier<Ina>,
                        representativeSymbol: {
                            ascii: "'/|" as Ascii,
                            unicode: "" as Unicode,
                            smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        },
                        minaName: "48" as Name<Mina>,
                        commaAnalysis: {
                            apotomeSlope: 10.555481691145998 as ApotomeSlope,
                            aas: 10.555481691145998 as Abs<ApotomeSlope>,
                            ate: 12 as Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>,
                            two3FreeClassAnalysis: {
                                name: "1/1₍₂,₃₎" as Name<Two3FreeClass>,
                                two3FreeCopfr: 0 as Copfr<{ rough: 5 }>,
                                two3FreeSopfr: 0 as Sopfr<{ rough: 5 }>,
                                two3FreePrimeLimit: 1 as Max<Prime<{ rough: 5 }>>,
                                n2d3p9: 1 as N2D3P9,
                                two3FreeClass: {
                                    monzo: EMPTY_MONZO as Monzo<{ rational: true }> as Monzo<{ rational: true, rough: 5, direction: Direction.SUPER }>,
                                } as Two3FreeClass,
                            },
                            quotient: [531441, 524288] as Quotient<{ rational: true }>,
                            monzo: [-19, 12] as Monzo<{ rational: true }>,
                            decimal: 1.01364326455 as Decimal<{ rational: true }>,
                            cents: 23.460010 as Cents,
                            name: "3C" as Name<Comma>,
                            pitch: {
                                id: 48 as Id<CommaClass>,
                                monzo: [-19, 12] as Monzo<{ rational: true }>,
                            } as CommaClass,
                        },
                        id: 48 as Id<CommaClass>,
                    },
                ],
                [ JiNotationLevel.EXTREME ]: [
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Abs<Cents>,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / MINA as Multiplier<Ina>,
                        representativeSymbol: {
                            ascii: ".)/|" as Ascii,
                            unicode: "" as Unicode,
                            smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        },
                        minaName: "47" as Name<Mina>,
                        commaAnalysis: {
                            apotomeSlope: -2.411919815346935 as ApotomeSlope,
                            aas: 2.411919815346935 as Abs<ApotomeSlope>,
                            ate: 1 as Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>,
                            two3FreeClassAnalysis: {
                                name: "25/19₍₂,₃₎" as Name<Two3FreeClass>,
                                two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                                two3FreeSopfr: 29 as Sopfr<{ rough: 5 }>,
                                two3FreePrimeLimit: 19 as Max<Prime<{ rough: 5 }>>,
                                n2d3p9: 83.564815 as N2D3P9,
                                two3FreeClass: {
                                    monzo: [0, 0, 2, 0, 0, 0, 0, -1] as Monzo<{ rational: true, rough: 5, direction: Direction.SUPER }>,
                                } as Two3FreeClass,
                            },
                            quotient: [76, 75] as Quotient<{ rational: true }>,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                            decimal: 1.01333333302 as Decimal<{ rational: true }>,
                            cents: 22.930587 as Cents,
                            name: "19/25C" as Name<Comma>,
                            pitch: {
                                id: 47 as Id<CommaClass>,
                                monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                            } as CommaClass,
                        },
                        id: 47 as Id<CommaClass>,
                    },
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Abs<Cents>,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / MINA as Multiplier<Ina>,
                        representativeSymbol: {
                            ascii: "'/|" as Ascii,
                            unicode: "" as Unicode,
                            smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        },
                        minaName: "48" as Name<Mina>,
                        commaAnalysis: {
                            apotomeSlope: 10.555481691145998 as ApotomeSlope,
                            aas: 10.555481691145998 as Abs<ApotomeSlope>,
                            ate: 12 as Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>,
                            two3FreeClassAnalysis: {
                                name: "1/1₍₂,₃₎" as Name<Two3FreeClass>,
                                two3FreeCopfr: 0 as Copfr<{ rough: 5 }>,
                                two3FreeSopfr: 0 as Sopfr<{ rough: 5 }>,
                                two3FreePrimeLimit: 1 as Max<Prime<{ rough: 5 }>>,
                                n2d3p9: 1 as N2D3P9,
                                two3FreeClass: {
                                    monzo: EMPTY_MONZO as Monzo<{ rational: true }> as Monzo<{ rational: true, rough: 5, direction: Direction.SUPER }>,
                                } as Two3FreeClass,
                            },
                            quotient: [531441, 524288] as Quotient<{ rational: true }>,
                            monzo: [-19, 12] as Monzo<{ rational: true }>,
                            decimal: 1.01364326455 as Decimal<{ rational: true }>,
                            cents: 23.460010 as Cents,
                            name: "3C" as Name<Comma>,
                            pitch: {
                                id: 48 as Id<CommaClass>,
                                monzo: [-19, 12] as Monzo<{ rational: true }>,
                            } as CommaClass,
                        },
                        id: 48 as Id<CommaClass>,
                    },
                ],
                [ JiNotationLevel.INSANE ]: [
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Abs<Cents>,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / TINA as Multiplier<Ina>,
                        representativeSymbol: {
                            ascii: ".)/|" as Ascii,
                            unicode: "" as Unicode,
                            smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        },
                        minaName: "47" as Name<Mina>,
                        commaAnalysis: {
                            apotomeSlope: -2.411919815346935 as ApotomeSlope,
                            aas: 2.411919815346935 as Abs<ApotomeSlope>,
                            ate: 1 as Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>,
                            two3FreeClassAnalysis: {
                                name: "25/19₍₂,₃₎" as Name<Two3FreeClass>,
                                two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                                two3FreeSopfr: 29 as Sopfr<{ rough: 5 }>,
                                two3FreePrimeLimit: 19 as Max<Prime<{ rough: 5 }>>,
                                n2d3p9: 83.564815 as N2D3P9,
                                two3FreeClass: {
                                    monzo: [0, 0, 2, 0, 0, 0, 0, -1] as Monzo<{ rational: true, rough: 5, direction: Direction.SUPER }>,
                                } as Two3FreeClass,
                            },
                            quotient: [76, 75] as Quotient<{ rational: true }>,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                            decimal: 1.01333333302 as Decimal<{ rational: true }>,
                            cents: 22.930587 as Cents,
                            name: "19/25C" as Name<Comma>,
                            pitch: {
                                id: 47 as Id<CommaClass>,
                                monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                            } as CommaClass,
                        },
                        id: 47 as Id<CommaClass>,
                    },
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Abs<Cents>,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / TINA as Multiplier<Ina>,
                        representativeSymbol: {
                            ascii: "'/|" as Ascii,
                            unicode: "" as Unicode,
                            smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        },
                        minaName: "48" as Name<Mina>,
                        commaAnalysis: {
                            apotomeSlope: 10.555481691145998 as ApotomeSlope,
                            aas: 10.555481691145998 as Abs<ApotomeSlope>,
                            ate: 12 as Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>,
                            two3FreeClassAnalysis: {
                                name: "1/1₍₂,₃₎" as Name<Two3FreeClass>,
                                two3FreeCopfr: 0 as Copfr<{ rough: 5 }>,
                                two3FreeSopfr: 0 as Sopfr<{ rough: 5 }>,
                                two3FreePrimeLimit: 1 as Max<Prime<{ rough: 5 }>>,
                                n2d3p9: 1 as N2D3P9,
                                two3FreeClass: {
                                    monzo: EMPTY_MONZO as Monzo<{ rational: true }> as Monzo<{ rational: true, rough: 5, direction: Direction.SUPER }>,
                                } as Two3FreeClass,
                            },
                            quotient: [531441, 524288] as Quotient<{ rational: true }>,
                            monzo: [-19, 12] as Monzo<{ rational: true }>,
                            decimal: 1.01364326455 as Decimal<{ rational: true }>,
                            cents: 23.460010 as Cents,
                            name: "3C" as Name<Comma>,
                            pitch: {
                                id: 48 as Id<CommaClass>,
                                monzo: [-19, 12] as Monzo<{ rational: true }>,
                            } as CommaClass,
                        },
                        id: 48 as Id<CommaClass>,
                    },
                ],
            },
            lesserBoundedMinaName: "47" as Name<Mina>,
            greaterBoundedMinaName: "48" as Name<Mina>,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
