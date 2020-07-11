import { computeSopfr } from "./sopfr"
import { computeCommaName } from "./name"
import { computeApotomeSlope } from "./apotomeSlope"
import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { computeCentsFromRatio } from "./centsFromRatio"
import { computeRoughNumberMonzo } from "./rough"
import { computeGpf } from "./gpf"
import { Comma, CommaName, Monzo } from "./types"
import { Prime } from "../types"

const analyzeComma = (monzo: Monzo): Comma => {
    const apotomeSlope = computeApotomeSlope(monzo)
    const commaName: CommaName = computeCommaName(monzo)
    const ratio = computeRatioFromMonzo(monzo)
    const fiveRoughSopfr = computeSopfr(computeRoughNumberMonzo(monzo, 5)) // TODO: one day replace this with the improved fiveRoughCommaUnpopularity metric
    const limit: Prime = computeGpf(monzo)
    const cents = computeCentsFromRatio(ratio)

    return {
        cents,
        monzo,
        ratio,
        commaName,
        limit,
        apotomeSlope,
        fiveRoughSopfr,
    }
}

export {
    analyzeComma,
}
