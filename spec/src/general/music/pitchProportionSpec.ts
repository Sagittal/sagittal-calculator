import { Decimal } from "../../../../src/general/math/numeric/decimal"
import { computePitchProportion } from "../../../../src/general/music"
import { APOTOME, HALF_APOTOME } from "../../../../src/sagittal"

describe("computePitchProportion", (): void => {
    it("returns the proportion the part pitch is of the whole pitch", (): void => {
        const actual = computePitchProportion(HALF_APOTOME, APOTOME)

        const expected = 0.5 as Decimal<{ rational: false }>
        expect(actual).toBeCloseTo(expected)
    })
})
