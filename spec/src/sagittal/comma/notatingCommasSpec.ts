import { Abs, Cents, Max, Monzo } from "../../../../src/general"
import { ApotomeSlope, computeNotatingCommas } from "../../../../src/sagittal"
import { Comma } from "../../../../src/sagittal/types"

describe("computeNotatingCommas", () => {
    // TODO: this used to say it got the symbol if Sagittal JI notates it,
    //  but I'm not so sure it actually does that anymore ... even before this refactor
    it("given a monzo, returns a list of the commas that notate it", () => {
        const monzo = [0, 0, 0, 0, 1] as Monzo

        const actual = computeNotatingCommas(monzo)

        const expected = [
            { monzo: [14, -11, 0, 0, 1] },
            { monzo: [-5, 1, 0, 0, 1] },
            { monzo: [13, -6, 0, 0, -1] },
        ] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("can filter", () => {
        const monzo = [0, 0, 0, 0, 1] as Monzo
        const maxAbsoluteApotomeSlope = 9 as Max<Abs<ApotomeSlope>>
        const maxCents = 55 as Max<Cents>

        const actual = computeNotatingCommas(monzo, { maxAbsoluteApotomeSlope, maxCents })

        const expected = [
            { monzo: [-5, 1, 0, 0, 1] },
            { monzo: [13, -6, 0, 0, -1] },
        ] as Comma[]
        expect(actual).toEqual(expected)
    })
})
