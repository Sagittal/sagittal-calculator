import {Name} from "../../../../../../../src/general"
import {Minas} from "../../../../../../../src/sagittal"
import {formatMinaName} from "../../../../../../../src/scripts/jiNotationBoundClass/io/terminal"

describe("formatMinaName", (): void => {
    it("returns a whole number with no decimal positions for whole minas", (): void => {
        expect(formatMinaName("110" as Name<Minas>)).toBe("110")
    })

    it("shifts over 2-digit numbers", (): void => {
        expect(formatMinaName("50" as Name<Minas>)).toBe(" 50")
    })

    it("shifts over 1-digit numbers", (): void => {
        expect(formatMinaName("6" as Name<Minas>)).toBe("  6")
    })

    it("returns a number with three decimal positions for split minas", (): void => {
        expect(formatMinaName("51.459236" as Name<Minas>)).toBe(" 51.459")
    })

    it("when it includes decimal places, always includes three", (): void => {
        expect(formatMinaName("78.390035" as Name<Minas>)).toBe(" 78.390")
    })

    it("returns a blank string for the final JI notation bound class (when one of the minas is undefined)               ", (): void => {
        expect(formatMinaName(undefined)).toBe("       ")
    })
})
