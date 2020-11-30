import {SymbolClassId} from "../../../../../src/sagittal"
import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {computeSymbolClassIdAndSectionFromSagittal} from "../../../../../src/sagittal/accidental/pitch/symbolClassIdAndSectionFromSagittal"
import {Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {SECTION_P1T, SECTION_P2A, SECTION_P2T} from "../../../../../src/sagittal/notation"
import {SECTION_N1A, SECTION_P1A} from "../../../../../src/sagittal/notation/sections"
import {computeAccidental} from "../../../../helpers/src/sagittal/accidental/accidental"

describe("computeSymbolClassIdAndSectionFromSagittal", (): void => {
    it("works for a single-shaft sagittal below the half apotome", (): void => {
        const sagittal = computeAccidental({armId: ArmId.WING_AND_TICK, headId: HeadId.DOUBLE_BARB})

        const actual = computeSymbolClassIdAndSectionFromSagittal(sagittal)

        const expected = [SymbolClassId.WING_TICK_AND_DOUBLE_BARB as SymbolClassId, SECTION_P1A]
        expect(actual).toEqual(expected)
    })

    it("works for a single-shaft sagittal above the half apotome", (): void => {
        const sagittal = computeAccidental({headId: HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB})

        const actual = computeSymbolClassIdAndSectionFromSagittal(sagittal)

        const expected = [SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB as SymbolClassId, SECTION_P1T]
        expect(actual).toEqual(expected)
    })

    it("works for a double-shaft sagittal", (): void => {
        const sagittal = computeAccidental({headId: HeadId.RIGHT_BOATHOOK, shafts: Shafts.DOUBLE})

        const actual = computeSymbolClassIdAndSectionFromSagittal(sagittal)

        const expected = [SymbolClassId.BARB_AND_BOATHOOK as SymbolClassId, SECTION_P1T]
        expect(actual).toEqual(expected)
    })

    it("works for a triple-shaft sagittal below the half apotome", (): void => {
        const sagittal = computeAccidental({headId: HeadId.RIGHT_BOATHOOK, shafts: Shafts.TRIPLE})

        const actual = computeSymbolClassIdAndSectionFromSagittal(sagittal)

        const expected = [SymbolClassId.RIGHT_BOATHOOK as SymbolClassId, SECTION_P2A]
        expect(actual).toEqual(expected)
    })

    it("works for a triple-shaft sagittal above the half apotome", (): void => {
        const sagittal = computeAccidental({headId: HeadId.RIGHT_BARB_AND_ARC, shafts: Shafts.TRIPLE})

        const actual = computeSymbolClassIdAndSectionFromSagittal(sagittal)

        const expected = [SymbolClassId.LEFT_ARC_AND_BARB as SymbolClassId, SECTION_P2T]
        expect(actual).toEqual(expected)
    })

    it("works for an ex-shaft sagittal", (): void => {
        const sagittal = computeAccidental({headId: HeadId.DOUBLE_LEFT_BARB, shafts: Shafts.EX})

        const actual = computeSymbolClassIdAndSectionFromSagittal(sagittal)

        const expected = [SymbolClassId.DOUBLE_SCROLL as SymbolClassId, SECTION_P2T]
        expect(actual).toEqual(expected)
    })

    it("works for a downward sagittal", (): void => {
        const sagittal = computeAccidental({armId: ArmId.WING_AND_TICK, headId: HeadId.DOUBLE_BARB, down: true})

        const actual = computeSymbolClassIdAndSectionFromSagittal(sagittal)

        const expected = [SymbolClassId.WING_TICK_AND_DOUBLE_BARB as SymbolClassId, SECTION_N1A]
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const sagittal = undefined

        const actual = computeSymbolClassIdAndSectionFromSagittal(sagittal)

        const expected = [SymbolClassId.NULL as SymbolClassId, SECTION_P1A]
        expect(actual).toEqual(expected)
    })
})
