import { TwoThreeFreeClass } from "../../sagittal"
import { Monzo, NumericTypeParameters, Ratio } from "../math"
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

// TODO: hmmm... but "irrational" is one of the NumericTypeParameters...
//  I don't really know how to force it not to extend irrational: true...
type JiPitchByMonzo<T extends NumericTypeParameters = {}> = {
    name?: Name<Pitch>,
    monzo: Monzo<T>,
    ratio?: Ratio<T>,
}
type JiPitchByRatio<T extends NumericTypeParameters = {}> = {
    name?: Name<Pitch>,
    ratio: Ratio<T>,
    monzo?: Monzo<T>,
}
type JiPitch<T extends NumericTypeParameters = {}> = JiPitchByMonzo<T> | JiPitchByRatio<T>

type Pitch = JiPitch | CentsPosition

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
}
