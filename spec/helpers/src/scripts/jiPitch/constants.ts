import {Abs, Decimal, Exponent, Max, Prime} from "../../../../../src/general/math"
import {ApotomeSlope, N2D3P9} from "../../../../../src/sagittal/ji/badness"

const OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS = 307 as Max<N2D3P9>
const OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS = 14 as Max<Abs<ApotomeSlope>>
const OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS = 15 as Max<Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>>

export {
    OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS,
    OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS,
    OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS,
}
