import { N2D3P9 } from "../../n2d3p9"
import { Exponent, Ratio } from "../math"
import { Count, Name, Prime, Sum } from "../types"

type Cents = number & { _CentsBrand: "Cents" }

type ApotomeSlope = number & { _ApotomeSlopeBrand: "ApotomeSlope" }

type Sopfr<Roughness = void> = Sum<Prime> & (Roughness extends number ? { _RoughnessBrand: Roughness } : {})
type Copfr<Roughness = void> = Count<Prime> & (Roughness extends number ? { _RoughnessBrand: Roughness } : {})

type Monzo<Slice = void, Limit = void> = Array<Exponent<Prime>> & (Slice extends number ? { _MonzoSlice: Slice } : {})

interface Comma extends Position {
    apotomeSlope: ApotomeSlope,
    fiveRoughSopfr: Sopfr<5>,
    limit: Prime,
    monzo: Monzo,
    ratio: Ratio,
    n2d3p9: N2D3P9,

    [ index: string ]: Cents | Monzo | Ratio | Name<Position> | Prime | ApotomeSlope | Sopfr<5> | N2D3P9 | undefined,
}

interface Position {
    name: Name<Position>,
    cents: Cents,
    monzo?: Monzo,
}

interface SizeCategoryOptions {
    abbreviated?: boolean,
}

export {
    ApotomeSlope,
    Monzo,
    Comma,
    SizeCategoryOptions,
    Sopfr,
    Copfr,
    Position,
    Cents,
}
