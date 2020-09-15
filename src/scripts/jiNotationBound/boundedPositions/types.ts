import { Cents, Maybe } from "../../../general"

type NeighborPositions = [Maybe<Cents>, Maybe<Cents>]
type BoundedSymbolClassPositions = NeighborPositions

export {
    NeighborPositions,
    BoundedSymbolClassPositions,
}
