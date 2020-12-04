import {Decimal} from "../math"

type SortOptions = Partial<{
    by: KeyPath,
    descending: boolean,
    precision: Precision,
}>

type KeyPath = (number | string | Array<number | string>) & {_KeyPathBrand: boolean}

type Obj = (Array<unknown> | Record<any, unknown>) & {[index: string]: unknown} & {[index: number]: unknown}

type RecordKey<T> = T | (T extends number ? number : T extends string ? string : {})

type Sortable = {[index: string]: number}

type Rank<T = void> = number & {_RankBrand: boolean} & (T extends void ? {} : {_RankOfBrand: T})

type Ranked<T> = T & {rank: Rank<T>}

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

type Range<T = number> = T[] & {_RangeBrand: boolean}

type Maybe<T> = T | undefined

type Precision = Decimal<{integer: true}> & {_PrecisionBrand: boolean}

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
    Precision,
}
