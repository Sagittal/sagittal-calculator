import {computePatentVal, Ed, Max, Monzo, Prime, Step, Window} from "../../../../../../src/general"
import {computeMonzoMapping, Val} from "../../../../../../src/general/math/numeric/monzo"

describe("computeMonzoMapping", (): void => {
    it("given a val mapping, returns the number of steps that would represent the given monzo", (): void => {
        const val: Val = [8539, 13534, 19827, 23972, 29540, 31598] as Val
        const monzo = [5, -3, 1, -1, -1, 1] as Monzo

        const actual = computeMonzoMapping(monzo, val)

        const expected = 6 as Step
        expect(actual).toBe(expected)
    })

    it("checkin' 77/185n maps to 0 steps under zeta peak EDO for Insane precision level JI notation", (): void => {
        const val: Val = computePatentVal({
            ed: 8539.00834 as Ed<Window<2>>,    // TODO: this should be a constant
            window: 2 as Window<2>,
            primeLimit: 281 as Max<Prime>,
        })
        const monzo = [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] as Monzo

        const actual = computeMonzoMapping(monzo, val)

        const expected = 0 as Step
        expect(actual).toBe(expected)
    })

    it("maps 143/1715n to 7 steps", (): void => {
        const val: Val = computePatentVal({
            ed: 8539.00834 as Ed<Window<2>>,
            window: 2 as Window<2>,
            primeLimit: 281 as Max<Prime>,
        })
        const monzo = [2, 1, -1, -3, 1, 1] as Monzo

        const actual = computeMonzoMapping(monzo, val)

        const expected = 7 as Step
        expect(actual).toBe(expected)
    })
})
