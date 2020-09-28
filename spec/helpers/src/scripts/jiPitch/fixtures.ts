import {
    Abs,
    Copfr,
    Direction,
    Exponent,
    Integer,
    Max,
    RationalDecimal,
    RationalNum,
} from "../../../../../src/general"
import { Prime, RationalMonzo, RationalQuotient, Sopfr } from "../../../../../src/general/math"
import { Cents } from "../../../../../src/general/music"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9, TwoThreeFreeClassAnalysis } from "../../../../../src/sagittal/ji"

const twoThreeFreeClassAnalysisFixture: TwoThreeFreeClassAnalysis = {
    twoThreeFreePrimeLimit: 1 as Max<Prime>,
    twoThreeFreeCopfr: 0 as Copfr<{ rough: 5 }>,
    twoThreeFreeSopfr: 0 as Sopfr<{ rough: 5 }>,
    n2d3p9: 1 as N2D3P9,
    quotient: [1, 1] as RationalQuotient<{ rough: 5, direction: Direction.SUPER }>,
} as RationalNum as TwoThreeFreeClassAnalysis

const jiPitchAnalysisFixture: JiPitchAnalysis = {
    cents: 0 as Cents,
    decimal: 1 as RationalDecimal,
    monzo: [] as unknown[] as RationalMonzo,
    quotient: [1, 1] as RationalQuotient,
    apotomeSlope: 0 as ApotomeSlope,
    aas: 0 as Abs<ApotomeSlope>,
    ate: 0 as Abs<Integer & Exponent<3 & Prime>>,
    twoThreeFreeClassAnalysis: twoThreeFreeClassAnalysisFixture,
}

export {
    jiPitchAnalysisFixture,
    twoThreeFreeClassAnalysisFixture,
}
