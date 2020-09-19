import { Abs, Cents, Integer, Multiplier, Rank, Sum } from "../../../general"
import { Ina, Tina } from "../../../sagittal"
import { EventType } from "../histories"
import { EventAnalysis } from "./events"

type Score = number & { _ScoreBrand: "Score" }

interface HistoryAnalysis {
    totalDistance: Sum<Abs<Cents>>,
    eventAnalyses: EventAnalysis[],
    exact: boolean,
    totalInaDistance: Sum<Multiplier<Ina>>,
    initialPositionTinaDistance: Multiplier<Tina>,
    cents: Cents,
    possible: boolean,
    rank: Integer & Rank<EventType>,
    score: Score,
    tinaError: Multiplier<Tina>,
}

export {
    HistoryAnalysis,
    Score,
}
