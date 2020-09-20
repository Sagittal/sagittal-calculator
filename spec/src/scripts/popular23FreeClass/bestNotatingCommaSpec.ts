// TODO: break out useLate and useLaas and putting these into their own folders, and test them
//  along with extracting some of the bigger chunks in if/else branches on .useBestNotatingCommas

import { Comma } from "../../../../src/general/music/ji"
import { computeBestNotatingComma } from "../../../../src/scripts/popular23FreeClass/bestNotatingComma"
import { popular23FreeClassesScriptGroupSettings } from "../../../../src/scripts/popular23FreeClass/globals"

describe("computeBestNotatingComma", (): void => {
    it("returns, of the notating commas, the 'best' one (with the LAAS (least abs apotome slope))", (): void => {
        const notatingCommas = [
            { monzo: [ 10, -6, 1, -1 ] }, { monzo: [ -9, 6, 1, -1 ] }
        ] as Comma[]

        const actual = computeBestNotatingComma(notatingCommas)

        const expected = { monzo: [ -9, 6, 1, -1 ] } as Comma
        expect(actual).toEqual(expected)
    })

    it("also works for LATE (least abs 3-exponent", (): void => {
        const notatingCommas = [
            { monzo: [ 10, -6, 1, -1 ] }, { monzo: [ -9, 6, 1, -1 ] }

        ] as Comma[]

        popular23FreeClassesScriptGroupSettings.useLate = true
        const actual = computeBestNotatingComma(notatingCommas)

        const expected = { monzo: [ 10, -6, 1, -1 ] } as Comma
        expect(actual).toEqual(expected)
    })
})
