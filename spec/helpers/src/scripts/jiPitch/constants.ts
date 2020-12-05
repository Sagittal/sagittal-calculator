import {Abs, Max} from "@sagittal/general"
import {ApotomeSlope, Ate, N2D3P9} from "@sagittal/system"

const OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS = 307 as Max<N2D3P9>
const OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS = 14 as Max<Abs<ApotomeSlope>>
const OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS = 15 as Max<Ate>

export {
    OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS,
    OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS,
    OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS,
}
