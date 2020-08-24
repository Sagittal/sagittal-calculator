import { N2D3P9, Popularity, Rank } from "../../general"

interface PopularRatioUnrankedResult {
    presentedRatio: string,
    presentedN2D3P9: N2D3P9,
    symbolSets: string,
    smileys: string,
    actualRank: Rank<Popularity> | undefined,
}

export {
    PopularRatioUnrankedResult,
}
