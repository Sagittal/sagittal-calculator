import { Mean, MeanType } from "../../../../../../src/general/math"
import { Scamon } from "../../../../../../src/general/math/numeric/scamon"
import {
    addRationalScamons,
    computeRationalScamonGeometricMean,
    subtractRationalScamons,
} from "../../../../../../src/general/math/rational/scamon"

describe("subtractRationalScamons", (): void => {
    it("works for two Rational scamons, subtracting the from's monzo from the to's monzo", (): void => {
        const fromRationalScamon = { monzo: [-1, 1] } as Scamon<{ rational: true }>
        const toRationalScamon = { monzo: [-2, 0, 0, 1] } as Scamon<{ rational: true }>

        const actual = subtractRationalScamons(fromRationalScamon, toRationalScamon)

        const expected = { monzo: [-1, -1, 0, 1] } as Scamon<{ rational: true }>
        expect(actual).toEqual(expected)
    })
})

describe("addRationalScamons", (): void => {
    it("works", (): void => {
        const augendRationalScamon = { monzo: [2, -1, -1, 1] } as Scamon<{ rational: true }>
        const addendRationalScamon = { monzo: [-2, 1] } as Scamon<{ rational: true }>

        const actual = addRationalScamons(augendRationalScamon, addendRationalScamon)

        const expected = { monzo: [0, 0, -1, 1] } as Scamon<{ rational: true }>
        expect(actual).toEqual(expected)
    })
})

describe("computeRationalScamonGeometricMean", (): void => {
    it("sums the monzos and takes the nth-root where n is the count of scamons", (): void => {
        const scamonA = { monzo: [0, -5, 1] } as Scamon<{ rational: true }>
        const scamonB = { monzo: [2, 0, 1] } as Scamon<{ rational: true }>
        const scamonC = { monzo: [0, 4, 1] } as Scamon<{ rational: true }>

        const actual = computeRationalScamonGeometricMean(scamonA, scamonB, scamonC)

        const expected = {
            monzo: [2, -1, 3],
            scaler: [1, 3],
        } as Mean<{ of: Scamon<{ rational: false }>, meanType: MeanType.GEOMETRIC }>
        expect(actual).toEqual(expected)
    })
})
