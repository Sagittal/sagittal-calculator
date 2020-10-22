import {Abs, Cents, Decimal, Multiplier, Rank, Scamon, Sum} from "../../../general"
import {BoundType, Ina, Tina} from "../../../sagittal"
import {BoundEventAnalysis} from "./events"

type Score = number & {_ScoreBrand: boolean}

interface BoundHistoryAnalysis {
    totalDistance: Sum<Abs<Cents>>,
    boundEventAnalyses: BoundEventAnalysis[],
    exact: boolean,
    totalInaDistance: Sum<Multiplier<Ina>>,
    initialPositionTinaDistance: Multiplier<Tina>,
    pitch: Scamon,
    possible: boolean,
    rank: Decimal<{integer: true}> & Rank<BoundType>,
    score: Score,
    tinaError: Multiplier<Tina>,
}

export {
    BoundHistoryAnalysis,
    Score,
}
