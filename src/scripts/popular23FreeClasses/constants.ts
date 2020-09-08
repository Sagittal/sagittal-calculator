import { Filename, Max } from "../../general"
import { N2D3P9 } from "../../sagittal"

const DEFAULT_MAX_N2D3P9_FOR_POPULAR_TWO_THREE_FREE_CLASSES = 136 as Max<N2D3P9>

const POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP = "popular23FreeClasses" as Filename

const INITIAL_POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP_SETTINGS ={
    useLate: false,
}

export {
    DEFAULT_MAX_N2D3P9_FOR_POPULAR_TWO_THREE_FREE_CLASSES,
    POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP,
    INITIAL_POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP_SETTINGS,
}