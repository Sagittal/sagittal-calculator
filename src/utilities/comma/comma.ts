import {computeSopfr} from "./sopfr"
import {computeCommaName} from "./name"
import {computeApotomeSlope} from "./apotomeSlope"
import {computeRatioFromMonzo} from "./ratioFromMonzo"
import {computeCentsFromRatio} from "./centsFromRatio"
import {computeRoughNumberMonzo} from "./rough"
import {computeGpf} from "./gpf"

const analyzeComma = monzo => {
    const apotomeSlope = computeApotomeSlope(monzo)
    const commaName = computeCommaName(monzo)
    const ratio = computeRatioFromMonzo(monzo)
    const fiveRoughSopfr = computeSopfr(computeRoughNumberMonzo(monzo, 5)) // TODO: one day replace this with the improved fiveRoughCommaUnpopularity metric
    const limit = computeGpf(monzo)
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
