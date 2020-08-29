import { Monzo, Name, Pitch, Prime, Ratio, Sopfr } from "../general"
import { ApotomeSlope, N2D3P9 } from "./commaEvaluation"

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
    Comma,
}
