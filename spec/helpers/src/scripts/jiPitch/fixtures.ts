import { Copfr, Direction, Max, Name, Pitch } from "../../../../../src/general"
import { Monzo, Prime, Ratio, Sopfr } from "../../../../../src/general/math"
import { Cents } from "../../../../../src/general/music"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9, TwoThreeFreeClassAnalysis } from "../../../../../src/sagittal/ji"

const twoThreeFreeClassAnalysisFixture: TwoThreeFreeClassAnalysis = {
    twoThreeFreePrimeLimit: 1 as Max<Prime>,
    twoThreeFreeCopfr: 0 as Copfr<{ rough: 5 }>,
    twoThreeFreeSopfr: 0 as Sopfr<{ rough: 5 }>,
    n2d3p9: 1 as N2D3P9,
    ratio: [1, 1] as Ratio<{ rough: 5, direction: Direction.SUPER }>,
}

const jiPitchAnalysisFixture: JiPitchAnalysis = {
    cents: 0 as Cents,
    name: "" as Name<Pitch>,
    monzo: [] as Monzo,
    ratio: [1, 1] as Ratio,
    apotomeSlope: 0 as ApotomeSlope,
    twoThreeFreeClassAnalysis: twoThreeFreeClassAnalysisFixture,
}

export {
    jiPitchAnalysisFixture,
    twoThreeFreeClassAnalysisFixture,
}
