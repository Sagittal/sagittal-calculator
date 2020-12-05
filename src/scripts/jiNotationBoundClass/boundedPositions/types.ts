import {Maybe, NumericProperties, Scamon} from "@sagittal/general"

type NeighborPositions<T extends NumericProperties = {}> = [Maybe<Scamon<T>>, Maybe<Scamon<T>>]

type BoundedCommaClassPositions = NeighborPositions<{rational: true}>

export {
    NeighborPositions,
    BoundedCommaClassPositions,
}
