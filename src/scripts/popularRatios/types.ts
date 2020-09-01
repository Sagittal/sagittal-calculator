import { Formatted, Io, Popularity, Rank, Ratio, Votes } from "../../general"
import { N2D3P9 } from "../../sagittal"

interface PopularRatio {
    n2d3p9: N2D3P9,
    formattedRatio: Formatted<Ratio>,
    formattedN2D3P9: Formatted<N2D3P9>,
    symbolSubsets: Io,
    formattedSymbols: Io,
    votes: Votes,
    popularityRank: Rank<Popularity> | Io,
}

export {
    PopularRatio,
}
