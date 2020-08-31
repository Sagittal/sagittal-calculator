import { Cents, Integer, Proportion, Rank, Sum } from "../../../general"
import { Tina } from "../../../sagittal"
import { AnalyzedEvent } from "./analyzeEvents"

type Score = number & { _ScoreBrand: "Score" }

interface AnalyzedHistory {
    distance: Cents,
    events: AnalyzedEvent[],
    exact: boolean,
    inaDistance: Sum<Proportion>,
    initialPositionTinaDifference: Proportion<Tina>,
    cents: Cents,
    possible: boolean,
    rank: Rank<AnalyzedEvent, Integer>,
    score: Score,
    tinaError: Proportion<Tina>,
}

export {
    AnalyzedHistory,
    Score,
}
