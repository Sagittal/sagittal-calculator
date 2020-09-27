import { Direction, Integer, NumTypeParameters, RationalNum } from "../../math"
import { Cents } from "../types"

type Comma<T extends NumTypeParameters = {}> =
    RationalNum<T>
    & { _CommaBrand: boolean }

// TODO: 2,3-free class maybe should have a name, like comma does?
//  To less confuse with that column name that's in the analyze-ji-pitch script's 2,3-free class table
//  (i.e. it's supposedly the class itself, but we can't have that within its own table... so even though in the case
//  Of a 2,3-free class, its name is basically the same as its ratio representation
//  Or we might devise a way of representing them which is distinct. looks like a vertical bar is no good.
//  What about just putting them next to a sharp symbol, suggesting they are relative to a chain of JI fifths?
//  - also, double check its name "2,3-free class" against our forum thread about equivalence and such
//  We discussed its name in excruciating detail
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
