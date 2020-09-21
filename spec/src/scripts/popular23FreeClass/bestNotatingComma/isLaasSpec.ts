import { Comma } from "../../../../../src/general/music/ji"
import { computeIsLaas } from "../../../../../src/scripts/popular23FreeClass/bestNotatingComma/isLaas"

describe("computeIsLaas", (): void => {
    it("return true if the comma has less AAS than the existing best comma", (): void => {
        const notatingComma = { monzo: [-9, 6, 1, -1] } as Comma
        const bestNotatingComma = { monzo: [10, -6, 1, -1] } as Comma

        const actual = computeIsLaas(notatingComma, bestNotatingComma)

        expect(actual).toBeTruthy()
    })

    it("return false if the comma does not have less AAS than the existing best comma", (): void => {
        const notatingComma = { monzo: [10, -6, 1, -1] } as Comma
        const bestNotatingComma = { monzo: [-9, 6, 1, -1] } as Comma

        const actual = computeIsLaas(notatingComma, bestNotatingComma)

        expect(actual).toBeFalsy()
    })
})
