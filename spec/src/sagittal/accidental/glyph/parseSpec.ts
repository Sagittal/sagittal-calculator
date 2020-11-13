import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {Compatible} from "../../../../../src/sagittal/accidental/flavor"
import {Ascii, parseAscii} from "../../../../../src/sagittal/accidental/glyph"
import {Shafts} from "../../../../../src/sagittal/accidental/sagittal"
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

        const expected = undefined
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
})
