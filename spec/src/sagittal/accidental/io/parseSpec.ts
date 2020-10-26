import {getArm} from "../../../../../src/sagittal/accidental/flacco/arm"
import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco/types"
import {Ascii, parseAscii} from "../../../../../src/sagittal/accidental/io"
import {Aim, getCore, Sagittal, Shafts} from "../../../../../src/sagittal/accidental/symbol"

describe("parseAscii", (): void => {
    it("parses a sagittal correctly into its arm and core", (): void => {
        const ascii = ",'/|)" as Ascii

        const actual = parseAscii(ascii)

        const expected = {
            arm: getArm(ArmId.WING_FROM_TICK),
            core: getCore(HeadId.BARB_AND_ARC),
        } as Sagittal
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const ascii = "(|//|)" as Ascii

        const actual = parseAscii(ascii)

        const expected = {} as Sagittal
        expect(actual).toEqual(expected)
    })

    it("works for a sagittal aiming down with multiple shafts", (): void => {
        const ascii = "~!!!" as Ascii

        const actual = parseAscii(ascii)

        const expected = {
            core: getCore(HeadId.LEFT_BOATHOOK, Shafts.TRIPLE, Aim.DOWN),
        } as Sagittal
        expect(actual).toEqual(expected)
    })
})
