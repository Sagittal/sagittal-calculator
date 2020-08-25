import { computeCentsFromRatio } from "./centsFromRatio"
import { analyzeComma } from "./comma"
import { APOTOME } from "./constants"
import { computeCopfr } from "./copfr"
import { computeGpf } from "./gpf"
import { invertMonzo } from "./invertMonzo"
import { computeIsRough } from "./isRough"
import { parseMonzo } from "./monzo"
import { computeMonzoFromInteger } from "./monzoFromInteger"
import { computeMonzoFromRatio } from "./monzoFromRatio"
import { computeMonzoInRange } from "./monzoInRange"
import {
    computeN2D3P9,
    computePossibleMonzosFromPrimeExponentExtremas,
    computePrimeExponentExtremasGivenMaximumN2D3P9,
    N2D3P9,
    PrimeExponentExtrema,
} from "./n2d3p9"
import { parseRatio } from "./ratio"
import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { computeRoughNumberMonzo } from "./rough"
import { SIZE_CATEGORY_BOUNDS } from "./sizeCategoryBounds"
import { computeSopf } from "./sopf"
import { computeSopfr } from "./sopfr"
import { computeTrimmedMonzo } from "./trimmedMonzo"
import { ApotomeSlope, Cents, Comma, Copfr, Monzo, Popularity, Position, Sopfr, Votes } from "./types"
export { COMMA_POPULARITIES } from "./popularities"

// TODO: shouldn't about half of this stuff actually be in the math module, not the music module?
//  (found this elsewhere: should monzos really be treated as "music"? they are math... like consider isRough)

export {
    APOTOME,
    Monzo,
    Comma,
    Copfr,
    Sopfr,
    invertMonzo,
    analyzeComma,
    computeMonzoInRange,
    computeCopfr,
    computeSopf,
    computeSopfr,
    computeTrimmedMonzo,
    computeMonzoFromRatio,
    computeMonzoFromInteger,
    parseMonzo,
    parseRatio,
    SIZE_CATEGORY_BOUNDS,
    Position,
    Cents,
    ApotomeSlope,
    N2D3P9,
    computeRoughNumberMonzo,
    computeRatioFromMonzo,
    computeCentsFromRatio,
    computeN2D3P9,
    computeGpf,
    computeIsRough,
    PrimeExponentExtrema,
    computePrimeExponentExtremasGivenMaximumN2D3P9,
    Popularity,
    Votes,
    computePossibleMonzosFromPrimeExponentExtremas,
}
