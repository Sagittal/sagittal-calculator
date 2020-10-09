import { computeIrrationalDecimalFromScamon } from "../../../../../../src/general/math/irrational/decimal"
import { IRRATIONAL_SCAMON_BASE_MONZO } from "../../../../../../src/general/math/irrational/scamon/constants"
import { Decimal } from "../../../../../../src/general/math/numeric/decimal"
import { Quotient } from "../../../../../../src/general/math/numeric/quotient"
import { Scamon } from "../../../../../../src/general/math/numeric/scamon"

describe("computeIrrationalDecimalFromScamon", (): void => {
    it("given a irrational scamon, returns an irrational decimal", (): void => {
        const irrationalScamon = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [6.400178, 1] as Quotient,
        } as Scamon<{ rational: false }>

        const actual = computeIrrationalDecimalFromScamon(irrationalScamon)

        const expected = 84.45893 as Decimal<{ rational: false }>
        expect(actual).toBeCloseTo(expected)
    })
})
