import { Direction } from "../../../../../src/general/math/num"
import { Monzo } from "../../../../../src/general/math/num/monzo"
import { TwoThreeFreeClass } from "../../../../../src/general/music/ji"

const twoThreeFreeClassFixture: TwoThreeFreeClass = {
    monzo: [1,1] as Monzo<{ rough: 5, direction: Direction.SUPER }>
} as TwoThreeFreeClass

export {
    twoThreeFreeClassFixture,
}
