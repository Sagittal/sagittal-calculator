import { Integer } from "../math"

type SortOptions = Partial<{
    by: KeyPath,
    descending: boolean,
    precision: Integer,
}>

type KeyPath = (number | string | Array<number | string>) & { _KeyPathBrand: "KeyPath" }

type Obj = (Array<unknown> | Record<any, unknown>) & { [ index: string ]: unknown } & { [ index: number ]: unknown }

type RecordKey<T> = T | (T extends number ? number : T extends string ? string : {})

type Sortable = { [ index: string ]: number }

type Rank<T = void> = number & { _RankBrand: "Rank" } & (T extends void ? {} : { _RankOfBrand: T })

type Ranked<T> = T & { rank: Rank<T> }

enum RankStrategy {
    FRACTIONAL = "fractional",
    COMPETITION = "competition",
    DENSE = "dense",
    ORDINAL = "ordinal",
}

type RankOptions = SortOptions & Partial<{
    strategy: RankStrategy
}>

enum ExtensionBaseType {
    ARRAY = "array",
    OBJECT = "object",
}

type Range<T = number> = Array<T> & { _RangeBrand: "Range" }

type Maybe<T> = T | undefined

export {
    SortOptions,
    Rank,
    Sortable,
    Ranked,
    RankOptions,
    RankStrategy,
    ExtensionBaseType,
    Range,
    Maybe,
    KeyPath,
    Obj,
    RecordKey,
}
