import {computeIrrationalDecimalFromScamon, Decimal, Quotient, Scamon} from "../../../../../../src/general"
import {IRRATIONAL_SCAMON_BASE_MONZO} from "../../../../../../src/general/math/irrational/scamon/constants"

describe("computeIrrationalDecimalFromScamon", (): void => {
    it("given a irrational scamon, returns an irrational decimal", (): void => {
        const irrationalScamon = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [6.400178, 1] as Quotient,
        } as Scamon<{rational: false}>

        const actual = computeIrrationalDecimalFromScamon(irrationalScamon)

        const expected = 84.45893 as Decimal<{rational: false}>
        expect(actual).toBeCloseTo(expected)
    })

    // TODO: COMMA NAMES: this won't actually work until I implement a special stay-in-bounds technique
    //  Like, 2^ => 0 and 3^ => Infinity, but if you do them one at a time, or at least prevent overflow as you go
    //  This *could* work
    // tslint:disable-next-line ban
    xit("works for this rational scamon", (): void => {
        const rationalScamon = {monzo: [-50508,31867]} as Scamon<{rational: false}>

        const actual = computeIrrationalDecimalFromScamon(rationalScamon)

        const expected = 84.45893 as Decimal<{rational: false}>
        expect(actual).toBeCloseTo(expected)
    })
})
