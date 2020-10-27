import {Count, Exponent, Max, Popularity, Rank, Step} from "../../general"
import {Parameter} from "../types"
import {Unpopularity} from "./sumOfSquares"

interface PopularityMetricLfcScriptGroupSettings {
    z: Exponent<Rank<Popularity | Unpopularity>>,
    onlyTop: Count<Popularity>,
    maxUnit: Max<Step<Parameter>>,
    noUseless: boolean,
    sync: boolean,
}

export {
    PopularityMetricLfcScriptGroupSettings,
}
