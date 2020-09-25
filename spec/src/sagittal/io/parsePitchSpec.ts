import { Io } from "../../../../src/general/io"
import { Decimal } from "../../../../src/general/math"
import { Monzo } from "../../../../src/general/math/rational/monzo"
import { Ratio } from "../../../../src/general/math/rational/ratio"
import { parsePitch } from "../../../../src/sagittal/io"

describe("parsePitch", (): void => {
    it("works when given as a monzo", (): void => {
        const pitchText = "[0, 1, -2, 1⟩" as Io

        const actual = parsePitch(pitchText)

        const expected = { monzo: [0, 1, -2, 1] as Monzo }
        expect(actual).toEqual(expected)
    })

    it("works when given as a ratio", (): void => {
        const pitchText = "7/2" as Io

        const actual = parsePitch(pitchText)

        const expected = { ratio: [7, 2] as Ratio }
        expect(actual).toEqual(expected)
    })

    it("works when given as a comma name", (): void => {
        const pitchText = "3A" as Io

        const actual = parsePitch(pitchText)

        const expected = { monzo: [-11, 7] as Monzo }
        expect(actual).toEqual(expected)
    })

    it("works when given as cents, saving it as decimal", (): void => {
        const pitchText = "33.4c" as Io

        const actual = parsePitch(pitchText)

        const expected = { decimal: 1.019480 as Decimal }
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when given as a decimal", (): void => {
        const pitchText = "3.4" as Io

        const actual = parsePitch(pitchText)

        const expected = { decimal: 3.4 as Decimal }
        expect(actual).toEqual(expected)
    })
})
