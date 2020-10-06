import { Decimal, Direction, NumericProperties } from "../../math"
import { Pitch } from "../pitch"
import { Cents } from "../types"

type Comma<T extends NumericProperties = {}> = Pitch<T & { rational: true }> & { _CommaBrand: boolean }

type Two3FreeClass =
// Todo: DEFER UNTIL AFTER SCALED MONZO
//  DEAL WITH SUPER-OR-UNISON DIRECTION
//  Argh... okay, technically this could be SUPER or UNISON... but it seems potentially quite painful to make
//  That so... may need to rethink a lot of the work around direction... like how even would a SUPER_OR_UNISON work?
    Pitch<{ rational: true, rough: 5, direction: Direction.SUPER }>
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
