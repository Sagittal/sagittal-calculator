import { DebugTarget, DebugTargets } from "./types"

const debugTargets: DebugTargets = {
    [ DebugTarget.ALL ]: false,
    [ DebugTarget.ANTIVOTES ]: false,
    [ DebugTarget.UNPOPULARITIES ]: false,
    [ DebugTarget.SEARCH ]: false,
    [ DebugTarget.POPULATE ]: false,
    [ DebugTarget.NEW_BEST_METRIC ]: false,
    [ DebugTarget.LOCAL_MINIMUM ]: false,
    [ DebugTarget.SCOPE ]: false,
    [ DebugTarget.SUM_OF_SQUARES ]: false,
    [ DebugTarget.ERRORS ]: false,
    [ DebugTarget.TIMEOUTS ]: false,
    [ DebugTarget.NONE ]: false,
    [ DebugTarget.FINAL_SOLVER_RESULTS ]: false,
}

export {
    debugTargets,
}
