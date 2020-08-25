import { Cents, Max, Min } from "../../general"
import { LEVELS_BOUNDS } from "./levelsBounds"
import { JiSymbol, SecondaryCommaZone } from "./types"

const computeSecondaryCommaZone = (symbol: JiSymbol): SecondaryCommaZone => {
    const levelBounds = LEVELS_BOUNDS[ symbol.introducingLevel ]
    const maxCentsIndex = levelBounds.findIndex(bound => bound.cents > symbol.primaryComma.cents)
    const maxCents = levelBounds[ maxCentsIndex ].cents
    const minCents = maxCentsIndex === 0 ? 0 as Cents : levelBounds[ maxCentsIndex - 1 ].cents // TODO: or should it be -maxCents?

    return [minCents as Min<Cents>, maxCents as Max<Cents>]
}

export {
    computeSecondaryCommaZone,
}
