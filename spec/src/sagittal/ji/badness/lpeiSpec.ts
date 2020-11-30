import {Scamon} from "../../../../../src/general"
import {computeLpei} from "../../../../../src/sagittal"
import {LPEI} from "../../../../../src/sagittal/ji/badness/types"

describe("computeLpei", (): void => {
    it("computes badness according to LPEI (lb compressed N2D3P9, power function expanded AAS, and exponential function expanded ATE, and 'identity' (non-expanded or compressed) function error (by default of minas))", (): void => {
        const jiPitch = {monzo: [21, -5, -2, -3]} as Scamon<{rational: true}>

        const actual = computeLpei(jiPitch)

        const expected = 8.317604 as LPEI
        expect(actual).toBeCloseTo(expected)
    })

    it("another example", (): void => {
        const jiPitch = {monzo: [-3, 2, 0, 0, 0, 0, 1, -1]} as Scamon<{rational: true}>

        const actual = computeLpei(jiPitch)

        const expected = 7.080159 as LPEI
        expect(actual).toBeCloseTo(expected)
    })
})
