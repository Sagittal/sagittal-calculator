import { Decimal, Direction, Monzo, NumericProperties, NumericPropertyEffects } from "../../math"
import { Cents } from "../types"

type JiPitch<T extends NumericProperties = {}> = {
    monzo: Monzo<T & { rational: true }>,
    scaler: never,
} & NumericPropertyEffects<T & { rational: true }>

type Comma<T extends NumericProperties = {}> = JiPitch<T> & { _CommaBrand: boolean }

type Two3FreeClass =
    JiPitch<{ rough: 5, direction: Direction.SUPER } | { rough: 5, direction: Direction.UNISON }>
    & { _Two3FreeClassBrand: boolean }

type Votes = Decimal<{ integer: true }> & { _VotesBrand: boolean }

interface Popularity {
    two3FreeClass: Two3FreeClass,
    votes: Votes,
}

type Apotome = Cents & { _ApotomeBrand: boolean }

export {
    Votes,
    Popularity,
    Apotome,
    Comma,
    Two3FreeClass,
    JiPitch,
}
