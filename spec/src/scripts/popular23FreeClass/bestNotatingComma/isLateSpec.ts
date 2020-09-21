import { Comma } from "../../../../../src/general/music/ji"
import { computeIsLate } from "../../../../../src/scripts/popular23FreeClass/bestNotatingComma/isLate"

describe("computeIsLate", (): void => {
    it("return false if the comma does not have less ATE than the existing best comma", (): void => {
        const notatingComma = { monzo: [-9, 6, 1, -1] } as Comma
        const bestNotatingComma = { monzo: [10, -6, 1, -1] } as Comma

        const actual = computeIsLate(notatingComma, bestNotatingComma)

        expect(actual).toBeFalsy()
    })

    it("return true if the comma has less ATE than the existing best comma", (): void => {
        const notatingComma = { monzo: [10, -6, 1, -1] } as Comma
        const bestNotatingComma = { monzo: [-9, 6, 1, -1] } as Comma

        const actual = computeIsLate(notatingComma, bestNotatingComma)

        expect(actual).toBeTruthy()
    })
})
