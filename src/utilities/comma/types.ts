import { Cents, Prime, Ratio } from "../types"
import { ApotomeSlope } from "../../notations/ji/types"

type CommaName = string & { _CommaNameBrand: "CommaName" }

type PrimeExponent = number & { _TermBrand: "PrimeExponent" }

type Monzo<Slice = void, Limit = void> = PrimeExponent[] & (Slice extends number ? { _MonzoSlice: Slice } : {})
// todo: Monzo<5,11>
// BestMetric<ChunkCount>

interface Comma {
    cents: Cents,
    monzo: Monzo,
    ratio: Ratio,
    commaName: CommaName,
    limit: Prime,
    apotomeSlope: ApotomeSlope,
    fiveRoughSopfr: number,

    [ index: string ]: Cents | Monzo | Ratio | CommaName | Prime | ApotomeSlope | number,
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
}
