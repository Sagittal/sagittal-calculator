import { DebugTarget } from "./types"
import { EnumHash } from "../../../general"
import { ColorMethod } from "../../../types"

const targetColors: EnumHash<DebugTarget, ColorMethod> = {
    [ DebugTarget.ALL ]: "green",
    [ DebugTarget.ANTIVOTES ]: "white",
    [ DebugTarget.UNPOPULARITIES ]: "white",
    [ DebugTarget.SEARCH ]: "yellow",
    [ DebugTarget.POPULATE ]: "cyan",
    [ DebugTarget.NEW_BEST_METRIC ]: "green",
    [ DebugTarget.LOCAL_MINIMUM ]: "yellow",
    [ DebugTarget.SCOPE ]: "yellow",
    [ DebugTarget.SUM_OF_SQUARES ]: "white",
    [ DebugTarget.ERRORS ]: "red",
    [ DebugTarget.KILLS ]: "red",
    [ DebugTarget.NONE ]: "white",
}

export {
    targetColors,
}
