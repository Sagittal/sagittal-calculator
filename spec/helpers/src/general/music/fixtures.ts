import { Direction } from "../../../../../src/general/math/num"
import { RationalMonzo } from "../../../../../src/general/math/rational/num/monzo"
import { TwoThreeFreeClass } from "../../../../../src/general/music/ji"

const twoThreeFreeClassFixture: TwoThreeFreeClass = {
    monzo: [1,1] as RationalMonzo<{ rough: 5, direction: Direction.SUPER }>
} as TwoThreeFreeClass

export {
    twoThreeFreeClassFixture,
}
