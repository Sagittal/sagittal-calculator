import {
    Abs,
    Copfr,
    Direction,
    Exponent,
    IntegerDecimal,
    Max,
    Name,
    RationalDecimal,
    Two3FreeClass,
} from "../../../../../src/general"
import { Prime, RationalMonzo, RationalQuotient, Sopfr } from "../../../../../src/general/math"
import { Cents } from "../../../../../src/general/music"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9, Two3FreeClassAnalysis } from "../../../../../src/sagittal/ji"
import { two3FreeClassFixture } from "../../general/music/fixtures"

const two3FreeClassAnalysisFixture: Two3FreeClassAnalysis = {
    ...two3FreeClassFixture,
    name: "" as Name<Two3FreeClass>,
    two3FreePrimeLimit: 1 as Max<Prime<{ rough: 5 }>>,
    two3FreeCopfr: 0 as Copfr<{ rough: 5 }>,
    two3FreeSopfr: 0 as Sopfr<{ rough: 5 }>,
    n2d3p9: 1 as N2D3P9,
    quotient: [1, 1] as RationalQuotient<{ rough: 5, direction: Direction.SUPER }>,
}

const jiPitchAnalysisFixture: JiPitchAnalysis = {
    cents: 0 as Cents,
    decimal: 1 as RationalDecimal,
    monzo: [] as unknown[] as RationalMonzo,
    quotient: [1, 1] as RationalQuotient,
    apotomeSlope: 0 as ApotomeSlope,
    aas: 0 as Abs<ApotomeSlope>,
    ate: 0 as Abs<IntegerDecimal & Exponent<3 & Prime>>,
    two3FreeClassAnalysis: two3FreeClassAnalysisFixture,
}

export {
    jiPitchAnalysisFixture,
    two3FreeClassAnalysisFixture,
}
