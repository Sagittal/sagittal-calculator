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
    Max,
    Monzo,
    Multiplier,
    Name,
    Prime,
    Quotient,
    Sopfr,
    Two3FreeClass,
} from "../../../../../../src/general"
import {
    ApotomeSlope,
    Ascii,
    BoundClassId,
    BoundType,
    CommaClassId,
    Ina,
    N2D3P9,
    TINA,
    Unicode,
} from "../../../../../../src/sagittal"
import {SymbolSubset} from "../../../../../../src/sagittal/accidental"
import {JiNotationBoundClass, JiNotationLevel, Mina} from "../../../../../../src/sagittal/notations/ji"
import {MINA, ULTRINA} from "../../../../../../src/sagittal/notations/ji/intervals"
import {extractJiNotationBoundClassIdentifiers} from "../../../../../../src/scripts/jiNotationBoundClass/io/terminal/boundClassIdentifiers"
import {JiNotationBoundClassIdentifiers} from "../../../../../../src/scripts/jiNotationBoundClass/io/terminal/types"
import {jiNotationBoundClassFixture} from "../../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("extractJiNotationBoundIdentifiers", (): void => {
    const jiNotationBoundClass: JiNotationBoundClass = {
        ...jiNotationBoundClassFixture,
        pitch: computePitchFromCents(23.116419 as Cents),
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
        boundType: BoundType.INA_MIDPOINT,
    }
    const boundClassId = BoundClassId.MINA_47

    it("returns helpful identifying information about the bound", (): void => {
        const actual: JiNotationBoundClassIdentifiers =
            extractJiNotationBoundClassIdentifiers([boundClassId, jiNotationBoundClass])

        const expected: JiNotationBoundClassIdentifiers = {
            extremeLevelLesserBoundedCommaClass: ".)/|" as Ascii,
            extremeLevelGreaterBoundedCommaClass: "'/|" as Ascii,
            cents: 23.116419 as Cents as Cents,
            boundedCommaClassInfoPairs: {
                boundClassId,
                [JiNotationLevel.ULTRA]: [
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Abs<Cents>,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / ULTRINA as Multiplier<Ina>,
                        representativeSagittal: {
                            ascii: ".)/|" as Ascii,
                            unicode: "" as Unicode,
                            smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        },
                        minaName: "47" as Name<Mina>,
                        commaAnalysis: {
                            apotomeSlope: -2.411919815346935 as ApotomeSlope,
                            aas: 2.411919815346935 as Abs<ApotomeSlope>,
                            ate: 1 as Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
                            two3FreeClassAnalysis: {
                                name: "{25/19}₂,₃" as Name<Two3FreeClass>,
                                two3FreeCopfr: 3 as Copfr<{rough: 5}>,
                                two3FreeSopfr: 29 as Sopfr<{rough: 5}>,
                                two3FreePrimeLimit: 19 as Max<Prime<{rough: 5}>>,
                                n2d3p9: 83.564815 as N2D3P9,
                                two3FreeClass: {
                                    monzo: [0, 0, 2, 0, 0, 0, 0, -1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                                } as Two3FreeClass,
                            },
                            quotient: [76, 75] as Quotient<{rational: true}>,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo<{rational: true}>,
                            decimal: 1.01333333302 as Decimal<{rational: true}>,
                            cents: 22.930587 as Cents,
                            name: "19/25C" as Name<Comma>,
                            pitch: {monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo<{rational: true}>} as Comma,
                        },
                        // Not the best example b/c ID and mina name are the same up to this point
                        id: CommaClassId._19_25_C,
                    },
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Abs<Cents>,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / ULTRINA as Multiplier<Ina>,
                        representativeSagittal: {
                            ascii: "'/|" as Ascii,
                            unicode: "" as Unicode,
                            smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        },
                        minaName: "48" as Name<Mina>,
                        commaAnalysis: {
                            apotomeSlope: 10.555481691145998 as ApotomeSlope,
                            aas: 10.555481691145998 as Abs<ApotomeSlope>,
                            ate: 12 as Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
                            two3FreeClassAnalysis: {
                                name: "{1}₂,₃" as Name<Two3FreeClass>,
                                two3FreeCopfr: 0 as Copfr<{rough: 5}>,
                                two3FreeSopfr: 0 as Sopfr<{rough: 5}>,
                                two3FreePrimeLimit: 1 as Max<Prime<{rough: 5}>>,
                                n2d3p9: 1 as N2D3P9,
                                two3FreeClass: {
                                    monzo: EMPTY_MONZO as Monzo<{rational: true}> as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                                } as Two3FreeClass,
                            },
                            quotient: [531441, 524288] as Quotient<{rational: true}>,
                            monzo: [-19, 12] as Monzo<{rational: true}>,
                            decimal: 1.01364326455 as Decimal<{rational: true}>,
                            cents: 23.460010 as Cents,
                            name: "3C" as Name<Comma>,
                            pitch: {monzo: [-19, 12] as Monzo<{rational: true}>} as Comma,
                        },
                        id: CommaClassId._1_C,
                    },
                ],
                [JiNotationLevel.EXTREME]: [
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Abs<Cents>,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / MINA as Multiplier<Ina>,
                        representativeSagittal: {
                            ascii: ".)/|" as Ascii,
                            unicode: "" as Unicode,
                            smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        },
                        minaName: "47" as Name<Mina>,
                        commaAnalysis: {
                            apotomeSlope: -2.411919815346935 as ApotomeSlope,
                            aas: 2.411919815346935 as Abs<ApotomeSlope>,
                            ate: 1 as Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
                            two3FreeClassAnalysis: {
                                name: "{25/19}₂,₃" as Name<Two3FreeClass>,
                                two3FreeCopfr: 3 as Copfr<{rough: 5}>,
                                two3FreeSopfr: 29 as Sopfr<{rough: 5}>,
                                two3FreePrimeLimit: 19 as Max<Prime<{rough: 5}>>,
                                n2d3p9: 83.564815 as N2D3P9,
                                two3FreeClass: {
                                    monzo: [0, 0, 2, 0, 0, 0, 0, -1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                                } as Two3FreeClass,
                            },
                            quotient: [76, 75] as Quotient<{rational: true}>,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo<{rational: true}>,
                            decimal: 1.01333333302 as Decimal<{rational: true}>,
                            cents: 22.930587 as Cents,
                            name: "19/25C" as Name<Comma>,
                            pitch: {monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo<{rational: true}>} as Comma,
                        },
                        id: CommaClassId._19_25_C,
                    },
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Abs<Cents>,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / MINA as Multiplier<Ina>,
                        representativeSagittal: {
                            ascii: "'/|" as Ascii,
                            unicode: "" as Unicode,
                            smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        },
                        minaName: "48" as Name<Mina>,
                        commaAnalysis: {
                            apotomeSlope: 10.555481691145998 as ApotomeSlope,
                            aas: 10.555481691145998 as Abs<ApotomeSlope>,
                            ate: 12 as Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
                            two3FreeClassAnalysis: {
                                name: "{1}₂,₃" as Name<Two3FreeClass>,
                                two3FreeCopfr: 0 as Copfr<{rough: 5}>,
                                two3FreeSopfr: 0 as Sopfr<{rough: 5}>,
                                two3FreePrimeLimit: 1 as Max<Prime<{rough: 5}>>,
                                n2d3p9: 1 as N2D3P9,
                                two3FreeClass: {
                                    monzo: EMPTY_MONZO as Monzo<{rational: true}> as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                                } as Two3FreeClass,
                            },
                            quotient: [531441, 524288] as Quotient<{rational: true}>,
                            monzo: [-19, 12] as Monzo<{rational: true}>,
                            decimal: 1.01364326455 as Decimal<{rational: true}>,
                            cents: 23.460010 as Cents,
                            name: "3C" as Name<Comma>,
                            pitch: {monzo: [-19, 12] as Monzo<{rational: true}>} as Comma,
                        },
                        id: CommaClassId._1_C,
                    },
                ],
                [JiNotationLevel.INSANE]: [
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Abs<Cents>,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / TINA as Multiplier<Ina>,
                        representativeSagittal: {
                            ascii: ".)/|" as Ascii,
                            unicode: "" as Unicode,
                            smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        },
                        minaName: "47" as Name<Mina>,
                        commaAnalysis: {
                            apotomeSlope: -2.411919815346935 as ApotomeSlope,
                            aas: 2.411919815346935 as Abs<ApotomeSlope>,
                            ate: 1 as Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
                            two3FreeClassAnalysis: {
                                name: "{25/19}₂,₃" as Name<Two3FreeClass>,
                                two3FreeCopfr: 3 as Copfr<{rough: 5}>,
                                two3FreeSopfr: 29 as Sopfr<{rough: 5}>,
                                two3FreePrimeLimit: 19 as Max<Prime<{rough: 5}>>,
                                n2d3p9: 83.564815 as N2D3P9,
                                two3FreeClass: {
                                    monzo: [0, 0, 2, 0, 0, 0, 0, -1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                                } as Two3FreeClass,
                            },
                            quotient: [76, 75] as Quotient<{rational: true}>,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo<{rational: true}>,
                            decimal: 1.01333333302 as Decimal<{rational: true}>,
                            cents: 22.930587 as Cents,
                            name: "19/25C" as Name<Comma>,
                            pitch: {monzo: [2, -1, -2, 0, 0, 0, 0, 1] as Monzo<{rational: true}>} as Comma,
                        },
                        id: CommaClassId._19_25_C,
                    },
                    {
                        introducingJiNotationLevel: JiNotationLevel.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Abs<Cents>,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / TINA as Multiplier<Ina>,
                        representativeSagittal: {
                            ascii: "'/|" as Ascii,
                            unicode: "" as Unicode,
                            smallestSymbolSubset: SymbolSubset.HERCULEAN,
                        },
                        minaName: "48" as Name<Mina>,
                        commaAnalysis: {
                            apotomeSlope: 10.555481691145998 as ApotomeSlope,
                            aas: 10.555481691145998 as Abs<ApotomeSlope>,
                            ate: 12 as Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
                            two3FreeClassAnalysis: {
                                name: "{1}₂,₃" as Name<Two3FreeClass>,
                                two3FreeCopfr: 0 as Copfr<{rough: 5}>,
                                two3FreeSopfr: 0 as Sopfr<{rough: 5}>,
                                two3FreePrimeLimit: 1 as Max<Prime<{rough: 5}>>,
                                n2d3p9: 1 as N2D3P9,
                                two3FreeClass: {
                                    monzo: EMPTY_MONZO as Monzo<{rational: true}> as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                                } as Two3FreeClass,
                            },
                            quotient: [531441, 524288] as Quotient<{rational: true}>,
                            monzo: [-19, 12] as Monzo<{rational: true}>,
                            decimal: 1.01364326455 as Decimal<{rational: true}>,
                            cents: 23.460010 as Cents,
                            name: "3C" as Name<Comma>,
                            pitch: {monzo: [-19, 12] as Monzo<{rational: true}>} as Comma,
                        },
                        id: CommaClassId._1_C,
                    },
                ],
            },
            lesserBoundedMinaName: "47" as Name<Mina>,
            greaterBoundedMinaName: "48" as Name<Mina>,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
