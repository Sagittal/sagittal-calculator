type Rank<T = void> = number & { _RankBrand: "Rank" } & (T extends void ? {} : { _RankOfBrand: T })

export {
    Rank,
}
