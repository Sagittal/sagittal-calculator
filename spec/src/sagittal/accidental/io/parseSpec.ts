import {ARMS} from "../../../../../src/sagittal/accidental/flacco/arms"
import {ArmName} from "../../../../../src/sagittal/accidental/flacco/types"
import {Ascii, parseAscii} from "../../../../../src/sagittal/accidental/io"
import {CoreName, CORES, Symbol} from "../../../../../src/sagittal/accidental/symbol"

describe("parseAscii", (): void => {
    it("parses a symbol correctly into its arm and core", (): void => {
        const ascii = ",'/|)" as Ascii

        const actual = parseAscii(ascii)

        const expected = {
            arm: ARMS[ArmName.WING_AGAINST_TICK_WITH],
            core: CORES[CoreName.BARB_AND_ARC_UP],
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
            core: CORES[CoreName.LEFT_BOATHOOK_TRIPLE_DOWN],
        } as Symbol
        expect(actual).toEqual(expected)
    })
})
