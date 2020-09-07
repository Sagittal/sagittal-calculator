import { Cents, Formatted, Io, Monzo, Popularity, Rank, Ratio, Votes } from "../../general"
import { N2D3P9 } from "../../sagittal"

interface SharedPopularRatioContents {
    n2d3p9: N2D3P9,
    formattedRatio: Formatted<Ratio>,
    formattedN2D3P9: Formatted<N2D3P9>,
    votes: Votes,
    popularityRank: Rank<Popularity> | Io,
}

interface PopularRatio extends SharedPopularRatioContents {
    symbolSubsets: Io,
    formattedExactlyNotatingJiSymbols: Io,
}

interface PopularRatioWithBestNotatingComma extends SharedPopularRatioContents {
    centsOfBestNotatingComma: Formatted<Cents>,
    monzoOfBestNotatingComma: Formatted<Monzo>,
    maybeSymbolForBestNotatingComma: Io,
}

export {
    PopularRatio,
    PopularRatioWithBestNotatingComma,
}
