import { Abs, Comma, Decimal, Max, Num, RationalMonzo } from "../../../../../../src/general"
import { ApotomeSlope, computeNotatingCommas } from "../../../../../../src/sagittal"

describe("computeNotatingCommas", (): void => {
    it("given a monzo, returns a list of the commas that notate it", (): void => {
        const monzo = [0, 0, 0, 0, 1] as RationalMonzo

        const actual = computeNotatingCommas({ monzo })

        const expected = [
            { monzo: [14, -11, 0, 0, 1] },
            { monzo: [-5, 1, 0, 0, 1] },
            { monzo: [13, -6, 0, 0, -1] },
        ] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("can filter", (): void => {
        const monzo = [0, 0, 0, 0, 1] as RationalMonzo
        const maxAas = 9 as Max<Abs<ApotomeSlope>>
        const upperBound = { decimal: 1.032279 as Decimal } as Max<Num>

        const actual = computeNotatingCommas({ monzo }, { maxAas, upperBound })

        const expected = [
            { monzo: [-5, 1, 0, 0, 1] },
            { monzo: [13, -6, 0, 0, -1] },
        ] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("when given a unison monzo, does not return duplicates", (): void => {
        const monzo = [] as unknown[] as RationalMonzo

        const actual = computeNotatingCommas({ monzo })

        const expected = [
            { monzo: [] },
            { monzo: [-19, 12] },
        ] as Comma[]
        expect(actual).toEqual(expected)
    })
})
