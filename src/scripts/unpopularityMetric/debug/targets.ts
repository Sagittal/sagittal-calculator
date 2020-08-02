import { DebugTarget, DebugTargets } from "./types"

const debugTargets: DebugTargets = {
    [ DebugTarget.ALL ]: false,
    [ DebugTarget.SUBMETRIC_ANTIVOTES ]: false,
    [ DebugTarget.RANKED_UNPOPULARITIES ]: false,
    [ DebugTarget.SOLVER ]: false,
    [ DebugTarget.POPULATION ]: false,
    [ DebugTarget.NEW_BEST_METRIC ]: false,
    [ DebugTarget.LOCAL_MINIMUM ]: false,
    [ DebugTarget.SCOPE ]: false,
    [ DebugTarget.SUM_OF_SQUARES ]: false,
    [ DebugTarget.ERRORS ]: false,
    [ DebugTarget.KILLS ]: false,
}

export {
    debugTargets,
}
