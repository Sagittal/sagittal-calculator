import { Direction, Monzo, NumericTypeParameters, Ratio, RationalTypeParameters } from "../../math"
import { Cents } from "../types"

type Comma<T extends NumericTypeParameters = {}> =
    JiPitch<T>
    & { _CommaBrand: "Comma" }

type TwoThreeFreeClass =
    JiPitch<{ rough: 5, direction: Direction.SUPER }>
    & { _TwoThreeFreeClassBrand: "TwoThreeFreeClass" }

type JiPitchByMonzo<T extends RationalTypeParameters = { irrational: false }> = {
    cents?: Cents,
    monzo: Monzo<T>,
    ratio?: Ratio<T>,
}
type JiPitchByRatio<T extends RationalTypeParameters = { irrational: false }> = {
    cents?: Cents,
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
