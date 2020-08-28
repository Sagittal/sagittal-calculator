import { Monzo, Name, Pitch, Prime, Ratio, Sopfr } from "../general"
import { N2D3P9 } from "./n2d3p9"

type ApotomeSlope = number & { _ApotomeSlopeBrand: "ApotomeSlope" }

interface Comma extends Pitch {
    apotomeSlope: ApotomeSlope,
    name: Name<Comma>,
    fiveRoughSopfr: Sopfr<5>,
    limit: Prime,
    monzo: Monzo,
    ratio: Ratio,
    n2d3p9: N2D3P9,
}

export {
    ApotomeSlope,
    Comma,
}
