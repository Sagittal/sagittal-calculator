import { Direction, Monzo, NumericTypeParameters, Ratio, RationalTypeParameters } from "../math"
import { Extrema, Name } from "../types"

type Cents = number & { _CentsBrand: "Cents" }

type Comma<T extends NumericTypeParameters = {}> = JiPitch<T> & { _CommaBrand: "Comma" }

type TwoThreeFreeClass =
    JiPitch<{ rough: 5, direction: Direction.SUPER }> &
    { _TwoThreeFreeClassBrand: "TwoThreeFreeClass" }

// TODO: NO LONGER BASED ON CENTS
//  if you had the code base work in Pitch first and cents only secondarily,
//  then the monzo to and from cents stuff could live in math/ instead of music/
//  and then this would be more just like some number, a pure multiplier or coefficient of waveform frequency
//  just can't figure out what to call it. PitchValue maybe...? Scaler?
type CentsPosition<T extends NumericTypeParameters = {}> = {
    cents: Cents,
    name?: Name<Pitch>,
    monzo?: Monzo<T & { irrational: true }>,
    ratio?: Ratio<T & { irrational: true }>,
}

// TODO: So we've established that limit is the direct musical equivalent of smooth in math
//  perhaps there is some way to fernangle it so that pitches could have free: [2,3] and then potentially you know
//  like [3,5,7] such as is the case in the Yer tuning system, where it's a chunk in the middle, nonconsecutive
//  and ji: true could map to irrational: false
type JiPitchByMonzo<T extends RationalTypeParameters = { irrational: false }> = {
    cents?: Cents,
    name?: Name<Pitch>,
    monzo: Monzo<T>,
    ratio?: Ratio<T>,
}
type JiPitchByRatio<T extends RationalTypeParameters = { irrational: false }> = {
    cents?: Cents,
    name?: Name<Pitch>,
    monzo?: Monzo<T>,
    ratio: Ratio<T>,
}
type JiPitch<T extends NumericTypeParameters = {}> =
    JiPitchByMonzo<T & { irrational: false }> | JiPitchByRatio<T & { irrational: false }>

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
