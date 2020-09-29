import { RationalQuotient } from "../../../../src/general/math/rational/num/quotient"
import { computeInterval } from "../../../../src/general/music/interval"

describe("computeInterval", (): void => {
    it("works for two JI pitches", (): void => {
        const fromPitch = { quotient: [ 3, 2 ] as RationalQuotient }
        const toPitch = { quotient: [ 7, 4 ] as RationalQuotient }
        
        const actual = computeInterval(fromPitch, toPitch)
        
        const expected = { quotient: [ 7, 6 ] as RationalQuotient }
        expect(actual).toEqual(expected)
    })
})
