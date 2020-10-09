import { Monzo } from "../../../../../src/general/math/numeric/monzo"
import { Quotient } from "../../../../../src/general/math/numeric/quotient"
import { Pitch } from "../../../../../src/general/music/pitch"
import { isJi } from "../../../../../src/general/music/rational"

describe("isJi", (): void => {
    it("returns true if the scaler is absent", (): void => {
        const candidateJiPitch = { monzo: [5, 4] } as Pitch<{ rational: true }>

        const actual = isJi(candidateJiPitch)

        expect(actual).toBeTruthy()
    })

    it("returns false if the scaler is present", (): void => {
        const candidateJiPitch = {
            monzo: [5, 4] as Monzo<{ rational: true }>,
            scaler: [1, 2] as Quotient,
        } as Pitch<{ rational: false }>

        const actual = isJi(candidateJiPitch)

        expect(actual).toBeFalsy()
    })
})
