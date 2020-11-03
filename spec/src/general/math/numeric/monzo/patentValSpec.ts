import {Ed, Window} from "../../../../../../src/general"
import {Max, Prime} from "../../../../../../src/general/math"
import {computePatentVal, Val} from "../../../../../../src/general/math/numeric/monzo"

describe("computePatentVal", (): void => {
    it("given an EDO and a prime limit, returns the patent val", (): void => {
        const ed: Ed<Window<2>> = 12 as Ed<Window<2>>
        const primeLimit: Max<Prime> = 5 as Max<Prime>
        const window: Window<2> = 2 as Window<2>

        const actual: Val = computePatentVal({ed, window, primeLimit})

        const expected = [12, 19, 28] as Val
        expect(actual).toEqual(expected)
    })

    it("has the correct patent val for the zeta-peak EDO which corresponds to the Insane precision notation's 809-EDA         ", (): void => {
        const ed: Ed<Window<2>> = 8539.00834 as Ed<Window<2>>
        const primeLimit: Max<Prime> = 281 as Max<Prime>
        const window: Window<2> = 2 as Window<2>

        const actual: Val = computePatentVal({ed, window, primeLimit})

        const expected = [
            8539, 13534, 19827, 23972, 29540, 31598, 34903, 36273, 38627, 41482, 42304, 44484, 45748, 46335, 47431,
            48911, 50232, 50643, 51798, 52513, 52855, 53828, 54437, 55296, 56357, 56855, 57096, 57565, 57794, 58238,
            59676, 60058, 60610, 60789, 61645, 61809, 62289, 62751, 63050, 63484, 63904, 64041, 64704, 64832, 65085,
            65209, 65931, 66612, 66831, 66939, 67152, 67466, 67568, 68069, 68360, 68644, 68922, 69014, 69283, 69460,
        ] as Val
        expect(actual).toEqual(expected)
    })
})
