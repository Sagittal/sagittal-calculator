import { Maybe, NumericProperties, Pitch } from "../../../general"

type NeighborPositions<T extends NumericProperties = {}> = [Maybe<Pitch<T>>, Maybe<Pitch<T>>]

type BoundedSymbolClassPositions = NeighborPositions<{ rational: true }>

export {
    NeighborPositions,
    BoundedSymbolClassPositions,
}
