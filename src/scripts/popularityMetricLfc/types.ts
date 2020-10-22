import {Count, Exponent, Max, Popularity, Rank, Step} from "../../general"
import {ParameterValue, Unpopularity} from "./sumOfSquares"

interface PopularityMetricLfcScriptGroupSettings {
    z: Exponent<Rank<Popularity | Unpopularity>>,
    onlyTop: Count<Popularity>,
    maxUnit: Max<Step<ParameterValue>>,
    noUseless: boolean,
    sync: boolean,
}

export {
    PopularityMetricLfcScriptGroupSettings,
}
