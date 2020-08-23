type EnumHash<Enum extends string, ValueType> = { [key in Enum]: ValueType }
type Rank<T = void> = number & { _RankBrand: "Rank" } & (T extends void ? {} : { _RankOfBrand: T })

export {
    EnumHash,
    Rank,
}
