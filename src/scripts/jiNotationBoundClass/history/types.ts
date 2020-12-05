import {Abs, Cents, Decimal, Grade, Multiplier, Rank, Scamon, Sum} from "@sagittal/general"
import {BoundType, Ina, Tinas} from "@sagittal/system"
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
    grade: Grade<BoundHistory>,
    tinaError: Multiplier<Tinas>,
}

export {
    BoundHistoryAnalysis,
}
