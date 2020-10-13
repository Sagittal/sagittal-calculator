import { Abs, Cents, Decimal, Multiplier, Rank, Scamon, Sum } from "../../../general"
import { BoundType, Ina, Tina } from "../../../sagittal"
import { BoundClassEventAnalysis } from "./events"

type Score = number & { _ScoreBrand: boolean }

interface BoundClassHistoryAnalysis {
    totalDistance: Sum<Abs<Cents>>,
    boundClassEventAnalyses: BoundClassEventAnalysis[],
    exact: boolean,
    totalInaDistance: Sum<Multiplier<Ina>>,
    initialPositionTinaDistance: Multiplier<Tina>,
    pitch: Scamon,
    possible: boolean,
    rank: Decimal<{ integer: true }> & Rank<BoundType>,
    score: Score,
    tinaError: Multiplier<Tina>,
}

export {
    BoundClassHistoryAnalysis,
    Score,
}
