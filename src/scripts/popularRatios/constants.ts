import { Filename, Max } from "../../general"
import { N2D3P9 } from "../../sagittal"

const DEFAULT_MAX_N2D3P9_FOR_POPULAR_RATIOS = 136 as Max<N2D3P9>

const POPULAR_RATIOS_SCRIPT_GROUP = "popularRatios" as Filename

const INITIAL_POPULAR_RATIOS_SCRIPT_GROUP_SETTINGS ={
    useLate: false,
}

export {
    DEFAULT_MAX_N2D3P9_FOR_POPULAR_RATIOS,
    POPULAR_RATIOS_SCRIPT_GROUP,
    INITIAL_POPULAR_RATIOS_SCRIPT_GROUP_SETTINGS,
}
