import {Accidental, Flavor} from "../../../../../src/sagittal/accidental"
import {HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {computeRevoAccidentalFromCaptureZone} from "../../../../../src/sagittal/accidental/flavor/revo"
import {Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {SymbolClassId} from "../../../../../src/sagittal/notation"
import {
    SECTION_N1A,
    SECTION_N1T,
    SECTION_N2A,
    SECTION_N2T,
    SECTION_P1A,
    SECTION_P1T,
    SECTION_P2A,
    SECTION_P2T,
} from "../../../../../src/sagittal/notation/sections"
import {computeSagittal} from "../../../../helpers/src/sagittal/accidental/sagittal"

describe("computeRevoAccidentalFromCaptureZone", (): void => {
    it("works for section P1A", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_P1A)

        const expected = {
            ...computeSagittal({headId: HeadId.DOUBLE_LEFT_BARB}),
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    it("works for section P1T, in the area where a double-shafted symbol results", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_P1T)

        const expected = {
            ...computeSagittal({headId: HeadId.DOUBLE_SCROLL, shafts: Shafts.DOUBLE}),
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    it("works for section P1T, in the area where a single-shafted symbol results", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_BARB

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_P1T)

        const expected = {
            ...computeSagittal({headId: HeadId.DOUBLE_ARC}),
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    it("works for section P2A", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_P2A)

        const expected = {
            ...computeSagittal({headId: HeadId.DOUBLE_LEFT_BARB, shafts: Shafts.TRIPLE}),
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    it("works for section P2T, in the area where an ex-shafted symbol results", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_P2T)

        const expected = {
            ...computeSagittal({headId: HeadId.DOUBLE_SCROLL, shafts: Shafts.EX}),
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    it("works for section P2T, in the area where a triple-shafted symbol results", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_BARB

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_P2T)

        const expected = {
            ...computeSagittal({headId: HeadId.DOUBLE_ARC, shafts: Shafts.TRIPLE}),
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N1A", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_N1A)

        const expected = {
            ...computeSagittal({headId: HeadId.DOUBLE_LEFT_BARB, down: true}),
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N1T, in the area where a double-shafted symbol results", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_N1T)

        const expected = {
            ...computeSagittal({headId: HeadId.DOUBLE_SCROLL, shafts: Shafts.DOUBLE, down: true}),
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N1T, in the area where a single-shafted symbol results", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_BARB

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_N1T)

        const expected = {
            ...computeSagittal({headId: HeadId.DOUBLE_ARC, down: true}),
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N2A", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_N2A)

        const expected = {
            ...computeSagittal({headId: HeadId.DOUBLE_LEFT_BARB, shafts: Shafts.TRIPLE, down: true}),
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N2T, in the area where an ex-shafted symbol results", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_N2T)

        const expected = {
            ...computeSagittal({headId: HeadId.DOUBLE_SCROLL, shafts: Shafts.EX, down: true}),
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N2T, in the area where a triple-shafted symbol results", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_BARB

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_N2T)

        const expected = {
            ...computeSagittal({headId: HeadId.DOUBLE_ARC, shafts: Shafts.TRIPLE, down: true}),
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    it("works for the natural symbol (in the zone just above the natural)", (): void => {
        const symbolClassId = SymbolClassId.NULL

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_P1A)

        const expected = {} as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    it("works for the natural symbol (in the zone just below the natural)", (): void => {
        const symbolClassId = SymbolClassId.NULL

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_N1A)

        const expected = {} as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    it("works for the down apotome symbol (in the zone just above it)", (): void => {
        const symbolClassId = SymbolClassId.NULL

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_N1T)

        const expected = {
            ...computeSagittal({headId: HeadId.DOUBLE_BARB, shafts: Shafts.DOUBLE, down: true})
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })

    it("works for the down apotome symbol (in the zone just above it)", (): void => {
        const symbolClassId = SymbolClassId.NULL

        const actual = computeRevoAccidentalFromCaptureZone(symbolClassId, SECTION_N2A)

        const expected = {
            ...computeSagittal({headId: HeadId.DOUBLE_BARB, shafts: Shafts.DOUBLE, down: true})
        } as Accidental<Flavor.REVO>
        expect(actual).toEqual(expected)
    })
})
