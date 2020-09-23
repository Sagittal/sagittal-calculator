import {
    Direction,
    Integer,
    NumericTypeParameters,
    RationalNumberByMonzo,
    RationalNumberByRatio,
    RationalTypeParameters,
} from "../../math"
import { Cents } from "../types"

type Comma<T extends NumericTypeParameters = {}> =
    JiPitch<T>
    & { _CommaBrand: boolean }

type TwoThreeFreeClass<T extends NumericTypeParameters = {}> =
    JiPitch<Omit<T, "rough" | "direction"> & { rough: 5, direction: Direction.SUPER }>
    & { _TwoThreeFreeClassBrand: boolean }

type JiPitchByMonzo<T extends RationalTypeParameters = { irrational: false }> = RationalNumberByMonzo<T> & {
    cents?: Cents,
}
type JiPitchByRatio<T extends RationalTypeParameters = { irrational: false }> = RationalNumberByRatio<T> & {
    cents?: Cents,
}
type JiPitch<T extends NumericTypeParameters = {}> =
    JiPitchByMonzo<T & { irrational: false }> | JiPitchByRatio<T & { irrational: false }>

type Votes = Integer & { _VotesBrand: boolean }

interface Popularity {
    twoThreeFreeClass: TwoThreeFreeClass,
    votes: Votes,
}

type Apotome = Cents & { _ApotomeBrand: boolean }

export {
    Votes,
    Popularity,
    JiPitch,
    Apotome,
    Comma,
    TwoThreeFreeClass,
}
