import { Direction, Integer, NumTypeParameters, RationalNum } from "../../math"
import { Cents } from "../types"

type Comma<T extends NumTypeParameters = {}> =
    RationalNum<T>
    & { _CommaBrand: boolean }

type TwoThreeFreeClass<T extends NumTypeParameters = {}> =
    // TODO: argh... okay, technically this could be SUPER or UNISON... but it seems potentially quite painful to make
    //  That so... may need to rethink a lot of the work around direction... like how even would a SUPER_OR_UNISON work?
    RationalNum<T & { rough: 5, direction: Direction.SUPER }>
    & { _TwoThreeFreeClassBrand: boolean }

type Votes = Integer & { _VotesBrand: boolean }

interface Popularity {
    twoThreeFreeClass: TwoThreeFreeClass,
    votes: Votes,
}

type Apotome = Cents & { _ApotomeBrand: boolean }

export {
    Votes,
    Popularity,
    Apotome,
    Comma,
    TwoThreeFreeClass,
}
