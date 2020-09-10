import { Monzo, Ratio } from "../math"
import { Extrema, Name } from "../types"

type Cents = number & { _CentsBrand: "Cents" }

// TODO: if you had the code base work in Pitch first and cents only secondarily,
//  then the monzo to and from cents stuff could live in math/ instead of music/
//  and then this would be more just like some number, a pure multiplier or coefficient of waveform frequency
type CentsPosition = {
    cents: Cents,
    monzo?: Monzo<{ irrational: true }>,
    name?: Name<Pitch>,
}

interface JiPitch {
    monzo: Monzo,
    name?: Name<Pitch>,
}

type Pitch = JiPitch | CentsPosition

type Votes = number & { _VotesBrand: "Votes" }

type TwoThreeFreeClassAsRatio = Ratio & { _TwoThreeFreeClassAsRatioBrand: "TwoThreeFreeClassAsRatio" }

interface Popularity {
    twoThreeFreeClassAsRatio: TwoThreeFreeClassAsRatio,
    votes: Votes,
}

type Zone<T = void> = Extrema<Cents> & (T extends void ? {} : { _ZoneOfBrand: T })

type Apotome = Cents & { _ApotomeBrand: "Apotome" }

export {
    CentsPosition,
    Cents,
    Votes,
    Popularity,
    Zone,
    JiPitch,
    Apotome,
    Pitch,
    TwoThreeFreeClassAsRatio,
}
