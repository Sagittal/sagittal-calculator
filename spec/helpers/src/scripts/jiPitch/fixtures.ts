import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Decimal,
    EMPTY_MONZO,
    Max,
    Monzo,
    Name,
    Prime,
    Quotient,
    Scamon,
    Sopfr,
    Two3FreeClass,
} from "../../../../../src/general"
import {
    ApotomeSlope,
    Ate,
    CommaAnalysis,
    JiPitchAnalysis,
    N2D3P9,
    Two3FreeClassAnalysis,
} from "../../../../../src/sagittal"
import {two3FreeClassFixture} from "../../general/music/fixtures"

const two3FreeClassAnalysisFixture: Two3FreeClassAnalysis = {
    two3FreeClass: two3FreeClassFixture,
    name: "" as Name<Two3FreeClass>,
    two3FreePrimeLimit: 1 as Max<Prime<{rough: 5}>>,
    two3FreeCopfr: 0 as Copfr<{rough: 5}>,
    two3FreeSopfr: 0 as Sopfr<{rough: 5}>,
    n2d3p9: 1 as N2D3P9,
}

const jiPitchFixture: Scamon<{rational: true}> = {
    monzo: EMPTY_MONZO,
} as Scamon<{rational: true}>

const jiPitchAnalysisFixture: JiPitchAnalysis = {
    pitch: jiPitchFixture,
    cents: 0 as Cents,
    decimal: 1 as Decimal<{rational: true}>,
    monzo: [] as unknown[] as Monzo<{rational: true}>,
    quotient: [1, 1] as Quotient<{rational: true}>,
    apotomeSlope: 0 as ApotomeSlope,
    aas: 0 as Abs<ApotomeSlope>,
    ate: 0 as Ate,
    two3FreeClassAnalysis: two3FreeClassAnalysisFixture,
}

const commaFixture: Comma = {
    monzo: EMPTY_MONZO,
} as Comma

const commaAnalysisFixture: CommaAnalysis = {
    pitch: commaFixture,
    name: "" as Name<Comma>,
    cents: 0 as Cents,
    decimal: 1 as Decimal<{rational: true}>,
    monzo: [] as unknown[] as Monzo<{rational: true}>,
    quotient: [1, 1] as Quotient<{rational: true}>,
    apotomeSlope: 0 as ApotomeSlope,
    aas: 0 as Abs<ApotomeSlope>,
    ate: 0 as Ate,
    two3FreeClassAnalysis: two3FreeClassAnalysisFixture,
}

export {
    jiPitchFixture,
    jiPitchAnalysisFixture,
    two3FreeClassAnalysisFixture,
    commaFixture,
    commaAnalysisFixture,
}
