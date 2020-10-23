import {getArm} from "../../../../../src/sagittal/accidental/flacco/arms"
import {ArmName, FlagComboName} from "../../../../../src/sagittal/accidental/flacco/types"
import {Ascii, parseAscii} from "../../../../../src/sagittal/accidental/io"
import {Aim, Shafts, Symbol} from "../../../../../src/sagittal/accidental/symbol"
import {getCore} from "../../../../../src/sagittal/accidental/symbol/core"

describe("parseAscii", (): void => {
    it("parses a symbol correctly into its arm and core", (): void => {
        const ascii = ",'/|)" as Ascii

        const actual = parseAscii(ascii)

        const expected = {
            arm: getArm(ArmName.WING_FROM_TICK),
            core: getCore(FlagComboName.BARB_AND_ARC),
        } as Symbol
        expect(actual).toEqual(expected)
    })

    it("works for the parenthetical natural symbol (the absence of a symbol)", (): void => {
        const ascii = "(|//|)" as Ascii

        const actual = parseAscii(ascii)

        const expected = {} as Symbol
        expect(actual).toEqual(expected)
    })

    it("works for a symbol aiming down with multiple shafts", (): void => {
        const ascii = "~!!!" as Ascii

        const actual = parseAscii(ascii)

        const expected = {
            core: getCore(FlagComboName.LEFT_BOATHOOK, Shafts.TRIPLE, Aim.DOWN),
        } as Symbol
        expect(actual).toEqual(expected)
    })
})
