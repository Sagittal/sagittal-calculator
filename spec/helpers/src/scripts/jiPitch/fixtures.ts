import { Max, Name, Pitch } from "../../../../../src/general"
import { Monzo, Prime, Ratio, Sopfr } from "../../../../../src/general/math"
import { Cents, TwoThreeFreeClass } from "../../../../../src/general/music"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9 } from "../../../../../src/sagittal/comma"

const jiPitchAnalysisFixture: JiPitchAnalysis = {
    cents: 0 as Cents,
    name: "" as Name<Pitch>,
    monzo: [] as Monzo,
    ratio: [1, 1] as Ratio,
    apotomeSlope: 0 as ApotomeSlope,
    twoThreeFreeSopfr: 0 as Sopfr<{ rough: 5 }>,
    primeLimit: 1 as Max<Prime>,
    n2d3p9: 1 as N2D3P9,
    twoThreeFreeClass: { ratio: [1, 1] as Ratio } as TwoThreeFreeClass,
}

export {
    jiPitchAnalysisFixture,
}
