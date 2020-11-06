import {Cents} from "../../../../../../src/general/music"
import {computeCentsError} from "../../../../../../src/sagittal/ji/badness/error"
import {SEMITINA} from "../../../../../../src/scripts/jiPitch/semitinaOccams"

describe("computeCentsError", (): void => {
    it("checks out against Dave's spreadsheet", (): void => {
        const cents = 0.081 as Cents

        const actual = computeCentsError(cents, SEMITINA)

        const expected = 0.152820
        expect(actual).toBeCloseTo(expected)
    })

    it("another example, close to the max", (): void => {
        const cents = 0.106 as Cents

        const actual = computeCentsError(cents, SEMITINA)

        const expected = 0.491372
        expect(actual).toBeCloseTo(expected)
    })

    it("another example, almost exactly a semitina", (): void => {
        const cents = 0.492 as Cents

        const actual = computeCentsError(cents, SEMITINA)

        const expected = 0.002313
        expect(actual).toBeCloseTo(expected)
    })
})
