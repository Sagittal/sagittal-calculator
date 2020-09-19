import { Abs, abs, Cents, subtract } from "../../../../general"
import { HistoricalEvent, History } from "../../histories"

const computeEventDistance = (event: HistoricalEvent, index: number, history: History): Abs<Cents> =>
    abs(
        index === 0 ?
            0 as Cents :
            subtract(history[ index - 1 ].cents, event.cents)
    )

export {
    computeEventDistance,
}
