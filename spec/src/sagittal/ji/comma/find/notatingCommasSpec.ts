import { Abs, Cents, Comma, Max, Monzo } from "../../../../../../src/general"
import { ApotomeSlope, computeNotatingCommas } from "../../../../../../src/sagittal"

describe("computeNotatingCommas", (): void => {
    it("given a monzo, returns a list of the commas that notate it", (): void => {
        const monzo = [0, 0, 0, 0, 1] as Monzo

        const actual = computeNotatingCommas({ monzo })

        const expected = [
            { monzo: [14, -11, 0, 0, 1] },
            { monzo: [-5, 1, 0, 0, 1] },
            { monzo: [13, -6, 0, 0, -1] },
        ] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("can filter", (): void => {
        const monzo = [0, 0, 0, 0, 1] as Monzo
        const maxAas = 9 as Max<Abs<ApotomeSlope>>
        const maxCents = 55 as Max<Cents>

        const actual = computeNotatingCommas({ monzo }, { maxAas, maxCents })

        const expected = [
            { monzo: [-5, 1, 0, 0, 1] },
            { monzo: [13, -6, 0, 0, -1] },
        ] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("when given a unison monzo, does not return duplicates", (): void => {
        const monzo = [] as Monzo

        const actual = computeNotatingCommas({ monzo })

        const expected = [
            { monzo: [] },
            { monzo: [-19, 12] },
        ] as Comma[]
        expect(actual).toEqual(expected)
    })
})