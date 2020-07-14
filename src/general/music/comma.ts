import { Name, Prime } from "../types"
import { computeApotomeSlope } from "./apotomeSlope"
import { computeCentsFromRatio } from "./centsFromRatio"
import { computeGpf } from "./gpf"
import { computeCommaName } from "./name"
import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { computeRoughNumberMonzo } from "./rough"
import { computeSopfr } from "./sopfr"
import { Comma, Monzo, Position, Sopfr } from "./types"

const analyzeComma = (monzo: Monzo): Comma => {
    const apotomeSlope = computeApotomeSlope(monzo)
    const name: Name<Position> = computeCommaName(monzo)
    const ratio = computeRatioFromMonzo(monzo)
    const fiveRoughSopfr = computeSopfr(computeRoughNumberMonzo(monzo, 5)) as Sopfr<5> // TODO: one day replace this with the improved fiveRoughCommaUnpopularity metric
    const limit: Prime = computeGpf(monzo)
    const cents = computeCentsFromRatio(ratio)

    return {
        cents,
        monzo,
        ratio,
        name,
        limit,
        apotomeSlope,
        fiveRoughSopfr,
    }
}

export {
    analyzeComma,
}
