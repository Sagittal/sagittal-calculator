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

enum GenericLogTarget {
    ALL = "all",            // white    ALL
    ERRORS = "errors",      // red      ERRORS
    NONE = "none",          // white    NONE
    // tslint:disable-next-line max-line-length
    FINAL = "final",        // green    FINAL_SOLVER_RESULTS, FINAL_PERFECTER_RESULTS, JI_NOTATION_BOUNDS_TABLE, JI_NOTATION_BOUNDS_IMAGE, JI_NOTATION_BOUND
    PROGRESS = "progress",  // yellow   PROGRESS, SEARCH
    DETAILS = "details",    // white    SUM_OF_SQUARES, UNPOPULARITIES, ANTIVOTES
    SETUP = "setup",        // cyan     POPULATE
    RESULT = "result",      // green    NEW_BEST_METRIC
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
