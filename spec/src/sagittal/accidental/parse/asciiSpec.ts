import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {Accidental, Compatible} from "../../../../../src/sagittal/accidental/flavor"
import {computeRevoAccidentalFromCaptureZone} from "../../../../../src/sagittal/accidental/flavor/revo"
import {Ascii, computeAccidentalAscii} from "../../../../../src/sagittal/accidental/glyph"
import {parseAscii} from "../../../../../src/sagittal/accidental/parse/ascii"
import {Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {CaptureZone} from "../../../../../src/sagittal/notation"
import {computeCaptureZones} from "../../../../../src/sagittal/notation/captureZones"
import {EXTREME_NOTATION} from "../../../../../src/sagittal/notations/ji/notations"
import {computeAccidental} from "../../../../helpers/src/sagittal/accidental/accidental"

describe("parseAscii", (): void => {
    it("parses a sagittal correctly into its arm and core", (): void => {
        const ascii = ",'/|)" as Ascii

        const actual = parseAscii(ascii)

        const expected = computeAccidental({armId: ArmId.ANTIWING_AND_TICK, headId: HeadId.BARB_AND_ARC})
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const ascii = "(|//|)" as Ascii

        const actual = parseAscii(ascii)

        const expected = computeAccidental()        // {}
        expect(actual).toEqual(expected)
    })

    it("works for a sagittal aiming down with multiple shafts", (): void => {
        const ascii = "~!!!" as Ascii

        const actual = parseAscii(ascii)

        const expected = computeAccidental({headId: HeadId.LEFT_BOATHOOK, shafts: Shafts.TRIPLE, down: true})
        expect(actual).toEqual(expected)
    })

    it("works for accidentals with compatibles", (): void => {
        const ascii = "/|b" as Ascii

        const actual = parseAscii(ascii)

        const expected = computeAccidental({headId: HeadId.LEFT_BARB, compatible: Compatible.FLAT})
        expect(actual).toEqual(expected)
    })

    it("works for this example? edge case?", (): void => {
        const ascii = "/|\\" as Ascii

        const actual = parseAscii(ascii)

        const expected = computeAccidental({headId: HeadId.DOUBLE_BARB})
        expect(actual).toEqual(expected)
    })

    it("doesn't mess this one up", (): void => {
        const ascii = "`.!(" as Ascii

        const actual = parseAscii(ascii)

        const expected = computeAccidental({
            headId: HeadId.RIGHT_SCROLL,
            armId: ArmId.ANTIWING_AND_TICK,
            down: true,
        })
        expect(actual).toEqual(expected)
    })

    it("works for all of them", (): void => {
        const captureZones = computeCaptureZones(EXTREME_NOTATION)

        const expecteds = [] as Accidental[]
        const actuals = captureZones.map(({symbolClassId, section}: CaptureZone): Ascii => {
            const revoAccidental = computeRevoAccidentalFromCaptureZone(symbolClassId, section)
            expecteds.push(revoAccidental)

            return computeAccidentalAscii(revoAccidental)
        })

        expecteds.forEach((expected: Accidental, index: number): void => {
            const ascii = actuals[index]

            const actual = parseAscii(ascii)

            expect(actual).toEqual(expected)
        })
    })
})
