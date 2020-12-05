import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Decimal,
    Index,
    Max,
    Maybe,
    Monzo,
    Name,
    NumericProperties,
    Prime,
    Quotient,
    Scamon,
    Sopfr,
    Two3FreeClass,
} from "@sagittal/general"
import {ApotomeSlope, Ate, N2D3P9} from "../badness"
import {SizeCategory} from "../name"

interface JiPitchAnalysisProperties<T extends NumericProperties = {}> {
    apotomeSlope: ApotomeSlope,
    ate: Ate,
    aas: Abs<ApotomeSlope>,
    monzo: Monzo<T & {rational: true}>,
    quotient: Quotient<T & {rational: true}>,
    decimal: Decimal<T & {rational: true}>,
    cents: Cents,
    two3FreeClassAnalysis: Two3FreeClassAnalysis,
}

type CommaAnalysis<T extends NumericProperties = {}, U extends Comma<T> = Comma<T>> =
    JiPitchAnalysisProperties<T>
    & {name: Name<Comma>, sizeCategory: Index<SizeCategory>, pitch: U}

type JiPitchAnalysis<T extends NumericProperties = {}> =
    JiPitchAnalysisProperties<T>
    & {pitch: Scamon<T & {rational: true}>}

type PotentiallyCommaAnalysis<T extends NumericProperties = {}> =
    JiPitchAnalysisProperties<T>
    & {name: Maybe<Name<Comma>>, sizeCategory: Maybe<Index<SizeCategory>>, pitch: Scamon<T & {rational: true}>}

type Two3FreeClassAnalysis = {
    two3FreeClass: Two3FreeClass,
    name: Name<Two3FreeClass>,
    two3FreePrimeLimit: Max<Prime<{rough: 5}>>,
    n2d3p9: N2D3P9,
    two3FreeCopfr: Copfr<{rough: 5}>,
    two3FreeSopfr: Sopfr<{rough: 5}>,
}

export {
    JiPitchAnalysis,
    CommaAnalysis,
    Two3FreeClassAnalysis,
    PotentiallyCommaAnalysis,
}
