import {Abs, Cents, Decimal, Multiplier, Rank, Scamon, Score, Sum} from "../../../general"
import {BoundType, Ina, Tinas} from "../../../sagittal"
import {BoundHistory} from "../histories"
import {BoundEventAnalysis} from "./events"

interface BoundHistoryAnalysis {
    totalDistance: Sum<Abs<Cents>>,
    boundEventAnalyses: BoundEventAnalysis[],
    exact: boolean,
    totalInaDistance: Sum<Multiplier<Ina>>,
    initialPositionTinaDistance: Multiplier<Tinas>,
    pitch: Scamon,
    possible: boolean,
    rank: Decimal<{integer: true}> & Rank<BoundType>,
    score: Score<BoundHistory>,
    tinaError: Multiplier<Tinas>,
}

export {
    BoundHistoryAnalysis,
}
