import { Monzo, Ratio } from "../math"
import { Extrema, Name } from "../types"

type Cents = number & { _CentsBrand: "Cents" }

// TODO: if you had the code base work in Pitch first and cents only secondarily,
//  then the monzo to and from cents stuff could live in math/ instead of music/
//  and then this would be more just like some number, a pure multiplier or coefficient of waveform frequency
type CentsPosition = Partial<Pitch> & {
    cents: Cents,
}

interface Pitch {
    name: Name<Pitch>,
    cents: Cents,
    monzo: Monzo<number>,
    ratio: Ratio<number>,
}

type Votes = number & { _VotesBrand: "Votes" }

interface Popularity {
    fiveRoughRatio: Ratio,
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
    Pitch,
    Apotome,
}
