import { DebugTarget } from "./types"
import { EnumHash } from "../../../general"
import { ColorMethod } from "../../../types"

const targetColors: EnumHash<DebugTarget, ColorMethod> = {
    [ DebugTarget.ALL ]: "green",
    [ DebugTarget.SUBMETRIC_ANTIVOTES ]: "white",
    [ DebugTarget.RANKED_UNPOPULARITIES ]: "white",
    [ DebugTarget.SOLVER ]: "yellow",
    [ DebugTarget.POPULATION ]: "cyan",
    [ DebugTarget.NEW_BEST_METRIC ]: "green",
    [ DebugTarget.LOCAL_MINIMUM ]: "yellow",
    [ DebugTarget.SCOPE ]: "yellow",
    [ DebugTarget.SUM_OF_SQUARES ]: "white",
    [ DebugTarget.ERRORS ]: "red",
    [ DebugTarget.KILLS ]: "red",
}

export {
    targetColors,
}
