import { Monzo } from "../../../../../../src/general/math/numeric/monzo"
import { Quotient } from "../../../../../../src/general/math/numeric/quotient"
import { Scamon } from "../../../../../../src/general/math/numeric/scamon"
import { isScamonRational } from "../../../../../../src/general/math/rational/scamon"

describe("isScamonRational", (): void => {
    it("returns true if the scaler is absent", (): void => {
        const candidateRationalScamon = { monzo: [5, 4] } as Scamon<{ rational: true }>

        const actual = isScamonRational(candidateRationalScamon)

        expect(actual).toBeTruthy()
    })

    it("returns false if the scaler is present", (): void => {
        const candidateRationalScamon = {
            monzo: [5, 4] as Monzo<{ rational: true }>,
            scaler: [1, 2] as Quotient,
        } as Scamon<{ rational: false }>

        const actual = isScamonRational(candidateRationalScamon)

        expect(actual).toBeFalsy()
    })
})
