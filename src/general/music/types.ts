import { Monzo, Ratio } from "../math"
import { Name } from "../types"

type Cents = number & { _CentsBrand: "Cents" }

type ApotomeSlope = number & { _ApotomeSlopeBrand: "ApotomeSlope" }

interface Position {
    name: Name<Position>,
    cents: Cents,
    monzo?: Monzo,
}

type Votes = number & { _VotesBrand: "Votes" }

interface Popularity {
    fiveRoughRatio: Ratio,
    votes: Votes,
}

export {
    ApotomeSlope,
    Position,
    Cents,
    Votes,
    Popularity,
}
