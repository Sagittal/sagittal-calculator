import { Count, Exponent, Unit } from "../../general"
import { ParameterValue, Popularity, PopularityRank, UnpopularityRank } from "./sumOfSquares"

const DEFAULT_Z = -1 as Exponent<PopularityRank | UnpopularityRank>     // "Zipf exponent"; Applied to the ranks before calculating sum-of-squares, in accordance with the data, to capture how the ranks toward the top of the list are much more important to match
const DEFAULT_ONLY_TOP = 80 as Count<Popularity>                        // The first popularity which no longer has >0.05% of votes, and drops from 19 votes suddenly to 16
const DEFAULT_MAXIMUM_UNIT = 0.1 as Unit<ParameterValue>                // When calculating resolution, the maximum unit it will allow a gap between samples

export {
    DEFAULT_Z,
    DEFAULT_ONLY_TOP,
    DEFAULT_MAXIMUM_UNIT,
}
