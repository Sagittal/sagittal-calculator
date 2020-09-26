import { Direction, Integer, NumTypeParameters, RationalNum } from "../../math"
import { Cents } from "../types"

type Comma<T extends NumTypeParameters = {}> =
    RationalNum<T & { potentiallyIrrational: false }>
    & { _CommaBrand: boolean }

// TODO: 2,3-free class maybe should have a name, like comma does?
//  to less confuse with that column name that's in the analyze-ji-pitch script's 2,3-free class table
//  (i.e. it's supposedly the class itself, but we can't have that within its own table... so even though in the case
//  of a 2,3-free class, its name is basically the same as its ratio representation
//  or we might devise a way of representing them which is distinct. looks like a vertical bar is no good.
//  what about just putting them next to a sharp symbol, suggesting they are relative to a chain of JI fifths?
//  - also, double check its name "2,3-free class" against our forum thread about equivalence and such
//  we discussed its name in excruciating detail
type TwoThreeFreeClass<T extends NumTypeParameters = {}> =
    RationalNum<Omit<T, "rough" | "direction"> & { rough: 5, direction: Direction.SUPER, potentiallyIrrational: false }>
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
