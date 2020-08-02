import { EnumHash } from "../../../general"

enum DebugTarget {
    ALL = "ALL",
    SUBMETRIC_ANTIVOTES = "SUBMETRIC_ANTIVOTES",
    RANKED_UNPOPULARITIES = "RANKED_UNPOPULARITIES",
    SOLVER = "SOLVER",
    POPULATION = "POPULATION",
    NEW_BEST_METRIC = "NEW_BEST_METRIC",
    LOCAL_MINIMUM = "LOCAL_MINIMUM",
    SCOPE = "SCOPE",
    SUM_OF_SQUARES = "SUM_OF_SQUARES",
    ERRORS = "ERRORS",
    KILLS = "KILLS", // todo should this go back to timeouts?
}

type DebugTargets = EnumHash<DebugTarget, boolean>

export {
    DebugTargets,
    DebugTarget,
}
