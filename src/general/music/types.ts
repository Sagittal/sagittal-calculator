import { Monzo, Prime, Ratio, Sopfr } from "../math"
import { Extrema, Name } from "../types"
import { N2D3P9 } from "./n2d3p9"

type Cents = number & { _CentsBrand: "Cents" }

type ApotomeSlope = number & { _ApotomeSlopeBrand: "ApotomeSlope" }

interface Position {
    name: Name<Position>,
    cents: Cents,
    monzo?: Monzo,
}

// TODO: RATIO LINK I'm concerned about this... like maybe I want a Comma to be anything that's been given a Name<Comma>
//  like maybe Position -> Pitch
//  and this is just a JiPitch
//  and Position should not have monzo? at all
//  but I think that JiPitch should not extend a Pitch...
//  because I want them to all be grouped together as different facets of the same thing
//  could it be the other way around, that JiPitch has Cents? that feels right
//  does this "Position" or "Pitch" interface even need to exist?
//  maybe see if you can delete that stuff off

interface Comma {
    apotomeSlope: ApotomeSlope,
    cents: Cents,
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
    Position,
    Cents,
    Votes,
    Popularity,
    Comma,
    Zone,
}
