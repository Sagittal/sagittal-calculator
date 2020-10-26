import {Accidental, Aim, Compatible, Flavor, SymbolClassId} from "../../../../../src/sagittal/accidental"
import {HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {computeEvoAccidentalFromCaptureZone} from "../../../../../src/sagittal/accidental/flavor/evo"
import {getCore, Shafts} from "../../../../../src/sagittal/accidental/symbol"
import {BoundClassId} from "../../../../../src/sagittal/bound"
import {CaptureZone} from "../../../../../src/sagittal/notations"
import {
    SECTION_N1A,
    SECTION_N1T,
    SECTION_N2A,
    SECTION_N2T,
    SECTION_P1A,
    SECTION_P1T,
    SECTION_P2A,
    SECTION_P2T,
} from "../../../../../src/sagittal/notations/sections"

describe("computeEvoAccidentalFromCaptureZone", (): void => {
    it("works for section P1A", (): void => {
        const captureZone: CaptureZone = {
            boundClassId: BoundClassId.MINA_88,
            section: SECTION_P1A,
            symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
        }

        const actual = computeEvoAccidentalFromCaptureZone(captureZone)

        const expected = {
            ...getCore(HeadId.DOUBLE_LEFT_BARB),
        } as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section P1T, in the area with a downward symbol accompanied by a conventional sharp", (): void => {
        const captureZone: CaptureZone = {
            boundClassId: BoundClassId.MINA_88,
            section: SECTION_P1T,
            symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
        }

        const actual = computeEvoAccidentalFromCaptureZone(captureZone)

        const expected = {
            ...getCore(HeadId.DOUBLE_LEFT_BARB, Shafts.SINGLE, Aim.DOWN),
            compatible: Compatible.SHARP,
        } as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section P1T, in the area where a single-shafted symbol results", (): void => {
        const captureZone: CaptureZone = {
            boundClassId: BoundClassId.MINA_110,
            section: SECTION_P1T,
            symbolClassId: SymbolClassId.DOUBLE_BARB,
        }

        const actual = computeEvoAccidentalFromCaptureZone(captureZone)

        const expected = {
            ...getCore(HeadId.DOUBLE_ARC),
        } as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section P2A", (): void => {
        const captureZone: CaptureZone = {
            boundClassId: BoundClassId.MINA_88,
            section: SECTION_P2A,
            symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
        }

        const actual = computeEvoAccidentalFromCaptureZone(captureZone)

        const expected = {
            ...getCore(HeadId.DOUBLE_LEFT_BARB),
            compatible: Compatible.SHARP,
        } as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section P2T, in the area with a downward symbol and by a conventional double sharp", (): void => {
        const captureZone: CaptureZone = {
            boundClassId: BoundClassId.MINA_88,
            section: SECTION_P2T,
            symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
        }

        const actual = computeEvoAccidentalFromCaptureZone(captureZone)

        const expected = {
            ...getCore(HeadId.DOUBLE_LEFT_BARB, Shafts.SINGLE, Aim.DOWN),
            compatible: Compatible.DOUBLE_SHARP,
        } as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section P2T, in the area with a symbol and a conventional sharp", (): void => {
        const captureZone: CaptureZone = {
            boundClassId: BoundClassId.MINA_110,
            section: SECTION_P2T,
            symbolClassId: SymbolClassId.DOUBLE_BARB,
        }

        const actual = computeEvoAccidentalFromCaptureZone(captureZone)

        const expected = {
            ...getCore(HeadId.DOUBLE_ARC),
            compatible: Compatible.SHARP,
        } as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N1A", (): void => {
        const captureZone: CaptureZone = {
            boundClassId: BoundClassId.MINA_88,
            section: SECTION_N1A,
            symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
        }

        const actual = computeEvoAccidentalFromCaptureZone(captureZone)

        const expected = {
            ...getCore(HeadId.DOUBLE_LEFT_BARB, Shafts.SINGLE, Aim.DOWN),
        } as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N1T, in the area where an upward symbol accompanied by a flat results", (): void => {
        const captureZone: CaptureZone = {
            boundClassId: BoundClassId.MINA_88,
            section: SECTION_N1T,
            symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
        }

        const actual = computeEvoAccidentalFromCaptureZone(captureZone)

        const expected = {
            ...getCore(HeadId.DOUBLE_LEFT_BARB),
            compatible: Compatible.FLAT,
        } as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N1T, in the area where a single-shafted symbol results", (): void => {
        const captureZone: CaptureZone = {
            boundClassId: BoundClassId.MINA_110,
            section: SECTION_N1T,
            symbolClassId: SymbolClassId.DOUBLE_BARB,
        }

        const actual = computeEvoAccidentalFromCaptureZone(captureZone)

        const expected = {
            ...getCore(HeadId.DOUBLE_ARC, Shafts.SINGLE, Aim.DOWN),
        } as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N2A", (): void => {
        const captureZone: CaptureZone = {
            boundClassId: BoundClassId.MINA_88,
            section: SECTION_N2A,
            symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
        }

        const actual = computeEvoAccidentalFromCaptureZone(captureZone)

        const expected = {
            ...getCore(HeadId.DOUBLE_LEFT_BARB, Shafts.SINGLE, Aim.DOWN),
            compatible: Compatible.FLAT,
        } as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N2T, in the area where an upward symbol accompanied by a double flat results", (): void => {
        const captureZone: CaptureZone = {
            boundClassId: BoundClassId.MINA_88,
            section: SECTION_N2T,
            symbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
        }

        const actual = computeEvoAccidentalFromCaptureZone(captureZone)

        const expected = {
            ...getCore(HeadId.DOUBLE_LEFT_BARB),
            compatible: Compatible.DOUBLE_FLAT,
        } as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N2T, in the area where a downward symbol accompanied by a conventional flat results               ", (): void => {
        const captureZone: CaptureZone = {
            boundClassId: BoundClassId.MINA_110,
            section: SECTION_N2T,
            symbolClassId: SymbolClassId.DOUBLE_BARB,
        }

        const actual = computeEvoAccidentalFromCaptureZone(captureZone)

        const expected = {
            ...getCore(HeadId.DOUBLE_ARC, Shafts.SINGLE, Aim.DOWN),
            compatible: Compatible.FLAT,
        } as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })
})
