enum LogTarget {
    ALL = "all",
    ANTIVOTES = "antivotes",
    JI_NOTATION_BOUND = "jiNotationBound",
    JI_NOTATION_BOUNDS_TABLE = "jiNotationBoundsTable",
    JI_NOTATION_BOUNDS_IMAGE = "jiNotationBoundsImage.svg",
    UNPOPULARITIES = "unpopularities",
    SEARCH = "search",
    POPULATE = "populate",
    NEW_BEST_METRIC = "newBestMetric",
    SUM_OF_SQUARES = "sumOfSquares",
    ERRORS = "errors",
    NONE = "none",
    FINAL_SOLVER_RESULTS = "finalSolverResults",
    PERFECT = "perfect",
    FINAL_PERFECTER_RESULTS = "finalPerfecterResults",
    PROGRESS = "progress",
}

type SaveLogOptions = Partial<{
    useTargetColor: boolean,
    fileExtensionProvided: boolean,
    writeOnly: boolean,
}>

type LogTargets = Record<LogTarget, boolean>

export {
    LogTargets,
    LogTarget,
    SaveLogOptions,
}
