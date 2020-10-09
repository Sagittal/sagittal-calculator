import { Decimal, Direction, NumericProperties } from "../../math"
import { Pitch } from "../pitch"
import { Cents } from "../types"

type Comma<T extends NumericProperties = {}> = Pitch<T & { rational: true }> & { _CommaBrand: boolean }

type Two3FreeClass =
    Pitch<{ rational: true, rough: 5, direction: Direction.SUPER }
        | { rational: true, rough: 5, direction: Direction.UNISON }>
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
}
