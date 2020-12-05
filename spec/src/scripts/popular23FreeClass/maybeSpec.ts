import {Direction, Max, Monzo, Two3FreeClass} from "@sagittal/general"
import {N2D3P9} from "../../../../src/sagittal"
import {computeMaybePopular23FreeClass} from "../../../../src/scripts/popular23FreeClass/maybe"

describe("computeMaybePopular23FreeClass", (): void => {
    it("returns a popular 2,3-free class if the N2D3P9 is under the max and the monzo is super", (): void => {
        const two3FreeMonzo = [0, 0, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computeMaybePopular23FreeClass({monzo: two3FreeMonzo} as Two3FreeClass, maxN2D3P9)

        expect(actual).toBeDefined()
    })

    it("returns undefined if the N2D3P9 is over the max", (): void => {
        const two3FreeMonzo = [0, 0, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>
        const maxN2D3P9 = 1 as Max<N2D3P9>

        const actual = computeMaybePopular23FreeClass({monzo: two3FreeMonzo} as Two3FreeClass, maxN2D3P9)

        expect(actual).toBeUndefined()
    })
})
