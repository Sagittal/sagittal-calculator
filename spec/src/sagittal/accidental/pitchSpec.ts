import {Scamon} from "../../../../src/general/math/numeric/scamon"
import {computeJiPitchFromAccidental} from "../../../../src/sagittal/accidental"
import {ArmId, HeadId} from "../../../../src/sagittal/accidental/flacco"
import {Compatible} from "../../../../src/sagittal/accidental/flavor"
import {computeSymbolClassIdAndSectionFromSagittal} from "../../../../src/sagittal/accidental/pitch"
import {Shafts} from "../../../../src/sagittal/accidental/sagittal"
import {SymbolClassId} from "../../../../src/sagittal/notation"
import {
    SECTION_N1A,
    SECTION_P1A,
    SECTION_P1T,
    SECTION_P2A,
    SECTION_P2T,
} from "../../../../src/sagittal/notation/sections"
import {computeAccidental} from "../../../helpers/src/sagittal/accidental/accidental"

describe("computeJiPitchFromAccidental", (): void => {
    it("computes a JI pitch from an accidental", (): void => {
        const accidental = computeAccidental({
            armId: ArmId.BIRD,
            headId: HeadId.LEFT_SCROLL,
            compatible: Compatible.SHARP,
        })

        const actual = computeJiPitchFromAccidental(accidental)

        // ``)|# =
        // ``)|  [  -7  -1   1   1   1 ⟩    +
        //     # [ -11   7             ⟩
        const expected = {monzo: [-18, 6, 1, 1, 1]} as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })
})

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
