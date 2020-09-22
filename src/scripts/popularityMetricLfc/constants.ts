import { Count, Exponent, Max, Popularity, Rank, Step } from "../../general"
import { Sample, Scope } from "./bestMetric"
import { Chunk } from "./solver"
import { ParameterValue, Unpopularity } from "./sumOfSquares"
import { PopularityMetricLfcScriptGroupSettings } from "./types"

// "Zipf exponent"; Applied to the ranks before calculating sum-of-squares, in accordance with the data,
// to capture how the ranks toward the top of the list are much more important to match
const DEFAULT_Z = -1 as Exponent<Rank<Popularity | Unpopularity>>

// The first popularity which no longer has >0.05% of votes, and drops from 19 votes suddenly to 16
const DEFAULT_ONLY_TOP = 80 as Count<Popularity>

// When calculating ED, the max unit it will allow a gap between samples
const DEFAULT_MAX_UNIT = 0.1 as Max<Step<ParameterValue>>

const INITIAL_SOLVER_STATUS = {
    chunkCount: 0 as Count<Chunk>,
    finishedPopulating: false,
    populatedScopeCount: 0 as Count<Scope>,
    searchedScopeCount: 0 as Count<Scope>,
    averageSamplesPerScope: 0 as Count<Sample>,
    sampleCount: 0 as Count<Sample>,
}

const INITIAL_POPULARITY_METRIC_LFC_SCRIPT_GROUP_SETTINGS: PopularityMetricLfcScriptGroupSettings = {
    z: DEFAULT_Z,
    onlyTop: DEFAULT_ONLY_TOP,
    maxUnit: DEFAULT_MAX_UNIT,
    noUseless: false,
    sync: false,
}

// An order of magnitude higher precision when perfecting
const DEFAULT_MAX_UNIT_WHEN_PERFECTING = DEFAULT_MAX_UNIT / 10 as Max<Step<ParameterValue>>

export {
    INITIAL_SOLVER_STATUS,
    INITIAL_POPULARITY_METRIC_LFC_SCRIPT_GROUP_SETTINGS,
    DEFAULT_MAX_UNIT_WHEN_PERFECTING,
}
