import { Direction, Monzo, NumericTypeParameters, Ratio } from "../math"
import { Extrema, Name } from "../types"

type Cents = number & { _CentsBrand: "Cents" }

type Comma = JiPitch & { _CommaBrand: "Comma" }

type TwoThreeFreeClass =
    JiPitch<{ rough: 5, direction: Direction.SUPER }> &
    { _TwoThreeFreeClassBrand: "TwoThreeFreeClass" }
    
// TODO: if you had the code base work in Pitch first and cents only secondarily,
//  then the monzo to and from cents stuff could live in math/ instead of music/
//  and then this would be more just like some number, a pure multiplier or coefficient of waveform frequency
type CentsPosition<T extends NumericTypeParameters = { }> = {
    cents: Cents,
    name?: Name<Pitch>,
    monzo?: Monzo<T & { irrational: true }>,
    ratio?: Ratio<T & { irrational: true }>,
}

type JiPitchByMonzo<T extends NumericTypeParameters = {}> = {
    cents?: Cents,
    name?: Name<Pitch>,
    monzo: Monzo<T & { irrational: false }>,
    ratio?: Ratio<T & { irrational: false }>,
}
type JiPitchByRatio<T extends NumericTypeParameters = {}> = {
    cents?: Cents,
    name?: Name<Pitch>,
    monzo?: Monzo<T & { irrational: false }>,
    ratio: Ratio<T & { irrational: false }>,
}
type JiPitch<T extends NumericTypeParameters = {}> = 
    JiPitchByMonzo<T> | JiPitchByRatio<T>

type Pitch<T extends NumericTypeParameters = {}> = 
    JiPitch<T> | CentsPosition<T>

type Votes = number & { _VotesBrand: "Votes" }

interface Popularity {
    twoThreeFreeClass: TwoThreeFreeClass,
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
    Comma,
    TwoThreeFreeClass,
}
