import { Monzo, Prime, Ratio, Sopfr } from "../math"
import { Extrema, Name } from "../types"
import { N2D3P9 } from "./n2d3p9"

type Cents = number & { _CentsBrand: "Cents" }

type ApotomeSlope = number & { _ApotomeSlopeBrand: "ApotomeSlope" }

type CentsPosition = Partial<Pitch> & {
    cents: Cents,
}

interface Pitch {
    name: Name<Pitch>,
    cents: Cents,
    monzo: Monzo<number>,
    ratio: Ratio<number>,
}

interface Comma extends Pitch {
    apotomeSlope: ApotomeSlope,
    name: Name<Comma>,
    fiveRoughSopfr: Sopfr<5>,
    limit: Prime,
    monzo: Monzo,
    ratio: Ratio,
    n2d3p9: N2D3P9,
}

type Votes = number & { _VotesBrand: "Votes" }

interface Popularity {
    fiveRoughRatio: Ratio,
    votes: Votes,
}

type Zone = Extrema<Cents>

export {
    ApotomeSlope,
    CentsPosition,
    Cents,
    Votes,
    Popularity,
    Comma,
    Zone,
    Pitch,
}
