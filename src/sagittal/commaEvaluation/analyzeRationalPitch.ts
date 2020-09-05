import {
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
import { computeSagittalCommaName } from "../commaSizeName"
import { AnalyzedRationalPitch } from "../types"
import { computeApotomeSlope } from "./apotomeSlope"
import { computeN2D3P9, N2D3P9 } from "./n2d3p9"

// TODO: work out whether you think this is really evaluation or analysis

const analyzeRationalPitch = (
    monzo: Monzo,
    options: { giveName?: boolean, directed?: boolean, factored?: boolean, abbreviated?: boolean } = {},
): AnalyzedRationalPitch => {
    const { giveName = true, directed = true, factored = false, abbreviated = true } = options
    const apotomeSlope = computeApotomeSlope(monzo)

    let name: Maybe<Name<AnalyzedRationalPitch>> = undefined
    if (giveName) {
        name = computeSagittalCommaName(
            monzo,
            { directed, factored, abbreviated },
        )
    }

    const ratio = computeRatioFromMonzo(monzo)
    const fiveRoughMonzo = computeRoughNumberMonzo(monzo, FIVE_ROUGHNESS)
    const fiveRoughSopfr = computeSopfr(fiveRoughMonzo) as Sopfr<5>
    const limit: Prime = computeGpf(monzo)
    const n2d3p9: N2D3P9 = computeN2D3P9(computeSuperMonzo(fiveRoughMonzo))
    const cents = computeCentsFromRatio(ratio)

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
