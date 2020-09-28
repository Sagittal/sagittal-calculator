import { Direction } from "../../../../../src/general/math/num"
import { RationalMonzo } from "../../../../../src/general/math/rational/num/monzo"
import { Two3FreeClass } from "../../../../../src/general/music/ji"

const two3FreeClassFixture: Two3FreeClass = {
    monzo: [1,1] as RationalMonzo<{ rough: 5, direction: Direction.SUPER }>
} as Two3FreeClass

export {
    two3FreeClassFixture,
}
