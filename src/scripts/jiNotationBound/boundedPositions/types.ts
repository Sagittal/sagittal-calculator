import { Maybe, NumericProperties, Scamon } from "../../../general"

type NeighborPositions<T extends NumericProperties = {}> = [Maybe<Scamon<T>>, Maybe<Scamon<T>>]

type BoundedSymbolClassPositions = NeighborPositions<{ rational: true }>

export {
    NeighborPositions,
    BoundedSymbolClassPositions,
}
