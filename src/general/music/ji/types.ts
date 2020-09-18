import { Direction, Monzo, NumericTypeParameters, Ratio, RationalTypeParameters } from "../../math"
import { Name } from "../../types"
import { Cents, Pitch } from "../types"

type Comma<T extends NumericTypeParameters = {}> =
    JiPitch<T>
    & { _CommaBrand: "Comma" }

type TwoThreeFreeClass =
    JiPitch<{ rough: 5, direction: Direction.SUPER }>
    & { _TwoThreeFreeClassBrand: "TwoThreeFreeClass" }

// TODO: So we've established that prime limit is the direct musical equivalent of smooth in math
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

type Votes = number & { _VotesBrand: "Votes" }

interface Popularity {
    twoThreeFreeClass: TwoThreeFreeClass,
    votes: Votes,
}

type Apotome = Cents & { _ApotomeBrand: "Apotome" }

export {
    Votes,
    Popularity,
    JiPitch,
    Apotome,
    Comma,
    TwoThreeFreeClass,
}
