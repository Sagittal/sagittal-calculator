enum LogTarget {
    ALL = "all",
    ANTIVOTES = "antivotes",
    BOUND = "bound",
    BOUNDS_TERMINAL = "boundsTerminal",
    BOUNDS_IMAGE = "boundsImage.svg",
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
