import { Cents, Maybe } from "../../../general"

type NeighborPositions = [Maybe<Cents>, Maybe<Cents>]
type BoundedSymbolPositions = NeighborPositions

export {
    NeighborPositions,
    BoundedSymbolPositions,
}
