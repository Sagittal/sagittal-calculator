import {Max} from "../../general"
import {N2D3P9} from "../../sagittal"
import {Popular23FreeClassesScriptGroupSettings} from "./types"

const DEFAULT_MAX_N2D3P9_FOR_POPULAR_2_3_FREE_CLASSES = 136 as Max<N2D3P9>

const MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN = 5298.1906468

const INITIAL_POPULAR_2_3_FREE_CLASSES_SCRIPT_GROUP_SETTINGS: Popular23FreeClassesScriptGroupSettings = {
    useLate: false,
    useKnown: false,
    useBestNotatingCommas: false,
}

export {
    DEFAULT_MAX_N2D3P9_FOR_POPULAR_2_3_FREE_CLASSES,
    MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN,
    INITIAL_POPULAR_2_3_FREE_CLASSES_SCRIPT_GROUP_SETTINGS,
}
