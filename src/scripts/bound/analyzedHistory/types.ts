import { Cents, Integer, Multiplier, Rank, Sum } from "../../../general"
import { Ina, Tina } from "../../../sagittal"
import { AnalyzedEvent } from "./analyzeEvents"

type Score = number & { _ScoreBrand: "Score" }

interface AnalyzedHistory {
    totalDistance: Cents,
    events: AnalyzedEvent[],
    exact: boolean,
    totalInaDistance: Sum<Multiplier<Ina>>,
    initialPositionTinaDistance: Multiplier<Tina>,
    cents: Cents,
    possible: boolean,
    rank: Rank<AnalyzedEvent, Integer>,
    score: Score,
    tinaError: Multiplier<Tina>,
}

export {
    AnalyzedHistory,
    Score,
}
