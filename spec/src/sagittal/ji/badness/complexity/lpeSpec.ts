import {Scamon} from "../../../../../../src/general/math/numeric/scamon"
import {computeLpe} from "../../../../../../src/sagittal/ji/badness/complexity"
import {LPE} from "../../../../../../src/sagittal/ji/badness/complexity/types"

describe("computeLpe", (): void => {
    it("computes complexity according to LPE (lb compressed N2D3P9, power function expanded AAS, and exponential function expanded ATE)", (): void => {
        const jiPitch = {monzo: [12, -4, 0, -2]} as Scamon<{rational: true}>

        const actual = computeLpe(jiPitch)

        const expected = 3.902647 as LPE
        expect(actual).toBeCloseTo(expected)
    })
})
