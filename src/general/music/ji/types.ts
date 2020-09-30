import { Direction, IntegerDecimal, NumericProperties, Rational } from "../../math"
import { Cents } from "../types"

type Comma<T extends NumericProperties = {}> =
    Rational<T>
    & { _CommaBrand: boolean }

type Two3FreeClass<T extends NumericProperties = {}> =
// Todo: DEFER UNTIL AFTER SCALED MONZO
//  DEAL WITH SUPER-OR-UNISON DIRECTION
//  Argh... okay, technically this could be SUPER or UNISON... but it seems potentially quite painful to make
//  That so... may need to rethink a lot of the work around direction... like how even would a SUPER_OR_UNISON work?
    Rational<T & { rough: 5, direction: Direction.SUPER }>
    & { _Two3FreeClassBrand: boolean }

type Votes = IntegerDecimal & { _VotesBrand: boolean }

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
