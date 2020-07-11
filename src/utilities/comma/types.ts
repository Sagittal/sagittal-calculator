import { Cents, Count, Prime, Ratio, Sum } from "../types"
import { ApotomeSlope } from "../../notations/ji/types"

type CommaName = string & { _CommaNameBrand: "CommaName" }

type PrimeExponent = number & { _PrimeExponentBrand: "PrimeExponent" }
type Sopfr<Roughness = void> = Sum<Prime> & (Roughness extends number ? { _RoughnessBrand: Roughness } : {})
type Copfr<Roughness = void> = Count<Prime> & (Roughness extends number ? { _RoughnessBrand: Roughness } : {})

type Monzo<Slice = void, Limit = void> = PrimeExponent[] & (Slice extends number ? { _MonzoSlice: Slice } : {})

// todo: BestMetric<ChunkCount>

interface Comma {
    cents: Cents,
    monzo: Monzo,
    ratio: Ratio,
    commaName: CommaName,
    limit: Prime,
    apotomeSlope: ApotomeSlope,
    fiveRoughSopfr: Sopfr<5>,

    [ index: string ]: Cents | Monzo | Ratio | CommaName | Prime | ApotomeSlope | Sopfr<5>,
}

interface SizeCategoryOptions {
    abbreviated?: boolean,
}

export {
    PrimeExponent,
    Monzo,
    Comma,
    CommaName,
    SizeCategoryOptions,
    Sopfr,
    Copfr,
}
