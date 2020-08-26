import { N2D3P9, Popularity, Rank, Votes } from "../../general"

interface PopularRatio {
    presentedRatio: string,
    presentedN2D3P9: N2D3P9,
    symbolSets: string,
    smileys: string,
    votes: Votes,
    popularityRank: Rank<Popularity> | string,
}

export {
    PopularRatio,
}
