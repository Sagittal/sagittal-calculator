import { Decimal } from "../../../../src/general/math/numeric/decimal"
import { dividePitch } from "../../../../src/general/music"
import { APOTOME, HALF_APOTOME } from "../../../../src/sagittal"

describe("dividePitch", (): void => {
    it("returns the proportion the part pitch is of the whole pitch", (): void => {
        const actual = dividePitch(HALF_APOTOME, APOTOME)

        const expected = 0.5 as Decimal<{ rational: false }>
        expect(actual).toBeCloseTo(expected)
    })
})
