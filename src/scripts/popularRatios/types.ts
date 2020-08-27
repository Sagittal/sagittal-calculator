import { Formatted, N2D3P9, Popularity, Rank, Ratio, Votes } from "../../general"

interface PopularRatio {
    n2d3p9: N2D3P9,
    formattedRatio: Formatted<Ratio>,
    formattedN2D3P9: Formatted<N2D3P9>,
    symbolSets: string,
    smileys: string,
    votes: Votes,
    popularityRank: Rank<Popularity> | string,
}

export {
    PopularRatio,
}
