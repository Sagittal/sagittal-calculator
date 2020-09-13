import { Cents, Integer, Multiplier, Rank, Sum } from "../../../general"
import { Ina, Tina } from "../../../sagittal"
import { EventAnalysis } from "./analyzeEvents"

type Score = number & { _ScoreBrand: "Score" }

interface HistoryAnalysis {
    totalDistance: Cents,
    events: EventAnalysis[],
    exact: boolean,
    totalInaDistance: Sum<Multiplier<Ina>>,
    initialPositionTinaDistance: Multiplier<Tina>,
    cents: Cents,
    possible: boolean,
    rank: Integer & Rank<EventAnalysis>,
    score: Score,
    tinaError: Multiplier<Tina>,
}

export {
    HistoryAnalysis,
    Score,
}
