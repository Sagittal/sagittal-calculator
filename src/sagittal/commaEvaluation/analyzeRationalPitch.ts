import {
    abs,
    computeCentsFromMonzo,
    computeCentsFromRatio,
    computeGpf,
    computeRatioFromMonzo,
    computeRoughNumberMonzo,
    computeSopfr,
    computeSuperMonzo,
    FIVE_ROUGHNESS,
    Maybe,
    Monzo,
    Name,
    Prime,
    Sopfr,
} from "../../general"
import { computeSagittalCommaName, MAX_SIZE_CATEGORY_BOUND } from "../commaSizeName"
import { AnalyzedRationalPitch } from "../types"
import { computeApotomeSlope } from "./apotomeSlope"
import { computeN2D3P9, N2D3P9 } from "./n2d3p9"
import { AnalyzeRationalPitchOptions } from "./types"

// TODO: work out whether you think this is really evaluation or analysis

const analyzeRationalPitch = (monzo: Monzo, options: AnalyzeRationalPitchOptions = {}): AnalyzedRationalPitch => {
    const { giveName = true, directed = true, factored = false, abbreviated = true } = options

    const apotomeSlope = computeApotomeSlope(monzo)
    const ratio = computeRatioFromMonzo(monzo)
    const cents = computeCentsFromMonzo(monzo)
    let name: Maybe<Name<AnalyzedRationalPitch>> = undefined
    if (giveName && abs(cents) < MAX_SIZE_CATEGORY_BOUND) {
        name = computeSagittalCommaName(
            monzo,
            { directed, factored, abbreviated },
        )
    }

    const fiveRoughMonzo = computeRoughNumberMonzo(monzo, FIVE_ROUGHNESS)

    const fiveRoughSopfr = computeSopfr(fiveRoughMonzo) as Sopfr<5>
    const limit: Prime = computeGpf(fiveRoughMonzo)
    const n2d3p9: N2D3P9 = computeN2D3P9(computeSuperMonzo(fiveRoughMonzo))

    return {
        cents,
        monzo,
        ratio,
        name,
        limit,
        apotomeSlope,
        fiveRoughSopfr,
        n2d3p9,
    } as AnalyzedRationalPitch
}

export {
    analyzeRationalPitch,
}
