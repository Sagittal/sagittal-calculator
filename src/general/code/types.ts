type Rank<T = void> = number & { _RankBrand: "Rank" } & (T extends void ? {} : { _RankOfBrand: T })

type SortOptions = Partial<{
    by: Path,
    descending: boolean,
}>

type Path = number | string | Array<number | string>

type Sortable = { [ index: string ]: number}

export {
    SortOptions,
    Rank,
    Sortable,
    Path,
}
