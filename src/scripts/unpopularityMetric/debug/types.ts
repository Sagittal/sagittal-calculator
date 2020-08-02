import { EnumHash } from "../../../general"

enum DebugTarget {
    ALL = "all",
    ANTIVOTES = "antivotes",
    UNPOPULARITIES = "unpopularities",
    SEARCH = "search",
    POPULATE = "populate",
    NEW_BEST_METRIC = "newBestMetric",
    LOCAL_MINIMUM = "localMinimum",
    SCOPE = "scope",
    SUM_OF_SQUARES = "sumOfSquares",
    ERRORS = "errors",
    TIMEOUTS = "timeouts",
    NONE = "none",
}

type DebugTargets = EnumHash<DebugTarget, boolean>

export {
    DebugTargets,
    DebugTarget,
}
