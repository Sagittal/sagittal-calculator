import { Count, Exponent, Filename, Max, Popularity, Rank, Unit } from "../../general"
import { ParameterValue, Unpopularity } from "./sumOfSquares"

// "Zipf exponent"; Applied to the ranks before calculating sum-of-squares, in accordance with the data,
// to capture how the ranks toward the top of the list are much more important to match
const DEFAULT_Z = -1 as Exponent<Rank<Popularity | Unpopularity, number>>

// The first popularity which no longer has >0.05% of votes, and drops from 19 votes suddenly to 16
const DEFAULT_ONLY_TOP = 80 as Count<Popularity>

// When calculating resolution, the max unit it will allow a gap between samples
const DEFAULT_MAX_UNIT = 0.1 as Max<Unit<ParameterValue>>

// the "Large Function Collider" as Dave likes to call it
const LFC = "lfc" as Filename

export {
    DEFAULT_Z,
    DEFAULT_ONLY_TOP,
    DEFAULT_MAX_UNIT,
    LFC,
}
