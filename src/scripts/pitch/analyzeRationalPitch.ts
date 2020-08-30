import {
    computeCentsFromRatio,
    computeGpf,
    computeRatioFromMonzo,
    computeRoughNumberMonzo,
    computeSopfr,
    computeSuperMonzo,
    FIVE_ROUGHNESS,
    Monzo,
    Name,
    Prime,
    Sopfr,
} from "../../general"
import {
    AnalyzedRationalPitch,
    computeApotomeSlope,
    computeN2D3P9,
    computeSagittalRationalPitchName,
    N2D3P9,
} from "../../sagittal"

const analyzeRationalPitch = (monzo: Monzo): AnalyzedRationalPitch => {
    const apotomeSlope = computeApotomeSlope(monzo)
    const name: Name<AnalyzedRationalPitch> = computeSagittalRationalPitchName(monzo)
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
