import { Formatted, N2D3P9, Popularity, Rank, Ratio, Votes } from "../../general"

interface PopularRatio {
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
