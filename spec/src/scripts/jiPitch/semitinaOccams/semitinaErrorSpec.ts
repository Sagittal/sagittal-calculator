import {Cents} from "../../../../../src/general/music"
import {computeSemitinaError, SemitinaZone} from "../../../../../src/scripts/jiPitch/semitinaOccams"

describe("computeSemitinaError", (): void => {
    it("checks out against Dave's spreadsheet", (): void => {
        const cents = 0.081 as Cents
        const semitinaZone = 1 as SemitinaZone

        const actual = computeSemitinaError(cents, semitinaZone)

        const expected = 0.152820
        expect(actual).toBeCloseTo(expected)
    })

    it("another example, close to the max", (): void => {
        const cents = 0.106 as Cents
        const semitinaZone = 2 as SemitinaZone

        const actual = computeSemitinaError(cents, semitinaZone)

        const expected = 0.491372
        expect(actual).toBeCloseTo(expected)
    })

    it("another example, almost exactly a semitina", (): void => {
        const cents = 0.492 as Cents
        const semitinaZone = 7 as SemitinaZone

        const actual = computeSemitinaError(cents, semitinaZone)

        const expected = 0.002313
        expect(actual).toBeCloseTo(expected)
    })
})
